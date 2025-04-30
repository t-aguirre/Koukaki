<?php
// Check if the request was made and if there are results
if (isset($args['characters_query']) && $args['characters_query']->have_posts()) {
?>
    <div class="swiper">
        <div class="swiper-wrapper">
            <?php
            // Start the loop to display the characters
            while ($args['characters_query']->have_posts()) {
                $args['characters_query']->the_post(); // Prepare the current post data
            ?>
                <div class="swiper-slide">
                    <figure>
                        <?php
                        // Display the attachment image and the character's title
                        echo get_the_post_thumbnail(get_the_ID(), 'full');
                        ?>
                        <figcaption><?php the_title(); ?></figcaption>
                    </figure>
                </div>
            <?php
            } // End of the loop

            ?>
        </div>
    </div>
<?php
} else {
    // If no characters are found, display a message
    echo '<p>Aucun personnage à afficher.</p>';
}

// Reset the query data
wp_reset_postdata();
?>