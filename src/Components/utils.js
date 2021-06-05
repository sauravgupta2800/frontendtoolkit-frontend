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
