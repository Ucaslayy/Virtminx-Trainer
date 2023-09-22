var algsGroups_OLL = {
  "Group 1": [1, 2],
  "Group 2": [3, 4, 5, 6],
  "Group 3": [7, 8, 9, 10],
  "Group 4": [11, 12, 13, 14, 15, 16],
  "Group 5": [17, 18],
  "Group 6": [19, 20],
  "Group 7": [21, 22],
  "Group 8": [23, 24, 25, 26],
  "Group 9": [27, 28, 29, 30],
  "Group 10": [31, 32, 33, 34],
  "Group 11": [35, 36, 37, 38],
  "Group 12": [39, 40],
  "Group 13": [41, 42],
  "Group 14": [43, 44, 45, 46],
  "Group 15": [47, 48, 49, 50],
  "Group 16": [51, 52, 53, 54],
  "Group 17": [55, 56, 57, 58],
  "Group 18": [59, 60, 61, 62, 63, 64],
  "Group 19": [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
  "Group 20": [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
  "Group 21": [89, 90, 91, 92, 93, 94, 95, 96, 97, 98],
  "Group 22": [99, 100],
  "Group 23": [101, 102],
  "Group 24": [103, 104, 105, 106],
  "Group 25": [107, 108, 109, 110],
  "Group 26": [111, 112, 113, 114],
  "Group 27": [115, 116, 117, 118],
  "Group 28": [119, 120],
  "Group 29": [121, 122],
  "Group 30": [123, 124, 125, 126],
  "Group 31": [127, 128, 129, 130],
  "Group 32": [131, 132, 133, 134],
  "Group 33": [135, 136, 137, 138],
  "Group 34": [139, 140, 141, 142, 143, 144],
  "Group 35": [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156],
  "Group 36": [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168],
  "Group 37": [169, 170, 171, 172, 173, 174, 175, 176, 177, 178],
};

var algsInfo_OLL = {
  1: {
    name: "1A",
    a: "(L R U R' U' R' F R F' L')",
  },
  2: {
    name: "1B",
    a: "(L F R' F' R U R U' R' L')",
  },
  3: {
    name: "2A",
    a: "(R U R' U R U R' U2' R U' R')",
  },
  4: {
    name: "2B",
    a: "(R bR R' F R bR' R' F')",
  },
  5: {
    name: "2C",
    a: "(R U2' R' U' R U2' R')",
  },
  6: {
    name: "2D",
    a: "(R' F R bR' R' F' R bR)",
  },
  7: {
    name: "3A+",
    a: "(R U R' U R U2' R')",
  },
  8: {
    name: "3A-",
    a: "(R' U' R U' R' U2 R)",
  },
  9: {
    name: "3B+",
    a: "(R U2 R' U' R U' R')",
  },
  10: {
    name: "3B-",
    a: "(R' U2' R U R' U R)",
  },
  11: {
    name: "4A",
    a: "(R U R' U R U' R' U R U2' R')",
  },
  12: {
    name: "4B",
    a: "(R' U2' R U R' U' R U R' U R)",
  },
  13: {
    name: "4C",
    a: "(R U R' U R U R' U' R U2' R')",
  },
  14: {
    name: "4D",
    a: "(R U2' R' U2' R U2 R' U2' R U' R')",
  },
  15: {
    name: "4E+",
    a: "(R' U2 R U R' U' R U R' U2 R)",
  },
  16: {
    name: "4E-",
    a: "(R' U2' R2 U R2' U R2 U2' R')",
  },
  17: {
    name: "5+",
    a: "(R U R' U2 R U2' R' U R U2' R')",
  },
  18: {
    name: "5-",
    a: "(R U2 R' U' R U2 R' U2' R U' R')",
  },
  19: {
    name: "6A",
    a: "(R U2' R' F R' F' R U' R U2' R')",
  },
  20: {
    name: "6B",
    a: "(F R U' R' U2 R U R' F')",
  },
  21: {
    name: "7A",
    a: "(R U R' U' R' F R F')",
  },
  22: {
    name: "7B",
    a: "(F R U R' U' F')",
  },
  23: {
    name: "8A+",
    a: "(R' U' R' F R F' U R)",
  },
  24: {
    name: "8A-",
    a: "(R' U2' F' U F U R)",
  },
  25: {
    name: "8B+",
    a: "(R U R2' U' R' F R U R U' F')",
  },
  26: {
    name: "8B-",
    a: "(F R U R' U' R U R' U R U2' R' F')",
  },
  27: {
    name: "9A+",
    a: "(R' F R U R' U' F' U R)",
  },
  28: {
    name: "9A-",
    a: "(R U R' F' U' F U R U2' R')",
  },
  29: {
    name: "9B+",
    a: "(R' U' F' U' F U2 R)",
  },
  30: {
    name: "9B-",
    a: "(F U R U R' U2' F')",
  },
  31: {
    name: "10A+",
    a: "(R U R' U2 R U' R' U2' R' F R F')",
  },
  32: {
    name: "10A-",
    a: "(R' F' U' F U2' R U R' U2 R)",
  },
  33: {
    name: "10B+",
    a: "(R U' R' U2' R' F R F' U2 R U R')",
  },
  34: {
    name: "10B-",
    a: "(R U2 R' U R' F R F' R U2 R')",
  },
  35: {
    name: "11A+",
    a: "(R' U' F' U' F R2 U R2' U R2 U2' R')",
  },
  36: {
    name: "11A-",
    a: "(R U2 R' U R' F' U' F U R2 U2 R')",
  },
  37: {
    name: "11B+",
    a: "(R' U2' R' F R F' R U R' U R)",
  },
  38: {
    name: "11B-",
    a: "(R' U' R' L F R F' L' U R)",
  },
  39: {
    name: "12+",
    a: "(F R U' R' U2 R U R' U R U' R' F')",
  },
  40: {
    name: "12-",
    a: "(R' U2' R U' R' U F' U F U R)",
  },
  41: {
    name: "13+",
    a: "(R' F R U2 R' F' R F U2' F')",
  },
  42: {
    name: "13-",
    a: "(F R' F' U2' F R F' R' U2 R)",
  },
  43: {
    name: "14A+",
    a: "(F R U2 R' U2' F')",
  },
  44: {
    name: "14A-",
    a: "(BR' R' U2' R U2 BR)",
  },
  45: {
    name: "14B+",
    a: "(R' U2 R U2 R' F' U F R)",
  },
  46: {
    name: "14B-",
    a: "(R' F' U' F R U2' R' U2' R)",
  },
  47: {
    name: "15A+",
    a: "(R' F R U R' F' R F U' F')",
  },
  48: {
    name: "15A-",
    a: "(F R' F' U' F R F' R' U R)",
  },
  49: {
    name: "15B+",
    a: "(L' F U R U R' U2' F' L)",
  },
  50: {
    name: "15B-",
    a: "(F R' F' U' F R F' R' U' R U R' U R)",
  },
  51: {
    name: "16A+",
    a: "(R' F R2 U R' U R U2' R2' F' R)",
  },
  52: {
    name: "16A-",
    a: "(R' U2' R' F R F' R U' R' U2' R)",
  },
  53: {
    name: "16B+",
    a: "(F R U2 R' U' F R' F' R U' F')",
  },
  54: {
    name: "16B-",
    a: "(R' U' R U' R' F U R U' R' F' U2 R)",
  },
  55: {
    name: "17A+",
    a: "(R' U2' R' F R F' U2 R)",
  },
  56: {
    name: "17A-",
    a: "(F U R U2' R' U2 R U R' F')",
  },
  57: {
    name: "17B+",
    a: "(BL' F R U R' U' F' BL)",
  },
  58: {
    name: "17B-",
    a: "(L BR' R' U' R U BR L')",
  },
  59: {
    name: "18A",
    a: "(R' F U R U' R2' F' R2 U R' U' R)",
  },
  60: {
    name: "18B",
    a: "(F R' F' L F R2 U R' U' F' L')",
  },
  61: {
    name: "18C",
    a: "(F U R U' R' U R U' R' F')",
  },
  62: {
    name: "18D",
    a: "(R' U2' R U R' F R' F' R U R)",
  },
  63: {
    name: "18E+",
    a: "R' F' U2' F R U R' U R)",
  },
  64: {
    name: "18E-",
    a: "(R' F' U' F U' R U R' U R)",
  },
  65: {
    name: "19A+",
    a: "(F U R U' R' U R U R' U2' F')",
  },
  66: {
    name: "19A-",
    a: "(F U2 R U' R' U' R U R' U' F')",
  },
  67: {
    name: "19B+",
    a: "(R U2' R' F' U' F U' R U' R')",
  },
  68: {
    name: "19B-",
    a: "(R' U2' R U R' F' U' F R U R' U R)",
  },
  69: {
    name: "19C+",
    a: "y' (R' U2 R BR' R BR R' U2 R' U R)",
  },
  70: {
    name: "19C-",
    a: "(R U2' R' F R' F' R U2' R U' R')",
  },
  71: {
    name: "19D+",
    a: "(F U R U R' U' R U R' U2' F')",
  },
  72: {
    name: "19D-",
    a: "(BR' U' R' U' R U R' U' R U2 BR)",
  },
  73: {
    name: "19E+",
    a: "(F U R U' R U R' U R U2' R2' F')",
  },
  74: {
    name: "19E-",
    a: "(R' U' R' F R2 U' R' U2 R U R' F' R)",
  },
  75: {
    name: "19F+",
    a: "(R U2' R' U2' R U R' U2' R' F R F')",
  },
  76: {
    name: "19F-",
    a: "(R' U2' R2 U R2' U R U2' R' F R F')",
  },
  77: {
    name: "20A+",
    a: "(BR' R' U2' R U2 R' U' R U BR)",
  },
  78: {
    name: "20A-",
    a: "(F R U2 R' U2' R U R' U' F')",
  },
  79: {
    name: "20B+",
    a: "(R' F' U' F U R U2' R' U2' R U R' U R)",
  },
  80: {
    name: "20B-",
    a: "(R' F' U' F U R2 U2 R' U' R U' R')",
  },
  81: {
    name: "20C+",
    a: "(BR' U2' R' U R U' R' U R U BR)",
  },
  82: {
    name: "20C-",
    a: "(F U2 R U' R' U R U' R' U' F')",
  },
  83: {
    name: "20D+",
    a: "(R' F R' F' R2 U' R' F' U' F R)",
  },
  84: {
    name: "20D-",
    a: "(F R U' R' U R U2' R' U' R U' R' F')",
  },
  85: {
    name: "20E+",
    a: "(F R U R' U' R U2 R' U' R U' R' F')",
  },
  86: {
    name: "20E-",
    a: "(R' U2' R F U R' U R2 U2' R' F')",
  },
  87: {
    name: "20F+",
    a: "(R U2' R' U' R U' R' U' R' F R F')",
  },
  88: {
    name: "20F-",
    a: "(R' U' R F U' R' U2 R U2 R U' R' F')",
  },
  89: {
    name: "21A+",
    a: "(F U2 R U2' R' U R U' R' F')",
  },
  90: {
    name: "21A-",
    a: "(BR' U2' R' U2 R U' R' U R BR)",
  },
  91: {
    name: "21B+",
    a: "(R' U2' F' U F U' R U R' U R)",
  },
  92: {
    name: "21B-",
    a: "(R' F' U' F R U2' R' U2 R U' R' U2 R)",
  },
  93: {
    name: "21C+",
    a: "(R' F' U2' F2 R U R' U' F' U2 R)",
  },
  94: {
    name: "21C-",
    a: "(BR' U' R' U R U2' R' U2 R U' R' U R BR)",
  },
  95: {
    name: "21D+",
    a: "(R' F' U' F U2' R U2 R' U R)",
  },
  96: {
    name: "21D-",
    a: "(BR' U2' R' U2 R U2' R' U2 R BR)",
  },
  97: {
    name: "21E+",
    a: "(BR' R' U' R U R' U2' R U2 BR)",
  },
  98: {
    name: "21E-",
    a: "(F R U R' U' R U2 R' U2' F')",
  },
  99: {
    name: "22A",
    a: "(R U2 R2' F R F' R U2' R')",
  },
  100: {
    name: "22B",
    a: "(F R' F' R U R U' R')",
  },
  101: {
    name: "23A",
    a: "(R U2 R' U R U' R' U2' R' F R F')",
  },
  102: {
    name: "23B",
    a: "(R U2' R' U' F R' F' R U' R U' R')",
  },
  103: {
    name: "24A+",
    a: "(F U R U' R' F')",
  },
  104: {
    name: "24A-",
    a: "(R' U' F' U F R)",
  },
  105: {
    name: "24B+",
    a: "(R U BR' U' R' U R BR R')",
  },
  106: {
    name: "24B-",
    a: "(R' U' F U R U' R' F' R)",
  },
  107: {
    name: "25A+",
    a: "(F R U R2' U' F' U F R F')",
  },
  108: {
    name: "25A-",
    a: "(F R U R2' U' F' U F R F')",
  },
  109: {
    name: "25B+",
    a: "(R' U2 R U2 R' F R' F' R U R)",
  },
  110: {
    name: "25B-",
    a: "(F R' F' R U2 R U R' U' R U2' R')",
  },
  111: {
    name: "26A+",
    a: "(R U R' U R' F R F' U R U2 R')",
  },
  112: {
    name: "26A-",
    a: "(F R U R2' U' F' U F R F')",
  },
  113: {
    name: "26B+",
    a: "(F U R U' BR R' F' R BR' R')",
  },
  114: {
    name: "26B-",
    a: "(BR' U' R' U F' R BR R' F R)",
  },
  115: {
    name: "27A+",
    a: "(BL' F R' F' R U R U' R' BL)",
  },
  116: {
    name: "27A-",
    a: "(L BR' R BR R' U' R' U R L')",
  },
  117: {
    name: "27B+",
    a: "(F R' F' R U2' R U' R' U R U2 R')",
  },
  118: {
    name: "27B-",
    a: "(R' F R F' R' F R F' R U R' U' R U R')",
  },
  119: {
    name: "28+",
    a: "x' (DR R2 U' R' U R' DR')",
  },
  120: {
    name: "28-",
    a: "(BR' R2' F R F' R BR)",
  },
  121: {
    name: "29+",
    a: "(F U2 R U' R' U R U2' R' F')",
  },
  122: {
    name: "29-",
    a: "(BR' U2' R' U R U' R' U2 R BR)",
  },
  123: {
    name: "30A+",
    a: "(F U2 R U2' R' F')",
  },
  124: {
    name: "30A-",
    a: "(BR' U2' R' U2 R BR)",
  },
  125: {
    name: "30B+",
    a: "(BR' L R' F R' F' R2 L' BR)",
  },
  126: {
    name: "30B-",
    a: "(R U' R' U R U' R' U' F R' F' R2 U R')",
  },
  127: {
    name: "31A+",
    a: "(F R' F' R U2' R U2 R')",
  },
  128: {
    name: "31A-",
    a: "(BR' R' F R' F' R2 BR)",
  },
  129: {
    name: "31B+",
    a: "(F U R U R' U' R U' R' F')",
  },
  130: {
    name: "31B-",
    a: "(BR' U' R' U' R U R' U R BR)",
  },
  131: {
    name: "32A+",
    a: "(R U R' U' R' F R2 U R' U' F')",
  },
  132: {
    name: "32A-",
    a: "(R' U' R U R BR' R2' U' R U BR)",
  },
  133: {
    name: "32B+",
    a: "(F U F' R' F R U' R' F' R) ",
  },
  134: {
    name: "32B-",
    a: "(R U2' R2' F R F' R U2 R')",
  },
  135: {
    name: "33A+",
    a: "(F U R U' R' F' R' U2' R U R' U R)",
  },
  136: {
    name: "33A-",
    a: "(R' U' R U' R' U F' U' F R U R' U R)",
  },
  137: {
    name: "33B+",
    a: "(F U R U R' U' R U R' U' R U' R' F')",
  },
  138: {
    name: "33B-",
    a: "(BR' U' R' U' R U R' U' R U R' U R BR)",
  },
  139: {
    name: "34A",
    a: "(F R' F' R U R U R' U R U' R' U R U2 R')",
  },
  140: {
    name: "34B",
    a: "(F R' F' R U2' R U' R' U' R U' R')",
  },
  141: {
    name: "34C",
    a: "(R U R' U R' F R F' U R U2' R' U R U2' R')",
  },
  142: {
    name: "34D",
    a: "(F R' F' R U R U R' U R U2 R')",
  },
  143: {
    name: "34E+",
    a: "(F R' F' R U2 R' U' R2 U' R2' U2 R)",
  },
  144: {
    name: "34E-",
    a: "(F R' F' R U R U' R2' U2' R U R' U R)",
  },
  145: {
    name: "35A+",
    a: "x' (DR R U' R U R' U' R U R2' DR')",
  },
  146: {
    name: "35A-",
    a: "(F R' F' R U R U R' U' R U' R')",
  },
  147: {
    name: "35B+",
    a: "(R' F R F' U' F R' F' R2 U' R')",
  },
  148: {
    name: "35B-",
    a: "(R U2' R2' F' U' F R2 U2' R2' U2' R)",
  },
  149: {
    name: "35C+",
    a: "(R' F R2 BR' R2' F' R2 BR R')",
  },
  150: {
    name: "35C-",
    a: "(R BR' R2' F R2 BR R2' F' R)",
  },
  151: {
    name: "35D+",
    a: "(F R U R' U' R U R' U' F')",
  },
  152: {
    name: "35D-",
    a: "(BR' R' U' R U R' U' R U BR)",
  },
  153: {
    name: "35E+",
    a: "(R' U' R' F R F' R' F R F' U R)",
  },
  154: {
    name: "35E-",
    a: "(BL' F R U R' U' R U R' U' F' BL)",
  },
  155: {
    name: "35F+",
    a: "(F' U' F2 R' F' R U' R' F R F')",
  },
  156: {
    name: "35F-",
    a: "(R U R2' F R F' U F R' F' R)",
  },
  157: {
    name: "36A+",
    a: "(F U2' F' U' R' F R U2' R' F' R)",
  },
  158: {
    name: "36A-",
    a: "(R U R' U2 R' F R F' R U2 R')",
  },
  159: {
    name: "36B+",
    a: "(F R' F' U' F U R2 U R' U' R U' R' F')",
  },
  160: {
    name: "36B-",
    a: "(BR' U2' R' U2' R U R' U2' R U BR)",
  },
  161: {
    name: "36C+",
    a: "(R' U' R U2' R' U F' U F U R)",
  },
  162: {
    name: "36C-",
    a: "(R U R' U2 R U' BR U' BR' U' R')",
  },
  163: {
    name: "36D+",
    a: "(R U2' R' U' F R' F' R2 U2' R')",
  },
  164: {
    name: "36D-",
    a: "(R' U2 R U2 R2' F R F' U R)",
  },
  165: {
    name: "36E+",
    a: "(L F R U R' U' R U R' U' F' L')",
  },
  166: {
    name: "36E-",
    a: "(BL' BR' R' U' R U R' U' R U BR BL)",
  },
  167: {
    name: "36F+",
    a: "(R U2' R2' U2' R U' R' U2' F R F')",
  },
  168: {
    name: "36F-",
    a: "(F' R U2' R2' F R F' R U2 R' F)",
  },
  169: {
    name: "37A+",
    a: "(R' U2' F R' F' R2 U R' U R)",
  },
  170: {
    name: "37A-",
    a: "(R U2' R2' F R F' U2' R U' R')",
  },
  171: {
    name: "37B+",
    a: "(F R' F' R U2 R U' R' U R U2' R')",
  },
  172: {
    name: "37B-",
    a: "(R U2 R' U' R U R' U2' R' F R F')",
  },
  173: {
    name: "37C+",
    a: "(R U R' U2 F R' F' R2 U2 R')",
  },
  174: {
    name: "37C-",
    a: "(R' U' R U' R2' F R F' U2 R)",
  },
  175: {
    name: "37D+",
    a: "(F R' F' U' R U2' R U2 R2' U R)",
  },
  176: {
    name: "37D-",
    a: "(R U2 R' U' R U2 R' F' U' F R U2' R')",
  },
  177: {
    name: "37E+",
    a: "(F R' F' R U2' R U2' R' U R U2' R')",
  },
  178: {
    name: "37E-",
    a: "(R' U' R U' R' U F' U' F U2 R)",
  },
};
