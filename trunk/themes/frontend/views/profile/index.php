<div class="main-info">
	<div class="profile-picture"><img src="<?php echo @$user_info->data->profile_picture; ?>" /></p></div>
	<div class="user-name"><p><strong><?php echo @$user_info->data->username; ?></p></strong></div>
	<div class="web"><?php echo @$user_info->data->website; ?></div>
	
	<div class="follow-number">
		<span class="followed-by">Post : <?php echo count(@$medias); ?></span>	
		<span class="followed-by">Followed : <?php echo @$user_info->data->counts->followed_by; ?></span>
		<span class="follows">Following : <?php echo @$user_info->data->counts->follows; ?></span>
	</div>
</div>

<div class="media">
	<ul class="grid">
		<?php if (isset($medias)) :?>
			<?php foreach ($medias as $media) : ?>
				<li>
					<img src="<?php echo $media->images->low_resolution->url; ?>" />
					<span>Like : <?php echo $media->likes->count; ?></span>
					<span>Comment : <?php echo $media->comments->count; ?></span>
				</li>
			<?php endforeach; ?>
		<?php endif;?>
	</ul>
</div>