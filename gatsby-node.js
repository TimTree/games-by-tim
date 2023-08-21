const path = require("path")
const moment = require("moment")
const { createFilePath } = require(`gatsby-source-filesystem`)
const blogPost = path.resolve(`./src/templates/blogPost.js`)
const page = path.resolve(`./src/templates/page.js`)
const project = path.resolve(`./src/templates/project.js`)
const smallProject = path.resolve(`./src/templates/smallProject.js`)
const blogYear = path.resolve(`./src/templates/blogYear.js`)

/**
 * Create page slugs (each page's URL minus the base domain mame)
 * - In general, the slug name is the project name, page name, or blog post title.
 * - Blog posts should have /blog appended to the slug.
 * - /mainData/ contains info for the homepage. For /mainData/, we're not actually making a slug,
 *   but rather a way to query to index page data by calling a markdown file with the name 'index'.
 *   (I should probably reimplement /mainData/ in the future since this could be confusing.)
 */
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

/**
 * The above function just created the URL names of the pages.
 * Now we'll actually form the pages.
 * We create pages differently based on the type of page (project, blog post, etc.)
 */
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
        sort: {frontmatter: {date: DESC}}
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

  // For normal pages and projects, simply create a page using their respective component and slug
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

  // Blog posts are more tricky, so let's break this down.

  // all_years is an object that will contain a year as a key and the total number of blog posts for
  // that year as a value.
  // Ex: {2020: 3, 2019: 4, 2018: 5} means 3 2020 posts, 4 2019 posts, and 5 2018 posts.
  const all_years = {}
  blogPostResponse.data.allMarkdownRemark.edges.forEach((edge, index) => {
    // For every blog post, create the blog post page, adding info about the previous and next
    // blog post by date for those links to work on each page.
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
    // Fill in the all_years object.
    // All queried dates are in UTC, so adjust the year to your local timezone.
    const the_year = moment(edge.node.frontmatter.date).local().format(`YYYY`)
    all_years[the_year] = all_years[the_year] === undefined ? 1 : (all_years[the_year] += 1)
  })

  // With the all_years object, create the pages for the blog archive by year.
  // endRange marks the final second of the year in question, adjusted to your timezone.
  // Add the limit to ensure each page only gets that year's posts, and not anything older.
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

  // Create the pages for the general blog index.
  // There should be 8 posts per page. Use a for loop to generate all the pages needed.
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
