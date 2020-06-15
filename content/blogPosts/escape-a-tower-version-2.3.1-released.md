---
date: 2015-10-10T22:31:09-07:00
short_description: Various fixes, including one for a game-breaking bug
title: Escape a Tower Version 2.3.1 Released
project_name: escape-a-tower
hero_image: "../images/towerappicon512.png"

---
Today, I patched a few more things with Escape Tower. I've wanted to roll this out for a while, but I procrastinated until I discovered a game-breaking bug (which I'll explain shortly). So let's get started, shall we?

* **Improves game scaling.** Escape a Tower now utilizes the new and improved scaling code introduced from Button Masher v4.1.
* **Explains how to play with fewer words.** As we all know, the fewer the words, the better.
* **The game is now playable on Safari private browsing mode.** Here's the game-breaking bug I was talking about. In previous versions, the game wouldn't start in this instance because Safari would refuse to write in Local Storage. To work around this, I added some flags so Safari private browsing mode would disregard the Local Storage code.
* **Other minor changes:**
  * Cache manifest extension changed from .manifest to .appcache
  * New title font for Linux users
  * Minor tweaks to the game's script