var _ = require("lodash");
// console.log(_);

var data = ["person", "person", 1, 2, "name", "2"];
var uniques = _.uniq(data);
console.log(uniques);
