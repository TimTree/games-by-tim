/**
 * The commentsBox component handles the comments section for blog posts and project pages.
 * Each blog post and project page gets its own comments thread. Their id, for Hyvor Talk
 * to creat different threads, is the page slug.
 * Comments are hidden until the user clicks "Show comments" to preserve comment views
 * for Hyvor Talk's free plan.
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Comments } from "@hyvor/hyvor-talk-react"
import * as CommentsBoxStyles from "./commentsBox.module.scss"

const CommentThread = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          comments_id
        }
      }
    }
  `)
  if (!props.display) {
    return null
  }

  return (
    <Comments
      website-id={Number(data.site.siteMetadata.comments_id)}
      page-id={props.id}
      colors={window.__theme === "dark" ? "dark" : "light"}
    />
  )
}

class CommentsBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showComments: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showComments: !prevState.showComments,
    }))
  }
  // It's also possible to show comments by pressing the enter key.
  handleToggleKey = ev => {
    if (ev.keyCode === 13) {
      this.setState(prevState => ({
        showComments: !prevState.showComments,
      }))
    }
  }

  render() {
    return (
      <div className="blogComments">
        {!this.state.showComments ? (
          <div>
            <h2 style={{ textAlign: "center" }}>
              <span
                role="button"
                tabIndex={0}
                className={CommentsBoxStyles.showComments}
                onClick={this.handleToggleClick}
                onKeyDown={this.handleToggleKey}
              >
                Show comments
              </span>
            </h2>
            <noscript>
              <p style={{ textAlign: "center" }}>(JavaScript required to show comments)</p>
            </noscript>
          </div>
        ) : null}
        <CommentThread display={this.state.showComments} id={this.props.id} />
      </div>
    )
  }
}

export default CommentsBox
