<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sortfolio Admin | Login Page</title>
	<!-- blueprint CSS framework -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/select2_metro.css" />
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/css/pages/login.css" rel="stylesheet" type="text/css"/>
</head>
<body class="login">
	<div class="logo">
	</div>
	<div class="content">
		<?php echo $content; ?>
	</div>
	<div class="copyright">
		2013 &copy; Soft Develop VN. Admin Dashboard Template.
	</div>
	
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/twitter-bootstrap-hover-dropdown.min.js" type="text/javascript" ></script>
	<!--[if lt IE 9]>
	<script src="assets/plugins/excanvas.min.js"></script>
	<script src="assets/plugins/respond.min.js"></script>  
	<![endif]-->   
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery.validate.min.js" type="text/javascript"></script>	
	<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/select2.min.js"></script>     
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<!--script src="< ?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/app.js" type="text/javascript"></script-->
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/login.js" type="text/javascript"></script> 
	<!-- END PAGE LEVEL SCRIPTS --> 
	<script>
		jQuery(document).ready(function() {     
			//App.init();
			Login.init();
		});
	</script>
</body>
</html>