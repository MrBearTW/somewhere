# Laravel 啟動與運行(第二版)
# Laravel: Up and Running, 2nd Edition

## 前言
## 第一章 為何選擇Laravel？
## 第二章 設置Laravel 開發環境
## 第三章 路由與controller
## 第四章 Blade 模板
## 第五章 資料庫與Eloquent
## 第六章 前端元件
## 第七章 收集與處理用戶資料
## 第八章 Artisan 與Tinker
## 第九章 用戶身分驗證與授權
## 第十章 請求、回應與middleware
## 第十一章 容器
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
## 索引


