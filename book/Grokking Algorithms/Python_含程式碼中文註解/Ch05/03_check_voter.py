voted = {}

def check_voter(name):
  if voted.get(name):
      print("請他離開！")
  else:
      voted[name] = True    # 建立字典元素 name:True
      print("讓他投票！")

check_voter("tom")
check_voter("mike")
check_voter("mike")
