 <header class="clearfix">
        <img src="assets/instagram.png" alt="Instagram logo">
        <h1>Instagram photos <span>taken by <?php echo $username ?></span></h1>
      </header>
      <div class="main">
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
            $comment = $media->caption->text;
            $content .= "<div class=\"content\">
                           <div class=\"avatar\" style=\"background-image: url({$avatar})\"></div>
                           <p>{$username}</p>
                           <div class=\"comment\">{$comment}</div>
                         </div>";
            
            // output media
            echo $content . "</li>";
          }
        ?>
        </ul>