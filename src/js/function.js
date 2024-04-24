export default function printProperties(obj, howToSort) {
    let arr = [];
    for (let key in obj) {
      if (howToSort.includes(key)) {
        arr.splice(howToSort.indexOf(key), 0, { "key": key, "value": obj[key] });
      } else {
        arr.push({ "key": key, "value": obj[key] });
      }
    }
  
    arr.sort((prevValue, currentValue) => {
      if (arr.indexOf(currentValue) < howToSort.length) {
        return 0
      } else if (prevValue.key < currentValue.key) {
        return -1;
      } else {
        return 1
      }
    })
  
    return arr;
}