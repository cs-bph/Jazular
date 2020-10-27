fs = require('fs');

var logger = fs.createWriteStream('log.txt', {
    flags: 'a' // a = append
  })
  

events = []
count = 0;

fs.watch('c:\\', { encoding: 'utf8', recursive: true }, (eventType, filename) => {
    if (filename) {
      events.push(count.toString() + '\t' + Date.now().toString() + '\t' + eventType + '\t ' + filename);
      count++;
    }
  });



function writeToLog() {
    if (events.length > 0) {
        logger.write("\n" + events.join('\n'));
        events = [];
    }
}

setInterval(writeToLog, 2000);
