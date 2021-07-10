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
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
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
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
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
    dataGrid: { x: 8, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
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
    dataGrid: { x: 0, y: 4, w: 4, h: 6, minW: 2, minH: 5 },
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
    tags: [TAGS.OTHER],
    component: CodeDiffCard,
    detailComponent: CodeDiffDetails,
    dataGrid: { x: 4, y: 4, w: 4, h: 5, minW: 2, minH: 4 },
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
    dataGrid: { x: 8, y: 4, w: 4, h: 5, minW: 2, minH: 4 },
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
    dataGrid: { x: 0, y: 10, w: 4, h: 5.5, minW: 2, minH: 5 },
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
    dataGrid: { x: 4, y: 8, w: 4, h: 7, minW: 2, minH: 5 },
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
    dataGrid: { x: 8, y: 8, w: 4, h: 7, minW: 2, minH: 5 },
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
    dataGrid: { x: 0, y: 14, w: 4, h: 7, minW: 2, minH: 5 },
  },
];

export const WIDGETS_TABS = [
  {
    title: "All",
    key: "all",
    id: "check-all",
  },
  {
    ...TAGS.DEV,
    id: "laptop",
  },
  {
    ...TAGS.DESIGN,
    id: "rainbow",
  },
  {
    ...TAGS.EDU,
    id: "note-pad",
  },
  {
    ...TAGS.OTHER,
    id: "question",
  },
];

export const CUSTOM_CARDS = [
  {
    key_name: "dev-hints",
    title: "Devhints",
    subTitle: "A collection of web development cheatsheets.",
    url: "https://devhints.io/",
    tags: [TAGS.DEV],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "squoosh",
    title: "Squoosh",
    subTitle:
      "Compress and compare images with different codecs, right in your browser.",
    url: "https://squoosh.app/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "heroicons",
    title: "Heroicons",
    subTitle:
      "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
    url: "https://heroicons.com/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "css-gradient",
    title: "CSS Gradient Generator",
    subTitle:
      "CSS gradient generator tool that lets you create colorful background gradients.",
    url: "https://cssgradient.io/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "wordmark",
    title: "Wordmark",
    subTitle: "Helps you choose fonts for your crafting projects.",
    url: "https://wordmark.it/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "css-grid-generator",
    title: "CSS Grid Generator",
    subTitle:
      "Learn CSS Grid visually and build web layouts with this interactive CSS Grid Generator.",
    url: "https://grid.layoutit.com/",
    tags: [TAGS.DEV, TAGS.EDU],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "type-scale",
    title: "Type Scale",
    subTitle:
      "Preview and choose the right type scale for your project. Experiment with font size, scale and different webfonts.",
    url: "https://type-scale.com/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "mockup-generator",
    title: "Mockup Generator",
    subTitle: "Create beautiful product mockups in just a few clicks.",
    url: "https://mockups.pixeltrue.com/",
    tags: [TAGS.DEV],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "favicon-generator",
    title: "Favicon Generator",
    subTitle:
      "Quickly generate your favicon from text, image, or choose from hundreds of emojis.",
    url: "https://favicon.io/",
    tags: [TAGS.DEV, TAGS.DESIGN],

    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "css-easing-cheatsheet",
    title: "CSS Easing Cheatsheet",
    subTitle:
      "Make animations more realistic by picking the right easing function.",
    url: "https://easings.net/",
    tags: [TAGS.DESIGN],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "mockaroo",
    title: "Mockaroo",
    subTitle: "A free test data generator and API mocking tool.",
    url: "https://www.mockaroo.com/",
    tags: [TAGS.DEV],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "blobs-generator",
    title: "Blobs Generator",
    subTitle:
      "Customizable blobs as SVG and Flutter Widget. Create random or fixed blobs, loop, animate, clip them with ease.",
    url: "https://blobs.app/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "svg-wave",
    title: "SVG wave Generator",
    subTitle:
      "Customizable the wave design by controlling its wave, layers and height.",
    url: "https://svgwave.in/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
  {
    key_name: "undesign",
    title: "Undesign",
    subTitle:
      "Collection of free design tools and resources for makers, developers and designers",
    url: "https://undesign.learn.uno/",
    tags: [TAGS.DEV, TAGS.DESIGN],
    dataGrid: { x: 4, y: 0, w: 4, h: 5, minW: 2, minH: 4 },
  },
];

export const LAYOUTS = [
  {
    id: "table",
    title: "Tabular View",
  },
  {
    id: "mailbox",
    title: "Mail Box View",
  },
  {
    id: "masonry",
    title: "Masonry View",
  },
];
