<div class="edit_form">
    <?php
        $form = $this->beginWidget('CActiveForm', array(
            'id' => 'reset-password-form',
        ));
    ?>
        <?php echo $form->errorSummary($model, $header = '');?>
        <h1>Reset your password</h1>
        <div class="field">
            <label for="user_password">Password:</label>
        </div>
        <?php echo $form->passwordField($model, 'password');?>
        <div class="field">
            <label for="user_password_confirmation">Password again:</label>
            <small>Confirm your password by entering it again.</small>
        </div>
        <?php echo $form->passwordField($model, 'repassword');?>
        <p>
            <?php echo CHtml::submitButton('update your password'); ?>
        </p>
    <?php $this->endWidget();?>
</div>