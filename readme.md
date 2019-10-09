# asian-regexps

Chinese, Japanese, Korean convenient RegExp ESModule

## installation

```npm i asian-regexps```

## usage

### ESModule
```javascript
import { isKorean } from 'asian-regexps'
isKorean('한글') // true
```

### typescript
```typescript
import { isKorean } from 'asian-regexps'
isKorean('한글') // true
```

### browser
```html
<script type="module">
  import { isKorean } from './node_modules/asian-regexps/asian-regexps.js'
  isKorean('한글') // true
</script>
```

### CommonJS (legacy)
```javascript
const { isKorean } = require('asian-regexps/legacy')
isKorean('한글') // true
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