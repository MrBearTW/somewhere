# 2019/12/10 PHP 也有 Day 番外篇 - Ant 的 RDBMS 資料庫設計討論營系列活動 - 資料庫淺談
解析器 排序 動態編程 事務 IO

看應用場景
Mysql 5.7 8 可能解決一些舊問題

Persona。相容
三個核心可選擇
是資料庫顧問諮詢服務公司

MariaDB 取代
10 相容mysql5.6 ，不相容5.7

WebScaleSQL
FB等級大公司在用

MySQL 8
解決lock
還了一些技術債


PostgreSQL 12
Vacuum 再次強化
JIT預設啟用


比較

MySQL 因Vitess 更適合 p 用於 k8s

ID
循序式 亂數式

GUID 
UUID1345剩下14比較
UUID v1是亂序



Natural key  核心缺點需求不能變化
Surrogate key 核心缺點效能速度較慢

S key選用得宜，效能未必較慢
S key 可比 n key短
S key可以是循序性 n key很難

Primary key
不能為null 必須唯一
越短越好 複合主鍵可用Surrogate取代
隨時間改變越趨穩定

UUID
Bigint
UUID order

2ndquadant
P sql顧問公司

循序式的效能都較亂序式的高


選擇樹

Connection pool
建議引進軟體如

Fusion 10


Enterprise DB顧問公司
Zheap



# 2019/10/29 PHP 也有 Day #49：邊緣人救星！用 Laravel 打造私人定製的聊天機器人
- 已讀 在訊號不好的地方 可以成為一個基本的回覆

- 數據
    - 台灣使用人口 2100萬
    - 打開的機率比email高

- 知名案例
    - Taxi Go
    - 微股力
    - 記帳雞
    - 多國語即時翻譯
    - 快速買早餐

- 4/18之後推出官方2.0
    - 計費方式改變

- [看起來可以各種跨平台亂串IFTTT](https://ifttt.com/)

- Laravel
    - https
    - 透過webhook連結（Ngrok）
    - 開發時，CSRF 暫時先註解掉可以節省一些麻煩(Middleware\VerifyCsrfToken)

- 套件
    - [LINE官方SDK](https://packagist.org/packages/linecorp/line-bot-sdk)
    - [PHP HTTP Client套件 guzzlehttp/guzzle](https://packagist.org/packages/guzzlehttp/guzzle)

- [various message types](https://developers.line.biz/en/docs/messaging-api/overview/)
    - Text
    - Sticker LINE家族圖
    - Images 
    - Video mp4 1分鐘
    - Audio M4a 1分鐘
    - Location
    - Imagemap
    - Template
    - Button template
    - Confirm template
    - Carousel
    - Image carousel
    - Flex 有模擬器 好看 難排版
    - Quick reply (自訂制式回覆 避免回覆錯誤 機器人收不到)
    - Rich menu （整個下方）

- LIFF
    - 需要認證授權
    - 在頁面即可取得ID
    - 在首次使用時，使用者需同意
    - 常用
    - 踩雷：Scope profile打勾後要重新整理頁面，才會跳出下一個可以勾選的欄位

- Line notify
    - 獨立
    - 官方機器人
    - 需認證

- 開發工具 [Ngrok](https://ngrok.com/)
    - Spend more time programming. One command for an instant, secure URL to your localhost server through any NAT or firewall.

- replay 和 notify 是免費的
- 若要暫存進行中的步驟，需另外設計使用redis等方法協助紀錄

