<article>
    <?php 
        $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'edit-company',
                    'htmlOptions' => array('enctype' => 'multipart/form-data'),
            
    ));?>
    <?php echo $form->errorSummary($model, $header = ''); ?>
    <?php echo $form->errorSummary($city, $header = ''); ?>
    <h1>Update listing information</h1>
    <p>Changes you make here will be reflected immediately to your listing card and page.</p>
        <div class="group about_company">
            <h2>Tell us about your business</h2>
            <div class="field">
                <label for="user_listing_attributes_company_name">What's your company name?</label>
                <small>You can use your own name if you're a freelancer and don't have a company name.</small>
            </div>
            <?php echo $form->textField($model, 'name');?>
            <div class="manage_logo">
                <img alt="" src="<?php echo Yii::app()->request->baseUrl.WWWROOT_FRONTEND . "/images/company/logo/thumb_{$model->logo}" ?>" />
            </div>
            <div class="field">
                <label for="user_listing_attributes_logo">Upload your company logo</label>
                – optional
                <small>
                    GIF, JPG, or PNG. We’ll resize what you have.
                    <br>
                    This is shown on your listing page for clients to see.
                </small>
            </div>
            <input accept="image/*" id="user_listing_attributes_logo" name="Company[logo]" type="file">
            <div class="field">
                <label for="user_listing_attributes_budget_id">What type of budgets do you typically work with?</label>
                <?php foreach($budgets as $key => $budget) {?>
                    <div class="budget_choices">
                        <label for="user_listing_attributes_budget_id_<?php echo $budget->id?>">
                            <input name="Company[budget_id]" type="radio" value="<?php echo $budget->id?>" <?php if($model->budget->id == $budget->id) echo "checked";?>>
                            &nbsp;<span class="budget_label"><?php echo $budget->name;?></span>
                        </label>
                    </div>
                <?php } ?>
            </div>
            <div class="field">
                <label for="list_top_city">Which city or metro area is closest to your company headquarters?</label>
                <small>
                    • If your company has multiple locations, choose the main location.
                    <br>
                    • If your city is not listed, choose “My city is not listed”.
                </small>
            </div>
            
            <!-- LIST TOP CITIES -->
            
            <select id="list_top_city" name="Company[city_id]">
                <?php foreach($topCities as $key => $topCity) {?>
                    <option value="<?php echo $topCity->id ?>" <?php if($topCity->id == $city->id) echo 'selected'; ?>><?php echo $topCity->name;?></option>
                <?php } ?>
                    <option value="0" <?php if(!$comparison) echo 'selected';?>>My city is not listed</option>
            </select>
            
            <!-- END TOP CITIES -->
            
            <div id="other_listing_location"<?php if($comparison) echo 'style="display:none;"'?>>
                <div class="us_select">
                    <div class="us">
                        <label for="user_listing_attributes_in_us_yes">
                            <input <?php if($model->city->country_id == 1) echo "checked"?> id="in_us" name="in_or_out_us" type="radio" value="1">
                                &nbsp;<span class="us">I'm in the US</span>
                        </label>
                    </div>
                    <div class="us">
                        <label for="user_listing_attributes_in_us_no">
                            <input <?php if($model->city->country_id != 1) echo "checked"?> id="out_us" name="in_or_out_us" type="radio" value="0">&nbsp;<span class="us">I'm outside of the US</span>
                        </label>
                    </div>
                </div>
                
                <!------------ STATE -------->
                
                <div id="other_listing_location_state" style="<?php if($city->country->id == 1) echo 'display:block;'; else echo 'display: none;';?>">
                    <p>
                        <label for="user_listing_attributes_state_id">Select your state</label>
                        <br>
                        <select id="user_listing_attributes_state_id" name="City[state_id]">
                            <?php foreach($states as $key => $state) { ?>
                                <option value="<?php echo $state->id?>" <?php if(isset($city->state->id) && $state->id == $city->state->id) echo 'selected';?>><?php echo $state->name;?></option>
                            <?php } ?>
                        </select>    
                    </p>
                </div>
                <!----------------------------------->
                
                <!------------ LIST COUNTRIES -------->
                <div id="other_listing_location_country" style="<?php if($city->country->id != 1) echo 'display:block;'; else echo 'display: none;';?>">
                    <p>
                        <label for="user_listing_attributes_country_id">Select your country</label>
                        <br>
                        <select id="user_listing_attributes_country_id" name="City[country_id]">
                            <?php foreach($countries as $key => $country) {?>
                            <option value="<?php echo $country->id?>" <?php if($country->id == $city->country->id) echo "selected";?>><?php echo $country->name?></option>   
                            <?php } ?>
                        </select>
                    </p>
                </div>
                <!--->
                
                <!-- CITY/METRO CLOSET -->
                <div class="field">
                    <label for="user_listing_attributes_other_location">Enter the city/metro area closest to your headquarters</label>
                    <small>
                        • If your company has multiple locations, just enter the main location.
                        <br>
                        • As you type we'll make recommendations — please select one if it's close.
                        <br>
                    </small>
                </div>
                <div id="other_location_wrapper" style="width: 244px;">
                    <input  name="City[area_closest]"size="30" type="text" value="<?php echo $model->city->name;?>">
                </div>
                <!-- END CITY-->
            </div>
            
            <div class="field">
                <label for="user_listing_attributes_overview">Describe your company</label>
                - optional
                <small>
                    Tell potential clients what your company believes in. It’s OK to list your clients and services too.
                </small>
            </div>
            <?php echo $form->textArea($model, 'description', array('rows' => 20, 'cols' => 40)) ?>
        </div>
    
    
        <div class="group contact">
            <h2>How can clients get in touch?</h2>
            <div class="field">
                <label for="user_listing_attributes_contact_email">Sales contact email</label>
                - optional
                <small>This is how clients will contact you (example: sales@mydomain.com)</small>
            </div>
            <?php echo $form->textField($model, 'email');?>
            <div class="field">
                <label for="user_listing_attributes_website_url">Website URL</label>
                - optional
                <small>(example: mydomain.com)</small>
            </div>
            <?php echo $form->textField($model, 'website');?>
        </div>

        <p>
            <input name="commit" type="submit" value="save and publish">
        </p>
    <?php $this->endWidget();?>
</article>
<script type="text/javascript">
    $(document).ready(function(){
        var $topCity = $("#list_top_city");
        var $otherCity = $('#other_listing_location');
        var $otherCityIput = $('#other_listing_location input');
        var $inOrOutUS = $('.us_select input');
        var $state = $('#other_listing_location_state');
        var $country = $('#other_listing_location_country');
        
        
        if($("#list_top_city option:selected").val() != 0)
        {
            $otherCityIput.attr('disabled', 'disabled');
        }
        $topCity.change(function(){
            if($topCity.val() == 0)
            {
                $otherCity.show();
                $otherCityIput.removeAttr('disabled');
            }
            else
            {
                $otherCityIput.attr('disabled', 'disabled');
                $otherCity.hide();
            }
            
        });
        
        $inOrOutUS.on('click', function(){
            
            if($('.us_select input:checked').val() == 0)
            {
                $state.hide();
                $state.find('select').attr('disabled', 'disabled');
                $country.find('select').removeAttr('disabled');
                $country.show();
            }
            else
            {
                $state.show();
                $country.find('select').attr('disabled', 'disabled');
                $state.find('select').removeAttr('disabled');
                $country.hide();
            }
            
            
        })
        
        
    });
</script>