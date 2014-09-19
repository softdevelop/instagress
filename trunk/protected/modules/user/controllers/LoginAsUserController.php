<?php 

class LoginAsUserController  extends Controller
{
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
                'expression' => array('LoginAsUserController', 'onlyAdminAccess')
            ),
            array('deny'),
        );
    }

    /**
     * [onlyAdminAccess description]
     * @return [type] [description]
     */
    public function onlyAdminAccess()
	{
		if(isset(Yii::app()->adminUser->role) && Yii::app()->adminUser->role === 'admin')
		{
			return true;
		}
		return false;
	}

	/**
	 * [actionIndex description]
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function actionIndex($id)
	{
		$model = new LoginForm();
		if($model->loginAsUser((int)$id))
		{
			$this->redirect('/');
		}
		else
		{
			die('123');
		}
	}
}