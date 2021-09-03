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


# Alex DeBrie

- [Youtube - AWS re:Invent 2019: Data modeling with Amazon DynamoDB (CMY304)](https://youtu.be/DIQVJqiSUkE)
    - [Slide - Data modeling with Amazon DynamoDB - ADB301 - New York AWS Summit](https://www.slideshare.net/AmazonWebServices/data-modeling-with-amazon-dynamodb-adb301-new-york-aws-summit)
        - Rick Houlihan Talk
            - [Fundamentals of Amazon DynamoDB Single Table Design with Rick Houlihan ](https://youtu.be/KYy8X8t4MB8) 2020年9月16日
            - []
            - [AWS re:Invent 2020: Data modeling with Amazon DynamoDB – Part 2](https://youtu.be/0uLF1tjI_BI)
    - [DynamoDBGuide.com](https://DynamoDBGuide.com)
    - Primary Key
        - Simple primary key (partition key)
        - Composite primary key (partition key + sort key)
    - API actions
        - Item-based actions - writing, updating, deleting
            - 必須提供 entire primary key
                - 一次一個 Item, 或用 batch request
                - 不可單獨只提供 partition key
        - Query
            - 可單獨只提供 partition key
                - sort key 是選擇性的
        - Scan
            - Avoid
            - Expensive at scale
    - Seconadry indexs
        - GSI
    - Data modeling example
        - Basic
            1. Start with an ERD(Entity Relationship digram)
                - one to one , one to many 更多
            2. Define your access patterns
                - 問 PM 應用程式長怎麼
            3. Design your primary key & secondary indexes
        - Forget your relational xeperience
            - Normailization
            - JOINs
            - One entity type per table
    - Setup 電商
        - 概觀
            - E-commerce store
            - User make orders
            - An order may have many items
        - Basic
            1. Start with an ERD(Entity Relationship digram)
                - user
                - user 1 - N 地址
                - user 1 - N order
                - order 1 - N items 品項
            2. Define your access patterns
                1. Get user profile 
                2. Get orders for user 
                3. Get single order and order items 
                4. Get orders for user by status 
                5. Get open orders (員工查詢之後準備裝箱)
            3. Design your primary key & secondary indexes
                - 請多多 iterate it
                - 用通用字 PK SK 來設計，而不是只有其中一張表可以用的字 just for your data access
                - 用 AAAA#BBBB
                    - AAAA# = USER#
                    - BBBB = Sam
                    - Debug 方便
                    - 避免 overwrite
                - Entities chart
                    |              | PK              | SK                  |
                    |--------------|-----------------|---------------------|
                    | User         | USER#<username> | #PROFILE#<username> |
                    | User Address |                 |                     |
                    | Order        |                 |                     |
                    | Order Item   |                 |                     |
        - One-to-many relationships
            - Denormalization + document types
                |              | PK              | SK                  |
                |--------------|-----------------|---------------------|
                | User         | USER#<username> | #PROFILE#<username> |
                | User Address | N/A             | N/A                 |
                | Order        | USER#<username> | #ORDER#<orderId>    |
                | Order Item   | ITEM#<itemId>   | #ORDER#<orderId>    |
                - 說明
                    - User Address --> Denormalization --> 在一個 Attribute 中直接寫入 JSON 
                        - 理論上不會直接查
                        - 理論上是有限的（不會一直擴張）
                    - Order Item
                        - 是 1 to many 後再 1 to many
            - Inverted index
                |              | SK                  | PK              |
                |--------------|---------------------|-----------------|
                | User         | #PROFILE#<username> | USER#<username> |
                | User Address | N/A                 | N/A             |
                | Order        | #ORDER#<orderId>    | USER#<username> |
                | Order Item   | #ORDER#<orderId>    | ITEM#<itemId>   |
                - 此時 用 #ORDER#<orderId>
                    - 可以得到 User + Order Item  ！！！！！！！
        - Recap One to many releationship patterns
            1. Attribute (list or map)
            2. Primary Key + query
            3. Secondary index + query
    - Filtering
        - Filter expressions
            1. Read items from table (1 MB Limt)
            2. If Filterexpression, filter out items that don't match
            3. Return items
        - Filtering access patterns
            1. Get orders for user
                - “PK = USER#alexdebrieAND BEGINS_WITH(SK, ‘ORDER#’)”
                    - (傳統寫法) SELECT * FROM ORDERS WHERE USERNAME = ‘alexdebrie’
            2. Get orders by status for user 
                - Filtering patterns: Composite sort key “PK = USER#alexdebrieAND BEGINS_WITH(OrderStatusDate, ‘SHIPPED#’)”
                    - (傳統寫法) SELECT * FROM ORDERS WHERE USERNAME = ‘alexdebrie’ AND STATUS = ‘SHIPPED’
                - 製作新的 欄位
                    - 狀態 ＋ 日期 --> 狀態#日期 / Status ＋ Date --> OrderStateDate
                        - SHIPPED#2021-09-01
                        - PLACED#2021-08-24
                    - 還可以控制區間
            3. Get open orders
                - Sparse(稀疏的) index
                    - (傳統寫法) SELECT * FROM ORDERS WHERE STATUS = ‘PLACED’
                - 當符合條件 STATUS = ‘PLACED’ 時，多製作一個新的 欄位 ，值是亂數 
                    - PlacedId 
            - Filtering pattern
                1. Primary key
                2. Composite sort key
                3. Sparse index


        




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

## Chapter 11. Strategies for one- to-many relationships

- modeling a one-to-many relationship.
    1. Denormalizing the data and storing the nested objects as a document attribute
    2. Denormalizing the data by duplicating it across multiple items
    3. Using a composite primary key
    4. Creating a secondary index
    5. Using a composite sort key to handle hierarchical data

1. Denormalizing the data and storing the nested objects as a document attribute (以下兩點需為 NO 才是做對)
    - Do you have any access patterns based on the values in the complex attribute?
    - Is the amount of data in the complex attribute unbounded?
2. Denormalization by duplicating data
    - primary key 是 uniquely identified
    - To get to second normal form, each non-key attribute must depend on the whole key.
    - duplicate 之前兩個思考點
        1. Is the duplicated information immutable(不可變)?
        2. If the data does change, how often does it change and how many items include the duplicated information?
            - items 少的話還好，items 上千的話就不 OK
    - Essentially, you’re balancing the benefit of duplication (in the form of faster reads) against the costs of updating the data.
3. Composite primary key + the Query API action
    - we’ll use generic attribute names, like PK and SK, for our primary key.
    - 範例圖 Ｔable7
        1. (綠)Retrieve an Organization. 
        2. (紅)Retrieve an Organization and all Users within the Organization.
        3. (藍)Retrieve only the Users within an Organization.
        4. (一個藍)Retrieve a specific User.
    - 更多範例 For examples of this strategy in practice, check out the e-commerce example in Chapter 19 or the GitHub example in Chapter 21
4. Secondary index + the Query API action
    - 用 Secondary index ，而不是用 primary key
    - It could be some write-specific purpose, such as to ensure uniqueness on a particular property, or it could be because you have hierarchical data with a number of levels.
    - If this were Google Drive, it might be a Document. If this were Zendesk, it might be a Ticket. If it were Typeform, it might be a Form.
    - We’ll do three things: P.189
        1. 獨立Ticket: For the PK and SK values TICKET#<TicketId>
        2. Create a global secondary index named `GSI1` whose keys are `GSI1PK` and `GSI1SK`.
        3. `GSI1PK` 相同 `GSI1SK` 不同
            1. For both our Ticket and User items, add values for `GSI1PK` and `GSI1SK`. For both items, the `GSI1PK` attribute value will be `ORG#<OrgName>#USER#<UserName>`
            2. For the User item, the `GSI1SK` value will be `USER#<UserName>`.
            3. For the Ticket item, the `GSI1SK` value will be `TICKET#<TicketId>`.
        - 透過搜尋 `GSI1PK` (當 Partition Key)時可以得到 User + Ticket
        - I can use the `ScanIndexForward=False` property to indicate that DynamoDB should start at the end of the item collection and read backwards.
    - 更多 secondary index pattern in action Chapters 19, 20, and 21.
5. Composite sort keys with hierarchical data (適用於階層式的資料：地址)
    - The term composite sort key means that we’ll be smashing a bunch of properties together in our sort key to allow for different search granularity.
    - The patterns are:
        1. Find all locations in a given country.
        2. Find all locations in a given country and state.
        3. Find all locations in a given country, state, and city.
        4. Find all locations in a given country, state, city, and zip code.
- 五種策略的重點整理


## Chapter 12. Strategies for many-to-many relationships

- four strategies for modeling many-to- many relationships with DynamoDB
    1. Shallow duplication
    2. Adjacency list
    3. Materialized graph
    4. Normalization & multiple requests

1. Shallow duplication
    - 將 many to many 其中一邊重點資訊全部 寫入另一個的 attribute 中
        - e.g. class 其中一個 attribute 包含所有學生 姓名（只有姓名，沒有其他學生資料）
    - 以下須為 true 才能用
    1. There is a limited number of related entities in the duplicated relationship.
    2. The duplicated information is immutable (or close to immutable). 
    - e.g. 學生與班級
    - 熊：複製少部分 immutable attribute 到 其中一邊。
2. Adjacency(鄰接) list
    - The `Movie` and `Actor` items are top-level items, and the `Role` item represents the many-to-many relationship between Movies and Actors.
        - Role items is immutable
    - In the secondary index, the partition key is SK and the sort key is PK.
    - 別名 inverted index
    - 熊：PK SK 互換，透過一個 immutable items 接起來
3. Materialized graph
    - A graph is made up of `nodes` and `edges`.
    - you can use a secondary index to reshuffle those items and group them according to particular relationships
    - e.g. 人事資料
    - 熊
        - 將一個 node 的資料分批放
        - 透過不同的 secondary index (GSI1PK)，Sort Key 沒變，來組成新的 node。
4. Normalization and multiple requests
    - 社群媒體 / 購物車
    - two-step process: 一位 User 所追蹤的人及所追蹤的人的資料
    1. Query API call 得到 User 的資料 + 前幾位 追蹤的人的資料
    2. BatchGetItem API call to fetch the detailed User items for each Following item
    - 熊：分段做