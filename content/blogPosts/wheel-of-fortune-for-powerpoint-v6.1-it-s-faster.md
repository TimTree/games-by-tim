---
date: 2021-08-04T07:00:41Z
short_description: Performance improvements on puzzle setup.
title: Wheel of Fortune for PowerPoint v6.1 - It's faster
project_name: wheel-of-fortune-for-powerpoint
hero_image: "../images/woflogo.png"

---
Today's Wheel of Fortune for PowerPoint update continues the effort to speed up the puzzle creation process.

[The last update](/blog/wheel-of-fortune-for-powerpoint-v6.0-holy-smokes/) introduced Puzzle Scribe, a feature that on average writes puzzles three times faster. Now we turn to the performance side. Via thorough software engineering, I am happy to announce **faster load times across the board on Set Up Puzzles**.

To test the load times, I ran the [VBA timer function](https://stackoverflow.com/a/199480) across various Set Up Puzzles subroutines on a MacBook Air (Intel Core i5, Early 2015) running the Mac version. The listed times are the average of running each test ten times.

**Loading Set Up Puzzles from the title slide**

**Version 6.0** - 0.27 seconds<br>
**Version 6.1** - 0.01 seconds (96% faster)

**Loading the editor for puzzle #1 from the HOST'S EYES ONLY slide**

**Version 6.0** - 0.57 seconds<br>
**Version 6.1** - 0.28 seconds (51% faster)

**Loading the editor for puzzle #12 from puzzle #1**

**Version 6.0** - 0.63 seconds<br>
**Version 6.1** - 0.37 seconds (41% faster)

**Loading the next page of puzzles (puzzles 13-24)**

**Version 6.0** - 4.16 seconds<br>
**Version 6.1** - 1.99 seconds (52% faster)

Your results may vary depending on your computer. Generally, the speed improvements are more apparent on slower hardware. Regardless, everyone should benefit from faster code, improving the user experience.

In addition to faster load times:

* The Puzzle Scribe overwrite warning now defaults to "yes".
* On the Mac version, the error popup when inputting more than one letter on a puzzle board tile now offers a protip to try Puzzle Scribe.
* A bug has been fixed that caused an erroneous macro to run when editing puzzle #3.