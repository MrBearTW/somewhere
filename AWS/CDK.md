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

# Developer Guide

## Concepts

### Constructs

- 基本
    - basic blocks = cloud component
        - e.g. S3
- AWS Construct library
    - 構造庫
        1. L1: represent all resources available in AWS CloudFormation
            - CFN Resources = L1 = level 1 = Cfn resources
            - CfnXyz e.g. CfnBucket (represents the AWS::S3::Bucket AWS CloudFormation resource)
        2. L2: represent AWS resources, but with a higher-level, intent-based API. 
            - e.g. s3.Bucket (represents an Amazon S3 bucket with additional properties and methods, such as bucket.addLifeCycleRule(), which adds a lifecycle rule to the bucket.)
        3. patterns
            - AWS Construct Library includes even higher-level constructs
            - e.g. aws-ecs-patterns.ApplicationLoadBalancedFargateService construct (represents an architecture that includes an AWS Fargate container cluster employing an Application Load Balancer (ALB).)
            - e.g. aws-apigateway.LambdaRestApi construct (represents an Amazon API Gateway API that's backed by an AWS Lambda function.)
- Composition
    - Composition is the key pattern for defining higher-level abstractions through constructs. 
- Initialization
    1. Scope: `this` for the scope
    2. id: An identifier that must be unique within this scope. 
        - e.g.  resource names and AWS CloudFormation logical IDs.
    3. Props: arguments / Configuration
- Apps and stacks
    - app
        - We call your CDK application an app, which is represented by the AWS CDK class App.
        - ```ts
            import { App, Stack, StackProps } from '@aws-cdk/core';
            import * as s3 from '@aws-cdk/aws-s3';

            class HelloCdkStack extends Stack {
                constructor(scope: App, id: string, props?: StackProps) {
                    super(scope, id, props);

                    new s3.Bucket(this, 'MyFirstBucket', {
                        versioned: true
                    });
                }
            }

            const app = new App();
            new HelloCdkStack(app, "HelloCdkStack");
            ```
            - Stack 內要定義 `s3.Bucket`
    - Stacks
        - Stacks in AWS CDK apps extend the Stack base class.
        - ```ts
            class HelloCdkStack extends Stack {
                constructor(scope: App, id: string, props?: StackProps) {
                    super(scope, id, props);

                    //...
                }
            }
            ```
            - Stack class, define a constructor that accepts scope, id, and props, and invoke the base class constructor via super with the received scope, id, and props, as shown in the following example.
- Using L1 constructs
    - 定義完 stack, 實例化 constructs
    - L1 constructs are exactly the resources defined by AWS CloudFormation—no more, no less.
    - You must provide the resource's required configuration yourself. 
    - create an Amazon S3 bucket using the CfnBucket class
        - ```ts
            const bucket = new s3.CfnBucket(this, "MyBucket", {
                bucketName: "MyBucket"
            });
            ```
        - ```ts
            const bucket = new s3.CfnBucket(this, "MyBucket", {
            bucketName: "MyBucket",
                corsConfiguration: {
                    corsRules: [{
                        allowedOrigins: ["*"],
                        allowedMethods: ["*"]
                    }]
                }
            });
            ```
    - You can't use L2 property types with L1 constructs
- Using L2 constructs
    - defines an Amazon S3 bucket by creating an instance of the Bucket class, an L2 construct.
        - ```ts
            import * as s3 from '@aws-cdk/aws-s3';

            // "this" is HelloCdkStack
            new s3.Bucket(this, 'MyFirstBucket', {
                versioned: true
            });
            ```
- Configuration
    - 大多 constructs 接受 `props` 做它們的第三個參數
        - e.g. defines a bucket with AWS Key Management Service (AWS KMS) encryption and static website hosting enabled.
            - ```ts
                new s3.Bucket(this, 'MyEncryptedBucket', {
                    encryption: s3.BucketEncryption.KMS,
                    websiteIndexDocument: 'index.html'
                });
                ```
                - Since it does not explicitly specify an encryption key, the Bucket construct defines a new kms.Key and associates it with the bucket.
    - AWS constructs are designed around the concept of "sensible defaults."
- Interacting with constructs
    - Constructs are classes that extend the base Construct class.
    - 
    - e.g.  grants the IAM group data-science permission to read from the Amazon S3 bucket raw-data.
        - ```ts
            const rawData = new s3.Bucket(this, 'raw-data');
            const dataScience = new iam.Group(this, 'data-science');
            rawData.grantRead(dataScience);
            ```
    - Another common pattern is for AWS constructs to set one of the resource's attributes
        - ```ts
            const jobsQueue = new sqs.Queue(this, 'jobs');
            const createJobLambda = new lambda.Function(this, 'create-job', {
                runtime: lambda.Runtime.NODEJS_10_X,
                handler: 'index.handler',
                code: lambda.Code.fromAsset('./create-job-lambda-code'),
                environment: {
                    QUEUE_URL: jobsQueue.queueUrl
                }
            });
            ```
- Writing your own constructs
    -  An AWS CDK construct such as s3.Bucket or sns.Topic behaves the same as a construct imported from a third-party library that someone published via NPM or Maven or PyPI—or to your company's internal package repository.
    - e.g. you could declare a construct that represents an Amazon S3 bucket which sends an Amazon Simple Notification Service (Amazon SNS) notification every time someone uploads a file into it:
        - ```ts
            export interface NotifyingBucketProps {
                prefix?: string;
            }

            export class NotifyingBucket extends Construct {
                constructor(scope: Construct, id: string, props: NotifyingBucketProps = {}) {
                    super(scope, id);
                    const bucket = new s3.Bucket(this, 'bucket');
                    const topic = new sns.Topic(this, 'topic');
                    bucket.addObjectCreatedNotification(new s3notify.SnsDestination(topic),
                    { prefix: props.prefix });
                }
            }
            ```
        - 
            - ```ts
                new NotifyingBucket(this, 'MyNotifyingBucket');
                ```
        - Typically, you would also want to expose some properties or methods on your constructs.
            - e.g. Adding a topic property allows consumers to access the inner topic
                - ```ts
                    export class NotifyingBucket extends Construct {
                        public readonly topic: sns.Topic;

                        constructor(scope: Construct, id: string, props: NotifyingBucketProps) {
                            super(scope, id, props);
                            const bucket = new s3.Bucket(this, 'bucket');
                            this.topic = new sns.Topic(this, 'topic');
                            bucket.addObjectCreatedNotification(new s3notify.SnsDestination(this.topic), { prefix: props.prefix });
                        }
                    }
                    ```
                - Now, consumers can subscribe to the topic
                    - ```ts
                        const queue = new sqs.Queue(this, 'NewImagesQueue');
                        const images = new NotifyingBucket(this, '/images');
                        images.topic.addSubscription(new sns_sub.SqsSubscription(queue));
                        ```
- The construct tree

### Apps

- 基本
    - CDK application
- The app construct
- App lifecycle
    1. Construction (or Initialization)
    2. Preparation
    3. Validation
    4. Synthesis
    5. Deployment
- Cloud assemblies

### Stacks

- 基本
    - AWS CDK apps extend the Stack base class,
- Stack API

- Nested stacks

### Environments



### Resources

- Resource attributes
- Referencing resources
- Accessing resources in a different stack
- Physical names
- Passing unique identifiers
- Importing existing external resources
- Permission grants
- Metrics and alarms
- Network traffic
- Event handling
- Removal policies

### Identifiers

- Construct IDs
- Paths
- Unique IDs
- Logical IDs

### Tokens

- Tokens and token encodings
- String-encoded tokens
- List-encoded tokens
- Number-encoded tokens
- Lazy values
- Converting to JSON

### Parameters

- Defining parameters
- Using parameters
- Deploying with parameters

### Tagging

- Tag priorities
- Optional properties
- Example

### Assets

- Assets in detail
- Asset types
- AWS CloudFormation resource metadata

### Permissions

- Principals
- Grants
- Roles
- Resource policies

### Context

- Construct context
- Context methods
- Viewing and managing context
- AWS CDK Toolkit --context flag
- Example

### Feature flags

- Aspects in detail
- Example

### Aspects


### Escape hatches

- Using AWS CloudFormation constructs directly
- Modifying the AWS CloudFormation resource behind AWS constructs
- Raw overrides
- Custom resources

### Bootstrapping

- How to bootstrap
- Bootstrapping templates
- Customizing bootstrapping
- Stack synthesizers
- Customizing synthesis
- The bootstrapping template contract