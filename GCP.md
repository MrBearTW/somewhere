# 2019/07/02 GCPUG Taipei Meetup #48
Next '19 的 Istio 場次重點摘要
投影片https://www.slideshare.net/williamyeh/next-19-istio  
重點整理https://william-yeh.net/post/2019/04/next19-istio/  
CANERRY 更新  
用lable去切換  
  
Istio  
微服務領域的SDN  
  
分流比例和實際上的repica可以不同  
Circuit Breaking流量異常可以斷開  

Tele

elasticsearch 在 GCP 的實戰  

Electsearch  
ZFS  
HBA card  

# 2019/06/16 GCPUG Taipei Kubernetes Workshop
投影片https://www.slideshare.net/williamyeh/rd-kubernetes-gcpug-2019-06/?fbclid=IwAR0fyLXFOXis9zU0kuw4Ylm-mdqAJE94buCkOCJ_3vNI5ehDLKTcoyLObUU  
  
https://github.com/William-Yeh/workshop-gcpug201906/  
  
2.0  
`git diff --stat HEAD~1 HEAD`  
startup.cs 關掉自動導向https(示範教學用，production建議開啟)  
  
3.0  
docker-compose.yml  

k8s漫畫  
https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16

在3.0狀況下
`docker-compose build`  

4.0
`git checkout `  
``  
``  

刪除namespace`kubectl delete ns todo`  

6.0  
上雲端  

`vi skaffold.yaml` 裡面的project-id也要改

# 2019/06/12 GCPUG Taipei - Tensorflow 2.0 Global Documentation Sprint Taipei
5972  tf.tools
都沒有連結
# 2019/06/04 GCPUG Taipei Meetup #47
準確率Precision & 召回率Rbecall

Nvidia Jetson Nano vs. Google Edge TPU
https://buzzorange.com/techorange/2019/03/20/the-cheapest-ai-chip/?fbclid=IwAR2n0UwZUjyssWZgdZidEoXpHmT0x52v8jzfIU21ftbxIgxXeUh5DfrWLSE  

TF lite
# 2019/05/24 Google Cloud Event
從使用人數來改善架構
100K  
Redis  
  
>1M  
DNS server,Region server,CDN,spanner  
  
>10M  
  
>100M  
  
# 2019/5/14 Cloud OnBoard
講義PDF  
https://storage.googleapis.com/eefylin-demo/demo/Cloud%20Onboard%20TPE_%20Big%20Data%20&%20Machine%20Learning.pdf  
  
一個月的Coursera
https://www.coursera.org/promo/GoogleCloud?utm_source=googlecloud&utm_medium=institutions&utm_campaign=OnBoard_Taipei


# 2019/3/29 Google Developers ML Summit Taipei 2019

開場及 Google ML 產品概觀

上官林傑 / Eric ShangKuan
Developer Relations Program Manager
Google

10:00 - 10:40 A.M.

TensorFlow 2.0 Updates

佐藤一憲 / Kaz Sato
Developer Advocate, Cloud Platform
Google

10:40 A.M. - 11:20 A.M.

TensorFlow and Cloud TPU

魏澤人 / Tzer-jen Wei
Google Developers Experts (Machine Learning)

11:20 A.M. - 12:00 P.M.

Cloud AI: A New Wave for Developing Machine Learning Applications

林書平 / Harry Lin
Customer Engineer
Google Cloud

12:00 P.M. - 1:10 P.M.

午餐時間

1:10 P.M. - 1:50 P.M.

Bringing modern AI to your apps with ML Kit for Firebase

李致緯 / Richard Lee
CTO / Co-founder
Polydice

圖片辨識標籤
本地400
雲端10000

1:50 P.M. - 2:30 P.M.

Actions on Google Overview

林建宏 / Wolke Lin
Google Developers Expert (Assistant)

2:30 P.M. - 2:50 P.M.

休息及換場

2:50 P.M. - 4:50 P.M.

Codelabs 活動
TensorFlow & Keras codelab
Tzer-jen Wei, Google Developers Expert (Machine Learning)

Cloud AutoML codelab
Wayne An, Customer Engineer, Google Cloud
Helen Lo, Customer Engineer, Google Cloud

ML Kit codelab
Richard Lee, CTO, Polydice

Actions on Google codelab
Wolke Lin, Google Developers Expert (Google Assistant)

# 2019/3/28 Let's talk AI
自然語言分析BERT中或不中都要紀錄回來

https://medium.com/@lakshmanok/the-zen-guide-to-getting-your-data-ready-for-machine-learning-5e5782dcf88a

議程表
2019 年 3 月 28 日
上午 8:30 - 上午 10:00 報到
上午 10:00 - 上午 11:30 主題演講
每個人的 AI / AI 帶來的契機
+ 瞭解更多
上午 11:30 - 下午 12:00 參觀 Google Cloud 展覽區
下午 12:00 - 下午 1:30午餐
下午 1:30 - 下午 2:00 行銷科技新浪潮：用 Google Cloud 驅動大數據精準行銷
+ 瞭解更多 企業轉型再進化 - AI4Biz
+ 瞭解更多
D&A - 如何使用 AI 技術籌備您的未來物聯網和 Tensor Flow
下午 2:00 - 下午 2:45 如何有效的整理數據，方能完成機器學習大業
+ 瞭解更多 智能物聯網：Google Cloud 的物聯網願景
+ 瞭解更多
下午 2:45 - 下午 3:30輕鬆的使用DialogFlow打造您的聊天機器人
+ 瞭解更多 物聯網邊緣計算: 使用雲端物聯網，激發智慧至極限
+ 瞭解更多
上午 3:30 - 下午 4:00休息
下午 4:00 - 下午 4:45 Google BigQuery: 能讓您駕馭AI與傳統分析的PB等級資料倉儲 / Deep Learning in Online Retail
+ 瞭解更多 智能製造業：如何利用 Cloud IoT Core 以及機器學習開發預測模型
+ 瞭解更多
下午 4:45 - 下午 5:30 AI民主化之善加利用AutoML以及預先訓練好的模型
+ 瞭解更多 如何使用Cloud TPU加速您的機器學習 
+ 瞭解更多
下午 5:30 活動結束

# 2019/3/27 Google for TAIWAN
不停的列車，確保不要撞死太多人
南向國際市場
Product manager 
生技業已經開始加速了
妳解決的問題有多重要
說故事的能力
長期合作by project漸漸向外輸入文化
14歲創業且被背叛然後又東山再起

Collect filter CF 

兜台南
google.com/grow

Gokube

Google zoo
影子視覺辨識
Pocky小學生寫code
畫圖變菜單
籃球教練
華為p30眼睛病變辨識
保存少數族群語言

ML就是跟電腦說這是A這是B然後給電腦自己判斷
好的ML Model 建立在高品質的data

Identified a problem 


ML API
Auto ML
Cloud ML ML-engine 

# 2019/3/20 GCPUG Taipei Meetup #45

步驟如下
https://blog.qwiklabs.com/study-jam-k8s1/
1.get started 
2.登入
3.輸入活動碼 
4.Enroll要按下去
5.看到Monthly Suscription就是完成
---
中文說明：Cloud Study Jam 啟用 Qwiklabs 步驟 
https://bit.ly/csj-guide-zh

Log

fluentd  
https://www.fluentd.org/guides/recipes/docker-logging

stackdriver logging agent 

filebeat
https://www.elastic.co/products/beats/filebeat  

https://docs.google.com/presentation/d/1I96h-rzGsVYx4A_hZF_sZbsi47SiRyOiR_Et90uHO4Q/edit

tf hub  
從別人的模型上繼續跑  

colab免費用TPU





# 2019/2/26 GCP雲一日本案例分享
選土豆 只送好的土豆照片，沒有用到不好的照片  
建材 類似B&Q的公司，使用一年30萬的專業版GA  
Tripiece旅遊 協助找到日本地區相似於上傳照片的旅遊推薦  
CLOUD　ＡＣＥ自有軟體 共同媒體編輯
：（　　：）也可以送入與億分析中判斷情緒　　

# 2019/1/24 Global Digital Conference It’s time for Better Code, Faster
google cloud hero

輸入帳密
找到project
https://google.qwiklabs.com/catalog?keywords=kubernetes+qwik+start&event=AppDev%20Conference



# 2019/1/9 GCPUG 44
Airflow
https://leemeng.tw/a-story-about-airflow-and-data-engineering-using-how-to-use-python-to-catch-up-with-latest-comics-as-an-example.html

發票整理

# 2018/12/27 GDGK Kaohsiung
PM PO的不同
PBI WBS 工時估計
ASO app優化
App Annie 看app排名的網站
  
可以做匿名發問的網站sli.do

# 2018/11/17 GDG DevFest Taipei 2018

學生社群

https://docs.google.com/forms/d/e/1FAIpQLScBEuy9z8okl9qI0oCwr_b8PCkmSMfqr2qSAeNfL6d9BC4tbg/viewform


# 2018/11/07 Google Cloud Summit Taipei
網紅雷達

Deep angel mit
Capsule network(相較cnn旋轉不影響）
Curiosity-driven learning. RDN

Machine meta learning 

AI發展  行銷 製造 客服 健康照護

# 2018/08/10 GCPUG Taipei Meetup #39
https://docs.google.com/presentation/d/14zHvX6u7U6BnjF-e04MnNzWzgNgYCqid23FtGj5yHM4/edit#slide=id.p  

ERP CMS系統 
  
Fuse.js  
React js + firebase 很快  
  
Prometheus  
Grafana  
PagerDuty  

https://docs.google.com/presentation/d/1QBhxniIoXHQHOxEUOWW142xMrCHHxUmFJa5r68743zI/edit#slide=id.g3b32cf440d_1_19  

# 2018/05/22 GCPUG.TW meetup #37
## Google Cloud Platform Certifications - Cloud Architect 考試心得告白

記得帶護照  
冷氣很強  
官網case study  
4倍難  
  
產品限制 Cloud SQL單台的儲存上限是？ Coldline的限制是什麼？
情境題 讀熟每一個case study 並理解其服務對應
架構題 GAE GKE BQ 前面/後面的串接 log放BQ好還是GCS好  
移轉題 從IDC移轉到GCP，本地資料處理對應到GCP的哪個data產品  
監控題 Stackdriver的功能 agent及應用情境請詳讀  
網路和管理題 GCP專案 subnet的建立 VPC
權限與管理題 如IAM G-Suite與GCP間的權限設定  
CICD的實作題 CI/CD config mgmt deployment canary / blue-green  


flutter
android things  



# 2018/05/08 GDG Taipei #45 - 
fitz愛有氧  
http://www.fitzchannel.com  
遊戲化，社群挑戰機制  
  
cloudmile
estimators  
  
kotlin  
https://kotlinlang.org  
https://blog.kotlin-academy.com/effective-java-in-kotlin-item-1-consider-static-factory-methods-instead-of-constructors-8d0d7b5814b2  
https://medium.com/capital-one-developers/coroutines-and-rxjava-an-asynchronicity-comparison-part-1-asynchronous-programming-e726a925342a  
  
Android P  
https://www.slideshare.net/ssuser8674c1/kotlin-in-practice  
很多權限開始被收斂  
Android KTX  
https  
識別碼  
google allo  
瀏海cutout  
https://developer.android.com/preview/  
  
# Google I/O Extended 2018 Taipei Live Party
https://events.google.com/io/  
Gmail可以用TAB鍵  
拍照直接變成PDF  
色彩黑白  
TPU 3.0  
6種新聲音  
mutiplele  
pretty please  
starbucks  
代替定位  
digital wellbeging 
自動登入付費帳號並顯示搜尋結果  

## Android P
自動調節電量
自動調節亮度
ML Kit  
轉90度控制鍵  
APP timer  

## map
找停車位  
機車  
your match  
投票功能  
  
# WAYMO
1.不合理駕駛預測的防備=看到停紅燈的車有微微動一下，預測可能會闖紅燈，自駕車就會自己慢下來  
2.極端氣候下的資訊處理=像是下雪的環境要怎麼去除掉漫天大雪的干擾  
3.不像人的人。穿孔籠裝的人。
  

# 2018/04/26 GCPUG.TW Meetup #36
##  Continue Deploy at Google Kubernetes Engine
https://www.facebook.com/groups/GCPUG.TW/permalink/2065796520345875/  
cloud shell Home裡面的資料不會消失  
  
https://github.com/peihsinsu/demoweb  
  
External DNS  
整合CLOUDFLARE  
不要兩個指定同一個外掛  
    
clusterbinding.yaml  
  
container builder
https://github.com/GoogleCloudPlatform/cloud-builders
  
bitbucket  
  
可以做到多版本同時在線  


## Use Google cloud trace with opencensus
https://www.facebook.com/groups/GCPUG.TW/permalink/2065796813679179/  
集雅科技  徵才中  
  
gcloud-python  
  
Open Census  
https://opencensus.io  
  
## Kubeflow on Google Kubernetes Engine
https://www.facebook.com/groups/GCPUG.TW/permalink/2065797483679112/  
GKE > 1.9版  



#機器學習速成班
https://developers.google.com/machine-learning/crash-course/  


# Practice makes perfect: the Professional Data Engineer Practice Exam is now live  
https://cloud.google.com/blog/big-data/2018/02/practice-makes-perfect-the-professional-data-engineer-practice-exam-is-now-live?authuser=0  

# GCPUG Taiwan Meetup #34

「用 Drone 打造自動化測試部署流程」
https://www.facebook.com/appleboy46/posts/10156128540834250  
https://youtu.be/SkTte8RmVMM  
https://www.facebook.com/groups/GCPUG.TW/permalink/2015541518704709/  
Drone
Plugin

「CI / CD / Automation 你還沒準備好？」
https://www.facebook.com/groups/GCPUG.TW/permalink/2015542065371321/  
https://www.facebook.com/chengfan.chen/posts/1876528699026620  

Continuous Integration/delivery
Ifttt



# Augmented Reality prototype with IoT and ML API’s 
https://gcpugtw.kktix.cc/events/meetup20180110  
  
https://drive.google.com/file/d/1E5pgNIhENUN2pFaTYug5IPB2vI9k2hud/view  
  
機器學習  
機器其實不知道他在學什麼
Google deepmind how to walk
搜尋出特定照片或相反製造出來

pygame套件來投影
IOT core  Protocal:MQTT
cloud data studio



# Webduino
2017/12/8 Webduino+Google 物聯網實作工作坊  
  
Aruba WIFI分享器
    
慶奇科技 https://webduino.io/index.html  
  
投影片 https://prezi.com/qllibv3awed4/webduino-in-77-f/  
  
github https://github.com/webduinoio  
  
範例檔案  http://simulator.webduino.io/index-stages.html  
  
登入Webduino  https://cloud.webduino.io/
編輯器  https://blockly.webduino.io/  
模擬器  http://simulator.webduino.io/  
  
學習手冊  https://tutorials.webduino.io/zh-tw/docs/basic/index.html  

Google Blockly  https://developers.google.com/edu/  
  
業展資訊 教育認證中心 https://abe.eduvator.net  
  
Webduino【 Web + Arduino 】https://www.facebook.com/webduino/  
G Suite雲端教育—業展資訊  https://www.facebook.com/EduVator/  