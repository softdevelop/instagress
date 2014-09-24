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
	<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND; ?>/js/jquery-1.11.0.js"></script>
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

	<div class="" id="">
		<header>
			<?php if(Yii::app()->user->isGuest) { ?>
			
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
			
			<?php } ?>
			<div class="container">
				<a href="/site/index" class="logo"></a>
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
		
		<?php echo $content; ?>

		<footer>
			<div class="container">
				<div class="row">
					<div class="span4">
						<a href="/site/index" class="logo-footer"></a>
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
			<?php 
			$form = $this->beginWidget('CActiveForm', array(
				'id' => 'account-signup-form', 
				'method' => 'post'
				));

				?>
				<div class="control-group field-wrap" data-field="email">
					<input type="text" name="User[email]" id="User_email" class="input-block-level input-icon input-icon-email" placeholder="Email" autofocus/>
					<span class="help-block text-error email-error"></span>
				</div>
				<div class="control-group field-wrap" data-field="password">
					<input type="password" name="User[password]" id="User_password" class="input-block-level input-icon input-icon-password" placeholder="Password (random by default)"/>
					<span class="help-block text-error password-error"></span>
				</div>
				<div>
					<button id='submit' type="submit" class="btn btn-plain btn-success mb20" data-loading-text="Signing up...">Sign up</button>
				</div>
				<div class="mb10">
					By signing up, you agree to the <a href="/site/terms" target="_blank">Terms of Service</a>.
				</div>
				<div>
					Already have an account?
					<a href="#" class="link-ajax" data-popup-close="#popup-account-signup" data-popup-open="#popup-account-login">Log in</a>
				</div>
				
				<?php $this->endWidget(); ?>
				<script type="text/javascript">
				$(document).ready(function() {
					$('#account-signup-form').submit(function(e) {
						$.ajax({
							url : '/user/register/index',
							type : 'POST',
							data : $(this).serializeArray(),
							success : function(data) {
								$('#account-signup-form .email-error, #account-signup-form .password-error').text('');
								var json = JSON.parse(data);
								if (json.errors == '')
									window.location = "http://<?php echo $_SERVER['HTTP_HOST'];?>/user/account";
								if (json.errors.email != undefined)
									$('#account-signup-form .email-error').text(json.errors.email[0]);
								if (json.errors.password != undefined )
									$('#account-signup-form .password-error').text(json.errors.password[0]);
							}
						});
						e.preventDefault();
						
					});
				});
				</script>
			</div>

			<div id="popup-account-login" class="popup popup-medium">
				<h3>Log in to the New Dashboard</h3>
				<a href="#" class="btn-close" data-popup-close="#popup-account-login"></a>
				<div class="alerts">
					<div class="alert alert-error"></div>
					<div class="alert alert-success"></div>
				</div>
				<form action="/user/auth/login" id="account-login-form" class="form-horizontal mb0" method="post">
					<div class="control-group field-wrap" data-field="email">
						<input type="text" name="LoginForm[email]" id="inpAccountLoginEmail"
						class="input-block-level input-icon input-icon-email"
						placeholder="Email" autofocus/>
						<span class="help-block text-error email-error"></span>
					</div>
					<div class="control-group field-wrap" data-field="password">
						<input type="password" name="LoginForm[password]" id="inpAccountLoginPassword"
						class="input-block-level input-icon input-icon-password"
						placeholder="Password"/>
						<span class="help-block text-error password-error"></span>
					</div>
					<div>
						<button type="submit" class="btn btn-plain btn-success mb20">Log in</button>
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

				<script type="text/javascript">
				$(document).ready(function() {
					$('#account-login-form').submit(function(e) {
						$.ajax({
							url : '/user/auth/login',
							type : 'POST',
							data : $(this).serializeArray(),
							success : function(data) {
								$('#account-login-form .email-error, #account-login-form .password-error').text('');
								var json = JSON.parse(data);
								if (json.errors == '')
									window.location = "http://<?php echo $_SERVER['HTTP_HOST'];?>/user/account";
								if (json.errors.email != undefined)
									$('#account-login-form .email-error').text(json.errors.email[0]);
								if (json.errors.password != undefined )
									$('#account-login-form .password-error').text(json.errors.password[0]);
							}
						});
						e.preventDefault();
						
					});
				});
				</script>
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
				<form action="" id="account-password-reset-form" class="form-horizontal form-ajax mb0" method="post">
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