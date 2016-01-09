---
title: "Project: Erdos - Article Review Site"
post: true
posted: 2015-04-29
layout: project.hbs
stub: Biology
image: "erdos/dashboard.png"
---
[Erdos](http://erdos.jason.lt) is a article publishing site that I wanted to build to learn Django. I already had a lot of experience scripting in python (my preferred language for data analysis) but I never used Django as a framework (although I have played around with flask and pelican). Django is very similar to rails in it's preference for "convention over configuration" making it more difficult to learn - since you don't know the convention, but I found the process relatively painless using [djangogirls](http://djangogirls.org/) and [rango](http://www.tangowithdjango.com/) for guidance.

####Minimum Marketing Features
I have a habit of durdling when it comes to coding so I set out specific goals to accomplish as well as a time-limit of 24 hours, but it ended up taking about two days to complete. My specific goals were to build a site with the following features:
<pre>
x Article Dashboard
x Add/Edit/Review Articles
~ Article management by Editor
x User Authentication
x Show Article (Author/Editor)
x Front Splash
</pre>
I ended up not building an editor user so some of the functionality is missing but I got a lot of things set up that I wasn't sure I would be able to do, including uploading and displaying pdf. If you want to see a copy of my complete todo-list, you can do so [here](https://github.com/jltran/erdos/blob/master/notes.txt)  

####Technologies
Framework: Django  
Back-End/DB: PostgreSQL  
CSS: Furatto  
Media (PDF) Storage: Amazon S3  
As always, code can be viewed on [github](https://github.com/jltran/erdos)

####Challenges
Some of the biggest challenges for me was correctly uplodading everything to django and setting up file management with Amazon S3. Django actually has some great modules for accomplishing some of these things, but my back-end skills are a bit lacking so it took a while.

####Screenshots
Click any of the following images to visit the site. (You don't have to register, you can use one of the existing accounts under login)    
[![]({{assets}}/images/erdos/dashboard.png)](http://erdos.jason.lt)  
[![]({{assets}}/images/erdos/article.png)](http://erdos.jason.lt)  
[![]({{assets}}/images/erdos/reviews.png)](http://erdos.jason.lt)  
