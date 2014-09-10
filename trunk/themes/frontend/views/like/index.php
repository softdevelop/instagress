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