---
date: 2018-09-14T16:00:30-07:00
short_description: Release notes during development of Bingo Master Board for Web
title: Bingo Master Board for Web Commit 2018-09-14-1
project_name: bingo-master-board
hero_image: ''

---
See, I wasn't kidding. Get ready for multiple commit updates per day!

This commit **adds a bunch of keyboard shortcuts.** Brace yourself; it's a nice, long list.

In the master board page:

* **B, I, N, G, O** - Hide/show respective Bingo letters
* **H** - Go to the title page
* **T** - Go to the Themes page
* **V** - Toggle balls drawn/remaining counter
* **W** - Go the the Winning Pattern page

In the Themes/Winning Pattern pages:

* **T (Themes), W (Winning Pattern), or Enter** - Go back to master board  
  After you use the keyboard shortcut, leave your finger on that key while your other hand uses the mouse. When you're done with the page, you can simply press the key with your finger instead of moving your cursor to "Go Back."

In the title page:

* **Enter** - Go to master board

In any page:

* **F** - Toggle fullscreen

I hope these extra keyboard shortcuts enhance your Bingo Master Board experience. As far as I know, there is no simple way to have keyboard control in PowerPoint.

In addition:

* **Pressing and holding the spacebar no longer draws balls repeatedly.**
* **Refreshing the page with Control-R no longer resets your Bingo balls.**
* **In Safari, using the keyboard in fullscreen no longer triggers an alert sound.**

**UPDATE:** Turns out this commit introduced a bug that prevents refreshing with Control-R for some browsers. I'll do my best to prepare a hotfix.

**UPDATE 2:** You should be able to refresh again. The Safari alert sound is back, but at least it only happens when holding a key. I'm satisfied for now.