import { delegateEvents, createContext, createSignal, createComponent, createMemo, insert, Show, createRenderEffect, className, on, onMount, createEffect, setAttribute, spread, mergeProps, For, onCleanup, isServer, Index, useContext, template, use, untrack, useTransition, $TRACK, createRoot, addEventListener, Switch, Match } from '../chunk/7D3VQWDS.js';

// node_modules/.pnpm/@tanstack+match-sorter-utils@8.8.4/node_modules/@tanstack/match-sorter-utils/build/lib/index.mjs
var characterMap = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u1EA4: "A",
  \u1EAE: "A",
  \u1EB2: "A",
  \u1EB4: "A",
  \u1EB6: "A",
  \u00C6: "AE",
  \u1EA6: "A",
  \u1EB0: "A",
  \u0202: "A",
  \u00C7: "C",
  \u1E08: "C",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u1EBE: "E",
  \u1E16: "E",
  \u1EC0: "E",
  \u1E14: "E",
  \u1E1C: "E",
  \u0206: "E",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u1E2E: "I",
  \u020A: "I",
  \u00D0: "D",
  \u00D1: "N",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u1ED0: "O",
  \u1E4C: "O",
  \u1E52: "O",
  \u020E: "O",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00DD: "Y",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u1EA5: "a",
  \u1EAF: "a",
  \u1EB3: "a",
  \u1EB5: "a",
  \u1EB7: "a",
  \u00E6: "ae",
  \u1EA7: "a",
  \u1EB1: "a",
  \u0203: "a",
  \u00E7: "c",
  \u1E09: "c",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u1EBF: "e",
  \u1E17: "e",
  \u1EC1: "e",
  \u1E15: "e",
  \u1E1D: "e",
  \u0207: "e",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u1E2F: "i",
  \u020B: "i",
  \u00F0: "d",
  \u00F1: "n",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u1ED1: "o",
  \u1E4D: "o",
  \u1E53: "o",
  \u020F: "o",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00FD: "y",
  \u00FF: "y",
  \u0100: "A",
  \u0101: "a",
  \u0102: "A",
  \u0103: "a",
  \u0104: "A",
  \u0105: "a",
  \u0106: "C",
  \u0107: "c",
  \u0108: "C",
  \u0109: "c",
  \u010A: "C",
  \u010B: "c",
  \u010C: "C",
  \u010D: "c",
  C\u0306: "C",
  c\u0306: "c",
  \u010E: "D",
  \u010F: "d",
  \u0110: "D",
  \u0111: "d",
  \u0112: "E",
  \u0113: "e",
  \u0114: "E",
  \u0115: "e",
  \u0116: "E",
  \u0117: "e",
  \u0118: "E",
  \u0119: "e",
  \u011A: "E",
  \u011B: "e",
  \u011C: "G",
  \u01F4: "G",
  \u011D: "g",
  \u01F5: "g",
  \u011E: "G",
  \u011F: "g",
  \u0120: "G",
  \u0121: "g",
  \u0122: "G",
  \u0123: "g",
  \u0124: "H",
  \u0125: "h",
  \u0126: "H",
  \u0127: "h",
  \u1E2A: "H",
  \u1E2B: "h",
  \u0128: "I",
  \u0129: "i",
  \u012A: "I",
  \u012B: "i",
  \u012C: "I",
  \u012D: "i",
  \u012E: "I",
  \u012F: "i",
  \u0130: "I",
  \u0131: "i",
  \u0132: "IJ",
  \u0133: "ij",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u1E30: "K",
  \u1E31: "k",
  K\u0306: "K",
  k\u0306: "k",
  \u0139: "L",
  \u013A: "l",
  \u013B: "L",
  \u013C: "l",
  \u013D: "L",
  \u013E: "l",
  \u013F: "L",
  \u0140: "l",
  \u0141: "l",
  \u0142: "l",
  \u1E3E: "M",
  \u1E3F: "m",
  M\u0306: "M",
  m\u0306: "m",
  \u0143: "N",
  \u0144: "n",
  \u0145: "N",
  \u0146: "n",
  \u0147: "N",
  \u0148: "n",
  \u0149: "n",
  N\u0306: "N",
  n\u0306: "n",
  \u014C: "O",
  \u014D: "o",
  \u014E: "O",
  \u014F: "o",
  \u0150: "O",
  \u0151: "o",
  \u0152: "OE",
  \u0153: "oe",
  P\u0306: "P",
  p\u0306: "p",
  \u0154: "R",
  \u0155: "r",
  \u0156: "R",
  \u0157: "r",
  \u0158: "R",
  \u0159: "r",
  R\u0306: "R",
  r\u0306: "r",
  \u0212: "R",
  \u0213: "r",
  \u015A: "S",
  \u015B: "s",
  \u015C: "S",
  \u015D: "s",
  \u015E: "S",
  \u0218: "S",
  \u0219: "s",
  \u015F: "s",
  \u0160: "S",
  \u0161: "s",
  \u0162: "T",
  \u0163: "t",
  \u021B: "t",
  \u021A: "T",
  \u0164: "T",
  \u0165: "t",
  \u0166: "T",
  \u0167: "t",
  T\u0306: "T",
  t\u0306: "t",
  \u0168: "U",
  \u0169: "u",
  \u016A: "U",
  \u016B: "u",
  \u016C: "U",
  \u016D: "u",
  \u016E: "U",
  \u016F: "u",
  \u0170: "U",
  \u0171: "u",
  \u0172: "U",
  \u0173: "u",
  \u0216: "U",
  \u0217: "u",
  V\u0306: "V",
  v\u0306: "v",
  \u0174: "W",
  \u0175: "w",
  \u1E82: "W",
  \u1E83: "w",
  X\u0306: "X",
  x\u0306: "x",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  Y\u0306: "Y",
  y\u0306: "y",
  \u0179: "Z",
  \u017A: "z",
  \u017B: "Z",
  \u017C: "z",
  \u017D: "Z",
  \u017E: "z",
  \u017F: "s",
  \u0192: "f",
  \u01A0: "O",
  \u01A1: "o",
  \u01AF: "U",
  \u01B0: "u",
  \u01CD: "A",
  \u01CE: "a",
  \u01CF: "I",
  \u01D0: "i",
  \u01D1: "O",
  \u01D2: "o",
  \u01D3: "U",
  \u01D4: "u",
  \u01D5: "U",
  \u01D6: "u",
  \u01D7: "U",
  \u01D8: "u",
  \u01D9: "U",
  \u01DA: "u",
  \u01DB: "U",
  \u01DC: "u",
  \u1EE8: "U",
  \u1EE9: "u",
  \u1E78: "U",
  \u1E79: "u",
  \u01FA: "A",
  \u01FB: "a",
  \u01FC: "AE",
  \u01FD: "ae",
  \u01FE: "O",
  \u01FF: "o",
  \u00DE: "TH",
  \u00FE: "th",
  \u1E54: "P",
  \u1E55: "p",
  \u1E64: "S",
  \u1E65: "s",
  X\u0301: "X",
  x\u0301: "x",
  \u0403: "\u0413",
  \u0453: "\u0433",
  \u040C: "\u041A",
  \u045C: "\u043A",
  A\u030B: "A",
  a\u030B: "a",
  E\u030B: "E",
  e\u030B: "e",
  I\u030B: "I",
  i\u030B: "i",
  \u01F8: "N",
  \u01F9: "n",
  \u1ED2: "O",
  \u1ED3: "o",
  \u1E50: "O",
  \u1E51: "o",
  \u1EEA: "U",
  \u1EEB: "u",
  \u1E80: "W",
  \u1E81: "w",
  \u1EF2: "Y",
  \u1EF3: "y",
  \u0200: "A",
  \u0201: "a",
  \u0204: "E",
  \u0205: "e",
  \u0208: "I",
  \u0209: "i",
  \u020C: "O",
  \u020D: "o",
  \u0210: "R",
  \u0211: "r",
  \u0214: "U",
  \u0215: "u",
  B\u030C: "B",
  b\u030C: "b",
  \u010C\u0323: "C",
  \u010D\u0323: "c",
  \u00CA\u030C: "E",
  \u00EA\u030C: "e",
  F\u030C: "F",
  f\u030C: "f",
  \u01E6: "G",
  \u01E7: "g",
  \u021E: "H",
  \u021F: "h",
  J\u030C: "J",
  \u01F0: "j",
  \u01E8: "K",
  \u01E9: "k",
  M\u030C: "M",
  m\u030C: "m",
  P\u030C: "P",
  p\u030C: "p",
  Q\u030C: "Q",
  q\u030C: "q",
  \u0158\u0329: "R",
  \u0159\u0329: "r",
  \u1E66: "S",
  \u1E67: "s",
  V\u030C: "V",
  v\u030C: "v",
  W\u030C: "W",
  w\u030C: "w",
  X\u030C: "X",
  x\u030C: "x",
  Y\u030C: "Y",
  y\u030C: "y",
  A\u0327: "A",
  a\u0327: "a",
  B\u0327: "B",
  b\u0327: "b",
  \u1E10: "D",
  \u1E11: "d",
  \u0228: "E",
  \u0229: "e",
  \u0190\u0327: "E",
  \u025B\u0327: "e",
  \u1E28: "H",
  \u1E29: "h",
  I\u0327: "I",
  i\u0327: "i",
  \u0197\u0327: "I",
  \u0268\u0327: "i",
  M\u0327: "M",
  m\u0327: "m",
  O\u0327: "O",
  o\u0327: "o",
  Q\u0327: "Q",
  q\u0327: "q",
  U\u0327: "U",
  u\u0327: "u",
  X\u0327: "X",
  x\u0327: "x",
  Z\u0327: "Z",
  z\u0327: "z"
};
var chars = Object.keys(characterMap).join("|");
var allAccents = new RegExp(chars, "g");
function removeAccents(str) {
  return str.replace(allAccents, (match2) => {
    return characterMap[match2];
  });
}
var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function rankItem(item, value, options) {
  var _options$threshold;
  options = options || {};
  options.threshold = (_options$threshold = options.threshold) != null ? _options$threshold : rankings.MATCHES;
  if (!options.accessors) {
    const rank = getMatchRanking(item, value, options);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: item,
      rank,
      accessorIndex: -1,
      accessorThreshold: options.threshold,
      passed: rank >= options.threshold
    };
  }
  const valuesToRank = getAllValuesToRank(item, options.accessors);
  const rankingInfo = {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: options.threshold,
    passed: false
  };
  for (let i = 0; i < valuesToRank.length; i++) {
    const rankValue = valuesToRank[i];
    let newRank = getMatchRanking(rankValue.itemValue, value, options);
    const {
      minRanking,
      maxRanking,
      threshold = options.threshold
    } = rankValue.attributes;
    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    newRank = Math.min(newRank, maxRanking);
    if (newRank >= threshold && newRank > rankingInfo.rank) {
      rankingInfo.rank = newRank;
      rankingInfo.passed = true;
      rankingInfo.accessorIndex = i;
      rankingInfo.accessorThreshold = threshold;
      rankingInfo.rankedValue = rankValue.itemValue;
    }
  }
  return rankingInfo;
}
function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }
  if (testString.includes(` ${stringToRank}`)) {
    return rankings.WORD_STARTS_WITH;
  }
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    return rankings.NO_MATCH;
  }
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }
  return getClosenessRanking(testString, stringToRank);
}
function getAcronym(string) {
  let acronym = "";
  const wordsInString = string.split(" ");
  wordsInString.forEach((wordInString) => {
    const splitByHyphenWords = wordInString.split("-");
    splitByHyphenWords.forEach((splitByHyphenWord) => {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
function getClosenessRanking(testString, stringToRank) {
  let matchingInOrderCharCount = 0;
  let charNumber = 0;
  function findMatchingCharacter(matchChar, string, index) {
    for (let j = index, J = string.length; j < J; j++) {
      const stringChar = string[j];
      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }
    return -1;
  }
  function getRanking(spread3) {
    const spreadPercentage = 1 / spread3;
    const inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    const ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }
  const firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }
  charNumber = firstIndex;
  for (let i = 1, I = stringToRank.length; i < I; i++) {
    const matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    const found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }
  const spread2 = charNumber - firstIndex;
  return getRanking(spread2);
}
function prepareValueForComparison(value, _ref) {
  let {
    keepDiacritics
  } = _ref;
  value = `${value}`;
  if (!keepDiacritics) {
    value = removeAccents(value);
  }
  return value;
}
function getItemValues(item, accessor) {
  let accessorFn = accessor;
  if (typeof accessor === "object") {
    accessorFn = accessor.accessor;
  }
  const value = accessorFn(item);
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [String(value)];
}
function getAllValuesToRank(item, accessors) {
  const allValues = [];
  for (let j = 0, J = accessors.length; j < J; j++) {
    const accessor = accessors[j];
    const attributes = getAccessorAttributes(accessor);
    const itemValues = getItemValues(item, accessor);
    for (let i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes
      });
    }
  }
  return allValues;
}
var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
function getAccessorAttributes(accessor) {
  if (typeof accessor === "function") {
    return defaultKeyAttributes;
  }
  return {
    ...defaultKeyAttributes,
    ...accessor
  };
}

// node_modules/.pnpm/@emotion+sheet@1.2.2/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert2(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet2 = sheetForTag(tag);
      try {
        sheet2.insertRule(rule, sheet2.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush2() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children2, length2) {
  return { value, root, parent, type, props, children: children2, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children2 = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children2 = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children2);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children2), rules, children2, length2, points, rule ? props : children2);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children2, 0, points, children2);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children2, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children2, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function serialize(children2, callback) {
  var output = "";
  var length2 = sizeof(children2);
  for (var i = 0; i < length2; i++)
    output += callback(children2[i], i, children2, callback) || "";
  return output;
}
function stringify(element, index, children2, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children2 = serialize(element.children, callback)) ? element.return = element.value + "{" + children2 + "}" : "";
}

// node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children2, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children2, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}

// node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn(arg);
    return cache2[arg];
  };
}

// node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children2, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert2(selector, serialized, sheet2, shouldCache) {
      currentSheet = sheet2;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};

// node_modules/.pnpm/@emotion+hash@0.9.1/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};

// node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className2) {
    if (registered[className2] !== void 0) {
      registeredStyles.push(registered[className2] + ";");
    } else {
      rawClassName += className2 + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
  var className2 = cache2.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache2.registered[className2] === void 0
  ) {
    cache2.registered[className2] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
  registerStyles(cache2, serialized, isStringTag);
  var className2 = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className2 : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function insertWithoutScoping(cache2, serialized) {
  if (cache2.inserted[serialized.name] === void 0) {
    return cache2.insert("", serialized, cache2.sheet, true);
  }
}
function merge(registered, css2, className2) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className2);
  if (registeredStyles.length < 2) {
    return className2;
  }
  return rawClassName + css2(registeredStyles);
}
var createEmotion = function createEmotion2(options) {
  var cache2 = createCache(options);
  cache2.sheet.speedy = function(value) {
    this.isSpeedy = value;
  };
  cache2.compat = true;
  var css2 = function css3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache2.registered, void 0);
    insertStyles(cache2, serialized, false);
    return cache2.key + "-" + serialized.name;
  };
  var keyframes2 = function keyframes3() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var serialized = serializeStyles(args, cache2.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache2, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };
  var injectGlobal2 = function injectGlobal3() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var serialized = serializeStyles(args, cache2.registered);
    insertWithoutScoping(cache2, serialized);
  };
  var cx2 = function cx3() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return merge(cache2.registered, css2, classnames(args));
  };
  return {
    css: css2,
    cx: cx2,
    injectGlobal: injectGlobal2,
    keyframes: keyframes2,
    hydrate: function hydrate2(ids) {
      ids.forEach(function(key) {
        cache2.inserted[key] = true;
      });
    },
    flush: function flush2() {
      cache2.registered = {};
      cache2.inserted = {};
      cache2.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache2.sheet,
    cache: cache2,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache2.registered),
    merge: merge.bind(null, cache2.registered, css2)
  };
};
var classnames = function classnames2(args) {
  var cls = "";
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};

// node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js
var _createEmotion = createEmotion({
  key: "css"
});
_createEmotion.flush;
_createEmotion.hydrate;
var cx = _createEmotion.cx;
_createEmotion.merge;
_createEmotion.getRegisteredStyles;
_createEmotion.injectGlobal;
_createEmotion.keyframes;
var css = _createEmotion.css;
_createEmotion.sheet;
_createEmotion.cache;

// node_modules/.pnpm/@solid-primitives+transition-group@1.0.2_solid-js@1.7.8/node_modules/@solid-primitives/transition-group/dist/index.js
var noop = () => {
};
function createListTransition(source, options) {
  const initSource = untrack(source);
  if (isServer) {
    const copy3 = initSource.slice();
    return () => copy3;
  }
  const { onChange } = options;
  let prevSet = new Set(options.appear ? void 0 : initSource);
  const exiting = /* @__PURE__ */ new WeakSet();
  const [toRemove, setToRemove] = createSignal([], { equals: false });
  const [isTransitionPending] = useTransition();
  const finishRemoved = options.exitMethod === "remove" ? noop : (els) => {
    setToRemove((p) => (p.push.apply(p, els), p));
    for (const el of els)
      exiting.delete(el);
  };
  const handleRemoved = options.exitMethod === "remove" ? noop : options.exitMethod === "keep-index" ? (els, el, i) => els.splice(i, 0, el) : (els, el) => els.push(el);
  return createMemo(
    (prev2) => {
      const elsToRemove = toRemove();
      const sourceList = source();
      sourceList[$TRACK];
      if (untrack(isTransitionPending)) {
        isTransitionPending();
        return prev2;
      }
      if (elsToRemove.length) {
        const next2 = prev2.filter((e) => !elsToRemove.includes(e));
        elsToRemove.length = 0;
        onChange({ list: next2, added: [], removed: [], unchanged: next2, finishRemoved });
        return next2;
      }
      return untrack(() => {
        const nextSet = new Set(sourceList);
        const next2 = sourceList.slice();
        const added = [];
        const removed = [];
        const unchanged = [];
        for (const el of sourceList) {
          (prevSet.has(el) ? unchanged : added).push(el);
        }
        let nothingChanged = !added.length;
        for (let i = 0; i < prev2.length; i++) {
          const el = prev2[i];
          if (!nextSet.has(el)) {
            if (!exiting.has(el)) {
              removed.push(el);
              exiting.add(el);
            }
            handleRemoved(next2, el, i);
          }
          if (nothingChanged && el !== next2[i])
            nothingChanged = false;
        }
        if (!removed.length && nothingChanged)
          return prev2;
        onChange({ list: next2, added, removed, unchanged, finishRemoved });
        prevSet = nextSet;
        return next2;
      });
    },
    options.appear ? [] : initSource.slice()
  );
}

// node_modules/.pnpm/@solid-primitives+utils@6.2.0_solid-js@1.7.8/node_modules/@solid-primitives/utils/dist/chunk/APG4HSEJ.js
var noop2 = () => void 0;
var isNonNullable = (i) => i != null;
var filterNonNullable = (arr) => arr.filter(isNonNullable);
var access = (v) => typeof v === "function" && !v.length ? v() : v;
var asArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
function handleDiffArray(current, prev2, handleAdded, handleRemoved) {
  const currLength = current.length;
  const prevLength = prev2.length;
  let i = 0;
  if (!prevLength) {
    for (; i < currLength; i++)
      handleAdded(current[i]);
    return;
  }
  if (!currLength) {
    for (; i < prevLength; i++)
      handleRemoved(prev2[i]);
    return;
  }
  for (; i < prevLength; i++) {
    if (prev2[i] !== current[i])
      break;
  }
  let prevEl;
  let currEl;
  prev2 = prev2.slice(i);
  current = current.slice(i);
  for (prevEl of prev2) {
    if (!current.includes(prevEl))
      handleRemoved(prevEl);
  }
  for (currEl of current) {
    if (!prev2.includes(currEl))
      handleAdded(currEl);
  }
}

// node_modules/.pnpm/@solid-primitives+refs@1.0.4_solid-js@1.7.8/node_modules/@solid-primitives/refs/dist/index.js
var defaultElementPredicate = isServer ? (item) => item != null && typeof item === "object" && "t" in item : (item) => item instanceof Element;
function getResolvedElements(value, predicate) {
  if (predicate(value))
    return value;
  if (typeof value === "function" && !value.length)
    return getResolvedElements(value(), predicate);
  if (Array.isArray(value)) {
    const results = [];
    for (const item of value) {
      const result = getResolvedElements(item, predicate);
      if (result)
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results.length ? results : null;
  }
  return null;
}
function resolveElements(fn, predicate = defaultElementPredicate, serverPredicate = defaultElementPredicate) {
  const children2 = createMemo(fn);
  const memo = createMemo(
    () => getResolvedElements(children2(), isServer ? serverPredicate : predicate)
  );
  memo.toArray = () => {
    const value = memo();
    return Array.isArray(value) ? value : value ? [value] : [];
  };
  return memo;
}

// node_modules/.pnpm/solid-transition-group@0.2.2_solid-js@1.7.8/node_modules/solid-transition-group/dist/index.js
function createClassnames(props) {
  return createMemo(() => {
    const name = props.name || "s";
    return {
      enterActiveClasses: (props.enterActiveClass || name + "-enter-active").split(" "),
      enterClasses: (props.enterClass || name + "-enter").split(" "),
      enterToClasses: (props.enterToClass || name + "-enter-to").split(" "),
      exitActiveClasses: (props.exitActiveClass || name + "-exit-active").split(" "),
      exitClasses: (props.exitClass || name + "-exit").split(" "),
      exitToClasses: (props.exitToClass || name + "-exit-to").split(" "),
      moveClasses: (props.moveClass || name + "-move").split(" ")
    };
  });
}
function nextFrame(fn) {
  requestAnimationFrame(() => requestAnimationFrame(fn));
}
function enterTransition(classnames3, events, el, done) {
  const { enterClasses, enterActiveClasses, enterToClasses } = classnames3, { onBeforeEnter, onEnter, onAfterEnter } = events;
  onBeforeEnter?.(el);
  el.classList.add(...enterClasses);
  el.classList.add(...enterActiveClasses);
  queueMicrotask(() => {
    if (!el.parentNode)
      return done?.();
    onEnter?.(el, () => endTransition());
  });
  nextFrame(() => {
    el.classList.remove(...enterClasses);
    el.classList.add(...enterToClasses);
    if (!onEnter || onEnter.length < 2) {
      el.addEventListener("transitionend", endTransition);
      el.addEventListener("animationend", endTransition);
    }
  });
  function endTransition(e) {
    if (!e || e.target === el) {
      done?.();
      el.removeEventListener("transitionend", endTransition);
      el.removeEventListener("animationend", endTransition);
      el.classList.remove(...enterActiveClasses);
      el.classList.remove(...enterToClasses);
      onAfterEnter?.(el);
    }
  }
}
function exitTransition(classnames3, events, el, done) {
  const { exitClasses, exitActiveClasses, exitToClasses } = classnames3, { onBeforeExit, onExit, onAfterExit } = events;
  if (!el.parentNode)
    return done?.();
  onBeforeExit?.(el);
  el.classList.add(...exitClasses);
  el.classList.add(...exitActiveClasses);
  onExit?.(el, () => endTransition());
  nextFrame(() => {
    el.classList.remove(...exitClasses);
    el.classList.add(...exitToClasses);
    if (!onExit || onExit.length < 2) {
      el.addEventListener("transitionend", endTransition);
      el.addEventListener("animationend", endTransition);
    }
  });
  function endTransition(e) {
    if (!e || e.target === el) {
      done?.();
      el.removeEventListener("transitionend", endTransition);
      el.removeEventListener("animationend", endTransition);
      el.classList.remove(...exitActiveClasses);
      el.classList.remove(...exitToClasses);
      onAfterExit?.(el);
    }
  }
}
var TransitionGroup = (props) => {
  const classnames3 = createClassnames(props);
  return createListTransition(resolveElements(() => props.children).toArray, {
    appear: props.appear,
    exitMethod: "keep-index",
    onChange({ added, removed, finishRemoved, list }) {
      const classes = classnames3();
      for (const el of added) {
        enterTransition(classes, props, el);
      }
      const toMove = [];
      for (const el of list) {
        if (el.isConnected && (el instanceof HTMLElement || el instanceof SVGElement)) {
          toMove.push({ el, rect: el.getBoundingClientRect() });
        }
      }
      queueMicrotask(() => {
        const moved = [];
        for (const { el, rect } of toMove) {
          if (el.isConnected) {
            const newRect = el.getBoundingClientRect(), dX = rect.left - newRect.left, dY = rect.top - newRect.top;
            if (dX || dY) {
              el.style.transform = `translate(${dX}px, ${dY}px)`;
              el.style.transitionDuration = "0s";
              moved.push(el);
            }
          }
        }
        document.body.offsetHeight;
        for (const el of moved) {
          let endTransition2 = function(e) {
            if (e.target === el || /transform$/.test(e.propertyName)) {
              el.removeEventListener("transitionend", endTransition2);
              el.classList.remove(...classes.moveClasses);
            }
          };
          el.classList.add(...classes.moveClasses);
          el.style.transform = el.style.transitionDuration = "";
          el.addEventListener("transitionend", endTransition2);
        }
      });
      for (const el of removed) {
        exitTransition(classes, props, el, () => finishRemoved([el]));
      }
    }
  });
};

// node_modules/.pnpm/@solid-primitives+keyed@1.2.0_solid-js@1.7.8/node_modules/@solid-primitives/keyed/dist/index.js
var FALLBACK = Symbol("fallback");
function dispose(list) {
  for (const o of list)
    o.dispose();
}
function keyArray(items, keyFn, mapFn, options = {}) {
  if (isServer) {
    const itemsRef = items();
    let s = [];
    if (itemsRef && itemsRef.length) {
      for (let i = 0, len = itemsRef.length; i < len; i++)
        s.push(
          mapFn(
            () => itemsRef[i],
            () => i
          )
        );
    } else if (options.fallback)
      s = [options.fallback()];
    return () => s;
  }
  const prev2 = /* @__PURE__ */ new Map();
  onCleanup(() => dispose(prev2.values()));
  return () => {
    const list = items() || [];
    list[$TRACK];
    return untrack(() => {
      if (!list.length) {
        dispose(prev2.values());
        prev2.clear();
        if (!options.fallback)
          return [];
        const fb2 = createRoot((dispose2) => {
          prev2.set(FALLBACK, { dispose: dispose2 });
          return options.fallback();
        });
        return [fb2];
      }
      const result = new Array(list.length);
      const fb = prev2.get(FALLBACK);
      if (!prev2.size || fb) {
        fb?.dispose();
        prev2.delete(FALLBACK);
        for (let i = 0; i < list.length; i++) {
          const item = list[i];
          const key = keyFn(item, i);
          addNewItem(result, item, i, key);
        }
        return result;
      }
      const prevKeys = new Set(prev2.keys());
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const key = keyFn(item, i);
        prevKeys.delete(key);
        const lookup = prev2.get(key);
        if (lookup) {
          result[i] = lookup.mapped;
          lookup.setIndex?.(i);
          lookup.setItem(() => item);
        } else
          addNewItem(result, item, i, key);
      }
      for (const key of prevKeys) {
        prev2.get(key)?.dispose();
        prev2.delete(key);
      }
      return result;
    });
  };
  function addNewItem(list, item, i, key) {
    createRoot((dispose2) => {
      const [getItem, setItem] = createSignal(item);
      const save = { setItem, dispose: dispose2 };
      if (mapFn.length > 1) {
        const [index, setIndex] = createSignal(i);
        save.setIndex = setIndex;
        save.mapped = mapFn(getItem, index);
      } else
        save.mapped = mapFn(getItem);
      prev2.set(key, save);
      list[i] = save.mapped;
    });
  }
}
function Key(props) {
  const { by } = props;
  return createMemo(
    keyArray(
      () => props.each,
      typeof by === "function" ? by : (v) => v[by],
      props.children,
      "fallback" in props ? { fallback: () => props.fallback } : void 0
    )
  );
}

// node_modules/.pnpm/@solid-primitives+storage@1.3.11_solid-js@1.7.8/node_modules/@solid-primitives/storage/dist/index.js
function createStorage(props) {
  const [error, setError] = createSignal();
  const handleError = props?.throw ? (err, fallback) => {
    setError(err instanceof Error ? err : new Error(fallback));
    throw err;
  } : (err, fallback) => {
    setError(err instanceof Error ? err : new Error(fallback));
  };
  const apis = props?.api ? Array.isArray(props.api) ? props.api : [props.api] : [globalThis.localStorage].filter(Boolean);
  const prefix2 = props?.prefix ? `${props.prefix}.` : "";
  const signals = /* @__PURE__ */ new Map();
  const store = new Proxy(
    {},
    {
      get(_, key) {
        let node2 = signals.get(key);
        if (!node2) {
          node2 = createSignal(void 0, { equals: false });
          signals.set(key, node2);
        }
        node2[0]();
        const value = apis.reduce(
          (result, api) => {
            if (result !== null || !api) {
              return result;
            }
            try {
              return api.getItem(`${prefix2}${key}`);
            } catch (err) {
              handleError(err, `Error reading ${prefix2}${key} from ${api["name"]}`);
              return null;
            }
          },
          null
        );
        if (value !== null && props?.deserializer) {
          return props.deserializer(value, key, props.options);
        }
        return value;
      }
    }
  );
  const setter = (key, value, options) => {
    const filteredValue = props?.serializer ? props.serializer(value, key, options ?? props.options) : value;
    const apiKey = `${prefix2}${key}`;
    apis.forEach((api) => {
      try {
        api.getItem(apiKey) !== filteredValue && api.setItem(apiKey, filteredValue);
      } catch (err) {
        handleError(err, `Error setting ${prefix2}${key} to ${filteredValue} in ${api.name}`);
      }
    });
    const node2 = signals.get(key);
    node2 && node2[1]();
  };
  const remove = (key) => apis.forEach((api) => {
    try {
      api.removeItem(`${prefix2}${key}`);
    } catch (err) {
      handleError(err, `Error removing ${prefix2}${key} from ${api.name}`);
    }
  });
  const clear = () => apis.forEach((api) => {
    try {
      api.clear();
    } catch (err) {
      handleError(err, `Error clearing ${api.name}`);
    }
  });
  const toJSON = () => {
    const result = {};
    const addValue = (key, value) => {
      if (!result.hasOwnProperty(key)) {
        const filteredValue = value && props?.deserializer ? props.deserializer(value, key, props.options) : value;
        if (filteredValue) {
          result[key] = filteredValue;
        }
      }
    };
    apis.forEach((api) => {
      if (typeof api.getAll === "function") {
        let values;
        try {
          values = api.getAll();
        } catch (err) {
          handleError(err, `Error getting all values from in ${api.name}`);
        }
        for (const key of values) {
          addValue(key, values[key]);
        }
      } else {
        let index = 0, key;
        try {
          while (key = api.key(index++)) {
            if (!result.hasOwnProperty(key)) {
              addValue(key, api.getItem(key));
            }
          }
        } catch (err) {
          handleError(err, `Error getting all values from ${api.name}`);
        }
      }
    });
    return result;
  };
  props?.sync !== false && onMount(() => {
    const listener = (ev) => {
      let changed = false;
      apis.forEach((api) => {
        try {
          if (api !== ev.storageArea && ev.key && ev.newValue !== api.getItem(ev.key)) {
            ev.newValue ? api.setItem(ev.key, ev.newValue) : api.removeItem(ev.key);
            changed = true;
          }
        } catch (err) {
          handleError(
            err,
            `Error synching api ${api.name} from storage event (${ev.key}=${ev.newValue})`
          );
        }
      });
      changed && ev.key && signals.get(ev.key)?.[1]();
    };
    if ("addEventListener" in globalThis) {
      globalThis.addEventListener("storage", listener);
      onCleanup(() => globalThis.removeEventListener("storage", listener));
    } else {
      apis.forEach((api) => api.addEventListener?.("storage", listener));
      onCleanup(() => apis.forEach((api) => api.removeEventListener?.("storage", listener)));
    }
  });
  return [
    store,
    setter,
    {
      clear,
      error,
      remove,
      toJSON
    }
  ];
}
var createLocalStorage = createStorage;
var addClearMethod = (storage) => {
  if (typeof storage.clear === "function") {
    return storage;
  }
  storage.clear = () => {
    let key;
    while (key = storage.key(0)) {
      storage.removeItem(key);
    }
  };
  return storage;
};
var serializeCookieOptions = (options) => {
  if (!options) {
    return "";
  }
  let memo = "";
  for (const key in options) {
    if (!options.hasOwnProperty(key)) {
      continue;
    }
    const value = options[key];
    memo += value instanceof Date ? `; ${key}=${value.toUTCString()}` : typeof value === "boolean" ? `; ${key}` : `; ${key}=${value}`;
  }
  return memo;
};
var cookieStorage = addClearMethod({
  _cookies: [globalThis.document, "cookie"],
  getItem: (key) => cookieStorage._cookies[0][cookieStorage._cookies[1]].match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)")?.pop() ?? null,
  setItem: (key, value, options) => {
    const oldValue = cookieStorage.getItem(key);
    cookieStorage._cookies[0][cookieStorage._cookies[1]] = `${key}=${value}${serializeCookieOptions(
      options
    )}`;
    const storageEvent = Object.assign(new Event("storage"), {
      key,
      oldValue,
      newValue: value,
      url: globalThis.document.URL,
      storageArea: cookieStorage
    });
    window.dispatchEvent(storageEvent);
  },
  removeItem: (key) => {
    cookieStorage._cookies[0][cookieStorage._cookies[1]] = `${key}=deleted${serializeCookieOptions({
      expires:  new Date(0)
    })}`;
  },
  key: (index) => {
    let key = null;
    let count = 0;
    cookieStorage._cookies[0][cookieStorage._cookies[1]].replace(
      /(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,
      (_, found) => {
        if (!key && found && count++ === index) {
          key = found;
        }
        return "";
      }
    );
    return key;
  },
  get length() {
    let length2 = 0;
    cookieStorage._cookies[0][cookieStorage._cookies[1]].replace(
      /(?:^|;)\s*.+?\s*=\s*[^;]+/g,
      (found) => {
        length2 += found ? 1 : 0;
        return "";
      }
    );
    return length2;
  }
});

// node_modules/.pnpm/@solid-primitives+resize-observer@2.0.18_solid-js@1.7.8/node_modules/@solid-primitives/resize-observer/dist/index.js
function makeResizeObserver(callback, options) {
  if (isServer) {
    return { observe: noop2, unobserve: noop2 };
  }
  const observer = new ResizeObserver(callback);
  onCleanup(observer.disconnect.bind(observer));
  return {
    observe: (ref) => observer.observe(ref, options),
    unobserve: observer.unobserve.bind(observer)
  };
}
function createResizeObserver(targets, onResize, options) {
  if (isServer)
    return;
  const previousMap = /* @__PURE__ */ new WeakMap(), { observe, unobserve } = makeResizeObserver((entries2) => {
    for (const entry of entries2) {
      const { contentRect, target } = entry, width = Math.round(contentRect.width), height = Math.round(contentRect.height), previous = previousMap.get(target);
      if (!previous || previous.width !== width || previous.height !== height) {
        onResize(contentRect, target, entry);
        previousMap.set(target, { width, height });
      }
    }
  }, options);
  createEffect((prev2) => {
    const refs = filterNonNullable(asArray(access(targets)));
    handleDiffArray(refs, prev2, observe, unobserve);
    return refs;
  }, []);
}

// src/theme.ts
var ShadowVariants = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 color, 0 1px 2px -1px color",
  md: "0 4px 6px -1px color, 0 2px 4px -2px color",
  lg: "0 10px 15px -3px color, 0 4px 6px -4px color",
  xl: "0 20px 25px -5px color, 0 8px 10px -6px color",
  "2xl": "0 25px 50px -12px color",
  inner: "inset 0 2px 4px 0 color",
  none: "none"
};
var getShadow = (variant, color = "") => {
  return ShadowVariants[variant].replace(/color/g, color);
};
var Shadow = {
  xs: (color = "rgb(0 0 0 / 0.1)") => getShadow("xs", color),
  sm: (color = "rgb(0 0 0 / 0.1)") => getShadow("sm", color),
  md: (color = "rgb(0 0 0 / 0.1)") => getShadow("md", color),
  lg: (color = "rgb(0 0 0 / 0.1)") => getShadow("lg", color),
  xl: (color = "rgb(0 0 0 / 0.1)") => getShadow("xl", color),
  "2xl": (color = "rgb(0 0 0 / 0.25)") => getShadow("2xl", color),
  inner: (color = "rgb(0 0 0 / 0.05)") => getShadow("inner", color),
  none: () => getShadow("none")
};
var tokens = {
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    neutral: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    darkGray: {
      50: "#525c7a",
      100: "#49536e",
      200: "#414962",
      300: "#394056",
      400: "#313749",
      500: "#292e3d",
      600: "#212530",
      700: "#191c24",
      800: "#111318",
      900: "#0b0d10"
    },
    gray: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    blue: {
      25: "#F5FAFF",
      50: "#EFF8FF",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185"
    },
    green: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31"
    },
    red: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A"
    },
    yellow: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E"
    },
    purple: {
      25: "#FAFAFF",
      50: "#F4F3FF",
      100: "#EBE9FE",
      200: "#D9D6FE",
      300: "#BDB4FE",
      400: "#9B8AFB",
      500: "#7A5AF8",
      600: "#6938EF",
      700: "#5925DC",
      800: "#4A1FB8",
      900: "#3E1C96"
    },
    teal: {
      25: "#F6FEFC",
      50: "#F0FDF9",
      100: "#CCFBEF",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      500: "#15B79E",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48"
    },
    pink: {
      25: "#fdf2f8",
      50: "#fce7f3",
      100: "#fbcfe8",
      200: "#f9a8d4",
      300: "#f472b6",
      400: "#ec4899",
      500: "#db2777",
      600: "#be185d",
      700: "#9d174d",
      800: "#831843",
      900: "#500724"
    },
    cyan: {
      25: "#ecfeff",
      50: "#cffafe",
      100: "#a5f3fc",
      200: "#67e8f9",
      300: "#22d3ee",
      400: "#06b6d4",
      500: "#0891b2",
      600: "#0e7490",
      700: "#155e75",
      800: "#164e63",
      900: "#083344"
    }
  },
  alpha: {
    100: "ff",
    90: "e5",
    80: "cc",
    70: "b3",
    60: "99",
    50: "80",
    40: "66",
    30: "4d",
    20: "33",
    10: "1a",
    0: "00"
  },
  font: {
    size: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
    },
    lineHeight: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "1",
      "6xl": "1",
      "7xl": "1",
      "8xl": "1",
      "9xl": "1"
    },
    weight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    }
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  border: {
    radius: {
      none: "0px",
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    }
  },
  size: {
    0: "0px",
    0.25: "0.0625rem",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    4.5: "1.125rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  shadow: Shadow,
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
};

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/double-indexed-kv.js
var DoubleIndexedKV = (
  /** @class */
  function() {
    function DoubleIndexedKV2() {
      this.keyToValue = /* @__PURE__ */ new Map();
      this.valueToKey = /* @__PURE__ */ new Map();
    }
    DoubleIndexedKV2.prototype.set = function(key, value) {
      this.keyToValue.set(key, value);
      this.valueToKey.set(value, key);
    };
    DoubleIndexedKV2.prototype.getByKey = function(key) {
      return this.keyToValue.get(key);
    };
    DoubleIndexedKV2.prototype.getByValue = function(value) {
      return this.valueToKey.get(value);
    };
    DoubleIndexedKV2.prototype.clear = function() {
      this.keyToValue.clear();
      this.valueToKey.clear();
    };
    return DoubleIndexedKV2;
  }()
);

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/registry.js
var Registry = (
  /** @class */
  function() {
    function Registry2(generateIdentifier) {
      this.generateIdentifier = generateIdentifier;
      this.kv = new DoubleIndexedKV();
    }
    Registry2.prototype.register = function(value, identifier2) {
      if (this.kv.getByValue(value)) {
        return;
      }
      if (!identifier2) {
        identifier2 = this.generateIdentifier(value);
      }
      this.kv.set(identifier2, value);
    };
    Registry2.prototype.clear = function() {
      this.kv.clear();
    };
    Registry2.prototype.getIdentifier = function(value) {
      return this.kv.getByValue(value);
    };
    Registry2.prototype.getValue = function(identifier2) {
      return this.kv.getByKey(identifier2);
    };
    return Registry2;
  }()
);

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/class-registry.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ClassRegistry = (
  /** @class */
  function(_super) {
    __extends(ClassRegistry2, _super);
    function ClassRegistry2() {
      var _this = _super.call(this, function(c) {
        return c.name;
      }) || this;
      _this.classToAllowedProps = /* @__PURE__ */ new Map();
      return _this;
    }
    ClassRegistry2.prototype.register = function(value, options) {
      if (typeof options === "object") {
        if (options.allowProps) {
          this.classToAllowedProps.set(value, options.allowProps);
        }
        _super.prototype.register.call(this, value, options.identifier);
      } else {
        _super.prototype.register.call(this, value, options);
      }
    };
    ClassRegistry2.prototype.getAllowedProps = function(value) {
      return this.classToAllowedProps.get(value);
    };
    return ClassRegistry2;
  }(Registry)
);

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/util.js
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
function valuesOfObj(record) {
  if ("values" in Object) {
    return Object.values(record);
  }
  var values = [];
  for (var key in record) {
    if (record.hasOwnProperty(key)) {
      values.push(record[key]);
    }
  }
  return values;
}
function find(record, predicate) {
  var values = valuesOfObj(record);
  if ("find" in values) {
    return values.find(predicate);
  }
  var valuesNotNever = values;
  for (var i = 0; i < valuesNotNever.length; i++) {
    var value = valuesNotNever[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
function forEach(record, run) {
  Object.entries(record).forEach(function(_a) {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    return run(value, key);
  });
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
  for (var i = 0; i < record.length; i++) {
    var value = record[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/custom-transformer-registry.js
var CustomTransformerRegistry = (
  /** @class */
  function() {
    function CustomTransformerRegistry2() {
      this.transfomers = {};
    }
    CustomTransformerRegistry2.prototype.register = function(transformer) {
      this.transfomers[transformer.name] = transformer;
    };
    CustomTransformerRegistry2.prototype.findApplicable = function(v) {
      return find(this.transfomers, function(transformer) {
        return transformer.isApplicable(v);
      });
    };
    CustomTransformerRegistry2.prototype.findByName = function(name) {
      return this.transfomers[name];
    };
    return CustomTransformerRegistry2;
  }()
);

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/is.js
var getType = function(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
};
var isUndefined = function(payload) {
  return typeof payload === "undefined";
};
var isNull = function(payload) {
  return payload === null;
};
var isPlainObject = function(payload) {
  if (typeof payload !== "object" || payload === null)
    return false;
  if (payload === Object.prototype)
    return false;
  if (Object.getPrototypeOf(payload) === null)
    return true;
  return Object.getPrototypeOf(payload) === Object.prototype;
};
var isEmptyObject = function(payload) {
  return isPlainObject(payload) && Object.keys(payload).length === 0;
};
var isArray = function(payload) {
  return Array.isArray(payload);
};
var isString = function(payload) {
  return typeof payload === "string";
};
var isNumber = function(payload) {
  return typeof payload === "number" && !isNaN(payload);
};
var isBoolean = function(payload) {
  return typeof payload === "boolean";
};
var isRegExp = function(payload) {
  return payload instanceof RegExp;
};
var isMap = function(payload) {
  return payload instanceof Map;
};
var isSet = function(payload) {
  return payload instanceof Set;
};
var isSymbol = function(payload) {
  return getType(payload) === "Symbol";
};
var isDate = function(payload) {
  return payload instanceof Date && !isNaN(payload.valueOf());
};
var isError = function(payload) {
  return payload instanceof Error;
};
var isNaNValue = function(payload) {
  return typeof payload === "number" && isNaN(payload);
};
var isPrimitive = function(payload) {
  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
};
var isBigint = function(payload) {
  return typeof payload === "bigint";
};
var isInfinite = function(payload) {
  return payload === Infinity || payload === -Infinity;
};
var isTypedArray = function(payload) {
  return ArrayBuffer.isView(payload) && !(payload instanceof DataView);
};
var isURL = function(payload) {
  return payload instanceof URL;
};

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/pathstringifier.js
var escapeKey = function(key) {
  return key.replace(/\./g, "\\.");
};
var stringifyPath = function(path) {
  return path.map(String).map(escapeKey).join(".");
};
var parsePath = function(string) {
  var result = [];
  var segment = "";
  for (var i = 0; i < string.length; i++) {
    var char2 = string.charAt(i);
    var isEscapedDot = char2 === "\\" && string.charAt(i + 1) === ".";
    if (isEscapedDot) {
      segment += ".";
      i++;
      continue;
    }
    var isEndOfSegment = char2 === ".";
    if (isEndOfSegment) {
      result.push(segment);
      segment = "";
      continue;
    }
    segment += char2;
  }
  var lastSegment = segment;
  result.push(lastSegment);
  return result;
};

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/transformer.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from2) {
  for (var i = 0, il = from2.length, j = to.length; i < il; i++, j++)
    to[j] = from2[i];
  return to;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var simpleRules = [
  simpleTransformation(isUndefined, "undefined", function() {
    return null;
  }, function() {
    return void 0;
  }),
  simpleTransformation(isBigint, "bigint", function(v) {
    return v.toString();
  }, function(v) {
    if (typeof BigInt !== "undefined") {
      return BigInt(v);
    }
    return v;
  }),
  simpleTransformation(isDate, "Date", function(v) {
    return v.toISOString();
  }, function(v) {
    return new Date(v);
  }),
  simpleTransformation(isError, "Error", function(v, superJson) {
    var baseError = {
      name: v.name,
      message: v.message
    };
    superJson.allowedErrorProps.forEach(function(prop) {
      baseError[prop] = v[prop];
    });
    return baseError;
  }, function(v, superJson) {
    var e = new Error(v.message);
    e.name = v.name;
    e.stack = v.stack;
    superJson.allowedErrorProps.forEach(function(prop) {
      e[prop] = v[prop];
    });
    return e;
  }),
  simpleTransformation(isRegExp, "regexp", function(v) {
    return "" + v;
  }, function(regex) {
    var body = regex.slice(1, regex.lastIndexOf("/"));
    var flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(
    isSet,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(v) {
      return __spreadArray([], __read2(v.values()));
    },
    function(v) {
      return new Set(v);
    }
  ),
  simpleTransformation(isMap, "map", function(v) {
    return __spreadArray([], __read2(v.entries()));
  }, function(v) {
    return new Map(v);
  }),
  simpleTransformation(function(v) {
    return isNaNValue(v) || isInfinite(v);
  }, "number", function(v) {
    if (isNaNValue(v)) {
      return "NaN";
    }
    if (v > 0) {
      return "Infinity";
    } else {
      return "-Infinity";
    }
  }, Number),
  simpleTransformation(function(v) {
    return v === 0 && 1 / v === -Infinity;
  }, "number", function() {
    return "-0";
  }, Number),
  simpleTransformation(isURL, "URL", function(v) {
    return v.toString();
  }, function(v) {
    return new URL(v);
  })
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var symbolRule = compositeTransformation(function(s, superJson) {
  if (isSymbol(s)) {
    var isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
    return isRegistered;
  }
  return false;
}, function(s, superJson) {
  var identifier2 = superJson.symbolRegistry.getIdentifier(s);
  return ["symbol", identifier2];
}, function(v) {
  return v.description;
}, function(_, a, superJson) {
  var value = superJson.symbolRegistry.getValue(a[1]);
  if (!value) {
    throw new Error("Trying to deserialize unknown symbol");
  }
  return value;
});
var constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(obj, ctor) {
  obj[ctor.name] = ctor;
  return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, function(v) {
  return ["typed-array", v.constructor.name];
}, function(v) {
  return __spreadArray([], __read2(v));
}, function(v, a) {
  var ctor = constructorToName[a[1]];
  if (!ctor) {
    throw new Error("Trying to deserialize unknown typed array");
  }
  return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
  if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
    var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
    return isRegistered;
  }
  return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, function(clazz, superJson) {
  var identifier2 = superJson.classRegistry.getIdentifier(clazz.constructor);
  return ["class", identifier2];
}, function(clazz, superJson) {
  var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps) {
    return __assign({}, clazz);
  }
  var result = {};
  allowedProps.forEach(function(prop) {
    result[prop] = clazz[prop];
  });
  return result;
}, function(v, a, superJson) {
  var clazz = superJson.classRegistry.getValue(a[1]);
  if (!clazz) {
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  }
  return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation(function(value, superJson) {
  return !!superJson.customTransformerRegistry.findApplicable(value);
}, function(value, superJson) {
  var transformer = superJson.customTransformerRegistry.findApplicable(value);
  return ["custom", transformer.name];
}, function(value, superJson) {
  var transformer = superJson.customTransformerRegistry.findApplicable(value);
  return transformer.serialize(value);
}, function(v, a, superJson) {
  var transformer = superJson.customTransformerRegistry.findByName(a[1]);
  if (!transformer) {
    throw new Error("Trying to deserialize unknown custom value");
  }
  return transformer.deserialize(v);
});
var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
var transformValue = function(value, superJson) {
  var applicableCompositeRule = findArr(compositeRules, function(rule) {
    return rule.isApplicable(value, superJson);
  });
  if (applicableCompositeRule) {
    return {
      value: applicableCompositeRule.transform(value, superJson),
      type: applicableCompositeRule.annotation(value, superJson)
    };
  }
  var applicableSimpleRule = findArr(simpleRules, function(rule) {
    return rule.isApplicable(value, superJson);
  });
  if (applicableSimpleRule) {
    return {
      value: applicableSimpleRule.transform(value, superJson),
      type: applicableSimpleRule.annotation
    };
  }
  return void 0;
};
var simpleRulesByAnnotation = {};
simpleRules.forEach(function(rule) {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = function(json, type, superJson) {
  if (isArray(type)) {
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json, type, superJson);
      case "class":
        return classRule.untransform(json, type, superJson);
      case "custom":
        return customRule.untransform(json, type, superJson);
      case "typed-array":
        return typedArrayRule.untransform(json, type, superJson);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  } else {
    var transformation = simpleRulesByAnnotation[type];
    if (!transformation) {
      throw new Error("Unknown transformation: " + type);
    }
    return transformation.untransform(json, superJson);
  }
};

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/accessDeep.js
var getNthKey = function(value, n) {
  var keys2 = value.keys();
  while (n > 0) {
    keys2.next();
    n--;
  }
  return keys2.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__")) {
    throw new Error("__proto__ is not allowed as a property");
  }
  if (includes(path, "prototype")) {
    throw new Error("prototype is not allowed as a property");
  }
  if (includes(path, "constructor")) {
    throw new Error("constructor is not allowed as a property");
  }
}
var getDeep = function(object, path) {
  validatePath(path);
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    if (isSet(object)) {
      object = getNthKey(object, +key);
    } else if (isMap(object)) {
      var row = +key;
      var type = +path[++i] === 0 ? "key" : "value";
      var keyOfRow = getNthKey(object, row);
      switch (type) {
        case "key":
          object = keyOfRow;
          break;
        case "value":
          object = object.get(keyOfRow);
          break;
      }
    } else {
      object = object[key];
    }
  }
  return object;
};
var setDeep = function(object, path, mapper) {
  validatePath(path);
  if (path.length === 0) {
    return mapper(object);
  }
  var parent = object;
  for (var i = 0; i < path.length - 1; i++) {
    var key = path[i];
    if (isArray(parent)) {
      var index = +key;
      parent = parent[index];
    } else if (isPlainObject(parent)) {
      parent = parent[key];
    } else if (isSet(parent)) {
      var row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      var isEnd = i === path.length - 2;
      if (isEnd) {
        break;
      }
      var row = +key;
      var type = +path[++i] === 0 ? "key" : "value";
      var keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  var lastKey = path[path.length - 1];
  if (isArray(parent)) {
    parent[+lastKey] = mapper(parent[+lastKey]);
  } else if (isPlainObject(parent)) {
    parent[lastKey] = mapper(parent[lastKey]);
  }
  if (isSet(parent)) {
    var oldValue = getNthKey(parent, +lastKey);
    var newValue = mapper(oldValue);
    if (oldValue !== newValue) {
      parent["delete"](oldValue);
      parent.add(newValue);
    }
  }
  if (isMap(parent)) {
    var row = +path[path.length - 2];
    var keyToRow = getNthKey(parent, row);
    var type = +lastKey === 0 ? "key" : "value";
    switch (type) {
      case "key": {
        var newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow));
        if (newKey !== keyToRow) {
          parent["delete"](keyToRow);
        }
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object;
};

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/plainer.js
var __read3 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray2 = function(to, from2) {
  for (var i = 0, il = from2.length, j = to.length; i < il; i++, j++)
    to[j] = from2[i];
  return to;
};
function traverse(tree, walker2, origin) {
  if (origin === void 0) {
    origin = [];
  }
  if (!tree) {
    return;
  }
  if (!isArray(tree)) {
    forEach(tree, function(subtree, key) {
      return traverse(subtree, walker2, __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key))));
    });
    return;
  }
  var _a = __read3(tree, 2), nodeValue = _a[0], children2 = _a[1];
  if (children2) {
    forEach(children2, function(child, key) {
      traverse(child, walker2, __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key))));
    });
  }
  walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
  traverse(annotations, function(type, path) {
    plain = setDeep(plain, path, function(v) {
      return untransformValue(v, type, superJson);
    });
  });
  return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
  function apply(identicalPaths, path) {
    var object = getDeep(plain, parsePath(path));
    identicalPaths.map(parsePath).forEach(function(identicalObjectPath) {
      plain = setDeep(plain, identicalObjectPath, function() {
        return object;
      });
    });
  }
  if (isArray(annotations)) {
    var _a = __read3(annotations, 2), root = _a[0], other = _a[1];
    root.forEach(function(identicalPath) {
      plain = setDeep(plain, parsePath(identicalPath), function() {
        return plain;
      });
    });
    if (other) {
      forEach(other, apply);
    }
  } else {
    forEach(annotations, apply);
  }
  return plain;
}
var isDeep = function(object, superJson) {
  return isPlainObject(object) || isArray(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
};
function addIdentity(object, path, identities) {
  var existingSet = identities.get(object);
  if (existingSet) {
    existingSet.push(path);
  } else {
    identities.set(object, [path]);
  }
}
function generateReferentialEqualityAnnotations(identitites) {
  var result = {};
  var rootEqualityPaths = void 0;
  identitites.forEach(function(paths) {
    if (paths.length <= 1) {
      return;
    }
    var _a = __read3(paths.map(function(path) {
      return path.map(String);
    }).sort(function(a, b) {
      return a.length - b.length;
    })), shortestPath = _a[0], identicalPaths = _a.slice(1);
    if (shortestPath.length === 0) {
      rootEqualityPaths = identicalPaths.map(stringifyPath);
    } else {
      result[stringifyPath(shortestPath)] = identicalPaths.map(stringifyPath);
    }
  });
  if (rootEqualityPaths) {
    if (isEmptyObject(result)) {
      return [rootEqualityPaths];
    } else {
      return [rootEqualityPaths, result];
    }
  } else {
    return isEmptyObject(result) ? void 0 : result;
  }
}
var walker = function(object, identities, superJson, dedupe, path, objectsInThisPath, seenObjects) {
  var _a;
  if (path === void 0) {
    path = [];
  }
  if (objectsInThisPath === void 0) {
    objectsInThisPath = [];
  }
  if (seenObjects === void 0) {
    seenObjects = /* @__PURE__ */ new Map();
  }
  var primitive = isPrimitive(object);
  if (!primitive) {
    addIdentity(object, path, identities);
    var seen = seenObjects.get(object);
    if (seen) {
      return dedupe ? {
        transformedValue: null
      } : seen;
    }
  }
  if (!isDeep(object, superJson)) {
    var transformed_1 = transformValue(object, superJson);
    var result_1 = transformed_1 ? {
      transformedValue: transformed_1.value,
      annotations: [transformed_1.type]
    } : {
      transformedValue: object
    };
    if (!primitive) {
      seenObjects.set(object, result_1);
    }
    return result_1;
  }
  if (includes(objectsInThisPath, object)) {
    return {
      transformedValue: null
    };
  }
  var transformationResult = transformValue(object, superJson);
  var transformed = (_a = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _a !== void 0 ? _a : object;
  var transformedValue = isArray(transformed) ? [] : {};
  var innerAnnotations = {};
  forEach(transformed, function(value, index) {
    var recursiveResult = walker(value, identities, superJson, dedupe, __spreadArray2(__spreadArray2([], __read3(path)), [index]), __spreadArray2(__spreadArray2([], __read3(objectsInThisPath)), [object]), seenObjects);
    transformedValue[index] = recursiveResult.transformedValue;
    if (isArray(recursiveResult.annotations)) {
      innerAnnotations[index] = recursiveResult.annotations;
    } else if (isPlainObject(recursiveResult.annotations)) {
      forEach(recursiveResult.annotations, function(tree, key) {
        innerAnnotations[escapeKey(index) + "." + key] = tree;
      });
    }
  });
  var result = isEmptyObject(innerAnnotations) ? {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type] : void 0
  } : {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
  };
  if (!primitive) {
    seenObjects.set(object, result);
  }
  return result;
};

// node_modules/.pnpm/is-what@4.1.15/node_modules/is-what/dist/index.js
function getType2(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isPlainObject2(payload) {
  if (getType2(payload) !== "Object")
    return false;
  const prototype = Object.getPrototypeOf(payload);
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isArray2(payload) {
  return getType2(payload) === "Array";
}

// node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
  if (propType === "enumerable")
    carry[key] = newVal;
  if (includeNonenumerable && propType === "nonenumerable") {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}
function copy2(target, options = {}) {
  if (isArray2(target)) {
    return target.map((item) => copy2(item, options));
  }
  if (!isPlainObject2(target)) {
    return target;
  }
  const props = Object.getOwnPropertyNames(target);
  const symbols = Object.getOwnPropertySymbols(target);
  return [...props, ...symbols].reduce((carry, key) => {
    if (isArray2(options.props) && !options.props.includes(key)) {
      return carry;
    }
    const val = target[key];
    const newVal = copy2(val, options);
    assignProp(carry, key, newVal, target, options.nonenumerable);
    return carry;
  }, {});
}

// node_modules/.pnpm/superjson@1.13.1/node_modules/superjson/dist/esm/index.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __read4 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray3 = function(to, from2) {
  for (var i = 0, il = from2.length, j = to.length; i < il; i++, j++)
    to[j] = from2[i];
  return to;
};
var SuperJSON = (
  /** @class */
  function() {
    function SuperJSON2(_a) {
      var _b = _a === void 0 ? {} : _a, _c = _b.dedupe, dedupe = _c === void 0 ? false : _c;
      this.classRegistry = new ClassRegistry();
      this.symbolRegistry = new Registry(function(s) {
        var _a2;
        return (_a2 = s.description) !== null && _a2 !== void 0 ? _a2 : "";
      });
      this.customTransformerRegistry = new CustomTransformerRegistry();
      this.allowedErrorProps = [];
      this.dedupe = dedupe;
    }
    SuperJSON2.prototype.serialize = function(object) {
      var identities = /* @__PURE__ */ new Map();
      var output = walker(object, identities, this, this.dedupe);
      var res = {
        json: output.transformedValue
      };
      if (output.annotations) {
        res.meta = __assign2(__assign2({}, res.meta), { values: output.annotations });
      }
      var equalityAnnotations = generateReferentialEqualityAnnotations(identities);
      if (equalityAnnotations) {
        res.meta = __assign2(__assign2({}, res.meta), { referentialEqualities: equalityAnnotations });
      }
      return res;
    };
    SuperJSON2.prototype.deserialize = function(payload) {
      var json = payload.json, meta = payload.meta;
      var result = copy2(json);
      if (meta === null || meta === void 0 ? void 0 : meta.values) {
        result = applyValueAnnotations(result, meta.values, this);
      }
      if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
        result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
      }
      return result;
    };
    SuperJSON2.prototype.stringify = function(object) {
      return JSON.stringify(this.serialize(object));
    };
    SuperJSON2.prototype.parse = function(string) {
      return this.deserialize(JSON.parse(string));
    };
    SuperJSON2.prototype.registerClass = function(v, options) {
      this.classRegistry.register(v, options);
    };
    SuperJSON2.prototype.registerSymbol = function(v, identifier2) {
      this.symbolRegistry.register(v, identifier2);
    };
    SuperJSON2.prototype.registerCustom = function(transformer, name) {
      this.customTransformerRegistry.register(__assign2({ name }, transformer));
    };
    SuperJSON2.prototype.allowErrorProps = function() {
      var _a;
      var props = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
      }
      (_a = this.allowedErrorProps).push.apply(_a, __spreadArray3([], __read4(props)));
    };
    SuperJSON2.defaultInstance = new SuperJSON2();
    SuperJSON2.serialize = SuperJSON2.defaultInstance.serialize.bind(SuperJSON2.defaultInstance);
    SuperJSON2.deserialize = SuperJSON2.defaultInstance.deserialize.bind(SuperJSON2.defaultInstance);
    SuperJSON2.stringify = SuperJSON2.defaultInstance.stringify.bind(SuperJSON2.defaultInstance);
    SuperJSON2.parse = SuperJSON2.defaultInstance.parse.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerClass = SuperJSON2.defaultInstance.registerClass.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerSymbol = SuperJSON2.defaultInstance.registerSymbol.bind(SuperJSON2.defaultInstance);
    SuperJSON2.registerCustom = SuperJSON2.defaultInstance.registerCustom.bind(SuperJSON2.defaultInstance);
    SuperJSON2.allowErrorProps = SuperJSON2.defaultInstance.allowErrorProps.bind(SuperJSON2.defaultInstance);
    return SuperJSON2;
  }()
);
var serialize2 = SuperJSON.serialize;
SuperJSON.deserialize;
var stringify2 = SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;

// src/utils.tsx
function getQueryStatusLabel(query) {
  return query.state.fetchStatus === "fetching" ? "fetching" : !query.getObserversCount() ? "inactive" : query.state.fetchStatus === "paused" ? "paused" : query.isStale() ? "stale" : "fresh";
}
function getSidedProp(prop, side) {
  return `${prop}${side.charAt(0).toUpperCase() + side.slice(1)}`;
}
function getQueryStatusColor({
  queryState,
  observerCount,
  isStale
}) {
  return queryState.fetchStatus === "fetching" ? "blue" : !observerCount ? "gray" : queryState.fetchStatus === "paused" ? "purple" : isStale ? "yellow" : "green";
}
function getQueryStatusColorByLabel(label) {
  return label === "fresh" ? "green" : label === "stale" ? "yellow" : label === "paused" ? "purple" : label === "inactive" ? "gray" : "blue";
}
var displayValue = (value, beautify = false) => {
  const {
    json
  } = serialize2(value);
  return JSON.stringify(json, null, beautify ? 2 : void 0);
};
var getStatusRank = (q) => q.state.fetchStatus !== "idle" ? 0 : !q.getObserversCount() ? 3 : q.isStale() ? 2 : 1;
var queryHashSort = (a, b) => a.queryHash.localeCompare(b.queryHash);
var dateSort = (a, b) => a.state.dataUpdatedAt < b.state.dataUpdatedAt ? 1 : -1;
var statusAndDateSort = (a, b) => {
  if (getStatusRank(a) === getStatusRank(b)) {
    return dateSort(a, b);
  }
  return getStatusRank(a) > getStatusRank(b) ? 1 : -1;
};
var sortFns = {
  status: statusAndDateSort,
  "query hash": queryHashSort,
  "last updated": dateSort
};
var convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

// src/icons/index.tsx
var _tmpl$ = /* @__PURE__ */ template(`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$2 = /* @__PURE__ */ template(`<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$3 = /* @__PURE__ */ template(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$4 = /* @__PURE__ */ template(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$5 = /* @__PURE__ */ template(`<svg stroke="#98A2B3" fill="#98A2B3" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">`);
var _tmpl$6 = /* @__PURE__ */ template(`<svg stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">`);
var _tmpl$7 = /* @__PURE__ */ template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$8 = /* @__PURE__ */ template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="copier" d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#98A2B3">`);
var _tmpl$9 = /* @__PURE__ */ template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$10 = /* @__PURE__ */ template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$11 = /* @__PURE__ */ template(`<svg version="1.0" viewBox="0 0 633 633"><linearGradient id="a" x1="-666.45" x2="-666.45" y1="163.28" y2="163.99" gradientTransform="matrix(633 0 0 633 422177 -103358)" gradientUnits="userSpaceOnUse"><stop stop-color="#6BDAFF" offset="0"></stop><stop stop-color="#F9FFB5" offset=".32"></stop><stop stop-color="#FFA770" offset=".71"></stop><stop stop-color="#FF7373" offset="1"></stop></linearGradient><circle cx="316.5" cy="316.5" r="316.5" fill="url(#a)"></circle><defs><filter id="am" x="-137.5" y="412" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="b" x="-137.5" y="412" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#am)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#b)"><ellipse cx="89.5" cy="610.5" rx="214.5" ry="186" fill="#015064" stroke="#00CFE2" stroke-width="25"></ellipse></g><defs><filter id="ah" x="316.5" y="412" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="k" x="316.5" y="412" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#ah)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#k)"><ellipse cx="543.5" cy="610.5" rx="214.5" ry="186" fill="#015064" stroke="#00CFE2" stroke-width="25"></ellipse></g><defs><filter id="ae" x="-137.5" y="450" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="j" x="-137.5" y="450" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#ae)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#j)"><ellipse cx="89.5" cy="648.5" rx="214.5" ry="186" fill="#015064" stroke="#00A8B8" stroke-width="25"></ellipse></g><defs><filter id="ai" x="316.5" y="450" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="i" x="316.5" y="450" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#ai)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#i)"><ellipse cx="543.5" cy="648.5" rx="214.5" ry="186" fill="#015064" stroke="#00A8B8" stroke-width="25"></ellipse></g><defs><filter id="aj" x="-137.5" y="486" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="h" x="-137.5" y="486" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#aj)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#h)"><ellipse cx="89.5" cy="684.5" rx="214.5" ry="186" fill="#015064" stroke="#007782" stroke-width="25"></ellipse></g><defs><filter id="ag" x="316.5" y="486" width="454" height="396.9" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="g" x="316.5" y="486" width="454" height="396.9" maskUnits="userSpaceOnUse"><g filter="url(#ag)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#g)"><ellipse cx="543.5" cy="684.5" rx="214.5" ry="186" fill="#015064" stroke="#007782" stroke-width="25"></ellipse></g><defs><filter id="af" x="272.2" y="308" width="176.9" height="129.3" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="f" x="272.2" y="308" width="176.9" height="129.3" maskUnits="userSpaceOnUse"><g filter="url(#af)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#f)"><line x1="436" x2="431" y1="403.2" y2="431.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="11"></line><line x1="291" x2="280" y1="341.5" y2="403.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="11"></line><line x1="332.9" x2="328.6" y1="384.1" y2="411.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="11"></line><linearGradient id="m" x1="-670.75" x2="-671.59" y1="164.4" y2="164.49" gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)" gradientUnits="userSpaceOnUse"><stop stop-color="#EE2700" offset="0"></stop><stop stop-color="#FF008E" offset="1"></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z" clip-rule="evenodd" fill="url(#m)" fill-rule="evenodd"></path><line x1="428.2" x2="429.1" y1="384.5" y2="378" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="7"></line><line x1="395.2" x2="396.1" y1="379.5" y2="373" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="7"></line><line x1="362.2" x2="363.1" y1="373.5" y2="367.4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="7"></line><line x1="324.2" x2="328.4" y1="351.3" y2="347.4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="7"></line><line x1="303.2" x2="307.4" y1="331.3" y2="327.4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="7"></line></g><defs><filter id="ak" x="73.2" y="113.8" width="280.6" height="317.4" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="e" x="73.2" y="113.8" width="280.6" height="317.4" maskUnits="userSpaceOnUse"><g filter="url(#ak)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#e)"><linearGradient id="n" x1="-672.16" x2="-672.16" y1="165.03" y2="166.03" gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)" gradientUnits="userSpaceOnUse"><stop stop-color="#A17500" offset="0"></stop><stop stop-color="#5D2100" offset="1"></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6" clip-rule="evenodd" fill="url(#n)" fill-rule="evenodd"></path><g stroke="#2F8A00"><linearGradient id="r" x1="-660.23" x2="-660.23" y1="166.72" y2="167.72" gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z" clip-rule="evenodd" fill="url(#r)" fill-rule="evenodd" stroke-width="13"></path><linearGradient id="s" x1="-661.36" x2="-661.36" y1="164.18" y2="165.18" gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z" clip-rule="evenodd" fill="url(#s)" fill-rule="evenodd" stroke-width="13"></path><linearGradient id="q" x1="-656.79" x2="-656.79" y1="165.15" y2="166.15" gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z" clip-rule="evenodd" fill="url(#q)" fill-rule="evenodd" stroke-width="13"></path><linearGradient id="p" x1="-663.07" x2="-663.07" y1="165.44" y2="166.44" gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z" clip-rule="evenodd" fill="url(#p)" fill-rule="evenodd" stroke-width="13"></path><linearGradient id="o" x1="-662.57" x2="-662.57" y1="164.44" y2="165.44" gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z" clip-rule="evenodd" fill="url(#o)" fill-rule="evenodd" stroke-width="13"></path><linearGradient id="l" x1="-656.43" x2="-656.43" y1="163.86" y2="164.86" gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8A00" offset="0"></stop><stop stop-color="#90FF57" offset="1"></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z" clip-rule="evenodd" fill="url(#l)" fill-rule="evenodd" stroke-width="13"></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1" fill="none" stroke-linecap="round" stroke-width="8"></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8" fill="none" stroke-linecap="round" stroke-width="8"></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9" fill="none" stroke-linecap="round" stroke-width="8"></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32" fill="none" stroke-linecap="round" stroke-width="8"></path></g></g><defs><filter id="al" x="50.5" y="399" width="532" height="633" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="d" x="50.5" y="399" width="532" height="633" maskUnits="userSpaceOnUse"><g filter="url(#al)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#d)"><linearGradient id="u" x1="-666.06" x2="-666.23" y1="163.36" y2="163.75" gradientTransform="matrix(532 0 0 633 354760 -102959)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF400" offset="0"></stop><stop stop-color="#3C8700" offset="1"></stop></linearGradient><ellipse cx="316.5" cy="715.5" rx="266" ry="316.5" fill="url(#u)"></ellipse></g><defs><filter id="ad" x="391" y="-24" width="288" height="283" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask id="c" x="391" y="-24" width="288" height="283" maskUnits="userSpaceOnUse"><g filter="url(#ad)"><circle cx="316.5" cy="316.5" r="316.5" fill="#fff"></circle></g></mask><g mask="url(#c)"><linearGradient id="t" x1="-664.56" x2="-664.56" y1="163.79" y2="164.79" gradientTransform="matrix(227 0 0 227 151421 -37204)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFDF00" offset="0"></stop><stop stop-color="#FF9D00" offset="1"></stop></linearGradient><circle cx="565.5" cy="89.5" r="113.5" fill="url(#t)"></circle><linearGradient id="v" x1="-644.5" x2="-645.77" y1="342" y2="342" gradientTransform="matrix(30 0 0 1 19770 -253)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="427" x2="397" y1="89" y2="89" fill="none" stroke="url(#v)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="aa" x1="-641.56" x2="-642.83" y1="196.02" y2="196.07" gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="430.5" x2="404" y1="55.5" y2="50" fill="none" stroke="url(#aa)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="w" x1="-643.73" x2="-645" y1="185.83" y2="185.9" gradientTransform="matrix(29 0 0 8 19107 -1361)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="431" x2="402" y1="122" y2="130" fill="none" stroke="url(#w)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="ac" x1="-638.94" x2="-640.22" y1="177.09" y2="177.39" gradientTransform="matrix(24 0 0 13 15783 -2145)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="442" x2="418" y1="153" y2="166" fill="none" stroke="url(#ac)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="ab" x1="-633.42" x2="-634.7" y1="172.41" y2="173.31" gradientTransform="matrix(20 0 0 19 13137 -3096)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="464" x2="444" y1="180" y2="199" fill="none" stroke="url(#ab)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="y" x1="-619.05" x2="-619.52" y1="170.82" y2="171.82" gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="491.4" x2="477.5" y1="203" y2="225.9" fill="none" stroke="url(#y)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="x" x1="-578.5" x2="-578.63" y1="170.31" y2="171.31" gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="524.5" x2="517" y1="219.5" y2="244" fill="none" stroke="url(#x)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12"></line><linearGradient id="z" x1="666.5" x2="666.5" y1="170.31" y2="171.31" gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA400" offset="0"></stop><stop stop-color="#FF5E00" offset="1"></stop></linearGradient><line x1="564.5" x2="565" y1="228.5" y2="253" fill="none" stroke="url(#z)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12">`);
function Search() {
  return _tmpl$();
}
function ChevronDown() {
  return _tmpl$2();
}
function ArrowUp() {
  return _tmpl$3();
}
function ArrowDown() {
  return _tmpl$4();
}
function Wifi() {
  return _tmpl$5();
}
function Offline() {
  return (() => {
    const _el$6 = _tmpl$6();
    createRenderEffect((_p$) => {
      const _v$ = tokens.colors.yellow[500], _v$2 = tokens.colors.yellow[500];
      _v$ !== _p$._v$ && setAttribute(_el$6, "stroke", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$6, "fill", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$6;
  })();
}
function Settings() {
  return _tmpl$7();
}
function Copier() {
  return _tmpl$8();
}
function CopiedCopier() {
  return _tmpl$9();
}
function ErrorCopier() {
  return _tmpl$10();
}
function TanstackLogo() {
  return _tmpl$11();
}

// src/Explorer.tsx
var _tmpl$12 = /* @__PURE__ */ template(`<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`);
var _tmpl$22 = /* @__PURE__ */ template(`<button>`);
var _tmpl$32 = /* @__PURE__ */ template(`<button> <span></span> <span> `);
var _tmpl$42 = /* @__PURE__ */ template(`<div>`);
var _tmpl$52 = /* @__PURE__ */ template(`<span>:`);
var _tmpl$62 = /* @__PURE__ */ template(`<span>`);
var _tmpl$72 = /* @__PURE__ */ template(`<div><div><button> [<!>...<!>]`);
function chunkArray(array, size) {
  if (size < 1)
    return [];
  let i = 0;
  const result = [];
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i = i + size;
  }
  return result;
}
var Expander = (props) => {
  const styles = getStyles();
  return (() => {
    const _el$ = _tmpl$12();
    createRenderEffect(() => className(_el$, cx(styles.expander, css`
          transform: rotate(${props.expanded ? 90 : 0}deg);
        `)));
    return _el$;
  })();
};
var CopyButton = (props) => {
  const styles = getStyles();
  const [copyState, setCopyState] = createSignal("NoCopy");
  return (() => {
    const _el$2 = _tmpl$22();
    addEventListener(_el$2, "click", copyState() === "NoCopy" ? () => {
      navigator.clipboard.writeText(stringify2(props.value)).then(() => {
        setCopyState("SuccessCopy");
        setTimeout(() => {
          setCopyState("NoCopy");
        }, 1500);
      }, (err) => {
        setCopyState("ErrorCopy");
        setTimeout(() => {
          setCopyState("NoCopy");
        }, 1500);
      });
    } : void 0, true);
    insert(_el$2, createComponent(Switch, {
      get children() {
        return [createComponent(Match, {
          get when() {
            return copyState() === "NoCopy";
          },
          get children() {
            return createComponent(Copier, {});
          }
        }), createComponent(Match, {
          get when() {
            return copyState() === "SuccessCopy";
          },
          get children() {
            return createComponent(CopiedCopier, {});
          }
        }), createComponent(Match, {
          get when() {
            return copyState() === "ErrorCopy";
          },
          get children() {
            return createComponent(ErrorCopier, {});
          }
        })];
      }
    }));
    createRenderEffect((_p$) => {
      const _v$ = styles.copyButton, _v$2 = `${copyState() === "NoCopy" ? "Copy object to clipboard" : copyState() === "SuccessCopy" ? "Object copied to clipboard" : "Error copying object to clipboard"}`;
      _v$ !== _p$._v$ && className(_el$2, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$2, "aria-label", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$2;
  })();
};
function isIterable(x) {
  return Symbol.iterator in x;
}
function Explorer(props) {
  const styles = getStyles();
  const [expanded, setExpanded] = createSignal((props.defaultExpanded || []).includes(props.label));
  const toggleExpanded = () => setExpanded((old) => !old);
  const [expandedPages, setExpandedPages] = createSignal([]);
  const subEntries = createMemo(() => {
    if (Array.isArray(props.value)) {
      return props.value.map((d, i) => ({
        label: i.toString(),
        value: d
      }));
    } else if (props.value !== null && typeof props.value === "object" && isIterable(props.value) && typeof props.value[Symbol.iterator] === "function") {
      if (props.value instanceof Map) {
        return Array.from(props.value, ([key, val]) => ({
          label: key,
          value: val
        }));
      }
      return Array.from(props.value, (val, i) => ({
        label: i.toString(),
        value: val
      }));
    } else if (typeof props.value === "object" && props.value !== null) {
      return Object.entries(props.value).map(([key, val]) => ({
        label: key,
        value: val
      }));
    }
    return [];
  });
  const type = createMemo(() => {
    if (Array.isArray(props.value)) {
      return "array";
    } else if (props.value !== null && typeof props.value === "object" && isIterable(props.value) && typeof props.value[Symbol.iterator] === "function") {
      return "Iterable";
    } else if (typeof props.value === "object" && props.value !== null) {
      return "object";
    }
    return typeof props.value;
  });
  const subEntryPages = createMemo(() => chunkArray(subEntries(), 100));
  return (() => {
    const _el$3 = _tmpl$42();
    insert(_el$3, createComponent(Show, {
      get when() {
        return subEntryPages().length;
      },
      get children() {
        return [(() => {
          const _el$4 = _tmpl$32(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling, _el$9 = _el$8.firstChild;
          _el$4.$$click = () => toggleExpanded();
          insert(_el$4, createComponent(Expander, {
            get expanded() {
              return expanded();
            }
          }), _el$5);
          insert(_el$6, () => props.label);
          insert(_el$8, () => String(type()).toLowerCase() === "iterable" ? "(Iterable) " : "", _el$9);
          insert(_el$8, () => subEntries().length, _el$9);
          insert(_el$8, () => subEntries().length > 1 ? `items` : `item`, null);
          createRenderEffect((_p$) => {
            const _v$3 = styles.expanderButton, _v$4 = styles.info;
            _v$3 !== _p$._v$3 && className(_el$4, _p$._v$3 = _v$3);
            _v$4 !== _p$._v$4 && className(_el$8, _p$._v$4 = _v$4);
            return _p$;
          }, {
            _v$3: void 0,
            _v$4: void 0
          });
          return _el$4;
        })(), createComponent(Show, {
          get when() {
            return props.copyable;
          },
          get children() {
            return createComponent(CopyButton, {
              get value() {
                return props.value;
              }
            });
          }
        }), createComponent(Show, {
          get when() {
            return expanded();
          },
          get children() {
            return [createComponent(Show, {
              get when() {
                return subEntryPages().length === 1;
              },
              get children() {
                const _el$10 = _tmpl$42();
                insert(_el$10, createComponent(Key, {
                  get each() {
                    return subEntries();
                  },
                  by: (item) => item.label,
                  children: (entry) => {
                    return createComponent(Explorer, {
                      get defaultExpanded() {
                        return props.defaultExpanded;
                      },
                      get label() {
                        return entry().label;
                      },
                      get value() {
                        return entry().value;
                      },
                      get copyable() {
                        return props.copyable;
                      }
                    });
                  }
                }));
                createRenderEffect(() => className(_el$10, styles.subEntry));
                return _el$10;
              }
            }), createComponent(Show, {
              get when() {
                return subEntryPages().length > 1;
              },
              get children() {
                const _el$11 = _tmpl$42();
                insert(_el$11, createComponent(Index, {
                  get each() {
                    return subEntryPages();
                  },
                  children: (entries2, index) => (() => {
                    const _el$15 = _tmpl$72(), _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.firstChild, _el$22 = _el$18.nextSibling, _el$20 = _el$22.nextSibling, _el$23 = _el$20.nextSibling; _el$23.nextSibling;
                    _el$17.$$click = () => setExpandedPages((old) => old.includes(index) ? old.filter((d) => d !== index) : [...old, index]);
                    insert(_el$17, createComponent(Expander, {
                      get expanded() {
                        return expandedPages().includes(index);
                      }
                    }), _el$18);
                    insert(_el$17, index * 100, _el$22);
                    insert(_el$17, index * 100 + 100 - 1, _el$23);
                    insert(_el$16, createComponent(Show, {
                      get when() {
                        return expandedPages().includes(index);
                      },
                      get children() {
                        const _el$24 = _tmpl$42();
                        insert(_el$24, createComponent(Key, {
                          get each() {
                            return entries2();
                          },
                          by: (entry) => entry.label,
                          children: (entry) => createComponent(Explorer, {
                            get defaultExpanded() {
                              return props.defaultExpanded;
                            },
                            get label() {
                              return entry().label;
                            },
                            get value() {
                              return entry().value;
                            },
                            get copyable() {
                              return props.copyable;
                            }
                          })
                        }));
                        createRenderEffect(() => className(_el$24, styles.subEntry));
                        return _el$24;
                      }
                    }), null);
                    createRenderEffect((_p$) => {
                      const _v$5 = styles.entry, _v$6 = styles.expanderButton;
                      _v$5 !== _p$._v$5 && className(_el$16, _p$._v$5 = _v$5);
                      _v$6 !== _p$._v$6 && className(_el$17, _p$._v$6 = _v$6);
                      return _p$;
                    }, {
                      _v$5: void 0,
                      _v$6: void 0
                    });
                    return _el$15;
                  })()
                }));
                createRenderEffect(() => className(_el$11, styles.subEntry));
                return _el$11;
              }
            })];
          }
        })];
      }
    }), null);
    insert(_el$3, createComponent(Show, {
      get when() {
        return subEntryPages().length === 0;
      },
      get children() {
        return [(() => {
          const _el$12 = _tmpl$52(), _el$13 = _el$12.firstChild;
          insert(_el$12, () => props.label, _el$13);
          createRenderEffect(() => className(_el$12, styles.label));
          return _el$12;
        })(), " ", (() => {
          const _el$14 = _tmpl$62();
          insert(_el$14, () => displayValue(props.value));
          createRenderEffect(() => className(_el$14, styles.value));
          return _el$14;
        })()];
      }
    }), null);
    createRenderEffect(() => className(_el$3, styles.entry));
    return _el$3;
  })();
}
var getStyles = () => {
  const {
    colors,
    font,
    size,
    border
  } = tokens;
  return {
    entry: css`
      & * {
        font-size: ${font.size.sm};
        font-family: 'Menlo', 'Fira Code', monospace;
        line-height: 1.7;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,
    subEntry: css`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${colors.darkGray[400]};
    `,
    expander: css`
      & path {
        stroke: ${colors.gray[400]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
    `,
    expanderButton: css`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      line-height: ${font.size.sm};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${size[1]};

      &:focus-visible {
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    info: css`
      color: ${colors.gray[500]};
      font-size: ${font.size.xs};
      line-height: ${font.size.xs};
      margin-left: ${size[1]};
    `,
    label: css`
      color: ${colors.gray[300]};
    `,
    value: css`
      color: ${colors.purple[400]};
    `,
    copyButton: css`
      background-color: transparent;
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${size[3.5]};
      height: ${size[3.5]};
      position: relative;
      top: 4px;
      left: ${size[2]};
      z-index: 1;

      &:hover svg .copier {
        stroke: ${colors.gray[500]} !important;
      }

      &:focus-visible {
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
        outline-offset: 2px;
      }
    `
  };
};
delegateEvents(["click"]);

// src/Context.ts
var QueryDevtoolsContext = createContext({
  client: void 0,
  onlineManager: void 0,
  queryFlavor: "",
  version: ""
});
function useQueryDevtoolsContext() {
  return useContext(QueryDevtoolsContext);
}

// src/fonts.ts
var loadFonts = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

// src/Devtools.tsx
var _tmpl$13 = /* @__PURE__ */ template(`<div><div aria-hidden="true"></div><button aria-label="Open Tanstack query devtools">`);
var _tmpl$23 = /* @__PURE__ */ template(`<div>`);
var _tmpl$33 = /* @__PURE__ */ template(`<span>Asc`);
var _tmpl$43 = /* @__PURE__ */ template(`<span>Desc`);
var _tmpl$53 = /* @__PURE__ */ template(`<div role="menu" tabindex="-1" aria-labelledby="TSQD-settings-menu-btn" id="TSQD-settings-menu"><div>Position</div><div><button aria-label="Position top"><span>Top</span></button><button aria-label="Position bottom"><span>Bottom</span></button><button aria-label="Position left"><span>Left</span></button><button aria-label="Position right"><span>Right`);
var _tmpl$63 = /* @__PURE__ */ template(`<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools"></button><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div><div><div><div><input aria-label="Filter queries by query key" type="text" placeholder="Filter"></div><div><select></select></div><button></button></div><div><button></button><div><button id="TSQD-settings-menu-btn" aria-haspopup="true" aria-controls="TSQD-settings-menu"></button></div></div></div><div><div>`);
var _tmpl$73 = /* @__PURE__ */ template(`<option>Sort by `);
var _tmpl$82 = /* @__PURE__ */ template(`<div class="TSQDQueryDisabled">disabled`);
var _tmpl$92 = /* @__PURE__ */ template(`<button><div></div><code class="TSQDQueryHash">`);
var _tmpl$102 = /* @__PURE__ */ template(`<div role="tooltip" id="TSQD-status-tooltip">`);
var _tmpl$112 = /* @__PURE__ */ template(`<span>`);
var _tmpl$122 = /* @__PURE__ */ template(`<button><span></span><span>`);
var _tmpl$132 = /* @__PURE__ */ template(`<button><span></span> Error`);
var _tmpl$14 = /* @__PURE__ */ template(`<div><span></span>Trigger Error<select><option value="" disabled selected>`);
var _tmpl$15 = /* @__PURE__ */ template(`<div><div>Query Details</div><div><div><pre><code></code></pre><span></span></div><div><span>Observers:</span><span></span></div><div><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span> Loading</button></div><div>Data Explorer</div><div></div><div>Query Explorer</div><div>`);
var _tmpl$16 = /* @__PURE__ */ template(`<option>`);
var firstBreakpoint = 1024;
var secondBreakpoint = 796;
var thirdBreakpoint = 700;
var BUTTON_POSITION = "bottom-right";
var POSITION = "bottom";
var INITIAL_IS_OPEN = false;
var DEFAULT_HEIGHT = 500;
var DEFAULT_WIDTH = 500;
var DEFAULT_SORT_FN_NAME = Object.keys(sortFns)[0];
var DEFAULT_SORT_ORDER = 1;
var [selectedQueryHash, setSelectedQueryHash] = createSignal(null);
var [panelWidth, setPanelWidth] = createSignal(0);
var DevtoolsComponent = (props) => {
  return createComponent(QueryDevtoolsContext.Provider, {
    value: props,
    get children() {
      return createComponent(Devtools, {});
    }
  });
};
var Devtools_default = DevtoolsComponent;
var Devtools = () => {
  loadFonts();
  const styles = getStyles2();
  const [localStore, setLocalStore] = createLocalStorage({
    prefix: "TanstackQueryDevtools"
  });
  const buttonPosition = createMemo(() => {
    return useQueryDevtoolsContext().buttonPosition || BUTTON_POSITION;
  });
  const isOpen = createMemo(() => {
    return localStore.open === "true" ? true : localStore.open === "false" ? false : useQueryDevtoolsContext().initialIsOpen || INITIAL_IS_OPEN;
  });
  const position2 = createMemo(() => {
    return localStore.position || useQueryDevtoolsContext().position || POSITION;
  });
  return (() => {
    const _el$ = _tmpl$23();
    insert(_el$, createComponent(TransitionGroup, {
      name: "TSQD-panel",
      get children() {
        return createComponent(Show, {
          get when() {
            return isOpen();
          },
          get children() {
            return createComponent(DevtoolsPanel, {
              localStore,
              setLocalStore
            });
          }
        });
      }
    }), null);
    insert(_el$, createComponent(TransitionGroup, {
      name: "TSQD-button",
      get children() {
        return createComponent(Show, {
          get when() {
            return !isOpen();
          },
          get children() {
            const _el$2 = _tmpl$13(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
            insert(_el$3, createComponent(TanstackLogo, {}));
            _el$4.$$click = () => setLocalStore("open", "true");
            insert(_el$4, createComponent(TanstackLogo, {}));
            createRenderEffect(() => className(_el$2, cx(styles.devtoolsBtn, styles[`devtoolsBtn-position-${buttonPosition()}`])));
            return _el$2;
          }
        });
      }
    }), null);
    createRenderEffect(() => className(_el$, css`
        & .TSQD-panel-exit-active,
        & .TSQD-panel-enter-active {
          transition: opacity 0.3s, transform 0.3s;
        }

        & .TSQD-panel-exit-to,
        & .TSQD-panel-enter {
          ${position2() === "top" ? `transform: translateY(-${Number(localStore.height || DEFAULT_HEIGHT)}px);` : position2() === "left" ? `transform: translateX(-${Number(localStore.width || DEFAULT_WIDTH)}px);` : position2() === "right" ? `transform: translateX(${Number(localStore.width || DEFAULT_WIDTH)}px);` : `transform: translateY(${Number(localStore.height || DEFAULT_HEIGHT)}px);`}
        }

        & .TSQD-button-exit-active,
        & .TSQD-button-enter-active {
          transition: opacity 0.3s, transform 0.3s;
        }

        & .TSQD-button-exit-to,
        & .TSQD-button-enter {
          transform: ${buttonPosition() === "top-left" ? `translateX(-72px);` : buttonPosition() === "top-right" ? `translateX(72px);` : `translateY(72px);`};
        }
      `));
    return _el$;
  })();
};
var DevtoolsPanel = (props) => {
  const styles = getStyles2();
  const [isResizing, setIsResizing] = createSignal(false);
  const sort = createMemo(() => props.localStore.sort || DEFAULT_SORT_FN_NAME);
  const sortOrder = createMemo(() => Number(props.localStore.sortOrder) || DEFAULT_SORT_ORDER);
  const [offline, setOffline] = createSignal(false);
  const [settingsOpen, setSettingsOpen] = createSignal(false);
  const position2 = createMemo(() => props.localStore.position || useQueryDevtoolsContext().position || POSITION);
  const sortFn = createMemo(() => sortFns[sort()]);
  const onlineManager = createMemo(() => useQueryDevtoolsContext().onlineManager);
  const cache2 = createMemo(() => {
    return useQueryDevtoolsContext().client.getQueryCache();
  });
  const queryCount = createSubscribeToQueryCacheBatcher((queryCache) => {
    return queryCache().getAll().length;
  }, false);
  const queries = createMemo(on(() => [queryCount(), props.localStore.filter, sort(), sortOrder()], () => {
    const curr = cache2().getAll();
    const filtered = props.localStore.filter ? curr.filter((item) => rankItem(item.queryHash, props.localStore.filter || "").passed) : [...curr];
    const sorted = sortFn() ? filtered.sort((a, b) => sortFn()(a, b) * sortOrder()) : filtered;
    return sorted;
  }));
  const handleDragStart = (event) => {
    const panelElement = event.currentTarget.parentElement;
    if (!panelElement)
      return;
    setIsResizing(true);
    const {
      height,
      width
    } = panelElement.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    let newSize = 0;
    const minHeight = convertRemToPixels(3.5);
    const minWidth = convertRemToPixels(12);
    const runDrag = (moveEvent) => {
      moveEvent.preventDefault();
      if (position2() === "left" || position2() === "right") {
        const valToAdd = position2() === "right" ? startX - moveEvent.clientX : moveEvent.clientX - startX;
        newSize = Math.round(width + valToAdd);
        if (newSize < minWidth) {
          newSize = minWidth;
        }
        props.setLocalStore("width", String(Math.round(newSize)));
        const newWidth = panelElement.getBoundingClientRect().width;
        if (Number(props.localStore.width) < newWidth) {
          props.setLocalStore("width", String(newWidth));
        }
      } else {
        const valToAdd = position2() === "bottom" ? startY - moveEvent.clientY : moveEvent.clientY - startY;
        newSize = Math.round(height + valToAdd);
        if (newSize < minHeight) {
          newSize = minHeight;
          setSelectedQueryHash(null);
        }
        props.setLocalStore("height", String(Math.round(newSize)));
      }
    };
    const unsub = () => {
      if (isResizing()) {
        setIsResizing(false);
      }
      document.removeEventListener("mousemove", runDrag, false);
      document.removeEventListener("mouseUp", unsub, false);
    };
    document.addEventListener("mousemove", runDrag, false);
    document.addEventListener("mouseup", unsub, false);
  };
  setupQueryCacheSubscription();
  let queriesContainerRef;
  let panelRef;
  onMount(() => {
    createResizeObserver(panelRef, ({
      width
    }, el) => {
      if (el === panelRef) {
        setPanelWidth(width);
      }
    });
  });
  const setDevtoolsPosition = (pos) => {
    props.setLocalStore("position", pos);
    setSettingsOpen(false);
  };
  createEffect(() => {
    const rootContainer = panelRef.parentElement?.parentElement?.parentElement;
    if (!rootContainer)
      return;
    const currentPosition = props.localStore.position || POSITION;
    const styleProp = getSidedProp("padding", currentPosition);
    const isVertical = props.localStore.position === "left" || props.localStore.position === "right";
    const previousPaddings = (({
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    }) => ({
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    }))(rootContainer.style);
    rootContainer.style[styleProp] = `${isVertical ? props.localStore.width : props.localStore.height}px`;
    onCleanup(() => {
      Object.entries(previousPaddings).forEach(([property, previousValue]) => {
        rootContainer.style[property] = previousValue;
      });
    });
  });
  return (() => {
    const _el$5 = _tmpl$63(), _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling, _el$9 = _el$8.firstChild, _el$10 = _el$9.firstChild, _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.firstChild, _el$14 = _el$9.nextSibling, _el$15 = _el$14.firstChild, _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$16.nextSibling, _el$19 = _el$18.firstChild, _el$20 = _el$18.nextSibling, _el$23 = _el$15.nextSibling, _el$24 = _el$23.firstChild, _el$25 = _el$24.nextSibling, _el$26 = _el$25.firstChild, _el$38 = _el$14.nextSibling, _el$39 = _el$38.firstChild;
    const _ref$ = panelRef;
    typeof _ref$ === "function" ? use(_ref$, _el$5) : panelRef = _el$5;
    _el$6.$$mousedown = handleDragStart;
    _el$7.$$click = () => props.setLocalStore("open", "false");
    insert(_el$7, createComponent(ChevronDown, {}));
    const _ref$2 = queriesContainerRef;
    typeof _ref$2 === "function" ? use(_ref$2, _el$8) : queriesContainerRef = _el$8;
    _el$10.$$click = () => props.setLocalStore("open", "false");
    insert(_el$12, () => useQueryDevtoolsContext().queryFlavor, _el$13);
    insert(_el$12, () => useQueryDevtoolsContext().version, null);
    insert(_el$9, createComponent(QueryStatusCount, {}), null);
    insert(_el$16, createComponent(Search, {}), _el$17);
    _el$17.$$input = (e) => props.setLocalStore("filter", e.currentTarget.value);
    _el$19.addEventListener("change", (e) => props.setLocalStore("sort", e.currentTarget.value));
    insert(_el$19, () => Object.keys(sortFns).map((key) => (() => {
      const _el$40 = _tmpl$73(); _el$40.firstChild;
      _el$40.value = key;
      insert(_el$40, key, null);
      return _el$40;
    })()));
    insert(_el$18, createComponent(ChevronDown, {}), null);
    _el$20.$$click = () => {
      props.setLocalStore("sortOrder", String(sortOrder() * -1));
    };
    insert(_el$20, createComponent(Show, {
      get when() {
        return sortOrder() === 1;
      },
      get children() {
        return [_tmpl$33(), createComponent(ArrowUp, {})];
      }
    }), null);
    insert(_el$20, createComponent(Show, {
      get when() {
        return sortOrder() === -1;
      },
      get children() {
        return [_tmpl$43(), createComponent(ArrowDown, {})];
      }
    }), null);
    _el$24.$$click = () => {
      if (offline()) {
        onlineManager().setOnline(true);
        setOffline(false);
      } else {
        onlineManager().setOnline(false);
        setOffline(true);
      }
    };
    insert(_el$24, (() => {
      const _c$ = createMemo(() => !!offline());
      return () => _c$() ? createComponent(Offline, {}) : createComponent(Wifi, {});
    })());
    _el$25.style.setProperty("position", "relative");
    _el$26.$$click = () => setSettingsOpen((prev2) => !prev2);
    insert(_el$26, createComponent(Settings, {}));
    insert(_el$25, createComponent(Show, {
      get when() {
        return settingsOpen();
      },
      get children() {
        const _el$27 = _tmpl$53(), _el$28 = _el$27.firstChild, _el$29 = _el$28.nextSibling, _el$30 = _el$29.firstChild, _el$31 = _el$30.firstChild, _el$32 = _el$30.nextSibling, _el$33 = _el$32.firstChild, _el$34 = _el$32.nextSibling, _el$35 = _el$34.firstChild, _el$36 = _el$34.nextSibling, _el$37 = _el$36.firstChild;
        _el$30.$$click = () => {
          setDevtoolsPosition("top");
        };
        insert(_el$30, createComponent(ArrowUp, {}), _el$31);
        _el$32.$$click = () => {
          setDevtoolsPosition("bottom");
        };
        insert(_el$32, createComponent(ArrowDown, {}), _el$33);
        _el$34.$$click = () => {
          setDevtoolsPosition("left");
        };
        insert(_el$34, createComponent(ArrowDown, {}), _el$35);
        _el$36.$$click = () => {
          setDevtoolsPosition("right");
        };
        insert(_el$36, createComponent(ArrowDown, {}), _el$37);
        createRenderEffect((_p$) => {
          const _v$ = styles.settingsMenu, _v$2 = styles.settingsMenuHeader, _v$3 = styles.settingsMenuSection;
          _v$ !== _p$._v$ && className(_el$27, _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && className(_el$28, _p$._v$2 = _v$2);
          _v$3 !== _p$._v$3 && className(_el$29, _p$._v$3 = _v$3);
          return _p$;
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        });
        return _el$27;
      }
    }), null);
    insert(_el$39, createComponent(Key, {
      by: (q) => q.queryHash,
      get each() {
        return queries();
      },
      children: (query) => createComponent(QueryRow, {
        get query() {
          return query();
        }
      })
    }));
    insert(_el$5, createComponent(Show, {
      get when() {
        return selectedQueryHash();
      },
      get children() {
        return createComponent(QueryDetails, {});
      }
    }), null);
    createRenderEffect((_p$) => {
      const _v$4 = `${styles.panel} ${styles[`panel-position-${position2()}`]} ${css`
        flex-direction: ${panelWidth() < secondBreakpoint ? "column" : "row"};
        background-color: ${panelWidth() < secondBreakpoint ? tokens.colors.gray[600] : tokens.colors.darkGray[900]};
        ${panelWidth() < thirdBreakpoint && (position2() === "right" || position2() === "left") ? `
            min-width: min-content;
          ` : ""}
      `}`, _v$5 = position2() === "bottom" || position2() === "top" ? `${props.localStore.height || DEFAULT_HEIGHT}px` : "auto", _v$6 = position2() === "right" || position2() === "left" ? `${props.localStore.width || DEFAULT_WIDTH}px` : "auto", _v$7 = cx(styles.dragHandle, styles[`dragHandle-position-${position2()}`]), _v$8 = cx(styles.closeBtn, styles[`closeBtn-position-${position2()}`]), _v$9 = `${styles.queriesContainer} ${css`
          ${panelWidth() < secondBreakpoint && selectedQueryHash() ? `
          height: 50%;
          max-height: 50%;
          ` : ""}
        `}`, _v$10 = cx(styles.row), _v$11 = styles.logo, _v$12 = styles.tanstackLogo, _v$13 = styles.queryFlavorLogo, _v$14 = cx(styles.row, css`
              gap: ${tokens.size[2.5]};
            `), _v$15 = styles.filtersContainer, _v$16 = styles.filterInput, _v$17 = styles.filterSelect, _v$18 = `Sort order ${sortOrder() === -1 ? "descending" : "ascending"}`, _v$19 = sortOrder() === -1, _v$20 = styles.actionsContainer, _v$21 = styles.actionsBtn, _v$22 = `${offline() ? "Unset offline mocking behavior" : "Mock offline behavior"}`, _v$23 = offline(), _v$24 = styles.actionsBtn, _v$25 = `${settingsOpen() ? "Close" : "Open"} settings menu`, _v$26 = styles.overflowQueryContainer;
      _v$4 !== _p$._v$4 && className(_el$5, _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && ((_p$._v$5 = _v$5) != null ? _el$5.style.setProperty("height", _v$5) : _el$5.style.removeProperty("height"));
      _v$6 !== _p$._v$6 && ((_p$._v$6 = _v$6) != null ? _el$5.style.setProperty("width", _v$6) : _el$5.style.removeProperty("width"));
      _v$7 !== _p$._v$7 && className(_el$6, _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && className(_el$7, _p$._v$8 = _v$8);
      _v$9 !== _p$._v$9 && className(_el$8, _p$._v$9 = _v$9);
      _v$10 !== _p$._v$10 && className(_el$9, _p$._v$10 = _v$10);
      _v$11 !== _p$._v$11 && className(_el$10, _p$._v$11 = _v$11);
      _v$12 !== _p$._v$12 && className(_el$11, _p$._v$12 = _v$12);
      _v$13 !== _p$._v$13 && className(_el$12, _p$._v$13 = _v$13);
      _v$14 !== _p$._v$14 && className(_el$14, _p$._v$14 = _v$14);
      _v$15 !== _p$._v$15 && className(_el$15, _p$._v$15 = _v$15);
      _v$16 !== _p$._v$16 && className(_el$16, _p$._v$16 = _v$16);
      _v$17 !== _p$._v$17 && className(_el$18, _p$._v$17 = _v$17);
      _v$18 !== _p$._v$18 && setAttribute(_el$20, "aria-label", _p$._v$18 = _v$18);
      _v$19 !== _p$._v$19 && setAttribute(_el$20, "aria-pressed", _p$._v$19 = _v$19);
      _v$20 !== _p$._v$20 && className(_el$23, _p$._v$20 = _v$20);
      _v$21 !== _p$._v$21 && className(_el$24, _p$._v$21 = _v$21);
      _v$22 !== _p$._v$22 && setAttribute(_el$24, "aria-label", _p$._v$22 = _v$22);
      _v$23 !== _p$._v$23 && setAttribute(_el$24, "aria-pressed", _p$._v$23 = _v$23);
      _v$24 !== _p$._v$24 && className(_el$26, _p$._v$24 = _v$24);
      _v$25 !== _p$._v$25 && setAttribute(_el$26, "aria-label", _p$._v$25 = _v$25);
      _v$26 !== _p$._v$26 && className(_el$38, _p$._v$26 = _v$26);
      return _p$;
    }, {
      _v$4: void 0,
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0,
      _v$8: void 0,
      _v$9: void 0,
      _v$10: void 0,
      _v$11: void 0,
      _v$12: void 0,
      _v$13: void 0,
      _v$14: void 0,
      _v$15: void 0,
      _v$16: void 0,
      _v$17: void 0,
      _v$18: void 0,
      _v$19: void 0,
      _v$20: void 0,
      _v$21: void 0,
      _v$22: void 0,
      _v$23: void 0,
      _v$24: void 0,
      _v$25: void 0,
      _v$26: void 0
    });
    createRenderEffect(() => _el$17.value = props.localStore.filter || "");
    createRenderEffect(() => _el$19.value = sort());
    return _el$5;
  })();
};
var QueryRow = (props) => {
  const styles = getStyles2();
  const queryState = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().find({
    queryKey: props.query.queryKey
  })?.state);
  const isDisabled = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().find({
    queryKey: props.query.queryKey
  })?.isDisabled() ?? false);
  const isStale = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().find({
    queryKey: props.query.queryKey
  })?.isStale() ?? false);
  const observers = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().find({
    queryKey: props.query.queryKey
  })?.getObserversCount() ?? 0);
  const color = createMemo(() => getQueryStatusColor({
    queryState: queryState(),
    observerCount: observers(),
    isStale: isStale()
  }));
  return createComponent(Show, {
    get when() {
      return queryState();
    },
    get children() {
      const _el$42 = _tmpl$92(), _el$43 = _el$42.firstChild, _el$44 = _el$43.nextSibling;
      _el$42.$$click = () => setSelectedQueryHash(props.query.queryHash === selectedQueryHash() ? null : props.query.queryHash);
      insert(_el$43, observers);
      insert(_el$44, () => props.query.queryHash);
      insert(_el$42, createComponent(Show, {
        get when() {
          return isDisabled();
        },
        get children() {
          return _tmpl$82();
        }
      }), null);
      createRenderEffect((_p$) => {
        const _v$27 = cx(styles.queryRow, selectedQueryHash() === props.query.queryHash && styles.selectedQueryRow), _v$28 = `Query key ${props.query.queryHash}`, _v$29 = cx("TSQDObserverCount", color() === "gray" ? css`
                  background-color: ${tokens.colors[color()][700]};
                  color: ${tokens.colors[color()][300]};
                ` : css`
                  background-color: ${tokens.colors[color()][900]};
                  color: ${tokens.colors[color()][300]} !important;
                `);
        _v$27 !== _p$._v$27 && className(_el$42, _p$._v$27 = _v$27);
        _v$28 !== _p$._v$28 && setAttribute(_el$42, "aria-label", _p$._v$28 = _v$28);
        _v$29 !== _p$._v$29 && className(_el$43, _p$._v$29 = _v$29);
        return _p$;
      }, {
        _v$27: void 0,
        _v$28: void 0,
        _v$29: void 0
      });
      return _el$42;
    }
  });
};
var QueryStatusCount = () => {
  const stale = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().filter((q) => getQueryStatusLabel(q) === "stale").length);
  const fresh = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().filter((q) => getQueryStatusLabel(q) === "fresh").length);
  const fetching = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().filter((q) => getQueryStatusLabel(q) === "fetching").length);
  const paused = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().filter((q) => getQueryStatusLabel(q) === "paused").length);
  const inactive = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().filter((q) => getQueryStatusLabel(q) === "inactive").length);
  const styles = getStyles2();
  return (() => {
    const _el$46 = _tmpl$23();
    insert(_el$46, createComponent(QueryStatus, {
      label: "Fresh",
      color: "green",
      get count() {
        return fresh();
      }
    }), null);
    insert(_el$46, createComponent(QueryStatus, {
      label: "Fetching",
      color: "blue",
      get count() {
        return fetching();
      }
    }), null);
    insert(_el$46, createComponent(QueryStatus, {
      label: "Paused",
      color: "purple",
      get count() {
        return paused();
      }
    }), null);
    insert(_el$46, createComponent(QueryStatus, {
      label: "Stale",
      color: "yellow",
      get count() {
        return stale();
      }
    }), null);
    insert(_el$46, createComponent(QueryStatus, {
      label: "Inactive",
      color: "gray",
      get count() {
        return inactive();
      }
    }), null);
    createRenderEffect(() => className(_el$46, styles.queryStatusContainer));
    return _el$46;
  })();
};
var QueryStatus = (props) => {
  const styles = getStyles2();
  let tagRef;
  const [mouseOver, setMouseOver] = createSignal(false);
  const [focused, setFocused] = createSignal(false);
  const showLabel = createMemo(() => {
    if (selectedQueryHash()) {
      if (panelWidth() < firstBreakpoint && panelWidth() > secondBreakpoint) {
        return false;
      }
    }
    if (panelWidth() < thirdBreakpoint) {
      return false;
    }
    return true;
  });
  return (() => {
    const _el$47 = _tmpl$122(), _el$49 = _el$47.firstChild, _el$51 = _el$49.nextSibling;
    const _ref$3 = tagRef;
    typeof _ref$3 === "function" ? use(_ref$3, _el$47) : tagRef = _el$47;
    _el$47.addEventListener("mouseleave", () => {
      setMouseOver(false);
      setFocused(false);
    });
    _el$47.addEventListener("mouseenter", () => setMouseOver(true));
    _el$47.addEventListener("blur", () => setFocused(false));
    _el$47.addEventListener("focus", () => setFocused(true));
    spread(_el$47, mergeProps({
      get disabled() {
        return showLabel();
      },
      get ["class"]() {
        return cx(styles.queryStatusTag, !showLabel() ? css`
              cursor: pointer;
              &:hover {
                background: ${tokens.colors.darkGray[400]}${tokens.alpha[80]};
              }
            ` : null);
      }
    }, () => mouseOver() || focused() ? {
      "aria-describedby": "TSQD-status-tooltip"
    } : {}), false, true);
    insert(_el$47, createComponent(Show, {
      get when() {
        return createMemo(() => !!!showLabel())() && (mouseOver() || focused());
      },
      get children() {
        const _el$48 = _tmpl$102();
        insert(_el$48, () => props.label);
        createRenderEffect(() => className(_el$48, cx(styles.statusTooltip)));
        return _el$48;
      }
    }), _el$49);
    insert(_el$47, createComponent(Show, {
      get when() {
        return showLabel();
      },
      get children() {
        const _el$50 = _tmpl$112();
        insert(_el$50, () => props.label);
        return _el$50;
      }
    }), _el$51);
    insert(_el$51, () => props.count);
    createRenderEffect((_p$) => {
      const _v$30 = css`
          width: ${tokens.size[2]};
          height: ${tokens.size[2]};
          border-radius: ${tokens.border.radius.full};
          background-color: ${tokens.colors[props.color][500]};
        `, _v$31 = cx(styles.queryStatusCount, props.count > 0 && props.color !== "gray" ? css`
                background-color: ${tokens.colors[props.color][900]};
                color: ${tokens.colors[props.color][300]} !important;
              ` : css`
                color: ${tokens.colors["gray"][400]} !important;
              `);
      _v$30 !== _p$._v$30 && className(_el$49, _p$._v$30 = _v$30);
      _v$31 !== _p$._v$31 && className(_el$51, _p$._v$31 = _v$31);
      return _p$;
    }, {
      _v$30: void 0,
      _v$31: void 0
    });
    return _el$47;
  })();
};
var QueryDetails = () => {
  const styles = getStyles2();
  const queryClient = useQueryDevtoolsContext().client;
  const [restoringLoading, setRestoringLoading] = createSignal(false);
  const errorTypes = createMemo(() => {
    return useQueryDevtoolsContext().errorTypes || [];
  });
  const activeQuery = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().find((query) => query.queryHash === selectedQueryHash()), false);
  const activeQueryFresh = createSubscribeToQueryCacheBatcher((queryCache) => {
    return queryCache().getAll().find((query) => query.queryHash === selectedQueryHash());
  }, false);
  const activeQueryState = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().find((query) => query.queryHash === selectedQueryHash())?.state, false);
  const activeQueryStateData = createSubscribeToQueryCacheBatcher((queryCache) => {
    return queryCache().getAll().find((query) => query.queryHash === selectedQueryHash())?.state.data;
  }, false);
  const statusLabel = createSubscribeToQueryCacheBatcher((queryCache) => {
    const query = queryCache().getAll().find((q) => q.queryHash === selectedQueryHash());
    if (!query)
      return "inactive";
    return getQueryStatusLabel(query);
  });
  const queryStatus = createSubscribeToQueryCacheBatcher((queryCache) => {
    const query = queryCache().getAll().find((q) => q.queryHash === selectedQueryHash());
    if (!query)
      return "pending";
    return query.state.status;
  });
  const observerCount = createSubscribeToQueryCacheBatcher((queryCache) => queryCache().getAll().find((query) => query.queryHash === selectedQueryHash())?.getObserversCount() ?? 0);
  const color = createMemo(() => getQueryStatusColorByLabel(statusLabel()));
  const handleRefetch = () => {
    const promise = activeQuery()?.fetch();
    promise?.catch(() => {
    });
  };
  const triggerError = (errorType) => {
    const error = errorType?.initializer(activeQuery()) ?? new Error("Unknown error from devtools");
    const __previousQueryOptions = activeQuery().options;
    activeQuery().setState({
      status: "error",
      error,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      fetchMeta: {
        ...activeQuery().state.fetchMeta,
        __previousQueryOptions
      }
    });
  };
  const restoreQueryAfterLoadingOrError = () => {
    activeQuery()?.fetch((activeQuery()?.state.fetchMeta).__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: true
    });
  };
  createEffect(() => {
    if (statusLabel() !== "fetching") {
      setRestoringLoading(false);
    }
  });
  return createComponent(Show, {
    get when() {
      return createMemo(() => !!activeQuery())() && activeQueryState();
    },
    get children() {
      const _el$52 = _tmpl$15(), _el$53 = _el$52.firstChild, _el$54 = _el$53.nextSibling, _el$55 = _el$54.firstChild, _el$56 = _el$55.firstChild, _el$57 = _el$56.firstChild, _el$58 = _el$56.nextSibling, _el$59 = _el$55.nextSibling, _el$60 = _el$59.firstChild, _el$61 = _el$60.nextSibling, _el$62 = _el$59.nextSibling, _el$63 = _el$62.firstChild, _el$64 = _el$63.nextSibling, _el$65 = _el$54.nextSibling, _el$66 = _el$65.nextSibling, _el$67 = _el$66.firstChild, _el$68 = _el$67.firstChild, _el$69 = _el$67.nextSibling, _el$70 = _el$69.firstChild, _el$71 = _el$69.nextSibling, _el$72 = _el$71.firstChild, _el$73 = _el$71.nextSibling, _el$74 = _el$73.firstChild, _el$75 = _el$74.nextSibling, _el$84 = _el$66.nextSibling, _el$85 = _el$84.nextSibling, _el$86 = _el$85.nextSibling, _el$87 = _el$86.nextSibling;
      insert(_el$57, () => displayValue(activeQuery().queryKey, true));
      insert(_el$58, statusLabel);
      insert(_el$61, observerCount);
      insert(_el$64, () => new Date(activeQueryState().dataUpdatedAt).toLocaleTimeString());
      _el$67.$$click = handleRefetch;
      _el$69.$$click = () => queryClient.invalidateQueries(activeQuery());
      _el$71.$$click = () => queryClient.resetQueries(activeQuery());
      _el$73.$$click = () => {
        if (activeQuery()?.state.data === void 0) {
          setRestoringLoading(true);
          restoreQueryAfterLoadingOrError();
        } else {
          const activeQueryVal = activeQuery();
          if (!activeQueryVal)
            return;
          const __previousQueryOptions = activeQueryVal.options;
          activeQueryVal.fetch({
            ...__previousQueryOptions,
            queryFn: () => {
              return new Promise(() => {
              });
            },
            gcTime: -1
          });
          activeQueryVal.setState({
            data: void 0,
            status: "pending",
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            fetchMeta: {
              ...activeQueryVal.state.fetchMeta,
              __previousQueryOptions
            }
          });
        }
      };
      insert(_el$73, () => statusLabel() === "fetching" ? "Restore" : "Trigger", _el$75);
      insert(_el$66, createComponent(Show, {
        get when() {
          return errorTypes().length === 0 || queryStatus() === "error";
        },
        get children() {
          const _el$76 = _tmpl$132(), _el$77 = _el$76.firstChild, _el$78 = _el$77.nextSibling;
          _el$76.$$click = () => {
            if (!activeQuery().state.error) {
              triggerError();
            } else {
              queryClient.resetQueries(activeQuery());
            }
          };
          insert(_el$76, () => queryStatus() === "error" ? "Restore" : "Trigger", _el$78);
          createRenderEffect((_p$) => {
            const _v$32 = css`
                color: ${tokens.colors.red[400]};
              `, _v$33 = css`
                  background-color: ${tokens.colors.red[400]};
                `;
            _v$32 !== _p$._v$32 && className(_el$76, _p$._v$32 = _v$32);
            _v$33 !== _p$._v$33 && className(_el$77, _p$._v$33 = _v$33);
            return _p$;
          }, {
            _v$32: void 0,
            _v$33: void 0
          });
          return _el$76;
        }
      }), null);
      insert(_el$66, createComponent(Show, {
        get when() {
          return !(errorTypes().length === 0 || queryStatus() === "error");
        },
        get children() {
          const _el$79 = _tmpl$14(), _el$80 = _el$79.firstChild, _el$81 = _el$80.nextSibling, _el$82 = _el$81.nextSibling; _el$82.firstChild;
          _el$82.addEventListener("change", (e) => {
            const errorType = errorTypes().find((t) => t.name === e.currentTarget.value);
            triggerError(errorType);
          });
          insert(_el$82, createComponent(For, {
            get each() {
              return errorTypes();
            },
            children: (errorType) => (() => {
              const _el$88 = _tmpl$16();
              insert(_el$88, () => errorType.name);
              createRenderEffect(() => _el$88.value = errorType.name);
              return _el$88;
            })()
          }), null);
          insert(_el$79, createComponent(ChevronDown, {}), null);
          createRenderEffect((_p$) => {
            const _v$34 = styles.actionsSelect, _v$35 = css`
                  background-color: ${tokens.colors.red[400]};
                `, _v$36 = queryStatus() === "pending";
            _v$34 !== _p$._v$34 && className(_el$79, _p$._v$34 = _v$34);
            _v$35 !== _p$._v$35 && className(_el$80, _p$._v$35 = _v$35);
            _v$36 !== _p$._v$36 && (_el$82.disabled = _p$._v$36 = _v$36);
            return _p$;
          }, {
            _v$34: void 0,
            _v$35: void 0,
            _v$36: void 0
          });
          return _el$79;
        }
      }), null);
      _el$85.style.setProperty("padding", "0.5rem");
      insert(_el$85, createComponent(Explorer, {
        label: "Data",
        defaultExpanded: ["Data"],
        get value() {
          return activeQueryStateData();
        },
        copyable: true
      }));
      _el$87.style.setProperty("padding", "0.5rem");
      insert(_el$87, createComponent(Explorer, {
        label: "Query",
        defaultExpanded: ["Query", "queryKey"],
        get value() {
          return activeQueryFresh();
        }
      }));
      createRenderEffect((_p$) => {
        const _v$37 = styles.detailsContainer, _v$38 = styles.detailsHeader, _v$39 = styles.detailsBody, _v$40 = cx(styles.queryDetailsStatus, color() === "gray" ? css`
                      background-color: ${tokens.colors[color()][700]};
                      color: ${tokens.colors[color()][300]};
                      border-color: ${tokens.colors[color()][600]};
                    ` : css`
                      background-color: ${tokens.colors[color()][900]};
                      color: ${tokens.colors[color()][300]};
                      border-color: ${tokens.colors[color()][600]};
                    `), _v$41 = styles.detailsHeader, _v$42 = styles.actionsBody, _v$43 = css`
              color: ${tokens.colors.blue[400]};
            `, _v$44 = statusLabel() === "fetching", _v$45 = css`
                background-color: ${tokens.colors.blue[400]};
              `, _v$46 = css`
              color: ${tokens.colors.yellow[400]};
            `, _v$47 = css`
                background-color: ${tokens.colors.yellow[400]};
              `, _v$48 = css`
              color: ${tokens.colors.gray[300]};
            `, _v$49 = css`
                background-color: ${tokens.colors.gray[400]};
              `, _v$50 = css`
              color: ${tokens.colors.cyan[400]};
            `, _v$51 = restoringLoading(), _v$52 = css`
                background-color: ${tokens.colors.cyan[400]};
              `, _v$53 = styles.detailsHeader, _v$54 = styles.detailsHeader;
        _v$37 !== _p$._v$37 && className(_el$52, _p$._v$37 = _v$37);
        _v$38 !== _p$._v$38 && className(_el$53, _p$._v$38 = _v$38);
        _v$39 !== _p$._v$39 && className(_el$54, _p$._v$39 = _v$39);
        _v$40 !== _p$._v$40 && className(_el$58, _p$._v$40 = _v$40);
        _v$41 !== _p$._v$41 && className(_el$65, _p$._v$41 = _v$41);
        _v$42 !== _p$._v$42 && className(_el$66, _p$._v$42 = _v$42);
        _v$43 !== _p$._v$43 && className(_el$67, _p$._v$43 = _v$43);
        _v$44 !== _p$._v$44 && (_el$67.disabled = _p$._v$44 = _v$44);
        _v$45 !== _p$._v$45 && className(_el$68, _p$._v$45 = _v$45);
        _v$46 !== _p$._v$46 && className(_el$69, _p$._v$46 = _v$46);
        _v$47 !== _p$._v$47 && className(_el$70, _p$._v$47 = _v$47);
        _v$48 !== _p$._v$48 && className(_el$71, _p$._v$48 = _v$48);
        _v$49 !== _p$._v$49 && className(_el$72, _p$._v$49 = _v$49);
        _v$50 !== _p$._v$50 && className(_el$73, _p$._v$50 = _v$50);
        _v$51 !== _p$._v$51 && (_el$73.disabled = _p$._v$51 = _v$51);
        _v$52 !== _p$._v$52 && className(_el$74, _p$._v$52 = _v$52);
        _v$53 !== _p$._v$53 && className(_el$84, _p$._v$53 = _v$53);
        _v$54 !== _p$._v$54 && className(_el$86, _p$._v$54 = _v$54);
        return _p$;
      }, {
        _v$37: void 0,
        _v$38: void 0,
        _v$39: void 0,
        _v$40: void 0,
        _v$41: void 0,
        _v$42: void 0,
        _v$43: void 0,
        _v$44: void 0,
        _v$45: void 0,
        _v$46: void 0,
        _v$47: void 0,
        _v$48: void 0,
        _v$49: void 0,
        _v$50: void 0,
        _v$51: void 0,
        _v$52: void 0,
        _v$53: void 0,
        _v$54: void 0
      });
      return _el$52;
    }
  });
};
var signalsMap = /* @__PURE__ */ new Map();
var setupQueryCacheSubscription = () => {
  const queryCache = createMemo(() => {
    const client = useQueryDevtoolsContext().client;
    return client.getQueryCache();
  });
  const unsub = queryCache().subscribe(() => {
    for (const [callback, setter] of signalsMap.entries()) {
      queueMicrotask(() => {
        setter(callback(queryCache));
      });
    }
  });
  onCleanup(() => {
    signalsMap.clear();
    unsub();
  });
  return unsub;
};
var createSubscribeToQueryCacheBatcher = (callback, equalityCheck = true) => {
  const queryCache = createMemo(() => {
    const client = useQueryDevtoolsContext().client;
    return client.getQueryCache();
  });
  const [value, setValue] = createSignal(callback(queryCache), !equalityCheck ? {
    equals: false
  } : void 0);
  createEffect(() => {
    setValue(callback(queryCache));
  });
  signalsMap.set(callback, setValue);
  onCleanup(() => {
    signalsMap.delete(callback);
  });
  return value;
};
var getStyles2 = () => {
  const {
    colors,
    font,
    size,
    alpha,
    shadow,
    border
  } = tokens;
  return {
    devtoolsBtn: css`
      z-index: 100000;
      position: fixed;
      padding: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${shadow.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${colors.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,
    panel: css`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${tokens.size[0.5]};
      & * {
        font-family: 'Inter', sans-serif;
        color: ${colors.gray[300]};
        box-sizing: border-box;
        text-transform: none;
      }
    `,
    "devtoolsBtn-position-bottom-right": css`
      bottom: 12px;
      right: 12px;
    `,
    "devtoolsBtn-position-bottom-left": css`
      bottom: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-left": css`
      top: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-right": css`
      top: 12px;
      right: 12px;
    `,
    "panel-position-top": css`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: 3.5rem;
      border-bottom: ${colors.darkGray[300]} 1px solid;
    `,
    "panel-position-bottom": css`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: 3.5rem;
      border-top: ${colors.darkGray[300]} 1px solid;
    `,
    "panel-position-right": css`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${colors.darkGray[300]} 1px solid;
      max-width: 90%;
    `,
    "panel-position-left": css`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${colors.darkGray[300]} 1px solid;
      max-width: 90%;
    `,
    closeBtn: css`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      &:hover {
        background-color: ${colors.darkGray[500]};
      }
      &:focus-visible {
        outline: 2px solid ${colors.blue[600]};
      }
    `,
    "closeBtn-position-top": css`
      bottom: 0;
      right: ${size[3]};
      transform: translate(0, 100%);
      background-color: ${colors.darkGray[700]};
      border-right: ${colors.darkGray[300]} 1px solid;
      border-left: ${colors.darkGray[300]} 1px solid;
      border-top: none;
      border-bottom: ${colors.darkGray[300]} 1px solid;
      border-radius: 0px 0px ${border.radius.sm} ${border.radius.sm};
      padding: ${size[1.5]} ${size[2.5]} ${size[2]} ${size[2.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${size[2.5]};
        height: ${size[1.5]};
        width: calc(100% + ${size[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,
    "closeBtn-position-bottom": css`
      top: 0;
      right: ${size[3]};
      transform: translate(0, -100%);
      background-color: ${colors.darkGray[700]};
      border-right: ${colors.darkGray[300]} 1px solid;
      border-left: ${colors.darkGray[300]} 1px solid;
      border-top: ${colors.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${border.radius.sm} ${border.radius.sm} 0px 0px;
      padding: ${size[2]} ${size[2.5]} ${size[1.5]} ${size[2.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${size[2.5]};
        height: ${size[1.5]};
        width: calc(100% + ${size[5]});
      }
    `,
    "closeBtn-position-right": css`
      bottom: ${size[3]};
      left: 0;
      transform: translate(-100%, 0);
      background-color: ${colors.darkGray[700]};
      border-right: none;
      border-left: ${colors.darkGray[300]} 1px solid;
      border-top: ${colors.darkGray[300]} 1px solid;
      border-bottom: ${colors.darkGray[300]} 1px solid;
      border-radius: ${border.radius.sm} 0px 0px ${border.radius.sm};
      padding: ${size[2.5]} ${size[1]} ${size[2.5]} ${size[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${size[5]});
        width: ${size[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,
    "closeBtn-position-left": css`
      bottom: ${size[3]};
      right: 0;
      transform: translate(100%, 0);
      background-color: ${colors.darkGray[700]};
      border-left: none;
      border-right: ${colors.darkGray[300]} 1px solid;
      border-top: ${colors.darkGray[300]} 1px solid;
      border-bottom: ${colors.darkGray[300]} 1px solid;
      border-radius: 0px ${border.radius.sm} ${border.radius.sm} 0px;
      padding: ${size[2.5]} ${size[1.5]} ${size[2.5]} ${size[1]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${size[5]});
        width: ${size[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,
    queriesContainer: css`
      flex: 1 1 700px;
      background-color: ${colors.darkGray[700]};
      display: flex;
      flex-direction: column;
    `,
    dragHandle: css`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${colors.gray[400]}${alpha[90]};
      }
      z-index: 4;
    `,
    "dragHandle-position-top": css`
      bottom: 0;
      width: 100%;
      height: ${tokens.size[1]};
      cursor: ns-resize;
    `,
    "dragHandle-position-bottom": css`
      top: 0;
      width: 100%;
      height: ${tokens.size[1]};
      cursor: ns-resize;
    `,
    "dragHandle-position-right": css`
      left: 0;
      width: ${tokens.size[1]};
      height: 100%;
      cursor: ew-resize;
    `,
    "dragHandle-position-left": css`
      right: 0;
      width: ${tokens.size[1]};
      height: 100%;
      cursor: ew-resize;
    `,
    row: css`
      display: flex;
      justify-content: space-between;
      padding: ${tokens.size[2.5]} ${tokens.size[3]};
      gap: ${tokens.size[4]};
      border-bottom: ${colors.darkGray[500]} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        flex-direction: column;
      }
    `,
    logo: css`
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    tanstackLogo: css`
      font-size: ${font.size.lg};
      font-weight: ${font.weight.extrabold};
      line-height: ${font.lineHeight.sm};
      white-space: nowrap;
    `,
    queryFlavorLogo: css`
      font-weight: ${font.weight.semibold};
      font-size: ${font.size.sm};
      background: linear-gradient(to right, #dd524b, #e9a03b);
      background-clip: text;
      line-height: ${font.lineHeight.xs};
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    queryStatusContainer: css`
      display: flex;
      gap: ${tokens.size[2]};
      height: min-content;
    `,
    queryStatusTag: css`
      display: flex;
      gap: ${tokens.size[1.5]};
      background: ${colors.darkGray[500]};
      border-radius: ${tokens.border.radius.md};
      font-size: ${font.size.sm};
      padding: ${tokens.size[1]};
      padding-left: ${tokens.size[2.5]};
      align-items: center;
      line-height: ${font.lineHeight.md};
      font-weight: ${font.weight.medium};
      border: none;
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${colors.blue[800]};
      }
      & span:nth-child(2) {
        color: ${colors.gray[300]}${alpha[80]};
      }
    `,
    statusTooltip: css`
      position: absolute;
      z-index: 1;
      background-color: ${colors.darkGray[500]};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${tokens.size[2]}));
      padding: ${tokens.size[0.5]} ${tokens.size[3]};
      border-radius: ${tokens.border.radius.md};
      font-size: ${font.size.sm};
      border: 2px solid ${colors.gray[600]};
      color: ${tokens.colors["gray"][300]};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent ${colors.gray[600]} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2.5px));
        position: absolute;
        border-color: transparent transparent ${colors.darkGray[500]}
          transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,
    selectedQueryRow: css`
      background-color: ${colors.darkGray[500]};
    `,
    queryStatusCount: css`
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.gray[400]};
      background-color: ${colors.darkGray[300]};
      border-radius: 3px;
      font-variant-numeric: tabular-nums;
    `,
    filtersContainer: css`
      display: flex;
      gap: ${tokens.size[2.5]};
      & > button {
        cursor: pointer;
        padding: ${tokens.size[1.5]} ${tokens.size[2.5]};
        padding-right: ${tokens.size[1.5]};
        border-radius: ${tokens.border.radius.md};
        background-color: ${colors.darkGray[400]};
        font-size: ${font.size.sm};
        display: flex;
        align-items: center;
        line-height: ${font.lineHeight.sm};
        gap: ${tokens.size[1.5]};
        max-width: 160px;
        border: 1px solid ${colors.darkGray[200]};
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${border.radius.xs};
          outline: 2px solid ${colors.blue[800]};
        }
      }
    `,
    filterInput: css`
      padding: ${tokens.size[1.5]} ${tokens.size[2.5]};
      border-radius: ${tokens.border.radius.md};
      background-color: ${colors.darkGray[400]};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${tokens.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${colors.darkGray[200]};
      height: min-content;
      & > svg {
        width: ${tokens.size[3.5]};
        height: ${tokens.size[3.5]};
      }
      & input {
        font-size: ${font.size.sm};
        width: 100%;
        background-color: ${colors.darkGray[400]};
        border: none;
        padding: 0;
        line-height: ${font.lineHeight.sm};
        color: ${colors.gray[300]};
        &::placeholder {
          color: ${colors.gray[300]};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    filterSelect: css`
      padding: ${tokens.size[1.5]} ${tokens.size[2.5]};
      border-radius: ${tokens.border.radius.md};
      background-color: ${colors.darkGray[400]};
      display: flex;
      align-items: center;
      gap: ${tokens.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${colors.darkGray[200]};
      height: min-content;
      & > svg {
        width: ${tokens.size[3]};
        height: ${tokens.size[3]};
      }
      & > select {
        appearance: none;
        min-width: 100px;
        line-height: ${font.lineHeight.sm};
        font-size: ${font.size.sm};
        background-color: ${colors.darkGray[400]};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    actionsContainer: css`
      display: flex;
      gap: ${tokens.size[2.5]};
    `,
    actionsBtn: css`
      border-radius: ${tokens.border.radius.md};
      background-color: ${colors.darkGray[400]};
      width: 2.125rem; // 34px
      height: 2.125rem; // 34px
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${tokens.size[1.5]};
      max-width: 160px;
      border: 1px solid ${colors.darkGray[200]};
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${colors.darkGray[500]};
      }
      & svg {
        width: ${tokens.size[4]};
        height: ${tokens.size[4]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    overflowQueryContainer: css`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,
    queryRow: css`
      display: flex;
      align-items: center;
      padding: 0;
      background-color: inherit;
      border: none;
      cursor: pointer;
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
      &:hover .TSQDQueryHash {
        background-color: ${colors.darkGray[600]};
      }

      & .TSQDObserverCount {
        padding: 0 ${tokens.size[1]};
        user-select: none;
        min-width: ${tokens.size[8]};
        align-self: stretch !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${font.size.sm};
        font-weight: ${font.weight.medium};
        border-bottom: 1px solid ${colors.darkGray[700]};
      }
      & .TSQDQueryHash {
        user-select: text;
        font-size: ${font.size.sm};
        display: flex;
        align-items: center;
        min-height: ${tokens.size[8]};
        flex: 1;
        padding: ${tokens.size[1]} ${tokens.size[2]};
        font-family: 'Menlo', 'Fira Code', monospace !important;
        border-bottom: 1px solid ${colors.darkGray[400]};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .TSQDQueryDisabled {
        align-self: stretch;
        align-self: stretch !important;
        display: flex;
        align-items: center;
        padding: 0 ${tokens.size[3]};
        color: ${colors.gray[300]};
        background-color: ${colors.darkGray[600]};
        border-bottom: 1px solid ${colors.darkGray[400]};
        font-size: ${font.size.sm};
      }
    `,
    detailsContainer: css`
      flex: 1 1 700px;
      background-color: ${colors.darkGray[700]};
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
    `,
    detailsHeader: css`
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${colors.darkGray[600]};
      padding: ${tokens.size[2]} ${tokens.size[2]};
      font-weight: ${font.weight.medium};
      font-size: ${font.size.sm};
    `,
    detailsBody: css`
      margin: ${tokens.size[2]} 0px ${tokens.size[3]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${tokens.size[2]};
        line-height: ${font.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${font.size.sm};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${tokens.size[2]};
      }

      & code {
        font-family: 'Menlo', 'Fira Code', monospace !important;
        margin: 0;
        font-size: ${font.size.sm};
        line-height: ${font.lineHeight.sm};
      }
    `,
    queryDetailsStatus: css`
      border: 1px solid ${colors.darkGray[200]};
      border-radius: ${tokens.border.radius.md};
      font-weight: ${font.weight.medium};
      padding: ${tokens.size[1]} ${tokens.size[2.5]};
    `,
    actionsBody: css`
      flex-wrap: wrap;
      margin: ${tokens.size[3]} 0px ${tokens.size[3]} 0px;
      display: flex;
      gap: ${tokens.size[2]};
      padding: 0px ${tokens.size[2]};
      & > button {
        font-size: ${font.size.sm};
        padding: ${tokens.size[2]} ${tokens.size[2]};
        display: flex;
        border-radius: ${tokens.border.radius.md};
        border: 1px solid ${colors.darkGray[400]};
        background-color: ${colors.darkGray[600]};
        align-items: center;
        gap: ${tokens.size[2]};
        font-weight: ${font.weight.medium};
        line-height: ${font.lineHeight.sm};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${border.radius.xs};
          outline: 2px solid ${colors.blue[800]};
        }
        &:hover {
          background-color: ${colors.darkGray[500]};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${size[2]};
          height: ${size[2]};
          border-radius: ${tokens.border.radius.full};
        }
      }
    `,
    actionsSelect: css`
      font-size: ${font.size.sm};
      padding: ${tokens.size[2]} ${tokens.size[2]};
      display: flex;
      border-radius: ${tokens.border.radius.md};
      overflow: hidden;
      border: 1px solid ${colors.darkGray[400]};
      background-color: ${colors.darkGray[600]};
      align-items: center;
      gap: ${tokens.size[2]};
      font-weight: ${font.weight.medium};
      line-height: ${font.lineHeight.sm};
      color: ${tokens.colors.red[400]};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${colors.darkGray[500]};
      }
      & > span {
        width: ${size[2]};
        height: ${size[2]};
        border-radius: ${tokens.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${tokens.colors.red[400]} !important;
      }
    `,
    settingsMenu: css`
      position: absolute;
      top: calc(100% + ${tokens.size[2]});
      border-radius: ${tokens.border.radius.lg};
      border: 1px solid ${colors.gray[600]};
      right: 0;
      min-width: ${tokens.size[44]};
      background-color: ${colors.darkGray[400]};
      font-size: ${font.size.sm};
      color: ${colors.gray[500]};
      z-index: 7;
    `,
    settingsMenuHeader: css`
      padding: ${tokens.size[1.5]} ${tokens.size[2.5]};
      color: ${colors.gray[300]};
      font-weight: ${font.weight.medium};
    `,
    settingsMenuSection: css`
      border-top: 1px solid ${colors.gray[600]};
      display: flex;
      flex-direction: column;
      padding: ${tokens.size[1]} ${tokens.size[1]};

      & > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: ${tokens.size[2]} ${tokens.size[1.5]};
        font-size: ${font.size.sm};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${tokens.size[2]};
        border-radius: ${tokens.border.radius.md};
        &:hover {
          background-color: ${colors.darkGray[500]};
        }

        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${colors.blue[800]};
        }
      }

      & button:nth-child(4) svg {
        transform: rotate(-90deg);
      }

      & button:nth-child(3) svg {
        transform: rotate(90deg);
      }
    `
  };
};
delegateEvents(["click", "mousedown", "input"]);
/*! Bundled license information:

@tanstack/match-sorter-utils/build/lib/index.mjs:
  (**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @name match-sorter
   * @license MIT license.
   * @copyright (c) 2099 Kent C. Dodds
   * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
   *)
*/

export { Devtools, DevtoolsComponent, DevtoolsPanel, QueryRow, QueryStatus, QueryStatusCount, Devtools_default as default };
