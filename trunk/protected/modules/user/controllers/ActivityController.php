<?php
	class ActivityController extends FController 
	{
		public function actionIndex( $instagram_id = 0 ) {

			if ( !$instagram_id && !Yii::app()->user->isGuest ) {
				$user = User::model()->findByPk(Yii::app()->user->id);
				$instagram_id = $user->instagram_id; 
				$via_sign_in = true;
			}
			else {
				$user = User::model()->find('instagram_id=:instagram_id', array(
						':instagram_id' => $instagram_id
					));
				$via_sign_in = false;
			}
			$this->render('index', array(
					'instagram_id' => $instagram_id,
					'user' => $user,
					'via_sign_in' => $via_sign_in
				));
		}

	}
?>