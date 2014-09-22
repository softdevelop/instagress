<?php /* 

*/ ?>

<section class="account-index">
	<div class="account-index-head">
		<div class="container">
			<h1>Dashboard</h1>

			<div class="row">
				<div class="span4">
					

					<div class="-start-stop-cont">
						<div class="title-block -mb10">Start/stop all accounts:</div>

						<button id="btn-start-all" class="btn btn-plain btn-big btn-start-stop btn-danger"
								data-loading-text="Start all">Start all</button>
						<button id="btn-stop-all" class="btn btn-plain btn-big btn-start-stop"
								data-loading-text="Stop all">Stop all</button>

						<div class="row mt10">
							<div class="span2 color-red">
								<span id="count-started">0</span> started
							</div>
							<div class="span2 color-gray ml0">
								<span id="count-stopped">0</span> stopped
							</div>
						</div>
					</div>
				</div>

				<div class="span4">
					<div class="title-block">Add new account to your dashboard:</div>
					<div class="-add-account">
						<button onclick="logout();" class="btn btn-plain btn-big btn-add-account btn-danger"
								data-popup-open="#popup-login">Add account</button>
					</div>
				</div>
				<script type="text/javascript">
					function logout() {
						$("body").append('<div style="display:none"><iframe class="logout_frame" src="https://instagram.com/accounts/logout/" width="0" height="0"></iframe></div>');
						
						window.location.href='<?php echo $loginUrl ?>';
					}
				</script>
				<div class="span4">
					<div class="title-block">Something interesting coming soon!</div>
					<button class="btn btn-plain btn-big input-block-level" disabled>New features!</button>

					
				</div>
			</div>
		</div>	
	</div>

	<?php if($models == null): ?>
		<div class="nocontent mt90">
			No accounts added yet
		</div>
	<?php else: ?>
	<div class="account-index-list container">
			<div class="row">
				<div class="span4">
					<h2>Accounts</h2>
				</div>
				<div class="span8">
					<ul class="account-sort-menu">
						<li>Sort:</li>
						<li><a href="">Default</a></li>
						<li><a href="">Username</a></li>
						<li><a href="">Status</a></li>
					</ul>
				</div>
			</div>
			<div class="row clearfix">
				<?php 
					foreach($models as $model): 
						$user = User::model()->findByPk($model->user_child_id);
					if (isset($user)) :
				?>

					<div class="span4">
						<div class="account-entry nice-block mb20" data-user-id="53faed1f0a2d103173003083" data-username="softdevelopinc">
							<img src="<?php echo $user->avatar;?>" width="50" style="float:left"/>
							<div class="account-head">
								
								<a href="#" class="account-avatar" alt="softdevelopinc">
									<span class="account-username"><?php echo $user->username; ?></span>
								</a>
								<div class="account-type">Instagram</div>
								<div class="account-type-icon fa fa-instagram fa-lg"></div>
							</div>
							<hr>
							<div class="stat-row">
								<div class="stat-name">Activity:</div>
								<div class="stat-value status status-stopped">
									<span class="status-text">stopped</span>
									<span class="stat-alert alert-success hidden" data-alert-class="success" data-hidden="true" data-toggle="tooltip" title="" style="display: none;" data-original-title="Activity automatically stopped:<br/>"></span>
								</div>
							</div>
							<div class="stat-row">
								<div class="stat-name">Time:</div>
								<div class="stat-value payment-timer">
									<span class="label-ok ">5 days 05:34</span>
									<span class="label-over color-red hidden" style="display: none;">
										Time is over
									</span>
								</div>
							</div>
							<hr>
							<div class="stat-row">
								<div class="stat-name">Likes:</div>
								<div class="stat-value todo-count count-likes">2</div>
							</div>
							<div class="stat-row">
								<div class="stat-name">Comments:</div>
								<div class="stat-value todo-count count-comments">1</div>
							</div>
							<div class="stat-row">
								<div class="stat-name">Follows:</div>
								<div class="stat-value todo-count count-follows">1</div>
							</div>
							<div class="stat-row">
								<div class="stat-name">Unfollows:</div>
								<div class="stat-value todo-count count-unfollows">0</div>
							</div>
							
							<hr>
							<div class="stat-row mt10">
								<div class="stat-name">Start time:</div>
								<div class="stat-value time-start">Sep 11 2014 2:59 PM</div>
							</div>
							<div class="stat-row">
								<div class="stat-name">Stop time:</div>
								<div class="stat-value time-stop">Sep 11 2014 3:01 PM</div>
							</div>
							<hr>
							<div class="mt10">
								<button class="btn btn-plain btn-start-stop btn-start mr10
									" data-loading-text="Start">Start</button>
								<button class="btn btn-plain btn-start-stop btn-stop mr10
									hidden" data-loading-text="Stop" style="display: none;">Stop</button>

								<a href="/account/user/select/53faed1f0a2d103173003083" class="btn btn-plain mr10">Settings</a>

								<div class="btn-group pull-right">
									<button type="button" class="btn btn-plain dropdown-toggle" data-toggle="dropdown">
										More <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="/account/user/select/53faed1f0a2d103173003083?next=/profile">Profile</a></li>
										<li><a href="/account/user/select/53faed1f0a2d103173003083?next=/likes">Likes</a></li>
										<li class="divider"></li>
										<li><a href="/account/user/remove/53faed1f0a2d103173003083">Log out</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				<?php endif;endforeach; ?>	
			</div>
		</div>
<?php endif; ?>
</section>