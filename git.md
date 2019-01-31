沒commit前，回復檔案原本狀態`git checkout 檔名`  
沒commit前，回復所有檔案狀態`git checkout .`  
  
找出哪一段是誰寫的`git blame 檔名`  
  



`git commit`推進一個變化  
`git branch [branch名稱]`建立一個分支  
`git checkout [branch名稱]`移到那一個分支  
  
`git checkout master`移回master  
此時在master`git merge bugFix`將bugFix合併回master  

  
此時在bugFix`git rebase master`將bugFix所做的commit剪下接回master  
  
``
``
``
``
``