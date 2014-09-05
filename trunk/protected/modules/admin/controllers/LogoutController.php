<?php

class LogoutController extends Controller
{
	public function actionIndex()
	{
		Yii::app()->adminUser->logout();
		$this->redirect('/admin/login');
	}
}