<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/css/style.css', array('parent-style'), filemtime(get_stylesheet_directory() . '/css/style.css'));
}

// Get customizer options from parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}

// Loading jquery
wp_enqueue_script('jquery');

//Enqueuing custom js
function foce_child_enqueue_scripts()
{
    wp_enqueue_script(
        'foce-child-script',
        get_stylesheet_directory_uri() . '/js/custom-script.js',
        array('jquery'),
        time(), // Load the latest version (null to specify none)
        true // Load the script in the footer (true) or the header (false)
    );
}
add_action('wp_enqueue_scripts', 'foce_child_enqueue_scripts');

//Enqueuing Swiper js and css for the slider of the characters section
function enqueue_swiper_assets()
{
    // Enqueuing Swiper CSS
    wp_enqueue_style('swiper-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');

    // Enqueuing Swiper JS
    wp_enqueue_script('swiper-js', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), null, true);

    // Enqueuing custom JS file to initialize Swiper
    wp_enqueue_script('swiper-init', get_stylesheet_directory_uri() . '/js/swiper-init.js', array('swiper-js'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_swiper_assets');
