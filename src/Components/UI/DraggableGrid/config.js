import { Test2, Test3 } from "./Test1";
import PackageCard from "../../UI/PackageDetails/PackageCard";

export const COMPONENTS = [
  {
    component: PackageCard,
    key: "a",
    dataGrid: { x: 0, y: 0, w: 2, h: 3, minW: 1, minH: 2 },
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
