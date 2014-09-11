<?php
class RegisterController extends Controller {
	
	public $layout='//layouts/column2';
	/**
	 * @return array action filters
	 */
	public function filters() {
		return array(
			'accessControl', // perform access control for CRUD operations
		);
	}

	/**
	 * Specifies the access control rules.
	 * This method is used by the 'accessControl' filter.
	 * @return array access control rules
	 */
	public function accessRules() {
		return array(
			array('allow',  // allow all users to access 'index' and 'view' actions.
				'actions' => array('index'),
				'users' => array('*'),
			),
			array('deny'),
		);
	}

	public function actionIndex() {

		$user = new User();
		if (!empty($_POST['User'])) {
			$user->attributes = $_POST['User'];
			if ($user->save()) {
				Yii::app()->user->login(UserIdentity::createAuthenticatedIdentity($user->username, $user->id),0);
				$this->redirect('/user/account');
			}
				
			
		}
		
		$this->render('index', array(
			'model' => $user
		));

	}
}