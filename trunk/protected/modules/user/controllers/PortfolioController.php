<?php

class PortfolioController extends FController
{
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
    
    public function actionIndex()
    {
        
        $company = Company::model()->findByAttributes(array('user_id' => Yii::app()->user->id));
        
        $this->render('index', array(
           'company' => $company 
        ));
        
    }
    
    public function actionEdit($id)
    {
        $id = (int)$id;
        $portfolio   = Portfolio::model()->findByPk($id);
        
        // Retrives all industries collections
        $industries  = Collection::model()->findAllByAttributes(array('type' => 'industry'));
        
        // Retrives all platform collections
        $platform    = Collection::model()->findAllByAttributes(array('type' => 'platform'));
        
        // Retrives all projecttype collections
        $projecttype = Collection::model()->findAllByAttributes(array('type' => 'projecttype'));
        
        // Retrives all technology collections
        $technology  = Collection::model()->findAllByAttributes(array('type' => 'technology'));
        
        // Retrives all budget collections
        $budget      = Collection::model()->findAllByAttributes(array('type' => 'budget'));
        
        
        if(!empty($_POST['Portfolio']))
        {
            $portfolio->attributes = $_POST['Portfolio'];
            if($portfolio->validate())
            {
                $portfolio->path = $this->uploadPortfolio($portfolio);
                $portfolio->update();
                
                Yii::app()->user->setFlash('success', 'PORTFOLIO SUCCESSFULLY UPDATED');
                $this->redirect(array('/user/portfolio'));
                
            }
        }
        $this->render('_form', array(
            'portfolio'    => $portfolio,
            'projectypes'  => $projecttype,
            'technologies' => $technology,
            'platforms'    => $platform,
            'industries'   => $industries 
        ));
        
    }
    /**
     * @param  int $id 
     */
    public function actionDelete($id)
    {
        $id = (int)$id;
        $portfolio = Portfolio::model()->findByPk($id);
        
        $portfolio->delete();
        $this->redirect(array('/user/portfolio'));
        
    }

    /**
     * @author HOANGNGUYEN
     * add a new portfolio
     */
    public function actionAdd()
    {
       $portfolio   = new Portfolio('create-port');
       $company     = Company::model()->findByAttributes(array('user_id' => Yii::app()->user->id));
       
       // Retrives all industries collections
       $industries  = Collection::model()->findAllByAttributes(array('type' => 'industry'));
       
       // Retrives all platform collections
       $platform    = Collection::model()->findAllByAttributes(array('type' => 'platform'));
       
       // Retrives all projecttype collections
       $projecttype = Collection::model()->findAllByAttributes(array('type' => 'projecttype'));
       
       // Retrives all technology collections
       $technology  = Collection::model()->findAllByAttributes(array('type' => 'technology'));
       
       // Retrives all budget collections
       $budget      = Collection::model()->findAllByAttributes(array('type' => 'budget'));

        if(!empty($_POST['Portfolio']))
        {
            $portfolio->attributes = $_POST['Portfolio'];
            $portfolio->path = $_FILES['Portfolio']['name']['path'];

            // set id company column it's current company id
            $portfolio->company_id = $company->id;

            // Checking images was choose or not
            if(!empty($portfolio))
                $portfolio->path = $this->uploadPortfolio($portfolio);

            if($portfolio->save())
            {
                Yii::app()->user->setFlash('success', 'images successful added');
                $this->redirect('/user/portfolio');
            }
        }
        
        $this->render('_create', array(
            'portfolio'    => $portfolio,
            'projectypes'  => $projecttype,
            'technologies' => $technology,
            'platforms'    => $platform,
            'industries'   => $industries 
        ));
    }
            
}
