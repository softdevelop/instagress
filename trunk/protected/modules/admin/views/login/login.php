<h1>Login</h1>
<div class="form">
	<?php $form = $this->beginWidget('CActiveForm', array(
					'id' => 'login-admin',
	));?>
	<?php echo $form->errorSummary($model, $header = ''); ?>
		<div class="row">
			<label for="UserLogin_username" class="required">Email<span class="required">*</span></label>		
			<?php echo $form->textField($model, 'email'); ?>	
		</div>
		
		<div class="row">
			<label for="UserLogin_password" class="required">Password <span class="required">*</span></label>		
			<?php echo $form->passwordField($model, 'password'); ?>
		</div>
		
		<div class="row">
			<p class="hint">
				<a href="/user/recovery/recovery">Lost Password?</a>		
			</p>
		</div>
		
		<div class="row rememberMe">
			<?php echo $form->checkBox($model, 'rememberMe'); ?>
            <?php echo $form->label($model, 'rememberMe'); ?>
		</div>

		<div class="row submit">
			<input type="submit" name="yt0" value="Login">	</div>
		<div class="clearBoth"></div>
	<?php $this->endWidget();?>
</div><!-- form -->
