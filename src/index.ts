// import xregexp from 'xregexp';
// console.log(xregexp('\\p{Hiragana}'));

/* string regexps */
export const chineseRegStringExp = '[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]';

export const kanjiStringRegex = '[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]';
export const hiraganaStringRegex = '[ぁ-ゖゝ-ゟ]';
export const katakanaStringRegex = '[ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ]';
export const japaneseStringRegex = `${kanjiStringRegex}|${hiraganaStringRegex}|${katakanaStringRegex}`;

export const koreanStringRegex = '[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]';

/* regexps */
// contains
export const containsChineseRegex = new RegExp(chineseRegStringExp);
export const containsJapaneseRegex = new RegExp(japaneseStringRegex);
export const containsKanjiRegex = new RegExp(kanjiStringRegex);
export const containsHiraganaRegex = new RegExp(hiraganaStringRegex);
export const containsKatakanaRegex = new RegExp(katakanaStringRegex);
export const containsKoreanRegex = new RegExp(koreanStringRegex);
// all
export const allChineseRegex = new RegExp(`^(${chineseRegStringExp})+$`, 'g');
export const allJapaneseRegex = new RegExp(`^(${japaneseStringRegex})+$`, 'g');
export const allKanjiRegex = new RegExp(`^(${kanjiStringRegex})+$`, 'g');
export const allHiraganaRegex = new RegExp(`^(${hiraganaStringRegex})+$`, 'g');
export const allKatakanaRegex = new RegExp(`^(${katakanaStringRegex})+$`, 'g');
export const allKoreanRegex = new RegExp(`^(${koreanStringRegex})+$`, 'g');

/* has some */
export function hasSomeChinese(input: string) {
	return containsChineseRegex.test(input);
}
export function hasSomeJapanese(input: string) {
	return containsJapaneseRegex.test(input);
}
export function hasSomeKanji(input: string) {
	return containsKanjiRegex.test(input);
}
export function hasSomeHiragana(input: string) {
	return containsHiraganaRegex.test(input);
}
export function hasSomeKatakana(input: string) {
	return containsKatakanaRegex.test(input);
}
export function hasSomeKorean(input: string) {
	return containsKoreanRegex.test(input);
}

/* is character (alias of "has some") */
export function isChineseCharacter(character: string) {
	return hasSomeChinese(character);
}
export function isJapaneseCharacter(character: string) {
	return hasSomeJapanese(character);
}
export function isKanjiCharacter(character: string) {
	return hasSomeKanji(character);
}
export function isHiraganaCharacter(character: string) {
	return hasSomeHiragana(character);
}
export function isKatakanaCharacter(character: string) {
	return hasSomeKatakana(character);
}
export function isKoreanCharacter(character: string) {
	return !!character.match(containsKoreanRegex);
}

/* full */
export function isFullChinese(input: string) {
	return !!input.match(allChineseRegex);
}
export function isFullJapanese(input: string) {
	return !!input.match(allJapaneseRegex);
}
export function isFullKanji(input: string) {
	return !!input.match(allKanjiRegex);
}
export function isFullHiragana(input: string) {
	return !!input.match(allHiraganaRegex);
}
export function isFullKatakana(input: string) {
	return !!input.match(allKatakanaRegex);
}
export function isFullKorean(input: string) {
	return !!input.match(allKoreanRegex);
}
