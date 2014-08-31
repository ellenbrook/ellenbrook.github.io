---
layout: post
title: Codekit. You need it. Trust me.
author: Eric Ellenbrook
---
The command line. The biggest fear for a noob like me. Things like "gem install sass" can be confusing. Huh? "gem install jekyll?", "Why do I have to type 'sudo' before everything when the install instructions do not have it?" None of it made sense. Quite frankly it still doesn't. Although learning command line is an important goal for any developer, the learning curve can be huge to say the least. That's where Codekit comes in to save the day. What is Codekit you ask? Codekit is a program that essentially bridges the gap between every day development and things like pre-processors, grunt, gulp, and so on. 

If you're a vet in the industry you may as well quit reading now. You know everything that I'm going to talk about. If you're a noob then there might be a hidden gem in here for you. I discovered Codekit during my search for learning Sass, a CSS preprocessor that helps the every day life of front end developers. If you don't know what Sass is, I highly suggest [learning about that](https://sass-lang.com) before even reading anything further. I wanted to learn Sass. I needed to learn it. The only problem was I didn't know how to "download it" like I had for many other applications that I had used in the past. One of the options that Sass's website mentions is Codekit.

<!--more-->

I downloaded and installed a 9 day trial of Codekit, hoping it would shed some light on the preprocessor game and boy did it. I admit that I'm not really the first to stop and read directions prior to trying to use an application and it worked in my favor with Codekit because it's just that intuitive. 

I dragged my first folder (or project) into Codekit and it did it's magic. 

### Why you should use Codekit as of right now.

Codekit is smart. Really smart. The program essentially knows that you're trying to pre-process. Once you drag the project folder into the program, it automatically starts monitoring them for any changes. It will sit there quietly waiting for any change in a file. When that change happens, Codekit will automatically compile the Sass (or SCSS if that's your thing) into CSS for you.  

You might be thinking "why do you need Codekit since Sass natively does that for you?" Understandable. Other than the fact that it can get you up and running Sass in the blink of an eye which is great for a noob like me, Codekit does much more than that. When you open the right pane of Codekit, you can see only a *small* amount of the awesomeness that Codekit contains. Take a look at the screen shot below. It's of Codekit's options panel for this very site's CSS.

![Screen shot of Codekit for Mac](http://i.imgur.com/cX9xlyW.png)

As you can see, Codekit automatically knows that I'm writing Sass. The first option that I have is the output style. I am given the options "Nested", "Compact", "Expanded", and "Compressed." Since I can't see any reason why I'd want to use anything other than Compressed, that's what I picked. It's essentially a minified version. Yeah, it automatically does it. [You can view the site's CSS here](http://ellenbrook.github.io/assets/css/main.css).

Next I can choose the debug info which is essentially what shows up in my log if there are errors in compiling. I have this option turned off because Codekit gives a pretty good explanation as to what went wrong when it happens. I don't necessarily need a log but I'm sure someone might in some cases, though I can't think of any.

The source map option is solid. It essentially allows me to view my Sass as I wrote it in the browser as opposed to the compiled (and minified) output. It makes troubleshooting and debugging much easier. I have it unchecked because I'm not necessarily developing anymore so the changes are minimal.

Next up is the LibSass compiler which I admittedly haven't used yet. It's essentially a C-based Sass compiler which can be much faster. For those of you who use Compass a lot, don't check this because as of the time of writing this, it doesn't work properly with Compass. 

The final option that I have ticked off is to run Autoprefixer on my final CSS file. Sometimes I'm forgetful and even though there are Sass mixins for this, I have been known to not use them. This saves my butt for those times.

All of these options are simply for one file. Codekit is powerful, guys. You can configure exactly what you want to do with every file in your project.

### Some issues that I had with using Codekit

#### Codekit compiles files I don't want it to compile
I'll admit that the first time I used Codekit was building this site. One issue that I had was the fact that Codekit is *almost* too smart. When I wrote my first blog post, Codekit compiled my `.md` into an HTMl file and I accidentally started editing that and there was a big issue that lead to a lot of confusion. Anyhow, since Jekyll compiles my `.md` files I have this project set to ignore `.md` files. It's that simple. 

#### Codekit is not monitoring my files anymore
This issue was kind of annoying. For some reason Codekit stopped monitoring my files. I followed some suggestions and only had luck with restarting my machine. Some of the suggestions have to do with renaming the project folder; moving everything from the project folder to another folder, deleting the original, recreating it, and copying the files back into the original folders; and adding and removing the project files to the Spotlight Search privacy settings. Honestly, just restart. It will work.

### What else does Codekit do?

Codekit also compiles Less, Stylus, JavaScript, CoffeeScript, TypeScript, Haml, Jade, Slim, Kit, and who knows what else? Oh, it also concatenates JavaScript files together so your users request less files, making your site load faster. I'm most definitely not an expert on the application by any means but after a week or so of using it, I've got to say that it's been one of the most helpful programs that I've used in regards to my very limited development career.

All of that coupled with the fact that Codekit 2.0 has a built in web server&mdash;which can be forwarded to MAMP or any other application that you prefer, Bower, JS Lint, and the ability to optimize images&mdash;I knocked about 30% off of the images on this site with the click of a button make Codekit a phenomenal tool for any developer just getting into things that might be a bit more intermediate.

If you're interested in finding out more, I suggest checking out [Shoptalk Show Podcast Episode #115](http://shoptalkshow.com/episodes/115-bryan-jones-guy-meyer/) and [Codekit's Website](https://incident57.com/codekit/) if this silly little post convinced you, then [here is the link to purchase Codekit](https://incident57.com/codekit/purchase.php). 

Finally, I'd like to give a formal thank you to [@DinisCruz](https://twitter.com/DinisCruz) for giving me the gift of Codekit. I will definitely pay it forward when I have the ability.