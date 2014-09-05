<article>
    <h1>Add portfolio images</h1>
    <p>
        <strong>For best results upload a 900 x 630 JPG or PNG.</strong>
        <em>Don’t have that size? We’ll resize what you have to make sure it fits.</em>
        All uploaded images go through an approval process so that no offensive or pornographic imagery gets into the system.
        We’ll send you an email once your image has been approved.
    </p>
    <?php
        if(isset($company->user) && $company->user->type == 1)
        {
            if (count($company->portfolio) > 0) 
            {
                foreach ($company->portfolio as $key => $portfolio) {
                    $this->renderPartial('_portfolio', array(
                        'portfolio' => $portfolio
                    ));
                }
            }

            for ($i = 1; $i <= 6 - count($company->portfolio); $i++) 
            {
                $this->renderPartial('_addbut');
            }
        }
        elseif(isset($company->user) && $company->user->type == 2)
        {
            if(!empty($company->portfolio))
            {
                $this->renderPartial('_portfolio', array(
                        'portfolio' => $company->portfolio[0]
                    ));
            }
            
        }

       
    ?>
    <h2>Upload more images with Sortfolio Pro</h2>
    <p>
        Sortfolio Pro allows you to upload up to six portfolio images. It also gives you preferred placement and a raft of other benefits.
    </p>
    <p>
        <a href="/plan/learn">Learn About Sortfolio Pro</a>
    </p>
</article>