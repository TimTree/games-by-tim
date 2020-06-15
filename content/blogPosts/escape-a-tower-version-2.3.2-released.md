---
date: 2015-10-11T20:10:55-07:00
short_description: More fixes, this time for ancient browsers.
title: Escape a Tower Version 2.3.2 Released
project_name: escape-a-tower
hero_image: "../images/towerappicon512.png"

---
Let's cut to the chase:

* **Now compatible with more ancient browsers, including Netscape.**  
    
"Are you insane?" "What were you thinking?" "Are you mentally OK?" Yes I'm insane, I don't know what I was thinking, and I'm not sure if I'm mentally ok since I sacrificed exam study time to code this craziness.  
    
Anyway, it turns out Escape a Tower's layout is actually basic enough to be supported on a plethora of ancient browsers, but the game wouldn't start on those browsers since they don't support Local Storage. By making a few tweaks to the Local Storage code, Escape a Tower now works to a minimal level on the following browsers:

* Firefox 1-3.0
* Chrome 1-3
* Safari 3
* Opera 9-10.0
* Netscape 9 (Whoa.)

_It might also work on Internet Explorer 7, Safari 1-2, or even older versions of Netscape (seriously?), but I'm unable to test those browsers._
  
If you're deranged enough to play on one of these browsers, you won't be able to save your progress. There may also be some formatting kinks, but they shouldn't interfere with the gameplay.  
    
I also worked on this in between all this chaos:

* **Formatting fix for Internet Explorer 9+**