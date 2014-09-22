<?php

class SiteController extends Controller
{
	public $layout='column2';

	/**
	 * @return array action filters
	 */
	public function filters()
	{
		return array(
			'accessControl', // perform access control for CRUD operations
		);
	}

	/**
	 * Specifies the access control rules.
	 * This method is used by the 'accessControl' filter.
	 * @return array access control rules
	 */
	public function accessRules()
	{
		return array(
			array('allow',  // allow all users to access 'index' and 'view' actions.
				'actions' => array('index', 'login'),
				'users' => array('*'),
			),
			array('deny',  // deny all users
				'actions' => array('login'),
				'users' => array('@'),
			),
		);
	}
	/**
	 * Declares class-based actions.
	 */
	public function actions()
	{
		return array(
			// captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
			),
			// page action renders "static" pages stored under 'protected/views/site/pages'
			// They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
			),
		);
	}

	/**
	 * This is the action to handle external exceptions.
	 */
	public function actionError()
	{
	    if($error=Yii::app()->errorHandler->error)
	    {
	    	if(Yii::app()->request->isAjaxRequest)
	    		echo $error['message'];
	    	else
	        	$this->render('error', $error);
	    }
	}

	/**
	 * Displays the contact page
	 */
	public function actionContact()
	{
		$model=new ContactForm;
		if(isset($_POST['ContactForm']))
		{
			$model->attributes=$_POST['ContactForm'];
			if($model->validate())
			{
				$headers="From: {$model->email}\r\nReply-To: {$model->email}";
				mail(Yii::app()->params['adminEmail'],$model->subject,$model->body,$headers);
				Yii::app()->user->setFlash('contact','Thank you for contacting us. We will respond to you as soon as possible.');
				$this->refresh();
			}
		}
		$this->render('contact',array('model'=>$model));
	}

	/**
	 * Displays the login page
	 */
	public function actionLogin()
	{
		if (Yii::app()->user->id)
			$this->redirect('/site/index');		
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();

		$this->render('login',array(
			'loginUrl'=>$loginUrl,

		));
	}
	/**
	 * running when login success
	 */
	public function actionSuccess()
	{
		$instagram = Yii::app()->instagram;
		// receive OAuth code parameter
		$code = $_GET['code'];

		// check whether the user has granted access
		if (isset($code)) {
		  	// receive OAuth token object
		  	$data = $instagram->getOAuthToken($code);
		  	$username  = $data->user->username;
		  	$user_id = $data->user->id;
		  	
		 	// store user access token
		  	$instagram->setAccessToken($data);

		  	// now you have access to all authenticated user methods
		  	$result = $instagram->getUserMedia();
		  	if ($data)
		  	{
		  		// save this information to db
			  	$user = new User('instagram_login');
			  	$user->username = $username;
			  	$user->instagram_id = $data->user->id;
			  	$user->access_token = $instagram->getAccessToken($data);
			  	$user->full_name = $data->user->full_name;	
			  	// check if instagram_id is unique then save to db
			  	$user = $user->zeroUnique();

			  	if (!isset(Yii::app()->user->id))
	  			  	// login and redirect to home page
			  		Yii::app()->user->login(UserIdentity::createAuthenticatedIdentity($user->username, $user->id), 0);
			  	
		  		$this->redirect('/user/account');
		  	}
		  	else
		  	{
		  		throw new CHttpException('There are some issues with login on instagram.');
		  	}

		} else {

		  	// check whether an error occurred
		  	if (isset($_GET['error'])) {
		    	echo 'An error occurred: ' . $_GET['error_description'];
		  	}

		}

		$this->render('success', array(
			'result' => $result,
			'username' => $username
		));
	}
	/**
	 * Logs out the current user and redirect to homepage.
	 */
	public function actionLogout()
	{
		Yii::app()->user->logout();
		$this->redirect(Yii::app()->homeUrl);
	}

	public function actionIndex() 
	{
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('index',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
	public function actionAbout()
	{
		
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('about',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
	public function actionTerms()
	{
		
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('terms',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
	public function actionPrices()
	{
			
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('prices',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
	public function actionGuide()
	{
		
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('guide',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
	public function actionBlog()
	{
			
		$instagram = Yii::app()->instagram;
		$loginUrl = $instagram->getLoginUrl();
		
		$this->render('blog',array(
			'loginUrl'=>$loginUrl,
			
		));
	}
}
