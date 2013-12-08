elemst
======
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

Handle the state of an element in the document.

Methods are:
  - elemst.up *update state* 
  - elemst.is *verify state*
  - elemst.rm *remove state*

See how it works:

*example*

```html
<a href="#" id="Bttn" class="bttn">
    <span class="bttn-label">Bttn Label</span>
</a>
<script type="text/javascript">
    var bttnElem = document.getElementById('Bttn');
    console.log(elemst.is(bttnElem, 'select-active')); // false
    elemst.up(bttnElem, 'select-active');
    console.log(elemst.is(bttnElem, 'select-active')); // true
    elemst.rm(bttnElem, 'select');    
    console.log(elemst.is(bttnElem, 'select-active')); // false
    console.log(elemst.is(bttnElem, 'active')); // false
    elemst.up(bttnElem, 'active');
    console.log(elemst.is(bttnElem, 'active')); // true
    elemst.rm(bttnElem, 'active');    
    console.log(elemst.is(bttnElem, 'active')); // false
</script>
```

[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="install"></a>Install:

elemst may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install elemst
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/elemst.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated but are performed by loading a document in the browser and using a browser console.

Visit `test/index.html` in your browser to see and test elemst


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
