import { lg } from "./helpers.js";

const obj = new Proxy(
  {
    name: "",
    address: "",
    age: 0,
  },
  {
    get: function (tar, prop) {
      if (!(prop in tar))
        throw ReferenceError(`'${prop}' is not a valid property`);
      return tar[prop];
    },
    set: function (tar, prop, newVal) {
      if (!(prop in tar))
        throw ReferenceError(`'${prop}' is not a valid property`);
      if (prop === "name" && typeof newVal !== "string")
        throw TypeError(
          `Type '${typeof newVal}' is not assignable to type 'string'.`
        );
      if (prop === "name" && newVal.length !== 7)
        throw RangeError("'name' is not 7 characters");
      if (!prop == "address")
        throw TypeError(
          `Type '${typeof newVal}' is not assignable to type 'string'.`
        );
      if (prop === "age" && typeof newVal !== "number")
        throw TypeError(
          `Type '${typeof newVal}' is not assignable to type 'age'.`
        );
      if (prop === "age" && !(newVal >= 25 && newVal <= 60))
        throw RangeError("'age' is not within 25 and 60");
      tar[prop] = newVal;
      return true;
    },
  }
);

obj.age = 30;
obj.name = "1234567";
obj.address = "ssd";
lg(obj);
