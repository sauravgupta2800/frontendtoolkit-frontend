import { Test2, Test3 } from "./Test1";
import PackageCard from "../../UI/PackageDetails/PackageCard";
import PackageDrawerDetails from "../../UI/PackageDetails/PackageDrawerDetails";

export const COMPONENTS = [
  {
    component: PackageCard,
    key: "a",
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
    component: Test2,
    key: "b",
    dataGrid: { x: 2, y: 0, w: 2, h: 5, minW: 1, minH: 5 },
  },
  {
    component: Test3,
    key: "c",
    dataGrid: { x: 4, y: 0, w: 2, h: 5, minW: 1, minH: 5 },
  },
];
