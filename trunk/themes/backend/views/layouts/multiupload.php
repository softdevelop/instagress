<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 2.3.2
Version: 1.4
Author: KeenThemes
Website: http://www.keenthemes.com/preview/?theme=metronic
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>Soft Develop CMS</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->       
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>	
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/css/content.custom.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/jquery1.7.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND; ?>/js/bootstrap.min.js" type="text/javascript"></script>
	<link rel="shortcut icon" href="favicon.ico" />
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="page-header-fixed">
	<!-- BEGIN HEADER -->   
	<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="navbar-inner">
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<a class="brand" href="<?php echo Yii::app()->createUrl('user/admin/dashboard');?>">
				<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/logo.png" alt="logo" />
				</a>
				<!-- END LOGO -->
				<!-- BEGIN RESPONSIVE MENU TOGGLER -->
				<a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
				<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/menu-toggler.png" alt="" />
				</a>          
				<!-- END RESPONSIVE MENU TOGGLER -->            
				<!-- BEGIN TOP NAVIGATION MENU -->              
				<ul class="nav pull-right">
					<!-- BEGIN NOTIFICATION DROPDOWN -->   
					<li class="dropdown" id="header_notification_bar">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
						<i class="icon-warning-sign"></i>
						<span class="badge">6</span>
						</a>
						<ul class="dropdown-menu extended notification">
							<li>
								<p>You have 14 new notifications</p>
							</li>
							<li>
								<ul class="dropdown-menu-list scroller" style="height:250px">
									<li>
										<a href="#">
										<span class="label label-success"><i class="icon-plus"></i></span>
										New user registered. 
										<span class="time">Just now</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-important"><i class="icon-bolt"></i></span>
										Server #12 overloaded. 
										<span class="time">15 mins</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-warning"><i class="icon-bell"></i></span>
										Server #2 not responding.
										<span class="time">22 mins</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-info"><i class="icon-bullhorn"></i></span>
										Application error.
										<span class="time">40 mins</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-important"><i class="icon-bolt"></i></span>
										Database overloaded 68%. 
										<span class="time">2 hrs</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-important"><i class="icon-bolt"></i></span>
										2 user IP blocked.
										<span class="time">5 hrs</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-warning"><i class="icon-bell"></i></span>
										Storage Server #4 not responding.
										<span class="time">45 mins</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-info"><i class="icon-bullhorn"></i></span>
										System Error.
										<span class="time">55 mins</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="label label-important"><i class="icon-bolt"></i></span>
										Database overloaded 68%. 
										<span class="time">2 hrs</span>
										</a>
									</li>
								</ul>
							</li>
							<li class="external">
								<a href="#">See all notifications <i class="m-icon-swapright"></i></a>
							</li>
						</ul>
					</li>
					<!-- END NOTIFICATION DROPDOWN -->
					<!-- BEGIN INBOX DROPDOWN -->
					<li class="dropdown" id="header_inbox_bar">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
						<i class="icon-envelope"></i>
						<span class="badge">5</span>
						</a>
						<ul class="dropdown-menu extended inbox">
							<li>
								<p>You have 12 new messages</p>
							</li>
							<li>
								<ul class="dropdown-menu-list scroller" style="height:250px">
									<li>
										<a href="inbox.html?a=view">
										<span class="photo"><img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar2.jpg" alt="" /></span>
										<span class="subject">
										<span class="from">Lisa Wong</span>
										<span class="time">Just Now</span>
										</span>
										<span class="message">
										Vivamus sed auctor nibh congue nibh. auctor nibh
										auctor nibh...
										</span>  
										</a>
									</li>
									<li>
										<a href="inbox.html?a=view">
										<span class="photo"><img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar3.jpg" alt="" /></span>
										<span class="subject">
										<span class="from">Richard Doe</span>
										<span class="time">16 mins</span>
										</span>
										<span class="message">
										Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh
										auctor nibh...
										</span>  
										</a>
									</li>
									<li>
										<a href="inbox.html?a=view">
										<span class="photo"><img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar1.jpg" alt="" /></span>
										<span class="subject">
										<span class="from">Bob Nilson</span>
										<span class="time">2 hrs</span>
										</span>
										<span class="message">
										Vivamus sed nibh auctor nibh congue nibh. auctor nibh
										auctor nibh...
										</span>  
										</a>
									</li>
									<li>
										<a href="inbox.html?a=view">
										<span class="photo"><img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar2.jpg" alt="" /></span>
										<span class="subject">
										<span class="from">Lisa Wong</span>
										<span class="time">40 mins</span>
										</span>
										<span class="message">
										Vivamus sed auctor 40% nibh congue nibh...
										</span>  
										</a>
									</li>
									<li>
										<a href="inbox.html?a=view">
										<span class="photo"><img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar3.jpg" alt="" /></span>
										<span class="subject">
										<span class="from">Richard Doe</span>
										<span class="time">46 mins</span>
										</span>
										<span class="message">
										Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh
										auctor nibh...
										</span>  
										</a>
									</li>
								</ul>
							</li>
							<li class="external">
								<a href="inbox.html">See all messages <i class="m-icon-swapright"></i></a>
							</li>
						</ul>
					</li>
					<!-- END INBOX DROPDOWN -->
					<!-- BEGIN TODO DROPDOWN -->
					<li class="dropdown" id="header_task_bar">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
						<i class="icon-tasks"></i>
						<span class="badge">5</span>
						</a>
						<ul class="dropdown-menu extended tasks">
							<li>
								<p>You have 12 pending tasks</p>
							</li>
							<li>
								<ul class="dropdown-menu-list scroller"  style="height:250px">
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">New release v1.2</span>
										<span class="percent">30%</span>
										</span>
										<span class="progress progress-success ">
										<span style="width: 30%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">Application deployment</span>
										<span class="percent">65%</span>
										</span>
										<span class="progress progress-danger progress-striped active">
										<span style="width: 65%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">Mobile app release</span>
										<span class="percent">98%</span>
										</span>
										<span class="progress progress-success">
										<span style="width: 98%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">Database migration</span>
										<span class="percent">10%</span>
										</span>
										<span class="progress progress-warning progress-striped">
										<span style="width: 10%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">Web server upgrade</span>
										<span class="percent">58%</span>
										</span>
										<span class="progress progress-info">
										<span style="width: 58%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">Mobile development</span>
										<span class="percent">85%</span>
										</span>
										<span class="progress progress-success">
										<span style="width: 85%;" class="bar"></span>
										</span>
										</a>
									</li>
									<li>
										<a href="#">
										<span class="task">
										<span class="desc">New UI release</span>
										<span class="percent">18%</span>
										</span>
										<span class="progress progress-important">
										<span style="width: 18%;" class="bar"></span>
										</span>
										</a>
									</li>
								</ul>
							</li>
							<li class="external">
								<a href="#">See all tasks <i class="m-icon-swapright"></i></a>
							</li>
						</ul>
					</li>
					<!-- END TODO DROPDOWN -->               
					<!-- BEGIN USER LOGIN DROPDOWN -->
					<li class="dropdown user">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
						<img alt="" src="<?php echo Yii::app()->request->baseUrl.WWWROOT_BACKEND;?>/assets/img/avatar1_small.jpg" />
						<span class="username">Bob Nilson</span>
						<i class="icon-angle-down"></i>
						</a>
						<ul class="dropdown-menu">
							<li><a href="extra_profile.html"><i class="icon-user"></i> My Profile</a></li>
							<li><a href="page_calendar.html"><i class="icon-calendar"></i> My Calendar</a></li>
							<li><a href="inbox.html"><i class="icon-envelope"></i> My Inbox <span class="badge badge-important">3</span></a></li>
							<li><a href="#"><i class="icon-tasks"></i> My Tasks <span class="badge badge-success">8</span></a></li>
							<li class="divider"></li>
							<li><a href="javascript:;" id="trigger_fullscreen"><i class="icon-move"></i> Full Screen</a></li>
							<li><a href="extra_lock.html"><i class="icon-lock"></i> Lock Screen</a></li>
							<li><a href="<?php echo Yii::app()->createUrl('user/logout');?>"><i class="icon-key"></i> Log Out</a></li>
						</ul>
					</li>
					<!-- END USER LOGIN DROPDOWN -->
					<!-- END USER LOGIN DROPDOWN -->
				</ul>
				<!-- END TOP NAVIGATION MENU --> 
			</div>
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- BEGIN SIDEBAR -->
		<div class="page-sidebar nav-collapse collapse">
			
			<?php //echo $this->renderPartial('//common/_left-menu');?>
			<?php $this->beginContent('//common/_leftMenuDefault'); ?>
				<?php echo $content; ?>
			<?php $this->endContent(); ?>
			
		</div>
		<!-- END SIDEBAR -->
		<!-- BEGIN PAGE -->
		<div class="page-content">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<div id="portlet-config" class="modal hide">
				<div class="modal-header">
					<button data-dismiss="modal" class="close" type="button"></button>
					<h3>Widget Settings</h3>
				</div>
				<div class="modal-body">
					Widget settings form goes here
				</div>
			</div>
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<!-- BEGIN PAGE CONTAINER-->
			<div class="container-fluid">
				<!-- BEGIN PAGE HEADER-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN STYLE CUSTOMIZER -->
						<div class="color-panel hidden-phone">
							<div class="color-mode-icons icon-color"></div>
							<div class="color-mode-icons icon-color-close"></div>
							<div class="color-mode">
								<p>THEME COLOR</p>
								<ul class="inline">
									<li class="color-black current color-default" data-style="default"></li>
									<li class="color-blue" data-style="blue"></li>
									<li class="color-brown" data-style="brown"></li>
									<li class="color-purple" data-style="purple"></li>
									<li class="color-grey" data-style="grey"></li>
									<li class="color-white color-light" data-style="light"></li>
								</ul>
								<label>
									<span>Layout</span>
									<select class="layout-option m-wrap small">
										<option value="fluid" selected>Fluid</option>
										<option value="boxed">Boxed</option>
									</select>
								</label>
								<label>
									<span>Header</span>
									<select class="header-option m-wrap small">
										<option value="fixed" selected>Fixed</option>
										<option value="default">Default</option>
									</select>
								</label>
								<label>
									<span>Sidebar</span>
									<select class="sidebar-option m-wrap small">
										<option value="fixed">Fixed</option>
										<option value="default" selected>Default</option>
									</select>
								</label>
								<label>
									<span>Footer</span>
									<select class="footer-option m-wrap small">
										<option value="fixed">Fixed</option>
										<option value="default" selected>Default</option>
									</select>
								</label>
							</div>
						</div>
						<!-- END BEGIN STYLE CUSTOMIZER -->    
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Dashboard <small>statistics and more</small>
						</h3>
						<ul class="breadcrumb">
							<li>
								<?php echo CHtml::link('<i class="icon-home"></i>Dashboard',array('/user/admin/dashboard'), array("title"=>"Dashboard", "class"=>"tip-bottom")); ?>
								<i class="icon-angle-right"></i>
							</li>
							
								<?php 

								if(isset($this->categoryTitle) && $this->categoryTitle) {
									$categoryUrl = "/";
									if(isset($this->module)) $categoryUrl .= $this->module->id.'/';
									$categoryUrl .= $this->ID."/admin";
									echo '<li>';
									echo CHtml::link($this->categoryTitle,array($categoryUrl), array("title"=>$this->categoryTitle, "class"=>"tip-bottom")); 
									echo '</li>';
								}
								?>
							<li>
								<?php if(isset($this->pageTitle)) { ?><a href="#" class="current"><?php echo $this->pageTitle; ?></a><?php }?>

							</li>
						</ul>
						<!-- END PAGE TITLE & BREADCRUMB-->
					</div>
				</div>
				<!-- END PAGE HEADER-->

				<!-- CONTENT -->

				<div class="row-fluid">
					<?php echo $content;?>
				</div>	

				<!-- END CONTENT -->

			</div>
			<!-- END PAGE CONTAINER-->    
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->
	<!-- BEGIN FOOTER -->
	<div class="footer">
		<div class="footer-inner">
			2013 &copy; Metronic by keenthemes.
		</div>
		<div class="footer-tools">
			<span class="go-top">
			<i class="icon-angle-up"></i>
			</span>
		</div>
	</div>
	<!-- END FOOTER -->
	<?php 
	//$baseScriptUrl = Yii::app()->assetManager->publish(dirname(__FILE__) . '/../../wwwroot'); 
	//Yii::app()->getClientScript()->registerScriptFile($baseScriptUrl.'/js/jquery.min.js');
	// $cs = Yii::app()->clientScript;
	// $cs->scriptMap = array(
		// 'jquery.js' => Yii::app()->request->baseUrl.WWWROOT_BACKEND.'/js/jquery.js',
		// 'jquery.yii.js' => Yii::app()->request->baseUrl.WWWROOT_BACKEND.'/js/jquery.min.js',
	// );
	// $cs->registerCoreScript('jquery');
	/*
	$am = Yii::app()->getAssetManager();
	$am->publish(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'wwwroot'.DIRECTORY_SEPARATOR.'js'.DIRECTORY_SEPARATOR.'jquery.min.js');

	// ...then register
	$cs=Yii::app()->clientScript;
	$cs->registerCoreScript('jquery');
	*/
	?>
</body>
<!-- END BODY -->
</html>