elemst
======
**(c)[Bumblehead][0]** [MIT-license](#license)

Handle the state of an element in the document.

```javascript
var bttn = document.getElementById('bttn');
// <span id="bttn" class="bttn">bttn</span>

elemst.is(bttn, 'select-active'); // false
// <span id="bttn" class="bttn">bttn</span>

elemst.up(bttn, 'select-active');
// <span id="bttn" class="bttn st-select-active">bttn</span>
    
elemst.is(bttn, 'select-active'); // true
// <span id="bttn" class="bttn st-select-active">bttn</span>

elemst.up(bttn, 'select-inactive');
// <span id="bttn" class="bttn st-select-inactive">bttn</span>

elemst.is(bttn, 'select-active'); // false
// <span id="bttn" class="bttn st-select-inactive">bttn</span>
    
elemst.rm(bttn, 'select');
// <span id="bttn" class="bttn">bttn</span>
    
elemst.is(bttn, 'select-active'); // false
// <span id="bttn" class="bttn">bttn</span>
```

[0]: http://www.bumblehead.com                            "bumblehead"


 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/main/img/hand.png) 

(The MIT License)

Copyright (c) [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
