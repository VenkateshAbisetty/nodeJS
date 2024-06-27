var fs = require("fs");
var os = require("os");
var user = os.userInfo();
console.log(user);
console.log(os);
console.log(fs);

//Creating A File
fs.appendFile("greeting.txt", "Hi" + user.username + "!\n", () => {
    console.log("file is created");
});
