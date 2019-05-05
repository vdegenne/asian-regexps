# asian-regexps

## installation

```yarn install asian-regexps```

## usage

```javascript
const { isKorean } = require('asian-regexps')
isKorean('한글') // true
```

### es-modules
```javascript
import asianre from 'asian-regexps'

asianre.isKorean('한글') // true
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