<div class="create_form">
    <?php
        $form = $this->beginWidget('CActiveForm', array(
            'id' => 'entry-email-form',
        ));
    ?>
    <?php echo $form->errorSummary($model, $header = ''); ?>
        <h2>Did you forget your password?</h2>
        <p>Enter the email you used for your Sortfolio account below, and we’ll send you an email with a link to reset your password.</p>
        <div class="field">
            <label for="user_email">Email:</label>
        </div>
            <?php echo $form->textField($model, 'email'); ?>
        <p>
            <?php echo CHtml::submitButton('send me a password reset email'); ?>
        </p>
    <?php $this->endWidget(); ?>
    <div class="create">
        Don’t have a username or password? <a href="<?php echo Yii::app()->createUrl('/singup');?>">Create a Sortfolio Account.</a>
    </div>
</div>