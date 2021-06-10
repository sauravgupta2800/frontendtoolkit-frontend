import moment from "moment";

export const DROPDOWN_OPTIONS = [
  {
    title: "Last week",
    key: "one-week",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    timeUnit: "day",
  },
  {
    title: "1 Months",
    key: "one-month",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(1, "months").format("YYYY-MM-DD"),
    timeUnit: "week",
  },
  {
    title: "3 Months",
    key: "three-months",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(3, "months").format("YYYY-MM-DD"),
    timeUnit: "month",
  },
  {
    title: "6 Months",
    key: "six-months",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(6, "months").format("YYYY-MM-DD"),
    timeUnit: "month",
  },
  {
    title: "9 Months",
    key: "nine-months",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(9, "months").format("YYYY-MM-DD"),
    timeUnit: "month",
  },
  {
    title: "1 Year",
    key: "one-year",
    end: moment().format("YYYY-MM-DD"),
    start: moment().subtract(12, "months").format("YYYY-MM-DD"),
    timeUnit: "quarter",
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

export const DEFAULT_OPTION = DROPDOWN_OPTIONS[2].key;
