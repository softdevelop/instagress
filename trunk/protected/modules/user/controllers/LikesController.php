<?php
	class LikesController extends InstagramController
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
			$likes = $this->instagram->getUserLikes(100000);
			$this->render('index', array(
				'result' => $likes	
			));
			
		}

	}	