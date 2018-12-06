# Dispatch Science node.js bindings

## Installation

  npm install ds-bindings

## API Overview

Every resource is accessed via your `ds` instance:

```js
var ds = require('ds-bindings')({authKey: '<YOUR BASIC AUTH KEY>', account: '<DASHBOARD>'});
```

Every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
// Fetch Order :
ds.orders.fetch('ORDER_ID').then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err)
});
```

Currently this wrapper supports the Order API

```
create
fetch
delete
update
status
hold
charges
```