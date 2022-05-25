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
## Ch09 動態規劃演算法 (Dynamic Programming Algorithm)
## Ch10 K-最近鄰演算法 (K-Nearest Neighbors Algorithm)
## Ch11 進階之路：推薦十種演算法
## 附錄 習題與解答