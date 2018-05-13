export class ArrayHelpers {

  static arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  static clone(obj) {
    if (obj == null || typeof obj !== "object") return obj;
    const copy = obj.constructor();
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  static splitStringIntoArrayByAndGetIndex(text, by, index) {
    let result;
    text = text.split(by);

    if (index === "last") {
      result = text[text.length - 1];
    } else if (index === "first") {
      result = text[0];
    } else {
      result = text[index];
    }

    return result;
  }
}
