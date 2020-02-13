# #1 Introduction
- 白皮書有空可以都看
    - 必看[Blue/Green Deployments on AWS whitepaper, August 2016](https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf)
- 考試細節
    - 130分鐘
    - 65題
    - 馬上知道有沒有過
    - 720 PASS
    - 150美金
    - 多選
    - Valid for 2 years
    - Scenario based questions
# #2 Beginners Guide To IAM
- IAM Identity Access Management
    - IAM is universal
- 對三錯三
    - MFA不是IAM管理的
# #3 EC2
- EC2 101 
    - Elastic Compute Cloud
    - Options
        1. On Demand
        2. Reserved 可預期的流量 長期簽約折扣
        3. Spot 彈性的開始和結束時間
        4. Deadicated Hosts 高度監管行業
    - Instance Types
        - T2 最便宜
        - F I G H T  D R  M C  P X
    - EBS 虛擬 desk
        - SSD
            - GP2 SSD
            - IO1 high IO
            - ST1 big data
            - SC1 cold 
        - Magnetic 
            - cold HDD bootable 最便宜
    - Tips

    - Load Balancer(用完要關掉...)
        1. Application
            - Layer 7, HTTP & HTTPS
        2. Network
            - Layer 4, TCP
        3. Classic (PREVIOUS GENERATION)
            - If application stops responding, responds with 504 error.
                - 504 means gateway timed out.
            - Check web server or database server. 
        - X-Forwared-For Header 看到外部IP
    - Route53
        - 可購買網域
        - 設定Load Balancer
    15. CLI
        - `aws s3 ls`
        - `aws s3 mb s3://xxxxxx`
        - `aws s3 cp aaa.txt s3://xxxxxx`
        - `aws s3 ls s3://xxxxxx`
        - [more comand](https://docs.aws.amazon.com/cli/latest/reference/s3/index.html)
        - Tips
            - least privilege: minimum
            - create groups:
            - secret access key
            - do not use just one access key
            - install CLI in PC
    16. EC2 with S3 Role Lab
        - 從 IAM roles 建立一個新的 roles
        - 從 EC2 attach 上一部件好的 role 
        - 執行`aws s3執行`會卡住
        - 移動到`cd ~/.aws`刪除`rm credentials`
        - Tips
            - immediate affect
            - can attach roles to running EC2 instances without having to stop or terminate these instances
    17. RDS
        - Relational DB Types
            1. SQL server
            2. Oracle
            3. MySQL
            4. PostgreSQL
            5. Amazon Aurora
            6. MariaDB
        - Non Relational DB
            - Collection        = Table
            - Document          = Row
            - Key Value Pairs   = Fields
        - Data Warehousing
            - pull in very large and complex data sets
            - e.g. Cognos, Jaspersoft, SQL server, Reporting services, Orical Hyperion and SAP NetWeaver.
            - AWS DynamoDB
        - OLTP vs OLAP
            - online transaction processing(OLTP) versus online analytics processing(OLAP)
                - OLTP will be very very simple transactions that happen very very frequently.
                - OLAP will be much more complex transactions that will happen very infrequently.
                - RDS - OLTP
                - RedShift - OLAP
        - Elasticache
            - In Memory Caching
                - Memcached
                - Redis
    18. RDS Lab
        - Amazon Aurora 沒有免費試用
    19. RDS Multi-AZ & Read Replicas
        - Backsup
            1. Automated Backups
                - 1 ~ 35 days
                - full daily snapshot and also store transaction logs
                - stored in S3
                - free storge equal to the size
                - backups are taken within a defined window
                - during the backup storage I/O may be suspended amd experience elevated latency
            2. Database Snapshots
                - Done manually
                - Restoring Backups
                    - (auto and manual backetup) restored version will be a new RDS instance with a new DNS endpoint
        - Encryption
            - All RDS support
            - KMS service
            - Snapshot 之後再 encrypt (?)
        - Multi-AZ
            - main DB down AWS will turn on Multi-AZ auto
            - Multi-AZ is for disaster recovery only
                - for performance improvement, you need Read Replicas
            - support
                1. MS SQL server
                2. Oracle
                3. MySQL
                4. PostgreSQL
                5. Amazon Aurora (這一個自動就開啟，其他要手動開啟Multi-AZ)
                6. MariaDB
        - Read Replica
            - You can have five read replicas per production database by default.
            - You can also have read replicas of read replicas, you will get some replication latency if you do that.
            - You could have a read replica in a nother availability zone
            - but you could have a RAID replica in a other availability zone 
            - or you could have a read replica in a completely different region.
                - This is achieved using asynchronous(異步) replication for the primary primary RDS instance to the read replica
            - support
                1. MS SQL server
                4. PostgreSQL
                5. Amazon Aurora
                6. MariaDB
            - 一些提點
                - Used for scaling, not for DR
                - Must have automatic backups turned on in order to deploy a read replica
                - You can have up to 5 read replica copies of any database
                - Each replica is going to have its own DNS endpoint.
                - You can have read replica that have Multi-AZ
                - You can create read replica of Multi-AZ source databases
                - Read replicas can be promoted to become their own databases.
                - You can have a read replica of Multi-AZ source databases
                - Read replicas can be promot in a second region