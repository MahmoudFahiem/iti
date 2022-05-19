const cookie = {
  getItems: function () {
    return document.cookie;
  },
  getItem: function (key) {
    if (!key) throw Error("key is required");
    if (!typeof key === "string") throw Error("key must be string");
    const regex = new RegExp(`(?<=${key}=)\\w+`, "g");
    const keyVal = this.getItems().match(regex);
    return keyVal ? keyVal[0] : null;
  },
  setItem: function (key, value, expDate) {
    if (!key) throw Error("key is required");
    if (value === undefined) throw Error("value is required");
    if (!typeof key === "string") throw Error("key must be string");
    if (!typeof value === "string") throw Error("value must be string");
    if (!typeof expDate === "object")
      throw Error("date must be valid date object");
    const date = new Date();
    date.setDate(date.getDate() + 3);
    expDate ||= date;
    document.cookie = `${key}=${value};expires=${expDate}`;
  },
  setItems: function (cookieItems) {
    if (!cookieItems) throw Error("cookieItems is required");
    if (!typeof cookieItems === "object")
      throw Error("cookieItems must be array of strings");

    cookieItems.forEach((cookieItem) => {
      document.cookie = cookieItem;
    });
  },
  deleteItem: function (key) {
    if (!key) throw Error("key is required");
    if (!typeof key === "string") throw Error("key must be string");
    const date = new Date();
    date.setDate(date.getDate() - 1);
    this.setItem(key, "", date);
  },
};

window.cookie = cookie;

export default cookie;
