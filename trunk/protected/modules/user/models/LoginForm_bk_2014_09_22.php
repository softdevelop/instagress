<?php

/**
 * LoginForm class.
 * LoginForm is the data structure for keeping
 * user login form data. It is used by the 'login' action of 'SiteController'.
 */
class LoginForm extends CFormModel
{   
    public $username;    
    public $password;
	public $email;
	public $rememberMe;
	public $status;
	private $_identity;
	public $type;


	/**
	 * Declares the validation rules.
	 * The rules state that username and password are required,
	 * and password needs to be authenticated.
	 */
	public function rules()
	{
		return array(
			// username and password are required
            //array('email','email', 'allowEmpty' => false),
            array('username, password', 'required'),
			// rememberMe needs to be a boolean
			array('rememberMe', 'boolean'),
			// password needs to be authenticated
			//array('password', ''),
		);
	}

	/**
	 * Declares attribute labels.
	 */
	public function attributeLabels()
	{
		return array(
			'rememberMe'=>'Remember me next time',
		);
	}

	/**
	 * Authenticates the password.
	 * This is the 'authenticate' validator as declared in rules().
	 */
	public function authenticate($attribute,$params)
	{
		$this->_identity=new UserIdentity($this->username,$this->password);
		if(!$this->_identity->authenticate())
			$this->addError('password','Incorrect username or password.');
	}

	/**
	 * Logs in the user using the given username and password in the model.
	 * @return boolean whether login is successful
	 */
	public function login()
	{
        if($this->_identity===null)
        {

            $this->_identity=new UserIdentity($this->username,$this->password);
            $this->_identity->authenticate();
        }
        
        if($this->_identity->errorCode===UserIdentity::ERROR_NONE)
        {
            
            if(!$this->_identity->status)
            {
                $this->addError('status',"I’m sorry but you haven’t verified your email address.<a href='".Yii::app()->createUrl('user/auth/verify')."'/>Click here</a> if you want to send the verification message again");
                return false;
            }
            elseif($this->_identity->status == 2)
            {
                $this->addError('status',"I’m sorry but your account is suspended, <a href='".Yii::app()->createUrl('')."'/>Click here</a> to get in touch with the site administrator");
                return false;
            }
            
            $duration=$this->rememberMe ? 3600*24*30 : 0; // 30 days
            Yii::app()->user->login($this->_identity,$duration);
            return true;
        }
        elseif($this->_identity->errorCode === UserIdentity::ERROR_USERNAME_INVALID)
        {
            $this->addError('email', 'I’m sorry but I can’t find your email in our database. Would you like to publish your work on our website? <a href="'. Yii::app()->createUrl('/user/signup').'">Click here</a> to create an acccount!');
        }
        else
        {
            $this->addError('password', 'Password is not invail');
        }
        
            return false;
	}

	/**
	 * only administrator login
	 * @return [type] [description]
	 */
	public function loginAdmin()
	{
		if($this->_identity===null)
        {
            $this->_identity=new UserIdentity($this->username,$this->password);
            $this->_identity->authenticate();
        }
        if($this->_identity->errorCode===UserIdentity::ERROR_NONE)
        {
            if($this->_identity->type)
            {
            	$this->addError('','You have no permission');
            	return false;
            }
            
            $duration=$this->rememberMe ? 3600*24*30 : 0; // 30 days
            Yii::app()->adminUser->login($this->_identity,$duration);
            return true;
        }
        elseif($this->_identity->errorCode === UserIdentity::ERROR_USERNAME_INVALID)
        {
            $this->addError('email', 'I’m sorry but I can’t find your email in our database');
        }
        else
        {
            $this->addError('password', 'Password is not invail');
        }
        
            return false;
	}

    /**
     * [loginAsUser description]
     * @return [type] [description]
     */
    public function loginAsUser($id)
    {
        if($this->_identity===null)
        {
            $this->_identity=new UserIdentity('','');
            $this->_identity->authenticateAsUser((int)$id);
        }
        if($this->_identity->errorCode===UserIdentity::ERROR_NONE)
        {
            
            $duration=$this->rememberMe ? 3600*24*30 : 0; // 30 days
            Yii::app()->user->login($this->_identity,$duration);
            
            return true;
        }

        return false;
    }
}
