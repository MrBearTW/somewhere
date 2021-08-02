- dynamoDB 20 30 40 30 
    - PK SK
    - index： 預設的 / 自定義的 （vs RSDB)
    - how to query

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
        - (錯的) 一個 index 對應到 一個 record ＝> 一筆 record 經過`一種 index 規則` 對應 一筆/種/個 record (錯index) 
            - 一個 index 對應到 零個 record
        - An index with a partition key and sort key 各一個欄位
        - index 是 table 的東西，不是 value 的東西
        - 可以有 index 沒有 record


- DB
- 確認一些細節
- 後續

- 是否必要，或是選擇性
    - 必要：只能一個 / 多個
    - 選擇性：沒有 / 只能一個 / 多個
- 一起建立，或都不建立

- 為什麼需要 Access Pattern ？(這才是為了 CDK 去學 DynamoDB 的原因)
    - 要有 Primary Key
        - 要有 mentory
        - 要有 optional

- 目標一小時看完，半小時整理三個重點
    - Sync 目標半小時
        - Concept
        - 目的