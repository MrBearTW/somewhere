# 同步fork來的原專案進度
[【狀況題】怎麼跟上當初 fork 專案的進度？](https://gitbook.tw/chapters/github/syncing-a-fork.html)

# ----------------------------------------------------
沒commit前，回復檔案原本狀態`git checkout 檔名`  
沒commit前，回復所有檔案狀態`git checkout .`  
  
找出哪一段是誰寫的`git blame 檔名`  
  



`git commit`推進一個變化  
`git branch [branch名稱]`建立一個分支  
`git checkout [branch名稱]`移到那一個分支  
  
`git checkout master`移回master  
此時在master`git merge bugFix`將bugFix合併回master  

  
此時在bugFix`git rebase master`將bugFix所做的commit剪下接回master  

## 移動HEAD ^ ~  branch -f
使用^`git checkout master^`把HEAD移回上一次commit  
使用~`git checkout HEAD~4`把HEAD移回前四個commit  
`git branch -f master HEAD~3`（強制）移動 master 指向從 HEAD 往上數的第三個 parent commit。  
  
`git branch -f master C6`移動 master 指向C6  
`git branch -f bugFix HEAD^`移動bugFix 到 HEAD前一個commit  
## git reset git revert
自己的(local ?)`git reset HEAD~1`退回上一個commit
這種「改寫歷史」的方法對別人的 remote branch 是無效的哦！  

別人的(remote ?)`git revert HEAD`C2 >> 新的 commit C2'
新的 commit C2' 引入了修改——用來表示我們取消 C2 這個 commit 的修改。  

## 移動commit  git cherry-pick
現在HEAD在master(C5)`git cherry-pick C2 C4`複製了(在不同於C5 branch的)C2和C4的commit接到C5後面  


`git rebase -i HEAD~4`進入UI介面，從HEAD~4的位置，複製在UI中選好(可能調整位置)的commit

此時HEAD在bugFix，master在上一個commit`git rebase bugFix master`將master移到bugFix  
## 
``
``

``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``

---
> git小抄  
https://www.facebook.com/photo.php?fbid=2591510904194334&set=a.110864892258960&type=3&permPage=1  


---
如果是要刪除最後一次的 commit，並請更新至遠端  
[參考](https://poychang.github.io/git-how-to-remove-file-and-commit-from-history/)
- move HEAD to previous commit, and discard all working copy changes  
`git reset HEAD^`
- push it  
`git push --force`

---
- 下面這個要再研究一下  
不用每次PUSH都要打密碼修改  
https://www.toodyao.com/?p=1156
`git remote -v`
`git remote rm origin`