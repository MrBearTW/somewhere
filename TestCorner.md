# 2019/09/03 Teat Corner
### 19:40 ~ 20:30 |   How LINE runs a project with LINE MUSIC as an example - Marc

- Strategy 包含》 product 包含》operation marketing

- SMART goals measured by kpi
- Monitor 客戶評論，從FB討論區和PTT

- User/Biz requertment

- 很大的新案子會做得比較完整
1. Theme Scoring
2. Discuss backlog
3. Define weight of criteria
4. Score based on criteria
5. Net Score

- FRD spec 應包含下列
1. Diagram
2. Flow
3. Description 

- Zeplin 美工的spec工具
    - accrue design spec
    - Assets
    - Code snippet



Sonarqube + drone
Image upload -> Harbor
Open api initiative
Redox

- 自動化api測試工具Newman


- >hey + postman 做 api performance 壓力測試

- APP類測試
    - Android
        - Exprexxo
        - UI Automator
        - Instrumented test
    - iOS
        - XCUItest
        - XCtest

- 環境
    - 阿發 貝他 rc stage production

- Planer會控制product 和 R&D部門的平衡


### 20:50 ~ 21:30 |   How we test in LINE TRAVEL that you'll love in the future - Miki
- Smoke test vs. functionality test 要取得平衡

- 書 [Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing](https://www.amazon.com/Explore-Increase-Confidence-Exploratory-Testing/dp/1937785025)

- Cd工具 nuclei
- Coverage 要比之前的高，或一樣，不然退回去給RD

- Flaky test
    - 開10個docker跑（經驗上78次左右會出問題，依團隊經驗決定）
    - Retry Mechanism,not more then twice 

- Cypress


- 確認第三方api還活著
