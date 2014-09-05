<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity 
{
    const USER_NOT_EXIST = 0;
    private $_id;
    /**
     * @var string email
     */
    public $email;
    /**
     * @var string password
     */
    public $password;
    public $status;
    public $type; 
    /**
     * Contructor
     */
    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password;
    }
    /**
     * Authenticates a user.
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() 
    {
        $user = User::model()->find('LOWER(email)=?', array(strtolower($this->email)));
        if ($user === null)
            $this->errorCode = self::ERROR_USERNAME_INVALID;
        else if (!$user->validatePassword($this->password))
            $this->errorCode = self::ERROR_PASSWORD_INVALID;
        else {
            $this->type      = $user->type;
            $this->_id       = $user->id;
            $this->email     = $user->email;
            $this->status    = $user->status;
            $this->setState('status', $user->status);

            // Set role for admin
            if(!$this->type)
            {
                $this->setState('role', 'admin');
            }

            $this->errorCode = self::ERROR_NONE;
            
        }
        
        return $this->errorCode == self::ERROR_NONE;
    }


    /**
     * Authenticates a user.
     * @return boolean whether authentication succeeds.
     */
    public function authenticateAsUser($id) 
    {
        $user = User::model()->findByPk((int)$id);
        if ($user === null)
            $this->errorCode = self::USER_NOT_EXIST;
        else {
            $this->type      = $user->type;
            $this->_id       = $user->id;
            $this->email     = $user->email;
            $this->status    = $user->status;
            $this->setState('status', $user->status);
            $this->errorCode = self::ERROR_NONE;
        }
        return $this->errorCode == self::ERROR_NONE;
    }

    /**
     * @return integer the ID of the user record
     */
    public function getId() 
    {
        return $this->_id;
    }

}
