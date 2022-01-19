# _clog - A better console.log() because I'm lazy

### I hate typing out the full word 'c-o-n-s– ... ' see im already tired

My laziness led me to write a console.log object that takes markdown syntax and only fires when your node project is not in production... Because who the heck wants to scrape the src directory before deployment?

- [x] call the object with ``` _ ``` 
- [x] optional title and meta tags to separate multiple log entries.
- [x] log, err, and info methods are available

```js
import {_} from '.'
_
    .log('### Thanks for using clog... ', { title: 'I work hard once to be lazy forever after...', meta: ['I', 'should', 'stop', 'procrastinating'] })

```


![test.js](./img/test.png 'Test run')

#### still developing ... npm package soon