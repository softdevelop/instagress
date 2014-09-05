<article>
    <?php $form = $this->beginWidget('CActiveForm', array(
                'id' => 'edit-portfolio',
                'htmlOptions' => array('enctype' => 'multipart/form-data'),
    ));?>
    <?php echo $form->errorSummary($portfolio, $header = '');?>
    <h1>Edit portfolio image</h1>
        <img alt="26069_1393663162.medium" class="image" src="<?php echo Yii::app()->request->baseUrl . WWWROOT . '/images/portfolio/thumb_' . $portfolio->path; ?>">
        <div class="meta-data">
            <div class="element">
                <label for="portfolio_image_image">Image:</label>
                <input id="portfolio_image_image" name="Portfolio[path]" type="file">
            </div>
            <div class="element">
                <label for="portfolio_image_client_name">Client:</label>
                <?php echo $form->textField($portfolio, 'client');?>
            </div>
            <div class="element">
                <label for="portfolio_image_industry_id">Industry:</label>
                <select id="portfolio_image_industry_id" name="Portfolio[industry_id]">
                    <option value=""></option>
                    <?php foreach ($industries as $key => $industry) {?>
                            <option value="<?php echo $industry->id?>"><?php echo $industry->name?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="element">
                <label for="portfolio_image_technology_id">Technology:</label>
                <select id="portfolio_image_technology_id" name="Portfolio[technology_id]">
                    <option value=""></option>
                    <?php foreach ($technologies as $key => $technology) {?>
                            <option value="<?php echo $technology->id?>"><?php echo $technology->name?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="element">
                <label for="portfolio_image_platform_id">Platform:</label>
                <select id="portfolio_image_platform_id" name="Portfolio[platform_id]">
                    <option value=""></option>
                    <?php foreach ($platforms as $key => $platform) {?>
                            <option value="<?php echo $platform->id?>"><?php echo $platform->name?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="element">
                <label for="portfolio_image_project_type_id">Project Type:</label>
                <select id="portfolio_image_project_type_id" name="Portfolio[project_type_id]">
                    <option value=""></option>
                    <?php foreach ($projectypes as $key => $projectype) {?>
                            <option value="<?php echo $projectype->id?>"><?php echo $projectype->name?></option>
                    <?php } ?>
                </select>
            </div>
        </div>
        <div class="description">
            <div class="element">
                <label for="portfolio_image_description">Description</label>
                <?php echo $form->textArea($portfolio, 'description', array('rows' => 20, 'cols' => 40)); ?>
            </div>
        </div>
        <input name="commit" type="submit" value="save image">
    <?php $this->endWidget();?>

</article>