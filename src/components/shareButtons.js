/**
 * The shareButtons components adds social media share buttons for blog posts and project pages.
 * It's made thanks to the node module "react-share".
 * "react-share" has many different social media buttons. I chose five I personally thought were
 * the most relevant.
 */
import React from "react"
import shareButtonsStyles from "./shareButtons.module.scss"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
  RedditShareButton,
  RedditIcon,
} from "react-share"

export const ShareButtons = ({ url, title }) => (
  <div className={shareButtonsStyles.shareButtonDiv}>
    <EmailShareButton url={url}>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>

    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>

    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round={true} />
    </RedditShareButton>
  </div>
)

export default ShareButtons
