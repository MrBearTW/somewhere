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

## Best Practices for Designing and Architecting with DynamoDB

- 

# The DynamoDB Book by Alex DeBrie

## Ch8 The What Why, and When of single-Table Design in DynamoDB

- 用一個 Table 就好 (越少越好)
- there are no joins in DynamoDB
- Network I/O is likely the slowest part of your application, but now you’re making multiple network requests in a waterfall fashion, where one request provides data that is used for subsequent requests.
    - The solution: **pre-join** your data into item collections
- While reducing the number of requests for an access pattern is the main reason for using a single-table design with DynamoDB
    - 一次就把一個`使用者資訊`和`購買記錄`都拿到
- Other benefits of single-table design
    1. you reduce the number of alarms and metrics to watch
    2. If you have one or two entity types in your single table that are accessed much more frequently than the others, you can hide some of the extra capacity for less-frequently accessed items in the buffer for the other items.
- Downsides of a single-table design
    1. The steep learning curve to understand single-table design
    2. The inflexibility of adding new access patterns
        - your table design is narrowly tailored for the exact purpose for which it has been designed.
        - If your access patterns change because you’re adding new objects or accessing multiple objects in different ways, you may need to do an ETL process to scan every item in your table and update with new attributes.
    3. The difficulty of exporting your tables for analytics
        - DynamoDB is not good at OLAP(on-line analytics processing) queries.
            - This is intentional. DynamoDB focuses on being ultra-performant at OLTP queries and wants you to use other, purpose-built databases for OLAP.
        - Now you need to unwind that table and re- normalize it so that it’s useful for analytics.
- When not to use single-table design
    - there are two occasions where this is most likely
        1. in new applications where developer agility is more important than application performance
        2. in applications using GraphQL.
    - DynamoDB was built for large-scale, high-velocity applications that were outscaling the capabilities of relational databases.
- 延伸閱讀
    - See Chapter 19 for an example of this in action.
    - In Chapter 15, we discuss some migration strategies, and in Chapter 22, we implement some of those strategies in a real example.

## Chapter 10. The Importance of Strategies

- When modeling for a relational database
    - Duplicating data? Normalize it by putting it into a separate table. 
    - One-to-many relationship? Add a foreign key to indicate the relationship.
    - Many-to-many relationship? Use a joining table to connect the two entities.
- With DynamoDB, on the other hand, there are multiple ways to approach the problem, and you need to use judgment as to which approach works best for your situation. DynamoDB modeling is more art than science—two people modeling the same application can have vastly different table designs.
    - modeling a one-to-many relationship.
        1. Denormalizing the data and storing the nested objects as a document attribute
        2. Denormalizing the data by duplicating it across multiple items
        3. Using a composite primary key
        4. Creating a secondary index
        5. Using a composite sort key to handle hierarchical data

## Chapter 11. Strategies for one- to-many relationships

- 

## Chapter 12. Strategies for many-to-many relationships

- 