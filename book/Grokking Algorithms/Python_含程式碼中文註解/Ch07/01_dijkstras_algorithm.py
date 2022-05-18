# 圖形雜湊表
graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {}

# 成本雜湊表
infinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# 父節點雜湊表
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

processed = []

def find_lowest_cost_node(costs):
    lowest_cost = float("inf")
    lowest_cost_node = None
    # 遍歷每個節點
    for node in costs:
        cost = costs[node]
        # 如果是目前最低的成本且尚未處理過的節點
        if cost < lowest_cost and node not in processed:
            # 將該節點更新為最低成本的新節點
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node

# 由 costs 這個雜湊表中找出成本最低的節點
node = find_lowest_cost_node(costs)
# 處理完所有節點時，這個 while 迴圈就會結束
while node is not None:
    cost = costs[node]
    # 遍歷此節點的所有相鄰節點
    neighbors = graph[node]
    for n in neighbors.keys():
        new_cost = cost + neighbors[n]
        # 如果通過這個節點到達相鄰節點的成本較低，則：
        if costs[n] > new_cost:
            # 更新這個節點的成本
            costs[n] = new_cost
            # 這個節點會成為相鄰節點的新父節點
            parents[n] = node
    # 將節點存入已處理的串列中
    processed.append(node)
    # 找出下一個需要處理的節點，並繼續執行迴圈
    node = find_lowest_cost_node(costs)

print("Cost from the start to each node:")
print(costs)

