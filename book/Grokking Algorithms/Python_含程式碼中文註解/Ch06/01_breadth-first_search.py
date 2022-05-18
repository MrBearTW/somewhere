from collections import deque

def person_is_seller(name):
      return name[-1] == 'm'

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def search(name):
    search_queue = deque() # 建立新的佇列
    search_queue += graph[name] # 將 [name] 所有相鄰的節點加入 search 佇列
    
    searched = []
    while search_queue: # 只要佇列不是空的
        person = search_queue.popleft() # 將第一個人從佇列移除
        # 檢查是否為芒果經銷商
        if person not in searched:
            if person_is_seller(person): # 若還沒搜尋過，則進行搜尋
                print(person + " 是芒果經銷商！") # 印出訊息
                return True
            else:
                search_queue += graph[person] # 不是經銷商，將他全部的朋友加入佇列            
                searched.append(person) # 將這個人標示為已搜尋
    return False # 如果執行到這裡，就表示佇列裡沒有人是經銷商

search("you")
