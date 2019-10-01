範例程式https://github.com/codeguy/modern-php  

- Ch2 
    - 命名空間
    - 介面 都是車 但寶馬和福特還是會不同
    - 特徵機制trait 兩個不同祖先但有共同功能
    - DRY: Do not repeat youself
    - 產生器 只能往前跌代 節省記憶體
    - 閉包 = 匿名函式 PHP中視為相同
        - 閉包是個在創造時就封裝了內部狀態的函式，即使原有的環境已經消失了這個被封裝的狀態會一直被保存在閉包中。
        - 匿名函示就如同字面上所示，是個沒有名稱的函示。
        - 匿名函是可以被指派到變數並且像其他PHP物件一樣被傳遞，但它始終是個函示，所以妳可以呼叫它並且傳參數進去，匿名函式在函式或是方法回呼(callback)時特別有用。
        - 閉包和匿名函式理論上式不同的事情，但是PHP將他們視為相同。
        - 閉包不像JavaScript會自動繫上，要用bindTo()方法。
    - Zend OPcache
        - 加速，可以讀取預先編譯好的位元碼
        - 需要被開啟
    - 內建HTTP伺服器
        - PHP 5.4.0以上
        - 沒有前端控制器，需另外設定路由器腳本
        - 不可使用production
    - 從社群學習正確的知識https://www.php.net/manual/en/features.php
- Ch3 標準
    - PHP Framework Interop Group
    - https://www.php-fig.org/
    - PSR PHP Standards Recommendations
        - PSR-1 基本程式碼風格
            - 常數必須全部大寫
        - PSR-2 嚴厲程式碼風格
            - 四個空白，不是一個Tab
            - 最後一行是空白，並且不用?>收尾
            - true, false, null用小寫
        - PSR-3 紀錄器介面 monolog
            - https://packagist.org/packages/monolog/monolog
        - PSR-4 自動載入器
- Ch4 元件
    - 現代框架常常是由小的元件所組成
    - 元件網站 https://packagist.org/
    - 不錯的元件清單 https://github.com/ziadoz/awesome-php
    - composer.lock會依照這個檔案下載套件
    - 需要認證的可儲存到本地的auth.json
    - composer.json和元件內容解說
    - [markdown教學](https://daringfireball.net/projects/markdown/syntax)
    - 如何推送一個元件到packagist
- Ch5 良好習慣
    - 所有來自外部的資料都是不安全的
    - 消毒
        - HTML htmlentitle()
        - SQL查詢(PDO)
        - 使用filter_var來消毒外部輸入的變數
        - 驗證資料 FILTER_VALIDATE_*
        - 驗證並且消毒，都要做
        - 逃脫使用者輸出
    - 密碼
        - 不要知道使用者密碼
        - 不要限制使用這密碼(上限？)
        - 不要用Email傳密碼，用一個一次性的URL
        - 用bcrypt雜湊(雜湊和加密不同)
        - PHP5.5 有API可以呼叫
        - 有一個註冊範例
        - 以VARCHAR(255)來儲存
        - 有一個login範例
    - 日期 時間 時區
        - 設定初始時區
            - 在php.ini中
            - 在執行時期宣告
        - DateTime格式
        - DateInterval作時間運算
        - DateTimeZone 設為UTC時區，顯示時再做更改
        - DatePeriod 週期時間
        - 套件https://github.com/briannesbitt/Carbon
    - 資料庫
        - PDO PHP data objects
        - 密碼分開寫且記得gitignore
        - 預備陳述式
            - PDOStatement實體
            - :email 名稱佔位符
            - [PDOStatement::bindValue](https://www.php.net/manual/en/pdostatement.bindvalue.php)有三個參數
                - 第三個參數用來指定變數資料型態
        - 查詢結果
            - fetch, fetchALL, fetchColumn, fetchObject
        - 交易
            - 不是所有資料庫都支援
            - 是一組同時執行成功或同時執行失敗的SQL查詢
    - 多位元組字串
        - 安裝mbstring擴充來避免多位元組字串產生的錯誤
        - 用UTF-8
        - 在php.ini中加入`default_charset = "UTF-8";`
        - HTML標頭加入`<meta charset="UTF-8"/>`
    - 串流
        - 可使用fseek()方法來尋找串流中任意位置
        - `<schema>辨識串流目標://<target>串流資料來源`
        - 常用的fopen其實就是串流的一種，只是`file://`常被省略
        - 串流背景(stream context)
        - 串流過濾器
        - 自製髒話過濾處理器
    - 錯誤處理和例外
        - 例外Exception 
            - 一個訊息 一個數字
            - Exception的實體
                - Exception
                - ErrorException
            - 接住例外後拋出優雅的資訊給使用者
            - 可以使用finally來做永遠要執行的程式碼
            - 全域的 例外處理器 處理並記錄
        - 錯誤
            - 可於php.ini中設置
            - 四條規則
                1. 永遠開啟錯誤回報
                2. 在開發階段時顯示錯誤
                3. 在產品階段是『不要』顯示錯誤
                4. 在開發階段和產品階段時都要記錄錯誤
            - 錯誤處理器
                - 以set_error_handler()註冊全域性的錯誤處理器
                - 有五個參數
                    1. 錯誤等級
                    2. 錯誤訊息
                    3. 錯誤發生的檔案名稱
                    4. 錯誤發生的程式碼行數
                    5. 一個陣列指向錯誤發生時的符號表格(非必要)
            - 開發階段的錯誤和例外
                - Whoops外掛套件
            - 產品階段
                - Monolog外掛套件
# 第三部分 佈署、測試和調校
- Ch6 Host 寄存
1. 共享伺服器
    - 便宜
    - 客製化程度低
    - 很少有SSH，大部分使用FTP
2. 虛擬私有伺服器VPS
    - Linode
3. 獨佔伺服器
4. PaaS