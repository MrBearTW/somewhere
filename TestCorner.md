# 2020/09/24
卡片內 的 SDK 用 Web test
Miniben 自動化 ，

第三方測試
不安全的電波


SYGNA 合規
訊息交換平台

SIT system integrate test

EC2 
Lambda
VPC to VPC  NAT

ENI

alexcasalboni/aws-lambda-power-tuning


——
Execution time allowance
Spindump

Parallel distributed testing 
Xcodebuild test
可多臺跑，節省30%時間
可指定裝置種類
 No dependency between test
 無法多帳號

多種iOS Parallel destination testing 




UI interruption

Banner notifications handling 
別人傳訊息 或 系統訊息

User permission 

Xcode 11.4 之後
XCTSkip iOS13.4後支持
意料內的才適合skip

推薦看一下 心法Write test to fail wwdc20


XCTIssues

- storekit

- Consumable 
- No consumable 
- Auto-renewable subscription 

-iOS 14 Reset eligibility 
-Client code
--server to server 還是要自己來


# 2019/11/26 Test Corner #24 @Taipei digiBlock
- 活動紀錄 https://testcorner.io/flarum/d/15-test-corner-24-digiblock-taipei
## 如何讓寫 Test 在不知不覺中, 變成習慣, 方便測試的角度來開發專案, 再從基本的Unit Test 漸漸打造成 Integration Test, 輔以 Airbnb design pattern 概念來開發, 進化測試與開發代碼. 使用技術為XCTest framework 
- 簡報: https://reurl.cc/k5kllq

- 推薦[youtuber 好葉](https://youtu.be/WrGenJYgou4)

- 列出所有要寫的測試清單，從簡單的開始
- 每天寫一個unit test
- 簡單的地方開始測
- 從專案核心開始測
- 一個一個補上

- 寫code時，會伴隨在想怎麼寫
    - 好測試
    - 商業邏輯
    - 客製化framework 

- 寫測試是變相在寫文件

- 從簡單地方開始測
- 測試基礎元件
- 符合產品特性

- 公司嘗試ZERO QA => 失敗
- QA的好處 審核spec，確定工程師沒有遺漏

- airbnb
    - [Airbnb 組織流程 - Design跟Coding的協作效益最佳化](https://medium.com/as-a-product-designer/airbnb-%E7%B5%84%E7%B9%94%E6%B5%81%E7%A8%8B-%E8%AE%93design%E8%B7%9Fcoding%E4%B9%8B%E9%96%93%E7%9A%84%E5%8D%94%E4%BD%9C%E6%95%88%E7%9B%8A%E6%9C%80%E4%BD%B3%E5%8C%96-f229a0dc91ab)
## 馴養了一隻比猴子聰明的 AI 測試猿
- 簡報: https://reurl.cc/24NWRm

- APE
- 291-310 解完/發現
    - Crash rate
    - 2016 96%
    - 2019 99.9%

- Dino monkey test

- 越後面發現的越不重要

- 推薦標記工具:微軟Vott  (需要tf.js)

- Inference 停住，後面就不做，節省時間

- 評價F1 score

- 標記方式改變
- Button 
一大堆按鈕 -》Ok button

Text button 
image button 

Color不重要，全部改灰階


手機 平板

多國語系

直接用production環境下去測試

https://www.facebook.com/679172375508263/posts/1691152244310266?d=n&sfns=mo

https://www.facebook.com/679172375508263/posts/1968963926529095?d=n&sfns=mo


# 2019/09/03 Teat Corner
### 19:40 ~ 20:30 |   How LINE runs a project with LINE MUSIC as an example - Marc
[slide](https://speakerdeck.com/line_developers_tw/how-line-runs-a-product-with-line-music-as-example)
- Strategy 包含》 product 包含》operation marketing

- [SMART goals](https://en.wikipedia.org/wiki/SMART_criteria) measured by KPI
- Monitor 客戶評論，從FB討論區和PTT，看哪一些部分被評論最多。

- User/Bid requertment如何取得平衡？

- 很大的新案子會做得比較完整
1. Theme Scoring
2. Discuss backlog
3. Define weight of criteria
4. Score based on criteria
5. Net Score

- FRD spec 應包含下列
1. Diagram
2. Flow
3. Description 

- [Zeplin](https://zeplin.io/) 美工的spec工具
    - accrue design spec
    - Assets
    - Code snippet



Sonarqube + drone
Image upload -> Harbor
Open api initiative
Redox

- 自動化api測試工具[Newman](https://www.npmjs.com/package/newman) (the cli companion for postman)


- >hey + postman 做 api performance 壓力測試

- APP類測試
    - Android
        - Exprexxo
        - UI Automator
        - Instrumented test
    - iOS
        - XCUItest
        - XCtest

- 環境
    - alpha(RD) beta(QA) RC(QA) stage(QA，第三方) production

- Planer會控制product 和 R&D部門的平衡


### 20:50 ~ 21:30 |   How we test in LINE TRAVEL that you'll love in the future - Miki
[slide](https://speakerdeck.com/line_developers_tw/how-we-test-in-line-travel-that-youll-love-in-the-future)
- Smoke test vs. functionality test 要取得平衡

- 書 [Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing](https://www.amazon.com/Explore-Increase-Confidence-Exploratory-Testing/dp/1937785025)
    - [博客來](https://www.books.com.tw/products/F012865703)
- CD工具 nuclei
- Coverage 要比之前的高，或一樣，不然退回去給RD

- Flaky test 時有時無的錯誤，CSS沒有寫好
    - 開10個docker跑（經驗上78次左右會出問題，依團隊經驗決定）
    - Retry Mechanism,not more then twice 

- Cypress


- 確認第三方api還活著
