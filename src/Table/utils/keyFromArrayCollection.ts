const keyFromArrayCollection = (ar: any[]): string => {
  return ar.reduce((ac, d) => ac + "," + getStringFromValue(d, "", true), "");
};

const keysToSearch = ["props", "children", "raw", "content", "style", "options"];

function getStringFromValue(value: any, str = "", forceAll = false): string {
  return !value
    ? ""
    : typeof value !== "object"
    ? value.toString()
    : Object.keys(value).reduce((acc, k) => {
        if (forceAll || keysToSearch.includes(k)) return acc + "," + getStringFromValue(value[k], str);
        return acc;
      }, "");
}

export default keyFromArrayCollection;
