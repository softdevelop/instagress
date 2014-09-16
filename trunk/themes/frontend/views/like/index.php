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
  */
  ?>
  <section class="likes">
  <div class="container likes-media">
    <h1>Likes</h1>
    <div class="row">
      
  
  <div class="span3">
    <div class="media-thumb" data-media-id="807003995601795865_257242717">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10643845_960560710624507_320355667_a.jpg" alt="It's a good day to have good day! #goodmorning #morning #day #daytime #sunrise #morn #awake #wakeup #wake #wakingup #ready #sleepy #breakfast #tired #sluggish #bed #snooze #instagood #earlybird #sky #photooftheday #gettingready #goingout #sunshine #instamorning #work #early #fresh #refreshed"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>45</span>
        <i class="icon icon-comment"></i> <span>0</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="807003743473300295_1338732235">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598437_539589149504635_1115947752_a.jpg" alt="#love #TagsForLikes @TagsForLikes #instagood #me #smile #follow #cute #photooftheday #tbt #followme #tagsforlikes #girl #beautiful #happy #picoftheday #instadaily #food #swag #amazing #TFLers #fashion #igers #fun #summer #instalike #bestoftheday #smile #like4like #friends #instamood"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>19</span>
        <i class="icon icon-comment"></i> <span>2</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="806882168851684394_583590022">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10693253_695701333853846_1044608203_a.jpg" alt=""/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>10</span>
        <i class="icon icon-comment"></i> <span>1</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="806314270796441257_708627456">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10632020_769935623048351_1197933826_a.jpg" alt="Stellina mia⭐️
#retrica #io #moi #love #TagsForLikes #TFLers #photooftheday #20likes #amazing #smile #follow4follow #like4like #picoftheday #food #instafollow #girl #iphoneonly #instagood #bestoftheday #style #summer2014 #sun #bestfriends"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>50</span>
        <i class="icon icon-comment"></i> <span>0</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="806315271868611983_550248294">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10617146_296301983889461_1296997009_a.jpg" alt="#vscocam #vsco #vscogood #ra2019 #ravenna #ig_ravenna #instaravenna #igersitalia #igfriends_emiliaromagna #instacool #photooftheday #photographer #mobilephotography #picoftheday #turismoer #ig_emiliaromagna #igfriends_emiliaromagna_ #bnw #bn  #white #monochrome #bnw_addicted"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>22</span>
        <i class="icon icon-comment"></i> <span>0</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="806318686424363346_1228586371">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10665612_475788635883372_205980883_a.jpg" alt="Please follow her ❤️ @laura_997__  @laura_997__ @laura_997__ @laura_997__ @laura_997__ @laura_997__ @laura_997__ #love #TagsForLikes @TagsForLikes #instagood #me #smile #follow #cute #photooftheday #tbt #followme #tagsforlikes #girl #beautiful #happy #picoftheday #instadaily #food #swag #amazing #TFLers #fashion #igers #fun #summer #instalike #bestoftheday #smile #like4like #friends #instamood"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>29</span>
        <i class="icon icon-comment"></i> <span>2</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="796829713248821843_222802823">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10607883_797488396938009_365619276_a.jpg" alt="Art study number one.🎨"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>41</span>
        <i class="icon icon-comment"></i> <span>3</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="780471090246899812_1343037101">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10570023_823203937712874_1341120077_a.jpg" alt="#wander #wanderlust #webstagram #worldplaces #explore #tweegram #trip #instagramers #instagramhub #instasummer #instamoment #iphoneonly #instadaily #instahub #ignature #igers #instago #instapic #instacool #ig_norway #outdoorlife #picoftheday #hiking"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>49</span>
        <i class="icon icon-comment"></i> <span>2</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="794135945791999513_183794930">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598541_1473458056252304_1501321830_a.jpg" alt="• football match •"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>26</span>
        <i class="icon icon-comment"></i> <span>1</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="796829734890673008_1421312083">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xpa1/t51.2885-15/923776_713161102065666_72916514_a.jpg" alt="This is sooo cool, thank you! @tayls__"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>42</span>
        <i class="icon icon-comment"></i> <span>5</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="796829916381085276_1418384894">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10616751_1459071527688758_700384693_a.jpg" alt="#selfie #nofilter @TagsForLikes #TagsForLikes #webstagram #follow4follow #iphoneonly #instago #pretty #l4l #my #style #family #instacool #life #hair #instafollow #likeforlike #eyes #christmas #20likes #funny #colorful #sun #bored #look #lol #tweegram #all_shots #nice #cool"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>27</span>
        <i class="icon icon-comment"></i> <span>2</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="796829937625477959_1439541035">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10643937_1479867308938161_1255219781_a.jpg" alt=""/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>33</span>
        <i class="icon icon-comment"></i> <span>4</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="796829746830302970_1433469662">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10644056_295550130630947_890814586_a.jpg" alt="#vscogood #instamood #amazing #instalike #instahub #all_shots #vscocam #swag #такяснимаю #photooftheday #picoftheday #iphoneonly #instagood #bestoftheday #instacool #instafollow
#tweegram #instago#punk
#moscow#russia#instagramrussia#crazy#unique
#love #life #swag #dope
#fashion#monochrome"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>20</span>
        <i class="icon icon-comment"></i> <span>3</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="794495344603436508_195104740">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10597323_278006865729510_769211485_a.jpg" alt="🌼las🌼guapas🌼"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>65</span>
        <i class="icon icon-comment"></i> <span>4</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="533030489835807823_1486896">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xap1/outbound-distilleryimage7/t0.0-17/OBPTH/b143c6a8107e11e3819322000a1faa24_6.jpg" alt="In and out of the casino in less than half an hour 😓 #atriptotheseoul"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>6</span>
        <i class="icon icon-comment"></i> <span>3</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="776317270666281794_240911055">
      <img src="http://scontent-a.cdninstagram.com/hphotos-xap1/t51.2885-15/10537998_700562096664800_371094325_a.jpg" alt="Vanishing Point"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>12</span>
        <i class="icon icon-comment"></i> <span>1</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="797047368452477031_247304419">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xfa1/t51.2885-15/10617041_719935404708510_1600824133_a.jpg" alt="Forever living Clean 9 x ritrovare la sintonia con se stessi.....
#foreverliving #benessere #follow #follow4follow #followback #followme #followback"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>7</span>
        <i class="icon icon-comment"></i> <span>2</span>
      </div>
    </div>
  </div>

  
  <div class="span3">
    <div class="media-thumb" data-media-id="797047375889286421_1472575624">
      <img src="http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10616763_704522696290702_138695034_a.jpg" alt="🔵🔵His girlfriend just broke up with him and he's giving his number # out to everyone who follows him 🔴🔴
🔵🔵Comment&quot;your so fine😘😍&quot; or &quot;Bae😍😘&quot; on one of his pictures to get noticed🔴🔴 💕😭😍@xpapi__😍😭💕
💕😭😍@xpapi__😍😭💕
💕😭😍@xpapi__😍😭💕
💕😭😍@xpapi__😍😭💕
😍 He's following back the next 100 CUTE girls who follow spam/likes and leave comments so hurry up😍 #Rate #tbh #cute #sixpack #abs #cutie #Tumblrboy #followme #followforfollow #follow4follow #likeforlike #l4l #kikme #twerk #summer #hottie #recent4recent #shoutout #followers #snapchat #s4s #likeforfollow #wcw #boys #followhim #instafollow #selfie #perfect #boyfriend #followback"/>
      <div class="tools">
        <i class="icon icon-like"></i> <span>10</span>
        <i class="icon icon-comment"></i> <span>0</span>
      </div>
    </div>
  </div>


    </div>
    <div class="text-align-center">
      <button class="btn btn-plain btnMediaLoad"
          data-endpoint="/likes/media"
          data-next_max_id="797047375889286421"
          data-container=".container.likes-media .row"
          data-loading-text="Loading more...">Load more</button>
    </div>
  </div>
</section>