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
            array('access_token, full_name, instagram_id, username', 'required', 'on' => 'instagram_login'),
            array('email', 'unique'),
            array('password, email', 'required', 'except' => 'instagram_login'),           
            array('access_token, full_name, instagram_id, username, email, password, hash, status, type, created, modified', 'safe', 'on'=>'search'),
            
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
            'child' => array(self::HAS_MANY, 'UserChild', 'user_id')
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
		if(parent::beforeSave()) {
			$this->password = md5($this->password);
			return $this->password;
		}
		return false;
	}

	public function behaviors() {
		return array(
			'CTimestampBehavior' => array(
				'class' => 'zii.behaviors.CTimestampBehavior',
				'createAttribute' => 'created',
				'updateAttribute' => 'modified',
			),
		);
	}

    public function zeroUnique()
    {
        $user = self::model()->find('instagram_id=:instagram_id', array(':instagram_id' => $this->instagram_id));
        if (!isset($user)) {            
            $this->save();
            if (Yii::app()->user->id)
                $this->saveChild($this->id);
            return $this;
        } else {
            if (Yii::app()->user->id && !isset($user->child)) 
                $this->saveChild($user->id);
            return $user;
        }        
    }

    public function saveChild($id_child = 0)
    {
        $user_child = new UserChild();
        $user_child->user_id = Yii::app()->user->id;
        $user_child->user_child_id = $id_child;
        $user_child->save();
    }

}
