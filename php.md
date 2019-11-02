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

