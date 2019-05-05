# asian-regexps

Chinese, Japanese, Korean convenient RegExp ESM Node.js module

## installation

```yarn install asian-regexps```

## usage

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