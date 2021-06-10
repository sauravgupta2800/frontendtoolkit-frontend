import PackageCard from "../../UI/PackageDetails/PackageCard";
import PackageDrawerDetails from "../../UI/PackageDetails/PackageDrawerDetails";
import PackageCompareCard from "../../UI/PackageCompare/PackageCompareCard";
import PackageCompareDrawerDetails from "../PackageCompare/PackageCompareDrawerDetails";
export const COMPONENTS = [
  {
    key_name: "package-search",
    id: "npm",
    title: "Package Details",
    subTitle: "find the cost of adding a npm package to your bundle",
    component: PackageCard,
    detailComponent: PackageDrawerDetails,
    dataGrid: { x: 0, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
  {
    key_name: "package-comapre",
    id: "npm",
    title: "Package Compare",
    subTitle: "Compare package download counts over time",
    drawerWidth: 1000,
    component: PackageCompareCard,
    detailComponent: PackageCompareDrawerDetails,
    dataGrid: { x: 3, y: 0, w: 3, h: 5, minW: 3, minH: 4 },
  },
];
