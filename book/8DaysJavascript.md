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
    - 基本型別 (Primitives) :string、number、boolean、null、undefined
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

♦ Callback Function與IIFE
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

♦ 從Callback到Promise
♦ 從setTimeout與setInterval理解EventQueue

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
- Cascade
    - JavaScript 的 function 允許沒有 return 回傳值，像這類沒有 return 的函式預設會回傳 undefined。 
    - 但如果我們把預設沒有 return 的 undefined 改成 return this
    - 「Cascade」或「Fluent Interface」「方法鍊」（method chaining）
# Day 7　深入理解JavaScript 核心：函式、物件、原型鍊 (下)
♦ 深入理解JavaScript物件
♦ 內建物件與包裹器
♦ 物件的原型鏈與繼承
♦ ES6的Class語法糖

# Day 8　JavaScript 的現在與未來
♦ 從Page到Application談前端生態圈的演變
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