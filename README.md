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
```typescript
import { isKorean } from 'asian-regexps'
isKorean('한글') // true
```

### Browser
```html
<script type="module">
  import { isKorean } from '/node_modules/asian-regexps/asian-regexps-esm.js'
  isKorean('한글') // true
</script>
```

## API

### functions

- `isChinese(string)`
- `isFullChinese(string)`
- `isJapanese(string)`
- `isFullJapanese(string)`
- `isKorean(string)`
- `isFullKorean(string)`

### regexps

- `chineseRegExp`
- `japaneseRegExp`
- `koreanRegExp`