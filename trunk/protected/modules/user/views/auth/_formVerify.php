<div class="edit_form">
    <?php
        $form = $this->beginWidget('CActiveForm', array(
            'id' => 'reset-password-form',
        ));
    ?>
        <?php echo $form->errorSummary($model, $header = '');?>
        <h1>Send a verification  email</h1>
        <div class="field">
            <label for="user_password">Email:</label>
        </div>
        <?php echo $form->textField($model, 'email');?>
        <p>
            <?php echo CHtml::submitButton('Send a verification email'); ?>
        </p>
    <?php $this->endWidget();?>
</div>