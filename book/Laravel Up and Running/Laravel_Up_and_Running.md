# Laravel 啟動與運行(第二版)
# Laravel: Up and Running, 2nd Edition

## 前言
## 第一章 為何選擇Laravel？
## 第二章 設置Laravel 開發環境
- Laravel Homestead
    - 以 Vagrant 建立開發環境
## 第三章 路由與controller
- HTTP 動詞
    - GET 請求一項資源
    - HAED 請求只有標頭的 GET 回應
    - POST 建立資源
    - PUT 複寫資源
    - PATCH 修改資源
    - DELETE 刪除資源
    - OPTION 詢問伺服器這個 URL 可用的動詞有哪一些
- 可將 route ->name('XXX')，使用上較方便
- 群組 route 常用於通過同一個 middleware
- throttle middleware 速率限制
## 第四章 Blade 模板
## 第五章 資料庫與Eloquent
## 第六章 前端元件
## 第七章 收集與處理用戶資料
## 第八章 Artisan 與Tinker
## 第九章 用戶身分驗證與授權
## 第十章 請求、回應與middleware
## 第十一章 容器
- Facade
    - 查官網 https://laravel.com/docs/8.x/facades 列表
    - 建立自己的 Facade 
        - 擴展 Illuminate\Support\Facades\Facade 來為 Facade 建立一個類別，
        - 給它一個 `getFacadeAccessor()` 方法，讓它回傳一個字串
        - 最後在 `config/app.php` 註冊 Facade，加入 aliases 陣列
- 即時靜態頁面
    - 
- 服務供應器
    - 某處的某個服務供應器的 register() 方法裡面註冊綁定
    - 直接寬鬆的綁定轉存到 App\Providers\AppServiceProvider
## 第十二章 測試
## 第十三章 編寫API
## 第十四章 儲存與取回
## 第十五章 郵件與通知
## 第十六章 佇列、job、事件、廣播與排程器
## 第十七章 輔助函式與集合
## 第十八章 Laravel 生態系統
## 術語
- Facade 靜態介面
    - 一種讓你輕鬆使用複雜工具的 Laravel 工具。靜態介面提供 Laravel 核心服務的靜態訪問。因為每一個靜態介面的背後，都有一個位於容器內的類別，你可以將 Cache::put(); 這類的呼叫式換成兩行的呼叫式 $cache = app('cache');$cache->put();
- Authentication 身份驗證
    - 身份驗證的動作就是正確地證明自己是應用程式的成員或用戶。身份驗證不定義你可以做什麼，指定義你是（或不是）誰。
- Authorization
    - 假設你已經成功或失敗地驗證自己的身份，授權定義了你的身份被允許做的事情。授權與訪問和控制有關。
- FQCN 完整類別名稱
    - 任何類別、特徵或介面完整名稱空間名稱
- Closure 匿名函式
    - closure 是 PHP 版的匿名函式。你可以將這種函式當成物件四處傳遞、將它指派給變數、將它當成參數傳給其他函式或方法、甚至將它序列化。
## 索引


