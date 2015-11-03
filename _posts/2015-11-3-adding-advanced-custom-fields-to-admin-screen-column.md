---
layout: blog
title: Adding Advanced Custom Fields to Admin Screen Column - Eric Ellenbrook
link-title: Adding Advanced Custom Fields to Admin Screen Column
type: blog
description: I want to add a custom admin column to a custom post type's index, but I want it to display the value of an Advanced Custom Field.
author: Eric Ellenbrook
excerpt: Due to the fact that I create websites for local businesses, Wordpress is generally the go-to solution. It's easy enough to use and, honestly, many business owners ask if I "can make them a Wordpress site". I want to customize the look of a custom post type's post index in WP-Admin and doing so seemed to make for a great tutorial.
---
Due to the fact that I create websites for local businesses, Wordpress is generally the go-to solution. It's easy enough to use, and honestly, many business owners ask if I "can make them a Wordpress site". I want to customize the look of a custom post type's post index in WP-Admin and doing so seemed to make for a great tutorial.

<!--more-->

Recently I have been working on a website for a local hardwood floor dealer. I've been working to streamline the back end of his Wordpress website. In doing so, I want to make his FAQ page as seamless as possible so I thought of a neat little trick using [Advanced Custom Fields](https://advancedcustomfields.com/).

First I'll give you a little back story. The website has a custom post type, "floor-type", set that includes various floor types that the owner sells (think Hardwood, Vinyl, Laminate). The website's FAQ is broken up into sections that are grouped based on the types of floors located in the custom post type. For example, one question might be for "Hardwood" and another might be for "Bamboo."

I want a way for the business owner to tag each question with the corresponding floor type without giving them the option of adding or removing any existing tags. The reason for this necessity is because I don't want the business owner to add a new tag called "Hardwood Floors" when there is already an existing "Hardwood Flooring" tag. For this reason a taxonomy wouldn't work.

A good option I came up with was creating an Advanced Custom Field ```select``` menu that lists all of the posts under the "Floor Types" custom post type. This means the business owner can select any of the floor types listed in the custom post type and nothing more. If they add a new type of floor, like Engineered Hardwood, they'll be able to immediately create FAQs for the new Engineered Hardwood floor type. 

I didn't want to leave the business owner guessing which questions were and were not tagged, so I created a custom admin column for the FAQ post type. It displays the value of the Advanced Custom Field and they can easily see what question belongs to which category in the FAQ. You'll be able to see exactly what I've built below.

~~~php
**
* Add the column to the custom post type listing
* @param array $columns
* @return array
**
add_filter("manage_faq_posts_columns", "add_faq_columns");
function add_faq_columns($columns) {
    $columns = array(
    	//Define the columns in order from left to right
        'cb' => '<input type="checkbox" />',
        'title' => ( 'Question' ),
        'filed' => ( 'Filed Under' ),
        'date' => ( 'Date ' )
        );
    return $columns;
}

**
* Add the content to the custom post type listing
* @param array $columns
* @return null
**
add_filter("manage_faq_posts_custom_column", "add_faq_columns_content");
function add_faq_columns_content($columns) {
	//Get access to the current post being listed
    global $post;
    //Get the ID of that post
    $post_id = $post->ID;

    /* If the column being listed is equal to the slug of the custom post type
    	My custom post type's slug is "filed" */
    if($columns == 'filed') { 
		//The category is the custom field for this specific post being listed
		$category = get_field('floor-type-tag', $post->ID);
		//If the category exists
		if($category) {
			//Display it.
			echo $category;
		} 
		else 
		{
			//Otherwise let them know and give them a link to edit the post.
			echo 'No floor type chosen.";
			echo '<a href="'.get_edit_post_link().'">Click to update.</a>';
		}
    }
    return;
}
~~~

And that's it! You now have a listing of the Advance Custom Field in the WP-Admin for the custom post type. However, what if the website owner wants to sort by the category? We beter add that ability.

~~~php
**
* Make the column title sortable
* @param array $columns
* @return array
**
add_filter( 'manage_edit-faq_sortable_columns', 'make_faq_column_sortable' );
function make_faq_column_sortable( $sortable_columns ) {
	//Add index "filed" to the $sortable_columns array.
    $sortable_columns[ 'filed' ] = 'filed';
	//Return the array. 
    return $sortable_columns;
}
**
* Add the content to the custom post type listing
* @param WP_Query object $columns
* @return null
**
add_action( 'pre_get_posts', 'sortable_faq_post_columns');
function sortable_faq_post_columns($query) {
	/* If the query is the main query (as opposed to secondary, etc)
		and the query is ordered in some way */
    if( $query->is_main_query() && ( $orderby = $query->get( 'orderby' ) ) ) {
    	// Capitalize the orderby value
        $order = strtoupper( $query->get('order') );
		/* if "ASC" or "DESC" is not present
			then "ASC" is default. */
        if( ! in_array( $order, array( 'ASC', 'DESC' ) ) )
            $order = 'ASC';
		/*  If your custom column is what is being
			added to the query */
        if($orderby == 'filed') {
        	// Then set the query
            $query->set('meta__key', 'filed');
            $query->set('orderby', 'meta_value');
        }
    }
    return;
}
~~~

Now the custom admin column can be sorted in ascending and descending order. Here's what it looks like.

<figure class="content-image-container">
	<img src="/assets/img/blog-posts/custom-wordpress-admin-column/custom-admin-column-in-wordpress.png" alt="Custom Admin Column in Wordpress by Detroit Web Designer">
</figure>

Sidenote, normally all of the work will be done inside of functions.php. However, if you're fearful that the business owner might switch themes at some point, then you might consider building a plugin and adding all of the Custom Post Type functionality inside of that. This will allow all of that data to be displayed in the WP-Admin no matter what theme the business owner decides to switch to, saving you potential headaches down the road!