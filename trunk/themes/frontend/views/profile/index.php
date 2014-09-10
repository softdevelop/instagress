<div class="main-info">
	<div class="user-name"><p><strong><?php echo $user_info->data->username; ?></p></strong></div>
	<div class="web"><?php echo $user_info->data->website; ?></div>
	<div class="profile-picture"><img src="<?php echo $user_info->data->profile_picture; ?>" /></p></div>
	<div class="follow-number">	
		<span class="followed-by"><?php echo $user_info->data->counts->followed_by; ?></span>
		<span class="follows"><?php echo $user_info->data->counts->follows; ?></span>
	</div>
</div>

<div class="media">
	<ul>
		<?php foreach ($medias as $media) : ?>
			<li><img src="<?php echo $media->images->low_resolution->url; ?>" /></li>
		<?php endforeach; ?>
	</ul>
</div>