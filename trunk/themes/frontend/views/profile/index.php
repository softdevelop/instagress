<?php /*
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
*/ ?>

<section class="profile">
	<div class="profile-head">
		<div class="container">
			<h1>Profile</h1>

			<div class="row">
				
					<div class="span6">
						
							<div class="fullname">
								duong
							</div>
						

						

						
							<div class="website">
								<a href="http://softdevelopvn.com" target="_blank">http://softdevelopvn.com</a>
							</div>
						
					</div>
				

				<div class="span6">
					<div class="row">
						<div class="span2">
							
							<div class="count-box countPosts">
								<span>2</span>
								Posts
							</div>
						</div>
						<div class="span2">
							
							<div class="count-box countFollowers">
								<span>37</span>
								Followers
							</div>
						</div>
						<div class="span2">
							
							<div class="count-box countFollowings">
								<span>343</span>
								Followings
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container profile-media">
		<div class="row">
			
	
	<div class="span3">
		<div class="media-thumb" data-media-id="794742386113091959_1474648557">
			<img src="http://scontent-a.cdninstagram.com/hphotos-xpa1/t51.2885-15/927428_281907808682039_2110243726_a.jpg" alt="My company logo"/>
			<div class="tools">
				<i class="icon icon-like"></i> <span>14</span>
				<i class="icon icon-comment"></i> <span>1</span>
			</div>
		</div>
	</div>

	
	<div class="span3">
		<div class="media-thumb" data-media-id="794688127002712683_1474648557">
			<img src="http://scontent-b.cdninstagram.com/hphotos-xap1/t51.2885-15/928647_1404287233127184_234234325_a.jpg" alt="hehe"/>
			<div class="tools">
				<i class="icon icon-like"></i> <span>12</span>
				<i class="icon icon-comment"></i> <span>2</span>
			</div>
		</div>
	</div>


		</div>
		<div class="text-align-center">
			<button class="btn btn-plain btnMediaLoad"
					data-endpoint="/profile/media"
					data-next_max_id=""
					data-container=".container.profile-media .row"
					data-loading-text="Loading more...">Load more</button>
		</div>
	</div>
</section>
