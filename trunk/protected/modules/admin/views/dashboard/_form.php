<div class="row-fluid">
    <h1>Update User Informations</h1>
    <div class="form">
        <?php $form =  $this->beginWidget('CActiveForm', array(
                                'id' => 'admin-update-user'
        ));?>
        	<p class="note">Fields with <span class="required">*</span> are required.</p>
        	<div class="row">
        		<label for="" class="required">First Name <span class="required">*</span></label>
                <?php echo $form->textField($model, 'firstname')?>
                <?php echo $form->error($model, 'firstname')?>
            </div>

            <div class="row">
                <label for="" class="required">Last Name <span class="required">*</span></label>
                <?php echo $form->textField($model, 'lastname')?>
                <?php echo $form->error($model, 'lastname')?>
            </div>

            <div class="row">
                <label for="" class="required">Email <span class="required">*</span></label>
                <?php echo $form->textField($model, 'email')?>
                <?php echo $form->error($model, 'email')?>
            </div>

            <div class="row">
                <label for="" class="required">Password <span class="required">*</span></label>
                <?php echo $form->passwordField($model, 'password')?>
                <?php echo $form->error($model, 'password')?>
            </div>

            <div class="row">
                <label for="" class="required">Repeat Password <span class="required">*</span></label>
                <?php echo $form->passwordField($model, 'repassword')?>
                <?php echo $form->error($model, 'repassword')?>
            </div>

            <div class="row">
                <label for="" class="required">Type <span class="required">*</span></label>
                <select name="User[type]">
                    <option value='1' <?php if($model->type == 1) echo 'selected';?>>Pro</option>
                    <option value='2' <?php if($model->type == 2) echo 'selected';?>>Free</option>
                </select>
            </div>

            <div class="row">
                <label for="" class="required">Status <span class="required">*</span></label>
                <select name="User[status]">
                    <option value='0' <?php if($model->status == 0) echo 'selected';?>>Unverified</option>
                    <option value='1' <?php if($model->status == 1) echo 'selected';?>>Verified</option>
                    <option value='2' <?php if($model->status == 2) echo 'selected';?>>Suppended</option>
                </select>
            </div>
        	<div class="row buttons">
        		<input type="submit" name="yt0" value="Save">	
            </div>
        <?php  $this->endWidget() ?>
    </div><!-- form -->                    
</div>   