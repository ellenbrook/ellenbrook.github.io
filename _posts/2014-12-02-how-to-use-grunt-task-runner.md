---
layout: blog
title: How to use Grunt Task Runner - Eric Ellenbrook
link-title: How to use Grunt Task Runner
type: blog
description: If your progress as a front end developer has slowly come to a halt and you don't know where to turn, consider using Grunt Task Runner to speed up your web development work flow.
author: Eric Ellenbrook
---
Grunt task runner is exactly how it sounds. It is a task runner that can dramatically increase the speed of your web development workflow. Grunt task runner can be used to perform a great number of tasks including, but not limited to, compiling Sass, minifying CSS, running your JavaScript through JSHint, and even automatically reloading your devices and browsers every time you save your files.

The true power of Grunt task runner  shows through its ability to allow all team members to install specific dependencies with the insertion of a simple line in the command line interface. Grunt will handle the rest, and voila, you and your teammates can say "bye bye bye," because you are all in sync.

<!--more-->

In the past, I have used Codekit to handle these tasks. Although Codekit is a great application, it is not exactly customizable. Grunt can do as much or as little as you’d like. Grunt task runner is as powerful as you want it to be.

Although I'm still adjusting to Grunt task runner,  I hope this post will be a good introduction to Grunt for beginners. If you have experience using Grunt, then this probably isn’t the blog post for you. If you're wondering how to use Grunt task runner, then stay tuned, because this article will give you  a basic understanding of how to use Grunt.

###Installing Grunt Task Manager

The first thing that we need to do in order to take advantage of Grunt is  install the Grunt CLI. Grunt and all of Grunt's plugins are installed using a package manager that comes with Node.js. If you don't have Node.js installed on your machine just head over to (the download page)[http://nodejs.org/download]  to install it. Follow these steps and you'll have it running in no time at all. Again, the part we're interested in is the Node Package Manager (npm) that comes with it.

Once you have Node.js installed, you can install the Grunt command line interface package with a simple line. As always, you might have to sudo if you don't have proper permissions. The ```-g``` indicates that you're installing the Grunt task running command line interface on the entire machine, so this is the only time you'll ever have to perform the task.

~~~javascript
npm install -g grunt-cli
~~~

### Installing Grunt Task Runner
Now that we've got the Grunt CLI installed, we have to configure the Grunt task runner. In order to properly manage the dependencies for our specific project, it's best to create a package.json file.

The package.json file should be located in the root of the project. The file defines the data about the project. It's similar to a config.yml file for Jeykll. Or, if you've ever developed a Chrome Extension, you'll find that it's very similar to a manifest.json file. [You can view the documentation here](https://npmjs.org/doc/json.html).


Once package.json is created, you can install all of the dependencies that you need for your project using a single command: 

~~~javascript
npm install
~~~

This command reads all of the packages and then adds them to the node_modules directory. **One note** It might be a good idea to add this directory to your .gitignore file so that it isn’t   added to to your repo.

If you wish to add or install more packages, you can  use the ```npm install``` command. This time, you simply specify the name of the package you want to install. For example, you could use something like the following listed below:

~~~javascript
npm install jshint --save-dev
~~~

Using --save-dev flag will automatically add this package to your list of dependencies in your package.json file. This will allow other team members to use the exact same package file in order to set up their Grunt tasks.

### Let's dissect a Gruntfile

The wrapper function of a Grunt file is what contains the guts of your Grunt work. This is needed so that Grunt understands what’s  happening.

~~~javascript
module.exports = function(grunt) {
  // The good stuff goes here
};
~~~

The next bit of information in the Gruntfile is the project's configuration settings. This is handled by the initConfig method of the grunt object. This method should be passed to an object containing the project settings as well as any specific tasks and settings.

You'll notice that ```pkg``` key points toward the package.json configuration data that we  previously created. Many Grunt plugins use this data for project naming conventions.

~~~javascript
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  task: {...},
  task_two: {...}
});
~~~

### Configuring Grunt Tasks

Each Grunt task contains it's own configuration settings that fall within the object passed to the configInit method. The name of the property containing the task configuration is almost always the same as the name of the grunt task being performed. This naming convention makes editing grunt tasks easier than ever.


~~~javascript
watch: {
  css: {
    files: [
      'path/to/sass/*.sass',
    ],
    tasks: ['sass', 'autoprefixer]
  }
~~~

In the above  written configuration we have defined a target. This target watches for changes in the sass files located in our SASS directory. As you can see, it is possible to  use a wildcard to target a group of files which saves plenty of time regarding SASS partials.

The Gruntfile looks for changes in SASS files and then carries out  the tasks performed inside the tasks property. In this case, it compiles the SASS and then runs the compiled file through something called autoprefixer. Autoprefixer simply looks for items that require  vendor-specific prefixes in the css. Although mixins can address  this, the need to use the mixin is sometimes  overlooked, so I like to use this as a backup.

### Loading Grunt Plugins
The next section of the Gruntfile loads the actual plugins we wish to use. These plugins are specified in the package.json file that we previously created and then installed using ```npm install```. If you try  running Grunt task manager without installing the plugins, there’s a good chance that you'll encounter errors. 

~~~javascript
// Load the Grunt plugins.
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-sass');
~~~

The registerTask method of the grunt object is used to designate a set of tasks that should run when the grunt command is executed. 

~~~javascript
grunt.registerTask('default', ['watch']);
~~~

The first parameter of this method specifies the name of the task and the second contains the array of tasks that you wish to be executed. The ```watch``` task that we define takes care of the Sass  and autoprefixer that we defined earlier.

### Running Grunt Task Manager
So now that we've got Grunt all configured, all we have to do is run it. To run Grunt, just execute it in the command line by typing ```grunt```. This will run all of the default tasks that you have set up in your Gruntfile. 

This is where we see Grunt's true strength. As mentioned above, any team members can clone your Git repo and run this command to install all of the dependencies  you've decided to use for this specific project.

###Final words on Grunt Task Manager
If you're looking for a way to improve your workflow but haven't quite figured out what you're looking to do, then Grunt might be the tool for you. Grunt might also work for you if you've already moved to something like Codekit or Prepros and you're looking for a bit more functionality and customization.

I put off using Grunt in my workflow because I found it confusing. But, after playing with  it for a little while, I found it to be incredibly useful. Hopefully this post will help you quickly figure it out and give you a better idea about how to use Grunt. If you've got any other tips or ideas, I'd love to read them below in the comments or on Twitter. I'm always looking for ways to speed up my [web development work flow](http://ellenbrook.github.io/detroit-web-designer-blog/2014/10/29/six-tips-to-optimize-your-web-development-workflow/).