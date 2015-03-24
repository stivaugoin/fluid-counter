# meteor-fluid-counter
Counters stored in MongoDB

This package automatically generates a counter in mongoDB. It use a collection named "fluid_counters".

## Install
``` js
meteor add stivaugoin:fluit-counter
```

## Usage
### getNextSequence
Increment counter
``` js
var counter1 = getNextSequence('counterName');
var counter2 = getNextSequence('counterName');

console.log(counter1); // return 1
console.log(counter2); // return 2
```
### setSequence
Set value as counter
``` js
setSequence('counterName', 50);
var counter1 = getNextSequence('counterName');

console.log(counter1); // return 51
```
## Licence
MIT
