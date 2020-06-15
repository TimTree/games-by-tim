/**
 * The Forestry CMS appends a blank string to image frontmatter if there's no associated image.
 * This blank string could cause Gatsby to infer that all images are strings, rather than files,
 * causing the dreaded "Field ___ must not have a selection since type "String" has no subfields."
 *
 * This plugin completely removes all image frontmatter with blank strings so the only image
 * matter that exists are indeed files.
 *
 * Credits to this Stack Overflow answer for the plugin: https://stackoverflow.com/a/54346068
 */

let fieldsToRemove = []

const deleteFieldsRecursive = node => {
  fieldsToRemove.forEach(fieldToRemove => {
    if (node[fieldToRemove] === "") {
      delete node[fieldToRemove]
    }
  })

  if (typeof node === "object") {
    Object.values(node).forEach(subNode => {
      deleteFieldsRecursive(subNode)
    })
  }
}

exports.onCreateNode = ({ node }, configOptions) => {
  fieldsToRemove = configOptions.fieldsToRemove

  if (node.internal.type === "MarkdownRemark") {
    if (!node.frontmatter) {
      return
    }

    deleteFieldsRecursive(node)
  }
}
