---
date: 2020-08-20T02:44:56.000+00:00
short_description: I finally reproduce a bug that bewildered me for months!
title: Wheel of Fortune for PowerPoint v5.1.1 fixes a longstanding bug
project_name: wheel-of-fortune-for-powerpoint
hero_image: ''

---
### Short version

This update fixes issues with the Value Panel and buy vowel/transfer totals buttons if your display language is not US English. If you're not from the US, please update ASAP.

### Long version

Over the past several months, I've received multiple bug reports about the buy vowel/transfer totals buttons not working in Wheel of Fortune for PowerPoint. I really wanted to fix the bug, but for the longest time, I couldn't reproduce it.

I tried multiple PowerPoint versions. I tried messing with the macro Trust Center settings. I tried different file names, having multiple PowerPoint windows open, and running the file on an account with restricted privileges. I even tried installing/uninstalling Windows updates.

But no avail. Everything I tried, the buttons still worked. The more the bug reports came in, the more I wanted to rip my hair out in absolute agony.

## My attempts to fix

Without any way to reproduce the bug, I tried guessing where the bug was.

When working on version 5.0, I noticed there was a data type mismatch with the vowel price and the player round score. Clicking the buy vowel button would subtract a VBA integer (the vowel price) from a VBA long (the player round score). Although the button still worked fine on my end, I figured that perhaps some specific versions of PowerPoint couldn't handle subtracting from different data types. Thus, I changed the vowel price to a VBA long, hoping that might be it.

In addition, I added code checking if ActiveX is enabled. When I disabled ActiveX within PowerPoint settings, the buy vowel/transfer totals buttons did indeed not work. Perhaps that was the problem, though I was skeptical since Set Up Puzzles would also break without ActiveX, and no one complained about that.

Unfortunately, I realized I still didn't fix the bug after receiving more bug reports. Worse, the new Value Panel from version 5.0 didn't work for some users, another problem I struggled to reproduce.

## Sleuthing the bug reports

Frustrated at the whole situation, I looked more closely to the bug reports.

Although the majority of the reports simply stated what the bug was, some did include useful info, such as the version of PowerPoint used. Versions spread from 2007 to 2016, confirming the bug affected multiple PowerPoint versions. No one mentioned the Mac version for this specific bug though, making me think it might have to do with something in Windows.

One thing that stood out was a YouTube comment from Stephen T Wilkie:

> Hi I was looking at \[the bug\] as well but if you remove the dollar sign from the settings on slide 9 it should work.

Interesting, I thought. How could the dollar sign affect things?

When Simone Biliato from YouTube inquired about the broken Value Panel, I asked if they also couldn't use the buy vowel button. When they confirmed not, I had a feeling the broken Value Panel and buy vowel/transfer totals buttons bugs were related to each other. After all, both bugs involved a dollar sign...

**A dollar sign, eh?** Not all countries use the dollar for currency. Perhaps some countries struggle to handle the dollar sign in PowerPoint?

As far-fetched as that sounded, I changed my Windows display language from US English to UK English. When I tried the buy vowel button...

**...it didn't work!!!**

Never have I felt more excited and relieved about something _not_ working.

## The fix

> **UPDATE (August 27):** I found out the root cause of the bug and corrected the explanation I had before.

PowerPoint VBA has a function called convert long (Clng), which converts a string ("2000") to a long, an integer with a max value of 2 billion (2000). In order for CLng to work, the string to convert has to appear numeric.

In US English, running CLng on the string "$250" returns the number 250. In UK English (and other languages), trying to convert "$250" leads to an error.

This happens because in US English, "$250" is interpreted as a currency, which is numeric, so CLng works. In UK English, "$250" is a non-numeric string, so CLng causes a type error.

The fix is to strip the dollar sign from the string before converting it to a long. So instead of running:

`CLng("$250")`

we run this instead:

`CLng(Replace("$250", "$", ""))`

With that, this Wheel of Fortune for PowerPoint nightmare is finally over (hopefully forever).

## Conclusion

If I learned anything from this experience, it's that bugs can come from the most unexpected places. Who would have thought the Windows display language would impact PowerPoint VBA? Whenever I test software in the future, I'll no longer prematurely cast doubt on theories, no matter how out there they seem.

I'd like to thank all of you for voicing your bug reports. I apologize it took this long for me to fix this bug, and I hope you can learn from the backstory behind it.

\~Games by Tim