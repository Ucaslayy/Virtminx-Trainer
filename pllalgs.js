var algsGroups_PLL = {
  "Group A": [1, 2, 3, 4],
  "Group B": [5, 6, 7, 8],
  "Group C": [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "Group D": [21, 22],
  "Group E": [23, 24, 25],
  "Group F": [26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
  "Group G": [36, 37, 38, 39],
  "Group H": [40, 41, 42, 43],
  "Group I": [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  "Group J": [56, 57, 58, 59, 60, 61],
  "Group K": [62, 63, 64, 65],
  "Group L": [66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
  "Group M": [76],
  "Group N": [77, 78, 79, 80],
  "Group O": [81],
  "Group P": [82, 83, 84, 85, 86, 87, 88, 89],
  "Group Q": [90, 91, 92, 93],
  "Group R": [94, 95, 96, 97, 98, 99, 100, 101],
  "Group S": [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
  "Group T": [114, 115, 116, 117, 118, 119, 120],
  "Group U": [121, 122, 123, 124],
  "Group V": [125, 126, 127, 128, 129, 130, 131, 132],
  "Group W": [133],
  "Group X": [134, 135, 136, 137, 138, 139, 140, 141, 142, 143],
  "Group Y": [144, 145, 146, 147, 148, 149],
  "Group Z": [150, 151, 152],
};

var algsInfo_PLL = {
  1: {
    name: "A1+",
    a: "(F' R' F R U' R' F' R2 U R' U' R' F R)",
  },
  2: {
    name: "A1-",
    a: "(R' F' R U R U' R2' F R U R' F' R F)",
  },
  3: {
    name: "A2+",
    a: "(BR' R' U L U' R' U L' U' R2 BR) ",
  },
  4: {
    name: "A2-",
    a: "(BR' R2' U L U' R U L' U' R BR)",
  },
  5: {
    name: "B1+",
    a: "(R U R' U' R' U2' R U R U' R2' U2 R)",
  },
  6: {
    name: "B1-",
    a: "(R' U' R U R U2 R' U' R' U R2 U2' R')",
  },
  7: {
    name: "B2+",
    a: "(R2 U R2' U2 R U2' R U R' U' R U' R2' U2 R U R')",
  },
  8: {
    name: "B2-",
    a: "(R2' U' R2 U2' R' U2 R' U' R U R' U R2 U2' R' U' R)",
  },
  9: {
    name: "C1+",
    a: "(R U2 R' U' R U2' R' U R U R2' U' R U' R U R2' U R)",
  },
  10: {
    name: "C1-",
    a: "(R' U2' R U R' U2 R U' R' U' R2 U R' U R' U' R2 U' R')",
  },
  11: {
    name: "C2+",
    a: "(R' U' R U' R U2 R2' U' R2 U' R2' U2' R U R' U2 R) ",
  },
  12: {
    name: "C2-",
    a: "(R U R' U R' U2' R2 U R2' U R2 U2 R' U' R U2' R') ",
  },
  13: {
    name: "C3+",
    a: "(R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2 R2' U2' R2)",
  },
  14: {
    name: "C3-",
    a: "(R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2' R2 U2 R2')",
  },
  15: {
    name: "C4+",
    a: "(R2' U2' R2 U' R2' U2' R2 U' R2' U2 R2 U R2' U2 R2)",
  },
  16: {
    name: "C4-",
    a: "(R2' U2 R2 U R2' U2 R2 U R2' U2' R2 U' R2' U2' R2)",
  },
  17: {
    name: "C5+",
    a: "(R' U2' R F U' R' U' R U F' U R' U2 R)",
  },
  18: {
    name: "C5-",
    a: "(R U2 R' BR' U R U R' U' BR U' R U2' R')",
  },
  19: {
    name: "C6+",
    a: "(R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R')",
  },
  20: {
    name: "C6-",
    a: "(R' U R U2' R2' U' R U2' R' U R U R' U R U R)",
  },
  21: {
    name: "D+",
    a: "(R U2 R' U' R U R' U R U2' R' U2 R U2 R')",
  },
  22: {
    name: "D-",
    a: "(R' U2' R U R' U' R U' R' U2 R U2' R' U2' R)",
  },
  23: {
    name: "E1",
    a: "(R U R' U R' U' R F' R U R' U' R' F R2 U' R2' U R)",
  },
  24: {
    name: "E2",
    a: "(x') (R U' R' DR R U R' DR' R U R' DR R U' R' DR')",
  },
  25: {
    name: "E3",
    a: "(L' R U2 R' U' R U R' U' R U R' U' R U' R' L)",
  },
  26: {
    name: "F1+",
    a: "(R2 U2 R2' U R2 U2 R2')",
  },
  27: {
    name: "F1-",
    a: "(R2 U2' R2' U' R2 U2' R2')",
  },
  28: {
    name: "F2+",
    a: "(R U R' U2 R' U2' R2 U' R' U R' U2 R)",
  },
  29: {
    name: "F2-",
    a: "(R' U' R U2' R U2 R2' U R U' R U2' R')",
  },
  30: {
    name: "F3+",
    a: "(R' U2' R U' R U R2' U2 R U2' R U' R')",
  },
  31: {
    name: "F3-",
    a: "(R U2 R' U R' U' R2 U2' R' U2 R' U R)",
  },
  32: {
    name: "F4+",
    a: "(R U R' U R2 U2' R2' U2' R U2 R U2 R' U2' R')",
  },
  33: {
    name: "F4-",
    a: "(R' U' R U' R2' U2 R2 U2 R' U2' R' U2' R U2 R)",
  },
  34: {
    name: "F5+",
    a: "(R U2 R U2' R' U2' R' U2 R2 U2 R2' U' R U' R')",
  },
  35: {
    name: "F5-",
    a: "(R' U2' R' U2 R U2 R U2' R2' U2' R2 U R' U R)",
  },
  36: {
    name: "G1+",
    a: "(R' U2 R2 U2' R' U2 R' U R U2 R' U R2 U2 R2' U2' R)",
  },
  37: {
    name: "G1-",
    a: "(R U2' R2' U2 R U2' R U' R' U2' R U' R2' U2' R2 U2 R')",
  },
  38: {
    name: "G2+",
    a: "(R U' R2' U' F U F' R2 U2' R' U R U2 R' F U' F')",
  },
  39: {
    name: "G2-",
    a: "(F U2' R' U' R F' R' U' R F U' R' U2' R U2 F')",
  },
  40: {
    name: "H1+",
    a: "(R' DR' R U R' DR R U)x3",
  },
  41: {
    name: "H1-",
    a: "(R' DR' R U' R' DR R U')x3",
  },
  42: {
    name: "H2+",
    a: "(R2 U2 R2' U' R2 U' R2' y' R2' U' R2 U' R2' U2 R2)",
  },
  43: {
    name: "H2-",
    a: "(R2' U2' R2 U R2' U R2 y R2 U R2' U R2 U2' R2')",
  },
  44: {
    name: "I1+",
    a: "(R U2 R' U R' U' R U F' R U R' U' R' F U R2 U R')",
  },
  45: {
    name: "I1-",
    a: "(R2 U2' R2' U' R2 bR2' U R2' U' R2 U' bR2 U' R2')",
  },
  46: {
    name: "I2+",
    a: "(R U' R2' U' F' R U R U' R' F U' R' U R U' R U2' R')",
  },
  47: {
    name: "I2-",
    a: "(R2 U bR2' U R2' U R2 U' bR2 R2' U R2 U2 R2')",
  },
  48: {
    name: "I3+",
    a: "(R' U2 R2 U2 R' U2' R' U2' R U2 R U R' U2' R U' R')",
  },
  49: {
    name: "I3-",
    a: "(R U2' R2' U2' R U2 R U2 R' U2' R' U' R U2 R' U R)",
  },
  50: {
    name: "I4+",
    a: "(R' U' R' U2' F' R U R U' R' F R' U2 R U R)",
  },
  51: {
    name: "I4-",
    a: "(R' U2 R U R' U R' U2' R U R' U R2 U' R' U2 R)",
  },
  52: {
    name: "I5+",
    a: "(R' U' R' U2' R F' R U R' U' R' F U2 R U R)",
  },
  53: {
    name: "I5-",
    a: "(R' U2' R U R2' U' R U' R' U2 R U' R U' R' U2' R)",
  },
  54: {
    name: "I6+",
    a: "x' (R2 U2' R2' F' R2 U2 R2' F2 R2 U2' R2' F' R2 U2 R2')",
  },
  55: {
    name: "I6-",
    a: "(R2' F2 R2 U' R2' F2' R2 U2 R2' F2 R2 U' R2' F2' R2)",
  },
  56: {
    name: "J1+",
    a: "(R U R' F' R U R' U' R' F R2 U' R')",
  },
  57: {
    name: "J1-",
    a: "(F U' R' F R2 U' R' U' R U R' F' R U R' F')",
  },
  58: {
    name: "J2+",
    a: "(R' U2' R U2 R' U R U R U2 R' U' R U' R2' U' R)",
  },
  59: {
    name: "J2-",
    a: "(R U2 R' U2' R U' R' U' R' U2' R U R' U R2 U R')",
  },
  60: {
    name: "J3+",
    a: "(R U R' U' R' U2' R U R U R2' U R2 U2 R2' U2' R)",
  },
  61: {
    name: "J3-",
    a: "(R U' R2' U' R U' R' U2 R U R U R' U2 R U2' R')",
  },
  62: {
    name: "K1+",
    a: "(R2' U2 R2 U R2' U' R2 U R2' U' R2 U R2' U2 R2)",
  },
  63: {
    name: "K1-",
    a: "(R2 U2' R2' U' R2 U R2' U' R2 U R2' U' R2 U2' R2')",
  },
  64: {
    name: "K2+",
    a: "(R' U2 R U' R' U2 R U2' R' U' R U2' R' U R U2' R' U R)",
  },
  65: {
    name: "K2-",
    a: "(R U2' R' U R U2' R' U2 R U R' U2 R U' R' U2 R U' R')",
  },
  66: {
    name: "L1",
    a: "(R' U2 R U R' U R U' R' U2 R U' R U R' U R U2' R')",
  },
  67: {
    name: "L2",
    a: "(R' U2' R U' R' U R U R' U R2 U R' U R U R' U' R U2' R')",
  },
  68: {
    name: "L3+",
    a: "(F U2' F' U2' R F R' U' R F' U2' R' U' R U2' R')",
  },
  69: {
    name: "L3-",
    a: "(R U R' U' R' U2 R U R U R2' U R U' R U R' U' R U2' R')",
  },
  70: {
    name: "L4+",
    a: "(R U R U R' U R' U R U' R U2' R' U2' R' U' R U2 R')",
  },
  71: {
    name: "L4-",
    a: "(R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R')",
  },
  72: {
    name: "L5+",
    a: "(R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R')",
  },
  73: {
    name: "L5-",
    a: "(R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R)",
  },
  74: {
    name: "L6+",
    a: "(R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R)",
  },
  75: {
    name: "L6-",
    a: "(R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R')",
  },
  76: {
    name: "M",
    a: "(R' U2 R U2 R' U' F R2 U R2' U R2 U2' R2' F' R)",
  },
  77: {
    name: "N1+",
    a: "(R U2 R' F' R U R' U' R' F R2 U2' R') ",
  },
  78: {
    name: "N1-",
    a: "(R' U2 R' U2' R U' R' U2' R U2 R)",
  },
  79: {
    name: "N2+",
    a: "R L U2 L' U R' L U' R U2 L' U2 R')",
  },
  80: {
    name: "N2-",
    a: "(R' L' U2' R U' L R' U L' U2' R U2' L)",
  },
  81: {
    name: "solved",
    a: "",
  },
  82: {
    name: "P1+",
    a: "(R' F R2 U R' U R U2' R' U R' F' R F U' F')",
  },
  83: {
    name: "P1-",
    a: "(R' U2' F' U2 F R2 U2' R' F R' F' R2 U2 R')",
  },
  84: {
    name: "P2+",
    a: "(F U F' R' F R U' R U2 R' U' R U' R2' F' R)",
  },
  85: {
    name: "P2-",
    a: "(BR' R' U2' R U R' U R2 x' U L' U' R' U L)",
  },
  86: {
    name: "P3+",
    a: "(F R U' R' U' R U R U2 R' U' R U' R2' F')",
  },
  87: {
    name: "P3-",
    a: "(BR' R' U R U R' U' R' U2' R U R' U R2 BR)",
  },
  88: {
    name: "P4+",
    a: "(F R2 U R' U R U2' R' U' R' U R U R' F')",
  },
  89: {
    name: "P4-",
    a: "(BR' R2' U' R U' R' U2 R U R U' R' U' R BR)",
  },
  90: {
    name: "Q1+",
    a: "(R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2)",
  },
  91: {
    name: "Q1-",
    a: "(R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2')",
  },
  92: {
    name: "Q2+",
    a: "(R' U2' R U' R' U2' R2 U2' R' U' R U2' R')",
  },
  93: {
    name: "Q2-",
    a: "(R U2 R' U R U2 R2' U2 R U R' U2 R)",
  },
  94: {
    name: "R1+",
    a: "(R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R)",
  },
  95: {
    name: "R1-",
    a: "(R U2' R' U R2 U2' R2' U' R U R U2 R' U R')",
  },
  96: {
    name: "R2+",
    a: "(R' U R' U2 R U R U' R2' U2' R2 U R' U2' R)",
  },
  97: {
    name: "R2-",
    a: "(R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R')",
  },
  98: {
    name: "R3+",
    a: "(R U R2' U R U R U' R' U' R U' R2' U' R U' R' U R)",
  },
  99: {
    name: "R3-",
    a: "(R' U' R2 U' R' U' R' U R U R' U R2 U R' U R U' R')",
  },
  100: {
    name: "R4+",
    a: "(R' U' R U R' U R2 U R' U R U R' U' R' U' R2 U' R')",
  },
  101: {
    name: "R4-",
    a: "(R U R' U' R U' R2' U' R U' R' U' R U R U R2' U R)",
  },
  102: {
    name: "S1+",
    a: "(R' U2' R U R' U R U R U2' R' U2' R U' R')",
  },
  103: {
    name: "S1-",
    a: "(R' U' R U2' R' U2' R U R U R' U R U2' R')",
  },
  104: {
    name: "S2+",
    a: "(R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R)",
  },
  105: {
    name: "S2-",
    a: "(R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R')",
  },
  106: {
    name: "S3+",
    a: "(R2 U2' R2' U' R F' R U R2' U' R' F R3 U2' R2')",
  },
  107: {
    name: "S3-",
    a: "(R' U' R U' R2' F' R U R U' R' F U R U2' R' U2' R)",
  },
  108: {
    name: "S4+",
    a: "(R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U R2' U2 R2)",
  },
  109: {
    name: "S4-",
    a: "(R2' U2 R2 U R2' U2 R2 U' R2' U2' R2 U' R2' U2' R2)",
  },
  110: {
    name: "S5+",
    a: "(R' U2' R U' F U' R' U R U F' R' U2 R)",
  },
  111: {
    name: "S5-",
    a: "(R U2 R' U BR' U R U' R' U' BR R U2' R')",
  },
  112: {
    name: "S6+",
    a: "(R U R U R' U R U R' U2' R U' R2' U2' R U R')",
  },
  113: {
    name: "S6-",
    a: "(R' U' R' U' R U' R' U' R U2 R' U R2 U2 R' U' R)",
  },
  114: {
    name: "T1",
    a: "(R U R' U' R' F R2 U' R' U' R U R' F')",
  },
  115: {
    name: "T2+",
    a: "(R' U2' R U2 R' F R U R' U' R' F' R2)",
  },
  116: {
    name: "T2-",
    a: "(R2' F R U R U' R' F' R U2' R' U2 R)",
  },
  117: {
    name: "T3+",
    a: "(R2' U2 R2 U R2' U' R2 U R2' U2 R2)",
  },
  118: {
    name: "T3-",
    a: "(R2 U2' R2' U' R2 U R2' U' R2 U2' R2')",
  },
  119: {
    name: "T4+",
    a: "(R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F')",
  },
  120: {
    name: "T4-",
    a: "(R' U' R U2' R2' U2' R2 U' R2' U2' R2 U R' U R)",
  },
  121: {
    name: "U1+",
    a: "(R' U' R U' R U R2' U R U' R U' R')",
  },
  122: {
    name: "U1-",
    a: "(R U R' U R' U' R2 U' R' U R' U R) ",
  },
  123: {
    name: "U2+",
    a: "(R U R' U2 R' U' R U' R U R2' U R U' R U2' R')",
  },
  124: {
    name: "U2-",
    a: "(R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R')",
  },
  125: {
    name: "V1+",
    a: "(R' U2 R' dR' R U' R' dR R U R U' R' U' R)",
  },
  126: {
    name: "V1-",
    a: "(R U2 R2' F R F' R U' R' F' U F R U' R')",
  },
  127: {
    name: "V2+",
    a: "(R' U R U R' U' R' dR' R U R' dR R U2' R)",
  },
  128: {
    name: "V2-",
    a: "(R U' R' F U R U' R' F' R U R' F' U' F R U R')",
  },
  129: {
    name: "V3+",
    a: "(R U R2 U' R' U' R U R' U' R' U R2' U R U' R)",
  },
  130: {
    name: "V3-",
    a: "(R' U2' R U R U' R' F R' U2 R U2' F' R U R')",
  },
  131: {
    name: "V4+",
    a: "(R' U R' U' R2 U' R U R U' R' U R U R2' U' R')",
  },
  132: {
    name: "V4-",
    a: "(R U' R' F U2 R' U2' R F' R U R' U' R' U2 R)",
  },
  133: {
    name: "W",
    a: "(R' U2' R' U2 R U2 R U' R2' U2 R2 U2 R' U R)",
  },
  134: {
    name: "X1",
    a: "(F U2 R U2' R' U R U R' U2' F' R' U' R U2' R' U2' R)",
  },
  135: {
    name: "X2",
    a: "(F R U R' F U R' U' F' U R2 U2' R' F')",
  },
  136: {
    name: "X3",
    a: "(R' U' R U' R' U2 R2 U R' U2 R' U2' R2 U' R' U2 R' U R)",
  },
  137: {
    name: "X4",
    a: "(R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R)",
  },
  138: {
    name: "X5+",
    a: "(R' U R U2 R' U2 R U R2' U' R U' R' U' R U2 R' U R2)",
  },
  139: {
    name: "X5-",
    a: "(R2' U' R U2' R' U R U R' U R2 U' R' U2' R U2' R' U' R)",
  },
  140: {
    name: "X6+",
    a: "(R' U2 R' U' R2 U' R' U' R U R' U R' U R2 U' R' U2' R)",
  },
  141: {
    name: "X6-",
    a: "(R U2' R U R2' U R U R' U' R U' R U' R2' U R U2 R')",
  },
  142: {
    name: "X7+",
    a: "(R2 U' R2' U' F U F' R2 U2' R2' U R2 U2 R2' F U' F')",
  },
  143: {
    name: "X7-",
    a: "(R U R2' F' R U2' R U' R' U2' R' F R U R U R' U2' R U' R')",
  },
  144: {
    name: "Y1+",
    a: "(F R U' R' U' R U R' F' R U R' U' R' F R F')",
  },
  145: {
    name: "Y1-",
    a: "(F R' F' R U R U' R' F R U' R' U R U R' F')",
  },
  146: {
    name: "Y2+",
    a: "(R2 U2' R2' U2 R2 U' R2' U2 R2 U2' R2')",
  },
  147: {
    name: "Y2-",
    a: "(R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2)",
  },
  148: {
    name: "Y3+",
    a: "(y) (R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2')",
  },
  149: {
    name: "Y3-",
    a: "(R' U' F R U' R' U' R U2 R' F' R F U' F' R' U2 R)",
  },
  150: {
    name: "Z1",
    a: "(R' U' F R U' R' U' R U2 R' F' R F U' F' R' U2 R)",
  },
  151: {
    name: "Z2",
    a: "(R' U2' R' U' R F R' F' U R F' U' F U2' R)",
  },
  152: {
    name: "Z3",
    a: "(R' L' U2 L U R BR F U2' BR' U' F')",
  },
};
