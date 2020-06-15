import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HyvorTalk from "hyvor-talk-react"
import CommentsStyles from "./comments.module.scss"

function CommentThread(props) {
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
    <HyvorTalk.Embed
      websiteId={Number(data.site.siteMetadata.comments_id)}
      id={props.id}
      loadMode="scroll"
    />
  )
}

class Comments extends React.Component {
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
                className={CommentsStyles.showComments}
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

export default Comments
