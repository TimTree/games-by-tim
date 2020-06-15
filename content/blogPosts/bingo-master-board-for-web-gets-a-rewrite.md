---
date: 2018-08-28T20:33:06-07:00
short_description: Who would've thought this would happen?
title: Bingo Master Board for Web gets a Rewrite
project_name: bingo-master-board
hero_image: "../images/bingomasterboardappicon.png"

---
Who would've thought this would happen?

I recently returned from Make School Summer Academy, a 6-week program where I learned more about Web development. Along with building team and personal projects (which I'll probably share here later), I learned about some nifty Web concepts.

Who knew:

* JavaScript evolved a lot since I first learned it **(ES6)**,
* there's an easy way to vertically align objects **(flexbox)**,
* fractional units exist **(CSS grid)**,
* and CSS itself can scale things **(CSS transform)**?

Essentially, these concepts made me realize, _how can I use these to rewrite Bingo Master Board?_

## Why the rewrite?

The Bingo Master Board for Web code from May was a mess. Working with an HTML5 canvas, even with CreateJS helping me, wasn't fun to say the least.

I had to create every shape and text with JavaScript. I had to specify the exact pixel coordinates for every object. I had to do math gymnastics to align the Bingo balls. Text objects could only be one line, meaning I had to create multiple objects for paragraphs. The list goes on.

By the time I uploaded the first build to GitHub, I couldn't read what I wrote.

That's why the concepts I learned at Make School got me thinking. What if I use CSS to scale a div block to fit the browser window? That way, I could use HTML/CSS to design the UI, which is way easier to work with.

I did exactly just that. The result? **Significantly cleaner source code.** Now, using what I learned, I can position objects the way I want it without doing math. On top of that, I can utilize the new JavaScript standards from the ground up.

In addition, **the new code uses less CPU and RAM**. I'll let you prove this for yourself. Open the new build and the CreateJS build in separate tabs. Then open up Chrome's task manager. As you compare, make sure to switch active tabs between the two builds. You'll find the links at the end of this post.

**Update (9/6)**: I removed the CreateJS build from GitHub Pages. You can still find/download the latest CreateJS build [here](https://github.com/TimTree/bingo-master-board/tree/52992bbbc2c977a8cba28dbd677c21a9cd255f10).

So long, CreateJS. It was nice meeting you.

## That's cool. What else did you do?

Glad you asked. In addition to the rewrite, the new build includes additional features. Here's a sampler.

* **New color scheme for faded Bingo balls** - They should now blend better regardless of your theme.
* **Home button in master board slide** - Takes you back to the title slide. Based on user testing, you guys wanted this.
* **Hide/Show Board** - The blocker that hides drawn Bingo balls for tougher games is back from Bingo Master Board PLUS. You can also press x to activate the blocker.
* **Save support** - Bingo Master Board for Web now remembers your current theme and progress when you refresh or leave the page.
* **Fixes a fullscreen bug when using the escape key**

You might be wondering why changing the theme takes more than a click now. That's because I plan to add another setting to this slide! If you're curious, read the commented-out CSS in the source code. ;)

## Known Bugs

* **If you refresh the game with control-R on the master board slide, you may lose your Bingo ball save data.**
* **In Safari on 1080p+ displays, if you reset the master board while the blocker is enabled, the G and the O will disappear during the animation.**
  * This is a browser bug and is fixed in the latest Technology Preview.
  * Chrome also has this bug, but I added a workaround specifically for this browser. You may still trigger the bug if you mash the reset button.
  * This workaround has a blur side effect, which is why I am only using it for Chrome.
* **The fullscreen button does not work on the iPad.**
  * This is unfortunately a browser limitation. However, we may get fullscreen support in iOS 12 according to [Apple's release notes](https://developer.apple.com/safari/whats-new/).
  * I will not be able to test this until iOS 12 releases.
  * If fullscreen works for iPad on iOS 12, this bug fixes itself. Otherwise, I will need to hide the fullscreen button specifically for iPad.
* **Pressing and holding the space bar draws Bingo balls rapidly, which may not be desirable.**

Bingo Master Board for Web is **still in the preview phase**, so definitely let me know how the new build works for you before the stable release.