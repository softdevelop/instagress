<?php
	class LikesController extends FController
	{

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
				array('allow', // allow authenticated users to access all actions
					'users'=>array('@'),
				),
				array('deny',  // deny all users
					'users'=>array('*'),
				),
			);
		}
		/**
		 * show all like of specific user
		 * @return array likes
		 */
		public function actionIndex($instagram_id = 0)
		{
			if ( !$instagram_id && !Yii::app()->user->isGuest ) {
				$user = User::model()->findByPk(Yii::app()->user->id);
				$instagram_id = $user->instagram_id; 
			}
			else {
				$user = User::model()->find('instagram_id=:instagram_id', array(
						':instagram_id' => $instagram_id
					));
			}

			$instagram = Yii::app()->instagram;
			$instagram->setAccessToken($user->access_token);
			
			$likes = $instagram->getUserLikes(100000);
			$this->render('index', array(
				'result' => $likes	
			));
			
		}

	}	