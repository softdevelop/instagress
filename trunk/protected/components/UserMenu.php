<?php

Yii::import('zii.widgets.CPortlet');

class UserMenu extends CPortlet
{
	public function init()
	{
		parent::init();
	}

	protected function renderContent()
	{
		$this->render('userMenu', array(
				'isInstagramUser' => User::model()->isInstagram(Yii::app()->user->id),
				'user' => User::getCurrentUser()
			));
	}

}