<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/bootstrap.min.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/bootstrap-responsive.min.css" media="print" />
	
	<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery.min.js">	</script>
	<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/bootstrap.min.js">	</script>
</head>
<body>
	
	<div class="main_login container ">
		<?php echo $content; ?>
	</div>
	
</body>
</html>