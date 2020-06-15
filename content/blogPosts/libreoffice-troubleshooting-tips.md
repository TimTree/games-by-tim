---
date: 2017-10-15T14:38:16-07:00
short_description: Problems running my LibreOffice projects? You've come to the right
  place.
title: LibreOffice Troubleshooting Tips
project_name: ''
hero_image: ''

---
LibreOffice is impressive for being a completely free office suite, but it's not without its share of problems. Here are some issues I've encountered while testing Bingo Master Board PLUS for LIbreOffice and what I recommend to solve them.

***

## Macros are disabled. Help me enable them!

LibreOffice ships with a macro security level of High by default. This means that no unsigned macros are allowed to run. Since my projects use unsigned macros, you have three options:

1. Lower the macro security level to medium.
2. Lower the macro security level to low.
3. Add a trusted file location and place the LibreOffice file there.

I recommend the first option, which will prompt you to enable macros each time you open macro-based projects. This is safer than the other two options, which put you at risk of accidentally enabling macros. If you want to make sure my macros aren't harmful, you can always disable them and read the source code at Tools - Macros first.

Anyway, to enable macros, go to Tools - Options - LibreOffice - Security, and click on the Macro Security button. From there, change the security level to medium. After that, you'll see something like this when you reopen the file.

![](../images/libremacro.png)

## Everything looks pixelated and ugly in Presentation mode.

Go to Tools - Options - LibreOffice - View - Graphics Output. If "Use OpenGL for all rendering" is unchecked, enable it. This is what solved the display problems for me.

## Some of the fonts look off.

With LibreOffice, I do my best to utilize fonts that are compatible with all operating systems. That said, some Linux distros don't have the necessary fonts installed. If this happens to you, highlight the words with the wrong-looking font to find out what font was supposed to be used. You can then download that font online and install it to your system.