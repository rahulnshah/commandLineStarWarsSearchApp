const fs = require("fs");
const path = require("path");

fs.readFile("aTest\\data.txt", 'utf8', function (err,data) {
    if (err) {
        console.log(err);
        return; // If expression after return statment is omitted, undefined is returned instead.
    }
    console.log(data);
  });

  console.log(path.resolve("main.js"));
  console.log(path.resolve("moreHelpers.js"));
  console.log(path.extname("main.js")); // .js
  console.log(path.join("first", "second", "something", "then", "..", "..", "data.txt", "..", "helpers.js"));
  console.log(path.normalize("test\\test12\\slashes\\1slash\\..\\main.txt"));

  //Things I leanred: 
  /*
  when you put .., your're out of the parent directory 
   */