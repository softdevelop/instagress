<?php

require '_constants.php';
require '_alias.php';

return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'Instagress site',
    // preloading 'log' component
    'preload' => array('log', 'instagram'),
    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
        'application.modules.user.models.*',
        'application.modules.admin.models.*',
        'ext.yii-mail.YiiMailMessage',
		'application.extensions.helpers.*',
    ),
    'defaultController' => 'site',
    // application components
    'components' => array(
        'thumb'=>array(
            'class'=>'ext.phpthumb.EasyPhpThumb',
        ),
        'user' => array(
            // enable cookie-based authentication
            'allowAutoLogin' => true,
            'loginUrl' => '/user/auth/login'
        ),
        'adminUser'=>array(             // Webuser for the admin area (admin)
            'class'=>'CWebUser',
            'allowAutoLogin' => true,
            'loginUrl'=>'/admin/login',
            'stateKeyPrefix'=>'admin_',
        ),
        'db' => array(
            'connectionString' => 'mysql:host=localhost;dbname=instagress',
            'emulatePrepare' => true,
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
            'tablePrefix' => '',
        ),
        'urlManager' => array(
            'urlFormat' => 'path',
            'showScriptName'=>false,
            'rules' => array(
                 '<module:\w+>/<controller:\w+>/<action:\w+>/<id:-?\d+>/<name:.*>'=>'<module>/<controller>/<action>',
                'post/<id:\d+>/<title:.*?>'=>'post/view',
                'posts/<tag:.*?>'=>'post/index',
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
            ),
            
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
                // uncomment the following to show log messages on web pages
                /*array(
                    'class' => 'CWebLogRoute',
                ),*/
            ),
        ),
        'mail' => array(
                'class' => 'ext.yii-mail.YiiMail',
                'transportType'=>'php',
                'viewPath' => 'application.views.mail',             
        ),
        'instagram' => array(
            'class' => 'ext.instagram.Instagram',
            '_apikey' => 'db64ea18e8394b63b6c4309250b4ea6a',
            '_apisecret' => '1e672be29aab4d2e88a79f3dc8919eee',
            '_callbackurl' => 'http://instagress.me/site/success'
               
        )
		
    ),
    
    'modules' => array(
        'gii' => array(
            'class' => 'system.gii.GiiModule',
            'generatorPaths' => array(
                'ext.giix-core', // giix generators
            ),
            'password' => '12345-'
        ),
        'user',
        'admin'
    ),
    'theme' => 'frontend',
    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => require(dirname(__FILE__) . '/params.php'),
);
