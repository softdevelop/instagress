<?php /* 
<div class="add"><a href="/user/account/add">Add account</a></div>

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
						<button class="btn btn-plain btn-big btn-add-account btn-danger"
								data-popup-open="#popup-login">Add account</button>
					</div>
				</div>

				<div class="span4">
					<div class="title-block">Something interesting coming soon!</div>
					<button class="btn btn-plain btn-big input-block-level" disabled>New features!</button>

					
				</div>
			</div>
		</div>
	</div>

	
		<div class="nocontent mt90">
			No accounts added yet
		</div>
	
</section>