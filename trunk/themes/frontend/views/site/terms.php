
<section class="page terms">
	<div class="container">
		<h1 class="title-big">Terms of Service</h1>
		<p>
			By using Instagress, you automatically agree to these Terms, so you
			should first read them carefully. If you don't wish to accept all
			Terms then please don't use our service.
		</p>
		<ol class="nice-list">
			<li>
				Instagress is not affiliated with Instagram, Facebook or any
				Instagram third-party partners in any way.
			</li>
			<li>
				It is your sole responsibility to comply with Instagram rules
				and any legislation that you are subject to. You use Instagress
				at your own risk.
			</li>
			<li>
				We are not responsible for your actions and their consequences.
				We are not to blame if your Instagram account is banned for any
				reason.
			</li>
			<li>
				We require your Instagram username and password to obtain required
				information for Instagram API. We don't store, give away, or otherwise
				distribute your password to any third parties.
			</li>
			<li>
				The expected amount of followers, likes and comments is not
				guaranteed to you in any way. It all depends on the quality
				and interestingness of your content.
			</li>
			<li>
				We bring attention of real users to your feed, but we can't
				protect you from spam, fake, inactive followers. It's not
				possible to stop them, but you can remove unwanted followers
				by yourself or with special services.
			</li>
			<li>
				We can't guarantee the continuous, uninterrupted or error-free
				operability of the services.
			</li>
			<li>
				Before you make a purchase decision you are advised to try Instagress
				for free for 3 days.
			</li>
			<li>
				You agree that upon purchasing our service, that you clearly understand
				and agree what you are purchasing and will not file a fraudulent dispute
				via PayPal.
			</li>
			<li>
				Time is counting down only when your Activity is started.
				You can use your Activity time whenever you want.
			</li>
			<li>
				We can refund your money for an unused Activity time but we do not offer
				full refunds if you used it.
			</li>
			<li>
				We reserve the right to modify, suspend or withdraw the whole
				or any part of our service or any of its content at any time
				without notice and without incurring any liability.
			</li>
			<li>
				It is your sole responsibility to check whether the Terms
				have changed.
			</li>
		</ol>
		<p>
			Please read these Terms carefully, and
			<a href="#" class="link-ajax" data-popup-open="#popup-support">contact us</a>
			if you have any questions.
		</p>
		<p>
			Thanks for using Instagress!
		</p>
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