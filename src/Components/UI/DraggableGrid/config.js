import { Test2, Test3 } from "./Test1";
import PackageCard from "../../UI/PackageDetails/PackageCard";
import PackageDrawerDetails from "../../UI/PackageDetails/PackageDrawerDetails";
import PackageCompareCard from "../../UI/PackageCompare/PackageCompareCard";

export const COMPONENTS = [
  {
    component: PackageCard,
    key: "package_search",
    props: {
      key_name: "package_search",
      id: "npm",
      title: "Package Details",
      subTitle: "find the cost of adding a npm package to your bundle",
      detailComponent: PackageDrawerDetails,
    },
    dataGrid: { x: 0, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
  {
    component: PackageCompareCard,
    key: "package_comapre",
    props: {
      key_name: "package_comapre",
      id: "npm",
      title: "Package Compare",
      subTitle: "Compare package download counts over time",
      detailComponent: PackageDrawerDetails,
    },
    dataGrid: { x: 3, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
  {
    component: Test3,
    key: "c",
    dataGrid: { x: 4, y: 0, w: 2, h: 5, minW: 1, minH: 5 },
  },
];
