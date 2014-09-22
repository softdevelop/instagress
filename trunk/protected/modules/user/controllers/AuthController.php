<?php

class AuthController extends FController 
{
    public function init()
    {
        parent::init();
    }
    
    public function actionLogin() 
    {
        if (!defined('CRYPT_BLOWFISH') || !CRYPT_BLOWFISH)
            throw new CHttpException(500, "This application requires that PHP was compiled with Blowfish support for crypt().");
        if(Yii::app()->user->isGuest)
        {
            $model = new LoginForm;

            // collect user input data
            if (isset($_POST['LoginForm'])) {
                $model->attributes = $_POST['LoginForm'];
                $model->email = $_POST['LoginForm']['email'];
               
                if ($model->validate() && $model->login()) {
                    echo json_encode(array('errors' => ''));
                } else {
                    $errors = $model->getErrors();
                    echo json_encode(array('errors' => $errors));
                }
            }
        }
        else
        {
            $this->redirect('/user/account');
        }
    }
    
    /**
     * when a user logged out, the all session of the user will be removed
     * and the site will be redirected to hom page
     */
    public function actionLogout()
    {
        Yii::app()->user->logout();
        $this->redirect(Yii::app()->homeUrl);
    }
    
    /**
     * @author HOANGNGUYEN
     * @param string $hashcode 
     */
    public function actionRecover($hashcode = NULL)
    {

        $model = new RecoverForm();
        // if hashcode is not exists
        if(!isset($hashcode))
        {
            if(isset($_POST['RecoverForm']))
            {
                $model->attributes = $_POST['RecoverForm'];
                if($model->validate(array('email')))
                {
                    $user = User::model()->findByAttributes(array('email' => trim($model->email)));
                    // send mail code here
                    if(isset($user))
                    {
                        $this->SendMail('recover password', $user->email, $user,"/user/auth/recover/{$user->hash}", 'recover');
                        Yii::app()->user->setFlash('success', 'recover password successfull');
                        $this->redirect(Yii::app()->homeUrl);
                    }
                    else
                    {
                        Yii::app()->user->setFlash('error', 'Email is not exits');
                    }
                    
                }
            }
            $this->render('recover', array(
                'model' => $model,
            ));
        }
        else
        {
            $user = User::model()->findByAttributes(array('hash' => trim($hashcode)));
            
            if(isset($user))
            {
                if(isset($_POST['RecoverForm']))
                {
                    $model->attributes = $_POST['RecoverForm'];
                    $user->password = $_POST['RecoverForm']['password'];
                    if($model->validate(array('password')))
                    {
                        $user->hash = $this->rand_string();
                        $user->update(array('hash', 'password'));
                        Yii::app()->user->setFlash('success', 'Your password was updated');
                        $this->redirect(Yii::app()->homeUrl);
                    }
                }
                $this->render('_formRecover', array(
                    'model' => $model
                ));
            }
            else
            {
                Yii::app()->user->setFlash('error', 'Your account is not exist or the link expire');
                $this->redirect(Yii::app()->homeUrl);
            }
            
        }
        
    }
    
    /**
     * @author HOANGNGUYEN
     * @param string $hashcode
     */
    
    public function actionVerify($hashcode = NULL)
    {
        if(isset($hashcode))
        {
            $user = User::model()->findByAttributes(array('hash' => trim($hashcode)));
            if(isset($user))
            {
                $user->hash = $this->rand_string();
                $user->status = 1;
                $user->update(array('hash', 'status'));
                Yii::app()->user->setFlash('success', 'Your account was registried successfully');
                $this->redirect(Yii::app()->homeUrl);
            }
            else
            {
                Yii::app()->user->setFlash('error', 'Your account not exist or the link expire');
                $this->redirect(Yii::app()->homeUrl);
            }
        }
        else
        {
            $model = new VerifyForm();
            if(isset($_POST['VerifyForm']))
            {
                $model->email = $_POST['VerifyForm']['email'];
                if($model->validate())
                {
                    $user = User::model()->findByAttributes(array('email' => trim($model->email)));
                    if(isset($user))
                    {
                        
                        $this->SendMail('Verification', $user->email, $user,"/user/auth/verify/{$user->hash}", 'verification');
                        Yii::app()->user->setFlash('success', 'verification successfull');
                        $this->redirect(Yii::app()->homeUrl);
                    }
                    else
                    {
                        Yii::app()->user->setFlash('error', 'Email is not exits');
                    }
                }
                
            }
            
            $this->render('_formVerify', array(
                'model' => $model
            ));
        }
    }
}
