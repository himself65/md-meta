# md-meta

> transfer markdown content meta part to object

## Example


```javascript
const str =`---
title: foo
author: himself65
---
something
`
const res = parseMeta(str)
console.log(res.title) // 'foo'
console.log(res.author) // 'himself65'

const md = removeMeta(str)
console.log(md) // 'something'
```

## LICENSE

Follow [MIT LICENSE](/LICENSE)
