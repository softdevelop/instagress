<article>
    <div class="update">
        <h2><a href="<?php echo Yii::app()->createUrl('/user/company/edit');?>">Edit your company info</a></h2>
        <p>
            Upload a logo, add a company description, change your budget range or website URL. Add a sales contact email.
        </p>
    </div>
    <div class="update">
        <h2><a href="/user/portfolio">Manage portfolio images</a></h2>
        <p>Add or edit your portfolio images. All free accounts include 1 image. Pro plans can add up to 6 images.</p>
    </div>
    <div class="update betadata">
        <h2><a href="#">Edit beta information</a></h2>
        <p>
            We're hard at work on new site features. To deploy these features, we need some additional information. You can add that information here.
        </p>
        <div class="minty">
            <span class="icon" data-icon=""></span>
            <strong>Don’t forget to add this information</strong>
            <p>Be ready for new site features by <a href="#">updating your information</a>.</p>
        </div>
    </div>
    <div class="update">
        <h2><a href="/user/account/edit">Manage your account</a></h2>
        <p>
            Update your account email or password.
        </p>
    </div>
</article>
<div class="example_card free">
    <h3>Your company is listed in <a href="/"><?php echo $company->city->name;?></a>.</h3>
    <div class="card free" id="card_<?php echo $company->id;?>">

        <header>
            <h2><?php echo $company->name?></h2>
            <div class="details">
                <div class="budget"><?php echo $company->budget->name;?></div>
                <div class="location"><?php echo $company->city->name;?></div>
            </div>

        </header>
        <div class="image">
            <img alt="" class="tipify_image" src="<?php if(isset($company->portfolio[0])) echo Yii::app()->request->baseUrl . WWWROOT_FRONTEND . "/images/company/portfolio/small_" . $company->portfolio[0]->path ?>" title="This is perfect project">
        </div>
        <div class="actions">
            <div class="view">
                <span class="label">view details</span>
                <span class="icon" data-icon=""></span>
            </div>
            <div class="shortlist">
                <span class="label">shortlist?</span>
                <span class="icon" data-icon=""></span>
            </div>
        </div>

        <script>
            //<![CDATA[
            (function() {
                var card = $("#card_"+ <?php echo $company->id;?>);

                card.find(".slideshow ul").responsiveSlides({
                    speed: 100,
                    auto: false,
                    pager: true,
                    nav: true,
                    navContainer: card.find(".slideshow .pagination"),
                    namespace: 'slides',
                    prevText: '&#xe002;',
                    nextText: '&#xe003;'
                });
            }());
            //]]>
        </script>


    </div>

    <div class="view-link"><a href="/company/<?php echo $company->alias;?>">View your listing page</a></div>
    <div class="upgrade">
        <h2><a href="/plan/learn">Upgrade to Sortfolio Pro today</a></h2>
        <ul>
            <li>
            <u>Be seen by more prospects</u>
            - Pro listings are displayed before free listings, so you can be sure your company is being seen by all potential clients.
            </li>
            <li>
            <u>Show off more work</u>
            - Pro listings can feature six images instead of just one, so potential clients will see more of what you do. You're good at what you do, let your work speak for itself.
            </li>
            <li>
            <u>Make a big first impression</u>
            - Pro listing cards are big - four times as big. That means potential clients can actually see your images instead of smaller thumbnails while browsing.
            </li>
            <li>
            <u>Increase brand awareness</u>
            - You already know how vital branding is. Pro listings display your logo right on the card, providing you an opportunity to get your logo in from of potential clients.
            </li>
        </ul>
        <a href="/plan/learn">Learn more about Sortfolio Pro</a>
    </div>
</div>