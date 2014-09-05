
<div class="portfolio_images">
    <div class="portfolio_image" id="portfolio_image_26045"><div class="image">
            <img alt="26045_1393467683.small" src="<?php echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND . '/images/company/portfolio/small_' .$portfolio->path ?>" />

        </div>
        <div class="meta-data">
            <div class="client_name">
                <label>Client:</label>
                <div class="value"><?php echo $portfolio->client;?></div>
            </div>
            <div class="industry">
                <label>Industry:</label>
                <div class="value"><?php echo isset($portfolio->industry->name) ?   $portfolio->industry->name : '' ;?></div>
            </div>
            <div class="technology">
                <label>Technology:</label>
                <div class="value"><?php echo isset($portfolio->technology->name) ?   $portfolio->technology->name : '' ;?></div>
            </div>
            <div class="platform">
                <label>Platform:</label>
                <div class="value"><?php echo isset($portfolio->platform->name) ?   $portfolio->platform->name : '' ;?></div>
            </div>
            <div class="project_type">
                <label>Project Type:</label>
                <div class="value"><?php echo isset($portfolio->projectType->name) ?   $portfolio->projectType->name : '' ;?></div>
            </div>
        </div>
        <div class="description">
            <label>Description</label>
            <div class="value"><?php echo $portfolio->description;?></div>
        </div>
        <ul class="actions">
            <li><a href="/user/portfolio/edit/<?php echo $portfolio->id;?>" class="edit button small">edit</a></li>
            <li><a href="/user/portfolio/delete/<?php echo $portfolio->id;?>" class="delete button small warn" data-confirm="Are you sure? This action cannot be undone." data-method="delete" rel="nofollow">delete</a></li>
        </ul>
    </div>
    <div style="clear: left;"></div>
</div>