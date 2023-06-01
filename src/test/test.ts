import {assert} from '@esm-bundle/chai';
import {containsChineseRegExp, isChineseCharacter, containsJapaneseRegExp, containsKoreanRegExp, isJapaneseCharacter, isKoreanCharacter, hasSomeChinese, isFullChinese, isKatakanaCharacter, isHiraganaCharacter, isKanjiCharacter, isFullHiragana, isFullKatakana, isFullJapanese} from '../index.js';

describe('asian-regexps', () => {
	describe('chinese', () => {
		it('is simplified chinese characters', () => {
			const characters = '一二三四五六七八九十百千万人天大小少多长短高低上下左右中前后东南西北外里早晚今昨明日年月时分秒火水土风雨电山川田园林木禾米谷面食肉鱼鸟虫草花树果甜酸苦辣好爱喜欢欢迎认识见听说读写学习知道做工作吃喝买卖钱货开关关心父母兄弟姐妹儿子女儿夫妻爷奶朋友同学老师医生警察军队官员司机运动员演员歌手舞蹈家画家作家记者工程师科学家计算机电脑手机网络电视广播电影音乐体育运动游戏戏剧文化历史地理国家城市家庭生活环境健康教育学校工作经济政府社会文学语言艺术数学物理化学生物地球星球宇宙等等';
			for (const c of characters.split('')) {
				assert.equal(isChineseCharacter(c), true);
			}
			assert.equal(isChineseCharacter('A'), false);
		});

		it('is traditional chinese characters', () => {
			const characters = '一二三四五六七八九十百千萬人天大小少多長短高低上下左右中前後東南西北外裡早晚今昨明日年月時分秒火水土風雨電山川田園林木禾米穀面食肉魚鳥蟲草花樹果甜酸苦辣好愛喜歡歡迎認識見聽說讀寫學習知道做工作吃喝買賣錢貨開關關心父母兄弟姐妹兒子女兒夫妻爺奶朋友同學老師醫生警察軍隊官員司機運動員演員歌手舞蹈家畫家作家記者工程師科學家計算機電腦手機網絡電視廣播電影音樂體育運動遊戲戲劇文化歷史地理國家城市家庭生活環境健康教育學校工作經濟政府社會文學語言藝術數學物理化學生物地球星球宇宙等等';
			for (const c of characters.split('')) {
				assert.equal(isChineseCharacter(c), true);
			}
			assert.equal(isChineseCharacter('A'), false);
		});

		it('has/full chinese characters', () => {
			const fullChineseSentence = '一二三四';
			const hasSomeChineseSentence = '一二三四AAAA五六七八';
			const hasNoChineseSentence = 'AAAAAAAA';
			assert.equal(hasSomeChinese(hasSomeChineseSentence), true);
			assert.equal(hasSomeChinese(hasNoChineseSentence), false);
			assert.equal(isFullChinese(fullChineseSentence), true);
			assert.equal(isFullChinese(hasSomeChineseSentence), false);
		});
	});

	describe('japanese', () => {
		it('is kanji/japanese character', () => {
			const characters = '一二三四五六七八九十百千万円今明大中小山川口手足目耳口日月木林石空田男女子水火灯犬猫魚鳥車自本文書読聞言話聴見見親買売食飲飛行来行歩走起寝休仕事学校入出';
			for (const c of characters.split('')) {
				assert.equal(isKanjiCharacter(c), true);
				assert.equal(isJapaneseCharacter(c), true);
			}
			assert.equal(isJapaneseCharacter('A'), false);
			assert.equal(isKanjiCharacter('A'), false);
		});

		describe('Katakana', () => {
			it('is full katakana and are all katakana characters', () => {
				const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴ';
				assert.equal(isFullKatakana(characters), true);
				assert.equal(isFullHiragana(characters), false);
				assert.equal(isFullJapanese(characters), true);
				for (const c of characters.split('')) {
					assert.equal(isKatakanaCharacter(c), true);
					assert.equal(isJapaneseCharacter(c), true);
					assert.equal(isHiraganaCharacter(c), false);
					assert.equal(isKanjiCharacter(c), false);
				}
				assert.equal(isKatakanaCharacter('A'), false);
			});

			it('has some katakana');
		});

		describe('Hiragana', () => {
			it('is full hiragana and are all hiragana characters', () => {
				const characters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
				assert.equal(isFullHiragana(characters), true);
				assert.equal(isFullKatakana(characters), false);
				assert.equal(isFullJapanese(characters), true);
				for (const c of characters.split('')) {
					assert.equal(isHiraganaCharacter(c), true);
					assert.equal(isJapaneseCharacter(c), true);
					assert.equal(isKatakanaCharacter(c), false);
					assert.equal(isKanjiCharacter(c), false);
				}
				assert.equal(isHiraganaCharacter('A'), false);
			});

			it('has some hiragana');
		});
	});
});

// 絵 japanese 绘 chinese 繪 traditional chinese + kanji

// 竜 japanese 龙 chinese
