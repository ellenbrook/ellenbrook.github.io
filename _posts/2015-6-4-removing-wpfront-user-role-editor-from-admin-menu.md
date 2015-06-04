---
layout: blog
title: Removing WPFront User Role Editor from Wordpress Admin Menu - Eric Ellenbrook
link-title: Removing WPFront User Role Editor from Wordpress Admin Menu
type: blog
description: I spent quite a bit of time trying to figure out how to remove the WPFront User Role Editor from the Wordpress admin menu. Here's how.
author: Eric Ellenbrook
excerpt: I spent entirely too long trying to remove the WPFront User Role Editor menu item from the Wordpress admin menu. After quite a bit of a hassle I figured it out. It's not that hard, actually. 
---
I spent entirely too long trying to remove the WPFront User Role Editor menu item from the Wordpress admin menu. After quite a bit of a hassle I figured it out. It's not that hard, actually. 

<!--more-->

If you're like me and you make a lot of Wordpress websites, then chance are that you're using a user role editor of some sort. I prefer [WPFront](https://wpfront.com/) because it's got an easy to use GUI, it's light weight, and it just plain works. 

If you're using a user role editor then you probably want to hide menu items from the non-administrator roles that you set up. I'm not sure what the problem was for me,  but I spent about an hour trying to remove WPFront User Role Editor from the menu of Wordpress. Since I finally got it, I figured I'd share it with you.

As we all know, Wordpress relies on hooks in order to perform functions. I've created a function called remove_menus() that does exactly what it's called. Inside of it is a bit of code that removes the menu for the WPFront User Role Editor plugin.  You can add more if you'd like. 

~~~php
/**
 * Removes menu items from Wordpress admin area
 *
 */ 
function remove_menus()
{
    remove_menu_page('wpfront-user-role-editor-all-roles');
}

/**
 * Call this function only if the user does not have a role of "Administrator"
 *
 */ 
if( !in_array('administrator', wp_get_current_user()->roles) )
{
    add_action( 'admin_menu', 'remove_menus' );
}
~~~

And there you have it. A simple and easy way to remove WPFront User Role Editor from the admin menu.