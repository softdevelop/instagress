<?php

class DashboardController extends Controller 
{
	// set layouts variable again
	public $layout = '//layouts/main';


	public function filters()
    {
        return array(
            'accessControl',
        );
    }
    
    public function accessRules()
    {
        return array(
            array('allow', // allow authenticated users to access all actions
                'users'=>array('*'),
                'expression' => array('DashboardController', 'onlyAdminAccess')
            ),
            array('deny'),
        );
    }


	/**
	 * assign theme variable, returnUlr property again
	 * @return 
	 */
	public function init()
	{
		Yii::app()->theme = 'backend';
		parent::init();
	}


	public function actionIndex()
	{
		$dataProvider = new CActiveDataProvider('User', array(
            'criteria' => array(
            	'select' => '*',
            	'order'  => 'created DESC'		
        	),
            'pagination' => array(
                'pageSize' => 20,
            ),
        ));


		$this->render('index', array(
				'dataProvider' => $dataProvider,
			));
	}


	public function statusFil($data, $row)
	{
		if($data->status == 1)
			return 'Verified';
		elseif($data->status == 0)
			return 'Unverified';
		else
			return 'Suppended';
	}

	 /**
     * only allow users is admin that access to this controller
     * @return boolean
     */
	public static function onlyAdminAccess()
	{
		if(isset(Yii::app()->adminUser->role) && Yii::app()->adminUser->role === 'admin')
		{
			return true;
		}
		return false;
	}


	/**
	 * using to edit a specified user
	 * @param  int $id it's user id
	 */
	public function actionUpdate($id)
	{
		$user = User::model()->findByPk((int) $id);
		$oldPass = $user->password;
		$user->repassword = $user->password;

		if(!empty($_POST['User']))
		{
			$user->attributes = $_POST['User']; 
			
			if($_POST['User']['password'] != $oldPass)
			{
				$user->password   = $_POST['User']['password'];
				$user->repassword = $_POST['User']['repassword'];
			}

			if($user->validate()) 
			{
				$user->save();
				$user->repassword = md5($_POST['User']['repassword']);
				Yii::app()->adminUser->setFlash('success','Updated user\'s account successful');
			}
			else
			{
				Yii::app()->adminUser->setFlash('error','Updated user\'s account unsuccessful');
			}
		}

		$this->render('_form', array(
				'model' => $user,
			));
	}


	public function actionDelete($id)
	{
		$user = User::model()->findByPk((int) $id);

		//delete all portfolio of specified company
		$criteria = new CDbCriteria();
		$idcompany = (int)$user->company->id;
		$criteria->condition = "company_id=$idcompany";
		Portfolio::model()->deleteAll($criteria);

		// delelte company 
		Company::model()->deleteByPk($idcompany);

		// delete user
		$user->delete();
		
	}
}