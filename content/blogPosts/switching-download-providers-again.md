---
date: 2019-03-25T06:15:48.000+00:00
short_description: RIP goo.gl. Long live GitHub.
title: Switching download providers (again)
project_name: ''
hero_image: ''

---
**Update (Mar 25):** The migration process is complete.

***

[Not long ago](/blog/tim-s-slideshow-games-is-switching-to-google-drive/), I migrated all my PowerPoint projects from MediaFire to Google Drive. Since Google Drive cannot track download counts, I used the Google URL shortener, goo.gl, to help me do so.

Now that goo.gl is about to shut down on March 30, I need another way to keep the download counter going. Thankfully, **GitHub comes to save the day!** It turns out GitHub tracks the download count of any file uploaded to a repo's Releases page, and man I wish I knew this sooner.

So here's what's gonna happen:

* This week, I will migrate **Flashcards for PowerPoint** and **Wheel of Fortune for PowerPoint** to their own GitHub repos. The repo links are as follows:

  [Flashcards for PowerPoint](https://github.com/timtree/flashcards-for-powerpoint)  
  [Wheel of Fortune for PowerPoint](https://github.com/TimTree/wheel-of-fortune-ppt)

  **Each repo will include the full VBA as .vb files.** That way, you can make sure the VBA is safe to use before even downloading the PPT file!
* I will upload the latest versions of each project to their Releases pages. For each versions' release notes, **I will attach a badge that shows the download count of that version.** The badges will look like this, courtesy of shields.io.

  ![](https://img.shields.io/github/downloads/timtree/flashcards-for-powerpoint/v1.2/total.svg)
* On each projects' GitHub README, **I will display the total download counts**, which will update automatically! Along with the badge that will show all downloads after March 2019, I will also include the download counts archived from goo.gl and MediaFire.
* **Existing download links won't change!** Although the download endpoints will be different, I will continue to use my GitHub Page URL format to process download queries like before.
* All previous versions of each project and any retired projects up to now will remain on Google Drive. While Google will still properly reroute the goo.gl links, I will no longer track the download counts of these files.

Ideally, nothing should feel different on your end. It's just that you and I now have the ability to more easily track download counts and the VBA! I'm a fan of the increased transparency, and I hope you are too.