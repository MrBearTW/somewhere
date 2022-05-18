def quicksort(array):
  if len(array) < 2:
    #Base Case：含有 0 或 1 個元素的陣列，就不用再排序了
    return array
  else:
    #Recursive Case
    pivot = array[0]
    # 所有比基準值小的元素的子陣列
    less = [i for i in array[1:] if i <= pivot]
    # 所有比基準值大的元素的子陣列
    greater = [i for i in array[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10, 5, 2, 3]))