# 2019/11/26 
好葉 youtube

列出清單

每天寫一個unit test


簡單的地方開始測
從專案核心開始測
一個一個補上

寫code時，會伴隨在想怎麼寫
- 好測試
- 商業邏輯
- 客製化framework 

寫測試是變相在寫文件

從簡單地方開始測
測試基礎元件
符合產品特性


ZERO QA => 失敗
QA的好處 審核spec





APE
291-310 解完/發現

Crash rate
2016 96%
2019 99.9%

Dino monkey test


越後面發現的越不重要


標記工具Vott  tf.js

Inference停住，後面就不做，節省時間

F1 score

Button 
一大堆按鈕 -》Ok button

Text button 
image button 

Color不重要，全部改灰階


手機 平板

多國語系

直接用production環境下去測試


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
