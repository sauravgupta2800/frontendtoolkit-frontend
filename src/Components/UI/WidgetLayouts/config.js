import PackageCard from "../../UI/PackageDetails/PackageCard";
import PackageDrawerDetails from "../../UI/PackageDetails/PackageDrawerDetails";

import PackageCompareCard from "../../UI/PackageCompare/PackageCompareCard";
import PackageCompareDrawerDetails from "../PackageCompare/PackageCompareDrawerDetails";

import ColorSpacesCard from "../ColorSpaces/ColorSpacesCard";
import ColorSpaceDetails from "../ColorSpaces/ColorSpaceDetails";

import OpenIconCard from "../OpenIcons/OpenIconCard";
import OpenIconsDetails from "../OpenIcons/OpenIconsDetails";

import CodeDiffCard from "../CodeDiff/CodeDiffCard";
import CodeDiffDetails from "../CodeDiff/CodeDiffDetails";

import Base64Card from "../Base64EncodeDecode/Base64Card";
import Base64Details from "../Base64EncodeDecode/Base64Details";

import JSConversionCard from "../JSConversion/JSConversionCard";
import JSConversionDetails from "../JSConversion/JSConversionDetails";

import CSSConversionCard from "../CSSConversion/CSSConversionCard";
import CSSConversionDetails from "../CSSConversion/CSSConversionDetails";

import CSSFontsCard from "../CSSFonts/CSSFontsCard";
import CSSFontsDetails from "../CSSFonts/CSSFontsDetails";

import SVGConversionCard from "../SVGConversion/SVGConversionCard";
import SVGConversionDetails from "../SVGConversion/SVGConversionDetails";

import CustomCard from "../CustomWidget/CustomCard";
import CustomDetails from "../CustomWidget/CustomDetails";

export const addCustomComponent = (field) => {
  return {
    ...field,
    iconProps: {
      id: "link",
      size: "lgx",
      iconClass: "ft-color-prime",
    },
    drawerWidth: "90%",
    component: CustomCard,
    detailComponent: CustomDetails,
  };
};

export const TAGS = {
  DEV: { title: "Dev tool", key: "DEV", color: "cyan" },
  DESIGN: { title: "Design tool", key: "DESIGN", color: "blue" },
  EDU: { title: "Edu Tools", key: "EDU", color: "geekblue" },
  OTHER: { title: "Other", key: "OTHER", color: "purple" },
};

export const COMPONENTS = [
  {
    key_name: "package-search",
    iconProps: {
      id: "npm",
      size: "xl",
      iconClass: "ft-color-red",
    },
    drawerWidth: "60%",
    title: "Package Details",
    subTitle: "find the cost of adding a npm package to your bundle",
    tags: [TAGS.DEV],
    component: PackageCard,
    detailComponent: PackageDrawerDetails,
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "package-comapre",
    iconProps: {
      id: "compare",
      size: "lgx",
      iconClass: "ft-color-green1",
    },
    drawerWidth: "60%",
    title: "Package Compare",
    subTitle: "Compare package download counts over time",
    tags: [TAGS.DEV],
    component: PackageCompareCard,
    detailComponent: PackageCompareDrawerDetails,
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "icons",
    iconProps: {
      id: "code-slash",
      size: "lgx",
      iconClass: "ft-color-blue1",
    },
    drawerWidth: "60%",
    title: "Icons",
    subTitle:
      "Free, high quality, open source icon library with 700+ icons. Include them anyway you like—SVGs, or CSS.",
    tags: [TAGS.DEV, TAGS.DESIGN],
    component: OpenIconCard,
    detailComponent: OpenIconsDetails,
    dataGrid: { x: 8, y: 0, w: 4, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "color-spaces",
    iconProps: {
      id: "pelette",
      size: "lgx",
      iconClass: "ft-color-green",
    },
    drawerWidth: "60%",
    title: "Color Conversion Space",
    subTitle:
      "Select Color and convert into Other Color spaces such as Hex, RGB, HSL etc",
    tags: [TAGS.DEV, TAGS.DESIGN],
    component: ColorSpacesCard,
    detailComponent: ColorSpaceDetails,
    dataGrid: { x: 0, y: 4, w: 4, h: 6, minW: 3, minH: 5 },
  },

  {
    key_name: "code-diff",
    iconProps: {
      id: "scan",
      size: "lgx",
      iconClass: "ft-color-green2",
    },
    drawerWidth: "90%",
    title: "Code Diff",
    subTitle:
      "Code Diff is a tool to compare text differences between two text files. Enter the contents and check it",
    tags: [TAGS.DEV, TAGS.OTHER],
    component: CodeDiffCard,
    detailComponent: CodeDiffDetails,
    dataGrid: { x: 4, y: 4, w: 4, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "encode-decode-base64",
    iconProps: {
      id: "shield",
      size: "lgx",
      iconClass: "ft-color-dark3",
    },
    drawerWidth: "60%",
    title: "Base 64 Converter",
    subTitle:
      "Decode and Encode Base64 data or text with this online base64 decoder/encoder",
    tags: [TAGS.DEV, TAGS.OTHER],
    component: Base64Card,
    detailComponent: Base64Details,
    dataGrid: { x: 8, y: 4, w: 4, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "css-font-preview",
    iconProps: {
      id: "font",
      size: "lgx",
      iconClass: "",
    },
    drawerWidth: "60%",
    title: "CSS Font Preview",
    subTitle:
      "CSS font preview tool allows you to preview the font or change the settings of the font properties.",
    tags: [TAGS.DEV, TAGS.DESIGN],
    component: CSSFontsCard,
    detailComponent: CSSFontsDetails,
    dataGrid: { x: 0, y: 10, w: 4, h: 5.5, minW: 3, minH: 5 },
  },
  {
    key_name: "svg-converter",
    iconProps: {
      id: "svg",
      size: "lgx",
      iconClass: "",
    },
    drawerWidth: "90%",
    title: "SVG Converter",
    subTitle:
      "Optimize the SVG and can be converted into JSX, TSX, React Native, CSS and Base64",
    tags: [TAGS.DEV, TAGS.DESIGN],
    component: SVGConversionCard,
    detailComponent: SVGConversionDetails,
    dataGrid: { x: 4, y: 8, w: 4, h: 7, minW: 3, minH: 5 },
  },
  {
    key_name: "js-ts-mini-and-format",
    iconProps: {
      id: "javascript",
      size: "xl",
      iconClass: "ft-color-dark3",
    },
    drawerWidth: "90%",
    title: "JS/TS Converter",
    subTitle:
      "Type you JS/TS code here and see it with correct formatted form or in minified form",
    tags: [TAGS.DEV],
    component: JSConversionCard,
    detailComponent: JSConversionDetails,
    dataGrid: { x: 8, y: 8, w: 4, h: 7, minW: 3, minH: 5 },
  },

  {
    key_name: "css-mini-and-format",
    iconProps: {
      id: "css3",
      size: "xl",
      iconClass: "ft-color-dark3",
    },
    drawerWidth: "90%",
    title: "CSS Converter",
    subTitle:
      "Type you CSS code here and see it with correct formatted form or in minified form",
    tags: [TAGS.DEV],
    component: CSSConversionCard,
    detailComponent: CSSConversionDetails,
    dataGrid: { x: 0, y: 14, w: 4, h: 7, minW: 3, minH: 5 },
  },
];