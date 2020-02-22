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
    20. Elasticache 101
        - Elasticache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud
        - Significantly improve latency and throughput for many read-heavy application workload(social networking, gaming, media sharing and Q&A portals)s or compute-intensive workloads(recommendation engine)
        - Memcached
            - no persistence
            - use Memcached case
                1. Object caching, e.g. offload your database.
                2. Simple a caching model.
                3. Planning or running large cache nodes, and require multithreaded performance with utilization of multiple cores.
                4. The ability to scale your cache horizontally as your grow.
        - Redis
            - open source
            - in-memory key-value
            - supports data structures such as sorted sets and lists
            - supports Master / slave replication and Multi-AZ
            - can be use to achieve cross AZ redundancy
            - use Redis case
                1. Advance data types, such as lists hashes, and sets
                2. Sorting and ranking, such as leaderboards
                3. persistence
                4. Run in multi-AZ with failover
        - Tips
            - alleviate a lot of stress/load
            - is a good choice if you database is particularly read-heavy and not prone to frequent changing
            - Redis is a good answer if the reason youdatabase is feeling stress is because management keep running OLAP transactions on it.
            - use Memcached if 
                - Object caching is your primary goal
                - You want to keep things as simple as possible
                - Scale out your cache horizontally
            - use Redis if 
                - advanced daa types, such as lists, hashes, and sets
                - Data sorting and ranking (leader boards)
                - Data persistence
                - Multi-AZ
                - Pub/Sub capabilities are needed
    21. EC2 Summary
        - more serverless than SA
        - Exam Tips
            - On demand: by hr or second(有固定使用的銀行)
            - Reserved: 1 year ~ 3 year
            - Spot: bid price, had flexible start and end time
                - if is terminated by amazon EC2, you will not be charged for a partial hour of usage.
                - if is terminated by yourself, you will be charged for a complete hour in which the instance ran.
            - Dedicated Hosts: existing server-bound software licenses
            - FIGHT DR MC PX
            - SSD
                - General Purpose SSD: 
                - Provisioned IOPS SSD: Highest-performance SSD, low-lantency or high-throughput
            - Magnetic
                - Throughput Optimized HDD
                - Cold HDD: Lowest cost HDD
                - Magnetic: previous generation
            - 3 Types of load balancers
                1. Application
                2. Network
                3. Classic(Elastic load balancer)
            - 504 error means gateway timed out
                - trobule shoot: web service or database server
            - Need the IPv4 addressof your end user, look for the X-Forwarded-For header.
            - Route 53
                - Amazon's DNS server
                - map your domain names to
                    - EC2 Instances
                    - Load Balancers
                    - S3 Buckets
            - CLI
                - least privilege
                - created group
                - Secret Access Key
                    - see only once
                    - if you regenerated it, you will need to run aws configure again
                - Do not use just one access key
                    - every developer should pair one key
                - Roles 
                    - allow you to not use Access Key ID's and secret access keys
                    - are preferred from a security perspective
                    - are controlled by policies
                    - change a policy on a role and it will take immediate affect
                    - You can attach and detach roles to running EC2 instances without having to stop or terminated these instances
                - Encrypt
                    - You can encrypt the root device volume (the volume the OS is installed on) using Operating System level encryption.
                    - You can encrypt the root device volume by first taking a snapshot of that volume, and then creating a copy of that snap with encryption.
                        - You can thenmake an AMI of this snap and deploy the encrypted root device volume.
                    - You can encrypt additional attached volumes using the console, CLI or API
                - RDS
                    - OLTP
                        - SQL Server
                        - MySQL
                        - PostgreSQL
                        - Oracle
                        - Aurora
                        - MariaDB
                    - DynamoDB - NoSQL
                    - RedShift - OLAP
                    - Elasticache - In Memory Caching
                        - Memcached
                        - Redis
                    - Multi-AZ is for Disaster Recovery only
                        - Not for improving performance
                        - Improving performance, Read Replicas.
                    - Read Replica
                        - Not for Disaster Recovery
                        - Must have automatic backups turned on in order to deploy a read replica.
                        - 5 Read Replica copies for any db
                        - You can have read replicas of read replicas.
                        - Each read replicas will have its own DNS endpoint
                        - You can have read replicas that have Multi-AZ
                        - You can create read replicas of Multi-AZ source db
                        - Read replicas can be promoted to be their own db. This breaks the replication.
                        - You can have a read replica in a second region(for MySQL and MariaDB)
                    - Elasticache
                        - Alleviate DB under a lot of stress/load
                        - Elasticache is a good choice if your DB is particulary read-heavy and not prone to frequent changing.
                        - Redshift is agood answer if the reason your DB is feeling stress is because management keep running OLAP transaction on it.
                        - 使用情況，同上面抄過的一樣
    22. EC2 Quiz
        1. In order to enable encryption at rest using EC2 and Elastic Block Store, you must ________.
            - config encryption when creating the EBS volume
        2. 
    
    23. S3 101
        - Secure, durable, highly-scalable object storage.
        - Not for operations or DB.
        - It's Object-based storage.
        - The data is spread across multiple devices and facilities.
        - Files can be form 0Bytes to 5TB
        - There is unlimited storage.
        - Files are stored in Buckets (similar to folder)
        - S3 is a universal namespace. This is names must be unique globally.
        - When you upload a file in S3, you will receive a HTTP 200 code if the upload was successful.
        - Data consistency model for S3
            - Read after Write consistency for PUTS of new Objects
            - Eventual Consistency for overwrite PUTS and DELETES (can take some time to propagatet傳播)
        - S3 is a simple key-value store
            - S3 is Object based. Objects consist of the following:
                - Key (This is simply the name of the object)
                - Value (This is simply the data, which is made up of a sequence of bytes)
                - Version ID (Important for versioning)
                - Metadata (Data about data you are storing)
                - Subresources-bucket-specific configuration:
                    - Bucket Policies, Access Control Lists,
                    - Cross Origin Resource Sharing (CORS)
                    - Transfer Acceleration
        - The Basics













                