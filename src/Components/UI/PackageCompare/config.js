import moment from "moment";

export const DROPDOWN_OPTIONS = [
  {
    title: "1 Months",
    key: "1",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(1, "months").format("YYYY-MM-DD"),
  },
  {
    title: "3 Months",
    key: "2",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(2, "months").format("YYYY-MM-DD"),
  },
  {
    title: "6 Months",
    key: "3",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(3, "months").format("YYYY-MM-DD"),
  },
  {
    title: "9 Months",
    key: "4",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(9, "months").format("YYYY-MM-DD"),
  },
  {
    title: "1 Year",
    key: "5",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(12, "months").format("YYYY-MM-DD"),
  },
];

export const COLORS = [
  "#754fa0",
  "#09b7bf",
  "#90d36b",
  "#0ab9ee",
  "#e78c0",
  "#ed1b72",
];

export const getColor = (index) => {
  return COLORS[index % COLORS.length];
};

export const DEFAULT_OPTION = "2";
