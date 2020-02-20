# 0 陷阱！0 誤解！8 天重新認識 JavaScript！（iT邦幫忙鐵人賽系列書 - 02）
## Day1
- Javascript歷史
- 資料型別
    - 變數
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