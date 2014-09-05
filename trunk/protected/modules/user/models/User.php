<?php

class User extends CActiveRecord {
	const ADMIN = 0;
	const UPGRADED = 1;
	const FREE = 2;
	public $repassword;
    /**
     * The followings are the available columns in table 'tbl_user':
     * @var integer $id
     * @var string $username
     * @var string $password
     * @var string $email
     * @var string $profile
     * @const status 0 = registered: as soon as the record is created
     * @const status 1 = verified : as soon as the user verified his email address
     * @const status 2 = suspended: to be checked on login. If true display an error message like “Please contact the admin”
     * @const type 2 = free
     * @const type 1 = pro
     * @const type 0 = admin
     */

    /**
     * Returns the static model of the specified AR class.
     * @return CActiveRecord the static model class
     */
    public static function model($className = __CLASS__) 
    {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() 
            
    {
        return '{{user}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() 
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('status, type', 'numerical', 'integerOnly'=>true),
            array('firstname, lastname, email', 'length', 'max'=>255),
            array('password, hash', 'length', 'max'=>40),
            array('created, modified', 'safe'),
            array('email', 'email', 'allowEmpty' => false),
            array('email', 'unique'),
            array('firstname, lastname', 'required'),
            array('password', 'required'),
            array('password', 'length', 'min' => 6),
            array('password', 'compare', 'compareAttribute'=>'repassword'),
            array('firstname, lastname, email, password, hash, status, type, created, modified', 'safe', 'on'=>'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() 
    {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'company' => array(self::HAS_ONE, 'Company', 'user_id')
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'firstname' => 'Firstname',
            'lastname' => 'Lastname',
            'email' => 'Email',
            'password' => 'Password',
            'hash' => 'Hash',
            'status' => 'Status',
            'type' => 'Type',
            'created' => 'Created',
            'modified' => 'Modified',
        );
    }

    /**
     * Checks if the given password is correct.
     * @param string the password to be validated
     * @return boolean whether the password is valid
     */
    public function validatePassword($password) 
    {
        return CPasswordHelper::verifyPass($password, $this->password);
    }

    /**
     * Generates the password hash.
     * @param string password
     * @return string hash
     */
    public function hashPassword($password) 
    {
        return CPasswordHelper::hashPassword($password);
    }

	protected function beforeSave()
	{
		if(parent::beforeSave()){
			$this->password =md5($this->password);
			return $this->password;
		}
		return false;
	}

	public function behaviors(){
		return array(
			'CTimestampBehavior' => array(
				'class' => 'zii.behaviors.CTimestampBehavior',
				'createAttribute' => 'created',
				'updateAttribute' => 'modified',
			),
		);
	}

}
