<?php $this->beginContent('//layouts/main'); ?>
<?php /*
<div class="container">
	<div class="span-18">
		<div id="content">
			<?php echo $content; ?>
		</div><!-- content -->
	</div>
	
	<div class="span-6 last">
		<div id="sidebar">
			<?php if(!Yii::app()->user->isGuest) $this->widget('UserMenu'); ?>
		</div><!-- sidebar -->
	</div> 
</div>  */ ?>
<div>
	<?php echo $content; ?>
</div>
<?php $this->endContent(); ?>