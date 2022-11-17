# 同步fork來的原專案進度
- [【狀況題】怎麼跟上當初 fork 專案的進度？](https://gitbook.tw/chapters/github/syncing-a-fork.html)

這些先看一看
- [Git 系列文章](https://gitbook.tw/articles)
- [Git 面試題](https://gitbook.tw/interview)
再看書
還有研究一下tig

# 安全性改用2FA之後
- 原本已經拉到本地的要改origin`git remote set-url origin git@github.com:XXXXXXXXXXXXX.git`
- 在github上面選擇SSH那一個，不是https那一個
# ----------------------------------------------------
# 為你自己學 Git 
- https://gitbook.tw/
### 一、Git 入門篇
- 與其它版本控制系統的差異
    - 分散式
    - 拍照並指向最後沒有變動過的那一個版本
### 四、設定 Git
- 其它方便的設定
    - 圖像化顯示 `git log --oneline --graph`
        - 用 `git l`來取代，設定alias`git config --global alias.l "log --oneline --graph"`
    - 快速鍵[alias]
        - co = checkout
        - br = branch
        - st = status
        - l = log --oneline --graph
        - ls = log --graph --pretty=format:"%h <%an> %ar %s"
### 五、開始使用 Git
- 新增、初始 Repository
    - 在資料夾內初始化`git init`
- 把檔案交給 Git 控管
    - 把檔案交給 Git，讓 Git 開始「追蹤」它`git add xxxxxx`
    - 一口氣把全部的檔案加到暫存區`git add --all`
        - Git 1.x  `git add .`不會加入刪除的檔案，Git 2.x之後就兩個指令都一樣了
        - `git add .`在下指令的目錄及以下子孫目錄會執行，但往上的父目錄不會執行
    - `git commit -m "這一個commit的註解"` 把暫存區的東西存放到儲存庫（Repository）裡
        - = 讓暫存區的內容永久的存下來 = 我完成一個存檔（或備份）的動作了
        - 若沒寫註解，會進入預設的編輯器畫面，讓你編寫註解
            - 不寫註解做commit`git commit --allow-empty`
- 工作區、暫存區與儲存庫
    - 一次做完add和commit`git commit -a -m "xxxxxxxxx"`，但對未追蹤新加入的檔案（也就是 Untracked file）是無效的。
- 檢視紀錄
    - `git log`檢視 Git 紀錄
    - `git log -S "xxx"`搜尋commit中有xxx字串
    - `git log --oneline --since="9am" --until="12am" --after="2017-01"`用時間當搜尋條件
- 【狀況題】如何在 Git 裡刪除檔案或變更檔名？
    - 不再被追蹤`git rm welcome.html --cached`
    - 用git改名`git mv hello.html world.html`
- 【狀況題】修改 Commit 紀錄
- 【狀況題】追加檔案到最近一次的 Commit
- 【狀況題】新增目錄？
- 【狀況題】有些檔案我不想放在 Git 裡面…
- 【狀況題】檢視特定檔案的 Commit 紀錄
- 【狀況題】等等，這行程式誰寫的？
- 【狀況題】啊！不小心把檔案或目錄刪掉了…
- 【狀況題】剛才的 Commit 後悔了，想要拆掉重做…
- 【狀況題】不小心使用 hard 模式 Reset 了某個 Commit，救得回來嗎？
- 【冷知識】HEAD 是什麼東西？
- 【狀況題】可以只 Commit 一個檔案的部份的內容嗎？
- 【冷知識】那個長得很像亂碼 SHA-1 是怎麼算出來的？
- 【超冷知識】在 .git 目錄裡有什麼東西？Part 1
- 【超冷知識】在 .git 目錄裡有什麼東西？Part 2
### 六、使用分支
- 為什麼要使用分支？
    - 成本很低
- 開始使用分支
    - `git branch aaa`開一個aaa的分支
    - `git branch -m aaa bbb`改分支名稱
    - `git branch -d eeee`刪除分支eeee，若沒有merge過會跳出警告
    - `git branch -D eeee`強迫刪除分支eeee
    - `git checkout -b fff` -b 若沒有fff分支則建立
-  對分支的誤解
- 合併分支
    - `git checkout master`移動到要合併的分支
    - `git merge cat`把要合併過來的(cat)合併到要主線(master)
    - 退回前一個狀態`git reset HEAD^ --hard`
- 【狀況題】為什麼我的分支都沒有「小耳朵」？
    -  主線相對branch若沒有多其他commit，Git 就會自動選用「快轉模式（Fast Forward）」
    - merge加上--no-ff可強迫產生 `git merge cat --no-ff`
- 【常見問題】合併過的分支要留著嗎？
    - 看心情
- 【狀況題】不小心把還沒合併的分支砍掉了，救得回來嗎？
    - 30天內理論上可以
    - `git reflog`
- 另一種合併方式（使用 rebase）
    - 有點像移花接木，是複製貼上(且重新計算)，不是剪下貼上
    - 重新設定基準點
    - 在分支上`git rebase aaaaaa`aaaaaa為要重新設定基準點的hash code 或是那一個branch的名字也可以。
    - rebase錯的話
        1. 方法一
        - `git reflog`查詢做rebase之前的那一個hsash
        - `git reset xxxxxxx --hard`
        2. 方法二
        - git reset ORIG_HEAD --hard
    - 不應該隨便對已經推出去給別人內容進行 rebase，因為這很容易造成其它人的困擾。
- 合併發生衝突了，怎麼辦？
    - 用merge
        1. 修好衝突的檔案
        2. `git add index.html`
        3. `git commit -m "conflict fixed"`
    - 用rebase一半卡住
        1. 修好衝突的檔案
        2. `git add index.html`
        3. `git rebase --continue`
    - 若卡住的不是文字檔
        - 選一個分支
        - 用現在這一個分支--ours `git checkout --ours cute_animal.jpg`
        - 用對方的分之--theirs `git checkout --theirs cute_animal.jpg`
- 【冷知識】為什麼大家都說在 Git 開分支「很便宜」？
- 【冷知識】Git 怎麼知道現在是在哪一個分支？
- 【狀況題】我可以從過去的某個 Commit 再長一個新的分支出來嗎？
        
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


- git pull 是 fetch + merge 一起做
- hotfix 應從 master 開 branch
    - [看圖](https://nvie.com/posts/a-successful-git-branching-model/)


- git commit 設定時間 和 修改 commit 時間
    - 參考資料 https://xkcoding.com/2019/01/21/modify-git-commit-timestamp.html
    - 設定這一個 commit 時間 `git commit --amend --date="2020-08-02T23:45:00+0800" -am "這裡寫註解說明"`
        - -f 之外的選擇，先 pull 再 rebase [參考：先拉再推](https://gitbook.tw/chapters/github/fail-to-push.html)
    - 修改之前 commit 的時間 `git commit --amend --date="2019-01-01T00:00:00+0800" -C edd2dbbe31fbab492f337628011119493a12a9c6`

- 退回前一個 commit 
    - reset ?
        - `git reset --soft HEAD~1`
    - drop ?

- upstream 消失

- 參考圖 [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- [如何使用 Git? (遠端篇)](https://hackmd.io/@U0TRn8JAT-S9Y8cK9znmxA/SkMkplt1N?print-pdf#/)