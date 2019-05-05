const chineseRegExp = /([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d])+/
const koreanRegExp = /([\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff])+/
const japaneseRegExp = /([\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf])+/
const isKorean = input => (input.match(koreanRegExp) ? true : false)
const isChinese = input => (input.match(chineseRegExp) ? true : false)
const isJapanese = input => (input.match(japaneseRegExp) ? true : false)

module.exports = {
  chineseRegExp,
  koreanRegExp,
  japaneseRegExp,
  isChinese,
  isKorean,
  isJapanese
}
