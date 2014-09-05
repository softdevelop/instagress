<div class="login_form">
    <?php
        $form = $this->beginWidget('CActiveForm', array(
            'id' => 'login-form',
            'enableAjaxValidation' => true,
        ));
    ?>
    <?php echo $form->errorSummary($model, $header = ''); ?>
    <h2>Login to your account</h2>
    <div class="field">
        <?php echo $form->labelEx($model, 'Email:'); ?>
    </div>
        <?php echo $form->textField($model, 'email'); ?>
    
    <div class="field">
        <?php echo $form->labelEx($model, 'password'); ?>
    </div>
        <?php echo $form->passwordField($model, 'password'); ?>
    <br/>
    
    <a href="<?php echo Yii::app()->createUrl('/user/auth/recover');?>">I forgot my password</a>
    <div class="remember">
        <label for="user_session_remember_me">
            <?php echo $form->checkBox($model, 'rememberMe'); ?>
            <?php echo $form->label($model, 'rememberMe'); ?>
        </label>
    </div>
    
    <div class="row submit">
        <?php echo CHtml::submitButton('Login'); ?>
    </div>
    <?php $this->endWidget(); ?>
    <div class="create">
        Don’t have a username or password?
        <a href="<?php echo Yii::app()->createUrl('/signup/index');?>">Create a Sortfolio Account.</a>
    </div>
</div>

