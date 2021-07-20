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
    - In AWS CDK apps, you define constructs "inside" other constructs using the scope argument passed to every construct.
    - AWS CDK app defines a hierarchy of constructs known as the construct tree.
    - The root of this tree is your app—that is, an instance of the App class.
    - Almost always, you should pass this (in Python, self) as the scope, indicating that the new construct is a child of the current construct.
    - The intended pattern is that you derive your construct from `core.Construct`, then instantiate the constructs it uses in its constructor.

### Apps

- 基本
    - CDK application
    - As described in Constructs, to provision infrastructure resources, all constructs that represent AWS resources must be defined, directly or indirectly, within the scope of a Stack construct.
    - e.g. The following example declares a stack class named "MyFirstStack" that includes a single Amazon S3 bucket.
        - ```ts
            class MyFirstStack extends Stack {
                constructor(scope: Construct, id: string, props?: StackProps) {
                    super(scope, id, props);

                    new s3.Bucket(this, 'MyFirstBucket');
                }
            }
            ```
- The app construct
    - e.g. The following example app instantiates a MyFirstStack and produces the AWS CloudFormation template that the stack defined.
        - ```ts
            const app = new App();
            new MyFirstStack(app, 'hello-cdk');
            app.synth();
            ```
            - You can now use the `App` instance as a scope for defining a single instance of your stack.
    - e.g. You can also define constructs within an App-derived class as follows.
        - ```ts
            class MyApp extends App {
                constructor() {
                    new MyFirstStack(this, 'hello-cdk');
                }
            }

            new MyApp().synth();
            ```
    - These two methods are equivalent.
- App lifecycle
    - The following diagram shows the phases that the AWS CDK goes through when you call the cdk deploy. 
    - This command deploys the resources that your app defines.
    - ![the phases that the AWS CDK goes through when you call the cdk deploy](https://docs.aws.amazon.com/zh_tw/cdk/latest/guide/images/Lifecycle.png)
        1. Construction (or Initialization)
            - Your code instantiates all of the defined constructs and then links them together. 
            - In this stage, all of the constructs (app, stacks, and their child constructs) are instantiated and the constructor chain is executed. 
            - Most of your app code is executed in this stage.
        2. Preparation
            - All constructs that have implemented the `prepare` method participate in a final round of modifications, to set up their final state.
            - The preparation phase happens automatically. 
            - As a user, you don't see any feedback from this phase.
            - It's rare to need to use the "prepare" hook, and generally not recommended. 
            - You should be very careful when mutating the construct tree during this phase, because the order of operations could impact behavior.
            - 自動執行 / 看不到反饋 / 通常不會動到這一步驟
        3. Validation
            - All constructs that have implemented the `validate` method can validate themselves to ensure that they're in a state that will correctly deploy.
            - You will get notified of any validation failures that happen during this phase. Generally, we recommend that you perform validation as soon as possible (usually as soon as you get some input) and throw exceptions as early as possible. 
            - Performing validation early improves diagnosability as stack traces will be more accurate, and ensures that your code can continue to execute safely.
            - 會收到驗證失敗通知 / 可以執行 throw exceptions
        4. Synthesis
            - This is the final stage of the execution of your AWS CDK app.
            - It's triggered by a call to `app.synth()`, and it traverses the construct tree and invokes the `synthesize` method on all constructs.
            - Constructs that implement `synthesize` can participate in synthesis and emit deployment artifacts to the resulting cloud assembly.
            - These artifacts include AWS CloudFormation templates, AWS Lambda application bundles, file and Docker image assets, and other deployment artifacts.
            - `Cloud assemblies` describes the output of this phase.
            - In most cases, you won't need to implement the synthesize method
            - CDK 執行的最後一步 / 
        5. Deployment
            - In this phase, the AWS CDK Toolkit takes the deployment artifacts cloud assembly produced by the synthesis phase and deploys it to an AWS environment. 
            - It uploads assets to Amazon S3 and Amazon ECR, or wherever they need to go, and then starts an AWS CloudFormation deployment to deploy the application and create the resources.
            - 將 Synthesis 完成的資源部署到 AWS 中 / 啟動 AWS CloudFormation 部署以部署應用程序並創建資源
        - By the time the AWS CloudFormation deployment phase (step 5) starts, your AWS CDK app has already finished and exited.
            - The AWS CDK app can't respond to events that happen during deployment, such as a resource being created or the whole deployment finishing.
                - 若要將 custom resource 加入 AWS CloudFormation [請看相關說明](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/custom-resource/)
            - The AWS CDK app might have to work with values that can't be known at the time it runs.
                - 解法：[Tokens](https://docs.aws.amazon.com/zh_tw/cdk/latest/guide/tokens.html)
- Cloud assemblies
    - The call to app.synth() is what tells the AWS CDK to synthesize a cloud assembly from an app.
        - The Cloud Assembly is the output of the synthesis operation. [Cloud Assembly Schema](https://github.com/aws/aws-cdk/blob/master/packages/@aws-cdk/cloud-assembly-schema/README.md)
    - Typically you don't interact directly with cloud assemblies.
    - They are files that include everything needed to deploy your app to a cloud environment. 
        - e.g. For example, it includes an AWS CloudFormation template for each stack in your app, and a copy of any file assets or Docker images that you reference in your app.
    - 可在 `cdk.json` 中修改
        - ```ts
            {
                "app": "npx ts-node --prefer-ts-exts bin/my-app.ts"
            }
            ```
    - If you did not create your project using the CDK Toolkit, or wish to override the command line given in cdk.json, you can use the --app option when issuing the cdk command.
        - `cdk --app 'executable' cdk-command ...`
    - The CLI can also interact directly with an already-synthesized cloud assembly. To do that, just pass the directory in which the cloud assembly is stored in --app. The following example lists the stacks defined in the cloud assembly stored under `./my-cloud-assembly`.
        - `cdk --app ./my-cloud-assembly ls`


### Stacks

- 基本
    - The unit of deployment in the AWS CDK is called a stack.
        - All AWS resources defined within the scope of a stack, either directly or indirectly, are provisioned as a single unit.
    - Because AWS CDK stacks are implemented through AWS CloudFormation stacks, they have the same limitations as in AWS CloudFormation.
        -  [AWS CloudFormation](https://docs.aws.amazon.com/zh_tw/AWSCloudFormation/latest/UserGuide/Welcome.html)
            - AWS CloudFormation 是一個能幫助您模型化與設定 Amazon Web Services 資源的服務
    - e.g. 2 stacks
        - ```ts
            const app = new App();

            new MyFirstStack(app, 'stack1');
            new MySecondStack(app, 'stack2');

            app.synth();
            ```
    - `cdk ls` list all the stacks
    - `cdk synth stack1` You can synthesize each template by specifying the stack name in the cdk synth command.
    - e.g. The following code shows an example of a service that consists of three stacks: a control plane, a data plane, and monitoring stacks. The service construct is defined twice: once for the beta environment and once for the production environment.
        - ```ts
            import { App, Construct, Stack } from "@aws-cdk/core";

            interface EnvProps {
                prod: boolean;
            }

            // imagine these stacks declare a bunch of related resources
            class ControlPlane extends Stack {}
            class DataPlane extends Stack {}
            class Monitoring extends Stack {}

            class MyService extends Construct {

            constructor(scope: Construct, id: string, props?: EnvProps) {
            
                super(scope, id);
            
                // we might use the prod argument to change how the service is configured
                new ControlPlane(this, "cp");
                new DataPlane(this, "data");
                new Monitoring(this, "mon");  }
            }

            const app = new App();
            new MyService(app, "beta");
            new MyService(app, "prod", { prod: true });

            app.synth();
            ```
            - This AWS CDK app eventually consists of six stacks, three for each environment:
            - The physical names of the AWS CloudFormation stacks are automatically determined by the AWS CDK based on the stack's construct path in the tree.
                - By default, a stack's name is derived from the construct ID of the Stack object, but you can specify an explicit name using the stackName prop (in Python, stack_name), as follows.
                - ```ts
                    new MyStack(this, 'not:a:stack:name', { stackName: 'this-is-stack-name' });
                    ```
- Stack API
    - Stack.of(construct)
        - A static method that returns the Stack in which a construct is defined.
    - stack.stackName
        - Returns the physical name of the stack. As mentioned previously, all AWS CDK stacks have a physical name that the AWS CDK can resolve during synthesis.
    - stack.region and stack.account
    - stack.addDependency(stack)
    - stack.tags
    - stack.partition, stack.urlSuffix 
        - Return tokens that resolve to the respective AWS CloudFormation pseudo-parameters, such as { "Ref": "AWS::Partition" }.
        - hese tokens are associated with the specific stack object so that the AWS CDK framework can identify cross-stack references.
    - stack.availabilityZones
    - stack.parseArn(arn) and stack.formatArn(comps)
        - Can be used to work with Amazon Resource Names (ARNs).
    - stack.toJsonString(obj) 
    - stack.templateOptions 
- Nested stacks
    - The NestedStack construct offers a way around the AWS CloudFormation 500-resource limit for stacks.
    - A nested stack counts as only one resource in the stack that contains it, but can itself contain up to 500 resources, including additional nested stacks.
    - The scope of a nested stack must be a `Stack` or `NestedStack` construct.
        - The nested stack needn't be declared lexically inside its parent stack; it is necessary only to pass the parent stack as the first parameter (scope) when instantiating the nested stack.
        - Aside from this restriction, defining constructs in a nested stack works exactly the same as in an ordinary stack.
    - At synthesis time, the nested stack is synthesized to its own AWS CloudFormation template, which is uploaded to the AWS CDK staging bucket at deployment.
        - Nested stacks are bound to their parent stack and are not treated as independent deployment artifacts; they are not listed by `cdk list` nor can they be deployed by `cdk deploy`.
    - References between parent stacks and nested stacks are automatically translated to stack parameters and outputs in the generated AWS CloudFormation templates, as with any cross-stack reference.
    - Nested stacks 綁定一個 父stacks ，不可獨立被 cdk 指令列出或 deploy。

### Environments

- Each Stack instance in your AWS CDK app is explicitly or implicitly associated with an environment (env).
- An environment is the target AWS account and region into which the stack is intended to be deployed.
- If you don't specify an environment when you define a stack, the stack is said to be environment-agnostic.
- For production stacks, we recommend that you explicitly specify the environment for each stack in your app using the env property. 
    - e.g. The following example specifies different environments for its two different stacks.
        - ```ts
            const envEU  = { account: '2383838383', region: 'eu-west-1' };
            const envUSA = { account: '8373873873', region: 'us-west-2' };

            new MyFirstStack(app, 'first-stack-us', { env: envUSA });
            new MyFirstStack(app, 'first-stack-eu', { env: envEU });
            ```
            - 可以修改 AWS CDK CLI: CDK_DEFAULT_ACCOUNT and CDK_DEFAULT_REGION.
-  you must specify env.
    - For example, you can't write code like if (stack.region === 'us-east-1') or use framework facilities like Vpc.fromLookup (Python: from_lookup), which need to query your AWS account. These features do not work at all without an explicit environment specified
    - 開發時可用 DEFAULT
        - ```ts
            new MyDevStack(app, 'dev', { 
                env: { 
                    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT, 
                    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION 
            }});
            ```
    - production 一定要指名
- 可以寫腳本 `cdk-deploy-to.sh` 來 delpoy
    - ```bash
        #!/usr/bin/env bash
        if [[ $# -ge 2 ]]; then
            export CDK_DEPLOY_ACCOUNT=$1
            export CDK_DEPLOY_REGION=$2
            shift; shift
            npx cdk deploy "$@"
            exit $?
        else
            echo 1>&2 "Provide account and region as first two args."
            echo 1>&2 "Additional args are passed through to cdk deploy."
            exit 1
        fi
        ```
        - Save the script as cdk-deploy-to.sh, then execute chmod +x cdk-deploy-to.sh to make it executable.
- 沒有指定的話，有可能會是不可知的 / production --> hard-code the target account and region / 

### Resources
- e.g. For example, here's how to create an Amazon SQS queue with KMS encryption using the sqs.Queue construct from the AWS Construct Library.
    - ```ts
        import * as sqs from '@aws-cdk/aws-sqs';
            
        new sqs.Queue(this, 'MyQueue', {
            encryption: sqs.QueueEncryption.KMS_MANAGED
        });
        ```
    - Some configuration props are optional, and in many cases have default values. 
    - In some cases, all props are optional, and the last argument can be omitted entirely.
- Resource attributes
    - Most resources in the AWS Construct Library expose attributes, which are resolved at deployment time by AWS CloudFormation.
    - Attributes are exposed in the form of properties on the resource classes with the type name as a prefix.
    - e.g. The following example shows how to get the URL of an Amazon SQS queue using the queueUrl (Python: queue_url) property.
        - ```ts
            import * as sqs from '@aws-cdk/aws-sqs';

            const queue = new sqs.Queue(this, 'MyQueue');
            const url = queue.queueUrl; // => A string representing a deploy-time value
            ```
- Referencing resources
    - Many AWS CDK classes require properties that are AWS CDK resource objects (resources).
    - To satisfy these requirements, you can refer to a resource in one of two ways
        1. By passing the resource directly
        2. By passing the resource's unique identifier, which is typically an ARN, but it could also be an ID or a name
    - e.g. The following example defines an Amazon ECS cluster and then uses it to define an Amazon ECS service.
        - ```ts
            const cluster = new ecs.Cluster(this, 'Cluster', { /*...*/ });

            const service = new ecs.Ec2Service(this, 'Service', { cluster: cluster });
            ```
- Accessing resources in a different stack
    - You can access resources in a different stack, as long as they are in the same account and AWS Region.
    - e.g. 
        - ```ts
            const prod = { account: '123456789012', region: 'us-east-1' };

            const stack1 = new StackThatProvidesABucket(app, 'Stack1' , { env: prod });

            // stack2 will take a property { bucket: IBucket }
            const stack2 = new StackThatExpectsABucket(app, 'Stack2', {
                bucket: stack1.bucket, 
                env: prod
                });
            ```
            - If the AWS CDK determines that the resource is in the same account and Region, but in a different stack, it automatically synthesizes AWS CloudFormation exports in the producing stack and an Fn::ImportValue in the consuming stack to transfer that information from one stack to the other.
            - deadlock
- Physical names
    - The logical names of resources in AWS CloudFormation are different from the names of resources that are shown in the AWSManagement Console after AWS CloudFormation has deployed the resources. 
    - The AWS CDK calls these final names physical names.
    - e.g.
        - Amazon S3 bucket with the logical ID `Stack2MyBucket4DD88B4F`
        - physical name `stack2mybucket4dd88b4f-iuv1rbv9z3to`.
    - You can specify a physical name when creating constructs that represent resources by using the property <resourceType>Name. 
        - e.g. The following example creates an Amazon S3 bucket with the physical name my-bucket-name.
            - ```ts
                const bucket = new s3.Bucket(this, 'MyBucket', {
                    bucketName: 'my-bucket-name',
                });
                ```
                - Most importantly, any changes to deployed resources that require a resource replacement, such as changes to a resource's properties that are immutable after creation, will fail if a resource has a physical name assigned. 
                - If you end up in a state like that, the only solution is to delete the AWS CloudFormation stack, then deploy the AWS CDK app again.
    - In some cases, such as when creating an AWS CDK app with cross-environment references, physical names are required for the AWS CDK to function correctly.
        - e.g. In those cases, if you don't want to bother with coming up with a physical name yourself, you can let the AWS CDK name it for you by using the special value PhysicalName.GENERATE_IF_NEEDED, as follows.
            - ```ts
                const bucket = new s3.Bucket(this, 'MyBucket', {
                    bucketName: core.PhysicalName.GENERATE_IF_NEEDED,
                });
                ```
- Passing unique identifiers
    - e.g.  For example, when you are using the low-level AWS CloudFormation resources, or need to expose resources to the runtime components of an AWS CDK application, such as when referring to Lambda functions through environment variables.
        - ```ts
            bucket.bucketName
            lambdaFunc.functionArn
            securityGroup.groupArn
            ```
    - e.g. The following example shows how to pass a generated bucket name to an AWS Lambda function.
        - ```ts
            const bucket = new s3.Bucket(this, 'Bucket');

            new lambda.Function(this, 'MyLambda', {
                // ...
                environment: {
                    BUCKET_NAME: bucket.bucketName,
                },
            });
            ```
- Importing existing external resources
    - e.g. The following example shows how to define a bucket based on an existing bucket with the ARN `arn:aws:s3:::my-bucket-name`, and a Amazon Virtual Private Cloud based on an existing VPC having a specific ID.
        - ```ts
            // Construct a resource (bucket) just by its name (must be same account)
            s3.Bucket.fromBucketName(this, 'MyBucket', 'my-bucket-name');

            // Construct a resource (bucket) by its full ARN (can be cross account)
            s3.Bucket.fromArn(this, 'MyBucket', 'arn:aws:s3:::my-bucket-name');

            // Construct a resource by giving attribute(s) (complex resources)
            ec2.Vpc.fromVpcAttributes(this, 'MyVpc', {
                vpcId: 'vpc-1234567890abcde',
            });
            ```
    - Because the ec2.Vpc construct is complex, composed of many AWS resources, such as the VPC itself, subnets, security groups, and routing tables), it can be difficult to import those resources using attributes.
    - To address this, the VPC construct contains a fromLookup method (Python: from_lookup) that uses a context method to resolve all the required attributes at synthesis time, and cache the values for future use in `cdk.context.json`.
    - You must provide attributes sufficient to uniquely identify a VPC in your AWS account. 
        - e.g. For example, there can only ever be one default VPC, so specifying that you want to import the VPC marked as the default is sufficient.
            - ```ts
                ec2.Vpc.fromLookup(this, 'DefaultVpc', { 
                    isDefault: true 
                });
                ```
                - 加 tag
                    - Name – The name of the VPC.
                    - aws-cdk:subnet-name – The name of the subnet.
                    - aws-cdk:subnet-type – The type of the subnet: Public, Private, or Isolated.
                    - ```ts
                        ec2.Vpc.fromLookup(this, 'PublicVpc', 
                          {tags: {'aws-cdk:subnet-type': "Public"}});
                        ```
                        - `Vpc.fromLookup()` works only in stacks that are defined with an explicit account and region in their env property.
- Permission grants
    - e.g. The following example creates the permissions to allow a Lambda function's execution role to read and write objects to a particular Amazon S3 bucket.
        - If the Amazon S3 bucket is encrypted using an AWS KMS key, this method also grants the Lambda function's execution role permissions to decrypt using this key.
        - ```ts
            if (bucket.grantReadWrite(func).success) {
                // ...
            }
            ```
            - The grant methods return an `iam.Grant` object. 
                - Use the success attribute of the Grant object to determine whether the grant was effectively applied (for example, it may not have been applied on imported resources). 
                - You can also use the assertSuccess (Python: assert_success) method of the Grant object to enforce that the grant was successfully applied.
            - e.g. The following example shows how to grant a Lambda function access to the Amazon DynamoDB CreateBackup action.
                - ```ts
                    table.grant(func, 'dynamodb:CreateBackup');
                    ```
                    - Many resources, such as Lambda functions, require a role to be assumed when executing code. A configuration property enables you to specify an `iam.IRole`.
                        -  If no role is specified, the function automatically creates a role specifically for this use. You can then use grant methods on the resources to add statements to the role.
- Metrics and alarms
    - Many resources emit CloudWatch metrics that can be used to set up monitoring dashboards and alarms.
    - e.g. The following example shows how to define an alarm when the `ApproximateNumberOfMessagesNotVisible` of an Amazon SQS queue exceeds 100.
        - ```ts
            import * as cw from '@aws-cdk/aws-cloudwatch';
            import * as sqs from '@aws-cdk/aws-sqs';
            import { Duration } from '@aws-cdk/core';

            const queue = new sqs.Queue(this, 'MyQueue');

            const metric = queue.metricApproximateNumberOfMessagesNotVisible({
                label: 'Messages Visible (Approx)',
                period: Duration.minutes(5),
                // ...
            });
            metric.createAlarm(this, 'TooManyMessagesAlarm', {
                comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
                threshold: 100,
                // ...
            });
            ```
            - If there is no method for a particular metric, you can use the general metric method to specify the metric name manually.
            - Metrics can also be added to CloudWatch dashboards.
- Network traffic
    - In many cases, you must enable permissions on a network for an application to work, such as when the compute infrastructure needs to access the persistence layer.
    - Resources that establish or listen for connections expose methods that enable traffic flows, including setting security group rules or network ACLs.
    - IConnectable resources have a connections property that is the gateway to network traffic rules configuration.
        - IConnectable: An object that has a Connections object.
    - You enable data to flow on a given network path by using allow methods. 
        - e.g. The following example enables HTTPS connections to the web and incoming connections from the Amazon EC2 Auto Scaling group fleet2.
        - ```ts
            import * as asg from '@aws-cdk/aws-autoscaling';
            import * as ec2 from '@aws-cdk/aws-ec2';

            const fleet1: asg.AutoScalingGroup = asg.AutoScalingGroup(/*...*/);

            // Allow surfing the (secure) web
            fleet1.connections.allowTo(new ec2.Peer.anyIpv4(), new ec2.Port({ fromPort: 443, toPort: 443 }));

            const fleet2: asg.AutoScalingGroup = asg.AutoScalingGroup(/*...*/);
            fleet1.connections.allowFrom(fleet2, ec2.Port.AllTraffic());
            ```
        
        - Certain resources have default ports associated with them, for example, the listener of a load balancer on the public port, and the ports on which the database engine accepts connections for instances of an Amazon RDS database.
        - In such cases, you can enforce tight network control without having to manually specify the port by using the allowDefaultPortFrom and allowToDefaultPort methods (Python: allow_default_port_from, allow_to_default_port).
        - e.g. The following example shows how to enable connections from any IPV4 address, and a connection from an Auto Scaling group to access a database.
            - ```ts
                listener.connections.allowDefaultPortFromAnyIpv4('Allow public access');

                fleet.connections.allowToDefaultPort(rdsDatabase, 'Fleet can access database');
                ```
- Event handling
    - Some resources can act as event sources. Use the addEventNotification method (Python: add_event_notification) to register an event target to a particular event type emitted by the resource.
        - In addition to this, addXxxNotification methods offer a simple way to register a handler for common event types.
    - e.g. The following example shows how to trigger a Lambda function when an object is added to an Amazon S3 bucket.
        - ```ts
            import * as s3nots from '@aws-cdk/aws-s3-notifications';

            const handler = new lambda.Function(this, 'Handler', { /*…*/ });
            const bucket = new s3.Bucket(this, 'Bucket');
            bucket.addObjectCreatedNotification(new s3nots.LambdaDestination(handler));
            ```
- Removal policies
    - Resources that maintain persistent data, such as databases and Amazon S3 buckets and even Amazon ECR registries, have a removal policy that indicates whether to delete persistent objects when the AWS CDK stack that contains them is destroyed.
    - The values specifying the removal policy are available through the RemovalPolicy enumeration in the AWS CDK core module.
    - `Value` meaning
        - `RemovalPolicy.RETAIN` Keep the contents of the resource when destroying the stack (default). The resource is orphaned from the stack and must be deleted manually. If you attempt to re-deploy the stack while the resource still exists, you will receive an error message due to a name conflict.
        - `RemovalPolicy.DESTROY` The resource will be destroyed along with the stack.
    - AWS CloudFormation does not remove Amazon S3 buckets that contain files even if their removal policy is set to DESTROY. 
        - To have the AWS CDK delete all files from the bucket before destroying it, set the bucket's autoDeleteObjects property to true.
        - e.g. Following is an example of creating an Amazon S3 bucket with RemovalPolicy of DESTROY and autoDeleteOjbects set to true. .
            - ```ts
                import * as cdk from '@aws-cdk/core';
                import * as s3 from '@aws-cdk/aws-s3';
                
                export class CdkTestStack extends cdk.Stack {
                    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
                        super(scope, id, props);
                    
                        const bucket = new s3.Bucket(this, 'Bucket', {
                        removalPolicy: cdk.RemovalPolicy.DESTROY,
                        autoDeleteObjects: true
                        });
                    }
                }
                ```
                - You can also apply a removal policy directly to the underlying AWS CloudFormation resource via the `applyRemovalPolicy()` method.
                - This method is available on some stateful resources that do not have a `removalPolicy` property in their L2 resource's props, including AWS CloudFormation stacks, Amazon Cognito user pools, Amazon DocumentDB database instances, Amazon EC2 volumes, Amazon Elasticsearch Service domains, Amazon FSx file systems, and Amazon SQS queues.
                - ```ts
                    const resource = bucket.node.findChild('Resource') as cdk.CfnResource;
                    resource.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
                    ```
    - The AWS CDK's `RemovalPolicy` translates to AWS CloudFormation's `DeletionPolicy`, but the default in AWS CDK is to retain the data, which is the opposite of the AWS CloudFormation default.
- 不同 stack 要取用，要在 same account and AWS Region / 物理名稱修改失敗 --> 砍掉重新建立 stack / VPC 存一個 `cdk.context.json` / 很多 Lambda 舉例

### Identifiers
- 基本
    - Identifiers must be unique within the scope in which they are created; they do not need to be globally unique in your AWS CDK application
- Construct IDs
    - The most common identifier, id, is the identifier passed as the second argument when instantiating a construct object. 
    - e.g.  we have two constructs with the identifier MyBucket in our app.
    - ```ts
        import { App, Construct, Stack, StackProps } from '@aws-cdk/core';
        import * as s3 from '@aws-cdk/aws-s3';

        class MyStack extends Stack {
            constructor(scope: Construct, id: string, props: StackProps = {}) {
                super(scope, id, props);

                new s3.Bucket(this, 'MyBucket');
            }
        }

        const app = new App();
        new MyStack(app, 'Stack1');
        new MyStack(app, 'Stack2');
        ```
- Paths
    - The constructs in an AWS CDK application form a hierarchy rooted in the App class.
        - We refer to the collection of IDs from a given construct, its parent construct, its grandparent, and so on to the root of the construct tree, as a path.
    - The AWS CDK typically displays paths in your templates as a string, with the IDs from the levels separated by slashes, starting at the node just below the root App instance, which is usually a stack. 
        - ```ts
            const path: string = myConstruct.node.path;
            ```
- Unique IDs
    - AWS CDK generates the necessary unique identifiers by concatenating the elements of the path and adding an 8-digit hash.
    - In general, your AWS CDK app should not need to know about unique IDs. You can, however, access the unique ID of any construct programmatically, as shown in the following example.
        - ```ts
            const uid: string = Names.uniqueId(myConstruct);
            ```
    - The address is another kind of unique identifier that uniquely distinguishes CDK resources.
        - your app generally should not need to know about its constructs' addresses, but you can retrieve a construct's address as follows.
        - ```ts
            const addr: string = myConstruct.node.addr;
            ```
- Logical IDs
    - Unique IDs serve as the logical identifiers, which are sometimes called logical names, of resources in the generated AWS CloudFormation templates for those constructs that represent AWS resources.
        - For example, the Amazon S3 bucket in the previous example that is created within Stack2 results in an `AWS::S3::Bucket` resource with the logical ID `Stack2MyBucket4DD88B4F` in the resulting AWS CloudFormation template.
        - Think of construct IDs as part of your construct's public contract. If you change the ID of a construct in your construct tree, AWS CloudFormation will replace the deployed resource instances of that construct, potentially causing service interruption or data loss.
    - Logical ID stability
        - Avoid changing the logical ID of a resource between deployments. 
        - Since AWS CloudFormation identifies resources by their logical ID, if you change the logical ID of a resource, AWS CloudFormation deletes the existing resource, and then creates a new resource with the new logical ID.
- 解釋有哪一些 ID / 如何取得 

### Tokens

- 說明
    - Tokens represent values that can only be resolved at a later time in the lifecycle of an app (see App lifecycle). 
        - e.g. or example, the name of an Amazon S3 bucket that you define in your AWS CDK app is only allocated when the AWS CloudFormation template is synthesized.
            - bucket.bucketName `${TOKEN[Bucket.Name.1234]}`
        - ```ts
            const bucket = new s3.Bucket(this, 'MyBucket');

            const fn = new lambda.Function(stack, 'MyLambda', {
                // ...
                environment: {
                    BUCKET_NAME: bucket.bucketName,
                }
            });
            ```
- Tokens and token encodings
    - Tokens are objects that implement the IResolvable interface, which contains a single resolve method. 
        - IResolvable --> Interface for values that can be resolvable later.
        - The AWS CDK calls this method during synthesis to produce the final value for the AWS CloudFormation template. 
        - Tokens participate in the synthesis process to produce arbitrary values of any type.
    - To check whether a value has an unresolved token in it, call the `Token.isUnresolved` (Python: is_unresolved) method.
        - e.g. The following example validates that a string value, which could be a token, is no more than 10 characters long.
            - ```ts
                if (!Token.isUnresolved(name) && name.length > 10) {
                    throw new Error(`Maximum length for name is 10 characters`);
                }
                ```
    - If name is a token, validation isn't performed, and an error could still occur in a later stage in the lifecycle, such as during deployment.
- String-encoded tokens
    - String-encoded tokens look like the following e.g. `${TOKEN[Bucket.Name.1234]}`
    - They can be passed around like regular strings, and can be concatenated, as shown in the following example.
- List-encoded tokens
- Number-encoded tokens
- Lazy values
- Converting to JSON
- 暫待 synthesized 後給值 / 

### Parameters

- 說明
    - AWS CloudFormation templates can contain parameters—custom values that are supplied at deployment time and incorporated into the template.
- Defining parameters
    - Use the `CfnParameter` class to define a parameter.
        - e.g.
            - ```ts
                const uploadBucketName = new CfnParameter(this, "uploadBucketName", {
                    type: "String",
                    description: "The name of the Amazon S3 bucket where uploaded files will be stored."});
                ```
- Using parameters
    - e.g. For example, to use a parameter in a Bucket definition:
        - ```ts
            const bucket = new Bucket(this, "myBucket", 
                { bucketName: uploadBucketName.valueAsString});
            ```
- Deploying with parameters
    - 執行 CLI 時可以帶入
- 自定義參數時的規定 / 

### Tagging

- 說明
    - Tags are informational key-value elements that you can add to constructs in your AWS CDK app.
        - You can use tags to identify and categorize resources to simplify management, in cost allocation, and for access control, as well as for any other purposes you devise.
    - e.g. 
        - ```ts
            Tags.of(myConstruct).add('key', 'value');
            Tags.of(myConstruct).remove('key');
            ```
- Tag priorities
    - The AWS CDK applies and removes tags recursively. 
    - If there are conflicts, the tagging operation with the highest priority wins.
        - If the priorities of two operations are the same, the tagging operation closest to the bottom of the construct tree wins.
            - By default, applying a tag has a priority of 100
            - except for tags added directly to an AWS CloudFormation resource, which has a priority of 50
            - removing a tag has a priority of 200
            - e.g. The following applies a tag with a priority of 300 to a construct.
                - ```ts
                    Tags.of(myConstruct).add('key', 'value', {
                        priority: 300
                    });
                    ```
- Optional properties
    - e.g. The following example applies the tag tagname with the value value and priority 100 to resources of type AWS::Xxx::Yyy in the construct, but not to instances launched in an Amazon EC2 Auto Scaling group or to resources of type AWS::Xxx::Zzz. (These are placeholders for two arbitrary but different AWS CloudFormation resource types.)
        - ```ts
            Tags.of(myConstruct).add('tagname', 'value', {
                applyToLaunchedInstances: false,
                includeResourceTypes: ['AWS::Xxx::Yyy'],
                excludeResourceTypes: ['AWS::Xxx::Zzz'],
                priority: 100,
            });
            ```
- Example
    - e.g. The following example adds the tag key StackType with value TheBest to any resource created within the Stack named MarketingSystem. Then it removes it again from all resources except Amazon EC2 VPC subnets. The result is that only the subnets have the tag applied.
    - ```ts
        import { App, Stack, Tags } from '@aws-cdk/core';

        const app = new App();
        const theBestStack = new Stack(app, 'MarketingSystem');

        // Add a tag to all constructs in the stack
        Tags.of(theBestStack).add('StackType', 'TheBest');

        // Remove the tag from all resources except subnet resources
        Tags.of(theBestStack).remove('StackType', {
        excludeResourceTypes: ['AWS::EC2::Subnet']
        });
        ```
    - ```ts
        Tags.of(theBestStack).add('StackType', 'TheBest', 
            { includeResourceTypes: ['AWS::EC2::Subnet']});
        ```

### Assets

- 說明
    - Assets are local files, directories, or Docker images that can be bundled into AWS CDK libraries and apps
        - e.g. for example, a directory that contains the handler code for an AWS Lambda function. Assets can represent any artifact that the app needs to operate.
        - You typically reference assets through APIs that are exposed by specific AWS constructs. For example, when you define a `lambda.Function` construct, the code property lets you pass an asset (directory).
- Assets in detail
- Asset types
    - Amazon S3 Assets
        - These are local files and directories that the AWS CDK uploads to Amazon S3.
        - Lambda function example
            - ```python
                def lambda_handler(event, context):
                    message = 'Hello World!'
                    return {
                        'message': message
                }
                ```
            - The code for the main AWS CDK app should look like the following.
                - ```ts
                    import * as cdk from '@aws-cdk/core';
                    import * as lambda from '@aws-cdk/aws-lambda';
                    import * as path from 'path';

                    export class HelloAssetStack extends cdk.Stack {
                    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
                        super(scope, id, props);

                        new lambda.Function(this, 'myLambdaFunction', {
                            code: lambda.Code.fromAsset(path.join(__dirname, 'handler')),
                            runtime: lambda.Runtime.PYTHON_3_6,
                            handler: 'index.lambda_handler'
                            });
                        }
                    }
                    ```
            - Deploy-time attributes example
                - The following example uses deploy-time attributes to pass the location of an image asset into a Lambda function as environment variables.
                - ```ts
                    import { Asset } from '@aws-cdk/aws-s3-assets';
                    import * as path from 'path';

                    const imageAsset = new Asset(this, "SampleAsset", {
                        path: path.join(__dirname, "images/my-image.png")
                    });

                    new lambda.Function(this, "myLambdaFunction", {
                    code: lambda.Code.asset(path.join(__dirname, "handler")),
                        runtime: lambda.Runtime.PYTHON_3_6,
                        handler: "index.lambda_handler",
                        environment: {
                            'S3_BUCKET_NAME': imageAsset.s3BucketName,
                            'S3_OBJECT_KEY': imageAsset.s3ObjectKey,
                            'S3_URL': imageAsset.s3Url
                        }
                    });
                    ```
            - Permissions
                - The following example grants an IAM group read permissions on a file asset.
                - ```ts
                    import { Asset } from '@aws-cdk/aws-s3-assets';
                    import * as path from 'path';

                    const asset = new Asset(this, 'MyFile', {
                        path: path.join(__dirname, 'my-image.png')
                    });

                    const group = new iam.Group(this, 'MyUserGroup');
                    asset.grantRead(group);
                    ```
    - Docker Image
        - These are Docker images that the AWS CDK uploads to Amazon ECR.
        - The following example defines a docker image that is built locally and pushed to Amazon ECR. Images are built from a local Docker context directory (with a Dockerfile) and uploaded to Amazon ECR by the AWS CDK CLI or your app's CI/CD pipeline, and can be naturally referenced in your AWS CDK app.
        - ```ts
            import { DockerImageAsset } from '@aws-cdk/aws-ecr-assets';

            const asset = new DockerImageAsset(this, 'MyBuildImage', {
                directory: path.join(__dirname, 'my-image')
            });
            ```
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

- The AWS CDK uses feature flags to enable potentially breaking behaviors in a release.
- Flags are stored as Runtime context values in `cdk.json` (or `~/.cdk.json`) as shown here.
    - ```json
        {
            "app": "npx ts-node bin/tscdk.ts",
            "context": {
                "@aws-cdk/core:enableStackNameDuplicates": true
            }
        }
        ```
- The names of all feature flags begin with the NPM name of the package affected by the particular flag.
- In the example above, this is @aws-cdk/core, the AWS CDK framework itself, since the flag affects stack naming rules, a core AWS CDK function. AWS Construct Library modules can also use feature flags.
- Feature flags are disabled by default
- As feature flags are stored in cdk.json, they are not removed by the `cdk context --reset` or `cdk context --clear` commands.
- 預設關閉 / 儲存在 cdk.json 中 / 

### Aspects

- Aspects are a way to apply an operation to all constructs in a given scope. 
    - The aspect could modify the constructs, such as by adding tags, or it could verify something about the state of the constructs, such as ensuring that all buckets are encrypted.
    - e.g. To apply an aspect to a construct and all constructs in the same scope, call `Aspects.of(SCOPE).add()` with a new aspect
        - ```ts
            Aspects.of(myConstruct).add(new SomeAspect(...));
            ```
- Aspects in detail
    - e.g. Aspects employ the visitor pattern. An aspect is a class that implements the following interface.
        - visitor pattern: In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates.
        - ```ts
            interface IAspect {
                visit(node: IConstruct): void;}
            ```
- Example
    - e.g. The following example validates that all buckets created in the stack have versioning enabled.

### Escape hatches

- There are three possible reasons for this lack of functionality
- Using AWS CloudFormation constructs directly
    - 
- Modifying the AWS CloudFormation resource behind AWS constructs
- Raw overrides
    - If there are properties that are missing from the CFN Resource, you can bypass all typing using raw overrides. This also makes it possible to delete synthesized properties.
- Custom resources
- 可能你需要的功能還沒好 / 用較低階的 constructs 來實作 / addOverride

### Bootstrapping
- 說明
    - Deploying AWS CDK apps into an AWS environment (a combination of an AWS account and region) may require that you provision resources the AWS CDK needs to perform the deployment. These resources include an Amazon S3 bucket for storing files and IAM roles that grant permissions needed to perform deployments. The process of provisioning these initial resources is called bootstrapping.
    - 三種情形需要
        1. An AWS CDK stack being deployed uses Assets.
        2. An AWS CloudFormation template generated by the app exceeds 50 kilobytes.
        3. One or more of the stacks uses the `DefaultSynthesizer`.
    - The required resources are defined in a AWS CloudFormation stack, called the bootstrap stack, which is usually named CDKToolkit. Like any AWS CloudFormation stack, it appears in the AWS CloudFormation console once it has been deployed.
    - 改板中
        - original template (dubbed "legacy") is still the default. The newer template ("modern") is required by CDK Pipelines today,
    - Environments are independent, so if you want to deploy to multiple environments (different AWS accounts or different regions in the same account), each environment must be bootstrapped separately.
- How to bootstrap
- Bootstrapping templates
- Customizing bootstrapping
- Stack synthesizers
- Customizing synthesis
- The bootstrapping template contract