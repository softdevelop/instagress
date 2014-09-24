<?php /* login via sign up */ ?>
<?php if ( $isInstagramUser && !isset($_GET['instagram_id']) ) : ?>
<div class="usermenu">
	<div class="container">
		<a href="/profile" class="avatar">
			<img src="<?php echo $user->avatar; ?>" alt="<?php echo $user->username; ?>" width="80" height="80" />
		</a>

		<ul class="menu account-actions pull-left">
			<li class="name">
				<a href="/user/profile"><?php echo $user->username; ?></a>
			</li>
			<li>
				<a href="#" class="btn-account-email" data-popup-open="#popup-account-email">
					Set email
				</a>
			</li>
			<li>
				<a href="/user/auth/logout">Log out</a>
			</li>	
		</ul>

		<ul class="menu account-pages pull-right">
			<li class="active">
				<a href="/user/activity">Activity</a>
			</li>	
			<li class="">
				<a href="/user/profile">Profile</a>
			</li>
			<li class="">
				<a href="/user/likes">Likes</a>
			</li>
			
		</ul>
	</div>
</div>
<?php /* access as child user */ ?>
<?php elseif ( !$isInstagramUser && isset($_GET['instagram_id']) ) : ?>
<div class="usermenu">
	<div class="container">
		<a href="/profile" class="avatar">
			<img src="<?php echo $user->avatar; ?>" alt="<?php echo $user->username; ?>" width="80" height="80" />
		</a>

		<ul class="menu account-actions pull-left">
			<li class="name">
				<a href="/user/profile"><?php echo $user->username; ?></a>
			</li>
				<li>
					<a href="/user/account">Back to Dashboard</a>
				</li>
			<li>
				<a href="#" class="btn-account-email" data-popup-open="#popup-account-email">
					Set email
				</a>
			</li>
			<li>
				<a href="/user/account/remove/?instagram_id=<?php echo (int) $_GET['instagram_id']; ?>">Log out</a>
			</li>	
		</ul>

		<ul class="menu account-pages pull-right">
			<li class="active">
				<a href="/user/activity/?instagram_id=<?php echo (int) $_GET['instagram_id']; ?>">Activity</a>
			</li>	
			<li class="">
				<a href="/user/profile?instagram_id=<?php echo (int) $_GET['instagram_id']; ?>">Profile</a>
			</li>
			<li class="">
				<a href="/user/likes?instagram_id=<?php echo (int) $_GET['instagram_id']; ?>">Likes</a>
			</li>
			
		</ul>
	</div>
</div>
<?php /* login as parent user */ ?>
<?php elseif (!$isInstagramUser && !Yii::app()->user->isGuest) : ?>
	<div class="usermenu accountmenu">
		<div class="container">
			<a href="/user/account" class="avatar">
				<img src="https://secure.gravatar.com/avatar/05d6ddcd87ca6fe99c460322d1d38315?d=https%3A%2F%2Finstagress.com%2Fimg%2Fdefault-avatar.png"
					 alt="ntkien92@gmail.com"/>
			</a>
			<ul class="menu account-actions pull-left">
				<li class="name">
					<a href="/user/account"><?php echo Yii::app()->user->name;?></a>
				</li>

				<li>
					<a href="/account/settings">Settings</a>
				</li>

				<li>
					<a href="/site/logout">Log out</a>
				</li>
			</ul>
		</div>

	</div>
<?php endif; ?>
