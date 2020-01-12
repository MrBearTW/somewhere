# 2020/01/12
Coursera課程
https://www.coursera.org/learn/aws-fundamentals-cloud-migration

# 2020/01/04
#AWSCertifiedChallenge
https://twitter.com/jeffbarr/status/1213119758159081474?s=09

# 2020/01/01 e-training
We cannot find the training you are looking for.


# 2020/01/08 AWS re:Invent 2019 re:Cap AWS 雲端科技發表會 - 台北站
- 開幕致詞 王定愷 香港暨台灣總經理, AWS
    - 2019拉斯維加斯年會 60000人 1800美
    - 從營收看
        - AWS 360億 35%年增率 約1兆台幣
        - Amazon 2000億
    - 聯發科
        - 7奈米的soc(系統單晶片)晶片
        - 第一顆5G soc (A system on chip)
        - 晶片設計EDA需要強大運算效能
            - 電子設計自動化（英語：Electronic design automation，縮寫：EDA）
            - 透過混合雲來整合
            - 累積使用超過12M個Ec2
        - Edge computing
    - 台灣研究生就有AWS Professional certificates，不只是Associate
    - PR / FAQ
        - A press release (PR) Frequently Asked Questions (FAQ)
        - (https://www.forbes.com/sites/innovatorsdna/2017/08/08/how-does-amazon-stay-at-day-one/#5772f3e7e4da)

    - 台塑
        - AI 交出成績單，良率的提升96% -> 99%
        - IT很強，ERP是自己做的

- 2019 AWS 雲端科技發表會精華 以及AWS DeepRacer League 獲勝團隊分享  講師: Dean Samuels, Lead Architect, AWS ASEAN
    - Fargate
        - AWS Fargate 是一種無伺服器運算引擎，適用於搭配 Amazon Elastic Container Service (ECS) 與 Amazon Elastic Kubernetes Service (EKS) 使用的容器
        - 管理ec2和eks工具(這好像不太對)
    - Braket quantum computing 
    - Transit gateway
        - 網路服務
        - Multicast
    - Data flywheel
    - Redshift(Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud.)
    - Elasticsearch RA3
        - UltraWarm
    - SageMaker(Amazon SageMaker 是一項全受管服務，能讓所有開發人員和資料科學家快速輕鬆地建立、訓練及部署機器學習 (ML) 模型。)
        - Model Monitor
        - Autopilot 
    - Code Guru 自動做code review判斷哪幾行比較會花費
    - 其它新功能
        - AWS outposts(AWS Outposts delivers fully managed AWS infrastructure, native AWS services, APIs, and tools to virtually any customer on premises facility.)
        - AWS Local zones
- 交通大學 電腦遊戲與智慧實驗室 (NCTU, CGI Lab)
    - 模型開發功能
        - 選左邊 選右邊
        - Reinforce learning 
        - Sim2real
        - 加入不穩定光源製造真實世界環境

- 2019 AWS re:Invent 媒體觀察與雲端科技面向5G x AI發展 黃建智 DIGITIMES 研究中心總監
    - M6g c6g r6g
    - AInferential(這應該是錯字)
    - 南韓有500萬 5G用戶
    - 發展AR
    - 汽車
    - 工廠生產
    - AWS wavelength(AWS Wavelength 可讓開發人員為行動裝置和最終使用者提供延遲時間低於 10 毫秒的應用程式。)

- 分享主題：雲端環境災難後的省思 | 講師：Sammy Lin, 資深SRE工程部經理, 17 Media
    - SLA雲端服務賠償條款？
    - Availability       Reliability 
    - DR option災難還原
    - 限流。現有已登入用戶不影響，新登入用戶直接進不來
-  分享主題：My ElasticSearch Journey on AWS | 講師：蔡宗城 smalltown, Site Reliability Engineering Lead, AMIS
    - 點下去就可以用了 vs. 自幹省錢
    - log分析ECS不是直接對用戶有影響的服務
    - Open district for elasticsearch

- 下午workshop 使用 CDK 打造高併發請求的無伺服器系統 講師: Pahud Hsieh, 無伺服器領域專家, AWS
    - 情境1: 重現 re:Invent 經典場次 SVS327-R 使用 CDK 打造高併發請求的無伺服器架構): 探討如何完全用 AWS CDK 打造一個高併發訂單吞吐的 Serverless 訂票系統而不使用任何一台 EC2。 
    - 情境2: reInvent 2019 無服務器與容器服務最新功能工作坊    介紹：我們將會介紹這次 reInvent 幾個 serverless 與 container 的最新功能，並且帶領大家動手實際操作   
    - https://github.com/pahud/svs327-reinvent2019
        - 先確認需要什麼功能，再搭配適合的AWS服務

- 晚上
- 基於 AWS 服務的壓力測試攻略—以線上匯款平台為例 Cliff Lu,首席雲端架構師, EMQ Limited
    - Load testing 使用已知安全的負載
        - 可否承受設計的負載
    - Stress Testing 超出已知安全負載
        - 驗證過載後的恢復情況
    - ColudFormation尚未支持capacity provider
    - Cloud watch log

- Vishwakarma: Terraform modules for deploying EKS and Self-hosting Kubernetes  Kyle Bai,網站可靠性工程師,AMIS
    - Infrastructure as code 快速部署
    - Terraform 是一種 hcl hashicroup config language 
    - 公司自己開發的容器管理工具Vishwakarma
    - 採用Core OS，因為很多東西都只有readable
- AWS 微服務架構分享－用 ECS 打造跨國物聯網服務 Ernest Chiang,Director of Product & Technology Integration, PAFERS TechTGONetworks
    - Application first
        - task管理
        - ECS改用Fargate
            - 官方說得很簡單
            - 其實 image封裝要做很多修改
    - 參考資料
        - [AWS re:Invent 2019 新發佈擴展策略 Amazon ECS Cluster Capacity Providers](https://www.ernestchiang.com/posts/2019/2019-12-17-amazon-ecs-capacity-providers/?utm_source=awsrecap&utm_medium=event&utm_campaign=reinvent2019)
        - CON325
        - [Deep dive on Amazon ECS cluster](https://aws.amazon.com/tw/blogs/containers/deep-dive-on-amazon-ecs-cluster-auto-scaling/) 
- 不是你選擇那一刻，而是那一刻選擇你 - 災難演練 @ AWS 實戰分享 Rick Hwang 研發資深經理, 91APP
    - 災難演練計畫
        - 預演
        - 偷跑
        - 假wifi
    - 業務核心目標
        - 在xx間內，搬移到yy區，回復zz%的服務
    - Aws  DR(Disaster Recovery) 白皮書
        - 成本 恢復時間
    - Divide and conquer
    - 團隊與服務的關聯，就是溝通路徑 康威原理
        - 康威法則(Conway’s Law)
        - Any organization that designs a system (defined more broadly here than just information systems) will inevitably produce a design whose structure is a copy of the organization’s communication structure.——Melvin Conway, 1967   


- 社群閃電秀 (語言: 中文)
    1. Zoe Hou & Cherie Liao, Agile Girls 
        - 紙原型
    2. Fash Chang, Chatfuel Community Taiwan 
        - SPA（Single Page Application）
    3. Simon Sun, JavaScript Developer Conference Taiwan 
        - 辦研討會不會賺錢



# ELK ElasticSearch、Logstash、Kibana 研究筆記
- https://atceiling.blogspot.com/2018/05/elk.html
- https://www.evanlin.com/using-logstash-elsticsearch-and-kibana/
    - https://www.youtube.com/watch?v=Kqs7UcCJquM 
- https://blog.toright.com/posts/5319/fulltext-search-elasticsearch-kibana-bigdata.html
- [Joining queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/joining-queries.html)
- [官方教學影片](https://www.elastic.co/webinars/introduction-elk-stack?baymax=rtp&elektra=docs&storm=top-video&iesrc=ctr)
    - https://www.elastic.co/webinars/getting-started-kibana?baymax=rtp&elektra=docs&storm=kibana-int-unknown&rogue=top-video&iesrc=ctr
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








