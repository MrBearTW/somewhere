- 必看
    - (V)(主標) What's Lambda
        - (V)（左邊欄位）When should I use Lambda
    - (主標) Getting started
        - (V)(次標) Concepts

# AWS Lambda

- What is AWS Lambda?
    - AWS Lambda 是一種無伺服器運算服務，可執行程式碼以回應事件，並且自動為您管理基礎運算資源。
    - You can invoke your Lambda functions using the Lambda API, or Lambda can run your functions in response to events from other AWS services. 
        - Build data-processing triggers for AWS services such as Amazon Simple Storage Service (Amazon S3) and Amazon DynamoDB.
        - Process streaming data stored in Amazon Kinesis.
        - Create your own backend that operates at AWS scale, performance, and security.
    - Lambda is a highly available service.
- When should I use Lambda?
    - Lambda is an ideal compute service for many application scenarios, as long as you can run your application code using the Lambda standard runtime environment and within the resources that Lambda provides. 
        - Lambda standard runtime environment --> Lambda execution environment lifecycle
            1. Init
                - Extension init、
                - Runtime init 
                - Function init
            2. Invoke
            3. Shutdown
- Concepts
    - Function
        - A function is a resource that you can invoke to run your code in Lambda.
    - Trigger
        - A trigger is a resource or configuration that invokes a Lambda function.
    - Event
        - An event is a JSON-formatted document that contains data for a Lambda function to process.
        - The runtime converts the event to an object and passes it to your function code. 
        - When you invoke a function, you determine the structure and contents of the event.
        - 誰傳進來？
    - Execution environment
        - An execution environment provides a secure and isolated runtime environment for your Lambda function.
    - Deployment package
        1. A .zip file archive that contains your function code and its dependencies. 
            - Lambda provides the operating system and runtime for your function.
        2. A container image that is compatible with the Open Container Initiative (OCI) specification.
            - You add your function code and dependencies to the image. You must also include the operating system and a Lambda runtime.
    - Runtime
        - The runtime provides a language-specific environment that runs in an execution environment.
            - The runtime relays invocation events, context information, and responses between Lambda and the function. 
            - You can use runtimes that 
                1. Lambda provides, 
                2. or build your own.
                    - If you package your code as a .zip file archive, you must configure your function to use a runtime that matches your programming language. 
                    - For a container image, you include the runtime when you build the image.
    - Layer
        - A Lambda layer is a .zip file archive that can contain additional code or other content.
            - A layer can contain libraries, a custom runtime, data, or configuration files.
        - You can include up to five layers per function.
        - 減少重複上傳
    - Extension
        - Lambda extensions enable you to augment your functions.
            - For example, you can use extensions to integrate your functions with your preferred monitoring, observability, security, and governance tools.
        - 內外兩種
            - An internal extension runs in the runtime process and shares the same lifecycle as the runtime. An external extension runs as a separate process in the execution environment. 
            - The external extension is initialized before the function is invoked, runs in parallel with the function's runtime, and continues to run after the function invocation is complete.
    - Concurrency
        - Concurrency is the number of requests that your function is serving at any given time.
            - When your function is invoked, Lambda provisions an instance of it to process the event. 
            - When the function code finishes running, it can handle another request. If the function is invoked again while a request is still being processed, another instance is provisioned, increasing the function's concurrency.
        - Concurrency is subject to quotas at the AWS Region level.
            - You can configure individual functions to limit their concurrency, or to enable them to reach a specific level of concurrency
    - Qualifier
        - When you invoke or view a function, you can include a qualifier to specify a version or alias.
            - You can use versions and aliases together to provide a stable interface for clients to invoke your function.
    - Destination
        - A destination is an AWS resource where Lambda can send events from an asynchronous invocation. 
            -  You can configure a destination for events that fail processing. Some services also support a destination for events that are successfully processed.

- 概觀
    - 優勢
        - No servers to manage
        - Continuous scaling
        - Cost optimized with millisecond metering
        - Consistent performance at any scale
    - How it works
        - Upload your code to AWS Lambda or write code in Lambda's code editor
        - Set up your code to trigger from other AWS services, HTTP endpoints, or in-app activy
        - Lambda runs your code only when triggered, using only the compute resources needed
        - just pay for the compute you use
    - Use cases
        - Data processing
            - Real-time file processing
            - Real-time stream processing
            - Machine learning
        - Backends
            - Web applications
            - IoT backends
            - Mobile backends

- 進 console 找到 concept 連起來
- Lambda 30
    - When
        - Lambda is an ideal compute service for many application scenarios, as long as you can run your application code using the Lambda standard runtime environment and within the resources that Lambda provides.
        - When using Lambda, you are responsible only for your code. Lambda manages the compute fleet that offers a balance of memory, CPU, network, and other resources to run your code.
    - 把 concept 串連起來
        - 手畫 / mermaid


destroy / retain / snapshot

EDGE , REGIONAL , PRIVATE