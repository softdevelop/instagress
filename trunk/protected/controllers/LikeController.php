<?php
	class LikeController extends Controller
	{
		// layout for controller
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
		public function actionIndex()
		{
			$instagram = Yii::app()->instagram;
			$likes = $instagram->getUserLikes(100000);
			//echo "<pre>"; var_dump($likes);die('123');
			$this->render('index', array(
				'result' => $likes	
			));
			
		}
		public function actionAutolike()
		{
			$instagram = Yii::app()->instagram;
			$likes = $instagram->searchUser('khuongtran5');
			echo "<pre>"; var_dump($likes->data);die('123');
		}
	}