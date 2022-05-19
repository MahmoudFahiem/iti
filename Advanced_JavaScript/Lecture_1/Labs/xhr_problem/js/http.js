export default class HTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  get(url, callback) {
    this.http.open("GET", url, true);

    const self = this;
    this.http.onload = function () {
      if (self.http.status === 200)
        return callback(null, JSON.parse(self.http.responseText));
      callback(`Error: ${self.http.status}`);
    };

    this.http.send();
  }

  post(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    const self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  put = function (url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  };

  delete(url, callback) {
    this.http.open("DELETE", url, true);

    const self = this;
    this.http.onload = function () {
      if (self.http.status === 200) return callback(null, "Post Deleted");
      callback("Error: " + self.http.status);
    };

    this.http.send();
  }
}
