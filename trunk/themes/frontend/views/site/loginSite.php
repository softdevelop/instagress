<div id="popup-login" class="popup popup-medium">
	<h3>
		
			Sign in
		
	</h3>
	<a href="#" class="btn-close" data-popup-close="#popup-login"></a>
	
	<div class="alerts">
		<div class="alert alert-error"></div>
		<div class="alert alert-success"></div>
	</div>
	<form action="/user/auth/login" id="login-form" class="form-horizontal mb0" method="post">
		<div class="control-group field-wrap" data-field="username">
			<input type="text" name="LoginForm[username]" id="inpLoginUsername"
				   class="input-block-level input-icon input-icon-username"
				   placeholder="Username" autofocus/>
			<span class="help-block text-error hidden"></span>
		</div>
		<div class="control-group field-wrap" data-field="password">
			<input type="password" name="LoginForm[password]" id="inpLoginPassword"
				   class="input-block-level input-icon input-icon-password"
				   placeholder="Password"/>
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
	<a class="login btn btn-plain btn-success mb20" href="<?php echo $loginUrl ?>">» Login with Instagram</a>
</div>