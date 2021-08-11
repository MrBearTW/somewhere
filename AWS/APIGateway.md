# Amazon API Gateway

- 對象不同，會有不同
- What: 
- When:  
- Why: 
- How: 

- 簡介
    - API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, CORS support, authorization and access control, throttling, monitoring, and API version management. / API Gateway 負責處理有關接受和處理多達數十萬個並行 API 呼叫的所有工作，包括流量管理、CORS 支援、授權和存取控制、調節、監控和 API 版本管理。(To 工程師)
        - Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. / Amazon API Gateway 是一種全受管的服務，可讓開發人員輕鬆地建立、發佈、維護、監控和保護任何規模的 API。(To 老闆)
        - API 可作為應用程式的「前門」，以便從後端服務存取資料、商業邏輯或功能。
        - 使用 API Gateway 時，您可以建立 RESTful API 和 WebSocket API，以啟用即時雙向通訊應用程式。API Gateway 支援容器化、無伺服器工作負載和 Web 應用程式。

- What is Amazon API Gateway?
    - Amazon API Gateway is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale.
    - ![API Gateway architecture](https://docs.aws.amazon.com/apigateway/latest/developerguide/images/Product-Page-Diagram_Amazon-API-Gateway-How-Works.png)
    - Use API Gateway to create REST APIs
        - An API Gateway REST API is made up of `resources` and `methods`.
            - A resource is a logical entity that an app can access through a resource path. 
            - A method corresponds to a REST API request that is submitted by the user of your API and the response returned to the user.
            > e.g.  For example, a `POST /incomes` method could add an income earned by the caller, and a `GET /expenses` method could query the reported expenses incurred by the caller.
        - The app doesn't need to know where the requested data is stored and fetched from on the backend. In API Gateway REST APIs, the frontend is encapsulated by `method requests` and `method responses`. The API interfaces with the backend by means of `integration requests` and `integration responses`.
        - API Gateway provides REST API management functionality such as the following:
            - Support for generating SDKs and creating API documentation using API Gateway extensions to OpenAPI
            - Throttling of HTTP requests

- API Gateway concepts
    - API Gateway concepts
        - Creating, deploying, and managing a `RESTful` application programming interface (API) to expose backend HTTP endpoints, AWS Lambda functions, or other AWS services.
        - Creating, deploying, and managing a `WebSocket` API to expose AWS Lambda functions or other AWS services.
        - Invoking exposed API methods through the `frontend HTTP` and WebSocket endpoints.
    - API Gateway REST API
        - A collection of HTTP resources and methods that are integrated with backend HTTP endpoints, Lambda functions, or other AWS services.
        - Each API resource can expose one or more API methods that have unique HTTP verbs supported by API Gateway.
    - API Gateway HTTP API
        - A collection of routes and methods that are integrated with backend HTTP endpoints or Lambda functions.
        - Each route can expose one or more API methods that have unique HTTP verbs supported by API Gateway.
    - API Gateway WebSocket API
        - A collection of WebSocket routes and route keys that are integrated with backend HTTP endpoints, Lambda functions, or other AWS services.
        - API methods are invoked through frontend WebSocket connections that you can associate with a registered custom domain name.
    - API deployment
        - A point-in-time snapshot of your API Gateway API. （兩句相等。不是功能。）
    - API developer (類似 github contributer)
        - Your AWS account that owns an API Gateway deployment (for example, a service provider that also supports programmatic access).
    - API endpoint
        - A hostname for an API in API Gateway that is deployed to a specific Region. 
        - The hostname is of the form `{api-id}.execute-api.{region}.amazonaws.com`. 
        - The following types of API endpoints are supported:
            - Edge-optimized API endpoint 
                - API Gateway API 的預設主機名稱，該 API 會部署至指定區域，同時使用 CloudFront 分佈來促進跨 AWS 區域的用戶端存取
            - Private API endpoint
                - 可由界面 VPC 端點接觸的 API 端點，可允許用戶端在 VPC 內安全存取私有 API 資源。
            - Regional API endpoint
                - API 的主機名稱，其部署至特定區域且用於服務相同 AWS 區域的用戶端 (如 EC2 執行個體)。
    - API key
        - An alphanumeric string that API Gateway uses to identify an app developer who uses your REST or WebSocket API. 
        - API Gateway can generate API keys `on your behalf`, or you can import them `from a CSV file`. 
        - You can use API keys together with Lambda authorizers or usage plans to control access to your APIs. (要搭配)
    - API owner
        - 一種 API developer
    - API stage
        - A logical reference to a lifecycle state of your API (for example, 'dev', 'prod', 'beta', 'v2'). 
    - App developer
        - An app creator who may or may not have an AWS account and interacts with the API that you, the API developer, have deployed.
        - App developers are your customers. 
        - An app developer is typically identified by an API key.
    - Callback URL / 回呼 URL
        - When a new client is connected to through a WebSocket connection, you can call an integration in API Gateway to store the client's callback URL.
        - You can then use that callback URL to send messages to the client from the backend system.
    - Developer portal
        - An application that allows your customers to register, discover, and subscribe to your API products (API Gateway usage plans), manage their API keys, and view their usage metrics for your APIs.
    - Edge-optimized API endpoint
        - The default hostname of an API Gateway API that is deployed to the specified Region while using a CloudFront distribution to facilitate client access typically from across AWS Regions. 
        - API requests are routed to the nearest CloudFront Point of Presence (POP), which typically improves connection time for geographically diverse clients.
    - Integration request
        - The internal interface of a WebSocket API route or REST API method in API Gateway, in which you map the body of a route request or the parameters and body of a method request to the formats required by the backend.
    - Integration response
        - The internal interface of a WebSocket API route or REST API method in API Gateway, in which you map the status codes, headers, and payload that are received from the backend to the response format that is returned to a client app.
    - Mapping template
        - A script in `Velocity Template Language (VTL)` that transforms a request body from the frontend data format to the backend data format, or that transforms a response body from the backend data format to the frontend data format.
            - (Apache) Velocity is a Java-based template engine.
        - Mapping templates can be specified in the integration request or in the integration response.
        - They can reference data made available at runtime as context and stage variables.
        - The mapping can be as simple as an `identity transform` that passes the headers or body through the integration as-is from the client to the backend for a request. 
            - (Wiki) Identity transform: The identity transform is a data transformation that copies the source data into the destination data without change.
    - Method request
        - The public interface of an API method in API Gateway that defines the parameters and body that an app developer must send in requests to access the backend through the API.
    - Method response
        - The public interface of a REST API that defines the status codes, headers, and body models that an app developer should expect in responses from the API.
    - Mock integration / 模擬整合
        - In a mock integration, API responses are generated from API Gateway directly, without the need for an integration backend.
            - As an API developer, you decide how API Gateway responds to a mock integration request.
            - For this, you configure the method's integration request and integration response to associate a response with a given status code.
    - Model
        - A data schema specifying the data structure of a request or response payload.
        - A model is required for generating a strongly typed SDK of an API.
        - A model is convenient for generating a sample mapping template to initiate creation of a production mapping template. 
        - Although useful, a model is not required for creating a mapping template.
    - Private API
    - Private API endpoint
        - An API endpoint that is exposed through interface VPC endpoints and allows a client to securely access private API resources inside a VPC.
            - VPC: Amazon Virtual Private Cloud (Amazon VPC) is a service that lets you launch AWS resources in a logically isolated virtual network that you define.
        - Private APIs are isolated from the public internet, and they can only be accessed using VPC endpoints for API Gateway that have been granted access.
    - Private integration
        - An API Gateway integration type for a client to access resources inside a customer's VPC through a private REST API endpoint without exposing the resources to the public internet.
    - (V)Proxy integration
        - A simplified API Gateway integration configuration. 
            - You can set up a proxy integration as an HTTP proxy integration or a Lambda proxy integration.
        - 分類
            - For HTTP proxy integration, API Gateway passes the entire request and response between the frontend and an HTTP backend.
            - For Lambda proxy integration, API Gateway sends the entire request as input to a backend Lambda function. 
                - API Gateway then transforms the Lambda function output to a frontend HTTP response.
            - In REST APIs, proxy integration is most commonly used with a proxy resource, which is represented by a greedy path variable (for example, {proxy+}) combined with a catch-all ANY method.
    - Quick create
        - You can use quick create to simplify creating an HTTP API.
            - Quick create creates an API with a Lambda or HTTP integration, a default catch-all route, and a default stage that is configured to automatically deploy changes.
    - Regional API endpoint
        - The host name of an API that is deployed to the specified Region and intended to serve clients, such as EC2 instances, in the same AWS Region.
        - API requests are targeted directly to the Region-specific API Gateway API without going through any CloudFront distribution.
    - Route
        - A WebSocket route in API Gateway is used to direct incoming messages to a specific integration, such as an AWS Lambda function, based on the content of the message.
            - When you define your WebSocket API, you specify a route key and an integration backend. 
            - The route key is an attribute in the message body. 
            - When the route key is matched in an incoming message, the integration backend is invoked.
        - A default route can also be set for non-matching route keys or to specify a proxy model that passes the message through as-is to backend components that perform the routing and process the request.
    - Route request
        - The public interface of a WebSocket API method in API Gateway that defines the body that an app developer must send in the requests to access the backend through the API.
    - Route response
        - The public interface of a WebSocket API that defines the status codes, headers, and body models that an app developer should expect from API Gateway.
    - (V)Usage plan
        - A usage plan provides selected API clients with access to one or more deployed REST or WebSocket APIs.
        - You can use a usage plan to configure throttling and quota limits, which are enforced on individual client API keys.
    - WebSocket connection
        - API Gateway maintains a persistent connection between clients and API Gateway itself. 
        - There is no persistent connection between API Gateway and backend integrations such as Lambda functions. 
        - Backend services are invoked as needed, based on the content of messages received from clients.


- Creating and using `usage plans` with `API keys`
    - After you create, test, and deploy your APIs, you can use API Gateway usage plans to make them available as product offerings for your customers. 
    - You can configure usage plans and API keys to allow customers to access selected APIs at agreed-upon request rates and quotas that meet their business requirements and budget constraints.
    - What are usage plans and API keys?
        - A `usage plan` specifies who can access one or more deployed API stages and methods—and also how much and how fast they can access them.
            - The plan uses API keys to identify API clients and meters access to the associated API stages for each key.
            -  It also lets you configure throttling limits and quota limits that are enforced on individual client API keys.
        - `API keys` are alphanumeric string values that you distribute to application developer customers to grant access to your API.
            - You can use API keys together with usage plans or Lambda authorizers to control access to your APIs.
                - (可以跟 搭配使用) A `Lambda authorizer` (formerly known as a custom authorizer) is an API Gateway feature that uses a Lambda function to control access to your API.
            - API Gateway can generate API keys on your behalf, or you can import them from a CSV file.
            - You can generate an API key in API Gateway, or import it into API Gateway from an external source.
            - An API key has a `name` and a `value`. (The terms "API key" and "API key value" are often used interchangeably.) 
                - The value is an alphanumeric string between 30 and 128 characters, for example, apikey1234abcdefghij0123456789.
        - Important:
            - API key values must be unique.
                - If you try to create two API keys with different names and the same value, API Gateway considers them to be the same API key.
            - An API key can be associated with more than one usage plan. A usage plan can be associated with more than one stage. (多對多)
            - However, a given API key can only be associated with one usage plan for each stage of your API.
        - A `throttling limit` is a request rate limit that is applied to each API key that you add to the usage plan. 
            - You can also set a default method-level throttling limit for an API or set throttling limits for individual API methods.
        - A `quota limit` is the maximum number of requests with a given API key that can be submitted within a specified time interval.    
            - You can configure individual API methods to require API key authorization based on usage plan configuration. 
            - You can also use the get-usage CLI command or the usage:get REST API method to determine the usage for an API customer.
        - Note: Throttling and quota limits apply to requests for individual API keys that are aggregated across all API stages within a usage plan.

- Set up method request
    - Set up REST API methods in API Gateway
        - In API Gateway, an API method embodies a `method request` and a `method response`.
        - You set up an API method to define what a client should or must do to submit a request to access the service at the backend and to define the responses that the client receives in return.
            - For input, you can choose method request parameters, or an applicable payload, for the client to provide the required or optional data at run time.
            - For output, you determine the method response status code, headers, and applicable body as targets to map the backend response data into, before they are returned to the client.
        - To help the client developer understand the behaviors and the input and output formats of your API, you can document your API and provide proper error messages for invalid requests.
    - An API method request is an HTTP request.
        - To set up the method request, you configure an HTTP method (or verb), the path to an API resource, headers, applicable query string parameters.
        - You also configure a payload when the HTTP method is POST, PUT, or PATCH.
        - For example, to retrieve a pet using the PetStore sample API, you define the API method request of `GET /pets/{petId}`, where {petId} is a path parameter that can take a number at run time.
            - ```
                GET /pets/1
                Host: apigateway.us-east-1.amazonaws.com
                ...
                ```
                - If the client specifies an incorrect path, for example, /pet/1 or /pets/one instead of /pets/1, an `exception` is thrown.
    - An API method response is an HTTP response with a given status code.
        - For a non-proxy integration, you must set up method responses to specify the required or optional targets of mappings.
        - These transform integration response headers or body to associated method response headers or body.
        - The mapping can be as simple as an identity transform that passes the headers or body through the integration as-is.
        - For example, the following 200 method response shows an example of passthrough of a successful integration response as-is.
            - ```json
                200 OK 
                Content-Type: application/json
                ...

                {
                    "id": "1",
                    "type": "dog",
                    "price": "$249.99"
                }
                ```
        - In principle, you can define a method response corresponding to a specific response from the backend. 
            - Typically, this involves any 2XX, 4XX, and 5XX responses.
            - However, this may not be practical, because often you may not know in advance all the responses that a backend may return.
                - In practice, you can designate one method response as the default to handle the unknown or unmapped responses from the backend. 
            - It is good practice to designate the 500 response as the default.
                - In any case, you must set up at least one method response for non-proxy integrations.
                - Otherwise, API Gateway returns a 500 error response to the client even when the request succeeds at the backend.
        - To support a strongly typed SDK, such as a Java SDK, for your API, you should define the data model for input for the method request, and define the data model for output of the method response.
        - 三個更細節
            - Set up a method request in API Gateway
            - Set up method responses in API Gateway
            - Set up a method using the API Gateway console

- Integrations
    - Setting up REST API integrations
        - After setting up an API method, you must integrate it with an endpoint in the backend. 
        - A backend endpoint is also referred to as an integration endpoint and can be a Lambda function, an HTTP webpage, or an AWS service action.
        - As with the API method, the API integration has an integration request and an integration response. 
            - An `integration request` encapsulates an HTTP request received by the backend. It might or might not differ from the method request submitted by the client. 
                - Setting up an integration request involves the following: configuring how to pass client-submitted method requests to the backend; configuring how to transform the request data, if necessary, to the integration request data; and specifying which Lambda function to call, specifying which HTTP server to forward the incoming request to, or specifying the AWS service action to invoke.
                - To set up an integration request, you create an Integration resource and use it to configure the integration endpoint URL. You then set the IAM permissions to access the backend, and specify mappings to transform the incoming request data before passing it to the backend.
            - An `integration response` is an HTTP response encapsulating the output returned by the backend.
                - Setting up an integration response (applicable to non-proxy integrations only) involves the following: configuring how to pass the backend-returned result to a method response of a given status code, configuring how to transform specified integration response parameters to preconfigured method response parameters, and configuring how to map the integration response body to the method response body according to the specified body-mapping templates.
                - To set up an integration response for non-proxy integration, you create an IntegrationResponse resource and use it to set its target method response. You then configure how to map backend output to the method response.
        - Programmatically, an integration request is encapsulated by the Integration resource and an integration response by the IntegrationResponse resource of API Gateway.
    - Set up Lambda integrations in API Gateway
        - You can integrate an API method with a Lambda function using `Lambda proxy integration` or `Lambda non-proxy (custom) integration`.
            - In `Lambda proxy integration`, the required setup is simple. 
                - Set the integration's HTTP method to POST, the integration endpoint URI to the ARN of the Lambda function invocation action of a specific Lambda function, and grant API Gateway permission to call the Lambda function on your behalf.
            - In `Lambda non-proxy integration`, in addition to the proxy integration setup steps, you also specify how the incoming request data is mapped to the integration request and how the resulting integration response data is mapped to the method response.
        - Topics 更細節 (看程式碼再繼續讀下去)
            - Set up Lambda proxy integrations in API Gateway
            - Set up Lambda custom integrations in API Gateway
            - Set up asynchronous invocation of the backend Lambda function
            - Handle Lambda errors in API Gateway

