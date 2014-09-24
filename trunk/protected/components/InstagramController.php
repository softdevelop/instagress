<?php
	class InstagramController extends Controller {

		public $instagram;
		public $_access_token;
		public $instagram_id;
	 	/**
     	 * @var string the default layout for the controller view. Defaults to 'column1',
 	 	 * meaning using a single column layout. See 'protected/views/layouts/column1.php'.
     	*/
	    public $layout = '//layouts/column2';
    
		public function init() {
			// initilize Instagram object
			$this->instagram = Yii::app()->instagram;
			// get access_tocken
			$this->getAccessToken();
			// set access_tocken
			$this->instagram->setAccessToken($this->_access_token);
		}

		public function getAccessToken() {

			if (!isset($_GET['instagram_id']) && (!Yii::app()->user->isGuest)) {
				$user = User::model()->findByPk(Yii::app()->user->id);
				$this->instagram_id  = $user->instagram_id;
				
			} else {
				$user = User::model()->find('instagram_id=:instagram_id', array(
						':instagram_id' => (int) $_GET['instagram_id']
					));
				$this->instagram_id  = $user->instagram_id;
			}

			return $this->_access_token = $user->access_token;
		}
	}