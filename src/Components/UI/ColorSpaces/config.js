export const INPUT_VALUES = [
  {
    placeholder: "Enter the hex code",
    title: "Hex Code",
    valueKey: "hex",
    regEx: /^#([\da-f]{3}){1,2}$/i,
  },
  {
    placeholder: "Enter the rgb code",
    title: "RGB Code",
    valueKey: "rgb",
    regEx:
      /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i,

    prepareValue: (rgb) => {
      const _rgb = rgb
        .substring(rgb.indexOf("(") + 1, rgb.lastIndexOf(")"))
        .split(/,s*/);
      return {
        r: _rgb[0],
        g: _rgb[1],
        b: _rgb[2],
      };
    },
  },
  {
    placeholder: "Enter the rga code",
    title: "RGBA Code",
    valueKey: "rgba",
    regEx:
      /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i,

    prepareValue: (rgba) => {
      const _rgba = rgba
        .substring(rgba.indexOf("(") + 1, rgba.lastIndexOf(")"))
        .split(/,s*/);
      return {
        r: _rgba[0],
        g: _rgba[1],
        b: _rgba[2],
        a: _rgba[3],
      };
    },
  },
  {
    placeholder: "Enter the hsl code",
    title: "HSL Code",
    valueKey: "hsl",
    regEx:
      /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i,
    prepareValue: (hsl) => {
      const _hsl = hsl
        .substring(hsl.indexOf("(") + 1, hsl.lastIndexOf(")"))
        .split(/,s*/);
      return {
        h: +_hsl[0].substring(0, _hsl[0].lastIndexOf("deg")),
        s: +_hsl[1].substring(0, _hsl[1].lastIndexOf("%")) / 100,
        l: +_hsl[2].substring(0, _hsl[2].lastIndexOf("%")) / 100,
      };
    },
  },
  {
    placeholder: "Enter the hsla code",
    title: "HSLA Code",
    valueKey: "hsla",
    regEx:
      /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i,
    prepareValue: (hsla) => {
      const _hsla = hsla
        .substring(hsla.indexOf("(") + 1, hsla.lastIndexOf(")"))
        .split(/,s*/);
      return {
        h: +_hsla[0].substring(0, _hsla[0].lastIndexOf("deg")),
        s: +_hsla[1].substring(0, _hsla[1].lastIndexOf("%")) / 100,
        l: +_hsla[2].substring(0, _hsla[2].lastIndexOf("%")) / 100,
        a: +hsla[3],
      };
    },
  },
];

export const CUSTOM_COLORS = [
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#0693E3",
  "#ABB8C3",
  "#EB144C",
  "#F78DA7",
];
