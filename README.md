# asian-regexps

Chinese, Japanese, Korean convenient RegExp npm package.

## Installation

```npm i asian-regexps```

## Usage

### CommonJS
```javascript
const { isKorean } = require('asian-regexps')
isKorean('한글') // true
```

### ES6/ES2015 Modules AND TypeScript
```javascript
import { isKorean } from 'asian-regexps'
isKorean('한글') // true
```

### Browser
```html
<script type="module">
  import { isKorean } from '/node_modules/asian-regexps/asian-regexps.js'
  isKorean('한글') // true
</script>
```

## API

### functions

- `isChinese(string)`
- `isJapanese(string)`
- `isKorean(string)`

### regexps

- `chineseRegExp`
- `japaneseRegExp`
- `koreanRegExp`