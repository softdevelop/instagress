<?php

class UserChild extends CActiveRecord {
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
        return '{{user_child}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() 
    {

        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(        
            array('user_id, user_child_id', 'safe', 'on'=>'search'),
            
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
            'user' => array(self::BELONGS_TO, 'User', 'user_child_id')
        );
    }
}
