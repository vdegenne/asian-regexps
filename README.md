# asian-regexps

Chinese, Japanese, Korean convenient RegExp npm package.

## Installation

```npm i asian-regexps```

## Usage

### CommonJS
```javascript
const { isFullKorean } = require('asian-regexps')
isFullKorean('한글') // true
```

### ES6/ES2015 Modules AND TypeScript
```typescript
import { isFullKorean } from 'asian-regexps'
isFullKorean('한글') // true
```

### Browser
```html
<script type="module">
  import { isFullKorean } from '/node_modules/asian-regexps/asian-regexps-esm.js'
  isFullKorean('한글') // true
</script>
```

## API

### functions

- `hasChinese(string)`
- `isFullChinese(string)`
- `hasJapanese(string)`
- `isFullJapanese(string)`
- `hasKorean(string)`
- `isFullKorean(string)`

### regexps

- `chineseRegExp`
- `japaneseRegExp`
- `koreanRegExp`