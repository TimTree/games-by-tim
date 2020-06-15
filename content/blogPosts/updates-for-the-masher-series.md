---
date: 2016-01-22T08:56:17-08:00
short_description: A barrage of minor fixes
title: Updates for the Masher Series
project_name: ''
hero_image: ''

---
New updates for [**Button Masher**](http://timtree.github.io/button-masher/) (version 4.3), [**Keyboard Masher**](http://timtree.github.io/keyboard-masher/) (version 4.4), and [**Mouse Swipe**](http://timtree.github.io/mouse-swipe/) (version 1.1) have arrived. My intention here is to resolve several issues I've thought about over the past several months.

So what exactly has changed? Let's go through the release notes:

* **Minor UI improvements**
  * The back arrow from the Select Mode screen has been moved to the top for better consistency.
  * Hovering over the challenge links, back arrows, and restart buttons now change their colors. Each game uses a different color.
  * The reset button is now colored red. Be careful with that button!
  * Consecutive error messages with Custom mode will now blink at you. This helps you know that your new input is accepted, but you still get the same error.
  * (Mouse Swipe only) I fiddled around with the blank margins to improve the game's center alignment. It's still not perfect, but it's better than before.
* **Custom mode number handing improvements**
  * Inputted numbers will automatically round to the nearest nonzero decimal.
  * If you enter 1 second, the header will now display "1 second" instead of "1 seconds."
  * It turns out entering any custom time above 2,147,483.647 seconds will cause glitches [(here's why)](http://stackoverflow.com/questions/94591/what-is-the-maximum-value-for-a-int32). Because of this, I added a new "overflow" error message. No sane person would play any of these games for over 24.8 days straight anyway.
* **"New Record!" no longer appears on the first playthrough.** After all, it was redundant to see that message when you've never played the mode before.
* **High scores are now hidden if the Save High Scores setting is off.** The benefits are twofold. For one, you can tell more quickly whether or not you have that setting on. Also, if you don't want high scores, you probably wouldn't want to see that anyway, even if it doesn't save.
* **The game now informs you when a reset is complete.** No longer do you have to be confused whether or not your game actually did reset.
* **Access the strategy guide from the help page.** Need help? Use the guide. Self explanatory.
* **(Keyboard Masher only) Fixes a bug that breaks the timer.** The method to triggering the bug was fairly obscure, but it was still worth patching nonetheless.

And if that wasn't enough, this should get you: barring any major bugs, **this is the final "classic" version of the Masher Series.** That's right: the next update I have planned will be a massive one. At a minimum, there will be a new layout and rewrites to portions of the games. That's why I wanted to roll out these set of updates: to patch up any remaining holes from this era before transitioning to a brand new code base.

So I hope you enjoy today's release, and stay tuned here for news on the next gen Masher Series!