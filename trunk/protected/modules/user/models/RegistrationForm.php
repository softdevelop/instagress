<?php
/**
 * RegistrationForm class.
 * RegistrationForm is the data structure for keeping
 * user registration form data. It is used by the 'registration' action of 'UserController'.
 */
class RegistrationForm extends CFormModel
{
	public $email;
	public $password;

	public function rules() {
		$rules = array(
			array('password, email', 'required'),
			array('email', 'unique', 'message' => "This user's email already exists."),
		);
		return $rules;
	}
}