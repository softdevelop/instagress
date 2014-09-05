<?php

class RecoverForm extends CFormModel
{
    /**
     * @var string email, password, repassword 
     */
    public $email;
    public $password;
    public $repassword;
    
    public function rules()
    {
        return array(
            array('email', 'email', 'allowEmpty' => false),
            array('password', 'required'),
            array('password', 'compare', 'compareAttribute'=>'repassword'),
            array('repassword', 'required')
        );
    }
}