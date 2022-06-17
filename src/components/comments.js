/**
 * The comments component handles the comments section for blog posts and project pages.
 * Each blog post and project page gets its own comments thread. Their id, for Hyvor Talk
 * to creat different threads, is the page slug.
 * Comments are hidden until the user clicks "Show comments" to preserve comment views
 * for Hyvor Talk's free plan.
 */
 import React from "react"
 import { graphql, useStaticQuery } from "gatsby"
 import { Embed } from "hyvor-talk-react"
 import * as CommentsStyles from "./comments.module.scss"
 import { ThemeToggler } from "gatsby-plugin-dark-mode"
 
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
   const darkPalette = {
     accent: "#397de4",
     accentText: "#222",
     footerHeader: "#161616",
     footerHeaderText: "#ccc",
     box: "#282828",
     boxText: "#ccc",
     boxLightText: "#aaaaaa",
     backgroundText: "#ccc",
   }
   if (!props.display) {
     return null
   }
 
   return (
     <ThemeToggler>
       {({ theme }) => (
         <Embed
           websiteId={Number(data.site.siteMetadata.comments_id)}
           id={props.id}
           loadMode="scroll"
           palette={theme === "dark" ? darkPalette : null}
         />
       )}
     </ThemeToggler>
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