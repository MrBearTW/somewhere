# 白話演算法！培養程式設計的邏輯思考
# Grokking Algorithms: An illustrated guide for programmers and other curious people

- [相關教材](https://www.flag.com.tw/bk/st/F1709)
- [作者的網站](https://adit.io/)

## Ch01 二元搜尋法 (Binary Search) 與演算法執行時間
- Binary Search
    - 被搜尋的清單內容必須先排序過
    - 對切，再比較
- Big O notation
    - Big O notation 代表的是最差情況的質時間
    - 不是以秒計算，而是用運算次數來計算
    - 常見的幾種（由快到慢）
        1. O(log n) 二元搜尋法 / 對數時間
        2. O(n) 簡易搜尋法 / 線性時間
        3. O(n*log n) 快速排序法
        4. O(n^2) 慢速排序法漢選擇排序法
        5. O(n!) 旅行推銷員 / 階乘時間
## Ch02 選擇排序法 (Selection Sort)
- 陣列 Array vs. 鏈結串列 Linked list
    - |   | Array | Linked list |
        |---|---|---|
        | 讀取 | O(1) | O(n) |
        | 插入 | O(n) | O(1) |
        | 刪除 | O(n) | O(1) |
- 資料的存取方式
    - 循序存取 Sequential access
    - 隨機存取 Random access
- [VISUALIZE CODE EXECUTION](https://pythontutor.com/)
## Ch03 遞迴 (Recursion)
- 遞迴組成
    - Base Case 基本情況 / 當成是不在呼叫自己的時候
    - Recursive Case 遞迴情況
- 堆疊 Stack
    - 類似便利貼
        - Push 放在最上面
        - Pop 從最上面取下
- 呼叫堆疊 Call Stack
    - 呼叫堆疊的［呼叫］不是動詞，是指呼叫函式時使用的堆疊，而不是去呼叫一個堆疊。
## Ch04 Divide-and-Conquer 與快速排序法 (Quicksort)
- Euclid's Algorithm 歐基里德演算法
    - [Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)
- 用遞迴取帶迴圈
- Pivot 基準值
- Inductive Proof 歸納證明法 = Base case 基本情況 + Inductive Case 歸納情況
- 比較
    - Quicksort：取隨機一個數
    - Merge 合併搜尋法：分割(不是數字，數字與數字之間)
- Quicksort
    - 最差情況下 O(n^2)
    - 平均情況下 O(n log n)
## Ch05 雜湊表 (Hash table)
- 雜湊函式 + 陣列組合 = Hash table
- 適合用在
    - 建立一個元素與另一個元素的對應關係
    - 篩選重複項目
    - 快取或紀錄資訊，以減輕伺服器的工作量
- Collision 碰撞
- Load factor 負載係數 = 雜湊表內的元素數量 / 雜湊表內的儲存槽數
    - 大於 0.7 時就應調整大小
## Ch06 廣度優先搜尋 (Breadth-First Search)
- 找最短路徑
- Queue 佇列
    - FIFO
    - vs. 推疊是 LIFO
- O( V +E )
    - V: Vertx 頂點
    - E: Edge 邊
- Topological Sort 拓樸排序
- Tree 樹：沒有任何邊往回指
    - e.g. 家庭祖譜
## Ch07 戴克斯特拉 (Dijkstra) 演算法
- 比較
    - 廣度優先搜尋 Breadth-First Search -> 得到路段較少的路徑
    - 戴克斯特拉 Dijkstra -> 總權重最小
- 權重是負的時 -> Bellman-Ford 貝爾曼福特
## Ch08 貪婪演算法 (Greedy Algorithm)
- NP-Complete 無法透過快速演算來得到答案
    - 可以歸類為
        1. 集合覆蓋
        2. 旅行員推銷(含有序列 Sequence)
- Approximation Algorithm 近似演算法
## Ch09 動態規劃演算法 (Dynamic Programming Algorithm)
- 用表格做紀錄
- 從之前的陣列算出後面的問題，所以較大的問題不用從頭算起。
- 每次 Iteration 疊代都會儲存目前的最高估值。
- 順序不會影響最終答案
- 只適用每個獨立的小問題，無法解決有相依性 depend 的小問題
- 動態演算法的設計，最多只允許結合兩個子背包
    - 但是子背包內可以有自己的子背包
- 延伸：Levenshtein Distance 編輯距離演算法
    - 拼字檢查，著作權保護
## Ch10 K-最近鄰演算法 (K-Nearest Neighbors Algorithm)
- 基本上進行
    - Classification 分類：歸類成群組
    - Regression 迴歸：預測結果
- Feature Extraction 特徵萃取
- OCR Optical Character Recognition 光學字元辨識
- Naive Bayes classifier 單純背式分類器
- 延伸
    - Collaborative Filtering 協同過濾
    - Cosine Similarity 餘弦相似度
## Ch11 進階之路：推薦十種演算法
- Binary Search Tree 二元搜尋樹
    - 陣列 vs. 二元搜尋樹
        - |   | Array | Binary Search Tree |
            |---|---|---|
            | 搜尋 | O(Log n) | O(Log n) |
            | 插入 | O(n) | O(Log n) |
            | 刪除 | O(n) | O(Log n) |
    - 缺點：不能隨機存取
        - 不能用索引 Index 存取資料
    - 進階
        - B-Tree B-樹
        - red-black tree 紅黑樹
        - heap tree 堆積樹
        - splay trees 伸展樹/展開樹
- Inverted index 反向索引
    - 做搜尋相關
- Furier transform 傅立葉轉換
    - [An Interactive Guide To The Fourier Transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
    - Shazam 音樂辨識軟體
    - 音樂簡化成 mp3
- Parallel Algorithm 平行演算法
    - 排序演算法最快的速度為 O(n log n)，除非是使用 Parallel Algorithm 平行演算法，否則要在 O(n) 的時間內完成陣列排序是不可能的
    - 快速排序法 (Quick Sort) 有平行化的版本，可以在 O(n) 的時間內完成陣列排序。
    - 即使核心一升為二，並不代表平行演算法的速度會提升為兩倍
        - 平行性的管理上限：
        - 負載平衡 Load balancing：
            - 效能和可擴展性 (Scalablility)
    - MapReduce
        - 分散式演算法 Distributed Algorithm
        - Hadoop
        - Map 任務交辦
        - Reduce 將資料彙總
        - 分散 Map / 重新組合 Reduce
- 布隆過濾器 Bloom filter 和 HyperLogLog
    - 布隆過濾器 Bloom filter 是一種 機率過濾器 Probabilistic Data Structure
    

## 附錄 習題與解答