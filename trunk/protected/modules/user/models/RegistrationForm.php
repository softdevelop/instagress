<?php
/**
 * RegistrationForm class.
 * RegistrationForm is the data structure for keeping
 * user registration form data. It is used by the 'registration' action of 'UserController'.
 */
class RegistrationForm extends CFormModel
{

	public $repassword;
	public $firstname;
	public $lastname;
	public $email;
	public $password;
	public $status;
	public $type;

	public function rules() {
		$rules = array(
			array('firstname, lastname , password, repassword, email', 'required'),
			array('email', 'unique', 'message' => "This user's email already exists."),
			array('password', 'length', 'max'=>128, 'min' => 6,'message' => "Incorrect password (minimal length 6 symbols)."),
			array('email', 'email'),
			array('repassword', 'compare', 'compareAttribute'=>'password', 'message' => "Retype Password is incorrect."),
		);
		return $rules;
	}
	public function attributeLabels()
    {
        return array(
            'repassword' => 'Re-Type password',
        );
    }
}