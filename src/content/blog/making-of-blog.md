---
title: "Making of this Blog"
posted: 2013-12-08
post: true
layout: post.hbs
image: "windmill.jpg"
---

My previous blogs had been built on pelican & jekyll and I wanted to try something different on the "back-end" as well while keeping it as a static site generator and found [assemble.io](http://assemble.io), a node.js static site generator.

####Assemble
I was not very impressed with assemble. It's support less limited than jekyll (aka. getting less hits when looking on stack overflow). It has some nice handlebars templating but there were several things such as creating multiple collections that did not seem to be possible. Some things I did like, however: it comes with grunt built in so I didn't have to do much customization there to get things working. Preprocessing scss in realtime and auto-reload was awesome.

####Front-End
On the front-end I wanted to try creating something less rigid so I decided to roll my own site using scss. Not using a grid system and instead using percentages was interesting and sometimes extremely frustrating. I'm glad that we have frameworks that abstract away some of the pecularities of css and the current state of browsers. Autoprefixer in grunt helps maintain cross-browser support really well.