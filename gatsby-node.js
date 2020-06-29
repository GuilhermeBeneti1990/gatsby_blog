const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

//Adding slug field on each post
exports.onCreateNode = ({ node, getNode, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({
            node,
            getNode,
            basePath: "pages"
        })

        createNodeField({
            node,
            name: "slug",
            value: `/${slug.slice(12)}`
        })
    }
}

//To create post pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    
    return graphql(`
    {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                background
                date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
                description
                title
                image
              }
              timeToRead
            }
            next {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
            previous {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
          }
        }
      }
    `).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node, next, previous }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.fields.slug,
                    previous: next,
                    next: previous
                }
            })
        })

        const postsPerPage = 6
        const numberPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numberPages}).forEach((_, index) => {
            createPage({
                path: index === 0 ? `/` : `/page/${index + 1}`,
                component: path.resolve(`./src/templates/list.js`),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numberPages,
                    currentPage: index + 1
                }
            })
        })
    })
}