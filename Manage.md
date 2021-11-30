# Scurm
- Jira
    - confluence
        - 企業級 wiki
        - 文件樣板
    - minimun document
    - 一單不兩填
        - 自動回到 WBS 和 chart

- Scurm 
    - 敏捷式開發（Agile）的一種
        - 相對 Agile 開發方式：瀑布式開發（Waterfall） CMMI: Capability Maturity Model Integration
    - 敏捷框架
    - 疊代 (iterative) 與增量 (incremental) 式的方式交付工作
    - 每個疊代稱作 Sprint。
        - 一個 Sprint 的時間不超過一個月，通常是兩星期。
        - Sprint 都專注在唯一一個共同的目標 (Sprint Goal)
        - 在 Sprint 結束時，團隊會進行 Sprint 審查 (Sprint Review) 跟利害關係人 (Stakeholders) 一起檢視當下的結果與調適計畫，
    - 最後，團隊會進行 Sprint 回顧 (Sprint Retrospective) 來持續改善
    - 人
        - Scrum Master
            - 僕人式領導的 Team Lead (錯，不只)
            - 部隊裡的輔導長
            - 引導
            - 移除障礙
        - 產品負責人（product owner）
        - 開發團隊（dev team）
    - 「假如軟體沒有被使用，那麼它算是被開發出來了麼？」利益相關者（客戶，提供商）
    - Scrum會議一共包含以下 5 種：
        1. 衝刺計劃會議 Sprint Planning
        2. 每日站立會議 Daily Scrum
            - 會議準時開始。
            - 歡迎所有人參加，但只有「豬」可以發言。
            - 不論團隊規模大小，會議被限制在 10 ~ 15 分鐘。
            - 所有出席者都應站立。（有助於保持會議簡短）
            - 會議應在固定地點和每天的同一時間舉行。
            - 每個團隊成員需要回答三個問題：
                1. 昨天你完成了那些工作？
                2. 今天你打算做什麼？
                3. 完成你的目標是否存在什麼障礙？（Scrum 主管需要記下這些障礙）
            - 依照 Acceptance Criteria
        3. 評審會議 Sprint Review
            - Sprint 結束時針對產品的會議，PO 邀請利害關係人對產出給意見
        4. 回顧會議 Sprint Retrospective / Sprint Retro
            - Sprint 1週對應1小時（如果Sprint 2 週就不超過 2 小時） vs. 會議的時間限制在 4 小時。
            - 讓這個會議不是在「檢討」，而是在相互交流
            - 強迫開發團隊發言
        5. Product Backlog Refinement / PBR（產品待辦清單精煉會議）
            - PO 跟 Team 一起討論近期內會開始施工的 Item，主要是從商業和使用者角度切入，盡可能不觸及技術細節。

    - 名詞
        - Item（物件）又稱 Story
            - 是PO定義的產品產出。Item 大小要講究，要可以讓團隊在一般的速率下，可以完成3–5個。
            - As a < type of user >, I want < some goal > so that < some reason >
        - Task（工作）
            - 是 Dev Team 針對 Item（不是 PO 也不是 SM）列出完成 Item 所需的工作；工作分配則是開發團隊自己安排。
            - 拆解 Task 基準以 2–5 小時可完成的範疇為主
        - 產品訂單（product backlog）（產品待辦清單）
            - 由 PO 負責整理的產品願景圖，以 Item 為單位，施工順序由上而下。
        - 衝刺訂單（sprint backlog）（衝刺待辦清單）
            - Dev Team 向 PO 承諾這個 Sprint 會盡力完成的 Item List；以 Task 為單位。
        - 燃盡圖（burn down chart）
            - 有點類似怪物的血條，看看還剩多少血怪（Sprint Backlog）才死。以 Task 大小為單位。
        
    - Scrum的主要原則 「沒有問題被掃入地毯下」，Scrum 鼓勵每一個團隊成員描述他所遇到的困難，而這個困難可能會對整個團隊的工作造成影響。
    - [真假敏捷檢查表](https://funevo.com/2016/04/06/cargo-cult-agile-min-jie-bai-fei-ji/)
    - 雞“參與” Involvement，但是猪“承諾” Commitment

# Sync 原則
- 三個要素
    - 地圖	範圍	一樣的語言
    - 現在的座標	進度狀況	
    - 未來的目的地	milestone	什麼時間點會到達

- 三種狀態
    - Wait
    - Ongoing
    - Done

- WBS 判斷要不要
- 公司是自己的話，需要這一些文件嗎
    - 獲利    