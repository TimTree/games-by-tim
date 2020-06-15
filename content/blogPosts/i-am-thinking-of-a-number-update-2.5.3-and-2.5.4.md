---
date: 2015-01-29T22:23:58-08:00
short_description: More bugs fixed in v2.5.x
title: I am Thinking of a Number Update (2.5.3 and 2.5.4)
project_name: i-am-thinking-of-a-number
hero_image: ''

---
Once again, I've discovered a bug with this game while developing v2.6. In v2.5.2, the game would crash ONLY on iOS 8 Safari under the following circumstances:

* You're running the game as a full screen Web app.
* You're using Input Field.
* You type something that would trigger an error (ex: letters).
* You submit your guess by tapping Go on the keyboard (not the Enter button).
* After tapping Ok on the error box, the game would crash.

I'm pleased to announce that this catastrophic crash has been fixed.

**Update (1/30/15):** Once again, I've found another bug in the game that forgets to disable the greater than or less than hint when playing a new round. I've released it as v2.5.4.

**Update (4/27/15):** It turns out iOS 8.3 fixes the crash bug that impacted v2.5.2. Thanks Apple!