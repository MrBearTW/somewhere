# 0 陷阱！0 誤解！8 天重新認識 JavaScript！（iT邦幫忙鐵人賽系列書 - 02）

# Day 1　JavaScript 的起源與基礎 (上)
♦ JavaScript簡史
♦ 基礎知識與資料型別
♦ 物件、陣列以及型別的判斷
♦ 運算式與運算子

# Day 2　JavaScript的起源與基礎 (下)
♦ 自動轉型的規則
♦ 流程判斷與迴圈
♦ 函式的基本概念
♦ JavaScript是「傳值」或「傳址」？
## Day1
- Javascript歷史
- 資料型別
    - 基本型別 Primitives 變數
        - 不能是 Reserved words 或 keyword
        - 大小寫有差
        - ES6 之後，除了var之外，還可以用 let 和 const 來宣告變數
            - var 和 let 的作用範圍 scope 不同
        - 弱型別的語言
        - 所有沒透過 var 宣告的變數，都會自動變成全域變數
            - var 可以再次宣告
        - 變數沒有型別，值才有。
        - javascript支援的型別
            1. 基本型別 Primitives
                - string, number, boolean, null, undefined，ES6 後新加一個 symbol
            2. 物件型別 Object
            - 但有幾個例外
        - string
            - 單雙引號沒有差異
            - 可用 + 號串聯字串
            - 可用反斜線 \ 串聯多行字串，但反斜線後面不能任何東西(也不能有空白字元)
            - 樣板字面值 template literal，用反引號 ` 
                - 可直接跨行串聯字串，不須加反斜線
                - 不用 + 串聯，改用 ${變數}，{}內可加入運算
        - number
            - 小數或整數都是這一種
            - 特殊字元
                - Infinity
                - -Infinity
                - NaN , Not a number
                    - typeof(NaN) , 是number
                    - NaN == NaN , false
                    - 用 isNaN 來判斷
            - 小數計算
                - ES6最小精度 Math.abs()
                - [可能的解法https://github.com/nefe/number-precision](https://github.com/nefe/number-precision)
        - boolean
            - javascript 中，所有東西都可以轉成布林值
        - null 與 undefined
            - var = a;  //undefine, 尚未給值，為定義
                - undefine 代表(此變數)還沒有給值，所以不知道是甚麼
                - undefine 可以被當變數或是參數，但請不要用
            - var b = null; //null, 明確代表此變數沒有值
                - null代表(此變數可能曾經有值，可能沒有值)現在沒有值
    - 物件型別 Object
        - ECMA 262 物件的定義：An object is a collection of properties and has a single prototype object.
        - 物件可以是零到多種屬性的集合，
            - 屬性是 Key 和 Value 之間的關聯
            - Value 可能是某個基本型別或另一個物件或一個函數
        - 建立物件
            - 舊 先 new 再加屬性進去
                - ```javascript
                    var person = new object();
                    person.name = 'Kuro'
                    person.sayName = function(){
                        alert(this.name);
                    };
                    ```
            - 新 用大 {} 直接加入 = 物件實字 Object literal
                - ```javascript
                    var person = {
                        name: 'Kuro';
                        sayName: function(){
                            alert(this.name);
                        }
                    };
                    ```
        - 物件屬性存取
            - 用 .
                - 處理包含 空白建 或 Key值是數字 會跳出 Exception
                - ```javascript
                    person.name;    //'Kuro'
                    person.sayName();   //'Kuro'
                    ```
            - 用 []
                - 可處理包含 空白建 或 Key值是數字
                - ```javascript
                    person["name"];    //'Kuro'
                    person["sayName"]();   //'Kuro'
                    ```
        - 新增 & 刪除 屬性
            - ```javascript
                var obj = {};
                obj.name = 'Kuro';
                delete obj.name;
                obj.name;   // undefined
                ```
        - 判斷屬性是否存在
            - in hasOwnProperty
    - 陣列
        - 同一個陣列可以多種資料型態
## 變數
- 所有沒有透過 var 宣告的變數都會自動變成全域變數。
## 型別
- 「弱型別」的程式語言
- 變數沒有型別，值才有。
- 內建的型別
    - 基本型別 (Primitives) :string、number、boolean、null、undefined, symbol (ES6 新增)
    - 物件型別 (Object) :其他

- 基本型別 (Primitives)
    - string 字串
        - JavaScript 沒有 char (字元) 的概念
    - number 數字
        - JavaScript 的 number 實作是基於「IEEE 754」二進位浮點數算術標準 [註2]
            - 0.1 + 0.2 === 0.3 的時候，會得到 false 

- 物件型別 (Object) 
    - 

# Day 3　前端工程師的主戰場：瀏覽器裡的JavaScript (上)
♦ 瀏覽器的物件模型：DOM 與BOM
♦ 透過DOM API查找與遍歷節點
♦ DOM Node的建立、刪除、修改與外觀
♦ BOM與window物件
## Day3
- 瀏覽器上的 JavaScript 包含
    1. JavaScript 核心
    2. BOM
    3. DOM
- BOM Browser Object Model
    - 別名 Level 0 DOM
- DOM Document Object Model

- Node 環境中沒有 BOM 和 DOM，只有 JavaScript 核心
    - lambda

- BOM 的核心 ＂window 物件＂
    - window 物件 扮演兩種角色
        1. ECMAScript 標準裡的全域物件
            - 凡是在『全域作用範圍』內宣告的變數、物件、函式，都會自動變成『全域物件』屬性。
            - 可用 window.XXX 來取得
        2. JavaScript 用來與瀏覽器溝通的窗口
            - 可開啟視窗，跳出 alert `window.alert(message);`
                - window 物件下的成員，window 是可以不打的
                - window 的 API 很多，開啟/關閉視窗、改變視窗大小、計時器與取得網址

- DOM
    - 定義：
    - 一個將 HTML 文件以樹狀的結構來表示的模型 DOM Tree
        - 文本的節點和屬性的節點
    - DOM 的 API 就是定義了讓 JavaScript 可以存取、改變 HTML 架構、樣式和內容的方法，甚至是對節點綁定事件。

- BOM: JavaScript 與「瀏覽器」溝通的窗口，不涉及網頁內容。
    - 依瀏覽器廠商規範
- DOM: JavaScript 用來控制「網頁」的節點與內容的標準。
    - 依 W3C 規範
    - DOM 是網頁的根本，控制 DOM 就可以控制整個網頁

- NodeList 是物件節點的集合：類似陣列，但不是陣列，所以沒有 map filter 等 method 可以用
- 若把 <scrpit> 放在 <head></head> 之間，會依序執行，所以有的時候 scrpit 內容跑完，但 DOM 根本還沒讀到
    - GA: 攔截 DOM 的操作

- DOM 節點
    - HTML 元素節點 element nodes
    - 文字節點 text nodes
    - 註解節點 comment nodes

- DOM 的操作
    - 父子關係，兄弟關係
    - 建立、刪除與修改 node
    - 用 jQuery

- BOM
    - JS 與瀏覽器之間的橋樑
    - location 網址相關
    - history 上一頁下一頁
    - SPA 單頁式應用

# Day 4　前端工程師的主戰場：瀏覽器裡的JavaScript (下)
♦ 事件機制的原理
- 事件流程 Event Flow
- 補例子
    - 事件冒泡 Event Bubble
        - 逐漸往上
    - 事件捕獲 Event Capturing
        - 逐漸往下
    - 兩種都會執行
- 事件綁定
    - HTML 屬性 (漸漸不用)
    - 非 HTML 屬性
        - DOM API on-event handler 
- 事件監聽
    - 三個參數
        1. 事件名稱
        2. 事件處理器
        3. Boolean 捕獲 冒泡，預設為冒泡
            - chrome 55 新增三個屬性（都是） boolean
                1. once 只執行一次
                2. passive true 時，handler 不呼叫 event.preventDefault()
                3. capture 原本用來決定捕獲冒泡或捕獲
- 非侵入式 JavaScript
    - 行為層分離
    - 將 onchange, onclick 分開來寫

♦ 網頁的事件與生命週期
- 網頁事件
    - load 所有資源都載入完成才觸發
    - error
    - resize fullscreenchange
    - scroll
    - DOMContentLoaded DOM 結構完整就執行
- 滑鼠事件
    - enter (over???hover???)
- 鍵盤事件
    - keydown keypress keyup
- 表單事件
    - input select change submit
- 特殊事件
    - Composition Event 組成事件 (e.g. 搜尋欄位自動完成)
        - composition start
        - composition end
        - composition update
    - 剪貼事件
- 自定義事件
- 補充：觸摸屏幕相關的事件 / 繪圖板

♦ 隱藏在「事件」之中的秘密
- Event handler 中的參數
- 阻擋預設行為 event.preventDefaulf()
- 阻擋事件冒泡傳遞 event.stopPropagation()
- 事件指派 Event Delegation

# Day 5　深入理解JavaScript核心：函式、物件、原型鍊 (上)
♦ 再談函式與參數
- 函式是一種物件，值也是物件
- argument
    - 多個參數時的寫法
    - 補範例

♦ Callback Function 與 IIFE
- Callback Function
    - 函式只會在滿足了某個條件才會被動地去執行
    - 把函式當作另一個函式的參數，透過另一個函式來呼叫它
    - ```javascript
        function (x){
            x = fun2(x);
            return x;
        }
        fun2(x){
            return x*2;
        }
        ```
- IIFE
    - 立即被呼叫的函式 Immediately Invoked Function Expression
    - 在 ES6 以前，JavaScript 變數有效範圍的最小單位是以 function 做分界的
    - 另外好處
        - 減少「全域變數」的產生，同時也避免了變數名稱衝突的機會。

- ♦ 從Callback到Promise
    ```javascript
    const myFirstPromise = new Promise((resolve, reject) => {
        resolve(someValue);         // 完成
        reject("failure reason");   // 拒絕
    });
    ```
# Day 6　深入理解JavaScript核心：函式、物件、原型鍊 (中)
 
- Scope Chain 範圍鏈 是在函式被定義的當下決定的，不是在被呼叫的時候決定。 
- 當內部 (inner) 函式被回傳後，除了自己本身的程式碼外，也可以取得了內部函式「當時環境」的變數值，記住了執行當時的環境，這就是「閉包」
    - 減少變數互相干擾

♦ What's "THIS" in JavaScript
- 在 JavaScript 裡面， this 所代表的不僅僅是那個被建立的物件。
- 定義
    - ECMAScript 標準規範
        - The this keyword evaluates to the value of the ThisBinding of the current execution context.
        - this 這個關鍵字代表的值為目前執行環境的 ThisBinding。
    - MDN
        - In most cases, the value of this is determined by how a function is called.
        - 在大多數的情況下，this 會因為 function 被呼叫的方式而有所不同。
- 隨著 function 執行場合的不同，this 所指向的值，也會有所不同。
- 在大多數的情況下， this 代表的就是呼叫 function 的物件 (Owner Object of the function)。
- this 不等於 function
- 當沒有特定指明 this 的情況下，預設綁定 (Default Binding) this 為 「全域物件」，也就是 window。
    - 強制指定
-  ES6 開始新增了一種叫做 「箭頭函式表示式」 (Arrow Function expression) 的函式表達式。
- this 綁定
    1. 預設綁定 (Default Binding)
    2. 隱含式綁定 (Implicit Binding)
    3. 顯式綁定 (Explicit Binding)
    4. 「new」關鍵字綁定
- 結論 What's "this" in JavaScript?
    - 這個 function 的呼叫，是透過 `new` 進行的嗎？ 如果是，那 `this` 就是被建構出來的物件。
    - 這個 function 是以 `.call()` 或 `.apply()` 的方式呼叫的嗎？ 或是 function 透過 `.bind()` 指定？ 如果是，那 `this` 就是被指定的物件。
    - 這個 `function` 被呼叫時，是否存在於某個物件？ 如果是，那 `this` 就是那個物件。
    - 如果沒有滿足以上條件，則此 function 裡的 `this` 就一定是全域物件，在嚴格模式下則是 `undefined`。
- Cascade 方法鍊
    - JavaScript 的 function 允許沒有 return 回傳值，像這類沒有 return 的函式預設會回傳 undefined。 
    - 但如果我們把預設沒有 return 的 undefined 改成 return this
    - 「Cascade」或「Fluent Interface」「方法鍊」（method chaining）
# Day 7　深入理解JavaScript 核心：函式、物件、原型鍊 (下)
♦ 深入理解JavaScript物件
- 內建的型別
    - 基本型別 (Primitives) :string、number、boolean、null、undefined, symbol (ES6 新增)
    - 物件型別 (Object) :其他
- JavaScript 是一個「物件導向」的程式語言嗎？
    - JavaScript 確實是一門物件導向的程式語言
    - 繼承方法是透過「原型」(prototype-based) 來建立起物件之間的繼承關係。 
    - 大多數的物件導向的程式語言是以「類別」為基礎 (class-based)
    - JavaScript 沒有 class、沒有 extends
- JavaScript 自訂物件
    - 透過 new 關鍵字
        ```javascript
        var person = new Object();
        person.name = 'Kuro';
        ```
    - 直接用大括號 { }，即可建立起一個新的物件。
        ```javascript
        var person = {
            name: 'Kuro'
        };
        ```
- 理解 JavaScript 建構式
    - 類似 class 的語法時，可以借用來當作「建構式」來建立其他物件
        - 建立了一個 Person 建構式 (Constructor)
        - 可以就透過 new 關鍵字來建立各種對應的物件。
            ```javascript
            function Person( name, age, gender ){
                this.name = name;
                this.age = age;
                this.gender = gender;

                this.greeting = function(){
                    console.log('Hello! My name is ' + this.name + '.');
                };
            }

            var kuro = new Person( 'Kuro', 32, 'male');
            kuro.greeting();      // "Hello! My name is Kuro."

            var John = new Person( 'John', 10, 'male');
            kuro.greeting();      // "Hello! My name is John."

            /*
            ===> var kuro = {};
            ===> Person.call(kuro, 'Kuro', 32, 'male');
            */

            // 因為是公開屬性，所以可以開放修改
            kuro.age = 18;
            console.log( kuro.age );    // 18
            ```
    - 透過 new Person(...) 這個動作，傳回的物件會有 name, age, gender 以及 greeting 屬性，而 JavaScript 會在背景執行 Person.call 方法，將 kuro 作為 this 的參考物件，然後把這些屬性通通新增到 kuro 物件中。
    - 但是，即使是透過建構式建立的物件，這個物件的屬性仍然可以透過 . 來公開存取：
        - 修改屬性為 18
- 屬性描述器 (Property descriptor)
    - 從 ES5 開始，我們可以透過新的物件模型來控制物件屬性的存取、刪除、列舉等功能。 這些特殊的屬性，我們將它稱為「屬性描述器」（Property descriptor）。
    - 一共可以分為六種
        1. value: 屬性的值
        2. writable: 定義屬性是否可以改變，如果是 `false` 那就是唯讀屬性。
        3. enumerable: 定義物件內的屬性是否可以透過 `for-in` 語法來迭代。
        4. configurable: 定義屬性是否可以被刪除、或修改屬性內的 `writable`、`enumerable` 及  `configurable` 設定。
        6. get: 物件屬性的 getter function。
        7. set: 物件屬性的 setter function。
        - 除了 value 之外的值都可以不設定。
        - writable、enumerable 及 configurable 的預設值是 true。
        - get 與 set 如果沒有特別指定則是 undefined。
        - 「屬性描述器」必須要透過 ES5 所提供的 Object.defineProperty() 來處理。
- Object.defineProperty 與 Object.getOwnPropertyDescriptor
    - 透過 Object.defineProperty 來定義物件的屬性描述，用法： Object.defineProperty(obj, prop, descriptor)
        - 建立一個簡單物件
            ```javascript
            var person = {
                name: 'kuro'
            };
            ```
        - 也可以透過 Object.defineProperty 來定義物件 person 的屬性
            ```javascript
            var person = {};

            Object.defineProperty(person, 'name', {
                value: 'kuro'
            });

            Object.getOwnPropertyDescriptor(person, 'name');
            ```
            - 可以用 Object.getOwnPropertyDescriptor() 來檢查物件屬性描述器的狀態
        - defineProperty 可以針對物件一次設定多個屬性描述
            ```javascript
            Object.defineProperty(person, 'name', {
                value: 'kuro',
                writable: false,
                enumerable: false,
                configurable: false
            });
            ```
            - 此時，我們再去執行刪除屬性的行為
                ```javascript
                delete person.name;   // it will return false
                ```
                - 雖然不會出錯，但是你會發現執行結果會回傳 false ，且 person 物件的 name 屬性依然存在。 
                - 同樣地，當 writable 為 true 時，你去嘗試刪除屬性「值」的時候，你會發現結果是無效的。
                - 上面這些行為，若是在「嚴格模式」下則會發生 TypeError 的錯誤。
- 屬性的 get 與 set 方法
    - ES5 提供了 Object.defineProperty() 之後，我們可以更直觀地來處理這些方法
        ```javascript
        var person = {};

        Object.defineProperty(person, 'name', {
            get: function(){
                console.log('get');
                return this._name_;
            },
            set: function(name){
                console.log('set');
                this._name_ = name;
            }
        });
        ```
        - 可以分別為 name 屬性去定義 get 與 set 方法
        - 實際上，我們是透過了另一個屬性 `_name_` 來作為 `name` 屬性的封裝。 
        - 要注意的是，如果你定義了 get 與 set 方法，表示你要自行控制屬性的存取，那麼就不能再去定義 value 或 writable 的屬性描述。
        -  VueJS 也是透過 Object.defineProperty 的 get 與 set 來做到對物件資料的更新追蹤：
♦ 內建物件與包裹器
- 內建的型別主要可以分成基本型別 (Primitives) 與物件型別 (Object) 兩大類
    - 物件型別當中，又可以再細分出幾種「建構器」(Constructor)
        - String()
        - Number()
        - Boolean()
        - Array()
        - Object()
        - Function()
        - RegExp()
        - Date()
        - Error()
        - Symbol()
    - 這些建構器都可以透過 new 關鍵字來產生一個對應物件
    - 事實上，這些 Constructor 只是 JavaScript 所提供的「內建函式」。不是 Class 類別
    - 這些內建複合式物件的建構器當中，有幾個我們曾經在基本型別 (Primitives) 就已經見過的老朋友。
        - String()
        - Number()
        - Boolean()
        - 上面這三種看似基本型別的東西，就算透過 new 來建立的值依然是「物件」
            - 明明是「基本型別」卻會有「屬性」以及「方法」可以呼叫？
- 基本型別包裹器 Primitive Wrapper
    - 全都是「自動轉型」賦予 String、Number 與 Boolean 這些神奇的功能。
        - 我們嘗試著要去存取 String、Number 與 Boolean 這三種基本型別的屬性時，它就只會在「那一刻」被轉型為該類別的「物件」。
            ```javascript
            var str = 'Hello';
            typeof str;        // "string"

            var strObj = new String('Hello');
            typeof strObj;     // "object"

            // 像這樣，分別為物件與基本型別的 string 設定「屬性」
            strObj.color = 'red';
            str.color = 'red';

            console.log( strObj.color );      // 'red'
            console.log( str.color );         // undefined
            ```
            - 當我們試著去讀取 str.length 的時候，它會透過對應的物件建構器將 "Hello" 包裝成一個 String 的「物件」，然後回傳對應的屬性後，即刻銷毀恢復成基本型別。
            - 分別為物件與基本型別的 string 設定自訂屬性 color，在設定的時候並不會出錯，但事後要試著讀取時，「基本型別」的屬性仍然是 undefined，「物件」的字串卻將 color 屬性給保留下來了。
            - 它們的「屬性」及「方法」當然就是由對應的物件所提供，這個對應的物件也就是我們所說的「基本型別包裹器」(Primitive Wrapper)。
    - 為什麼叫「包裹器」呢，這些物件都有同樣特性：
        ```javascript
        var nameStr = new String("Kuro");
        typeof nameStr;                          // "object"
        nameStr instanceof String;               // true
        nameStr.valueOf();                       // "Kuro"

        var num = new Number(100);
        typeof num;                             // "object"
        num instanceof Number;                  // true
        num.valueOf();                          // 100
        ```
        - 這些複合式物件我們可以透過 instanceof 來確認它的基本型別是什麼。
        - 另外，當我們要取得原始的值時，可以透過 .valueOf() 來取得。
        - `null` 與 `undefined` 在原本的設計上就是「空值」與「未定義」，所以自然沒有對應的物件型別，也不會有屬性與方法。
- 透過 new 建構式生成的結果必定是物件，不管 String、Number 還是 Boolean 都是
    ```javascript
    var str = 'Hello';
    typeof str;        // "string"

    var strObj = new String('Hello');
    typeof strObj;     // "object"
    ```
    - 另一個原因是基本型別在處理與運算時的效率也遠高於物件型別。

♦ 物件的原型鏈與繼承
- 原型鏈 Prototype Chain
    - JavaScript 繼承方法是透過 「原型」(prototype) 來進行實作。
        - 透過「原型」繼承可以讓本來沒有某個屬性的物件去存取其他物件的屬性。
        ```javascript
        // 洛克人的武器是 buster 飛彈
        var rockman = { buster: true };
        // 剪刀人的武器是剪刀
        var cutman  = { cutter: true };

        console.log( 'buster' in rockman );     // true
        console.log( 'cutter' in rockman );     // false

        // 指定 cutman 為 rockman 的「原型」
        Object.setPrototypeOf(rockman, cutman);

        console.log( 'buster' in rockman );     // true

        // 透過原型繼承，現在洛克人也可以使用剪刀人的武器了
        console.log( 'cutter' in rockman );     // true
        ```
        - 可以透過 Object.setPrototypeOf() 將「剪刀人指定為原型」。
            - 在 JavaScript 裡，物件原型是物件的內部屬性，而且無法直接存取 (所以通常會直接被標示為 [[prototype]])，但我們可以透過 Object.setPrototypeOf() 來指定物件之間的原型關係。
        - 第一個參數是「繼承者」的物件，第二個則是被當作「原型」的物件。
            ```javascript
            Object.setPrototypeOf(rockman, cutman);
            ```
            - 在原型繼承的規則裡，同一個物件無法指定兩種原型物件。
                ```javascript
                // 氣力人的武器是超級手臂
                var gutsman = { superArm: true };

                // 指定 gutsman 為 rockman 的「原型」
                Object.setPrototypeOf(rockman, gutsman);

                // 這個時候洛克人也可以使用氣力人的超級手臂
                console.log( 'superArm' in rockman );     // true

                // 但是剪刀卻不見了，哭哭
                console.log( 'cutter' in rockman );       // false
                ```
    - 在原型繼承之中，有個觀念叫「原型鏈」(Prototype Chain)。
        - 當我們從某個物件要試著去存取「不存在」的屬性時，那麼 JavaScript 就會往它的 [[prototype]] 原型物件去尋找。
        - 繼承再繼承
            ```javascript
            // 洛克人的武器是 buster 飛彈
            var rockman = { buster: true };
            // 剪刀人的武器是剪刀
            var cutman  = { cutter: true };
            // 氣力人的武器是超級手臂
            var gutsman = { superArm: true };

            // 指定 cutman 為 rockman 的「原型」
            Object.setPrototypeOf(rockman, cutman);

            // 指定 gutsman 為 cutman 的「原型」
            Object.setPrototypeOf(cutman, gutsman);

            // 這樣洛克人就可以順著「原型鏈」取得各種武器了!
            console.log( 'buster' in rockman );       // true
            console.log( 'cutter' in rockman );       // true
            console.log( 'superArm' in rockman );     // true
            ```
- 最頂層的原型物件: Object.prototype
    - 當我們嘗試在某個物件存取一個不存在該物件的屬性時，它會繼續往它的「原型物件」[[prototype]] 去尋找
        - 那麼這個 [[prototype]] 究竟會找到什麼時候才停止呢？
            - 在 JavaScript 幾乎所有的物件 (環境宿主物件除外) 順著原型鏈找到最頂層級時，都會找到 Object.prototype 才停止，因為 Object.prototype 是 JavaScript 所有物件的起源。
    - 在 Object.prototype 提供的所有方法，在 JavaScript 的所有物件的可以呼叫它
        - 在 JavaScript 的所有物件，曾用過的這些方法
            - Object.prototype.hasOwnProperty()
            - Object.prototype.toString()
            - Object.prototype.valueOf()
            - 即便建立物件時，沒有定義這些方法，但基於原型鏈的繼承，我們還是可以呼叫這些方法。
- 建構式與原型
    ```javascript
    var Person = function(){};

    // 函式也是物件，所以可以透過 prototype 來擴充每一個透過這個函式所建構的物件
    Person.prototype.sayHello = function(){
    return "Hi!";
    }

    var p1 = Person();
    var p2 = new Person();
    ```
    - 變數 p1 的內容，是直接呼叫 Person 的結果，但因為這個函式什麼都沒有回傳，所以結果是 undefined。
    - 變數 p2 的內容則是透過 new 關鍵字來建立一個物件。
        - 但由於函式也是物件，所以可以透過 prototype 來擴充每一個透過這個函式所建構的物件。
        - 當我們透過 new Person() 建立了新物件並指定給 p2 後，p2 就可以透過原型取得呼叫 sayHello() 的能力，即使我們尚未對 p2 定義這個方法。
            ```javascript
            p2.sayHello();      // "Hi!"
            ```
            - 就是當函式被建立的時候，都會有個原型物件，當我們將這個函式當作建構式來建立新的物件時，這個函式的原型物件，就會被當作這個新物件的原型。
    - 在建構式中建立一個「同名」的實例方法
        ```javascript
        var Person = function(){
            this.sayHello = function(){
                return "Yo!";
            };
        };

        Person.prototype.sayHello = function(){
            return "Hi!";
        }

        var p = new Person();
        ```
        - 執行 p.sayHello() 的結果會是什麼？答案是 "Yo!"。
        - 當物件實體與它的原型同時擁有同樣的屬性或方法時，會優先存取自己的屬性或方法，如果沒有才會再順著原型鏈向上尋找。
- 從原型繼承屬性或方法，我們可以簡單歸納出幾種狀況：
    - 如果物件實體與它的原型同時擁有同樣的屬性或方法時，會優先存取自己的屬性或方法。
    - 如果物件實體找不到某個屬性或方法時，會往它的原型物件尋找。
        - 如果在原型物件或更上層的原型物件有發現這個屬性，且屬性描述的 `writable` 為 `true` ，則會為這物件實體新增對應的屬性或方法。
        - 同上，但若該屬性描述的 writable 為 false，那麼就等於目標物件會多出一個「唯讀」的屬性，且事後無法再新增或修改。
        - 如果在原型物件或更上層的原型物件有發現這個屬性，但這個屬性其實是一個「設值器」(setter function)，那麼呼叫的永遠會是那個設值器，目標物件的屬性也無法被重新定義。
- 要怎麼知道某個屬性是透過「原型」繼承來的，還是物件本身所有的呢？
    ```javascript
    // 洛克人的武器是 buster 飛彈
    var rockman = { buster: true, name: 'rock' };
    // 剪刀人的武器是剪刀
    var cutman  = { cutter: true };
    // 氣力人的武器是超級手臂
    var gutsman = { superArm: true };

    // 指定 cutman 為 rockman 的「原型」
    Object.setPrototypeOf(rockman, cutman);
    // 指定 gutsman 為 cutman 的「原型」
    Object.setPrototypeOf(cutman, gutsman);
    ```
    - 透過「原型鏈」檢查屬性，可以用 in:
        ```javascript
        console.log( 'buster' in rockman );       // true
        console.log( 'cutter' in rockman );       // true
        console.log( 'superArm' in rockman );     // true
        ```
    - 希望檢查的屬性，是否為「物件本身」所有，則可以透過 hasOwnProperty()：
        ```javascript
        console.log( rockman.hasOwnProperty('buster') );    // true
        console.log( rockman.hasOwnProperty('superArm') );  // false
        ```
- 原型與繼承
    - JavaScript 沒有內建 class 的概念，而是透過「原型」的關係，使物件得以繼承自另外一個物件，那麼這個被繼承的物件我們就稱之為「原型」 (prototype)。
    - 當函式被建立的時候，都會有個原型物件 prototype。 
    - 透過擴充這個 prototype 的物件，就能讓每一個透過這個函式建構的物件都擁有這個「屬性」或「方法」
        ```javascript
        var Person = function(name){
            this.name = name;
        };

        // 在 Person.prototype 新增 sayHello 方法
        Person.prototype.sayHello = function(){
            return "Hi, I'm " + this.name;
        }

        var p = new Person('Kuro');

        p.sayHello();       // "Hi, I'm Kuro"
        ```
        - 透過 new 建構一個 Person 的實體
            - 物件 p 的原型物件會自動指向建構式的 prototype 屬性，也就是 Person.prototype。
    - 透過「原型」來新增方法 (method)，其實是非常實用的概念，而且是在原型新增後馬上就可以用
        ```javascript
        var Person = function(name){
            this.name = name;
        };

        var p = new Person('Kuro');

        p.sayHelloWorld();  // TypeError: p.sayHelloWorld is not a function

        Person.prototype.sayHelloWorld = function(){
            return "Hello, World!";
        }

        p.sayHelloWorld();  // "Hello, World!"
        ```
        - 物件 p 與他的原型鏈上的所有物件原本都沒有 sayHelloWorld() 方法
        - 透過 Person.prototype.sayHelloWorld 新增了對應的方法後，我們無需重新建置物件 p，馬上就可以透過 p.sayHelloWorld() 來呼叫。
    - 這種手法，也是很多「Polyfill」用來增強擴充那些舊版本瀏覽器不支援的語法。 如 Array.prototype.find() 在 ES6 以前是不存在的，
- `__proto__` 與 `prototype` 的關係？
    - JavaScript 每一個物件都會有它的原型物件 `[[prototype]]`。
    - 大多數的 JavaScript 引擎，都有提供一種叫做 __proto__ 的特殊屬性，
        - 瀏覽器之間對 __proto__ 的支援也並非完全相容
    - 從 ES5 開始，如果我們想要取得某個物件的原型物件時，就可以透過 Object.getPrototypeOf( ) 這個標準方法
        ```javascript
        var Person = function(name){
            this.name = name;
        };

        var p = new Person('Kuro');

        // 在 Person.prototype 新增 sayHello 方法
        Person.prototype.sayHello = function(){
            return "Hi, I'm " + this.name;
        }

        // 所以 p 也可以呼叫 sayHello 方法
        console.log( p.sayHello() );      // "Hi, I'm Kuro"


        console.log(Object.getPrototypeOf( p ) === Person.prototype);         // true
        console.log(Object.getPrototypeOf( p ) === Function.prototype);       // false
        console.log(Object.getPrototypeOf( Person ) === Function.prototype);  // true

        console.log( p.__proto__ === Person.prototype );          // true
        console.log( p.__proto__ === Function.prototype );        // false
        console.log( Person.__proto__ === Function.prototype );   // true
        ```
        - 不管是 `__proto__` 這個特殊屬性或者是 `Object.getPrototypeOf( )` 其實都是取得某個物件的原型物件 `[[prototype]]` 的方式。
        - `__proto__` 其實是順著原型鏈向上取得原型物件的特殊屬性
        - 那麼 `prototype` 呢？
            - 每一個函式被建立之後，都會自動產生一個 prototype 的屬性
            -  "不" 代表這個 `prototype` 屬性就是這個函式的原型物件，而是透過 `new` 這個函式「建構」出來的物件會有個 `[[prototype]]` 的隱藏屬性，會指向建構函式的 `prototype` 屬性。
- 透過「物件」來達到原型繼承的話可以怎麼做(前面是「建構式」與「原型」的關係)
    1. 透過 `Object.setPrototypeOf()`。(範例在上)
    2. 透過 `Object.create()`。
        ```javascript
        // Person 物件
        var Person = {
            name: 'Default_Name',
            sayHello: function(){
                return "Hi, I'm " + this.name;
            }
        };

        // 透過 Object.create() 將 Person 作為原型物件來建立一個新的物件
        var p = Object.create(Person);

        p.sayHello();   // "Hi, I'm Default_Name"

        p.name = 'Kuro';
        p.sayHello();   // "Hi, I'm Kuro"
        ```
        - 可以先建立一個物件作為「原型」，然後透過 `Object.create()` 來產生一個新的物件，此時新物件的 `[[prototype]]` 就會是我們所指定的那個原型物件。
        - `Object.create()` 實作的原理
            ```javascript
            Object.create = function (proto){
                function F() {}
                F.prototype = proto;
                return new F();
            }
            ```
            - 原型物件作為參數傳入 `proto`
            - `Object.create()` 會回傳一個 `new F()`，也就是透過一個封裝過的建構式建構出來的物件，並把 `prototype` 指向作為參數的 `proto`。
    - 簡單歸納 `__proto__` 與 `prototype` 的關係
        -  JavaScript 的內建物件 (build-in object)
            - ，像是 `Array`、`Function` ...等，它們的 `prototype` 屬性也是一個物件，實際上是繼承自 `Object.prototype` 而來。        
            - 簡單測試  
                ```javascript
                console.log( Object.getPrototypeOf(Function.prototype               ) === Object.prototype );   // true

                // 或是透過 __proto__
                console.log( Function.prototype.__proto__ === Object.prototype );   // true
                ```
            - 原型鏈內下層物件的 `__proto__` 屬性或是透過 `Object.getPrototypeOf()` 取得的物件
            - 實際上會指向上層物件的 prototype 屬性，就可以看出它們之間的繼承關係。
- 一張圖 ![(原型鏈內物件彼此之間的關係](https://ithelp.ithome.com.tw/upload/images/20171228/20065504Yf8N277vXl.jpg)

♦ ES6的Class語法糖

# Day 8　JavaScript 的現在與未來
♦ 從Page到Application談前端生態圈的演變
- 學 Vue
♦ JavaScript的現在與未來


# 20210602 JavaScript var, let, const
影片 https://youtu.be/FGdKdn_CnWo
共筆 
近期活動：

- [https://www.hexschool.com/2021/05/20/2021-05-20-covid-public-welfare/](https://www.hexschool.com/2021/05/20/2021-05-20-covid-public-welfare/)

直播者：卡斯伯
六角學院共同創辦人
從設計轉行前端的工程師

- 粉絲頁：[https://www.facebook.com/WccCasper](https://www.facebook.com/WccCasper)
- 部落格：[https://wcc723.github.io/](https://wcc723.github.io/)

相關主題課程 - JavaScript 核心篇
[https://www.hexschool.com/courses/js-core.html](https://www.hexschool.com/courses/js-core.html)

## JavaScript var, let, const
- 為什麼要宣告變數 
    - 可能造成全域、區域污染
        - `a = 0;` 這種寫法 -> 全域屬性（可被 window.a 操作）
        - 用 var 宣告，會被限制在作用域內
            ```javascript
            function fn(){
                var a = 0;
            }
            ```
    - 屬性與變數的差異
        - window 全域物件
            - 屬性可以被刪除
            - 變數無法被刪除
- **辭法作用域**
    - 可在 JavaScript 程式中加入 `debugger;` 來看 Local 和 Global 的變數
    - 作用域可以向外查找
    - var 的作用域在程式碼寫完的當下就確定了（和執行順序無關 / 即往上外面那一層找）
- var 的特性
    - function 作用域基本上就在函式裡面
        - var 可以重複宣告，也不會跳錯誤
        - {} 是一個物件，一個 block (單獨寫沒什麼用)
            - 在 block 內宣告的 var 變數，在 block 外也可以取到 （let 宣告的無法取到）
    - for...
        - 本身是一個 {} block
        - for 內放一個 setTimeout()，執行時間會往後放
    - hoisting 
        - 在初始化的過程中，試圖去取得它的值的時候，就會出現這一個值是空值
        - var 可以 hoisting
        - 比較
            - undefined 尚未定義
            - not defined 從未定義過，會出錯
- let 與 var 的差異
    - 作用域不同
        - var 在 function, let 在 block {}大誇號內
        - 相對起來 let 穩定很多
    - let 宣告的變數，不會出現在 window 全域物件上
    - let 不可重複宣告，可以避免一些撰寫程式上的錯誤
    - hosting
        - let 沒有 hosting（var 有）
        - let 有暫時性死區 TDZ 特性(沒有辦法在宣告 let 之前，試圖去取得這一個值，會出錯)
            - 在使用 let 和 const 時，盡可能把宣告放在最前面
- const 與 let 不同之處
    - const 變數不可重複覆值
- 陷阱 const 與 let 的選擇
    - 值會不會變。
        - 會變，選 let
        - 不會變，選 const
    - 物件
        - 指向會變，選 let
        - 指向不會變，選 const
    - 物件傳參考
        - const 是物件的指向參考
            - 物件屬性的值 可以重新覆值，可以這樣做
                - ```javascript
                    const a = {
                    name: '卡斯伯'
                    }
                    a.name = 'Ray'
                    ```
            - 若重新給一個物件 {} ，就是指向參考不同的物件，會跳錯
                - ```javascript
                    const a = {
                    name: '卡斯伯'
                    }
                    const a ＝ {  // 重新指定一個位置，會跳錯
                    name: '卡斯處'
                    }
                    ```
- 結論
    - 可以使用 const 就用 const
        - 所有「時候（情況）」都列出來會更好
    - 盡量用 let，少用 var，比較不會互相干擾。
    - 團隊中可以使用 VS code 套件 ESLint 來規範寫作風格



♦ 從setTimeout與setInterval理解EventQueue