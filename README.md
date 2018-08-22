## Marco
Marco lets you create Markdown-like languages easily, here's an example:


```js
const `Marco = require('Marco');

const result = Marco
    .between('\\*', text => `<strong>${text}</strong>`)
    .startsWith('#', text => `<h1>${text}</h1>`)
    .transform(t);
```
