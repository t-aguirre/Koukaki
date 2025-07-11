<?php

get_header();
?>

<main id="primary" class="site-main">
    <!-- Background video container -->
    <section class="banner entry">
        <div class="banner__container">
            <video class="banner__video" autoplay muted loop playsinline
                poster="<?php echo get_stylesheet_directory_uri() . '/assets/img/banner.png'; ?>">
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/Studio+Koukaki-vidéo+header+sans+son.mp4'; ?>" type=" video/mp4">
            </video>
        </div>
        <div class="banner__logo-wrapper">
            <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/logo.png'; ?>" class="banner__logo" alt="logo Fleurs d'oranger & chats errants">
        </div>
    </section>
    <section id="story" class="story entry">
        <div class="title-container">
            <h2>L'histoire</h2>
        </div>
        <article class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',
        );

        $characters_query = new WP_Query($args);
        ?>
        <!-- Swiper jS slider for the characters -->
        <article id="characters" class="entry">
            <h3>Les personnages</h3>
            <?php get_template_part('parts/swiper-slider', null, array('characters_query' => $characters_query)); ?>
        </article>
        <!-- End of Swiper jS slider for the characters section-->

        <article id="place" class="entry">
            <div class="cloud big-cloud"></div>
            <div class="cloud little-cloud"></div>
            <div>
                <h3>Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>

        </article>
    </section>


    <section id="studio" class="studio entry">
        <h2>Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
    <section id="nomination" class="nomination entry">
        <div class="nomination__text">
            <p>Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</p>
        </div>
        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/18-courts-metrages-francais-d-animation-eligibles-aux-oscars-2021.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>

</main><!-- #main -->

<?php
get_footer();
