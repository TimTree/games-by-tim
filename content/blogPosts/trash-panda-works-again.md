---
date: 2021-05-18T22:52:54Z
short_description: We apologize for the outage. Time to photograph those recyclable
  goods!
title: Trash Panda works again!
project_name: trash-panda
hero_image: "../images/trashpandaicon.png"

---
After weeks of the app having a blank screen and a lengthy Zoom session with the team one year later, we're proud to announce that Trash Panda is back online!

## What happened, exactly?

For the past few weeks, launching the Trash Panda app led to a blank screen where the button to take a photo and the item categories would be at. This happened despite no changes to the code since we completed the project back in March 2020.

Normally it'd be difficult to reunite a group who worked on a class project over a year later, but fortunately not for us. Since the end of the project, we've kept each other's contacts in handy. Thank goodness we did, because the fix took team effort.

Upon discovery of the blank screen, the Web team quickly diagnosed that it happened due to the frontend site not receiving the data it needed from the backend server. Problem was, we couldn't tell what broke in our backend at first.

We initially thought that our Earth911 API key expired. [Earth911](https://earth911.com/) is where we source our data on where to recycle goods, and we had to [get permission from their developers](https://api.earth911.com/docs/chapter/1/) to use it. It made sense; the app wouldn't function without the Earth911 data, and perhaps the Earth911 devs wouldn't necessarily want their keys lingering forever.

So we reached out to the Earth911 devs to revive our API key. They replied about a week or two later, asking what our API key was to check on it. Once we got the Web team to fetch our API key from the backend, we quickly realized...

...the API key still worked!

When directly accessing the Earth911 API from the [reference methods](https://api.earth911.com/docs/method/), data returned with our API key, and an error returned with an invalid key. We simply couldn't believe it. What else could have possibly broke given no code changes on our end?

## The eventful meeting

On Friday May 14, the Trash Panda team reconvened for a lengthy 2 1/2 hour Zoom meeting. Granted not all the time was on the blank screen issue, but still, it was quite long.

With the team together, we finally had to chance to deep-dive into the problem without the delays associated with texting. After investigating the error logs more thoroughly, we discovered the errors really came from a PostgreSQL call in [Heroku](https://www.heroku.com/), our backend service. In simple terms, Heroku recently changed some security settings on their end the app didn't account for. One [pull request](https://github.com/Lambda-School-Labs/trashpanda-be/pull/95) later, and Trash Panda was back in business!

Or was it?

The initial blank screen disappeared, but the app's image detection still didn't work, and clicking on any item category led to another blank screen. Again, this had to be caused from changes to services we depend on, but what could it be this time?

We checked if our custom image recognition API still worked, since it runs on a different backend server. Sure enough, it did when directly accessing it outside the app.

We eventually realized the above problems happened due to changes from the Earth911 API, not from losing access, but from the data it returned. Since March 2020, Earth911 added additional recyclable item categories to their site. Our app has hand-picked images for each item category, but since we didn't handle images for items we didn't know existed, the app errored out. Since this backend request also occurs during the image recognition process, that also broke.

Another [pull request](https://github.com/Lambda-School-Labs/trashpanda-be/pull/101) later, and Trash Panda finally works again. Hooray!

I'd like to thank everyone from [the Trash Panda team](https://thetrashpanda.com/splash) (click Meet the team) for staying along to restore our beloved project. And if you haven't yet experienced the project's magic due to the blank screen, [absolutely give it a try!](https://thetrashpanda.com) Remember, Trash Panda works best on a smartphone (or resized browser window).