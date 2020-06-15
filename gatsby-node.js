const path = require("path")
const moment = require("moment")
const { createFilePath } = require(`gatsby-source-filesystem`)
const blogPost = path.resolve(`./src/templates/blogPost.js`)
const page = path.resolve(`./src/templates/page.js`)
const project = path.resolve(`./src/templates/project.js`)
const smallProject = path.resolve(`./src/templates/smallProject.js`)
const blogYear = path.resolve(`./src/templates/blogYear.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath.includes("/blogPosts/")) {
      const slug = "/blog" + createFilePath({ node, getNode, basePath: `blog` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    } else if (node.fileAbsolutePath.includes("/mainData/")) {
      const slug = path.basename(node.fileAbsolutePath, ".md")
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    } else {
      const slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageResponse = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(pages)/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const projectResponse = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const smallProjectResponse = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(smallProjects)/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const blogPostResponse = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blogPosts)/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)
  pageResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: page,
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  projectResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: project,
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  smallProjectResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: smallProject,
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const all_years = {}
  blogPostResponse.data.allMarkdownRemark.edges.forEach((edge, index) => {
    createPage({
      component: blogPost,
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
        prev:
          index === 0
            ? null
            : blogPostResponse.data.allMarkdownRemark.edges[index - 1].node.fields.slug,
        next:
          index === blogPostResponse.data.allMarkdownRemark.edges.length - 1
            ? null
            : blogPostResponse.data.allMarkdownRemark.edges[index + 1].node.fields.slug,
      },
    })
    const the_year = moment(edge.node.frontmatter.date).local().format(`YYYY`)
    all_years[the_year] = all_years[the_year] === undefined ? 1 : (all_years[the_year] += 1)
  })

  Object.keys(all_years).forEach(year => {
    createPage({
      component: blogYear,
      path: `/blog/year/${year}/`,
      context: {
        slug: `/blog/year/${year}/`,
        year: year,
        endRange: `${(parseInt(year) + 1).toString()}-01-01T08:00:00.000Z`, // Change for timezone
        limit: all_years[year],
      },
    })
  })

  const posts = blogPostResponse.data.allMarkdownRemark.edges
  const postsPerPage = 8
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
