<?php
	class ProfileController extends InstagramController
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
			$user_info = $this->instagram->getUser($this->instagram_id);
			$media = $this->instagram->getUserMedia($this->instagram_id);
		
			$this->render('index', array(
				'user_info' => @$user_info,    
				'medias' => @$media->data
			));
		}
	}
?>