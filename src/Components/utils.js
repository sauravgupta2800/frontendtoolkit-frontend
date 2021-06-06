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
    global.localStorage.setItem(
      "frontend-store",
      JSON.stringify({
        [key]: value,
      })
    );
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
