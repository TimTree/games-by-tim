---
date: 2017-12-30T22:24:24-08:00
short_description: Almost there!
title: Wheel of Fortune for PowerPoint Version 4.0 RC Release Notes
project_name: wheel-of-fortune-for-powerpoint
hero_image: ''

---
Link to [beta 1](/blog/wheel-of-fortune-for-powerpoint-version-4.0-beta-1/), [beta 2](/blog/wheel-of-fortune-for-powerpoint-version-4.0-beta-2/), and [beta 3](/blog/wheel-of-fortune-for-powerpoint-version-4.0-beta-3/) release notes

***

**Wheel of Fortune for PowerPoint Version 4.0 Release Candidate (RC)**has arrived! This means that if no new bugs are found, this will very likely be representative of the final release.

## Changes since beta 3

* Playtesting over the holidays proved that the wheel spin trigger mechanism doesn’t exactly generate random spins on the Mac version. This resulted in players consistently landing on high dollar wedges, seemingly in the same exact spot.  
    
  To remedy this issue, I am introducing **a new spin mechanism that computer-randomly generates where it lands**. This applies to both the Windows and Mac versions. While this means that the pulse animation has to go, there are important benefits to this spin approach:  
    
  \- Every single wedge has an equal chance of getting landed at. (For the $10,000 wedge and side Bankrupts, divide by the odds by 3.)  
  \- You can safely double-click the wheel, eliminating that troubleshooting problem.  
  \- The game can now, via code, detect where the wheel landed on.  
    
  The last point is very important, as it could lead to breakthroughs in future versions of the project. For now, I’ve leveraged this capability into what is discussed on the next bullet point.
* You may have noticed that the mystery wedge toggles were broken in previous betas. Rather than fix the bug, I’ve eliminated these toggles in favor of **automatic mystery wedge removal**. If you click the bottom-left mystery button while the wheel is on a mystery wedge, that mystery wedge will automatically be removed while revealing the $10,000 or Bankrupt! Clicking the x next to the indicator will restore both mystery wedges.
* **Transferring totals now zeroes out everyone's round score.**
* **The bonus round interface has been reworked** for improved visual clarity. The active side now has an outline, while the inactive side is now gray. Also, if none of the contestant’s consonants and vowel is in the bonus round puzzle, the letter selector will become red.
* **Fixes an issue that caused settings to look like they reset** when transitioning to the puzzle board
* **The How to Use slides on the Mac version now uses Mac screenshots.**
* The project (except for graphics by wheelgenius) is now licensed under a **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.**

For those still using v3.2 stable, now’s a good time to hop onboard to the v4.0 train. It’s feature complete, and I made an effort to scrub as many bugs as I could find.

The final release with the video guide is still on track for the first half of January 2018.