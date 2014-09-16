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
        <title>Sortfolio Admin</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <!-- BEGIN GLOBAL MANDATORY STYLES -->       
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>	
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/style-metro.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/style.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/style-responsive.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/uniform.default.css" rel="stylesheet" type="text/css"/>
        <link href="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/css/content.custom.css" rel="stylesheet" type="text/css"/>
        <!-- END GLOBAL MANDATORY STYLES -->
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
                    <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                    <a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
                        <img src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/assets/img/menu-toggler.png" alt="" />
                    </a>          
                    <!-- END RESPONSIVE MENU TOGGLER -->            
                    <!-- BEGIN TOP NAVIGATION MENU -->              
                    <ul class="nav pull-right">
                        <!-- BEGIN USER LOGIN DROPDOWN -->
                        <li class="dropdown user">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <img alt="" src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/assets/img/avatar1_small.jpg" />
                                <span class="username">Bob Nilson</span>
                                <i class="icon-angle-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="<?php echo Yii::app()->createUrl('admin/logout'); ?>"><i class="icon-key"></i> Log Out</a></li>
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
                                    <?php echo CHtml::link('<i class="icon-home"></i>Dashboard', array('/admin/dashboard'), array("title" => "Dashboard", "class" => "tip-bottom")); ?>
                                    <i class="icon-angle-right"></i>
                                </li>

                                <?php
                                if (isset($this->categoryTitle) && $this->categoryTitle) {
                                    $categoryUrl = "/";
                                    if (isset($this->module))
                                        $categoryUrl .= $this->module->id . '/';
                                    $categoryUrl .= $this->ID . "/admin";
                                    echo '<li>';
                                    echo CHtml::link($this->categoryTitle, array($categoryUrl), array("title" => $this->categoryTitle, "class" => "tip-bottom"));
                                    echo '</li>';
                                }
                                ?>
                                <li>
                                    <?php if (isset($this->pageTitle)) { ?><a href="#" class="current"><?php echo $this->pageTitle; ?></a><?php } ?>

                                </li>
                            </ul>
                            <!-- END PAGE TITLE & BREADCRUMB-->
                        </div>
                    </div>
                    <!-- END PAGE HEADER-->

                    <!-- CONTENT -->

                    <div class="row-fluid">
                        <?php 
                        foreach(Yii::app()->adminUser->getFlashes() as $key => $flash)
                        {
                            if($key === 'error')
                            {
                                echo '<div class="error">' . $flash . '</div>';
                            }
                            elseif($key === 'notice')
                            {
                                echo '<div class="notice">' . $flash . '</div>';
                            }
                            else
                            {
                                echo '<div class="success">' . $flash . '</div>';
                            }
                        }
                    ?>
                        <?php echo $content; ?>
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
        $am = Yii::app()->getAssetManager();
        $am->publish(dirname(__FILE__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'wwwroot' . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR . 'jquery.min.js');

        // ...then register
        $cs = Yii::app()->clientScript;
        $cs->registerCoreScript('jquery');
        ?>
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/jquery.migrate.min.js" type="text/javascript"></script>
        <!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/jquery.uniform.min.js" type="text/javascript" ></script>
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/jquery.slimscroll.min.js" type="text/javascript"></script>  
        <!-- END CORE PLUGINS -->
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/select2.min.js" type="text/javascript"></script>  
        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN PAGE LEVEL SCRIPTS -->
        <script src="<?php echo Yii::app()->request->baseUrl . WWWROOT_BACKEND; ?>/js/app.js" type="text/javascript"></script>
        <!-- END PAGE LEVEL SCRIPTS -->  
        <script>
            jQuery(document).ready(function() {
                App.init(); // initlayout and core plugins
            });
        </script>
    </body>
    <!-- END BODY -->
</html>