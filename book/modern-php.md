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
    - [Linode](https://www.linode.com/)
    - 使用量低
3. 獨佔伺服器
    - 是真實機器
4. PaaS
    - AWS GCP 等等

- Ch7 服務開通
    - 開通 provision
    - 建立一個非最高權限的使用者
    - 金鑰對認證
        - 本地建立一對，公鑰送到遠端伺服器，私鑰留在本地
        - 遠端用公鑰加密一個訊息送到本地，用私鑰解密，回傳給遠端
        - 遠端認證之後，給予存取伺服器的權力
    - 停用密碼和最高權限登入
    - 防火牆
        - Ubuntu [UFW](https://help.ubuntu.com/community/UFW)
        - CentOS [iptables](https://en.wikipedia.org/wiki/Iptables)
    - PHP-FPM(看起來有點久沒更新的產品)
        - 安裝
        - 全域設定
        - 池設定
    - nginx
    - 自動化伺服器佈署
        - Anisble
    - 發放伺服器佈署
        - [Forge](https://forge.laravel.com/)
    - 系統管理推薦書籍
        - [Servers for Hackers](https://book.serversforhackers.com/)
- Ch8 調教
    - 調整php.ini
    - 記憶體
        - Drupal可能需要 > 512MB的記憶體
        - memory_get_peak_usage()輸出當前腳本所使用的記憶體
        - Apache Bench 或 Seige來做測試
        - 設定細節
    - Zend OPcache
        - 用快取編譯過的OPcahe來加速PHP腳本
        - 內建於PHP 5.5.0以上版本
        - 設定細節
    - 檔案上傳
        - 設定是否接受上傳檔案
        - 設定上傳接受的數量，大小
    - 最大運行時間
        - 要運行久一點的處理，
            - 立即回覆到網頁上
            - 但另外建立一個獨立的工作序列去跑
        - 若建立了一堆背景程序，使用[PHP Resque](https://github.com/chrisboulton/php-resque)來管理
    - Session 處理
        - 初始設定，將session儲存於硬碟中，會導致不必要的I/O時間  
        - 使用儲存中心，可被任意數量的分散式PHP-FPM伺服器存取
            - Memcache
            - Redis
        - 安裝PECL Memcache，在php.ini中加入
            ```
            session.save_handler = 'memched'
            session.save_path = '127.0.0.2:11211'
            ```
    - 輸出緩衝區
        - 用較少的區塊，每個區塊裝載更多的資料在網路中傳遞，網路效能會更有效率
        - 初始設定，緩衝區事被啟用的
        - 若改變容量，確保是4的倍數(32位元)或8的倍數(64位元)
    - 真實路徑快取
        - 初始是16K
        - 要測試才知所需的值是多少
        - 設定值 php.ini中的realpath_cache_size = 64K
- Ch9 佈署
    - 版本控制
    - 自動化佈署
        - 保持簡單
        - 保持可預測
        - 保持可反悔
    - 自動化佈署軟體[Capistrano](https://capistranorb.com/)
        - 在本地安裝，不要在遠端伺服器安裝
        - Capfile是核心的設定檔案
            - 大型應用程式
                1. 前端網頁伺服器(web規則)
                2. 應用程式伺服器(app規則)
                3. 資料庫伺服器(db規則)
            - 小型的php應用
                1. 網站伺服器(nginx)
                2. 應用程式伺服器(PHPFPM)
                3. 資料庫伺服器(MariaDB)            
            - config/deploy.rb
                - 大部分的設定黨
                - staging 和production 都有
            - config/deploy/production.rb
                - 只有production
        - 認證
            - 遠端伺服器和git repository也要建立金鑰對認證
        - 以下是Capistrano的安裝細節
- Ch10 測試
    - 何時
        1. 開發開始前
        2. 開發進行當中
        3. 開發結束後
    - What
        - 單元測試
            - 每個區塊可以完美的獨立運作
            - 公開的類別，方法和函式
        - 功能性測試
    - How
        - 測試驅動開發TDD 和 行為驅動開發BDD(Behavior-Driven Development) 兩者並不互斥
    - 單元測試
        - [PHPUnit](https://phpunit.de/)
        - 其他選擇[PHPSpec](https://www.phpspec.net/en/stable/)
    - 測試驅動開發TDD
        - 撰寫程式碼之前應該先撰寫測試
        - 測試會故意失敗因為它描述的是你的應用程式應當擁有的行為
        - 可以撰寫測試 建立功能 撰寫測試 建立功能 一小段一小段進行
    - 行為驅動開發BDD
        - SpecBDD
            - 流暢人性化的語言來描述
            - 熱門 [PHPSpec](https://www.phpspec.net/en/stable/)
        - StoryBDD
            - 專案管理者的角度組合事情
            - 熱門工具 [Behat](https://behat.org)
            - 應描述特定商業邏輯而非特定的實作
     - PHPUnit
        - 測試會集合成 測試案例
        - 測試案例 會集合成 測試程序   
        - 測試案例是單一的PHP類別繼承了PHPUnit_Framework_TestCase類別
        - 測試以test開頭
        - 這些方法各自獨立
        - 測試類別名稱以Test結尾，檔名以Test.php結尾
    - 目錄架構
        - travis.yaml 持續測試網頁服務所需要的設定細節
    - 安裝PHPUnit
        - PHPUnit
        - Xedebug
    - 配置PHPUnit
    - 範例Whovian
        - test資料夾中每一個都是一個測試案例
        - 每一個test都是獨立的測試
        - 每一個獨立測試都使用了[斷言Assertions](https://phpunit.de/manual/6.5/en/appendixes.assertions.html) 來驗證特定的條件
        - 有一些斷言Assertions要在[原始碼](https://github.com/sebastianbergmann/phpunit/blob/master/src/Framework/Assert/Functions.php)中尋找
    - 程式碼覆蓋率
        - `vendor/bin/phpunit -c phpunit.xml --coverage-html coverage`
        - 覆蓋率不可能100%，但可以漸漸提升
    - Travis CI
        - 測試當自動化執行
        - 公開的travi-ci.org
        - 私人的travi-ci.com
        - 細節設定
- Ch11 剖析
    - When
        - 當不是DB查詢過久這種明顯的效能問題時，可以協助剖析
    - 工具
        - [Apache Bench](https://httpd.apache.org/docs/2.2/programs/ab.html)
        - [Siege](https://www.joedog.org/siege-home/)
    - 類型
        - [Xdebuger](https://xdebug.org/)
            - 使用於開發階段
            - 需視覺化工具協助
                1. [kcachegrind](http://kcachegrind.sourceforge.net/html/Home.html)
                2. [wincachegrind](https://sourceforge.net/projects/wincachegrind/)
        - [XHProf](http://xhprof.io/)
            - Facebook撰寫
            - 開發和產品階段都能用
    - [Xdebuger](https://xdebug.org/)
        - 設定細節
        - 不會自動觸發
    - [XHProf](http://xhprof.io/)
        - 配合XHGUI
        - 需有MongoDB
    - 一些比較新的
        - [New Relic](https://newrelic.com/)
            - 付費
        - [Black fire](https://blackfire.io/)
- Ch12 HHVM 和 HACK
    - [HHVM](https://hhvm.com/)
        - 效能比Zend Engine好
        - HPHPc 下一代 HHVM
        - 並不適合每一個專案
        - 使用supervisor監看
        - 以FastCGI協定和網站溝通
    - [Hack](https://hacklang.org/)
        - [型態解釋](https://cdsmith.wordpress.com/2011/01/09/an-old-article-i-wrote/)
        - 嚴格的型別