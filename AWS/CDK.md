# Document

- https://docs.aws.amazon.com/zh_tw/cdk/latest/guide/constructs.html#constructs_l1_using

# Workshop


# PahudDev
- 
0:42 從 cloudformation 開始說起
0:53 讓我們回到九年前
- 2011 cloudformation
    - 一種菜單模板
    - JSON YAML
1:52 Terraform
- 2014 HashiCorp
2:28 Declarative 風格的 IaC
- 陳述式的開發
3:16 Declarative Programming
- 只在乎最終的狀態結果，不管構建流程
4:17 Imperative Programming
- 在乎 how
- 重視流程
4:53 兼具 Declarative 與 Imperative 的優點，AWS CDK 誕生
- 2019
- 做出 YAML --> cloudformation 實作
5:58 Demo 
- ``
- ``
- `npm i -g aws-cdk` 安裝CDK
- 起始一個 project `cdk init sample-app`
- lib 資料夾內就是要用來修改的 typescrip 檔案
- `cdk bootstrap` 第一次???（使用 CDK? 開新 project?）要做，部署一些 S3 需要使用的資源 (可以在 cloudformation 看到佈了什麼)
6:41 安裝CDK CLI
6:49 cdk init
7:40 cdk bootstrap
8:04 `cdk synth`
- 列出當前模板到 deploy 之前的 YAML 內容
    - YAML file
        - 會幫不同人，對到相同的資源
            - 不用重佈，節省資源，節省時間
    - 確認大家佈到相同環境 (e.g. 公司 環境)，會產生一樣的結果
    - 會記 git commit
- 將您的 AWS CDK 應用程式編譯為 AWS CloudFormation 範本。
8:26 `cdk deploy`
- 透過 AWS CloudFormation，將您的 AWS CDK 應用程式部署到測試或生產環境。
9:33 `cdk diff`
- 當前和線上的差異
- 查看本機 AWS CDK 程式碼與 AWS 執行中應用程式之間的「差異」。
10:41 cdk destroy
- 整個 cloudformation stack 都刪除 (resource 不一定刪除？)
    - 若有 resource 不能刪除，stack 就不能刪除
10:48 wrap-up