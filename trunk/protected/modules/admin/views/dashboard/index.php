<div class="widget-box dataTables_wrapper">
<?php $this->widget('zii.widgets.grid.CGridView', array(
	'dataProvider'    => $dataProvider,
	'itemsCssClass'   => 'table table-bordered table-striped table-hover',
	'summaryCssClass' => 'summary widget-title',
	'htmlOptions'     => array('class'=>'widget-content nopadding grid-view'),

	'columns'         => array(
		array(
			'name'  => 'id',
			'type'  =>'raw',
			'value' => '$data->id',
		),
		array(
			'name'  => 'firstname',
			'type'  => 'raw',
			'value' => '$data->firstname'		
		),
		array(
			'name'  => 'lastname',
			'type'  => 'raw',
			'value' => '$data->lastname'		
		),
		array(
			'name'  => 'email',
			'type'  => 'raw',
			'value' => '$data->email'		
		),
		array(
			'name'  => 'created',
			'value' => '$data->created',
		),
		array(
			'name'  => 'type',
			'value' => '($data->type == 1 ) ? "Pro" : "Free"',
		),
		array(
			'name'  => 'status',
			'value' => array($this, 'statusFil'),
		),
		array(   
				// display a column with "view", "update" and "delete" buttons
				'class'    => 'CButtonColumn',
				'template' => '{login}{update}{delete}',
				'buttons'  =>  array(
								        'login' => array
								        (
											'label'    =>'Login as user',
											'imageUrl' =>Yii::app()->request->baseUrl . WWWROOT_FRONTEND . '/images/loginasuser.png',
											'url'      =>'Yii::app()->createUrl("user/loginAsUser", array("id"=>$data->id))',
											'options'=>array("target"=>"_blank"),
								        ),
				                ),
		),
	),
));?>

</div>