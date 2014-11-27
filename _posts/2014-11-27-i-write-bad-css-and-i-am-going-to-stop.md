---
layout: blog
title: I write bad CSS and I am going to stop - Eric Ellenbrook
link-title: I write bad CSS and I am going to stop
type: blog
description: You write bad CSS. Don't worry, I do too. With a little bit of teamwork we can work together to write better CSS. Together we will save the Internet one website at a time.
author: Eric Ellenbrook
---
Recently I made the personal decision to start writing better CSS. Although I've always taken great pride in my code, it wasn't until recently that I realized refactoring some of my old CSS was nearly impossible. Because of that something had to change.

With an increase in complexity in my work I found that my CSS was lacking to say the least. I realized I was replicating classes, adding needless classes to the end of my CSS, and simply not adhering to the DRY principles in the slightest. I needed to do something about that.

<!--more-->

I wrote a list of the things that I wanted to accomplish with this new found motivation. I wrote my goals and then I came up with ways to achieve those goals. I'd like to share those with you. 

####What I need to write better CSS
1. Modular CSS. Abstracting classes in order to write less CSS.
2. Base typography styles are a must.
3. Limited nesting in regards to SASS/SCSS

Instead of overwhelming myself I decided that those three ideas would be the basis of my change. Once I mastered those I'd move on to more constraints and ideas. The first thing I did was change file structure for my assets. I borrowed my new structure from [Devtips For Designers](https://www.youtube.com/watch?v=nTYP4IZvLWw). You can see an example of it below.

* The **Tools** directory contains things like icon fonts (although I'm trying to switch to SVG only), grid frameworks, a CSS reset, pre-defined mixins, and so on.
* The **Base** directory contains base typographical styles, variables, and custom mixins.
* The **Modules** directory contains all over the reusable ideas and themes throughout the site. Classes such as buttons, a card UI, list styles, headers, footers, form styles, image-hover classes, and so on.
* The **Pages** directory contains the CSS for anything that is page-specific. Maybe a special table or another page-specific idea or style. If it is original and unused elsewhere then it belongs here.

~~~
CSS
  1-Tools
  2-Base
  3-Modules
  4-Pages
style.sass
style.css
~~~

Normally while writing CSS I would simply write on the fly. This idea is bad. That's because I'd get lost in a sea of classes and a before long I'd have a mess. Speaking of messy CSS, check out [CSS is a Mess](http://vimeo.com/99877232) by Jonathan Snook.

####Questions to ask while writing CSS

1. Can any of the CSS that I've written be abstracted?
2. Is there anything that might have started out as a page-specific style but has since been reused?
3. Am I repeating transitions time and time again?
4. Do I find myself adding too many typographical styles throughout my CSS?

####1. Can any of the CSS that I've written be abstracted?

Prior to writing the styles for a new class, I ask myself if any of it can be abstracted. Often times I find that at least some of it can be. Take this button style for a call to action styled button for example.

~~~ css
.button-cta
    border-radius: 3px
    box-shadow: 0px 1px 3px #666666
    color: #ffffff
    background: #3498db
    padding: 10px 20px 10px 20px
    text-decoration: none
    
    &:hover
        background: #3cb0fd
    text-decoration: none
~~~

While this SASS is perfectly valid it can be troublesome. For example, what if I want to add a second type of button? All of the styles will have to be rewritten time and time again. 

If the common styles are abstracted it allows me to reuse the same classes over and over again adding only what I need for the newly styled button. An abstracted version of my code is below, I've even added a secondary button style to show how easy it is to make additions once you've abstracted the base styles.

~~~ css
.button
	border-radius: 3px
	padding: 10px 20px 10px 20px
	text-decoration: none
	color: #ffffff
	box-shadow: 0px 1px 3px #666666

.cta
	background: #3498db

	&:hover
		background: #3cb0fd

.danger
	background: #d93434

	&:hover
		background: #ff6363
~~~

The above code is better because it allows me to have a base ```.button``` class with styles that are shared by every type of button on the site. Then, as needed, I can add the additional button styles below, keeping those styles very minimal, allowing for less code to be written. Another bonus is if in the future the button style changes, only one class needs to be modified to reflect those changes, making additions and refactoring a breeze.

#### Is there anything that might have started out as a page-specific style but has since been reused?

Every hour or so I go through my CSS and make sure that all of the page-specific styles I've written are not being repeated. There are often times where I find that styles are being repeated and due to the fact that I am "in the zone", I simply don't notice.

I take the time to remove those classes from the page-specific files and to create a file in the **modules** with the same code in it. This allows easier editing down the road and keeps everything neatly organized.

#### Am I repeating transitions time and time again? 

I find that I often have very similar transitions for very basic hover effects. If I find that's the case I try and write a mixin for that effect. If a mixin is not ideal, then I might consider trying to abstract that effect to a parent class that is shared by other elements.

#### Am I adding too many typographical styles throughout my CSS? 

I often find that without a base typographical style sheet that I will repeat the same styles over and over. If that's the case I step back and where the base styles can and should be written. Instead of adding a font-family and color declaration to a specific card UI, for example, I can abstract that style to a common element so that it's shared with other classes. Now I've written less CSS to accomplish the same task.

Throughout this time I've learned that writing bad CSS is something that can easily be avoided. Asking questions prior to writing any style declarations coupled with frequent breaks in order to abstract and refactor will allow anyone to write better and more manageable CSS. What are your CSS tips? Do you follow any guidelines or rules? I'm always interested in hearing other people's methods. If you've got any leave them in the comments below.