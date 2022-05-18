def countdown(i):
  
    # Base case
    print(i)
    if i <= 1: # 當 i 小於等於 1 時就結束遞迴
        return
  
    # Recursive case
    else:
        countdown(i-1) # 否則用 i-1 呼叫 countdown

countdown(5)
