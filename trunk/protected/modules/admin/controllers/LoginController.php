<?php

class LoginController extends Controller
{
	// set layouts variable again
	public $layout = '//layouts/login';

	/**
	 * assign theme variable, returnUlr property again
	 * @return [type] [description]
	 */
	public function init()
	{
		Yii::app()->theme = 'backend';
		parent::init();
	}

	public function actionIndex()
	{
		if (!defined('CRYPT_BLOWFISH') || !CRYPT_BLOWFISH)
            throw new CHttpException(500, "This application requires that PHP was compiled with Blowfish support for crypt().");
        if(Yii::app()->user->isGuest)
        {
            $model = new LoginForm;

            // if it is ajax validation request
            if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
                echo CActiveForm::validate($model);
                Yii::app()->end();
            }

            // collect user input data
            if (isset($_POST['LoginForm'])) {
                $model->attributes = $_POST['LoginForm'];
                // validate user input and redirect to the previous page if valid
                if ($model->validate() && $model->loginAdmin())
                {
                    $this->redirect('/admin/dashboard');
                }
            }
            // display the login form
            $this->render('login', array('model' => $model));
        }
        else
        {
            $this->redirect('/');
        }
	}

}