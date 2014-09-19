<article>
    <div class="create_form">
        <?php
            $form = $this->beginWidget('CActiveForm', array(
                'id' => 'edit-form',
                'enableAjaxValidation' => true,
            ));
        ?>
        <?php echo $form->errorSummary($model, $header = ''); ?>
        <h1>Manage your account</h1>
            <div class="group">
                <div class="field">
                    <?php echo $form->labelEx($model, 'First name'); ?>
                </div>
                <?php echo $form->textField($model, 'firstname'); ?>
                <div class="field">
                    <?php echo $form->labelEx($model, 'Last name'); ?>
                </div>
                <?php echo $form->textField($model, 'lastname'); ?>
                <div class="field">
                    <label for="user_email">Your email address</label>
                    <small>This is how we'll stay in touch (clients don’t see this address).</small>
                </div>
                <?php echo $form->textField($model, 'email'); ?>
                <div class="field">
                    <label for="user_password">Password</label>
                    <small>Must be at least 6 characters.</small>
                </div>
                <?php echo $form->passwordField($model, 'password', array('password'=>'')); ?>
                <div class="field">
                    <label for="user_password_confirmation">Password again</label>
                    <small>Confirm your password by entering it again.</small>
                </div>
                <?php echo $form->passwordField($model, 'repassword'); ?>
            </div>

            <div class="subscribe">
                <label for="user_receive_newsletter">
                    <input name="user[receive_newsletter]" type="hidden" value="0">
                    <input checked="checked" id="user_receive_newsletter" name="user[receive_newsletter]" type="checkbox" value="1">
                    <span>I’d like to receive Sortfolio news and special offers.</span>
                </label>
            </div>
            <p>
                <?php echo CHtml::submitButton('update account information'); ?>
            </p>
        <?php $this->endWidget();?>
        <p>
            <a href="/plan/upgrade">Upgrade to the Sortfolio Pro plan</a>
            <br>
            Get a bigger listing card, add up to 6 images, get discovered.
        </p>
        <p>
            <a href="/account/confirm_destroy" style="color: red;">Cancel my Sortfolio Account</a>
            <br>
            <strong>
                Note: There is no undo for cancellation.
            </strong>
            Once your account is cancelled, all of the information in your account will be permanently deleted. This cannot be reversed.
        </p>
    </div>
</article>