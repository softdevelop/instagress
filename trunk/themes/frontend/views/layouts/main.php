<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->

	
	<link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/css/bootstrap.minc069.css?v=114" media="all"/>
	<link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/css/jquery.fancyboxc069.css?v=114" media="all"/>
	<link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/css/commonc069.css?v=114" media="all"/>
	<link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/css/mainc069.css?v=114" media="all"/>
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="" id="">
	<header>
		

		

		
			<div class="dashboard-row">
				<div class="container">
					<div class="dashboard-row-flag">New!</div>
					<div class="dashboard-row-content">
						We're happy to introduce the New Dashboard for multiple accounts.
						Create your personal Instagress account to start using it.
					</div>
					<div class="dashboard-row-controls">
						<button class="btn btn-plain btn-danger" data-popup-open="#popup-account-signup">Create Account</button>
					</div>
				</div>
			</div>
		

		<div class="container">
			<a href="index" class="logo"></a>
			<ul class="menu">
	
		
		<li class="active">
			<a href="/site/about" >About</a>
			
		</li>
	
		
		<li class="">
			<a href="/site/terms" >Terms</a>
			
		</li>
	
		
		<li class="">
			<a href="/site/prices" >Prices</a>
			
		</li>
	
		
		<li class="">
			<a href="/site/guide" >Guide</a>
			
		</li>
		<li class="">
			<a href="/site/blog" >Blog</a>
			
		</li>
		<li class="">
			<a href="#" data-popup-open="#popup-support">Support</a>
			
		</li>
		<?php if(Yii::app()->user->isGuest) { ?>
		<li>
			<a href="#" class="login" data-popup-open="#popup-login">
				<i class="fa fa-instagram fa-lg"></i> Sign in
			</a>
		</li>
		<?php } ?>
</ul>

		</div>
	</header>
	<?php /*
	<div id="header">
		<div id="logo"><?php echo CHtml::encode(Yii::app()->name); ?></div>
	</div><!-- header -->
	
	<div id="mainmenu">
		<?php $this->widget('zii.widgets.CMenu',array(
			'items'=>array(
				array('label'=>'Home', 'url'=>array('/site/index')),
				array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
				array('label'=>'Contact', 'url'=>array('/site/contact')),
				array('label'=>'Register', 'url'=>array('/user/register'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
			),
		)); ?>
	</div><!-- mainmenu -->

	<?php $this->widget('zii.widgets.CBreadcrumbs', array(
		'links'=>$this->breadcrumbs,
	)); ?><!-- breadcrumbs -->
	
	*/ ?>
	<?php if(!Yii::app()->user->isGuest) { ?>
	<div id="popup-account-change" class="popup popup-medium">
	<h3>Change account</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-account-change"></a>

	<strong>Current account:</strong>
	<div class="clearfix">
		<span class="account-change">
			<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/default-avatar.png"
				 alt="softdevelopinc"/>
			softdevelopinc
		</span>
	</div>

	

	<hr/>
	<div class="color-gray -text-center">
		<strong>New!</strong>
		Want to get more benefits from Instagress? Have more than one Instagram account?<br/><br/>
		<a href="#" class="link-ajax"
		   data-popup-close="#popup-account-change"
		   data-popup-open="#popup-account-signup">Create your personal Instagress account</a>
		to get access to the New Dashboard for multiple accounts.

		<!--
		<button class="btn btn-plain btn-success"
				data-popup-open="#popup-login">Add account</button>
		-->
	</div>
</div>

<div id="popup-account-email" class="popup" style="width: 360px;">
	<h3>Set email</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-account-email"></a>
	<div class="account-email-info mb20">
		Add an email to your account to be informed
		when your Activity will be automatically stopped
		because of reached limits or while errors occur.
	</div>
	<div class="mb20">
		You can add the same email to multiple accounts.
	</div>
	
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="/account/email/set" class="form-horizontal form-ajax mt20" method="post" data-fields-persist="true">
		<div class="control-group field-wrap" data-field="email">
			<label class="control-label text-align-left" for="inpAccountEmail">Email:</label>
			<div class="controls">
				<input type="text" name="email" id="inpAccountEmail" class="input-block-level"
					   placeholder="Your email" value=""/>
				<span class="help-block text-error hidden"></span>
			</div>
		</div>
		<div class="control-group">
			<div class="controls">
				<button type="submit"
						class="btn btn-plain btn-success"
						data-loading-text="Set up...">Set</button>
				<a href="/account/email/remove"
				   class="btn btn-link link-gray"
				   data-confirm="Are you sure to remove email?">Remove</a>
			</div>
		</div>
	</form>
</div>


<div class="usermenu">
	<div class="container">
		<a href="/profile" class="avatar">
			<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/default-avatar.png"
				 alt="softdevelopinc"/>
		</a>

		<ul class="menu account-actions pull-left">
			<li class="name">
				<a href="/profile">softdevelopinc</a>
			</li>

			
				<li>
					<a href="#" data-popup-open="#popup-account-change">
						Change account
						
					</a>
				</li>
			

			
			<li>
				<a href="#" class="btn-account-email" data-popup-open="#popup-account-email">
					Set email
				</a>

				
			</li>
			

			
				<li>
					<a href="/site/logout">Log out</a>
				</li>
			

			
		</ul>

		<ul class="menu account-pages pull-right">
			
				
				<li class="active">
					<a href="/activity" >Activity</a>
				</li>
			
				
				<li class="">
					<a href="/profile" >Profile</a>
				</li>
			
				
				<li class="">
					<a href="/like" >Likes</a>
				</li>
			
		</ul>
	</div>
</div>



	

	

<div id="popup-start" class="popup">
	<h3>How to start?</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-start"></a>
	<div class="mb20">
		If you want to get a lot of new likes, comments, and followers,
		you should be doing the same for others. We help you to be more active!
	</div>
	<div class="start-step step1">
		<span class="step-num">1.</span>
		Select what do you want to do: like, comment, follow or unfollow.
		To do this, press on the button next to each action, so its color
		changes to red.
	</div>
	<div class="start-step step2">
		<span class="step-num">2.</span>
		Our settings will help you to control your activity depends on your needs.
		<div class="step-hint well well-small">
			You may hover your mouse over the question mark next
			to each settings to learn more about it:
			<span class="help-tip help-tip-inline"
				  title="Help tip"
				  data-content="Here you can find a description of each setting.">?</span>
		</div>
	</div>
	<div class="start-step step3">
		<span class="step-num">3.</span>
		We have already added some tags and comments for easy start.
		Just push the red button!
	</div>
	<div class="mb20">
		Find more information about all our settings in our
		<a href="/guide">Guide</a>!
	</div>
	<div class="text-align-center">
		<button class="btn btn-plain" data-popup-close="#popup-start">Let's go</button>
	</div>
</div>

<div id="popup-time" class="popup">
	<h3>How time works?</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-time"></a>
	<div class="time-help help1">
		&mdash; Time is counting down only when your Activity is started
		and you can use it whenever you want.
	</div>
	<div class="time-help help2">
		&mdash; If you wish to continue using our service, please make
		a purchase. You can refill your time even if it's not over yet.
	</div>
	<div class="time-help help3">
		&mdash; Choose the Activity time package from our competitive
		range that best suits your needs.<br/>
		<!-- Begin Official PayPal Seal -->
		<a href="https://www.paypal.com/us/verified/pal=paypal%40instagress%2ecom" target="_blank">
			<img src="https://www.paypal.com/en_US/i/icon/verification_seal.gif"
				 width="80" alt="Official PayPal Seal"/></a>
		<!-- End Official PayPal Seal -->
		<img src="img/time-help-paypal.png" alt="Payments by PayPal"/>
	</div>
	<div class="text-align-center">
		<button class="btn btn-plain" data-popup-close="#popup-time">I got it</button>
	</div>
</div>
	<?php } ?>
	<?php echo $content; ?>
	<?php /*
	<div id="footer">
		Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php echo Yii::powered(); ?>
	</div><!-- footer -->
	*/ ?>

	<footer>
		<div class="container">
			<div class="row">
				<div class="span4">
					<a href="index.html" class="logo-footer"></a>
				</div>
				<div class="span4">
					<a href="mailto:support@instagress.com" class="contact-email">
						<i class="fa fa-envelope fa-lg mr5"></i> support@instagress.com
					</a>
				</div>
				<div class="span4">
					<div class="social-icons clearfix">
						<a href="https://www.facebook.com/instagress"
						   class="icon-fb" target="_blank" title="Follow us on Facebook"></a>

						<a href="https://twitter.com/instagress"
						   class="icon-tw" target="_blank" title="Follow us on Twitter"></a>

						<a href="http://instagress.tumblr.com/"
						   class="icon-tb" target="_blank" title="Follow us on Tumblr"></a>
					</div>
				</div>
			</div>
			<div class="row mt20">
				<div class="span4">
					<span class="copyright">&copy; 2013-2014</span>
				</div>
				<div class="span8">
					<ul class="menu">
	
		
		<li class="active">
			<a href="about" >About</a>
			
		</li>
	
		
		<li class="">
			<a href="terms" >Terms</a>
			
		</li>
	
		
		<li class="">
			<a href="prices" >Prices</a>
			
		</li>
	
		
		<li class="">
			<a href="guide" >Guide</a>
			
		</li>
	
		
		<li class="">
			<a href="blog" >Blog</a>
			
		</li>
	
		
		<li class="">
			<a href="#" data-popup-open="#popup-support">Support</a>
			
		</li>
	

	
	<li>
		<a href="#" class="login" data-popup-open="#popup-login">
			<i class="fa fa-instagram fa-lg"></i> Sign in
		</a>
	</li>
	
</ul>

				</div>
			</div>
		</div>
	</footer>

	<div id="popup-alert" class="popup popup-small">
	<a href="#" class="btn-close" data-popup-close="#popup-alert"></a>
	<div class="text"></div>
</div>

	<div id="popup-support" class="popup popup-medium">
	<h3>Support</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-support"></a>
	<div class="color-gray mb20">
		Please use the form below if you have any questions, comments
		or would like to give us some feedback. Your opinion is very important to us!
	</div>
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="https://instagress.com/contact" class="form-horizontal form-ajax mt20" method="post">
		<input type="hidden" name="token" value=""/>
		<div class="control-group field-wrap" data-field="subject">
			<label class="control-label text-align-left" for="inpSupportSubject">Subject:</label>
			<div class="controls">
				<select name="subject" id="inpSupportSubject" class="input-block-level" autofocus>
					
						<option value="question">Question</option>
					
						<option value="error">Error</option>
					
						<option value="idea">Idea</option>
					
						<option value="payment">Payment</option>
					
						<option value="security">Security</option>
					
						<option value="other">Other</option>
					
				</select>
				<span class="help-block text-error hidden"></span>
			</div>
		</div>
		<div class="control-group field-wrap" data-field="email">
			<label class="control-label text-align-left" for="inpSupportEmail">Email:</label>
			<div class="controls">
				
				<input type="text" name="email" id="inpSupportEmail"
					   class="input-block-level" placeholder="Your email"
					   value=""/>
				<span class="help-block text-error hidden"></span>
			</div>
		</div>
		<div class="control-group field-wrap" data-field="username">
			<label class="control-label text-align-left" for="inpSupportUsername">Username:</label>
			<div class="controls">
				<input type="text" name="username" id="inpSupportUsername"
					   class="input-block-level" placeholder="Your Instagram username (optional)"
					   value=""/>
				<span class="help-block text-error hidden"></span>
			</div>
		</div>
		<div class="control-group field-wrap" data-field="message">
			<label class="control-label text-align-left" for="inpSupportMessage">Message:</label>
			<div class="controls">
				<textarea name="message" id="inpSupportMessage" rows="4"
						  class="input-block-level" placeholder="Your message"></textarea>
				<span class="help-block text-error hidden"></span>
			</div>
		</div>
		<div class="control-group">
			<div class="controls">
				<button type="submit" class="btn btn-plain btn-success" data-loading-text="Sending...">Send</button>
			</div>
		</div>
	</form>
</div>

	
	
	<div id="popup-login-help" class="popup popup-medium">
	<h3>Sign in help</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-login-help"></a>
	<div class="mb20">
		<p>
			Having trouble logging in with your Instagram credentials?
			These can be the possible reasons:
		</p>
		<ul class="nice-list">
			<li>
				<strong>Wrong username or password</strong><br/>
				Check that you have not misspelled your username or password.
			</li>
			<li>
				<strong>Instagram reseted your password</strong><br/>
				In rare cases Instagram can reset your password when you trying
				to login on the third-party website. Go to your email (associated
				with your Instagram account) and check your inbox/spam for a message
				from Instagram with password reset link.
			</li>
			<li>
				<strong>Integrity checkpoint</strong><br/>
				This error means that Instagram is asking you to verify your account
				by entering a captcha. You must be logged in on Instagram website
				with this Instagram account to do it.
			</li>
		</ul>
		<p>
			If you continue to have login problems, please
			<a href="#" class="link-ajax"
			   data-popup-open="#popup-support">contact&nbsp;us</a>.
		</p>
	</div>
	<div class="text-align-center">
		<button class="btn btn-plain" data-popup-close="#popup-login-help">Close</button>
	</div>
</div>

	<div id="popup-account-signup" class="popup popup-medium">
	<h3>Sign up for the New Dashboard</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-account-signup"></a>
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="https://instagress.com/account/signup" id="account-signup-form" class="form-horizontal form-ajax mb0" method="post">
		<div class="control-group field-wrap" data-field="email">
			<input type="text" name="username" id="inpAccountSignupUserName"
				   class="input-block-level input-icon input-icon-username"
				   placeholder="User name" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div class="control-group field-wrap" data-field="email">
			<input type="text" name="email" id="inpAccountSignupEmail"
				   class="input-block-level input-icon input-icon-email"
				   placeholder="Email" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div class="control-group field-wrap" data-field="password">
			<input type="password" name="password" id="inpAccountSignupPassword"
				   class="input-block-level input-icon input-icon-password"
				   placeholder="Password (random by default)"/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div>
			<button type="submit"
					class="btn btn-plain btn-success mb20"
					data-loading-text="Signing up...">Sign up</button>
		</div>
		<div class="mb10">
			By signing up, you agree to the <a href="/site/terms" target="_blank">Terms of Service</a>.
		</div>
		<div>
			Already have an account?
			<a href="#" class="link-ajax"
			   data-popup-close="#popup-account-signup"
			   data-popup-open="#popup-account-login">Log in</a>
		</div>
		
	</form>
</div>

	<div id="popup-account-login" class="popup popup-medium">
	<h3>Log in to the New Dashboard</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-account-login"></a>
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="https://instagress.com/account/login" id="account-login-form" class="form-horizontal form-ajax mb0" method="post">
		<div class="control-group field-wrap" data-field="email">
			<input type="text" name="email" id="inpAccountLoginEmail"
				   class="input-block-level input-icon input-icon-email"
				   placeholder="Email" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div class="control-group field-wrap" data-field="password">
			<input type="password" name="password" id="inpAccountLoginPassword"
				   class="input-block-level input-icon input-icon-password"
				   placeholder="Password"/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div>
			<button type="submit"
					class="btn btn-plain btn-success mb20"
					data-loading-text="Logging in...">Log in</button>
		</div>
		<div class="mb10">
			<a href="#" class="link-ajax" data-popup-open="#popup-account-password-reset">Password reset</a>
		</div>
		<div>
			Don't have an account?
			<a href="#" class="link-ajax"
			   data-popup-close="#popup-account-login"
			   data-popup-open="#popup-account-signup">Sign up</a>
		</div>
		
	</form>
</div>

	<div id="popup-account-password-reset" class="popup popup-medium">
	<h3>Password reset</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-account-password-reset"></a>
	<div class="color-gray mb20">
		If you forgot your password, request a new one by entering your email address in this form.
	</div>
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="https://instagress.com/account/password/reset" id="account-password-reset-form" class="form-horizontal form-ajax mb0" method="post">
		<div class="control-group field-wrap" data-field="email">
			<input type="text" name="email" id="inpAccountPasswordResetEmail"
				   class="input-block-level input-icon input-icon-email"
				   placeholder="Email" value="" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div>
			<button type="submit"
					class="btn btn-plain btn-success"
					data-loading-text="Sending request...">Send request</button>
		</div>
	</form>
</div>

</div><!-- page -->
	
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/jquery-1.11.0.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/jquery.cookie.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/jquery.fancybox.packc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/jquery.maskedinput.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/underscore.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/bootstrap.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/json2.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/helper.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/popup.minc069.js?v=114"></script>
	<script src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/js/main.minc069.js?v=114"></script>
</body>
</html>