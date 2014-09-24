<section class="activity worker" data-status="stopped" data-demo="false">
	<form action="" class="form-inline" method="post">
		<div class="activity-head">
			<div class="container">
				<h1>Activity</h1>

				<div class="alert alert-info worker-info-start hidden">
					<a href="#" class="close" data-dismiss="alert">×</a>
					We strongly recommend you not to like, comment, follow
					or unfollow from your phone or other third-party websites,
					as well as use other bots simultaneously with Instagress.
					These actions can lead to errors or password reset.
				</div>

				<div class="alert alert-success worker-stop-reason hidden" data-hidden="true" data-alert-class="alert-success" style="display: none;">
					Your activity automatically stopped:
					<span class="stop-reason"></span>
				</div>

				<div class="alert alert-danger worker-error hidden" data-hidden="true" data-error-type="AuthError" style="display: none;">
					Your activity automatically stopped.
					It looks like your API settings have been reset by Instagram.
					Try log out and log in again.
				</div>

				<div class="alert alert-danger worker-error hidden" data-hidden="true" data-error-type="ActionsError" style="display: none;">
					Your activity automatically stopped.
					It looks like you've reached Instagram limits.
					Try to restart your activity after a while.
				</div>

				<div class="row">
					<div class="span4">
						<div class="title-block">
							<span class="status status-stopped">stopped</span>
						</div>

						
							<div class="resource-cont">
								<div class="resource resource-time ok">
									<span class="label-over">
										Time is over
										<span class="help-tip" title="" data-content="You can start your activity again in less than
												a minute. Simply choose a package from the list on the right side
												and press the &quot;Buy&quot; button." data-original-title="Activity time is over">?</span>
									</span>
									<span class="label-ok">
										Time remaining:
										<span class="help-tip" title="" data-content="Time is counting down only when your activity
												is started. You can use your activity time whenever
												you want." data-original-title="Activity time remaining">?</span>
									</span>
									<div class="counter">5 days 05:34</div>
								</div>

								<div class="mt10">
									<a href="#" class="link-ajax" data-popup-open="#popup-time">How time works?</a>
								</div>
							</div>
						

						<div class="start-stop-cont">
							
								<button class="btn btn-plain btn-big btn-start-stop btn-start
									" data-loading-text="Starting...">Start</button>
								<button class="btn btn-plain btn-big btn-start-stop btn-stop
									hidden" data-loading-text="Stopping..." style="display: none;">Stop</button>
							

							<div class="mt10">
								<a href="#" class="link-ajax" data-popup-open="#popup-start">How to start?</a>
							</div>
						</div>
					</div>

					<div class="span4">
						<div class="title-block">Select what you want to do:</div>

						<div class="todo-control">
							<input type="checkbox" name="like" id="inpLike" class="chk-custom" data-checked="true" checked="">
							<label class="chk-custom todo-toggle toggle-likes" for="inpLike"></label>
							<label class="todo-label" for="inpLike">
								Likes:
								<span class="help-tip" title="" data-content="How many photos and videos you've liked
										since your last activity start." data-original-title="Likes">?</span>
							</label>
							<span class="todo-count count-likes">2</span>
						</div>

						<div class="todo-control">
							<input type="checkbox" name="comment" id="inpComment" class="chk-custom" data-checked="true" checked="">
							<label class="chk-custom todo-toggle toggle-comments" for="inpComment"></label>
							<label class="todo-label" for="inpComment">
								Comments:
								<span class="help-tip" title="" data-content="How many photos and videos you've commented
										since your last activity start." data-original-title="Comments">?</span>
							</label>
							<span class="todo-count count-comments">1</span>
						</div>

						<div class="todo-control">
							<input type="checkbox" name="follow" id="inpFollow" class="chk-custom" data-checked="true" data-disabled="false" checked="">
							<label class="chk-custom todo-toggle toggle-follows" for="inpFollow"></label>
							<label class="todo-label" for="inpFollow">
								Follows:
								<span class="help-tip" title="" data-content="How many users you've followed
										since your last activity start. You can't follow
										and unfollow at the same time." data-original-title="Follows">?</span>
							</label>
							<span class="todo-count count-follows">1</span>
						</div>

						<div class="todo-control">
							<input type="checkbox" name="unfollow" id="inpUnfollow" class="chk-custom" data-checked="false">
							<label class="chk-custom todo-toggle toggle-unfollows" for="inpUnfollow"></label>
							<label class="todo-label" for="inpUnfollow">
								Unfollows:
								<span class="help-tip" title="" data-content="How many users you've unfollowed
										since your last activity start. You can't follow
										and unfollow at the same time." data-original-title="Unfollows">?</span>
							</label>
							<span class="todo-count count-unfollows">0</span>
						</div>
					</div>

					<div class="span4">
						
							<div class="trydemo-cont hidden">
								<div class="title-block">Try our service:</div>

								<div class="trydemo">
									<div class="trydemo-head">3 days</div>
									<div class="trydemo-hint">try for free</div>
								</div>

								<div class="mt10">
									<a href="#" class="link-ajax btn-show-packages">View time packages</a>
								</div>
							</div>

							<div class="payment-cont ">
								<div class="title-block">Buy time package:</div>
								<div class="payment-slider-cont">
									<div class="payment-slider" style="left: 0px;">
										<div class="item -item-ny">
											<span class="num">3</span>
											<span class="units">days</span>
											<span class="price">
												$1.99
											</span>
											<span class="savings">
												$0.66 per day
											</span>
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "3","instagram_id"=> $instagram_id ));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	
										</div>

										<div class="item -item-ny">
											<span class="num">10</span>
											<span class="units">days</span>
											<span class="price">
												$4.99
											</span>
											<span class="savings">
												$0.50 per day
											</span>
											
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "10","instagram_id"=> $instagram_id ));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	

										</div>

										<div class="item -item-ny">
											<span class="num">30</span>
											<span class="units">days</span>
											<span class="price">
												$9.99
											</span>
											<span class="savings">
												$0.33 per day
											</span>
											
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "30","instagram_id"=> $instagram_id ));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	
											
										</div>
									
										<div class="item -item-ny">
											<span class="num">90</span>
											<span class="units">days</span>
											<span class="price">
												$24.99
											</span>
											<span class="savings">
												$0.28 per day
											</span>
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "90","instagram_id" => $instagram_id));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	
											
										</div>
									
										
										<div class="item -item-ny">
											<span class="num">180</span>
											<span class="units">days</span>
											<span class="price">
												$44.99
											</span>
											<span class="savings">
												$0.25 per day
											</span>
											
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "180","instagram_id"=> $instagram_id ));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	
											
										</div>

										<div class="item -item-ny">
											<span class="num">360</span>
											<span class="units">days</span>
											<span class="price">
												$79.99
											</span>
											<span class="savings">
												$0.22 per day
											</span>
											
												<a href="<?php echo Yii::app()->createUrl("user/payment/index",array("type_sale" => "360","instagram_id"=> $instagram_id ));?>" class="btn btn-plain btn-big btn-success btn-buy">Buy</a>	
											
										</div>		
									</div>
								</div>

								<div class="mt10">
									<a href="#" class="link-ajax btn-extra-packages" style="display: inline;">Extra time packages</a>
									<a href="#" class="link-ajax btn-normal-packages hidden" style="display: none;">Normal time packages</a>
								</div>
							</div>
						
					</div>
				</div>
			</div>
		</div>

		<div class="activity-settings container">
			<h2>Main settings</h2>

			<div class="row clearfix">
				<div class="control-group span4" data-field="speed">
					<div class="nice-block">
						<label class="control-label" for="selSpeed">Activity speed:</label>
						<span class="help-tip" title="" data-content="
								Slow — smart speed to do about 800 likes, 200 comments, 250 follows per day.<br/>
								Normal — smart speed to do about 1000 likes, 250 comments, 300 follows per day.<br/>
								Fast — smart speed to do about 1200 likes, 300 comments, 350 follows per day.<br/>
								Try to use Normal speed for the first time and then change it
								to Slow if action errors occur or change it to Fast if no action
								errors occur for a long time.
							  " data-original-title="Activity speed">?</span>

						<select name="speed" id="selSpeed" class="pull-right" data-selected="fast">
							<option value="slow">Slow</option>
							<option value="normal">Normal</option>
							<option value="fast">Fast</option>
						</select>
					</div>
				</div>

				<div class="control-group span4" data-field="source">
					<div class="nice-block">
						<label class="control-label" for="selSource">Media source:</label>
						<span class="help-tip" title="" data-content="You can choose between media from tags or from your feed." data-original-title="Media source">?</span>

						<select name="source" id="selSource" class="pull-right" data-selected="tag">
							<option value="tag">Tags</option>
							<option value="feed">My Feed</option>
						</select>
					</div>
				</div>

				<div class="control-group span4" data-field="newMediaOnly">
					<div class="nice-block">
						<label class="control-label" for="inpNewMediaOnly">New media only:</label>
						<span class="help-tip" title="" data-content="When checking this box you will grab only new media objects.
								Remember, process can wait many time until new media appears in tag
								or in feed." data-original-title="Use only new media">?</span>

						<span class="pull-right">
							<input name="newMediaOnly" id="inpNewMediaOnly" class="chk-custom" type="checkbox" data-checked="false">
							<label class="chk-custom" for="inpNewMediaOnly"></label>
						</span>
					</div>
				</div>
			</div>

			<div class="row clearfix">
				<div class="control-group span4" data-field="minimumLikes">
					<div class="nice-block">
						<label class="control-label" for="inpMinLikes">Min. likes filter:</label>
						<span class="help-tip" title="" data-content="
								Find only media objects with given minimum amount of likes to interact.
								Use it with &quot;Max. likes filter&quot; to set the desired range of media popularity.
								Recommended value: 0-10. Set zero to disable minimum likes filter." data-original-title="Minimum likes filter">?</span>

						<input name="minimumLikes" id="inpMinLikes" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="0">
					</div>
				</div>

				<div class="control-group span4" data-field="maximumLikes">
					<div class="nice-block">
						<label class="control-label" for="inpMaxLikes">Max. likes filter:</label>
						<span class="help-tip" title="" data-content="
								Find only media objects with given maximum amount of likes to interact.
								Use it with &quot;Min. likes filter&quot; to set the desired range of media popularity.
								Recommended value: 50-100. Set zero to disable maximum likes filter." data-original-title="Maximum likes filter">?</span>

						<input name="maximumLikes" id="inpMaxLikes" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="100">
					</div>
				</div>

				<div class="control-group span4" data-field="commentDontSpam">
					<div class="nice-block">
						<!--<div class="new-badge">New!</div>-->
						<label class="control-label" for="commentDontSpam">Don't comment same users:</label>
						<span class="help-tip" title="" data-content="When checking this box you will not comment
							  	more than one photo or video of the same user." data-original-title="Don't comment same users">?</span>

						<span class="pull-right">
							<input name="commentDontSpam" id="commentDontSpam" class="chk-custom" type="checkbox" data-checked="false">
							<label class="chk-custom" for="commentDontSpam"></label>
						</span>
					</div>
				</div>
			</div>

			<div class="row clearfix">
				<div class="control-group span4" data-field="unfollowSource">
					<div class="nice-block">
						<label class="control-label" for="selUnfollowSource">Unfollow source:</label>
						<span class="help-tip" title="" data-content="
								Which users to unfollow?<br/>
								Select &quot;Instagress&quot; if you want to unfollow users which
								were followed only by our service.<br/>
								Select &quot;All&quot; if you want to unfollow all users which
								you follow.
							  " data-original-title="Unfollow source">?</span>

						<select name="unfollowSource" id="selUnfollowSource" class="pull-right" data-selected="db">
							<option value="db">Instagress</option>
							<option value="all">All</option>
						</select>
					</div>
				</div>

				<div class="control-group span4" data-field="unfollowSmart">
					<div class="nice-block">
						<!--<div class="new-badge">New!</div>-->
						<label class="control-label" for="unfollowSmart">Unfollow who don't follow me:</label>
						<span class="help-tip" title="" data-content="When checking this box you will unfollow only users
							  	who don't follow you back. It may take more time for our service
							  	to find them, depending on the number of users you follow
							  	and selected unfollow source." data-original-title="Unfollow who don't follow me">?</span>

						<span class="pull-right">
							<input name="unfollowSmart" id="unfollowSmart" class="chk-custom" type="checkbox" data-checked="false">
							<label class="chk-custom" for="unfollowSmart"></label>
						</span>
					</div>
				</div>
			</div>

			<div class="tags control-group" data-field="tags" data-hidden="false">
				<div class="nice-block">
					<span class="label-wrap">
						<label class="control-label" for="inpAddTags">Tags:</label>
						<span class="help-tip" title="" data-content="Add any number of the tags to get media from.
								You can add tags one by one or by entering as many tags
								in one input as you wish. We recommend using at least 10 tags." data-original-title="Tags">?</span>
					</span>

					<textarea name="tags" id="inpTags" class="hidden">20likes
amazing
followme
follow4follow
like4like
instalike
igers
picoftheday
instadaily
instafollow
instagood
bestoftheday
instacool
instago
all_shots
follow
fuck4</textarea>

					<span class="tags-row">
						<script id="tplTag" type="text/html">
							<span class="tag" data-tag="%tag%">
								<span>%tag%</span>
								<a href="#" tabindex="-1">&times;</a>
							</span>
						</script>

						
							<span class="tag" data-tag="20likes">
								<span>20likes</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="amazing">
								<span>amazing</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="followme">
								<span>followme</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="follow4follow">
								<span>follow4follow</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="like4like">
								<span>like4like</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instalike">
								<span>instalike</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="igers">
								<span>igers</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="picoftheday">
								<span>picoftheday</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instadaily">
								<span>instadaily</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instafollow">
								<span>instafollow</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instagood">
								<span>instagood</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="bestoftheday">
								<span>bestoftheday</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instacool">
								<span>instacool</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="instago">
								<span>instago</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="all_shots">
								<span>all_shots</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="follow">
								<span>follow</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="tag" data-tag="fuck4">
								<span>fuck4</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
					</span>

					<div class="input-append">
						<input id="inpAddTags" type="text">
						<div class="btn-group">
							<button class="btn btn-plain btn-add-tags" tabindex="-1">Add</button>
							<button class="btn btn-plain dropdown-toggle" data-toggle="dropdown" tabindex="-1">
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li><a href="#" class="btn-del-tags">Delete all tags</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="comments control-group" data-field="comments" data-hidden="false">
				<div class="nice-block">
					<span class="label-wrap">
						<label class="control-label" for="inpAddComments">Comments:</label>
						<span class="help-tip" title="" data-content="Add any number of the comments to comment media.
								Comments for each photo or video will be selected randomly.
								Our system remembers commented photos and videos to interact
								with them only once. We recommend using at least 10 different
								neutral comments like: Nice, Like it, Beautiful, etc." data-original-title="Comments">?</span>
					</span>

					<textarea name="comments" id="inpComments" class="hidden">Nice!
Like it!
Wow!
Beautiful!
Great!
Cool!
Nice pic!
So nice!
Super!
Amazing!
Lovely!
Ahhh!
Love it!
Very cool!
Superb!
Wow like it!
Good shot!
Very best!
Pretty!</textarea>

					<span class="comments-row">
						<script id="tplComment" type="text/html">
							<span class="comment" data-comment="%comment%">
								<span>%comment%</span>
								<a href="#" tabindex="-1">&times;</a>
							</span>
						</script>

						
							<span class="comment" data-comment="Nice!">
								<span>Nice!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Like it!">
								<span>Like it!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Wow!">
								<span>Wow!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Beautiful!">
								<span>Beautiful!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Great!">
								<span>Great!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Cool!">
								<span>Cool!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Nice pic!">
								<span>Nice pic!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="So nice!">
								<span>So nice!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Super!">
								<span>Super!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Amazing!">
								<span>Amazing!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Lovely!">
								<span>Lovely!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Ahhh!">
								<span>Ahhh!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Love it!">
								<span>Love it!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Very cool!">
								<span>Very cool!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Superb!">
								<span>Superb!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Wow like it!">
								<span>Wow like it!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Good shot!">
								<span>Good shot!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Very best!">
								<span>Very best!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
							<span class="comment" data-comment="Pretty!">
								<span>Pretty!</span>
								<a href="#" tabindex="-1">×</a>
							</span>
						
					</span>

					<div class="input-append">
						<input id="inpAddComments" type="text" maxlength="260">
						<div class="btn-group">
							<button class="btn btn-plain btn-add-comments" tabindex="-1">Add</button>
							<button class="btn btn-plain dropdown-toggle" data-toggle="dropdown" tabindex="-1">
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li><a href="#" class="btn-del-comments">Delete all comments</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h2>Auto-stop settings</h2>

			<div class="row clearfix">
				<div class="control-group span4" data-field="likeLimit">
					<div class="nice-block">
						<label class="control-label" for="inpLikeLimit">Likes counter:</label>
						<span class="help-tip" title="" data-content="When this number of likes will be done your activity
							  	will be stopped automatically. Set zero for no limit." data-original-title="Likes counter">?</span>

						<input name="likeLimit" id="inpLikeLimit" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="0">
					</div>
				</div>

				<div class="control-group span4" data-field="commentLimit">
					<div class="nice-block">
						<label class="control-label" for="inpCommentLimit">Comments counter:</label>
						<span class="help-tip" title="" data-content="When this number of comments will be done your activity
							  	will be stopped automatically. Set zero for no limit." data-original-title="Comments counter">?</span>

						<input name="commentLimit" id="inpCommentLimit" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="0">
					</div>
				</div>

				<div class="control-group span4" data-field="followLimit">
					<div class="nice-block">
						<label class="control-label" for="inpFollowLimit">Follows counter:</label>
						<span class="help-tip" title="" data-content="When this number of follows will be done your activity
							  	will be stopped automatically. Set zero for no limit." data-original-title="Follows counter">?</span>

						<input name="followLimit" id="inpFollowLimit" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="0">
					</div>
				</div>
			</div>

			<div class="row clearfix">
				<div class="control-group span4" data-field="unfollowLimit">
					<div class="nice-block">
						<label class="control-label" for="inpUnfollowLimit">Unfollows counter:</label>
						<span class="help-tip" title="" data-content="When this number of unfollows will be done your activity
							  	will be stopped automatically. Set zero for no limit." data-original-title="Unfollows counter">?</span>

						<input name="unfollowLimit" id="inpUnfollowLimit" class="pull-right" type="number" min="0" max="9999999999" maxlength="10" value="0">
					</div>
				</div>

				<div class="control-group span4" data-field="timeLimit">
					<div class="nice-block">
						<label class="control-label" for="inpTimeLimit">Timer:</label>
						<span class="help-tip" title="" data-content="For example, if you set it to 01:00, then your activity
							  	will stop automatically after one hour. If you leave it empty, then
							  	activity will work infinite or while Instagram limits for your
							  	account not will be reached." data-original-title="Timer">?</span>

						<input name="timeLimit" id="inpTimeLimit" class="pull-right" type="text" maxlength="5" placeholder="00:00" value="">
					</div>
				</div>

				<div class="control-group span4" data-field="unfollowAutoStop">
					<div class="nice-block">
						<!--<div class="new-badge">New!</div>-->
						<label class="control-label" for="unfollowAutoStop">Stop if no users to unfollow:</label>
						<span class="help-tip" title="" data-content="When checking this box your activity will be stopped automatically
							  	if no more users to unfollow from the selected unfollow source." data-original-title="Stop if no users to unfollow">?</span>

						<span class="pull-right">
							<input name="unfollowAutoStop" id="unfollowAutoStop" class="chk-custom" type="checkbox" data-checked="false">
							<label class="chk-custom" for="unfollowAutoStop"></label>
						</span>
					</div>
				</div>
			</div>

			<div class="mt20">
				<a href="#" class="link-ajax text-small btn-settings-reset">
					Reset all settings to default values
				</a>
			</div>
		</div>
	</form>
</section>