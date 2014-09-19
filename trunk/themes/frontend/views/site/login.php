<?php include($_SERVER['DOCUMENT_ROOT']."/themes/frontend/views/site/menuTop.php"); ?>
<ul class="">
  <li><img src="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/images/instagram.png" alt="Instagram logo"></li>
  <li>
  	
    <a class="login" href="<?php echo $loginUrl ?>">» Login with Instagram</a>
    <h4>Use your Instagram account to login.</h4>
  </li>
</ul>