const colours = [
  { pink: [
    { colourName: 'Pink', hex: '#FFC0CB' },
    { colourName: 'LightPink', hex: '#FFB6C1' },
    { colourName: 'HotPink', hex: '#FF69B4' },
    { colourName: 'DeepPink', hex: '#FF1493' },
    { colourName: 'PaleVioletRed', hex: '#DB7093' },
    { colourName: 'MediumVioletRed', hex: '#C71585' },
  ]},
  { purple: [
    { colourName: 'Lavender', hex: '#E6E6FA' },
    { colourName: 'Thistle', hex: '#D8BFD8' },
    { colourName: 'Plum', hex: '#DDA0DD' },
    { colourName: 'Orchid', hex: '#DA70D6' },
    { colourName: 'Violet', hex: '#EE82EE' },
    { colourName: 'Fuchsia', hex: '#FF00FF' },
    { colourName: 'Magenta', hex: '#FF00FF' },
    { colourName: 'MediumOrchid', hex: '#BA55D3' },
    { colourName: 'DarkOrchid', hex: '#9932CC' },
    { colourName: 'DarkViolet', hex: '#9400D3' },
    { colourName: 'BlueViolet', hex: '#8A2BE2' },
    { colourName: 'DarkMagenta', hex: '#8B008B' },
    { colourName: 'Purple', hex: '#800080' },
    { colourName: 'MediumPurple', hex: '#9370DB' },
    { colourName: 'MediumSlateBlue', hex: '#7B68EE' },
    { colourName: 'SlateBlue', hex: '#6A5ACD' },
    { colourName: 'DarkSlateBlue', hex: '#483D8B' },
    { colourName: 'RebeccaPurple', hex: '#663399' },
    { colourName: 'Indigo', hex: '#4B0082' },
  ]},
  { red: [
    { colourName: 'LightSalmon', hex: '#FFA07A' },
    { colourName: 'Salmon', hex: '#FA8072' },
    { colourName: 'DarkSalmon', hex: '#E9967A' },
    { colourName: 'LightCoral', hex: '#F08080' },
    { colourName: 'IndianRed', hex: '#CD5C5C' },
    { colourName: 'Crimson', hex: '#DC143C' },
    { colourName: 'Red', hex: '#FF0000' },
    { colourName: 'FireBrick', hex: '#B22222' },
    { colourName: 'DarkRed', hex: '#8B0000' },
  ]},
  { orange: [
    { colourName: 'Orange', hex: '#FFA500' },
    { colourName: 'DarkOrange', hex: '#FF8C00' },
    { colourName: 'Coral', hex: '#FF7F50' },
    { colourName: 'Tomato', hex: '#FF6347' },
    { colourName: 'OrangeRed', hex: '#FF4500' },
  ]},
  { yellow: [
    { colourName: 'Gold', hex: '#FFD700' },
    { colourName: 'Yellow', hex: '#FFFF00' },
    { colourName: 'LightYellow', hex: '#FFFFE0' },
    { colourName: 'LemonChiffon', hex: '#FFFACD' },
    { colourName: 'LightGoldenRodYellow', hex: '#FAFAD2' },
    { colourName: 'PapayaWhip', hex: '#FFEFD5' },
    { colourName: 'Moccasin', hex: '#FFE4B5' },
    { colourName: 'PeachPuff', hex: '#FFDAB9' },
    { colourName: 'PaleGoldenRod', hex: '#EEE8AA' },
    { colourName: 'Khaki', hex: '#F0E68C' },
    { colourName: 'DarkKhaki', hex: '#BDB76B' },
  ]},
  { green: [
    { colourName: 'GreenYellow', hex: '#ADFF2F' },
    { colourName: 'Chartreuse', hex: '#7FFF00' },
    { colourName: 'LawnGreen', hex: '#7CFC00' },
    { colourName: 'Lime', hex: '#00FF00' },
    { colourName: 'LimeGreen', hex: '#32CD32' },
    { colourName: 'PaleGreen', hex: '#98FB98' },
    { colourName: 'LightGreen', hex: '#90EE90' },
    { colourName: 'MediumSpringGreen', hex: '#00FA9A' },
    { colourName: 'SpringGreen', hex: '#00FF7F' },
    { colourName: 'MediumSeaGreen', hex: '#3CB371' },
    { colourName: 'SeaGreen', hex: '#2E8B57' },
    { colourName: 'ForestGreen', hex: '#228B22' },
    { colourName: 'Green', hex: '#008000' },
    { colourName: 'DarkGreen', hex: '#006400' },
    { colourName: 'YellowGreen', hex: '#9ACD32' },
    { colourName: 'OliveDrab', hex: '#6B8E23' },
    { colourName: 'DarkOliveGreen', hex: '#556B2F' },
    { colourName: 'MediumAquaMarine', hex: '#66CDAA' },
    { colourName: 'DarkSeaGreen', hex: '#8FBC8F' },
    { colourName: 'LightSeaGreen', hex: '#20B2AA' },
    { colourName: 'DarkCyan', hex: '#008B8B' },
    { colourName: 'Teal', hex: '#008080' },
  ]},
  { cyan: [
    { colourName: 'Aqua', hex: '#00FFFF' },
    { colourName: 'Cyan', hex: '#00FFFF' },
    { colourName: 'LightCyan', hex: '#E0FFFF' },
    { colourName: 'PaleTurquoise', hex: '#AFEEEE' },
    { colourName: 'Aquamarine', hex: '#7FFFD4' },
    { colourName: 'Turquoise', hex: '#40E0D0' },
    { colourName: 'MediumTurquoise', hex: '#48D1CC' },
    { colourName: 'DarkTurquoise', hex: '#00CED1' },
  ]},
  { blue: [
    { colourName: 'CadetBlue', hex: '#5F9EA0' },
    { colourName: 'SteelBlue', hex: '#4682B4' },
    { colourName: 'LightSteelBlue', hex: '#B0C4DE' },
    { colourName: 'LightBlue', hex: '#ADD8E6' },
    { colourName: 'PowderBlue', hex: '#B0E0E6' },
    { colourName: 'LightSkyBlue', hex: '#87CEFA' },
    { colourName: 'SkyBlue', hex: '#87CEEB' },
    { colourName: 'CornflowerBlue', hex: '#6495ED' },
    { colourName: 'DeepSkyBlue', hex: '#00BFFF' },
    { colourName: 'DodgerBlue', hex: '#1E90FF' },
    { colourName: 'RoyalBlue', hex: '#4169E1' },
    { colourName: 'Blue', hex: '#0000FF' },
    { colourName: 'MediumBlue', hex: '#0000CD' },
    { colourName: 'DarkBlue', hex: '#00008B' },
    { colourName: 'Navy', hex: '#000080' },
    { colourName: 'MidnightBlue', hex: '#191970' },
  ]},
  { brown: [
    { colourName: 'Cornsilk', hex: '#FFF8DC' },
    { colourName: 'BlanchedAlmond', hex: '#FFEBCD' },
    { colourName: 'Bisque', hex: '#FFE4C4' },
    { colourName: 'NavajoWhite', hex: '#FFDEAD' },
    { colourName: 'Wheat', hex: '#F5DEB3' },
    { colourName: 'BurlyWood', hex: '#DEB887' },
    { colourName: 'Tan', hex: '#D2B48C' },
    { colourName: 'RosyBrown', hex: '#BC8F8F' },
    { colourName: 'SandyBrown', hex: '#F4A460' },
    { colourName: 'GoldenRod', hex: '#DAA520' },
    { colourName: 'DarkGoldenRod', hex: '#B8860B' },
    { colourName: 'Peru', hex: '#CD853F' },
    { colourName: 'Chocolate', hex: '#D2691E' },
    { colourName: 'Olive', hex: '#808000' },
    { colourName: 'SaddleBrown', hex: '#8B4513' },
    { colourName: 'Sienna', hex: '#A0522D' },
    { colourName: 'Brown', hex: '#A52A2A' },
    { colourName: 'Maroon', hex: '#800000' },
  ]},
  { white: [
    { colourName: 'White', hex: '#FFFFFF' },
    { colourName: 'Snow', hex: '#FFFAFA' },
    { colourName: 'HoneyDew', hex: '#F0FFF0' },
    { colourName: 'MintCream', hex: '#F5FFFA' },
    { colourName: 'Azure', hex: '#F0FFFF' },
    { colourName: 'AliceBlue', hex: '#F0F8FF' },
    { colourName: 'WhiteSmoke', hex: '#F8F8FF' },
    { colourName: 'SeaShell', hex: '#F5F5F5' },
    { colourName: 'Beige', hex: '#FFF5EE' },
    { colourName: 'OldLace', hex: '#F5F5DC' },
    { colourName: 'FloralWhite', hex: '#FDF5E6' },
    { colourName: 'Ivory', hex: '#FFFAF0' },
    { colourName: 'AntiqueWhite', hex: '#FFFFF0' },
    { colourName: 'Linen', hex: '#FAEBD7' },
    { colourName: 'LavenderBlush', hex: '#FAF0E6' },
    { colourName: 'MistyRose', hex: '#FFF0F5' },
  ]},
  { gray: [
    { colourName: 'Gainsboro', hex: '#DCDCDC' },
    { colourName: 'LightGray', hex: '#D3D3D3' },
    { colourName: 'Silver', hex: '#C0C0C0' },
    { colourName: 'DarkGray', hex: '#A9A9A9' },
    { colourName: 'DimGray', hex: '#696969' },
    { colourName: 'Gray', hex: '#808080' },
    { colourName: 'LightSlateGray', hex: '#778899' },
    { colourName: 'SlateGray', hex: '#708090' },
    { colourName: 'DarkSlateGray', hex: '#2F4F4F' },
    { colourName: 'Black', hex: '#000000' },
  ]},
  { light: [
    { colourName: 'Gainsboro', hex: '#DCDCDC' },
    { colourName: 'LightGray', hex: '#D3D3D3' },
    { colourName: 'LightSlateGray', hex: '#778899' },
    { colourName: 'SlateGray', hex: '#708090' },
    { colourName: 'White', hex: '#FFFFFF' },
    { colourName: 'Snow', hex: '#FFFAFA' },
    { colourName: 'HoneyDew', hex: '#F0FFF0' },
    { colourName: 'MintCream', hex: '#F5FFFA' },
    { colourName: 'Azure', hex: '#F0FFFF' },
    { colourName: 'AliceBlue', hex: '#F0F8FF' },
    { colourName: 'WhiteSmoke', hex: '#F8F8FF' },
    { colourName: 'SeaShell', hex: '#F5F5F5' },
    { colourName: 'Beige', hex: '#FFF5EE' },
    { colourName: 'OldLace', hex: '#F5F5DC' },
    { colourName: 'FloralWhite', hex: '#FDF5E6' },
    { colourName: 'Ivory', hex: '#FFFAF0' },
    { colourName: 'AntiqueWhite', hex: '#FFFFF0' },
    { colourName: 'Linen', hex: '#FAEBD7' },
    { colourName: 'LavenderBlush', hex: '#FAF0E6' },
    { colourName: 'MistyRose', hex: '#FFF0F5' },
    { colourName: 'Cornsilk', hex: '#FFF8DC' },
    { colourName: 'BlanchedAlmond', hex: '#FFEBCD' },
    { colourName: 'Bisque', hex: '#FFE4C4' },
    { colourName: 'NavajoWhite', hex: '#FFDEAD' },
    { colourName: 'Wheat', hex: '#F5DEB3' },
    { colourName: 'CadetBlue', hex: '#5F9EA0' },
    { colourName: 'SteelBlue', hex: '#4682B4' },
    { colourName: 'LightSteelBlue', hex: '#B0C4DE' },
    { colourName: 'LightBlue', hex: '#ADD8E6' },
    { colourName: 'PowderBlue', hex: '#B0E0E6' },
    { colourName: 'LightSkyBlue', hex: '#87CEFA' },
    { colourName: 'SkyBlue', hex: '#87CEEB' },
    { colourName: 'CornflowerBlue', hex: '#6495ED' },
    { colourName: 'DeepSkyBlue', hex: '#00BFFF' },
    { colourName: 'DodgerBlue', hex: '#1E90FF' },
    { colourName: 'RoyalBlue', hex: '#4169E1' },
    { colourName: 'Aqua', hex: '#00FFFF' },
    { colourName: 'Cyan', hex: '#00FFFF' },
    { colourName: 'LightCyan', hex: '#E0FFFF' },
    { colourName: 'PaleTurquoise', hex: '#AFEEEE' },
    { colourName: 'Aquamarine', hex: '#7FFFD4' },
    { colourName: 'Turquoise', hex: '#40E0D0' },
    { colourName: 'MediumTurquoise', hex: '#48D1CC' },
    { colourName: 'DarkTurquoise', hex: '#00CED1' },
    { colourName: 'GreenYellow', hex: '#ADFF2F' },
    { colourName: 'Chartreuse', hex: '#7FFF00' },
    { colourName: 'LawnGreen', hex: '#7CFC00' },
    { colourName: 'Lime', hex: '#00FF00' },
    { colourName: 'LimeGreen', hex: '#32CD32' },
    { colourName: 'PaleGreen', hex: '#98FB98' },
    { colourName: 'LightGreen', hex: '#90EE90' },
    { colourName: 'MediumSpringGreen', hex: '#00FA9A' },
    { colourName: 'SpringGreen', hex: '#00FF7F' },
    { colourName: 'MediumSeaGreen', hex: '#3CB371' },
    { colourName: 'SeaGreen', hex: '#2E8B57' },
    { colourName: 'ForestGreen', hex: '#228B22' },
    { colourName: 'Green', hex: '#008000' },
    { colourName: 'MediumAquaMarine', hex: '#66CDAA' },
    { colourName: 'DarkSeaGreen', hex: '#8FBC8F' },
    { colourName: 'LightSeaGreen', hex: '#20B2AA' },
    { colourName: 'DarkCyan', hex: '#008B8B' },
    { colourName: 'Teal', hex: '#008080' },
    { colourName: 'Yellow', hex: '#FFFF00' },
    { colourName: 'LightYellow', hex: '#FFFFE0' },
    { colourName: 'LemonChiffon', hex: '#FFFACD' },
    { colourName: 'LightGoldenRodYellow', hex: '#FAFAD2' },
    { colourName: 'PapayaWhip', hex: '#FFEFD5' },
    { colourName: 'Moccasin', hex: '#FFE4B5' },
    { colourName: 'PeachPuff', hex: '#FFDAB9' },
    { colourName: 'PaleGoldenRod', hex: '#EEE8AA' },
    { colourName: 'Khaki', hex: '#F0E68C' },
    { colourName: 'LightSalmon', hex: '#FFA07A' },
    { colourName: 'Salmon', hex: '#FA8072' },
    { colourName: 'DarkSalmon', hex: '#E9967A' },
    { colourName: 'LightCoral', hex: '#F08080' },
    { colourName: 'Lavender', hex: '#E6E6FA' },
    { colourName: 'Thistle', hex: '#D8BFD8' },
    { colourName: 'Plum', hex: '#DDA0DD' },
    { colourName: 'Orchid', hex: '#DA70D6' },
    { colourName: 'Violet', hex: '#EE82EE' },
    { colourName: 'Pink', hex: '#FFC0CB' },
    { colourName: 'LightPink', hex: '#FFB6C1' },
    { colourName: 'HotPink', hex: '#FF69B4' },
  ]},
  { dark: [
    { colourName: 'Silver', hex: '#C0C0C0' },
    { colourName: 'DarkGray', hex: '#A9A9A9' },
    { colourName: 'DimGray', hex: '#696969' },
    { colourName: 'Gray', hex: '#808080' },
    { colourName: 'DarkSlateGray', hex: '#2F4F4F' },
    { colourName: 'Black', hex: '#000000' },
    { colourName: 'BurlyWood', hex: '#DEB887' },
    { colourName: 'Tan', hex: '#D2B48C' },
    { colourName: 'RosyBrown', hex: '#BC8F8F' },
    { colourName: 'SandyBrown', hex: '#F4A460' },
    { colourName: 'GoldenRod', hex: '#DAA520' },
    { colourName: 'DarkGoldenRod', hex: '#B8860B' },
    { colourName: 'Peru', hex: '#CD853F' },
    { colourName: 'Chocolate', hex: '#D2691E' },
    { colourName: 'Olive', hex: '#808000' },
    { colourName: 'SaddleBrown', hex: '#8B4513' },
    { colourName: 'Sienna', hex: '#A0522D' },
    { colourName: 'Brown', hex: '#A52A2A' },
    { colourName: 'Maroon', hex: '#800000' },
    { colourName: 'Blue', hex: '#0000FF' },
    { colourName: 'MediumBlue', hex: '#0000CD' },
    { colourName: 'DarkBlue', hex: '#00008B' },
    { colourName: 'Navy', hex: '#000080' },
    { colourName: 'MidnightBlue', hex: '#191970' },
    { colourName: 'DarkGreen', hex: '#006400' },
    { colourName: 'YellowGreen', hex: '#9ACD32' },
    { colourName: 'OliveDrab', hex: '#6B8E23' },
    { colourName: 'DarkOliveGreen', hex: '#556B2F' },
    { colourName: 'Khaki', hex: '#F0E68C' },
    { colourName: 'DarkKhaki', hex: '#BDB76B' },
    { colourName: 'Orange', hex: '#FFA500' },
    { colourName: 'DarkOrange', hex: '#FF8C00' },
    { colourName: 'Coral', hex: '#FF7F50' },
    { colourName: 'Tomato', hex: '#FF6347' },
    { colourName: 'OrangeRed', hex: '#FF4500' },
    { colourName: 'IndianRed', hex: '#CD5C5C' },
    { colourName: 'Crimson', hex: '#DC143C' },
    { colourName: 'Red', hex: '#FF0000' },
    { colourName: 'FireBrick', hex: '#B22222' },
    { colourName: 'DarkRed', hex: '#8B0000' },
    { colourName: 'Fuchsia', hex: '#FF00FF' },
    { colourName: 'Magenta', hex: '#FF00FF' },
    { colourName: 'MediumOrchid', hex: '#BA55D3' },
    { colourName: 'DarkOrchid', hex: '#9932CC' },
    { colourName: 'DarkViolet', hex: '#9400D3' },
    { colourName: 'BlueViolet', hex: '#8A2BE2' },
    { colourName: 'DarkMagenta', hex: '#8B008B' },
    { colourName: 'Purple', hex: '#800080' },
    { colourName: 'MediumPurple', hex: '#9370DB' },
    { colourName: 'MediumSlateBlue', hex: '#7B68EE' },
    { colourName: 'SlateBlue', hex: '#6A5ACD' },
    { colourName: 'DarkSlateBlue', hex: '#483D8B' },
    { colourName: 'RebeccaPurple', hex: '#663399' },
    { colourName: 'Indigo', hex: '#4B0082' },
    { colourName: 'DeepPink', hex: '#FF1493' },
    { colourName: 'PaleVioletRed', hex: '#DB7093' },
    { colourName: 'MediumVioletRed', hex: '#C71585' },
  ]}
]

export default colours
