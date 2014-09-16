<?php
$strWDPath = dirname(__FILE__) . '/../components';
Yii::setPathOfAlias('widgets', $strWDPath . '/widgets');
Yii::setPathOfAlias('helpers', $strWDPath . '/helpers');
Yii::setPathOfAlias('bootstrap', dirname(__FILE__) . "/../extensions/bootstrap");
Yii::setPathOfAlias('frontend', dirname(__FILE__) . "/../../themes/frontend");
Yii::setPathOfAlias('logo', dirname(__FILE__) . "/../../themes/frontend/wwwroot/images/company/logo");