# 2021/08/26 QA 團隊老實說
- 面試建議
  - 溝通能力
  - 上一個手上的專案
    - 怎麼賣錢
    - 怎麼 break down
    - 效能 / 壓力 測試
    - test case
- 工具框架
  - 都有用...
    - cypress
    - expresso
    - seliumn
    - K6 (perfonce)
  - 為什麼要用這個框架
  - 自學的能力
- [QA Engineer](https://careers.linecorp.com/jobs/19)
  - 溝通能力

# 2020/09/22 TW BECKS No.7
## Detect and track Apple devices for fun and profit - Ta-Lun Yen / TXOne Networks (Trend Micro) Threat Researcher
UCCU Hacker 社群

Continuity Protocol

用筆電叫手機開熱點,會洩漏兩邊的 MAC 號碼


Glossary

Private resolve address
Out-of-band 

Ubertooth

Wifi Anonymizes 

Apple eee scanner

## From NLP to Neural Network based Malware Detection - aaaddress1 / Chroot member

利用機器學習來快速判斷惡意程式

工具
- https://blog.csdn.net/whg0001/article/details/7263031
- https://github.com/matterpreter/DefenderCheck


Sigmoid


Asm2vec 論文
https://www.computer.org/csdl/proceedings-article/sp/2019/666000a038/19skfc3ZfKo



Mirai 病毒
只用 25個樣本，約95 % 正確

Mirai 和 ls 約有 60多%相似

執行程式
靜態掃描器 random walking

https://speakerdeck.com/aaaddress1


# 2019/12/4 LINE 台灣年度開發者大會 LINE TECHPULSE 2019
大主管的碩士主修
Fuzzy logic
Neural network
# 2019/09/18  TW BECKS No.4
## 19:10-19:50 (TW) 那些年，我回報漏洞的踩雷經驗! - Orange Tsai / DEVCORE
- CI system attacks
- 鄙視鏈
- Beg bounty              

- 瞭解規則

- RCE

- SSRF
- etc/passed

- Recon Recon

- svg onload
- 平行權限
- Exploit
- 'or' & '='

- orange.tw/xss2
- Xss auditor
- CORS 子網域可以幫父網域設定cookie 

- Hackerone

- SSL VPN RCE

- Yelp 在hackerone上的文件
    - We'll Be Nice To You
    - Please Be Nice To Us

## 20:10-20:50 (EN) LINE Bug Bounty: Rich and Good Hackers - Koh You Liang / LINE Corporation & Ramses(JungHo Jang) / Graylab
- Line出的計畫已發出
    - 104500 usd 2018年
    - 60000 2019 九月
- 都是手工回覆
- 價值決定於影響的程度
- e.g.在登入頁面有漏洞 》1500美金

- 第一次要的要簽一次性紙本，耗時約一個月
- Ybiokey
- 名人堂
- hackerone

- Bug bounty.linecorp

- 清楚描述
- POC


- 第二位

- APT自己寄信
- Denial of service DoS


- Please be general to us then we can make everybody rich

- Line更安全 大家更有錢

## 21:00-21:30 Panel Discussion - David / Line Taiwan Limited, Koh You Liang / Line Corporation, Ramses(JungHo Jang) / Graylab, Allen Own & Orange Tsai / DEVCORE

- 企業面
  - 外包紅隊
  - Zero trust
- 個人面
  - 做好事的機會
  - 給年輕人取得練功的機會
  - 有錢 有名

- 如何做好bug report
 - 太簡短也不行
 - 有時候會被直接回報成out of scope 
 - 可被復現

- 面對企業的態度
 - 轉變
 - 小公司用 第三方平台hackerone
 - 不是用來做背書 或是 低價格的穿透測試
 - 
# 2019/07/24 TW BECKS No.3
AvOracle: New Attack Vector Against AntiVirus - Ryota Shiga / LINE Corporation & Ryo Ichikawa
Malicious
Windows Defender analys
Ghithub/hfiref0x
AvOracle
Disable auditor engine
Oracle
Look

Supply Chain Attack & Modern APT Malware - Inndy Lin & Bletchley Chen / Cycarrier

APT 進階持續性威脅 (Advanced Persistent Threat, APT
Supply chain
Shadow hammer operation

1.copy code 2.stackoverflow 3.text book /doc > Source code > Compiler > Linker > Executables > CI > 1.release site 2.update 3.Dispath > executive 


Shadow hammer operation
Winnti’s algorithms 
Important Name hash algorithms 
MD5 Hash Dump and Decryp

PLEAD APT Malware
ASUS webstorge update.exe
ESET 
Obfuscation Technique

Scsiexe.dll

Malicious Payload
IDAPaython
INNDY(github)

1
2threat hunting
3 threat inteligence
4 threat invest
5

Xensor
CyCarrier



>2019/06/03 TW BECKS No.2  
  
https://pwnable.tw/

Fuzzing
mininodes.com
ESXi
OSS FUZZER
Domato(ifratric@google.com)
Jsfunfuzz
https://nth10sd.github.io/js-fuzzing-in-mozilla/

https://bbs.pediy.com/thread-249986.htm






Mitre att&ck. 
Cave

https://www.ithome.com.tw/news/129054

APT進階持續性滲透攻擊（Advanced Persistent Threats, APT）

Not all techniques are created equal
T1003Credential Dump
T1059Command Line Interfaces 
T1436Common user

Playbook viwer
https://attack.mitre.org/groups/G006

視覺化相關工具
Navigator
Nah aka I/Attack-Tools 
Summarizing/planning tableual

評分



Purdue model
IT
OT

SCADA資料採集與監控(大範圍電力水利)

DCS分散式控制系統(台積電某一廠區)

人機介面HMI
PLC可程式邏輯控制器
ICS CERT
MOXA台灣廠商
DHS美國xxxx


水箱攻擊
FC-90

>2019/05/24 LINE Developer Meetup 開發者小聚系列活動 #8
    
LINE Notify  
https://hackmd.io/s/SkG2zrNaE  
  
保哥  
投影片https://www.slideshare.net/WillHuangTW/angular-and-liff-147428212    
LIFF vscode套件  
https://marketplace.visualstudio.com/items?itemName=doggy8088.liff-snippets&fbclid=IwAR1O-7SEZPNDpcLmwX560AbaD2L6KoNUiZC0sq6J4OCauvA5p6eteAx-Bsg  