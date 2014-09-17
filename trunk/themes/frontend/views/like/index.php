<?php /*
<ul class="grid">
  <?php
    // display all user likes
    foreach ($result->data as $media) {
      $content = "<li>";
      
      // output media
      if ($media->type === 'video') {
        // video
        $poster = $media->images->low_resolution->url;
        $source = $media->videos->standard_resolution->url;
        $content .= "<video class=\"media video-js vjs-default-skin\" width=\"250\" height=\"250\" poster=\"{$poster}\"
                     data-setup='{\"controls\":true, \"preload\": \"auto\"}'>
                       <source src=\"{$source}\" type=\"video/mp4\" />
                     </video>";
      } else {
        // image
        $image = $media->images->low_resolution->url;

        $content .= "<img class=\"media\" src=\"{$image}\"/>";
      }
      
      // create meta section
      $avatar = $media->user->profile_picture;
      $username = $media->user->username;
     
      $content .= "<div class=\"content\">
                     <div class='like'>like : {$media->likes->count}</div>
                     <div class=\"comment\">comment : {$media->comments->count}</div>
                   </div>";
      
      // output media
      echo $content . "</li>";
    }
  ?>
  </ul>
  */ ?>
  <section class="likes">
  <div class="container likes-media">
    <h1>Likes</h1>
    <div class="row">
      
  <?php
    // display all user likes
    foreach ($result->data as $media) { ?>
    <div class="span3">
      <div class="media-thumb" data-media-id="807003995601795865_257242717">
        <img src="<?php echo $media->images->low_resolution->url;?>" alt="It's a good day to have good day! #goodmorning #morning #day #daytime #sunrise #morn #awake #wakeup #wake #wakingup #ready #sleepy #breakfast #tired #sluggish #bed #snooze #instagood #earlybird #sky #photooftheday #gettingready #goingout #sunshine #instamorning #work #early #fresh #refreshed"/>
        <div class="tools">
          <i class="icon icon-like"></i> <span><?php echo $media->likes->count; ?></span>
          <i class="icon icon-comment"></i> <span><?php echo $media->comments->count; ?></span>
        </div>
      </div>
    </div>

    <?php } ?>

    </div>
    <?php /*
    <div class="text-align-center">
      <button class="btn btn-plain btnMediaLoad"
          data-endpoint="/likes/media"
          data-next_max_id="797047375889286421"
          data-container=".container.likes-media .row"
          data-loading-text="Loading more...">Load more</button>
    </div> */ ?>
  </div>
</section>