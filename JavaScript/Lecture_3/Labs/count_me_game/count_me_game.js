const tagName = "div";
const attrObj = {
  Class: "my-class",
  Id: "my-id",
  Name: "my-name",
};

/**
 *  Check of existance of elements with paramters selectors
 *
 * @param {String} tagName
 * @param {Object} attrObj
 * @returns {Object} Elements count
 */
const matchCount = (tagName, attrObj) => {
  const tagMatchCount = document.querySelectorAll(tagName).length;
  const classMatchCount = document.querySelectorAll(`.${attrObj.Class}`).length;
  const idMatch = !!document.getElementById(attrObj.Id);
  const nameMatchCount = document.getElementsByName(attrObj.Name).length;
  return {
    all: tagMatchCount + classMatchCount + Number(idMatch) + nameMatchCount,
    Class: classMatchCount,
    Id: idMatch,
    Name: nameMatchCount,
  };
};

console.clear();
console.log(matchCount(tagName, attrObj));
