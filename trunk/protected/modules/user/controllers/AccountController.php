<?php

class AccountController extends FController
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
                'users'=>array('@'),
            ),
            array('deny'),
        );
    }
	/**
     * @author HOANGNGUYEN
     * @action index
     * @description show the dashboard to manage  acount and company informations
     */
    public function actionIndex()
    {
        $user =  User::model()->findByPk(Yii::app()->user->id);
        //echo "<pre>"; print_r($user->child);die('13');
        //$model = UserChild::model()->findByAttributes(array('user_id'=>Yii::app()->user->id));
        //$model = UserChild::model()->findByAttributes(array('user_id'=>Yii::app()->user->id));
        $model=$user->child();
        //echo "<pre>"; print_r($user->child);die('13');

        $this->render('index', array(
            "models"=>$model,
        ));
    }

    /**
     * @author HOANGNGUYEN
     * @action Edit
     * @description using to edit account information
     */
    public function actionEdit()
    {
        $model = User::model()->findByPk(Yii::app()->user->id);
        $model->password = '';
        $model->repassword = '';
        if (isset($_POST['User'])) 
        {
            $model->attributes = $_POST['User'];
            $model->modified = date('Y-m-d H:i:s');
            if($model->save(true, array('firstname', 'lastname', 'email', 'modified')))
            {
                
                if(isset($_POST['User']['password']))
                {
                    $model->password = $_POST['User']['password'];
                    $model->repassword = $_POST['User']['repassword'];
                    if($model->validate(array('password')))
                    {
                        $model->update();
                    }
                    else
                    {
                        $model->password = '';
                        $model->repassword = '';
                        $this->render('edit', array(
                            'model' => $model
                        ));
                        exit();
                    }
                }
                Yii::app()->user->setFlash('success', 'Your account was changed successfull');
                $this->redirect('/user/account');
            }
        } 
        $this->render('edit', array(
            'model' => $model
        ));
    }


    public function actionAdd() {
        
        $instagram = Yii::app()->instagram;
        $loginUrl = $instagram->getLoginUrl();

        $this->render('//site/login', array(
            'loginUrl'=>$loginUrl,
        ));        
    }

}

