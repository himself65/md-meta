const metaRegex = /(?<=^---\n)[\s\S]+?(?=---)/
const metaAllRegex = /^---[\s\S]+?(?<!\\)---/
const metaLeftRegex = /^.+?(?=(?<!\\):)/
const metaRightRegex = /(?<=(?<!\\):).+/

function removeMeta (markdown) {
  return metaAllRegex[Symbol.replace](markdown, '').trim()
}

function parseMeta (data) {
  const _ = {}
  data.split('\n').forEach(line => {
    _[metaLeftRegex.exec(line)[0].trim()] = metaRightRegex.exec(line)[0].trim()
  })
  return _
}

module.exports = {
  metaRegex: metaRegex,
  metaAllRegex: metaAllRegex,
  metaLeftRegex: metaLeftRegex,
  metaRightRegex: metaRightRegex,
  removeMeta: removeMeta,
  parseMeta: parseMeta
}
