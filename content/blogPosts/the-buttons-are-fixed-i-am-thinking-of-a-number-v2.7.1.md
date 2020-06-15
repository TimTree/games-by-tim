---
date: 2015-10-15T14:11:50-07:00
short_description: They look far less jarring now.
title: The Buttons are Fixed - I am Thinking of a Number v2.7.1
project_name: i-am-thinking-of-a-number
hero_image: ''

---
<style>

#numberv26 {
font-size:16pt;
}

#numberv27 {
background-color:#f2f2f2;
border-radius:5px;
\-webkit-border-radius:5px;
\-moz-border-radius:5px;
border:1px solid #aaa;
padding:2px 8px;
font-size:16pt;
margin:0;
}

#numberv27:hover {
background-color:#D2E8F5;
}

#numberv27:active {
background-color:#B0CFE0;
color:#000;
}

#numberv27::-moz-focus-inner {
padding: 0 !important;
border: 0 none !important;
}

#numberv27:focus  {  
outline: none;  
}

#numberv271 {
background-color:#f2f2f2;
border-radius:5px;
-webkit-border-radius:5px;
-moz-border-radius:5px;
border:1px solid #aaa;
padding:2px 8px;
font-size:16pt;
font-family: -apple-system, "helvetica neue", roboto, tahoma, ubuntu, arial, sans-serif;
background-image: linear-gradient(to bottom, #f7f7f7, #e8e8e8);
background-image: -webkit-linear-gradient(top, #f7f7f7, #e8e8e8);
background-image: -moz-linear-gradient(top, #f7f7f7, #e8e8e8);
margin:0;
}

#numberv271:hover {
background-color:#D2E8F5;
background-image: linear-gradient(to bottom, #DCEFFA, #C7DFED);
background-image: -webkit-linear-gradient(top, #DCEFFA, #C7DFED);
background-image: -moz-linear-gradient(top, #DCEFFA, #C7DFED);
}

#numberv271:active {
background-color:#B0CFE0;
color:#000;
background-image: linear-gradient(to bottom, #C7DFED, #DCEFFA);
background-image: -webkit-linear-gradient(top, #C7DFED, #DCEFFA);
background-image: -moz-linear-gradient(top, #C7DFED, #DCEFFA);
}

#numberv271::-moz-focus-inner {
padding: 0 !important;
border: 0 none !important;
}

#numberv271:focus  {  
outline: none;  
}

</style>

Some of you guys have expressed concerns about _I am Thinking of a Number_'s redesign, particularly the new buttons. They looked jarring, too Button Masher like, and didn't suit the visual cues of the rest of the interface.

If you were one of those people, rest assured: **I fixed the buttons.** Here, take a look for yourself.

<div style="text-align: center;"> <p><button id="numberv26">Version 2.6</button>    <button id="numberv27">Version 2.7</button></p> <p><button id="numberv271">Version 2.7.1</button></p></div>

Did you notice the difference? Here's what I changed.

* The button font now resembles the rest of the game's interface.
* The button now has a gradient.*
* Because of the gradient, button clicking looks more realistic.

\* If you use Internet Explorer 8/9, Firefox 1-3.5, Chrome 1-3, Safari 1-5.0, or Opera 9-11.50, you'll still see the old button colors.

This should do it guys. The new layout should look a lot more coherent now.