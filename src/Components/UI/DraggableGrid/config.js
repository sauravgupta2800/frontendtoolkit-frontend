import PackageCard from "../../UI/PackageDetails/PackageCard";
import PackageDrawerDetails from "../../UI/PackageDetails/PackageDrawerDetails";

import PackageCompareCard from "../../UI/PackageCompare/PackageCompareCard";
import PackageCompareDrawerDetails from "../PackageCompare/PackageCompareDrawerDetails";

import ColorSpacesCard from "../ColorSpaces/ColorSpacesCard";
import ColorSpaceDetails from "../ColorSpaces/ColorSpaceDetails";

import OpenIconCard from "../OpenIcons/OpenIconCard";
import OpenIconsDetails from "../OpenIcons/OpenIconsDetails";

export const COMPONENTS = [
  {
    key_name: "package-search",
    iconProps: {
      id: "npm",
      size: "xl",
      iconClass: "ft-color-red",
    },
    title: "Package Details",
    subTitle: "find the cost of adding a npm package to your bundle",
    component: PackageCard,
    detailComponent: PackageDrawerDetails,
    dataGrid: { x: 0, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "package-comapre",
    iconProps: {
      id: "compare",
      size: "lgx",
      iconClass: "ft-color-green1",
    },
    title: "Package Compare",
    subTitle: "Compare package download counts over time",
    drawerWidth: 1000,
    component: PackageCompareCard,
    detailComponent: PackageCompareDrawerDetails,
    dataGrid: { x: 3, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "color-spaces",
    iconProps: {
      id: "pelette",
      size: "lgx",
      iconClass: "ft-color-green",
    },
    title: "Color Conversion Space",
    subTitle:
      "Select Color and cpnvert into Other Colr spaces such as Hex, RGB, HSL etc",
    drawerWidth: 800,
    component: ColorSpacesCard,
    detailComponent: ColorSpaceDetails,
    dataGrid: { x: 6, y: 0, w: 3.3, h: 5.4, minW: 3, minH: 5 },
  },
  {
    key_name: "icons",
    iconProps: {
      id: "npm",
      size: "xl",
      iconClass: "ft-color-red",
    },
    title: "Icons",
    subTitle:
      "Free, high quality, open source icon library with 700+ icons. Include them anyway you like—SVGs, or CSS.",
    component: OpenIconCard,
    detailComponent: OpenIconsDetails,
    dataGrid: { x: 10, y: 0, w: 2.7, h: 5, minW: 2.7, minH: 4 },
  },
];
