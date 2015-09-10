#Jumping into JavaScript

Changing your career to become a programmer is not an easy task. It takes dedication and perseverance, but it is very doable and the rewards are great. I took great pains to enact this transition in my life within the span of one year. I was successful and I wish to write out my ideas about why I was successful along with some tips for your own journey.

##What is this book?

This book has three parts. The part you're looking at now is a high level overview of some fundamental issues you'll need to confront in your journey to becoming a software engineer. This part also contains links to a lists of resources that you will be of value to you while you're learning. Some of them, like the website where this book is hosted and [stack overflow](http://www.stackoverflow.com), you might use throughout your entire career.

The third part is a set of files contained in the directory called "code". Your first assignment is to find that directory and view those files. There many not be many there now because this is a work in progress. Those files are simple lessons on basic JavaScript concepts. Other people have already writtin very good books on JavaScript and I don't want to duplicate their effort, so they will focus on using code to demonstrate the concepts.

That brings me to my first reference link. Much of what I write below consists of the why and how of becoming a software engineer. The first step is, of course, to become familiar with the JavaScript programming language. So here it is:

[PLACES TO LEARN JAVASCRIPT ONLINE](https://github.com/incrediblesound/Jump-Into-JavaScript/blob/master/references/learn_javascript.md)

Some of these resources have built in JavaScript interpreters where you can write and execute code. If you find yourself wanting to write code and don't have a place to do it, you can always open up the JavaScript console in your browser and use that to execute code. Try to find that console in your browser now, type in this line of code and press enter:

```javascript
alert('Good job!')
```

Alternatively, you can download [this template](https://github.com/incrediblesound/Jump-Into-JavaScript/blob/master/code/0_template.html) and open it in your browser. Any changes you make in that template will run when you refresh the page, and anything you add to that template will be accessible in your JavaScript console.

##What the Heck is Coding?

First of all, it’s good to be really clear about what computer programming really is. Your computer is a device that stores data, displays data, modifies data, and takes user input. Programming is the act of writing down instructions that tell the computer how to do any one of these things. You can tell it to break up a sentence into words and then count the words, you can tell it to draw a circle on the screen, you can tell it to save some information into a database, but it all revolves around manipulating data. 

Think about a website that displays stock market data. A server somewhere interprets a TCP request, which is a chunk of data, it responds by fetching raw data from somewhere and sending it to your browser. The raw numbers are fed into a program running in your browser that turns them in charts, and then the user can select a specific type of data or a specific date range and the program responds by modifying the charts to display the data in the way that the user selected.

You can simplify the entire process like this: 

Raw Data -> Structured Data -> Representation of Data <-> Interaction

Some data is already structured, but not all. You can write a computer program that takes raw data and turns it into structured data, which is much more useful. 

For example, you can take the following data:

```javascript
"John 31 m Stacy 24 f Adam 40 m Dave 20 m"
```

And turn it into a structure that the computer can easily manipulate:

```javascript
[ { name: 'John', age: 31, sex: 'm' }, { name: 'Stacy', age: 24, sex: 'f' } ]
```

So programming can take raw data of any kind and turn it into structured data. But what do we do what that structured data? Once we have our data in a machine readable format, like the one above with the brackets and the curl braces, we can easily turn the data into a chart or a list displayed in a website. We can then create a user interface to manipulate and change the data. This all seems very basic, but think of all the things we can do with the ability to organize, display and manipulate data.

##You’re Going to Code, and You’re Going to Like it

People who studied computer science in college have the advantage of a degree which has both cultural significance and practical use. If you’re reading this it’s because you do not have that degree, and as a result you will have to fill the void of confidence that your employer will have as a result of that lack. Luckily in most startups, and even some big companies, there is no hard requirement for a computer science degree. That means that you are able to, and in fact must, make up for that elsewhere.

The easiest way to make up for that lack is with productivity. You have to code, and preferable a lot. When I say a lot, I mean you should code for hours every day. If you take a day or two off, that’s fine, but if you find yourself slipping for weeks at a time, this career path probably isn’t for you. Because it’s not so easy to just sit down and code every day, I’m going to go over some ideas about how to do it.

##Find some aspect of coding that you enjoy

This is extremely important. You can do many things with code, and you should find one of those things and have fun with it. Here are some ideas:

Games — Games start with a bunch of data that describes a game environment, and then most of the code is just an interface that allows the user to interact with the world and a rule set that defines how the game is played. Games are challenging and enjoyable to make, and a great way to practice coding.

Math — Some people are interested in the power of mathematics to uncover hidden properties of data. This is important especially in the financial industry and in artificial intelligence. The application of mathematical formulas to data sets is an exciting branch of computer programming and an excellent way to learn.

Useful Applications — A simple, well designed application can do a lot to help people in their daily lives. One common application that is used as a learning tool is the “to do” app. Creating something useful that can benefit individuals or groups is a great motivation to learn how to code. One of my first apps was a social network for book lovers where the users could share book reviews and book lists. Unfortunately there was already a successful website that did that, but it was a great learning experience nevertheless.

Art — Software is open ended and creative. You can make almost anything you can imagine. Using software as a creative outlet is a fantastic way to keep yourself coding. I recently made a music visualizer. It takes a song as input (raw data) converts it into a set of amplitude values for different frequencies (structured data) and the displays colorful spheres when those amplitudes go above a certain value (representation of data). It sounds complicated, but I was able to code it in a single day.

This list is not exhaustive, but the important thing is to play with code. Find something to enjoy about coding then you will not have a hard time doing it every day and your experience and passion will be apparent to your future employer.

##Start a Portfolio

Remember when I made you find the directory with the JavaScript lessons in it and view those lessons? Now is the time for your second assignment: make an account for yourself on this website. This website is called [GitHub](www.github.com) and it is a place for programmers to host open source projects. Interestingly, though, it has also become a place for people to showcase personal projects and a place to find material to learn from. Having an account on GitHub is not enough, you also need to learn and understand version control, of which Git is just one representative. To that end, you can use these links:

[PLACES TO LEARN ABOUT GIT AND VERSION CONTROL](https://github.com/incrediblesound/Jump-Into-JavaScript/blob/master/references/version_control.md)

Once you have a good idea about how Git works, you can start using GitHub to store your projects. One of the cool things about this website is that it allows you to "fork" peoples projects into your own profile, make your own changes, and then submit a "pull request" to integrate those changes into the official code base. These are extra features that GitHub adds on top of Git. Another cool feature is the ability to open up issues, so that if you find a problem in someone's code you can tell them about it by opening an issue. 

You can try forking this book into your own profile as practice, and then you don't have to come to my profile every time to read it. If you find a mistake you can change it yourself and submit a pull request. You can also open issues against this repository (make sure you open an issue in the main reposity, i.e. the one at www.github.com/incrediblesound) and I will try to address the problem.

When you start developing your own projects, use version control and store your projects (as long as they are not private) on Github. This will serve as a backup, allow other programmers to use and contribute to your work, and also serve as a kind of online portfolio.

##Programs, Libraries and Frameworks

There is a functional difference between programs, which accomplish some purpose, and libraries, which provide tools for the programmer to write programs. To be a competent programmer, you will have to know both how to write programs and how to use libraries. There are a some things that programmers do a lot, for example iterating over a list of items. Lets say I have the list of people I made above:

```javascript
[ { name: 'John', age: 31, sex: 'm' }, { name: 'Stacy', age: 24, sex: 'f' } ]
```

I want to print out just the age of each person in the list. We could write a function that goes over the items in the list and prints out the age property of each item. In JavaScript that looks like this:

```javascript
function printAge(list){ // printAge takes a list of items
  for(var i = 0; i < list.length; i++){ // loops through that list
    console.log(list[i].age); // and prints out the age property of each item
  }
}
```

But what if, in a different place, I want to print out just the names. Then I would have to rewrite this function but instead of logging listi[i].age I would log list[i].name. It would be much better if I could abstract the idea of doing something to every item in a list, and just insert the list and the function that performs the action on each item. That looks like this:

```javascript
function each(list, iterator){ // each takes a list and an "iterator" function
  for(var i=0; i < list.length; i++){ // loops through that list
    iterator(list[i]) // and passes each item into the function
  }
}
```
and now I can do this:

```javascript
each(peopleList, function(person){ console.log(person.age); })
each(peopleList, function(person){ console.log(person.name); })
```
or even clearer:
```javascript
var printName = function(person){ console.log(person.name); }
var printAge = function(person){ console.log(person.age); }

each(peopleList, printName);
each(peopleList, printAge);
```

Well it turns out that abstractions like this are so useful and so common that many of them are written out for you in libraries that you can use for free. The abstraction above can be found in Underscore.js or Lodash.js which are both libraries of useful functions. When you are starting out it is a good exercise to write these functions yourself, but when you start writing your own programs you should use libraries so that you can focus on building your project instead to re-writing the same basic code over and over again.

There’s another thing called a framework which a library but that serves specific purpose. To write a complicated program, there is usually a lot of boilerplate code that you need to write just to get started. Frameworks provide a basic set of abstractions to reduce the amount of time you spend on boilerplate code. For example, to write complex web applications, we often use the MVC paradigm which stands for model, view, controller. In this paradigm, "model" is an abstraction for holding and managing data, "view" displays the data in an interface of some kind, and the "controller" manages the changes that happen as a result of user interaction with the view. So a web framework, like Angular.js, might include built-in abstractions for models views and controllers or it might focus on one part of that paradigm and let you determine how to manage the rest, like React.js, which just handles the view.

[LIST OF USEFUL LIBRARIES](https://github.com/incrediblesound/Jump-Into-JavaScript/blob/master/references/libraries.md)

##Frontend and Backend development

If you are learning JavaScript, chances are you are going to go into web development. Web development has two basic categories: frontend and backend. Frontend basically refers to code that is run in a browser like Chrome or Firefox. Another way to think of it is as the part that the user sees and interacts with. It encompasses web applications, html, css, and web design. If you think you might like the visual, interactive part of web development more, you should focus on getting a solid foundation in html, css, and JavaScript libraries.

Backend development generally refers to software that runs on a server. It also tends to include databases, and encompases server development, data storage, and API development. If you're more interested in things like data storage and management, networks and servers, you should focus on your proficiency with [Node.js](https://nodejs.org/en/), databases, and server frameworks.

[LIST OF DATABASES](https://github.com/incrediblesound/Jump-Into-JavaScript/blob/master/references/databases.md)
