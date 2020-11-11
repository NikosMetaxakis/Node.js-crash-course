const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
    log(msg) {
        //Call event
        this.emit("message", {
            id: uuid.v4(),
            msg
        });
    }
}

//paste this in index.js
/* module.exports = Logger;

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log(
    "Called Listener: ", data
));

logger.log("hellow");
 */

/*logger.on("message", ...) -> "message" is the event 
that .log fires by default, so when you call
logger.log("lalala"), this.emit("message", ...) is utilized
and it displays the object that is 2nd argument in this.emit
*/