---
layout: layouts/post.njk
title: Netlify Webhooks
date: 2020-01-27T07:34:59.260Z
tags:
  - netlify
  - JavaScript
  - web development
---
About a year ago, I rebuilt thephilgray.com, my coding blog, using Gatsby and deploying to Netlify. However, I never actually finished migrating my markdown files and switching over my DNS to the new version, even though it was a trivial amount of effort at that point. I'm not really sure why, except that I remember there were a few little UI features or design details that I never actually got around to porting over. I remembered it as more of a project for learning Gatsby, and I liked the original version better.

But there was another reason why I made the effort. The site was originally built with Nuxt and and deployed to Heroku. When I first designed it, Nuxtent was the only Nuxt module for compiling markdown files (there are lots of Vue alternatives now). By the time I was using it, it was no longer being maintained, and I ran into a snag with getting prerendering to work. So, I deployed the Nuxt app to Heroku, though I would have preferred to deploy a static site. And now, every time I visit the old site after a while, I'm reminded why. My little free-tier Heroku deployment takes several seconds to wake up. I've been self-conscious about this for a while. I've been using the site as portfolio and sharing it with potential employers, and that few seconds time to first byte reflects badly on me as a web developer. It was also one of my reasons for branching out and making fakedreams.com with 11ty. I didn't want to have any technical debt excuses for not publishing new content.

I could probably fix the issue I was having with Nuxtent now, but it might be easier to just finish the switchover. I like the simplicity of having everything in the same ecosystem. And now, I'm satisfied with the Gatsby version. I also have an idea for how I can use it together with my new blog.

I want to write some code in the Gatsby blog that will copy over any markdown posts with a coding related tags at build time. I can use a webook with Netlify so that it re-deploys any time there's a new coding post. Or perhaps, I can trigger the webhook for thephilgray.com whenever fakedreams.com deploys.

I also want to prefetch the tweets of thephilgray.com rather than handling that on the client side.

B
