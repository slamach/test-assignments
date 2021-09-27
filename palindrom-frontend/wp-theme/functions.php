<?php

add_action('wp_enqueue_scripts', 'theme_add_scripts');
add_action('after_setup_theme', 'theme_add_support');

function theme_add_scripts() {
	wp_enqueue_style('style', get_stylesheet_uri());
	wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js');
}

function theme_add_support(){
	add_theme_support('post-thumbnails');
  add_image_size('post-thumb', 320, 213, true);
}
