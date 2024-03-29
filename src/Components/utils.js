import moment from "moment";

export const getFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("frontend-store")) || {};
    } catch (e) {
      //
    }
  }
  return ls[key];
};

export const saveToLS = (key, value) => {
  if (global.localStorage) {
    try {
      const ls =
        JSON.parse(global.localStorage.getItem("frontend-store")) || {};
      global.localStorage.setItem(
        "frontend-store",
        JSON.stringify({
          ...ls,
          [key]: value,
        })
      );
    } catch {
      //
    }
  }
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const bytesToSize = (bytes) => {
  var sizes = ["bytes", "kB", "mB", "gB", "tB"];
  if (bytes === 0) return { value: 0, label: "Bytes" };
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return { value: Math.round(bytes / Math.pow(1024, i), 2), label: sizes[i] };
};

export const intToString = (value) => {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

export const groupDownloadsByPeriod = (dates, period = "week") => {
  const downloadsGroupedByPeriod = {};

  dates.forEach((date) => {
    const startOfPeriodDate = moment(date.day)
      .startOf(period)
      .format("YYYY-MM-DD");

    downloadsGroupedByPeriod[startOfPeriodDate] = downloadsGroupedByPeriod[
      startOfPeriodDate
    ]
      ? downloadsGroupedByPeriod[startOfPeriodDate] + date.downloads
      : date.downloads;
  });

  return Object.entries(downloadsGroupedByPeriod).map(([key, value]) => ({
    period: moment(key).format("YYYY-MM-DD"),
    downloads: value,
  }));
};

export const fixedDecimal = (num, fixedTill) => {
  return parseFloat(num).toFixed(fixedTill);
};

export const fixedDecimalNoRoundOff = (num, fixedTill) => {
  var re = new RegExp("(\\d+\\.\\d{" + fixedTill + "})(\\d)"),
    m = num.toString().match(re);
  return m ? parseFloat(m[1]) : num.valueOf();
};

export const byteSize = (str) => new Blob([str]).size;

export const isDesktopView = !window.matchMedia("(max-width:750px)").matches;

export const editorOptions = {
  quickSuggestions: {
    other: false,
    comments: false,
    strings: false,
  },
  parameterHints: {
    enabled: false,
  },
  minimap: {
    enabled: false,
  },
  ordBasedSuggestions: false,
  suggestOnTriggerCharacters: false,
  acceptSuggestionOnEnter: "off",
  tabCompletion: "off",
  wordBasedSuggestions: false,
  codeLens: false,
};
