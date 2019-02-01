# md-meta

> transfer markdown content meta part to object

[![Build Status](https://www.travis-ci.com/Himself65/md-meta.svg?branch=master)](https://www.travis-ci.com/Himself65/md-meta)
[![codecov](https://codecov.io/gh/Himself65/md-meta/branch/master/graph/badge.svg)](https://codecov.io/gh/Himself65/md-meta)
[![npm](https://img.shields.io/bundlephobia/min/md-meta.svg?style=flat)](https://www.npmjs.com/package/md-meta)
[![downloads](https://img.shields.io/npm/dm/md-meta.svg?style=flat)](https://www.npmjs.com/package/md-meta)
[![version](https://img.shields.io/npm/v/md-meta.svg?style=flat)](https://www.npmjs.com/package/md-meta)
![repo](https://img.shields.io/github/languages/code-size/himself65/md-meta.svg?style=flat)
[![LICENSE](https://img.shields.io/github/license/himself65/md-meta.svg?style=flat)](/LICENSE)

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
