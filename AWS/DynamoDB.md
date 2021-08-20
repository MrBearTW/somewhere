- dynamoDB 20 30 40 30 
    - PK SK
    - index： 預設的 / 自定義的 （vs RSDB)
    - how to query

- 專有名詞
    - Tables 
    - Items
    - Attributes
        - DynamoDB supports nested attributes up to 32 levels deep.

- PK SK
    - Primary Key: A simple primary key, composed of one attribute known as the partition key.
    - DynamoDB supports two different kinds of primary keys:
        - Partition key: A simple primary key, composed of one attribute known as the partition key.
        - Partition key and sort key: Referred to as a composite primary key, this type of key is composed of two attributes. The first attribute is the partition key, and the second attribute is the sort key.
    - Secondary Indexes:
        - 可單獨存在，可都不存在，可一起存在
        - Global secondary index – An index with a partition key and sort key that can be different from those on the table.
        - Local secondary index – An index that has the same partition key as the table, but a different sort key.
        - The following diagram shows the example Music table, with a new index called GenreAlbumTitle. In the index, Genre is the partition key and AlbumTitle is the sort key.
        - ![圖](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/images/HowItWorksGenreAlbumTitle.png)
    - Each table in DynamoDB has a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes per table.

- how to query
    - ```
        aws dynamodb query \
        --table-name Music \
        --key-condition-expression "Artist = :name" \
        --expression-attribute-values  '{":name":{"S":"Acme Band"}}'
        ```
    - ```json
        {
            "Count": 1,
            "Items": [
                {
                    "AlbumTitle": {
                        "S": "Updated Album Title"
                    },
                    "Awards": {
                        "N": "10"
                    },
                    "SongTitle": {
                        "S": "Happy Day"
                    },
                    "Artist": {
                        "S": "Acme Band"
                    }
                }
            ],
            "ScannedCount": 1,
            "ConsumedCapacity": null
        }
        ```
        - JAVASCRIPT 待做

- index： 預設的 / 自定義的 （vs RSDB)
    - index： Global Secondary Index ?
    - Wiki: Database index: A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure.
    - index：
        - 加速搜尋 => 重點在『找』
        - 屬於 table structure （加了 index 是對 table structure 做改變，和 record 無關）
        - 加一個 index 是加一種搜尋方法
    - NoSQL 沒有欄位（但要有 PK）。Index 不一定會對到。
    - 推論要有一個事實
        - (錯的) 一個 index 對應到 一個 record 
            ＝> (對的) 一筆 record 經過`一種 index 規則` 對應 一筆/種/個 record (錯index) 
            - 一個 index 對應到 零個 record
        - An index with a partition key and sort key 各一個欄位
        - index 是 table 的東西，不是 value 的東西
        - 可以有 index 沒有 record

## The DynamoDB Book by Alex DeBrie



- 是否必要，或是選擇性
    - 必要：只能一個 / 多個
    - 選擇性：沒有 / 只能一個 / 多個
- 預設值是什麼？
- Scope 是？
- 主詞是？

- 一起建立，或都不建立

- 為什麼需要 Access Patterns ？(這才是為了 CDK 去學 DynamoDB 的原因)
    - 要有 Primary Key
        - 要有 mentory???????????????
        - 要有 optional

- 目標一小時看完，半小時整理三個重點
    - Sync 目標半小時
        - Concept
        - 目的

- 20210803 Agenda
    - DynamoDB 20 + 20
        - Access Patterns
    - 確認 FRD 方式 40
        - GSI (是 Global secondary index ？)
    - Lambda 三個問題 10
        1. Concept / 目的
        2. 
        3. 
        - [Lambda concepts](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-concepts.html)
    - swagger
        - SPEC 是什麼？
            - 出場角色
            - 定義
            - 安裝步驟
        - 樹狀結構是什麼
        - 先來一份
            - 我先學怎麼寫 預計30
            - 寫一個檔案我們自己的 預計30
            - 放到 free 帳號上 預計10
        - 在學怎麼架起環境。


- 一個 Open Source 是什麼？
    - Why
        - Features
    - What
        - 出場角色
        - 定義
    - 安裝步驟
    
1.5 hr JIRA
1 hr

- 是什麼？
    - Amazon DynamoDB 是一項完全受管的 NoSQL 資料庫服務，可提供快速且可預期的效能及無縫的可擴展性。DynamoDB 可讓您卸下操作及擴展分散式資料庫的管理負擔，不再需要煩惱硬體佈建、設定和組態、複寫、軟體修補或叢集擴展。
- 重點
    - Core Components
        - Tables, Items, and Attributes
        - Primary Key (必要) / Secondary Indexes (選擇性)
    - DynamoDB API
        - Control Plane: 對 Table 操作
        - Data Plane：
            - PartiQL: a SQL-compatible query language, to select, insert, update, and delete data in Amazon DynamoDB.
            - Classic APIs: CRUD
        - Streams (跳過)
        - 有 Transactions 搭配使用
    - Naming Rules and Data Types
        - Naming Rules （Scope: 是誰？？？）
            - UTF-8
            - a-z / A-Z / 0-9 / _ (underscore) / - (dash) / . (dot)
            - no greater than 64 KB long
            - The following are the exceptions.  These attribute names must be no greater than 255 characters long:
                - Secondary index partition key names.
                - Secondary index sort key names.
                - The names of any user-specified projected attributes (applicable only to local secondary indexes).
        - Data Types（Scope: 是誰？？？attributes）
            - Scalar Types – A scalar type can represent exactly one value. The scalar types are number, string, binary, Boolean, and null.
            - Document Types – A document type can represent a complex structure with nested attributes, such as you would find in a JSON document. The document types are list and map.
                - 32 levels deep
                - size limit (400 KB)
                - List / Map
            - Set Types – A set type can represent multiple scalar values. The set types are string set, number set, and binary set.
    - Read Consistency
        - Eventually Consistent Reads (預設是這一種)
        - Strongly Consistent Reads
    - Read/Write Capacity Mode
        - On-demand
            - 
        - Provisioned (default, free-tier eligible)
            - 
    - Partitions and Data Distribution

- p 規劃
- JavaScript 操作
- 選項要確認

- 必看章節
    - What is Amazon DynamoDB?
        - How it works