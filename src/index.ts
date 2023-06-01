// import xregexp from 'xregexp';
// console.log(xregexp('\\p{Hiragana}'));

/* string regexps */
export const chineseRegStringExp = '[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]';

export const kanjiRegStringExp = '[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]';
export const hiraganaRegStringExp = '[ぁ-ゖゝ-ゟ]';
export const katakanaRegStringExp = '[ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ]';
export const japaneseRegStringExp = `${kanjiRegStringExp}|${hiraganaRegStringExp}|${katakanaRegStringExp}`;

export const koreanRegStringExp = '[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]';

/* regexps */
// contains
export const containsChineseRegExp = new RegExp(`(${chineseRegStringExp})+`);
export const containsJapaneseRegExp = new RegExp(`(${japaneseRegStringExp})+`);
export const containsKanjiRegExp = new RegExp(`(${kanjiRegStringExp})+`);
export const containsHiraganaRegExp = new RegExp(`(${hiraganaRegStringExp})+`);
export const containsKatakanaRegExp = new RegExp(`(${katakanaRegStringExp})+`);
export const containsKoreanRegExp = new RegExp(`(${koreanRegStringExp})+`);
// all
export const allChineseRegExp = new RegExp(`^(${chineseRegStringExp})+$`, 'g');
export const allJapaneseRegExp = new RegExp(`^(${japaneseRegStringExp})+$`, 'g');
export const allKanjiRegExp = new RegExp(`^(${kanjiRegStringExp})+$`, 'g');
export const allHiraganaRegExp = new RegExp(`^(${hiraganaRegStringExp})+$`, 'g');
export const allKatakanaRegExp = new RegExp(`^(${katakanaRegStringExp})+$`, 'g');
export const allKoreanRegExp = new RegExp(`^(${koreanRegStringExp})+$`, 'g');

/* has some */
export function hasSomeChinese(input: string) {
	return !!input.match(containsChineseRegExp);
}
export function hasSomeJapanese(input: string) {
	return !!input.match(containsJapaneseRegExp);
}
export function hasSomeKanji(input: string) {
	return !!input.match(containsKanjiRegExp);
}
export function hasSomeHiragana(input: string) {
	return !!input.match(containsHiraganaRegExp);
}
export function hasSomeKatakana(input: string) {
	return !!input.match(containsKatakanaRegExp);
}
export function hasSomeKorean(input: string) {
	return !!input.match(containsKoreanRegExp);
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
	return !!character.match(containsKoreanRegExp);
}

/* full */
export function isFullChinese(input: string) {
	return !!input.match(allChineseRegExp);
}
export function isFullJapanese(input: string) {
	return !!input.match(allJapaneseRegExp);
}
export function isFullKanji(input: string) {
	return !!input.match(allKanjiRegExp);
}
export function isFullHiragana(input: string) {
	return !!input.match(allHiraganaRegExp);
}
export function isFullKatakana(input: string) {
	return !!input.match(allKatakanaRegExp);
}
export function isFullKorean(input: string) {
	return !!input.match(allKoreanRegExp);
}
