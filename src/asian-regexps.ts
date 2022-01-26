export const chineseRegStringExp = '[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]'
export const japaneseRegStringExp = '[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]'
export const koreanRegStringExp = '[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]'

export const chineseRegExp = new RegExp(`(${chineseRegStringExp})+`)
export const japaneseRegExp = new RegExp(`(${japaneseRegStringExp})+`)
export const koreanRegExp = new RegExp(`(${koreanRegStringExp})+`)

export const chineseFullRegExp = new RegExp(`^(${chineseRegStringExp})+$`, 'g')
export const japaneseFullRegExp = new RegExp(`^(${japaneseRegStringExp})+$`, 'g')
export const koreanFullRegExp = new RegExp(`^(${koreanRegStringExp})+$`, 'g')

export const isChinese = (input: string) => !!input.match(chineseRegExp)
export const isJapanese = (input: string) => !!input.match(japaneseRegExp)
export const isKorean = (input: string) => !!input.match(koreanRegExp)

export const isFullChinese = (input: string) => !!input.match(chineseFullRegExp)
export const isFullJapanese = (input: string) => !!input.match(japaneseFullRegExp)
export const isFullKorean = (input: string) => !!input.match(koreanFullRegExp)
