---
date: 2021-05-07T05:10:00Z
short_description: Massive under-the-hood site update. Let's hope nothing broke!
title: Games by Tim upgrades to Gatsby v3
project_name: ''
hero_image: "../images/gamesbytim.png"

---
<div class="gifsvg"></div>

![Games by Tim logo](../images/gamesbytim.svg)

Today I upgraded Games by Tim [from Gatsby v2 to v3](https://www.gatsbyjs.com/blog/gatsby-v3/), a major update to this site's static site generator.

As an under-the-hood upgrade, not much has changed with the look and feel. That said, you should notice general performance improvements, and there was a longstanding bug that took 2 clicks to activate light mode that's been fixed.

The site's also somewhat faster to build for anyone working with the Games by Tim template. For those unaware, the Games by Tim website is [open source](https://github.com/TimTree/games-by-tim) and designed around a base template. [You're allowed to use the template](https://github.com/TimTree/games-by-tim#license) for your own website, as long as you replace the Games by Tim content with your own.

As with any major upgrade, there are [breaking changes](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/) from Gatsby v2 to v3. I did my best to fix everything for v3, but there's always that chance I missed something. If you notice anything broken with the site (layout glitches, no images where they should be), post a comment on this post, [email me](/contact/), or [submit an issue](https://github.com/TimTree/games-by-tim/issues) to the GitHub repo. Thanks!

## Help wanted - migrating to gatsby-plugin-image

For anyone experienced with Gatsby, I can use your help.

The Gatsby image plugin, `gatsby-image`, has been superseded with `gatsby-plugin-image`, which is supposed to be simpler and more efficient. When I migrated the site to `gatsby-plugin-image`, I noticed that every image has an extra 5-6 pixels of padding on the bottom, like so:

![Extra image padding with gatsby-plugin-image](../images/gatsbypluginimagepadding.png)

Is this a bug with `gatsby-plugin-image`, or is there a fix/workaround to remove the padding I'm unaware of? If you have firsthand knowledge of this problem, [leave a note](https://github.com/TimTree/games-by-tim/issues/3) on the GitHub issue. I'd greatly appreciate it!