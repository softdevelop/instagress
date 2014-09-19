
<?php if(!Yii::app()->user->isGuest) { ?>
	<div class="usermenu accountmenu">
		<div class="container">
			<a href="/account" class="avatar">
				<img src="https://secure.gravatar.com/avatar/05d6ddcd87ca6fe99c460322d1d38315?d=https%3A%2F%2Finstagress.com%2Fimg%2Fdefault-avatar.png"
					 alt="ntkien92@gmail.com"/>
			</a>

			<ul class="menu account-actions pull-left">
				<li class="name">
					<a href="/account"><?php echo Yii::app()->user->name;?></a>
				</li>

				<li>
					<a href="/account/settings">Settings</a>
				</li>

				<li>
					<a href="/site/logout">Log out</a>
				</li>

				
			</ul>
			<?php if (User::getInstagramId()) :?>
				<ul class="menu account-pages pull-right">
						
						<li class="active">
							<a href="/activity" >Activity</a>
						</li>
					
						
						<li class="">
							<a href="/profile" >Profile</a>
						</li>
					
						
						<li class="">
							<a href="/like" >Likes</a>
						</li>
					
				</ul>
			<?php endif;?>
		</div>

	</div>
<?php } ?>
