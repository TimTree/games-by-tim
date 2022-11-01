/**
 * The shareButtons components adds social media share buttons for blog posts and project pages.
 * It's made thanks to the node module "react-share".
 * "react-share" has many different social media buttons. I chose five I personally thought were
 * the most relevant.
 */
import React from "react"
import * as shareButtonsStyles from "./shareButtons.module.scss"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailIcon,
  EmailShareButton,
  RedditShareButton,
  RedditIcon,
} from "react-share"

export const ShareButtons = ({ url, title, siteTitle }) => (
  <div className={shareButtonsStyles.shareButtonDiv}>
    <EmailShareButton url={url} subject={`Check out ${title} from ${siteTitle}`}>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>

    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>

    <TelegramShareButton url={url} title={title}>
      <TelegramIcon size={32} round={true} />
    </TelegramShareButton>

    <LinkedinShareButton url={url} title={title} source={siteTitle}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round={true} />
    </RedditShareButton>
  </div>
)

export default ShareButtons
