const npmCfg = require('../package.json')
const fs = require('fs-extra')
const UglifyJS = require('uglify-js')
const babel = require('babel-core')

const result = babel.transformFileSync('./src/index.js', {
  'presets': [
    ['env', {
      'targets': {
        'browsers': ['> 1%', 'last 2 versions', 'not ie <= 8']
      }
    }], 'stage-2'
  ],
  'plugins': ['transform-es2015-modules-umd']
})
const licenseTag =
`/*! Vue-Responsive v${npmCfg.version}
* @Url: https://github.com/reinerBa/Vue-Responsive
* @License: MIT, Reiner Bamberger
*/
`

const resultCode = result.code
let resultMin = UglifyJS.minify(resultCode)
if (resultMin.error) console.log(resultMin.error)
let resultMinCode = resultMin.code

fs.writeFile('dist/vue-responsive.js', licenseTag + resultCode)
.then(results => {
  console.log('dist/vue-responsive.js saved')
})
.catch(err => console.log(err))

fs.writeFile('dist/vue-responsive.min.js', licenseTag + resultMinCode)
.then(results => {
  console.log('dist/vue-responsive.min.js saved')
})
.catch(err => console.log(err))
