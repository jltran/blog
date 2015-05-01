---
title: "Project: Berkeley Builds Capacity Scheduler"
post: true
posted: 2015-01-06
layout: project.hbs
---
This is a site I built to help schedule outreaches for my project Berkeley Bulids Capacity, which aims to reduce HIV incidence by providing HIV testing and counseling to at-risk populations throughout the East Bay. In order to do this, we train volunteers to be outreach workers and counselors to engage people on outreaches. We were using google calendar before, which proved effective but had some issues with permissions: people would randomly delete outreaches off their calendars resulting in headaches for us coordinators.

####Technologies Used
I wanted to use AngularJS for the framework and Firebase (a backend as a service) was a natural solution for the database. Since our usage would be low, it would be effectively free and comes with hosting as well! However, angular and firebase was sometimes frustrating to work with due to syncronicity issues (aka working with javascript promises). MaterializeCSS was used as the css framework - which caused a lot of problems as well because it's forms did not play nice with angular. Overall, I was impressed with the power of angular but because it abstracts away a lot of what it's doing, it can be annoying to figure out why something is breaking (heisenbug).

####Features
We needed several authentication levels: admin, counselors and outreach workers. The admin could assign levels and counselors and outreach workers could sign up for outreaches as well as create outreaches.

As always, code can be viewed on [github](https://github.com/jltran/bbc)

Click on the image below to visit a mirror of the site:

[![]({{assets}}/images/bbc.png)](https://bbc-calendar.firebaseapp.com/)