<div id='title'>
            <header>
                <hgroup>
                    <h1>Find the right web designer for your next project.</h1>
                </hgroup>
            </header>
        </div>
        <section id='actionbar'>
            <div id='searchbar'>
                <ul class='filters'>
                    <li>Showing all web designers in &nbsp;</li>
                    <li class='menu'>
                        <a href="#" id="search_location_name">any city</a>
                        <div class='search_menu' id='search_location_menu' style='display:none'>
                            <a href="<?php echo Yii::app()->getBaseUrl(true);?>" class="search_location_menu_links clear_filters">any city</a>
                            <?php $getCityMenu = City::model()->getTopCity(); 
								foreach ($getCityMenu as $key =>$value):
							?>
								<a href="<?php echo Yii::app()->createUrl('/'.$value->alias); ?>" class="search_location_menu_links"><?php echo $value->name; ?></a>
							
							<?php endforeach;?>
							
                            <div class='last_menu'>
                                <a href="<?php echo Yii::app()->CreateUrl('/cities')?>" class="search_location_menu_links">List all cities</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        &nbsp; who work on projects
                        for
                        &nbsp;
                    </li>
                    <li class='menu'>
                        <a href="#" id="search_budget_name">any budget</a>
                        <div class='search_menu' id='search_budget_menu' style='display:none'>
                            <a href="<?php echo Yii::app()->getBaseUrl(true);?>" class="search_budget_menu_links clear_filters">any budget</a>
							<?php foreach ($budget as $key=>$value):?>
								<a href="<?php echo Yii::app()->createUrl('/budgetid/'.$value->alias);?>" class="search_budget_menu_links"><?php echo $value->name; ?></a>
							<?php endforeach;?>
                        </div>
                    </li>
                </ul>

            </div>


        </section>