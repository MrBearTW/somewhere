# dAPP 【台北說明與組隊媒合會】
webjet


  "appRoles": [
    {
      "allowedMemberTypes":[
        "User",
        "Appliccation"
      ],
      "displayName": "Administrator",
      "id":"f8f0d5df-3037-497f-b8c7-04cfcaa149e1",
      "isEnabled":true,
      "description":"Blockchain Workbench administrator role allows creat",
      "value":"Administrator"
    }
  ],

可能可以看一下  
https://github.com/Azure-Samples/blockchain/tree/master/blockchain-workbench/scripts/aad-setup  



metamask  
https://metamask.io/  
clevergo  
https://www.clevergo.com/  

# 2018/11/7 老闆學校講座《金融科技與數位資產》
數位資產轉移(股權轉換)  

數位資產收費(音樂)  

數位資產的可繼承(親屬關係)  

GDPR


# 2018/07/14,15 自己的礦場自己開 : 區塊鏈so easy
比特幣  
帳本300G
每一秒4~7筆的交易  
分岔   
PoW algorithm 是 HashCash
老牌礦場  
密碼學 HASH RSA  
有三種手續費  
價格上漲原因1.數量有限  
交易所抽10%
wallet.dat的檔案，複製貼上蓋掉之後重新開啟程式就會讀取原有的錢包  
H110 BTC
B750 mining expert
FPGA Field Programmable Gate Array
ASIC
ASIC>FPGA>GPU>CPU

乙太幣  
每秒上百到上千筆交易  
乙太坊簡中技術文件
https://yeasy.gitbooks.io/blockchain_guide/content/
  
公有鏈
私有鏈
聯盟鏈  
  
Hyperledger  
EEA
r3

看比特幣現在狀況
https://www.blockchain.com/en/explore  
  
DEMO  
https://anders.com/blockchain

上課資料
https://drive.google.com/drive/folders/14raAU6xYMIc2FHZDn2bJniIWbT2LrPkI

顯卡挖礦效能排名
https://miningchamp.com

助教的錢包
https://www.f2pool.com/eth/0xeadDca48eE1cD31468c0d1aC6C96E7906D39b2Ff

bitmark的Medium
https://medium.com/bitmark-inc-中文部落格

挖礦機器記得安中NVIDIA CUDA Toolkit

不是爬蟲！IBM AI 輿情平台「Watson Analytics for Social Media」繁中上線
https://www.inside.com.tw/2017/09/21/ibm-watson-analytics-for-social-media
比特幣入門（錢包地址接收、發送與基本概念）
https://medium.com/@YasuoYuHao/比特幣入門-錢包地址接收-發送與基本概念-a3b951a216be
比特幣挖礦的背後 -- SHA 與雜湊現金
http://www.codedata.com.tw/social-coding/hashcash/
白話的 Hash Table 簡介
https://blog.techbridge.cc/2017/01/21/simple-hash-table-intro/
用 JavaScript 學習資料結構和演算法：字典（Dictionary）和雜湊表（Hash Table）篇
https://blog.kdchang.cc/2016/09/23/javascript-data-structure-algorithm-dictionary-hash-table/
非小號
https://www.feixiaohao.com
Hash Table：Intro(簡介)
http://alrightchiu.github.io/SecondRound/hash-tableintrojian-jie.html


用ANACONDA
依序
blockchain_transaction.p
blockchain_block.py
驗證(HASHCASH)
blockchain_pow_poc.py
blockchain_pow.py

沒有去中心化效果的
blockchain_alpha.py
---
full_chain()
{'chain': [{'index': 1, 'time': 1531634206.4679992, 'transaction': [], 'proof': 100, 'previous_hash': '1'}], 'length': 1}

new_transaction('A','B',100)
{'message': 'Transaction will be added to Block 2'}

full_chain()
{'chain': [{'index': 1, 'time': 1531634206.4679992, 'transaction': [], 'proof': 100, 'previous_hash': '1'}], 'length': 1}

print(blockchain.current_transaction)
[{'sender': 'A', 'receiver': 'B', 'money': 100}]

mine()
{'message': 'New Block!', 'index': 2, 'transaction': [{'sender': 'A', 'receiver': 'B', 'money': 100}, {'sender': '0', 'receiver': '824808f5c4b94ed187e86b335f74e19c', 'money': 1}], 'proof': 34535, 'previous_hash': 'da2c4b3ac9d7839140e6cc069571582d28f0aaf5484d0cf2d24f5ebe74deb217'}

blockchain.last_block
Out[19]: 
{'index': 2,
 'previous_hash': 'da2c4b3ac9d7839140e6cc069571582d28f0aaf5484d0cf2d24f5ebe74deb217',
 'proof': 34535,
 'time': 1531634471.4443567,
 'transaction': [{'money': 100, 'receiver': 'B', 'sender': 'A'},
  {'money': 1, 'receiver': '824808f5c4b94ed187e86b335f74e19c', 'sender': '0'}]}
---
CPUMiner-Multi  
https://github.com/tpruvot/cpuminer-multi  



# 創。趨勢 #1 改變世界的區塊鏈
https://www.facebook.com/events/789858281218622/  
一個人每天20次的交易×70億人  
Iot的裝置增加比人類生小孩還要快  
每個技術適合的解決問題不一樣  
區塊鏈可能可以解決這個問題  
無馬馬車  
不是貨幣的交易為何要付費給礦工  
交易費每天都不一樣  
區塊鏈想取代雲，做骨幹服務  
IOTA誘因設計本身就不同，徽章系統  
私有鏈就是不用鏈  
春秋戰國年代  

# 不可錯過的五堂虛擬貨幣與區塊鏈線上免費課程
https://www.facebook.com/fininnotw/photos/a.1896654433990090.1073741829.1475924836063054/2006640192991513/?type=3

# Taipei Ethereum Meetup Monthly Meetup 2018-02
https://www.meetup.com/Taipei-Ethereum-Meetup/events/246635906/?gj=co2&rv=co2&_xtd=gatlbWFpbF9jbGlja9oAJGNhMWVkY2EyLWU4MmUtNGVlNS1hMWI2LTBlZmIyMmI2YjYzOQ  
  
## Simple Smart Contract Control System: a system perspective on operating Ethereum smart contracts (basic tutorial)
by Alison Lin  
https://github.com/EtherTW/talks/issues/9  
  
## A quick walkthrough of cryptokitties smart contract code  
by Racheal Pai  
https://github.com/EtherTW/talks/issues/7  

## ICO: The Good, The Bad and The Ugly  
by Yao Hu @yaochunghu  
https://github.com/EtherTW/talks/issues/10  
  
# Qtum
https://www.inside.com.tw/2018/01/16/qtum-taiwan-meetup  

綠能幣
http://www.energolabs.com/#/ 
  
影片VEVUE
https://www.vevue.com  
  
https://token.io
  
Playcoin  
  
DAEX交易所  
http://daex.io  


# 2017/12/29 政大資管系「金融科技、人工智慧物聯、區塊鍊工作坊」
https://www.facebook.com/events/1510699422379463/

## Guo教授一
2006年還在Finance Energing / Capital one
SVM  
2014年 Text mining Blackrock Google
summer intern salaries 2017  
Finance 跟不上 Tech  
  
Curriculum strikes a balance of FE basics and advanced ML skills  
  
在中國半夜三點半還能上網的人有什麼特性？打麻將？太有錢？還不起錢？
  
Old problem and new opportunity in risk management in Blockchain  
credit rsik
operational risk
liquidity risk
Systemic risk

## 論壇一
安全性
農業 濕度 溫度 酸鹼度  
透過分析決定要種什麼？  
工廠人員監控 走多長？ 走多久？  
租賃業 追蹤使用狀況  
智慧城市 停車  水表 電表  

Bank3.0  
學貸welab 250億美金 壞帳比例1.9% 透過通話紀錄  
利用Blocakchain來協助企業借款能力(增加證明)  
透過Text mining來審閱合約書內容  
  
把市民當seansor  
1999通報透過人工智慧整合 過濾重複  
智慧停車與市民就業權利的衝突  
  
享受
空氣很好  
控制我的先生
吃飯變成計算能量單位  
  
## Guo教授二
高頻交易HFT  
10的負六次方秒
2010 May Crash (Flash crash)事件  15分鐘回復
1987 一年半回復
Lasso

## 廖世瑋教授
加密經濟  
EtherDelta event(半中心化交易所)  
過去幾年，比特幣年底會回檔60%  
集中化程度越來越高  
  
Exchange Information Digitally  
Exchange Value Digitally  
  
App Blockchain 幣圈  
Protocol Blockchain 鏈圈  
  
美國上市文件S1forme
  
Hashing power arbitrage  
crowdfunding
Decentralized Game Asset(乙太貓)
  
## 莊浩鈞助理教授
每小時算出 10萬個品項  
經濟成本上的最佳決策  
用馬可尼可夫去判斷  
每小時100萬筆交易

descriptive what happended
predictive what will happen
prescriptive what should heppen

## 陳恭教授
BFT consensus
The Byzantine Generals Problems
拜占庭將軍問題 聯盟鏈
Practical Byzantine Fault Tolerance
3F+1=N
最低要有4個有一個
七個可以有兩個
Tendermint Consensus
  
Safety Liveness

# 2017/12/27 【創業趨勢講堂系列】FINTECH#2_ICO與虛擬貨幣趨勢
https://www.accupass.com/event/1712150207071812495330  
  
比特幣1M 1  
萊特幣8M 8倍  
  
賣賣價差
有15分鐘的閉鎖期

明年將推出MAX交易所功能，類似期貨交易，需先交類似保證金

# 2017/12/21 【TechTalk】區塊鏈就醬用：案例與應用分享
http://learning.ithome.com.tw/course/Y47KMU3gjBQiPk6

今日沒有明牌，買賣幣請找別人  
前十名都應該可以買(cash除外)

當沒有人在談論技術細節的時候就是真的實用的時候  
現在是戰國時代，大家都在爭取制定規格  
  
The next sharing economy(以空氣盒子為例子)  
--  
Service provider(有車的人)  
Mach macker(UBER)  
Settlement(成交)  
--  
Old cloud(中研院資料庫)  
New cloud(IOTA)  
  
大型企業簡化內部成本，減少對SWIFT之類的依賴  
