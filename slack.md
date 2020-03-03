灰底的部分就是輸入slack的部分


# AttendanceBot
- 在slack的頻道中(電腦版左下)會有一個 [attendancebot] 可以點進去做操作
- 上班 `in`
    - `Add commit` 編輯內容，今天上班大概要做什麼
- 午餐 `lunch`
- 下班 `out`
    - `Add commit` 編輯內容，今天上班大概做了什麼
- 請假 `apply` 依序選擇
    - 選擇
        - Leave Type
        - Duration Type
        - 不同選擇可能會有更多選項
    - `Add commit` 加上註解
    - 送出之後會送到主管那邊
- 進入編輯`editpunch` 會跳出一個連結，點進去會到一個網頁，可以做一些編輯
- 一次性設定權限(同步狀態=出現上班勾勾)
    1. 未設定過的在in之後會跳出`Looks like I don't have the permission to update your Slack status.Click here to grant me this permission.`
    2. 順著連結Click here點進去
    3. 同意同意同意
    4. 之後有打上班卡會出現勾勾，下班會出現叉叉。
# 設定提醒
- 在要設定提醒的頻道輸入 `/remind @人 事 時間` 
- e.g. /remind @channel 提醒王銓勝連絡他同學 at mm/dd/yyyy 11:55
