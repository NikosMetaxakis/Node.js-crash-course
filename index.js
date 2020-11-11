const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log(
    "Called Listener: ", data
));

logger.log("hellow");

/*on line 5 logger.on("message", ...) -> "message" is the event 
that .log fires by default, so when you call
logger.log("lalala"), this.emit("message", ...) is utilized
and it displays the object that is 2nd argument in this.emit
*/