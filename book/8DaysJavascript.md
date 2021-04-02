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
    - 基本型別Primitives 變數
        - 不能是 Reserved words 或 keyword
        - 大小寫有差
        - ES6 之後，除了var之外，還可以用 let 和 const 來宣告變數
        - 弱型別的語言
        - 所有沒透過 var 宣告的變數，都會自動變成全域變數
        - 變數沒有型別，值才有。
        - javascript支援的型別
            1. 基本型別 Primitives
                - string, number, boolean, unll, undefined，ES6 後新加一個 symbol
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
                - undefine代表(此變數)還沒有給值，所以不知道是甚麼
                - undefine可以被當變數或是參數，但請不要用
            - var b = null; //null, 明確代表此變數沒有值
                - null代表(此變數可能曾經有值，可能沒有值)現在沒有值
    - 物件型別 Object
        - ECMA 262 物件的定義：An object is a collection of properties and has a single prototype object.
        - 物件可以是零到多種屬性的集合，
            - 屬性是 Key 和 Value 之間的關聯
            - Value 可能是某個基本型別或另一個物件或一個函數
        - 建立物件
            - 舊 先new 再加屬性進去
                - ```javascript
                    var person = new object();
                    person.name = 'Kuro'
                    person.sayName = function(){
                        alert(this.name);
                    };
            - 新 用大 {} 直接加入 = 物件實字 Object literal
                - ```javascript
                    var person = {
                        name: 'Kuro';
                        sayName: function(){
                            alert(this.name);
                        }
                    };
        - 物件屬性存取
            - 用 .
                - 處理包含 空白建 或 Key值是數字 會跳出 Exception
                - ```javascript
                    person.name;    //'Kuro'
                    person.sayName();   //'Kuro'
            - 用 []
                - 可處理包含 空白建 或 Key值是數字
                - ```javascript
                    person["name"];    //'Kuro'
                    person["sayName"]();   //'Kuro'
        - 新增 & 刪除 屬性
            - ```javascript
                var obj = {};
                obj.name = 'Kuro';
                delete obj.name;
                obj.name;   // undefined
        - 判斷屬性是否存在
            - in hasOwnProperty
    - 陣列
        - 同一個陣列可以多種資料型態

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

- BOM 的核心 ＂window 物件＂
    - window 物件 扮演兩種角色
        1. ECMAScript 標準裡的全域物件
            - 凡是在『全域作用範圍』內宣告的變數、物件、函式，都會自動變成『全域物件』屬性。
            - 可用 window.XXX 來取得
        2. JavaScript 用來與瀏覽器溝通的窗口
            - 可開啟視窗，跳出 alert ```window.alert(message);```
                - window 物件下的成員，window 是可以不打的
                - window 的 API 很多，開啟/關閉視窗、改變視窗大小、計時器與取得網址

- BOM: JavaScript 與「瀏覽器」溝通的窗口，不涉及網頁內容。
- DOM: JavaScript 用來控制「網頁」的節點與內容的標準。

- DOM
    - 一個將 HTML 文件以樹狀的結構來表示的模型 DOM Tree
        - 文本的節點和屬性的節點
    - DOM 的 API 就是定義了讓 JavaScript 可以存取、改變 HTML 架構、樣式和內容的方法，甚至是對節點綁定事件。




# Day 4　前端工程師的主戰場：瀏覽器裡的JavaScript (下)
♦ 事件機制的原理
♦ 網頁的事件與生命週期
♦ 隱藏在「事件」之中的秘密

# Day 5　深入理解JavaScript核心：函式、物件、原型鍊 (上)
♦ 再談函式與參數
♦ Callback Function與IIFE
♦ 從Callback到Promise
♦ 從setTimeout與setInterval理解EventQueue

# Day 6　深入理解JavaScript核心：函式、物件、原型鍊 (中)
♦ 閉包(closure)
♦ What's "THIS" in JavaScript

# Day 7　深入理解JavaScript 核心：函式、物件、原型鍊 (下)
♦ 深入理解JavaScript物件
♦ 內建物件與包裹器
♦ 物件的原型鏈與繼承
♦ ES6的Class語法糖

# Day 8　JavaScript 的現在與未來
♦ 從Page到Application談前端生態圈的演變
♦ JavaScript的現在與未來