# asian-regexps

Chinese, Japanese, Korean convenient RegExp package

## installation

```npm i asian-regexps```

## usage

### javascript
```javascript
const { isKorean } = require('asian-regexps')
isKorean('한글') // true
```

### typescript
```javascript
import { isKorean } from 'asian-regexps'
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