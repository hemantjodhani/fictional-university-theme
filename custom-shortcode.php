<?php
    function top_5_posts(){
        // ob_start();
        $title = "";
        $last_5_posts = new WP_Query(array(
            'posts_per_page' => 5,
            'post_type' => 'event'
          ));
        while($last_5_posts->have_posts()){
            $last_5_posts->the_post();
            $title .= get_the_title()."<br>";
        }
        
        // return ob_get_clean();
        return $title;
    }
    add_shortcode('latest_posts','top_5_posts')
?>