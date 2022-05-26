# 2022/05/10 Test Corner #32 - LINE 的社內測試
https://testcorner.kktix.cc/events/20220510

1. 我的聰明，讓你知道

講者：Caleb Lin / Yi-Han Hsiao

簡述：LINE 購物作為一個導購及回饋點數的行動電商聯盟平台，該如何將所有的合作電商的優惠，即時地推送給使用者呢？

LINE 總部提供的聰明頻道 (Smart Channel) 就成為非常有用的渠道，能將新、舊使用者一網打盡。

而聰明頻道也因為 LINE QA 們的聰明，才能確保每一項推薦可以準時啟動，並提供服務的穩定，我們是如何做到的？
- feature toggle 
- Kafaka 收集要推的資料
- Jenkins parameters 調整參數
 

2. "Cross-country"專案測試心法  

講者：Hank Chen

簡述：疫情嚴峻的此刻，你曾想加入跨國專案，透過與不同國家的開發團隊交流合作，來體驗偽出國的氛圍嗎？除了大家熟知的正規軍 Scrum team 開發維運專案外，其實 LINE 台灣的 QA 也是有強力的支援部隊，隨時準備好為各專案，甚至是他國專案提供測試協助。其中與別國團隊合作的眉眉角角宛如跑越野賽(Cross-country)一樣，在起點與終點之間囊括了各種艱難崎嶇的障礙地形挑戰，就讓我來分享我們是如何克服重重障礙的。期待與各位產生共鳴，更希望大家能從中獲取到一些寶貴的經驗。
- 每收禮五人就有一人轉為買禮物的人
- 收禮人可編輯地址
- FAS 團隊，外部溝通
 

3. 遇到大排長榮,怎麼發大財啊?

講者：JJ Lai

簡述：貨出去，錢進來，發大財！超有感的口號，想要發大財最重要的是貨先能出去，當團隊對著即將出貨的產品滿懷信心和期待（財富自由就靠這一把了），可曾想過它會被卡在半路上？（大牌長榮又是你？）又或者是被卡住早就是常態？順利的完成每一次交付，才能得到想要的報酬和回饋，大家都希望交付的週期越快越好...聽聽看 LINE TODAY 在加速產品交付的週期中遇到了哪些問題，以及我們想要怎麼解決，來跟我們一起成長吧！！

- google state of develop 2021
- 影片the pipeline driven organization 
- I would if I could, but I can’t so I wouldn’t.
- Release Trains + Features toggles
- AC Acceptance Criteria 轉成 automations 
-[投影片與網誌](https://engineering.linecorp.com/zh-hant/blog/line-today-release-pipline-test-corner/?fbclid=IwAR1Gvj7DxtxHepmVcVctPGmKLHWbkUpDS5DHnbIVErXkwviZK0s0mjM8QaI)

# 2020/11/25 Test Corner #28 @ Cathay DDT(國泰金控數數發中心) 國泰軟體測試工程團隊大揭密
- New Hjghs 計畫

- 從 2016 三人 到 2020 30 人

- 定位
    - SDET 是 Software Development Engineer in Test
        - 國泰分法 TQA 寫 code / debug / 發展測試計畫 / 自動化
        - Coding v.s Testing = 3:1
    - STE 是 Software Test Engineers
        - 國泰分法 SQA 了解業務目標 / 定義通過或缺點 / 測試軟體 / 人工
        - Coding v.s Testing = 1:3

- QA Coe 建置
- ALM 導入（微軟）
- 軟體測試導入

- 神訪資訊
    - 誠信 當責 創新
    - 國泰健檢中心

- Api 測試
- 封測
- 外部測試
- 小樹點 聯盟鏈

- 壓力測試工具
    - Jmeter
    - K6 / Locust

- Scrum

- 一年工作心得
    - 弄懂商業邏輯再寫測試
    - 報表測試預計一天，變成弄好幾個月
    - 善用開源工具

- 工具    
    - pytest 的 Parametrizing tests
    - Testrail Comprehensive Test Case Management

- 紀錄每一個test case 花掉的時間
- 迭代

- 資安
- 有發生過的就拿sample code 打打看，打不過就不能進入下一個stage

- QA 發問的人已經改成 Main line ，而不是使用 master 這個字

# 2020/09/24 
- 為了給卡片內第三方開發寫了 
    - SDK 可用於 Web test
- 手工 Ben => Miniben 自動化 

- 第三方測試
    - 不安全的電波偵測出密碼

- SYGNA 合規服務
    - 訊息交換平台

- SIT system integrate test

- EC2 
- Lambda
- VPC to VPC  NAT
- ENI 虛擬網卡

alexcasalboni/aws-lambda-power-tuning
- [lambda 效能調整](https://github.com/alexcasalboni/aws-lambda-power-tuning)

- 做成報告
——

- Execution time allowance
    - Spindump
    - Parallel distributed testing 
    - Xcodebuild test
    - 可多臺跑，節省30%時間
    - 可指定裝置種類

- No dependency between test
- 無法多帳號

- 多種新舊 iOS => Parallel destination testing 

- UI interruption handling
    - Banner notifications handling 
    - 別人傳訊息
    - 系統訊息

- User permission 

- Xcode 11.4 之後
- XCTSkip iOS13.4後支持
- 意料內的才適合skip，意料外的就要跳出提示

- 推薦看一下 [Write tests to fail](https://developer.apple.com/videos/play/wwdc2020/10091/) 有一些心法值得參考

- XCTIssues

- storekit

- Consumable 
- No consumable 
- Auto-renewable subscription 

- iOS 14 Reset eligibility 
- Client code
    - server to server 還是要自己來

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
