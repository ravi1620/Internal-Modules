let os = require("node:os");
let path = require("node:path");
let moment = require("moment");

console.log(os.platform());
console.log(path.parse("C:\Users\Dell\Desktop\HTML and CSS"));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));