# Dell Technologies Forum Toronto 2023

- Zero trust 
    1. Protection 
    2. Resilience 
    3. Confidence
- 5 challenge 
    1. AI
    2. Multi cloud 
    3. Edge 
    4. Work
    5. Security 
  
- Red hat Stop open source 
- NVIDIA co-op

# Open Carousell 旋轉拍賣測試團隊開箱
- 60% Cover
- 有量化統計資料可以追蹤
    - 用 Google data studio 整理
- 架構圖在 slide 中


# 轉職進入矽谷科技公司產品經理 - 線上座談會
- Copy from the best
- 舉手說要做 / 試著幫忙做
- 不要只是學習 Do it
- Networking 就是存錢，帳號密碼還在的話就永遠都有機會用到
- 練習面試 73 次

# 加拿大
2 + 3
70~90

# 20210319  JIRA Service Management ITSM 全攻略研討會
- Next generation ITSM Solution : Jira Service Management Overview      演講者 ： Linktech 工程部經理 - Leon
    - JIRA service management:
        - request management 
        - Incidents management 
        - Problem management 
        - Change management 
    - Insight: Asset management 
    - Opsgenie: on call and alerts， keep service always on

    - 減少一單多開
    - 報案 service protal
    - 自動搜尋相關文章
    - 可公開和內部回覆分開
    - 計算 SLA
    - 可流程控制
    - Report and martix

- 如何在雲時代快速遷移與部屬?     演講者 ： Linktech 專案管理部專案經理 - Vergil
    - project configurator for JIRA cloud
    - 專案移轉

- Opsgenie best On-call and alert management      演講者 ： Atlassian Speaker
    - MTTR: Mean time to recovery
    - war room 
        - 連結相關
        - 設定可能原因
        - 記錄時間
        - Version map of CI/CD
    - 自動生成報告
        - 除了通知之外，所有資訊都集中在票內，可快速生成結案報告
    - 優點
        - Fast MTTR
        - Effective Communication 
        - Open team collaboration 

- ITSM 企業實戰分享:百年裕利雲端創新        演講者 ： 裕利 IT 處長 - Erwin
    - 裕利醫藥 Zuellig Pharma
        - az 疫苗今天開始運送
        - -80 -20 2-8 度
        - IT 部門 13 人/ 800位員工 
        - 3 site / 45 agent
        - 1 site / 10 users
    - confluence / statuspage / access(so with Azure AD)
        - 起手式
            - Service desk(IT 幫幫忙)
            - incident management (報案)
            - service request fulfillment(IT 服務申請單）
        - ISMS 相關需求
        - IT 同仁接受度
        - 減少 double effort / 取一個好名子 / 不需要教育訓練
        - Customer protal
        - It’s about change management, not tool adapted 
        - 使用 scriptRunner 套件呼叫外部 API 進行 AD 解鎖& 重設密碼
        - 使用 workflow 的 approval 功能取代紙本簽核(JIRA service management )
        - LINE 和 JIRA 可以做整合（回報體溫）
        - 可以選擇是否要申請密碼
    - 三個主要用法
        - Confluence 知識傳承、SOP
        - JIRA service management 窗口、流程、表單、簽核
        - Insight 資產清冊，軟硬體架構

- Asset & Change Management in Jira Service Management        演講者 ： Linktech 工程部組長 - Harry
    - 凡是可能出錯的事ㄧ定會出錯
    - Insight （Data center 版本不用付費）
    - 大量資產可以用API 一次輸入

- 社群 Wenmin Hsiao JIRA Community lead
    - 直播活動專家對談 (線上）
    - 中國流量產業

- ITSM 企業實戰分享:告警分析與量化伺服器可用度      演講者 ： Linktech 工程師 - Klus
    - IT 結案率分析
    - easyBI 外掛
    - 計算 down time / 系統可用度
    - cloudwatch 

# 神秘的地方
溫暖 不批判 鼓勵

# 直撥分流軟體
可即時選擇留言放在直播畫面中
https://streamyard.com/

# 20200808
找一個函式的能力
回歸
分類

Generation 生成
產生有結構的東西，文字圖片


照片加入雜訊
聲音是否為合成

可解釋AI
PNG JPG
左下角有英文

Catastrophic forgetting 災難性遺忘
機器的終身學習

更有效率的學期
學星海用了200 年 by

學習如何學習 Meta learning
根據資料找一個「找一個函數f」的函數f的能力

機器學習->找一個函數的能力（依靠數據）



觀察cpu procdss
追根究底
研究gcc是怎麼做的


CICD 步驟
連結ci服務
Add testing scripts
Add packing scripts
Add deploying scripts
Implement 

CI 太久怎麼辦
CD太久怎麼辦
—-
可重構式光塞取多工器
—-

縮網址
https://github.com/tyzesc/s/blob/gh-pages/script.gs
——-
Cupertio(iOS weigt)


Fuchsia


DartPad
找投影片
—-

Cloudflare
CloudFlair


# 2020/06/18 91APP 電商技術大解密
## 議程一： 呂致緯（Zhi-Wei Lu）資深軟體工程師  
- 主題：新促購機制——抽象化系統設計思維以促購引擎為例

    - 結帳 與 折扣計算 分開解耦

## 議程二：蔡奕陵（Steven Tsai）資深軟體工程師
- 主題：解密 91APP Queue System
    - SLO is a service level objective
    - 解耦
    
    - 擴展服務需要即時性 => Load Balance

    - queue 在關機之前會確定所有工作都完成

    - 設定在不同的需求下，有不同的要求
        - 月報一兩小時內完成即可
        - 簡訊五秒內要到客戶手上

## 議程三：座談

- 對談人
    * 濮紹華（Alan Pu）資深技術總監
    * 吳剛志（Andrew Wu）首席架構師
    * 李敏宏（Matt Lee）資深技術總監
    * 施維忠（Steven Shih）資深技術總監

- 增加服務量
    - 分散排隊 多開收銀機
    - 閘道控制 上高速公路前有紅綠燈

- 模擬 壓測
    - 水平垂直都不行時，開專案
    - 業績增加，但資源使用量降低 25 %


# 2020/06/11 91APP 電商技術大解密

## GraphQL & React-Apollo

- ES6 新特色 Promise

- Fetch API

- Redux-observable
    - 111 行
- 改用 GraphQL  ReactApollo
    - 變少剩約三分之二

- GraphQL  
    - 為了詢問 API 而生，新的查詢語言
    - 為了滿足查詢語言而生，能與既存資料互動的執行環境

    - GraphQL 可做為 API Gateway(Web server)

- ReactApollo
    - 在 React framework 中，可以讓我們從 GraphQL server 取資料的函式庫

    - 優點
        - 串接後端從多個 Endpoint 變一個
        - 前端精準取得自己要的資料，甚至可巢狀取
        - 處理非同步的複雜邏輯，不需要自己處理
        - 可滿足大部分的資料操作情境

- [範例程式](https://github.com/iamshaunjp/graphql-playlist/tree/lesson-36)

- 無限下拉選單
    - 實作

## Backend RD 的日常

- github workflow

- linter
- 自動提醒修正

- Unit test

- 金字塔 比較好
- 甜筒化測試 不太好


- coverage 越高越好

- core method

- 不同市場不同組態設定 
- artifacts management

# 電商數據資料流（digital data flow）的應用架構如何運作於 Messenger Ads 及落地電商商品資料分析？
歡迎大家加群組https://www.facebook.com/groups/501522897228952/
社團分享的筆記https://hackmd.io/@SDXaACIXR5O-rNxCwot9ZA/r1wCHC6xI

- awoo 資深技術師Caesar 
電商資料前處理


Product feed的特性
更新頻繁
讀完就放在que中
Paser和worker中間就像隔著一道牆

Landingpage要多下一點功夫
不能讓好不容易取得的客戶跑掉


分頁行為造成分析上的困擾
做成表格

標籤才可以跨領域
Product type 記得要給的

- Botsnova CEO Sean Liu
廣告相關的api

 Business manager

廣告結構
Campaign活動 廣告組合 廣告

廣告

Bid Strategy 出價策略

在活動和廣告組合都設定出價策略，會打架

CDM廣告連結是引導到開啟對話視窗



# 2020/01/09 iFit 到 ECFIT 的數位轉型之路 | iFit ＆ ECFIT 雲端 CRM 創辦人謝銘元
兩天賺10萬的誘惑
好產品可以賣個兩三年

導購的商業模式5人
無法累積名單
無法控價

轉單20多人 年營業6000萬
還可以的電商網站100萬
常缺貨

總代理
缺點，常需買斷一批或承諾叫貨量
一年網路總代理

低價 蝦皮 超過1000就不太行
女性 Nono

找顧問
一個月開會兩次
找到適合的代工廠

自創品牌
優點 產品生命週期長
缺點 經營成本和複雜性高

Line@上線
月營收
400 -》1000萬

包貨是比較浪費時間的事
增加營收才是比較重要的事

IFit  圖文累積用戶-》發掘客戶需求-〉再找商品
傳統。先有商品 -》再找客戶


萬年不敗款
瘦肚子 瘦大腿

經營vip社團

廠辦合一
快閃店
相同TA分佈

門市訓練
上新聞


Line spot

各店店長經營line@
門市量化分析
門市質化分析
第一線情報可以回饋給ceo 開發人員

機動性展售會

能幫你賺錢的就自己做



Fb廣告中look like

半年沒跟你買，就不會再買了


5000萬 才自己做IT

能賺錢的先做
專業服務可能 營養師 專業器材


# 2019/12/14 打造高階決策力！將來銀行的獨家策略學！
講者｜吳建頤 將來銀行 策略長

補習班訓練
有物報告
金融美學
死豬不怕開水燙
在水缸中跳芭蕾
Trust no one
鯊堡監獄的救贖Institutionalized 
對付無賴的方法就是要用更無賴的方法
如果你從未錯過航班，代表你在機場的時間太長了
創新就要偏執且無情地執行下去
你的策略，我的系統
成就=成功*影響力*速度
專長重在(1+1+1)>5
講人話
影響力有量級的差別
獨特 我有；是我
Fintech252 持續做一件事
公開讓別人來監督你
決策前提，切膚之痛
決策力培養 工作/生活大小事一路預測
策略+決策 謀與斷 執行
不執行 策略決策皆無用
比德定律

你想的 你講的 別人聽到的 別人記得的 通常是四件事

其他推薦書在照片中
山居筆記 論小人

理解工作中的人性
寫下你的四個策略
勇於決斷承擔風險

# 2019/10/06 17FIT-運動場館創業及經營說明研討會
- 合作廠商
    - [UrMart](https://urmart.com/)
        - 早餐吃麥片關係企業，運動吃蛋白
        - Tryall 分離式乳清(適合乳糖不耐症)

    - [UP運動吃沙拉](https://www.upsalad.com.tw/)
        - 沙拉細分 健身 跑者 泳者
        - 師大體育相關合作
        - 運動品牌 賽事 異業 合作

    - [TMMA專營拳擊類](https://www.tmmagym.com/)
        - 13000人次學員
        - 41教練
        - 技術合作

    - [皇娥運動科技(英達科技)](https://www.attacusfitness.com/)
        - 心跳帶系統
        - GPT系統

    - [FunSport](https://www.funsport.com.tw/)
        - 小器材販售
        - 軟式壺鈴

- 17fit
    - [一分鐘Demo影片(要往下拉一點)](https://17fit.com/)
    - 微型化 線上化 科技化
    - 600+ 位客戶
    - 進去，流汗的出來的場館都算
    - 消費者 購買 預約 簽到
    - 平均每兩週加入一個新功能

    - 多元公開的方案
    - 線上購買
    - 線上預約
    - 客戶評論
    - 線上行銷

    - 管理與行銷界線模糊 用科技做生意(數據分析)
        - 課程統計資訊
            - 次數 44% 直覺
            - 點數 28% 彈性
            - 期課 14% 固定時間
            - 無限 12%

- [拉新留舊](https://blog.17fit.com/2019/09/17/conference-brief/)
    - 拉新客
        1. 心動
        - 要有心動的感覺
        - 體驗方案，60%新客是這樣來的。
            1. 單次變成多次
            2. 折扣建議50%
            3. 限制購買次數，原客戶也可推不同課程
            4. 設定期限
            5. 搭配豐富圖文做數位行銷
        2. 行動
        - 設定為體驗方案，在17fit上協助宣傳。
        - 做出連結後貼到fb和ig做行動。

    - 留舊客
        - 自動支付
        - 排定自動支付金額是年營業額的兩倍
        - 定期定額
        - 自動續約
        - 分期付款(私教課一次可能達20萬)
        - 自動支付報表，經營者可了解

    - 變熟客
        - 紅利積點
        - 紅利要設定有效天數
        - 新場館活動紅利較高，鼓勵舊客過去體驗
        - 搭配促銷活動
        - 紅利換成課程/服務/票券/商品，不一定要是現金回饋

- 新功能 [訂寶](https://blog.17fit.com/2019/09/16/dingbao/)
    - 資策會合作 
    - 管理端
    - 服務預約
    - Line內可以結帳
    - FB Messinger開發中

- 一起動健身學院 創辦人 謝佑鑫
    - 主要在桃園
    - 50-60坪左右
    - 之前一年開一間，2020年開三間
    - 讓教練做內部創業，不帶走客戶
    - 一店長四教練
    - 女生學員居多
    - 主推團課(團體進行的私人教練課)
    - 心態：學生是我的。
    - 教練會把學生帶走
    - 教練標準化，做好教練培訓
    - 上班到下班，空堂時間要請教練做什麼
    - 做銷售，那流程在哪裡？
    - 證照是基本。
    - 打電話的話，名單從哪裡來？
    - 做好教練管理，品牌經營

- 新北 王治宇 主任消保官
    - 亞歷山大 10年還沒解決 還在一審
    - 半年買80萬
    - 消費者保護法第17條
    - 根據定型化契約，一次收很大金額時的要履約保證一半
    - 系統故障的時候，被結了64億張千元禮券(60兆)，但由於是零元算贈與一種，結果算是沒事。

- 座談會 
    - 17fit法律顧問 昊鼎國際法律事務所主持律師 袁裕倫

- 最低價方案 每天60
- 17fit有白牌解決方案
- 你的核心競爭力是場館經營，不是開發系統
- 把資源用在行銷上
    - 200萬 100萬:開發   100萬:行銷
    - 200萬 10萬:用17fit 190萬:行銷
- 履約保證
    - 體育局會檢查
    - 有寫沒做 詐欺
    - 做信託
    - 盡量改成月費制
- 場館要轉型的話建議直接停業重新來過
- 不侵害隱私權下，蒐證自保


# 2019/08/31 gogoro
有簽NDA 不能拍照

# 2019/08/31 將來銀行 招募說明會資訊場
產品創造者：傳統銀行
平台角色：fintech業者

沒有紙本沒有行員流程更自動化
沒實體分行，通路更多元
組織從零開始，跳過數位轉型痛苦

手機和錢包，哪一個比較重要

金融商品電商
行業術語和消費者

用數據預測客戶需求

樂天日本電商轉網銀
LINE服務最大化
Open API


麥肯錫 api 三層
https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.altexsoft.com%2Fmedia%2F2018%2F11%2FAPI-Model-Public-APIs-Partner-APIs-Internal-APIs.png&imgrefurl=https%3A%2F%2Fwww.altexsoft.com%2Fblog%2Fengineering%2Fopen-banking-and-financial-apis-how-to-integrate-your-company-into-digital-financial-ecosystem%2F&tbnid=rHw1ABbEttY4bM&vet=1&docid=BPMifw1glwK97M&w=788&h=623&q=mckinsey%20api%20internal%20public%20partner&hl=zh_TW&source=sh%2Fx%2Fim

事件銷售 取代電話全面推銷
普惠金融 因為成本較傳統銀行低，而能服務更多人


SLA99.99% 一個月只能停4分鐘

航空母艦隔離艙

7*24防禦監控
定期紅隊演練

IBMB

面試金牌

監理

獨行俠
害怕挑戰
只有苦勞沒有功勞
同樣的錯誤一犯再犯

Winner have a plan 
Loser have a excuse

小學生暑假學python做出射擊遊戲

pmi.org

解除成就

週報一兩行就好，下週目標

證明更安全的作法

Open bank
資料法務長

軟體服務的邊際成本趨近於0


支付


還有1000多萬人沒有使用

# 2019/07/20 GTLC全球技術領導力峰會 - 台北站

>09:35 - 10:25	The Landscapes in Wireless Device Connectivity  
Jim Katsandres Bluetooth SIG Director, Developer Relations
Beacon  
Mesh  
  
Worldwide Multi-vendor interoperability  
Mesh industrial grade solution 不用router 不用hub，low battery， 
  
照明服務Lighting as a platform   
Direct findings   
2019 Bluetooth market update  

point to point 可達 2 KM  
>10:40 - 11:30	我的十年移動互聯網成長經歷
洪小軍 前美圖秀秀技術副總 & AfterShip CTO
  
滿足業務的技術才是最好的  
重構是很常見的  
業務技術架構師  
同城市多機房  
能併發多個明星出軌，大明星結婚  
把一些產品刪掉做測試，第一次做總會有很多bug  
進入農村  
全球最懂美的公司  
領域性解決方案 電商 社群 ，造成百萬級DAU  

>11:35 - 12:25	順勢而為，蘑菇街技術架構演進之道
趙成 蘑菇街平台技術總監

菇涼  
順勢而爲  
直播主的帶動  
PHP簡單直接快速上手快速開發  
改用Java  
大中台 小前台  
分散式的挑戰 效率 穩定 成本  
  
- DevOps的三大關鍵原則  
    - 標準化避免架構失控  
    - 應用為核心的架構體系  
    - 自上而下契約式的架構管理化  
  
故障模擬每週實施  
壓測及容量評估日常化  
  
做不過大公司  
  
千播大戰，業務井噴式爆發  
音視頻編解碼技術複雜  
基礎設施帶寬及網路品質要求極高  
騰訊合作 一個月內上線  
  
直播佔業務比 目前50%以上 年底60%  
  
按需索取  
新技術層出不窮serverless 邊際運算 k8s  
  
上運後人力千人下降至五百人  
  
初期採用 PHP 可以滿足快速開發，而且新人培訓只需二至三週即可上場開發業務  
PHP 轉 Java 時，員工幾乎都沒有離職，大家都想往更成熟的架構轉型；這應該與公司處在杭州有關，這裡有阿里巴巴，Java 更有價值且個人技術成長氛圍強。

>14:00 - 14:50	從Growth Hacking視角看技術團隊
姜杰 趣頭條高級副總裁

人均安裝43個app
移動內容聚合  
 
Blitzscaling速度大於效率  
18年初100 現在19年七月 600多人  
一能溝通的團團上限約為150人  
AARR模型  
AHA時刻 aha moment   
想法到用戶 從六天到四天 下降三分之一  
>14:55 - 15:45	人工智能：好萊塢與真實間的距離  
尹相志數據決策技術長、Trubuzz數據科學家  

可以講出輸入和輸出的才能被機器學習  
特徵是以向量形式存在  
機器人辨識約在94 95左右  
機器人三定律是小說  
Wifi可以推測出人體動作  
  
把希拉蕊的特徵放到川普臉上  
Time of task  
讓機器為你工作  

>16:15 - 17:05	Venture Studio: 企業的數位賦能實踐  
李佳憲 Neil 悠遊卡董事、LeadBest Consulting Group 執行長

Show,Don’t Tell.   Prove it.  

書[服務主導邏輯](https://www.books.com.tw/products/0010725575)  
- Value in exchange / good dominant logic
- Value in use / service dominant logic
  
企業需要以業務為導向的技術領導者  
  
小規模導入  
  
Lean模型  
  
一個人走的快一個人走的遠  
  
Venture studio  
布料  
  
成效評估  
一季清理一季基本分析一季  
細節一步一步規劃  
  
>17:10 - 18:00	打造IT能力建設的飛輪  
喬新亮 前蘇寧科技集副總裁、環球易購CTO  
  
不是it和業務做交換  
是短期業務和長期業務做交換  
  
若不是中國第一個那就是重新造輪子  
增長掩蓋一切  
好的產品需要時間打磨  
產品經理要下終端  
研發要做要有財務目標，不然就會只是做出玩具  
說不清楚就慢慢討論  
業務增長是唯一的衡量指標  
20解bug 80開發 要有規劃  
訂定目標不清楚時，結案就會一堆問題和唬爛  
如果只學一門課就學業務  
開除員工是為他好  
打擊員工再把它拉起來  
大家要有共同願景  
IT人員特別喜歡自嗨  
要100個人 開除30個 分給70個 調高人才密度  
較無關的單位百分之20  
  
[微信上大大整理好的相同剪報內容](
https://mp.weixin.qq.com/s/V7mhYinVbezKG5H9jM5z3A?fbclid=IwAR3m3TyXc6Il-XGO2INlN9scqVUwnum1yZOs_qCbM5FPecy8iIUCwaFic5w)
>09:05 - 09:55	敏捷轉型之路   
濮紹華 91APP研發處資深技術總監

OMO是雙向的  
從kanban(目視管理)開始做 Todo analysis doing pr qa pp  
視覺化管理(燈號系統)  
起手式  
不改流程不動組織，推動阻力最小  
流程視覺化，團隊狀態透明  
2017Q3開始scrum  
Scrum起手式  
強矩陣的組織  
PO權限  
部經理權限  
VSTS  
實體版和電子版  
實體版  
優點  
上手容易  
流程可快速視覺化  
初期流程未定下修改容易  
缺點  
不方便統計分析  
視覺化沒有電子容易  
電子-有照片  
  
問題  
沒有全貌  
分線造成彈性不足  
Silo太多  
部經理職能不清楚  
  
2018Q3維運一體化  
Code review 自動化  

>10:00 - 10:55 Moving from full automatic manufacturing to intelligent manufacturing
游志源 台積電部經理

保密  

>11:05 - 11:55	Let the world smile  
丘立全 啟雲科技股份有限公司 Speed 3D Inc董事長暨執行長 

茶水是熱的 白板筆有水  
第一桶金可能是害人精  
沒自己發薪水不算老闆  
商業模式是創業成功與否的重要因素(product->service)  
當老闆一將功成萬骨哭只有第一沒有第二  
帶團隊如球隊Coach  
經理人和老闆不同月底要發薪水  
上火箭別挑座位  
但仍不保證成功(app收入-AWS費用=沒什麼賺)  
I hope to see your smile  
  
>12:50 - 13:40	從防毒產業到區塊鏈安全業務的挑戰  
范紀鍠 CYBAVO共同創辦人暨執行長  

防毒軟體分類
- Black listing  
趨勢/塞門鐵克  
側重檔案特徵樣本檢測，在入口攔截(Email web file landings )  本地病毒特徵碼升級  
- White listing  
360/Bit9  
行為分析 白名單為主 黑名單為輔 雲端查詢  
  
**免費資安保險**  
網購先賠  
花錢買樣本  
最即時的樣本和手法分析  
可被騙12次  
利用保額 增加加保意願  
  
用戶剛需與安全平衡  
創造一個沙盒環境讓用戶去執行這些有風險的軟體  
IE Vedic codec  
各種電子書.exe  
  
廠商與客戶需求理念策略都不同   
市場碎片化  

>13:40 - 14:30	Microservices 微服務時代下的工程師組織管理
鄭斌彬 Oursky創辦人暨總監

理想情況會有完整的架構圖  
但是要正確的分成各自獨立的系統  
用business units 來分  
不要共用DB，很容易互相打架  
選擇正確的大小而不一定要micro  


>14:45 - 15:35	從 Google 到 iKala - 創建及領導 AI 新創  
程世嘉 iKala愛卡拉共同創辦人暨執行長

十個月9萬個電商  
東南亞跳過市集式的行銷，更偏重網紅直播市場  
權責分不分的清楚  
技術長要偏民主一點，太偏向兩極端都不好  
無中生有的產業通常無法快速上線，需要一些時間(無人車)  
市場上現在有沒有已經很好的解決方案  

>15:35 - 16:25你準備好這場戰爭了嗎？以紅隊定位企業資安缺口  
翁浩正 戴夫寇爾DEVCORE執行長  
 
資安缺口  

像醫生提出診斷  

紅隊演練  
資安分析圖表Mitre attack matrix  

如何反應才是重點  
入侵時間短潛伏時間長  
資安只是IT部門的事情嗎？  
資安預算支出應用風險評鑑的範圍相符  
縱深防禦  
確認防護標的  
盤點資源  
勝兵先勝 而後求戰  
敗兵先戰 而後求勝  
ISO27001  
公司員工也有可能是內鬼  
不一定要花大錢也能做  

# 2019/5/14 Python 101 應用幼幼班(遊戲/App/網路爬蟲/自動化測試/RPA)
遊戲製作  
http://www.stencyl.com/download/  
自動化測試  
https://airtest.netease.com/changelog.html  
用blocky開發app  
https://thunkable.com/#/  
Scrapy  
https://scrapinghub.com  
portia  
https://github.com/scrapinghub/portia  

# 2019/3/9 wanted求職嘉年華
Shopback
300萬筆訂單

# 2019/3/7 APPLE企業服務 醫療服務
在沒有網路的地方如何設計機器學習協助醫生做出診斷
27K臺
自動化部屬
Ipad租賃方案一個月五百
MDM
Met ehr資料交換格式
Ios企業應用指南
Ochsner
Health kit
大iPad Rro的方便
https://www.apple.com/healthcare/
https://www.apple.com/tw/researchkit/

每年
企業佈署會員費用299美
個人開發者99美


# 2019/1/10 西天取經 美國娶面經
做排序
010312
131200

時間複雜度
空間複雜度


確認不是空陣列
算出長度
a= Len()[]
檢查是否為零
If [x]==0
是的話就swap到最後
For([x]=[x+1])
每一個都檢查

Root
檢查是否有下
長度，鏡射

知名演算法
BFS
DFS
Union find


# 2019/1/3 【創兆力學堂#5】營運計劃書
講我多會賺錢
講我要怎麼做

未被滿足的需求
新方法解決以前的事
新技術帶來新需求

他們養的起我們嗎？

整個市場 不等於 我能接觸到 不等於 我十拿九穩拿到

引用政府和知名機構的數據

做生意就有小圈圈，圈外人很難打入
別死在硬功夫上，常常軟功夫比較有用
# 創新、創意、創業 ，打造數據新契機
LINE 有  2100萬人在用

Data-driven 

3D 500美
魚眼 2000美



# 2018/11/19 南向傳說金銀島，越南電商市場實戰解析！ （高雄場）
前測KOL
台北辦事處
索賄

認證
福爾摩莎雲創基地
1.2億新臺幣

12131415樓

越南 印尼

留學生 賺錢 出名
在台灣越南網紅 在台越南人 在約越南人
會賣的 建立品牌形象
外配族群

前測
踩線團
二級代理

甜一點

香水

現金交易
貨到付款

手機 醫美 機車

# 2018/11/27 智慧城鄉 Open API 健康資料共創工作坊
從使用者角度去想  
看的廣 看的細 看的深  
  
工作前  
定義 規劃 準備  
目標 範疇 器材  
工作中  
確認 執行 監控 調整   
檢查 工作 過程 修正  
工作後  
完成  
結束  


# 2018/11/21 猜心泡芙 泰奶奶 快閃店經驗分享
<猜心泡芙>
起源  在澳洲 1省錢 2殺時間 3感覺夢幻
蛋黃酥的蛋黃都自己做
烘焙用品越買越多 花5K寄回台灣
澳洲打工的店老闆很好給寄賣甜點販售

做泡芙一直失敗
命運弄人 我這輩子不要做泡芙

失敗就去總圖借書 借的不是書，是一份勇氣

省錢貴人
Logo自己設計
木攤車是裝潢師傅土炮來的
烘焙業老闆的二手烤箱
文化中心刻印章師傅幫忙製作印章
吃的安心
香草 一公斤 一萬漲到三萬
紅麴粉 變美又提味
金糖原味--豆漿 更清爽
爸爸突然走了 爸爸名字(經堂？)在裡面 
人生有連結 故事性
想要收集每一種口味 促進客戶回流

時尚玩家錄影 當下罰單1200 當晚刮刮樂2000
開完單轉身問說五點下班還有沒有

警察局消防局衛生局環保局都來關心一下
掃地前後左右整條街都掃 做給檢舉的人看
創新的速度要超越別人模仿的速度
媒體和部落客的熱潮是一時的，約一週
要創造自己的熱潮
百貨快閃分享
沒有酥油的泡芙就是填餡之後會正常回軟
各大百貨快閃的時間通常都在年底
快閃櫃位 一開始是手稿設計後再請鐵工師父做
櫃位有正方形也有長方形 盡量靈活配置
做花窗的大哥幫做有傳統風格的架子
紙盒 正面吃 背面廣告 拿著自動有廣告效果
快閃現場可放一些創業過程分享
建議現場吃口感才是最好的
感謝家人 朋友 表弟表妹 甚至是台中的姑姑

<泰奶奶的 ThaiGrandMa's>
泰國傳統手作奶茶專門店
圖多請看IG
https://www.instagram.com/thaigrandmas/

環保麻繩掛袋吸引到第一批人
花蓮地震做公益，結合(公益)義剪頭髮樂捐送奶茶，捐出一日營收
通路合作(沒有賣泰奶的泰國菜店)
市集合作(中山大學)
快閃活動(棧貳庫)
客人有文有說就是有這個需求，量多就可以考慮做
漂浮金焦泰奶奶(幫助農民消耗香蕉)
粉紅泰奶奶(8種味道，泰國本地和泰奶一樣重要的飲料)
快閃店，百貨公司15% 開發票5%  需要漲價50>70
Hash tag 很重要 加入地址 商圈 讓別人一查就會看到
回覆客戶要溫馨有感情不冷漠

# 2018/11/13 突破營銷的AI心法 「2018 人工智慧x大數據應用論壇」
機器人流程自動化RPA  
禾力科技 桌面螢幕廣告 威秀廣告  

# 2018/10/27 泰德美術館 裸
詩人的疑惑
人偶
雙魚座

# 2018/10/26 2018智慧餐旅論壇-數位狂潮下的餐旅革新
OYO印度代經營旅館
開門奉茶 出門送水
飯店管理pms系統

# 【雷射切割】 木作手機架
轉存成DXF檔 
選autocad2000的版本

木頭 ABS 玻璃 軟木 塑膠 紙 不能雕金屬
距離20mm 
雕刻 3mm木板 速度450 功率45%
黏木頭用的是太棒膠

# 2018/07/29 PS + AI
往回幾步 Crtl + Alt + Z
往前幾步 Crtl + Shift + Z
空白鍵按著 抓著圖移動  

濾鏡 > 液化 縮攏/膨脹 

加亮工具 變白
長按會出現加深工具

印章工具 Alt + 點一下 = 吸  

套索工具
影像 > 色彩平衡 修改顏色  
跳出套索工具 Crtl + d  
Alt按著 減
Shift按著 加

修補工具 移除背景雜物  

影像 > 調整 > 曲線  整張照片調亮  常調成S型
影像 > 調整 > 色彩平衡  調偏藍偏黃之類

去背  先把鎖拿掉  

魔術棒  快速選取  
Alt按著 減
Shift按著 加

套索工具剪下狗頭  Crtl + X 

Crtl + T  可以水平翻轉和旋轉
enter存檔  esc退出  

右下 增加遮色片
筆刷 前色選黑色  就可以刷掉  不透明調成50的話就要多刷幾次  

## 下午AI
AI中沒有裁切功能
要選底圖 + 選擷取範圍 
製作剪裁遮色片

圖層 眼睛旁邊點一下 可以鎖定

字調整完成後 > 製作外框 變成圖檔

鋼筆

視窗 > 影像描圖 > 描圖 > 展開  

# 20180725 設計小聚 從生活設計到國際競賽主視覺

# 2018/07/19 焦點分析商業模式
設計一門好生意：自己動手，Step-by-step畫出未來新商機  
http://www.books.com.tw/products/0010758378  
獲利世代：自己動手，畫出你的商業模式  
http://www.books.com.tw/products/0010567254?loc=P_asb_002  
一個人的獲利模式：用這張圖，探索你未來要走的路  
http://www.books.com.tw/products/0010756794?loc=P_asb_001  


多邊平台 FB Uber 104
Value position 顧客期待從你的產品服務中得到的利益與結果
談感覺不是規格
有一些價值只是基本門票拿出來強調並不一定加分
早餐奶昔的競爭對手是香蕉甜甜圈巧克力棒貝果，不是漢堡王的奶昔
所以有得來速，縮小吸管，變的更黏稠
我們不用解決所有問題或滿足所有需求
有多少種方式和TA互動
如果你是客戶會怎麼做
客戶的世界不只關注和你生意有關的事
生意要成功時機很重要
不同背景的人對經營環境分析有不同的視角
一季做一次環境分析
團隊章程，創業前先討論
願景的形成，對團隊的決策會造成影響

缺乏行動的願景只是在做夢
Vision without action is just a dream 
缺乏願景的行動只是浪費時間
Action without vision just passes the time
有行動的願景是可以改變世界
Vision with action can change the word 

趨勢視覺化可以避免策略盲點
邀請不同專業共同討論商業模式的機會與威脅
規律整理定期討論檢視即可
明確願景利於建立重要決策的原則

No business plan survives first contact with a customer

要做prototype
盡早找出最脆弱的部分
盡早經過市場驗證

是去探索不是去說服
當今最大的憂慮在於想用昨天的工具解決今天的問題
Fall in love with the problem not you solutions 

工具書技巧找藍色方法找黃色案例找紅色
異業聯盟有沒有增加新的價值主張，抱團取暖？互相利用？市場需要嗎？多少人需要？
創業沒有人幫你打分數，請誠實一點
大圖開始用+-?來檢查有沒有做到


# 2018/07/18 創業五趴存活的十塊文案金磚 唐崇達 Dakuo 高雄市數位內容創意中心
加盟
低價
模糊 hTC
衝動 寵物店
外行 讓廚師吃定你
好友 賺錢就拆夥 賠錢就發火
山寨 模仿不會成為本尊
樂觀 只想用錢堆，顧小孩健身房
眾所需求又與眾不同

預見時代的眾所需求
同中求異的獨家賣點 700萬蔥出來的餅
對手望塵莫及的優勢差異
切入市場的立足點
切出專屬客群
客群來找你想解決的問題
要找到並搶到最有利你的定位
先發後來要有不同策略
善用網路工具串連，做好內容互
一語道出獨家特別之處的特點命名

# 2018/07/16打造專屬顧客互動幫手：FBMessenger智慧商務實例 商務數據一點就通：入門必學GA實戰技巧
Data Studio可以接多種來源  

# 2018/04/21 法國&臺灣開放資料座談 FR-TW Open Data Forum
哪一些資料可以公開哪一些不行？  
工程進度？

# 2018/02/13 AIC 【專題論壇】新世代智能數據：科技如何破壞性的改變我們與資訊數據的互動
把相關字詞做成文字雲，每半年檢視一次  
愛麗絲紅心皇后問題  
每天學一點教一點  
騎腳踏車載一袋沙  
  
# 2018/01/19 AppWorksSchool
https://goo.gl/WXcteV
https://goo.gl/hxznmp

# 2017/12/26 AppWorksSchool 從 0 開始學程式，非本科系的軟體轉職心路
https://www.facebook.com/events/2016338851804371/  
  
學習順序：基礎語法 單元功能 個人專案 協作專案  
轉職順序：業餘學習 大量學習 面試求職 工作調適  
培訓順序：遠距學習 駐點集訓 求職準備 職涯諮詢  
  
自作專案  
協作專案
期末專案

### Android
Google  
安博盒子  
---
不能買iPhone  

### iOS
規格統一  
消費能力  
---
要多買一台Macbook
