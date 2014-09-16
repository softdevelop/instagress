<?php

class VerifyForm extends CFormModel
{
    /**
     * @var string email, password, repassword 
     */
    public $email;
    
    public function rules()
    {
        return array(
            array('email', 'email', 'allowEmpty' => false),
        );
    }
}