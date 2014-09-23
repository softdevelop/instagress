<?php

/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class FController extends Controller 
{
    /**
     * @var string the default layout for the controller view. Defaults to 'column1',
     * meaning using a single column layout. See 'protected/views/layouts/column1.php'.
     */
    public $layout = '//layouts/column2';
    
	
    /**
     * @author softdev
     * @param string $subject
     * @param string $email
     * @param array $param
     * @param string $view
     */
    public function SendMail($subject = '', $email, $param, $link = '', $view)
    {   
        $message            = new YiiMailMessage;
        //this points to the file test.php inside the view path
        $message->view = trim($view);
        $params              = array('params'=>$param, 'link' => $_SERVER['HTTP_ORIGIN'] . $link);
        $message->subject    = $subject;
        $message->setBody($params, 'text/html');                
        $message->addTo(trim($email));
        $message->from = Yii::app()->params['adminEmail'];   
        Yii::app()->mail->send($message);       
    }


    
}

