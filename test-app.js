function sayHello (name) {
   console.log('Hello ' + name);
}

//sayHello('Manoj')

var logModule=require('./test-logger.js');
logModule.myLog('Hello All, welcome in my world !');