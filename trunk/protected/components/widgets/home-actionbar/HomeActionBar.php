<?php

class HomeActionBar extends CWidget 
{

    public function init() 
    {
        parent::init();
    }

    public function run() 
    {
		$budget = Collection::model()->findAllByAttributes(array('type'=>Collection::BUDGET));
        $this->render('actionbar', array(
			'budget'=>$budget,
        ));
    }

}
