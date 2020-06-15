---
date: 2020-05-07T11:48:44.000-07:00
title: Escape a Tower version 2.6.1 - I can read the text now!
hero_image: "../images/towerappicon512.png"
short_description: Fixing the contrast once and for all.
project_name: escape-a-tower

---
Today's Escape a Tower update addresses a major accessibility issue: **text contrast**.

Naturally, it's hard to read something when the text color's close to the background color. As it turns out, there's a contrast test known as the [Web Content Assessibility Guidelines (WCAG)](https://webaim.org/resources/contrastchecker/), and a lot of Escape a Tower's text didn't pass even the minimum tests.

I've therefore darkened the majority of Escape a Tower's test to pass WCAG AA for normal text. Have a look for yourself.

![](../images/toweroldcontrast.png)

<p align="center">Old text (does not pass any contrast tests)</p>

![](../images/towernewcontrast.png)

<p align="center">New text (Passes WCAG AA for normal text)</p>

Although I can read the old text just fine, I was surprised to find out not everyone may feel the same. I hope the improved contrast enables more people to experience the game.

In addition, this update runs the source code through a formatter for better code readability and changes the link from the GitHub pages URL to [tower.gamesbytim.com](https://tower.gamesbytim.com/).