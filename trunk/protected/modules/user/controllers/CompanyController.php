<?php

class CompanyController extends FController
{
    public $path_logo;
    public $width_logo;
    public $height_logo;
    
    
    
    public function filters()
    {
        return array(
            'accessControl',
        );
    }
    
    public function accessRules()
    {
        return array(
            array('allow', // allow authenticated users to access all actions
                'users'=>array('@'),
            ),
            array('deny'),
        );
    }
    
    /**
     * @author HOANNGUYEN
     * @description using changes some company informations
     */
    public function actionEdit()
    {
        
        $model = Company::model()->findByAttributes(array('user_id' => Yii::app()->user->id));
        $budgets = Collection::model()->findAllByAttributes(array('type' => 'budget'));
        $states = State::model()->findAll();
        
        // get the city is corresponding company's city_id of current user 
        $city = City::model()->findByAttributes(array('id' => $model->city_id));
        $city->scenario = 'edit-company';
        $countries = Country::model()->findAll();
        
        // Retrives all top cities
        $topCities = City::model()->getTopCity();

        $comparison = $city->comparison($topCities, $city->id);
        
        if(isset($_POST) && !empty($_POST))
        {
            if($_POST['Company']['city_id'])
            {
                $model->attributes = $_POST['Company'];
                $model->modified = date('Y-m-d H:i:s');
                
                // update specfied company information
                if($model->validate())
                {
                    $model->logo =  $this->uploadLogo($model);
                    $model->update();
                    Yii::app()->user->setFlash('success', 'Your company informations successful updated');
                    $this->redirect('/user/account');
                }
                
            }
            else
            {
                $city = new City('edit-company');
                $city->attributes = $_POST['City'];
                $city->name = $_POST['City']['area_closest'];
                $city->alias = $this->url_slug($_POST['City']['area_closest']);
                if(isset($_POST['City']['state_id']))
                {
                    $city->country_id = 1;
                }

                if($city->save())
                {
                    $model->attributes = $_POST['Company'];
                    $model->modified = date('Y-m-d H:i:s');
                    $model->city_id = $city->id;
                    if($model->validate())
                    {
                        $model->logo =  $this->uploadLogo($model);
                        $model->update();
                        Yii::app()->user->setFlash('success', 'Your company informations successful updated');
                        $this->redirect('/user/account');
                    }
                }
            }
        }
        
        $this->render('edit', array(
                'model' => $model,
                'budgets' => $budgets,
                'states'  => $states,
                'city'   => $city,
                'countries' => $countries,
                'topCities' => $topCities,
                'comparison' => $comparison
        ));
    }
}

