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
        - DNS的相關要再讀一下
            - 從我的電腦到 route 53 之前發生什麼事
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
    - EC2 Quiz
        1. In order to enable encryption at rest using EC2 and Elastic Block Store, you must ________.
            - config encryption when creating the EBS volume
        2. 
    
    22. S3 101
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
            - Built for 99.99%(52.6分鐘) availability for the S3 platform (設計上)
            - Amazon guarantee 99.9%(8.76小時) availability可用性
            - Amazon guarantees 99.999999999%(11 個 9) durability耐用性/持久性 for S3 information. 
                - 遺失1個 每1M個物件每10,000年
            - Tiered storage available
            - Lifecycle Management
            - Versioning
            - Encryption
            - Secure you data - Access Control Lists and Bucket Policies
        - Storge Tiers/Classes
            - S3 
                - 99.99availability, 99.999999999% durability, stores redundantly across multiple devices in multiple facilities, and is designed to sustain in the loss of 2 facilities concurrently.
            - S3-IA (Infrequently Accessed)
                - For data that is accessed less frequently, but requires rapid access when needed. Lower fee than S3, but you are charged a retrieval fee.
            - S3-One Zone IA
                - Same as IA however data is stored in a single Availability Zone only, still 99.999999999% durability, but only 99.5% availability. Cost is 20% less than regular S3-IA
            - S3-Reduced Redundancy storge
                - Design to provide 99.99% durability and 99.99% availability of objects over a given year.
                - Used for data that can be retrived if lost, e.g. thumbnails縮圖.
                - For easy created if you lost it.
                - Starting to disapper from AWS documentation but may still feature in exam.
            - Glacier
                - Very Cheap, but used for achival only. Optimised for data that is infrequently accessed and take 3-5 hours to restore from Glacier
            -   | Storge class  | Durability(design for)  | Availability(design for)  | Other Considerations  | 
                |---|---|---|---|
                | Standard  | 99.999999999%  | 99.99%  | None  |
                | Standard_IA  | 99.999999999%   | 99.9%  | Retrieval恢復 free for all S3 IA objects  |
                | Onezone_IA  | 99.999999999%   | 99.95%  | Not resilient to loss of AZ  |
                | Glacier  | 99.999999999%   | 99.99%(after you restor objects)  | No real-time access 4-5 hours to access  |
                | RRS  | 99.99%  | 99,99%  | None  |
            - Intelligent Tiering
                - Uknown or unpredictable access patterns.
                - 2 tiers - frequent and infrequent access.
                - Automatically moves you data to most cost-effective tier based on how frequently you access each object.
                - 99.999999999% durability耐用性
                - 99.9 availability over a given year.
                - Optimized cost
                - No fees for accessing your data but small monthly fee for monitoring/automation $0.0025 per 1000 objects.
            - Charges
                - Storage per GB
                - Requests (Get, Put, Copy, etc.)
                - Storage Management Pricing
                    - Inventory, Analytics and Object Tags
                - Data Management Pricing
                    - Data transferred out of S3
                - Transfer Acceleration
                    - Use of CloudFront to optimize transfers
        - Exam Tips For S3 101
            - S3 is object-based
                - allow you to upload files.
                - object-base storage only (for files.)
            - Not suitable to install an operating system or running a database on.
            - File can be from 0 Bytes to 5 TB
            - There is unlimited storage.
            - Files are stored in Buckets.
            - S3 is a universal namespace. That is, names must be unique globally.
            - Read after Write consistency for PUTS of new Objects
            - Eventual Consistency for overwrite PUTS and DELETES (can take some time to propagate傳布)
        - S3 Storage Classes/Tiers
            - S3(durable, immediately available, frequently accessed)
            - S3-IA(durable, immediately available, infrequently accessed)
            - S3-One Zone IA:same as S3-IA. However, data is stored in a single AZ only
            - S3-Reduced Redundancy Storage (data that is easily reproducible, such as thumbnails, etc.)
            - Glacier - Archived data, where you can wait 3 - 5 hours before accessing
        - Core fundamentals of an S3 object
            - Key (name)
            - Value (data)
            - Version ID
            - Metadata
            - Subresource-bucket-specific configuration
                - Bucket Policies, Access Control Lists
                - Cross Origin Resource Sharing (CROS)
                - Transfer Acceleration
            - Successful uploads will generate a HTTP 200 status code - when you use the CLI or API
            - read [S3 FAQ](https://aws.amazon.com/s3/faqs/)
    23. S3 Security
        - Securing Your Buckets
            - By default, all newly created buckets are PRIVATE.
            - You can set up access control to your buckets using:
                - Bucket Policies - Applied at a bucket level.
                - Access Control Lists - Applied at an object level.
            - S3 buckets can be configured to create access logs, which log all requests made to the S3 buckets. These logs can be written to another buckets.
    24. S3 Policies Lab
        - 預設和實用之間的差距
    25. S3 Encryption
        - Encryption
            - In transit:
                - SSL / TLS
            - At Rest:
                - Server Side Encryption:
                    - S3 Managed Keys - SSE-S3
                    - AWS Key Management Service, Managed Keys, SSE-KMS
                    - Server Side Encryption with Customer Provided Keys - SSE-C
            - Client Side Encryption
        - Enforcing Encryption on S3 Buckets
            - Every time a file is uploaded to S3, a PUT request is initiated.
            - This is what a PUT request looks like:
                ``` PUT/myFile HTTP/1.1
                    Host: myBucket.s3.amazonaws.com
                    Date: Wed, 25 Apr 2018 09:50:00 GMT
                    Authorization: authorization string
                    Content-Type: text/plain
                    Content-Length: 27364
                    x-amz-meta-author: Faye
                    Expect: 100-continue
                    [27364 bytes of object data]
                ```
            - If the file is to be encrypted at upload time, the `x-amz-server-side-encryption parameter` will be included in the request header.
            - Two options are currently available:
                - `x-amz-server-side-encryption: AES256`(SSE-S3 - S3 managed keys)
                - `x-amz-server-side-encryption: ams:kms`(SSE-KMS - KMS managed keys)
            - When this parameter is included in the header of the PUT request, it tells S3 to encrypt the object at the time of upload, using the specified encryption method.
            - You can enfore the use of Server Side Encryption by using a Bucket Policy which denies any S3 PUT request which doesn't include the `x-amz-server-side-encryption` parameter in the request header.
            - The following request tells S3 to encrypt the file using SSE-S3(AES256)at the time of upload:
                ``` PUT/myFile HTTP/1.1
                    Host: myBucket.s3.amazonaws.com
                    Date: Wed, 25 Apr 2018 09:50:00 GMT
                    Authorization: authorization string
                    Content-Type: text/plain
                    Content-Length: 27364
                    x-amz-meta-author: Faye
                    Expect: 100-continue
                    x-amz-server-side-encryption: AES256
                    [27364 bytes of object data]
                ```
        - S3 Encryption Exam Tips
            - Encryption In-Transit
                - SSL/TLS(HTTPS)
            - Encryption At Rest
                - Sever Side Encryption
                    - SSE-S3
                    - SSE-KMS
                    - SSE-C
                - Client Side Encryption
            - If you want to enforce the use of encryption for your files stored in S3, use an S3 Bucket Policy to deny all PUT requests that don't include the x-amz-server-side-encryption parameter in the request header.
    26. Setup Encryption On An S3 Buckets LAB
        - 建立一個 Bucket
            - 用 Policy generator 建立一個 policy
    27. CORS Configuration Lab
        - Static website hosting
        - 建立兩個 bucket
            - 修改 CORS configuration，才可以跨 bucket 讀取
    28. CloudFront
        - What is a CDN ?
            - A content delivery network (CDN) is a system of distributed servers (network) that deliver webpages and other web content to a user based on the geographic locations of the user, the origin of the webpage, and a content delivery server.
        - CloudFront - Key Terminology
            - Edge Location - This is the location where content is cached and can also be written, Separate to an AWS Region/AZ
            - Origin - This is the origin of all the files that the CDN will distribute. Qrigins can be an S3 Bucket, an EC2 Instancem, an Elastic Load Balancer, or Route53.
            - Distribution - This is the name given the CDN, which consists of a collection of Edge Locations.
            - Web Distribution - Typically used for websites
            - RTMP - Used for Media Streaming.
        - What is CloudFront ?
            - Amazon CloudFront can be used to deliver you entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations. Requests for you content are automatically routed to the nearest edge location, so content is deliverd with the bestpossible performance.
            - Amazon CloudFront is optimized to work with other Amazon Web Services, like Amazon Simple Storage Service (Amazon S3), Amazon Elastic Compute Cloud(Amazon EC2), Amazon Elastic Load Blancing, and Amazon Route53. Amazon CloudFront also works seamlessly with any non-AWS origin server, which stores the original, definitive versions of your files.
            - CloudFront Distribution types:
                - Web Distribution - Use for Websites, HTTP / HTTPS
                - RTMP Distribution - (Adobe Real Time Messaging Protocal) Used for Media Streaming / Flash multi-media content
        - Cloud Front And S3 Transfer Acceleration
            - Amazon S3 Transfer Acxceleration enables fast, easy, and secure transfers of files over long distances between your end users and an S3 bucket.
            - Transfer Acceleration takes advantage of Amazon CloudFront's globally distributed edge locations. As the data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.
        - CloudFront - Exam Tips
            - Edge Location - This is the location where content will be cached. This is separate to an AWS Region / AZ.
            - Origin - This is the origin of all the files that the CDN will distribute. Origins can be an S3 Bucket, an EC2 Insatance, an Elastic Load Balancer, or Route53.
            - Distribution - This is the name given the CDN, which consists of a collection of Edge Locations.
                - Web Distribution - Typically used for Websites.
                - RTMP - Used for Media Streaming.
            - Edge locations are not just Read only - you can WRITE to them, too. (i.e. PUT an object on to them.)
            - CloudFront Edge Locations are utilised by S3 Transfer Acceleration to reduce latency for S3 uploads.
            - Objects are cached for the life ogf the TTL (Time To Live.)
            - You can clear cached objects, but you will be charged.
    29. CloudFront Lab
        - 傳一個大的圖檔到雪梨的
        - TTL 
            - 31536000 一年
            - 86400 一天
        - 可選 HTTP 自動轉址到 HTTPS
        - 大約要十到十五分鐘
        - 第一次讀仍會慢慢的，因為剛從 origin 拉到  cloudfront 上，之後(用其他瀏覽器或是其他裝置)就會變快了
        - 記得刪掉
    30. S3 Performance Optimization
        -  S3 Performance Optimization
            - S3 is designed to support very high request rates. However, if your S3 buckets are routinely receiving > 100PUT / LIST / DELETE or > 300 GET requests per second, then there are some best pratice guidelines that will help optimize S3 performance.
            - The guidance is based on the type of workload your running:
                - `GET-Intensive Workloads` - use CloudFront content delivery service to get best performance. CloudFront will cache your most frequently accessed objects and will reduce latency for your GET requests.
                - `Mixed Request Type Workloads` - a mix of GET, PUT, DELETE, GET Bucket - the key names you use for your objects can impact performance for intensive workloads.
                    - S3 uses the key name to determine which partition an object will be stored in.
                    - The use of sequential key names e.g. name prefixed with a time stamp or alphabetical sequence increases the likehood of having multipleobjects stored on the same partition.
                    - For heavy workloads this can cause I/O issues and contention爭奪
                    - By using a random prefix to key names, you can force S3 to distribute your keys across multiple partitions, distributing the I/O workload.
        - Exam Tips
            - Remember the 2 main approaches to Performance Optimization for S3:
                - GET-Intensive Workloads - Use CloudFront
                - Mixed-Workloads-Avoid sequential key names for your S3 objects. Instead, add a random prefix like a hex hash to the key name to prevent multiple objects from being stored on the same partition.
    31. S3 Performance Update
        - In july 2018, Amazon announced a massive increase in S3 performance
            - 3,500  put request per second
            - 5,500 get requests
        - This new increased performance negates否定 the previous guidance to randomize your object key names to achive faster performance
        - This means logical and sequential naming patterns can now be use without any performance implication
    32. S3 Summary
        - S3 101 - Summary
            - Remember that S3 is Object-based: i.e allows you to upload files.
            - Files can be from 0 Bytes to 5TB.
            - There is unlimited storge.
            - Files are stored in Buckets.
            - S3 is a universal namespace. Tha is, names must be unique globally.







                