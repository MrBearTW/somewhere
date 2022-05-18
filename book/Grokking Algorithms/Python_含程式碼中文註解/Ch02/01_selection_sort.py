# 在串列中找出最小值的索引

def find_smallest_index(arr):
    smallest = arr[0]       # 儲存串列最開頭的值 (第 0 個元素值)
    smallest_index = 0      # 從串列第 0 個元素開始
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest_index = i # 記下目前最小值的索引
            smallest = arr[i]  # 記下目前的最小值
    return smallest_index      # 跑完串列就把最小值的索引傳回去

# 排序陣列中的資料
def selection_sort(arr): # 用 Selection Sort 演算法對串列的元素做排序
    new_arr = []  # 建立新串列
    for i in range(len(arr)): #走訪原串列
        smallest = find_smallest_index(arr)  # 找出串列中最小值的 index 
        new_arr.append(arr.pop(smallest))    # pop() 會從原陣列 arr 當中把 smallest 位置 (index) 的元素搬走並傳回
    return new_arr # append() 會把 pop() 傳回來的元素值加到 new_arr 的尾端

print(selection_sort([5, 3, 6, 2, 10]))
