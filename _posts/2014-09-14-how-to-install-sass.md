---
layout: post
title: How to install Sass
author: Eric Ellenbrook
---
If you're anything like me, you're a bit scared of the command line or simply unexperienced to the point that you're not sure where to start. Lucky for you, I made it over the first hump. I am by no means an expert but I will tell you that with a little effort and a bit of documentation that it's not as bad as it seems! For those of you who don't know what Sass is, I'll give you the quick elevator pitch. Sass is a CSS pre-processor that offers users the ability to write CSS in a way that it should have been written all along. It allows simple ideas like storing values in variables, performing loops, and even doing math. Writing Sass allows one to modularize their code as much as they see fit, making it exponentially easier to make changes, edit, or add to their existing code.

<!--more-->

Imagine having to change the size of a heading on the Contact page of your website. You'd have to scroll through your CSS file and even with the most well-documented and commented CSS it could take several seconds or even minutes to find the exact tag you're looking for. In Sass you can simple navigate to /css/pages/contact and open up base.scss, if you're using a structure similar to me and then make the change. This method is clearly much faster, much more efficient, and, in my opinion, the correct way to go about writing CSS. 

Having said that, in order to get to the point where you're able to modularize your code, define variables and use Sass to the fullest, you have to learn how to install Sass. Earlier this year I decided that I was going to learn how to use a CSS pre-processor and when that time came I decided on Sass because it had the most popularity on Reddit as well as other development websites that I visit. I trust those guys and gals so went on over to [the official Sass website](http://sass-lang.com) and looked for the download link. The only problem was, this is all I was greeted with.

![How to install Sass](/assets/img/blog-posts/sass-website.png)

I had no idea what any of that meant. I did see that I could use various software solutions to process my Sass but I wanted to try and use the command line to, at a minimum, get it started. I did some research and I found out that if you're using a Mac you already have Ruby installed on your machine. I use a Mac so that was perfect! I followed the step by step directions and with a final ```sass -v``` to check the version I apparently had Sass installed on my machine. 

What did that mean? Well I didn't really know but it seemed like it was a step in the right direction. So if you're here wondering how to install Sass my answer is to follow the directions on the Sass website. It might be difficult to get up and running though! I'll use the rest of this post to get you through the first save and you'll be set to go from there. 

I'm assuming you have a standard file structure that you normally use. For example, my home directory has an "assets" folder and inside of that are folders named "css," "javascript," "img," and so on. So all you need to do is navigate to the folder that contains your css file using the command line. If your working directory is on your desktop, you can simply run a ```cd ~/Desktop/Folder-Name``` and you're golden.

From here on out all you have to do is tell Sass to watch your Sass file and every time it sees a change-also known as when you save that file-Sass will write the corresponding CSS file for you. Your markup will call the standard CSS file like normal and you'll be golden. 

So how do you do that? 
It's incredibly easy. I didn't realize it at the time. That's why I'm writing this. All you have to do to tell Sass to watch your Sass or SCSS file is, in your command line, type ```sass --watch input.scss:output.css```. Change input.scss to whatever filename you'd like and output.css to whatever you normally name your css.

Go ahead and write your first line to your scss file. If you check your working directory, you'll see that there is now an output.css, or whatever you've decided to name it. It's that simple. You can now start using variables, mixins, and every other fantastic feature of Sass. 

If you don't feel like dealing with the command line or simply want more options then I highly suggest using Codekit. [I wrote a blog post about using Codekit](http://ellenbrook.github.io/2014/09/01/code-kit-you-need-it-trust-me.html) and you can read it here. I have no affiliation with them but the program is really amazing and with a drag and a drop you can write Sass, have your CSS minified, compress your images, and more. It's phenomenal and definitely a tool that I use in my work flow.