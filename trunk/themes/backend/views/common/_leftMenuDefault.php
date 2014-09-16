<!-- BEGIN SIDEBAR MENU -->        
<ul class="page-sidebar-menu">
	<li>
		<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
		<div class="sidebar-toggler hidden-phone"></div>
		<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
	</li>
	<li>
		<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
		<form class="sidebar-search">
			<div class="input-box">
				<a href="javascript:;" class="remove"></a>
				<input type="text" placeholder="Search..." />
				<input type="button" class="submit" value=" " />
			</div>
		</form>
		<!-- END RESPONSIVE QUICK SEARCH FORM -->
	</li>
	<li class="start active">
		<a href="<?php echo Yii::app()->createUrl('/admin/dashboard');?>"><i class="icon-home"></i><span class="title"><?php echo Yii::t('strings','Dashboard') ?></span></a><span class="selected"></span>
	</li>
	<li class="<?php if($this->module->getName()=="user") echo "open";?>">
		<a href="<?php echo Yii::app()->createUrl('/admin/dashboard');?>">
			<i class="icon-user"></i> 
			<span class="title">
					<?php echo Yii::t('strings','List Users') ?>
			</span>
		</a>
	</li>
</ul>
<!-- END SIDEBAR MENU -->