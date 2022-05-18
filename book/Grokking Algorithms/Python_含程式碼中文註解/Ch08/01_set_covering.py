# 將訊號覆蓋的州放入串列，並轉換成集合
states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

stations = {} # 先建一個空字典 (即雜湊表)
stations["kone"] = set(["id", "nv", "ut"])  # 放入第 1 組鍵：值
stations["ktwo"] = set(["wa", "id", "mt"])  # 放入第 2 組鍵：值
stations["kthree"] = set(["or", "nv", "ca"])# 放入第 3 組鍵：值
stations["kfour"] = set(["nv", "ut"]) # 放入第 4 組鍵：值
stations["kfive"] = set(["ca", "az"]) # 放入第 5 組鍵：值

final_stations = set() #建立一個空的 set 來儲存最後決定合作的電台

while states_needed:
  best_station = None
  states_covered = set()
  for station, states_for_station in stations.items():
    # 這是新的語法，稱為集合的交集 (intersection)
    covered = states_needed & states_for_station
    if len(covered) > len(states_covered):
      best_station = station
      states_covered = covered

  states_needed -= states_covered
  final_stations.add(best_station)

print(final_stations)
