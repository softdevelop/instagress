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
     * @author softdevelop
     * @action index
     * @description show the dashboard to manage  acount and company informations
     */
    public function actionIndex()
    {

        $user =  User::model()->findByPk(Yii::app()->user->id);
        $models = $user->child();
        // initialize Instagram
        $instagram = Yii::app()->instagram;
        $loginUrl = $instagram->getLoginUrl();
        
        $this->render('index', array(
            'models' => $models,
            'loginUrl' => $loginUrl
        ));
    }

    public function actionRemove($instagram_id = 0) {

        $user = User::model()->findByPk(Yii::app()->user->id);
        $user_child_id = User::instagramIdToId($instagram_id);

        UserChild::model()->deleteAll('user_id=:user_id AND user_child_id=:user_child_id', array(
                ':user_child_id' => $user_child_id,
                ':user_id' => $user->id
            ));
        $this->redirect('/user/account');
        

    }

}

