---
layout: blog
title: Creating a Google+ Styled Header in jQuery - Eric Ellenbrook
link-title: Creating a Google+ Styled Header in jQuery
type: blog
description: Google recently open sourced all of their material design icons. I'm using that as inspiration to teach you how to create a Google+ styled header animation.
author: Eric Ellenbrook
---
I've been using [Google+](https://plus.google.com/+EricEllenbrook/) more and more over the course of the past few months. Although it's not exactly the greatest of social networks, it's really a great tool to meet and network with other developers, designers, and tech-savvy individuals. Since I started using it I fell in love with the UI. One of the UI features that I like the most is the sticky sub-header that they employ on page scroll. I decided to give recreating it a shot.

<!--more-->

I decided to keep this tutorial simple. I don't want to get too involved in the page's actual markup because the magic happens in the JavaScript. In this case I'm opting for jQuery as opposed to regular old JS simply because it's easier to use.  We'll start with some boilerplate markup: 

~~~ markup

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Google Plus Styled Header</title>
  <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
  <header class="header">
    <h1>This is a header</h1>
  </header>
  <div class="sub-header">
    <div class="logo">G+</div>
  </div>
  <section>
    <article>
        Insert lipsum here
    </article>
    <article>
        Insert lipsum here
    </article>		
  </section>
    <script src="//code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
 </body>
</html>

~~~

Fairly straight forward so far. The idea for this post isn't to give you a tutorial on HTML or CSS, although we will delve into that a bit. The code above simply has a basic HTML page with a section and two articles. The articles are simply there in order to cause a page scroll.

Next we'll style the page. I use Sass because I like how clean looking it is. Plus who likes adding a semi-colon after every single line if they don't have to? Not me! If you'd like standard CSS then I suggest [viewing this link for the compiled css](/code-examples/google-plus-styled-header/css/style.css).

~~~ css

*
  -moz-box-sizing: border-box
  -webkit-box-sizing: border-box
  box-sizing: border-box
    
body
  font-family: 'Lato', sans-serif
  background: #e5e5e5
  margin: 0
  border: 0

.container
  width: 480px
  margin: 0 auto

section
  @extend .container
  margin: 50px auto

article
  padding: 10px
  margin-bottom: 20px
  font-family: 'Lato', sans-serif
  background-color: #fff
  box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07)
  border-radius: 2px

/* Boilerplate CSS for the articles */ 

h1
  font-size: 2.5em
  font-family: lato
  font-weight: 900
  color: darken(#b5b5b5, 10)
  line-height: 1.25em
  margin-bottom: calc(1.25em/2)
    
h2
  font-weight: 900
  font-size: 14px
  font-family: lato
  color: darken(#b5b5b5, 10)
  line-height: 1.14em
  margin-top: 1.14em
  margin-bottom: calc(1.14em/2)
 
p
  font-family: lato
  line-height: 1.66em
  font-size: 14px
  color: darken(#b5b5b5, 60)

a 
  color: #DD4B39
  text-decoration: none

/* The good stuff */

.header
  width: 100%
  height: 88px
  padding: 1em
  background: #fff
   
.sub-header
  position: relative
  height: 55px
  width: 100%
  background: #f5f5f5
  border-bottom: 1px solid darken(#f5f5f5, 10%)
  transition: background 100ms ease-in

  .logo
    position: relative
    height: 55px
    width: 55px
    background: #DD4B39
    color: #fff
    text-align: center
    padding-top: .25em
    font-size: 2em
    transform: translateX(-100%)
    transition: all 200ms ease-in

  .slideIn
    transition: all 200ms ease-in
    transform: translateX(0)
.on
  position: fixed
  top: 0
  left: 0
  background: #fff
  transition: background 200ms ease-in

~~~~

The idea for this animation is to count how many pixels we've scrolled from the top of the page. If we've scrolled more than the size of the header then we will add a class to the sub-header. That class will cause the sub-header to become fixed to the top of the page and will also change the background color. You can see that specific code blow. The first class is the base class where we define the basic styles of the sub-header. After that is the class on in which we make the modifications.

~~~ css
.sub-header
  position: relative
  height: 55px
  width: 100%
  background: #f5f5f5
  border-bottom: 1px solid darken(#f5f5f5, 10%)
  transition: background 100ms ease-in

.on
  position: fixed
  top: 0
  left: 0
  background: #fff
  transition: background 200ms ease-in

~~~~

To summarize, we have a base style and when the page is scrolled, we add on top of that with a secondary style. We do this with both the logo and the sub-header.  Lets begin writing our jQuery.

First we will define some variables. The variable *distance* is the amount that the *.sub-header* sits from the top of the window. This is a way of grabbing the height of the header without setting a fixed height on it. Everything after that is simply a way of caching the variable so jQuery does not have to search the DOM for $(window), $(".sub-header"), and $(".logo") every time we need to access those objects.

~~~ javascript
var distance = $(".sub-header").offset().top,
    $window = $(window),
    $subHeader = $(".sub-header"),
    $logo = $(".logo");
~~~

Once we've got our variables defined, the basic idea that we need to follow is to simply calculate the scroll distance and then add and remove classes. It's very simple.

~~~ javascript
$window.scroll(function() {
    if ( $window.scrollTop() >= distance) {
        //Add classes
    } else {
      //Remove classes
    }
});
~~~

If the window has scrolled the same as or equal to the distance that height of the header then add classes. Otherwise, remove them. All put together.

~~~ javascript
	var distance = $('.sub-header').offset().top,
    $window = $(window),
    $subHeader = $('.sub-header'),
    $logo = $(".logo"),
    $ul = $("ul");

$window.scroll(function() {
    if ( $window.scrollTop() >= distance) {
        $subHeader.addClass("on");
        $logo.addClass("slideIn");
    } else {
      $subHeader.removeClass("on");
      $logo.removeClass("slideIn");
    }
});
~~~

There you have it. The logo toggles the class *slideIn* and the sub-header toggles the class *on*. You can see a [fully functioning example on this page](/code-examples/google-plus-styled-header/). If you would like to offer any assistance on refactoring or have suggestions on how to make this better I'd love to read it in the comments below!


