---
title: 2020 site overhaul release notes
social_media_image: ''

---
Below is a comprehensive list of changes to the Games by Tim website, released June 14, 2020.

## General changes

* **Games by Tim switches from** [**Blogger**](https://www.blogger.com) **to** [**Gatsby**](https://www.gatsbyjs.org)**.**
  * Blogger is a free blog hosting service from Google, which made sense to use before I knew web development.
  * Gatsby is a static site generator that uses React, a JavaScript library, to build the interface.
  * Compared to Blogger, Gatsby allows for a far more flexible website. It also incorporates modern techniques that enhance site performance, accessibility, and search engine optimization (SEO), explained throughout the rest of the release notes.
* **Games by Tim is now responsive for mobile devices.**
  * The previous Blogger website had a separate mobile site, which deviated away from the main site's look and feel.
  * The new website is properly designed for both mobile and desktop devices. See for yourself by resizing your browser window.
  * Because the new website can dynamically adjust itself, larger displays get blessed with bigger font sizes and images.
* **Games by Tim now has animations.**
  * Each page you load fades into view.
  * The homepage intro banner and the hamburger menu (on mobile view) also have their own animations.
  * Animations are disabled if "reduced motion" is enabled on your device.
* **Games by Tim now has a dark mode.**
  * When you first visit the site, the site sets its theme based on your system preference.
  * You can change themes by clicking the sun or moon on the top right of the navbar.
* **Games by Tim is now open source.**
  * Because Gatsby-made sites are hand-coded, it is possible to share the website's source code.
  * You can [view the Games by Tim source code here](https://github.com/TimTree/games-by-tim).

## Performance improvements

* Thanks to Gatsby, the new site utilizes several techniques to improve page speed and performance, including:
  * **Code minification** - removing blank spaces from the code you load to minimize download size.
  * **Link preloading** - When your cursor hovers over a link, the site prefetches the page content. That way, the page instantly loads when you click on it.
  * **Image lazy loading** - Images won't load until you scroll down to them, saving precious seconds off initial page load. (That's why the images blur in if you were curious.)
  * **Selective image downloading** - It's a waste to download large images for small screens, so the site downloads smaller versions of images on such devices.

## SEO improvements

* **URLs look a lot more cleaner.**
  * For instance, the So Many Numbers project URL, which used to be (gamesbytim.com/2018/09/so-many-numbers-30-problem-arithmetic.html) is now simply (gamesbytim.com/so-many-numbers/).
  * Without the date hanging in the URLs, search engines should realize that projects are ongoing and not locked into a date.
  * Countless other URLs look cleaner too.
* **Page articles are now properly formatted.**
  * On Blogger, I used workarounds against the web standard to make text look more attractive.
  * The new site better confirms to web standards, which should be easier for search engines to crawl.
* **Meta descriptions are now optimized for search engines.**
  * Search engines tend to have around a 160-character limit for descriptions. Gatsby automatically makes the first 160 characters of full words of a blog post or project description the meta description.
* **Social media sharing cards have been optimized.**
  * Whenever you share a link on Facebook, Twitter, or Slack, the post populates with an image, the website's title, and a description.
  * The new site specifically configures which images, titles, and descriptions to use for these cards.
* **Games by Tim is now a progressive web app (PWA).**
  * On Chrome, you should see a plus button to "install" Games by Tim to your homescreen.

## Navbar

* **The logo's now rendered as an SVG.**
  * SVGs are scale able vector graphics that look perfect regardless of device.
* **The navbar's links are more streamlined.**
  * The new Contact page contains a public-facing email address so you can privately send me a message.
  * The link to the GitHub profile is now the GitHub icon.
  * The Grab Bag link is gone since hardly anyone clicked on that link. You can instead find the Grab Bag at the bottom of the homepage.
* **The homepage and blog links now properly change style when you're on their pages.**
  * The reason they didn't work previously was due to a Blogger limitation.
* **The navbar stays fixed across the site.**
  * It stays with you as you scroll down the site for quick access to the links and theme toggle.
* **The navbar features gaussian blur.**
  * Gaussian blur does not work on Firefox, which will instead use light transparency for the time being.

## Homepage

* **The homepage is now directly on gamesbytim.com instead of gamesbytim.com/p/home.html.**
  * The home.html thing was a Blogger limitation since all Blogger homepages have to be the blog feed. I had to set a redirect from the "homepage" to a different page.
* **Projects now display screenshots instead of their app icons.**
  * Since the new site's more expansive, it makes sense to fill it with more expansive kinds of images. Plus, screenshots offer a more authentic preview of projects than app icons ever would.
* **"Other projects" no longer exist. Each smaller-scale project gets a dedicated category now.**

## Project pages

* **Project descriptions are now separated from blog posts.**
  * This not only allows for a more unique project showcase, it also greatly improves SEO since there's no outdated date attached to the project page.
* **Each project page now has a streamlined look and feel.**
  * Blogger posts didn't have structure, which meant each project page lacked some form of consistency.
  * Now they're more consistent since I can fine-tune exactly how a project page should look.
* **The Archive has been replaced with links to older versions of projects on their respective pages.**

## Blog feed

* **Instead of showing the beginning of the blog post, the blog feed now includes a short description instead.**
  * This helps make each blog post look more consistent.
  * It also does away with jump breaks, which I had a hard time staying consistent with on Blogger.
* **Blog posts that were originally project descriptions have been removed because they are redundant.**

## Blog posts

* **All non-project blog posts have been ported to the new site.**
  * Some blog posts received minor edits. Most, if not all blog posts received formatting improvements.
* **Blog posts have a smaller maximum number of characters per line.**
  * Many article sites, such as Medium, limit the text width so articles are easier to read. The new Games by Tim adopts the trend.
* **Images now completely fill the text width when possible.**
  * This would've been very difficult to pull off with Blogger. Gatsby does it automatically.
* **All images now come with slightly rounded edges.**
  * This arguably looks more pleasing to the eye.
* **Blog posts about specific projects now have a top widget with relevant project links.**
  * This change greatly improves consistency regarding where to put such links in the blog post.
* **A code formatting plugin has been installed so future blog posts can include code snippets.**
  * A change not possible with Blogger. Prepare for more technically oriented blog posts moving forward.
* **I'm now mentioned by my name, Timothy Hsu, instead of Tim the Writer.**

## Comments

* **Comments are now run via** [**Hyvor Talk**](https://talk.hyvor.com/)**.**
  * Hyvor Talk's advantages over Blogger's built-in commenting system include spam protection with RECAPCHA and the ability to disclose your email to receive a notification whenever I reply to your post.

## Grab Bag

* **Retired projects have been renamed to Unlisted projects.**
* **The old Games by Tim remains accessible on** [**old.gamesbytim.com**](https://old.gamesbytim.com/)**.**