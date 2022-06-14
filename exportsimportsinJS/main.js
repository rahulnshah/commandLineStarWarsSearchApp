const helpers = require("./helpers"); //  if we do not use a relative path, Node will assume you're referencing a built-in module or a package. When you are using your own modules, always use relative paths.
const moreHelpers = require("./moreHelpers");
const evenMoreHelpers = require("./evenMoreHelpers");
helpers.sayHi();

console.log(moreHelpers.firstName);
moreHelpers.sayHello();
moreHelpers.sayGoodbye();
console.log(moreHelpers.firstName);
evenMoreHelpers();