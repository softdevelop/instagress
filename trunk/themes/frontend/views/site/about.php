
<section class="page about">
	<div class="container">
		<h1 class="title-big">About</h1>
		<div class="row">
	<div class="span6">
		<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/about-img-mainc069.png"/>
	</div>
	<div class="span6">
		<h3>
			Instagress is designed to attract attention to your Instagram account
			and gain more comments, likes, and followers.
		</h3>
		<p>
			When we started Instagress, it was just made for our personal needs.
			We wanted to get more Instagram followers without spending the time
			doing it all by hand, so we developed these tools in order to make
			the process simple and effective.
		</p>
		<p>
			Many people go the route of buying followers to make their Instagram
			look popular. However, these are only fake accounts, which don't
			interact with your account in any meaningful sort of way. With
			Instagress, you will generate a following of REAL people who are
			actually interested in what you're doing.
		</p>
		<p>
			We work with celebrities, start-up's, brand names, anything! Everyone
			knows the benefits of having a large number of followers, and we can
			help you. With Instagress, you will quickly rise the ranks into
			Instagram stardom!
		</p>
	</div>
</div>
<h4>Screenshots of our service</h4>
<div class="row">
	<div class="span4">
		<a href="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/screens/activity-1c069.png?v=114" class="fancybox" rel="screens">
			<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/about-img-1c069.png?v=114" alt="Instagress Activity"/>
		</a>
	</div>
	<div class="span4">
		<a href="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/screens/activity-2c069.png?v=114" class="fancybox" rel="screens">
			<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/about-img-2c069.png?v=114" alt="Instagress Activity Settings"/>
		</a>
	</div>
	<div class="span4">
		<a href="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/screens/profilec069.png?v=114" class="fancybox" rel="screens">
			<img src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND; ?>/images/about-img-3c069.png?v=114" alt="Instagress Profile"/>
		</a>
	</div>
</div>

	</div>
</section>
<div id="popup-login" class="popup popup-medium">
	<h3>
		
			Sign in with Instagram account
		
	</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-login"></a>
	<div class="alert alert-success">
		<strong>Your privacy is important to us!</strong><br/>
		We won't store your password and use it only to obtain required data 
		for Instagram <abbr title="Application programming interface">API</abbr>.
		Please, check out <a href="guide.html">Guide</a> page before you sign in.
	</div>
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="" id="login-form" class="form-horizontal form-ajax mb0" method="post">
		<div class="control-group field-wrap" data-field="username">
			<input type="text" name="username" id="inpLoginUsername"
				   class="input-block-level input-icon input-icon-username"
				   placeholder="Instagram username" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div class="control-group field-wrap" data-field="password">
			<input type="password" name="password" id="inpLoginPassword"
				   class="input-block-level input-icon input-icon-password"
				   placeholder="Instagram password"/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div>
			<button type="submit"
					class="btn btn-plain btn-success mb20"
					data-loading-text="Signing in...">Sign in</button>
		</div>

		
		<div class="mb10">
			By signing in, you agree to the
			<a href="/site/terms" target="_blank">Terms of Service</a>.
		</div>
		

		<div>
			<a href="#" class="link-ajax" data-popup-open="#popup-login-help">Sign in help</a>
		</div>

		
		<hr/>
		<div class="color-gray -mb20">
			<strong>New!</strong>
			Want to get more benefits from Instagress? Have more than one Instagram account?<br/><br/>
			<a href="#" class="link-ajax"
			   data-popup-close="#popup-login"
			   data-popup-open="#popup-account-signup">Create your personal Instagress account</a>
			to get access to the New Dashboard for multiple accounts.

			
		</div>
		
	</form>
	<a class="login" href="<?php echo $loginUrl ?>">» Login with Instagram</a>
</div>