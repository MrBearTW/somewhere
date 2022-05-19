# 白話演算法！培養程式設計的邏輯思考
# Grokking Algorithms: An illustrated guide for programmers and other curious people

- [相關教材](https://www.flag.com.tw/bk/st/F1709)
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
## Ch04 Divide-and-Conquer 與快速排序法 (Quicksort)
## Ch05 雜湊表 (Hash table)
## Ch06 廣度優先搜尋 (Breadth-First Search)
## Ch07 戴克斯特拉 (Dijkstra) 演算法
## Ch08 貪婪演算法 (Greedy Algorithm)
## Ch09 動態規劃演算法 (Dynamic Programming Algorithm)
## Ch10 K-最近鄰演算法 (K-Nearest Neighbors Algorithm)
## Ch11 進階之路：推薦十種演算法
## 附錄 習題與解答