def binary_search(list, item):
  # low 和 high 持續追蹤要搜尋的 list 元素
  low = 0
  high = len(list) - 1

 # 還沒有縮小範圍到只剩一個元素時，
  while low <= high:
    # 就檢查中間的元素
    mid = (low + high) // 2
    guess = list[mid]
    # 找到想找的元素    
    if guess == item:
      return mid
    # 猜太高了
    if guess > item:
      high = mid - 1
    # 猜太低了
    else:
      low = mid + 1
 # 想找的元素不存在
  return None

#我們用這個 list 測試一下！
my_list = [1, 3, 5, 7, 9]

#別忘了！list 是從 0 開始，第二個位置的索引是 1
print(binary_search(my_list, 3)) # => 1

 # Python 的 None 代表空值，表示沒找到想找的元素!!!
print(binary_search(my_list, -1)) # => None