import printProperties from  "./function.js";

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const howToSort = ["name", "level", "health"];

printProperties(obj, howToSort);