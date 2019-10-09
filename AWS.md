# ELK ElasticSearch、Logstash、Kibana 研究筆記
- https://atceiling.blogspot.com/2018/05/elk.html
- https://www.evanlin.com/using-logstash-elsticsearch-and-kibana/
    - https://www.youtube.com/watch?v=Kqs7UcCJquM 
- https://blog.toright.com/posts/5319/fulltext-search-elasticsearch-kibana-bigdata.html
- [Joining queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/joining-queries.html)
- [官方教學影片](https://www.elastic.co/webinars/introduction-elk-stack?baymax=rtp&elektra=docs&storm=top-video&iesrc=ctr)
# 2019/10/02 AWSome Day
### Module 1 Introduction and history of AWS
- Infrastructure
    - [Regions](https://aws.amazon.com/tw/about-aws/global-infrastructure/regions_az/)
        - at least 2 AZ
    - Availability Zones
        - Isolated from failures
    - HA
        - 一個Region中，AZ connect with low-latency
        - 要做跨Region備份要另外再手動設定
    - Edge location
        - Route 53(DNS)
        - CloudFront(CDN)
- 17分享
    - 更新 
        - APP 每週
        - Server 每天
    - 市占率
        - 日本 台灣 >40%
        - 港 >20%
    - 隨業務增長從Beanstalk -> ECS -> EKS
### Module 2 AWS Foundation Services
- Amazon Elastic Compute Cloud
    - EC2 
        - 選CPU, Memory, storage, network
        - 可彈性修改配置，所以可以測試完後在重啟改設定直接上production
        - AMI Amazon Machine Image
        - Instance 可選擇(臨時大用量，可被中斷服務，更多...)
    - ECS
        - AWS Fargate
        - EC2(可調整更多細節)
    - Lambda
- Networking
    - VPC Amazon Virtual Private Cloud
### Module 3
### Module 4
### Module 5
### Module 6

- 考證照費用  
Cloud Practitioner 考試 100 USD。助理級考試 150 USD。專業級和專家級考試 300 USD。 若要更新認證，您可以使用 50% 折扣優惠券代碼在參加最新的完整考試時獲得 50% 的折扣。請注意，可能需要支付稅金 (例如，增值稅)。 

# 2019/06/26
AWS CodeXXXXXX家族

# 2019/06/12 AWS Summit
車車  
https://github.com/aws-samples/aws-deepracer-workshops/tree/master/Workshops/2019-AWSSummits-AWSDeepRacerService/Lab1
有jupyternitebook可以用

# 2019/06/13 AWS　Summit
11:30輕鬆使用 AWS Elemental 媒體服務打造無伺服器 Live Streaming 與 VOD 平台：OTT 業者如何提供百萬用戶流暢的觀影體驗
不透過衛星，透過兩個EC2做北美到台灣的轉播
蓋板式的廣告，進化成直接插入影音中間
LineTV
轉檔，儲存，遞送
雲端較容易儲存和用api溝通
使用serverless架構使內部流程穩定
可規模化的轉檔分鐘數，easy scaling
流程自動化，承租運算力，bitrate動態調整
QVBR技術節省傳輸量

1310AWS如何協助客戶建立DevOpt流程
按圖施工保證成功

14:00在 MongoDB Cloud 上構建無服務器化應用
MongoDB七月會在台灣有辦公室
MongoDB Atlas快速建立雲端叢集
Stitch(serverless服務)(之後會改名)

1450深探如何使用 Amazon EKS 與 Prometheus 進行雲端監控
Unbo
Alerting rule

1550去中心化身分識別（Decentralized Identifiers) 如何改變著未來的網路型態？
Identifier(一組數字？憑證？) 不是identify

要跟上這個人的思考  
All Things Distributed  
Werner Vogels  
CTO - Amazon.com  
https://www.allthingsdistributed.com/


https://ap-southeast-1.sumerian.aws/5dd2faa30cdb459fb981ff1c81f3273f.scene  
# 2019/2/26 AWS
1300公斤 20公里  
模擬競賽  
開放參觀  

# 2018/05/16 CLBC AWS 人工智慧與機器學習實作工作坊
本日相關資料  
https://github.com/jhenweihuang/ml-workshop  

polley
https://aws.amazon.com/tw/polly/  
  
Amazon Lex  
https://aws.amazon.com/tw/lex/  
  
Rekognition API  
臉部辨識  
C-SPAN名人臉孔辨識  



# 2018/1/26魚客松
Data>store>process>store>analyze>answer

lamda無服務器的運算  
一個lamda最多執行五分鐘  
lamda可以平行運用，互相訂閱  

# 2018/01/16 AWS re:Invent

## Scaling Up to Your First 10 Million Users
DynamoDB NoSQL  
Auto Scaling  
  
CodePipeline:
  
CodeStart  
  
Database ferdation  
Sharded horizontal  
Shiftinf to NoSQL  
  
## New! Amazon GuardDuty and AWS WAF Managed Rules: Protect your AWS Deployment with AWS WAF and Continuous Thread Detection and Monitoring
GuardDuty  
CloudWa
  
## How to Design a Multi-Region Active-Active Architecture




## Deep Dive on the Amazon Aurora








