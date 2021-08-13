- 看這一些
    - CloudFront
        - What is Amazon CloudFront?
        - CloudFront use cases
        - How CloudFront delivers content
        - Working with distributions
            - Overview of distributions

    - 值得看一下新東西
        - Customizing with edge functions
            - Lambda@Edge

# CloudFront

- 介紹頁面
    - Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.
    - Amazon CloudFront 是快速內容交付網路 (CDN) 服務，可在支援開發人員的環境中，以低延遲和高速傳輸的方式將資料、影片、應用程式和 API 安全地交付給全球的客戶。
        - Wiki: CDN: Content Delivery Network or Content Distribution Network
    - Benefits
        - Global Scaled Network for Fast Content Delivery
        - Security at the Edge
        - Highly Programmable and Secure Edge Computing
        - Deep Integration with AWS
        - Cost-Effective
    - Use cases
        - Website Delivery and Security
        - Dynamic Content & API Acceleration
        - Live & On-demand Video Streaming
        - Software Distribution, Game Delivery and IoT OTA

- What is Amazon CloudFront?
    - Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users.
        - CloudFront delivers your content through a worldwide network of data centers called edge locations. 
        - When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.
            - If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately.
            - If the content is not in that edge location, CloudFront retrieves it from an origin that you've defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.
    - How you set up CloudFront to deliver content
        1. You specify origin servers, like an Amazon S3 bucket or your own HTTP server, from which CloudFront gets your files which will then be distributed from CloudFront edge locations all over the world.
        2. You upload your files to your origin servers. Your files, also known as objects, typically include web pages, images, and media files, but can be anything that can be served over HTTP.
        3. 
            - You create a CloudFront distribution, which tells CloudFront which origin servers to get your files from when users request the files through your web site or application.
            - At the same time, you specify details such as whether you want CloudFront to log all requests and whether you want the distribution to be enabled as soon as it's created.
        4. CloudFront assigns a domain name to your new distribution(must) that you can see in the CloudFront console, or that is returned in the response to a programmatic request, for example, an API request. (optional) If you like, you can add an alternate domain name to use instead.
        5. CloudFront sends your distribution's configuration (but not your content) to all of its (全部，不可選) edge locations or points of presence (POPs)— collections of servers in geographically-dispersed data centers where CloudFront caches copies of your files. (可以設定) (config 會到全部，file 不一定)
        - As you develop your website or application, you use the domain name that CloudFront provides for your URLs. 
            - For example, if CloudFront returns `d111111abcdef8.cloudfront.net` as the domain name for your distribution, the URL for logo.jpg in your Amazon S3 bucket (or in the root directory on an HTTP server) is `http://d111111abcdef8.cloudfront.net/logo.jpg`.
        - Or you can set up CloudFront to use your own domain name with your distribution. In that case, the URL might be `http://www.example.com/logo.jpg`.
        - Optionally, you can configure your origin server to add headers to the files, to indicate how long you want the files to stay in the cache in CloudFront edge locations. 
            - By default, each file stays in an edge location for 24 hours before it expires. 
            - The minimum expiration time is 0 seconds; there isn't a maximum expiration time. For more information, see Managing how long content stays in the cache (expiration).
        
- CloudFront use cases
    - Accelerate static website content delivery
        - CloudFront can speed up the delivery of your static content (for example, images, style sheets, JavaScript, and so on) to viewers across the globe.
            - A simple approach for storing and delivering static content is to use an Amazon S3 bucket. Using S3 together with CloudFront has a number of advantages, including the option to use Origin Access Identity (OAI) to easily restrict access to your S3 content.
    - Serve video on demand or live streaming video
        - CloudFront offers several options for streaming your media to global viewers—both pre-recorded files and live events.
    - Encrypt specific fields throughout system processing
        - When you configure HTTPS with CloudFront, you already have secure end-to-end connections to origin servers
        - When you add field-level encryption, you can protect specific data throughout system processing in addition to HTTPS security, so that only certain applications at your origin can see the data.
    - Customize at the edge
        - Running serverless code at the edge opens up a number of possibilities for customizing the content and experience for viewers, at reduced latency.
            - For example, you can return a custom error message when your origin server is down for maintenance, so viewers don't get a generic HTTP error message. 
    - Serve private content by using Lambda@Edge customizations
        - Using Lambda@Edge can help you configure your CloudFront distribution to serve private content from your own custom origin, as an option to using signed URLs or signed cookies.
        - You can use several techniques to restrict access to your origin exclusively to CloudFront, including using whitelisting CloudFront IPs in your firewall and using a custom header to carry a shared secret.

- How CloudFront delivers content
    - ![How CloudFront delivers content to your users](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/images/how-cloudfront-delivers-content.png)
        1. A user accesses your website or application and requests one or more files, such as an image file and an HTML file.
        2. DNS routes the request to the CloudFront POP (edge location) that can best serve the request—typically the nearest CloudFront POP in terms of latency—and routes the request to that edge location.
        3. In the POP, CloudFront checks its cache for the requested files. If the files are in the cache, CloudFront returns them to the user. If the files are not in the cache, it does the following:
            1. CloudFront compares the request with the specifications in your distribution and forwards the request for the files to your origin server for the corresponding file type—for example, to your Amazon S3 bucket for image files and to your HTTP server for HTML files.
            2. The origin servers send the files back to the edge location.
            3. As soon as the first byte arrives from the origin, CloudFront begins to forward the files to the user. CloudFront also adds the files to the cache in the edge location for the next time someone requests those files.
    - How CloudFront works with regional edge caches
        - CloudFront points of presence (POPs) (edge locations) make sure that popular content can be served quickly to your viewers.
        - How regional caches work
            - Regional edge caches are CloudFront locations that are deployed globally, close to your viewers. 
            - They're located between your origin server and the POPs—global edge locations that serve content directly to viewers.
        - 還有一些

- Working with distributions
    - Overview of distributions
        - When you want to use CloudFront to distribute your content, you create a distribution and choose the configuration settings you want.
            - **Your content origin**—that is, the Amazon S3 bucket, MediaPackage channel, or HTTP server from which CloudFront gets the files to distribute. You can specify any combination of up to 25 Amazon S3 buckets, channels, and/or HTTP servers as your origins.
            - **Access**—whether you want the files to be available to everyone or restrict access to some users.
            - **Security**—whether you want CloudFront to require users to use HTTPS to access your content.
            - **Cache key**—which values, if any, you want to include in the cache key. The cache key uniquely identifies each file in the cache for a given distribution.
            - **Origin request settings**—whether you want CloudFront to include HTTP headers, cookies, or query strings in requests that it sends to your origin.
            - **Geo-restrictions**—whether you want CloudFront to prevent users in selected countries from accessing your content.
            - **Access logs**—whether you want CloudFront to create access logs that show viewer activity.
        - For the current maximum number of distributions that you can create for each AWS account, see General quotas on distributions. 
            - Distributions per AWS account ==> 200
            - Maximum cacheable file size for HTTP GET, POST, and PUT requests ==> 30 GB
        - There is no maximum number of files that you can serve per distribution.
        - You can use distributions to serve the following content over HTTP or HTTPS:
            - Static and dynamic download content, for example, .html, .css, .js, and image files, using HTTP or HTTPS.
            - Video on demand in different formats, such as Apple HTTP Live Streaming (HLS) and Microsoft Smooth Streaming. 
            - A live event, such as a meeting, conference, or concert, in real time. 




- Lambda 圖
- CloudFront 缺少的部分 
    - Request and Response Behavior
        - Request and Response Behavior for Amazon S3 Origins
        - (V) Request and Response Behavior for Custom Origins 
            - 看大中標，看完和上面 Ｓ3 比一下
- 60 重點 origin  behavior
- 15 CloudFront 要刪除 Cache 用字是？
- 90 VWRS bin/V-V-V-V-init.ts 從頭到尾


- CloudFront 要刪除 Cache 用字是？
    - [Invalidating Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)
        1. Invalidate the file from edge caches. The next time a viewer requests the file, CloudFront returns to the origin to fetch the latest version of the file.
            - To invalidate files, you can specify either the path for individual files or a path that ends with the * wildcard, which might apply to one file or to many, as shown in the following examples:
                > /images/image1.jpg
                /images/image*
                /images/*
            - f you use the AWS Command Line Interface (AWS CLI) for invalidating files and you specify a path that includes the * wildcard, you must use quotes (") around the path. `aws cloudfront create-invalidation --distribution-id distribution_ID --paths "/*"`
        2. Use file versioning to serve a different version of the file that has a different name. 
    - You can submit a certain number of invalidation paths each month for free. If you submit more than the allotted number of invalidation paths in a month, you pay a fee for each invalidation path that you submit.(1000 paths)

- Runtime
    - In computer science, runtime, run time, or execution time is the final phase of a computer program's life cycle, in which the code is being executed on the computer's central processing unit (CPU) as machine code. 
    - In other words, "runtime" is the running phase of a program.

- Request and Response Behavior for Custom Origins
    - How CloudFront Processes and Forwards Requests to Your Custom Origin Server
        - Authentication
            - For `DELETE, GET, HEAD, PATCH, POST, and PUT` requests,
                - if you configure CloudFront to forward the Authorization header to your origin, you can configure your origin server to request client authentication.
            - For `OPTIONS` requests,
                - you can configure your origin server to request client authentication only if you use the following CloudFront settings:
                    - Configure CloudFront to forward the Authorization header to your origin.
                    - Configure CloudFront to not cache the response to OPTIONS requests.
        - Caching Duration and Minimum TTL
            - Configure your origin to add a `Cache-Control` or an Expires header field to each object.
            - Specify a value for Minimum TTL in CloudFront cache behaviors.
            - Use the default value of 24 hours.
        - Client IP Addresses
            - `X-Forwarded-For` 會影響 it forwards the following header to the origin 的 IP
        - Client-Side SSL Authentication
            - CloudFront does not support client authentication with client-side SSL certificates. If an origin requests a client-side certificate, CloudFront drops the request.
        - Compression
            - You can use CloudFront to automatically compress files of certain types and serve the compressed files when viewers support them (viewers indicate their support for compressed files with the Accept-Encoding HTTP header).
        - Conditional Requests
            - When CloudFront receives a request for an object that has expired from an edge cache, it forwards the request to the origin either to get the latest version of the object or to get confirmation from the origin that the CloudFront edge cache already has the latest version.
                - An `If-Match` or `If-None-Match` header that contains the ETag value for the expired version of the object.
                - An `If-Modified-Since` header that contains the `LastModified` value for the expired version of the object.
            The origin uses this information to determine whether the object has been updated and, therefore, whether to return the entire object to CloudFront or to return only an HTTP 304 status code (not modified).
        - Cookies
            - You can configure CloudFront to forward cookies to your origin.
        - Cross-Origin Resource Sharing (CORS)
            - If you want CloudFront to respect cross-origin resource sharing settings, configure CloudFront to forward the `Origin` header to your origin.
        - Encryption
            - You can require viewers to use HTTPS to send requests to CloudFront and require CloudFront to forward requests to your custom origin by using the protocol that is used by the viewer.
                - SSL and TLS 有限制版本
        - GET Requests That Include a Body
            - If a viewer `GET` request includes a body, CloudFront returns an HTTP status code 403 (Forbidden) to the viewer.
        - HTTP Methods
            - If you configure CloudFront to process all of the HTTP methods that it supports, CloudFront accepts the following requests from viewers and forwards them to your custom origin
                - DELETE / GET / HEAD / OPTIONS / PATCH / POST / PUT
            - CloudFront always caches responses to `GET` and `HEAD` requests. You can also configure CloudFront to cache responses to `OPTIONS` requests.
        - HTTP Request Headers and CloudFront Behavior (Custom and S3 Origins)
            - The following table lists HTTP request headers that you can forward to both custom and Amazon S3 origins (with the exceptions that are noted).
            - CloudFront behavior if you don't configure CloudFront to forward the header to your origin, which causes CloudFront to cache your objects based on header values.
            - Whether you can configure CloudFront to cache objects based on header values for that header.
            - 一個不同 header values 超大表格
        - HTTP Version
            - CloudFront forwards requests to your custom origin using HTTP/1.1.
        - Maximum Length of a Request and Maximum Length of a URL
            - The maximum length of a request, including the path, the query string (if any), and headers, is 20,480 bytes.
            - CloudFront constructs a URL from the request. The maximum length of this URL is 8192 bytes.
            - If a request or a URL exceeds these maximums, CloudFront returns HTTP status code 413, Request Entity Too Large, to the viewer, and then terminates the TCP connection to the viewer.
        - OCSP Stapling
            - OCSP stapling speeds up certificate validation by allowing CloudFront to validate the certificate and to cache the response from the CA, so the client doesn't need to validate the certificate directly with the CA.
        - Persistent Connections
            - When CloudFront gets a response from your origin, it tries to maintain the connection for several seconds in case another request arrives during that period. 
            - Maintaining a persistent connection saves the time required to re-establish the TCP connection and perform another TLS handshake for subsequent requests.
        - Protocols
            - CloudFront forwards HTTP or HTTPS requests to the origin server based on the following:
                - The protocol of the request that the viewer sends to CloudFront, either HTTP or HTTPS.
                - The value of the Origin Protocol Policy field in the CloudFront console or, if you're using the CloudFront API, the `OriginProtocolPolicy` element in the `DistributionConfig` complex type. 
                    - In the CloudFront console, the options are `HTTP Only`, `HTTPS Only`, and `Match Viewer`.
            - If CloudFront forwards a request to the origin using the HTTPS protocol, and if the origin server returns an invalid certificate or a self-signed certificate, CloudFront drops the TCP connection.
        - Query Strings
            - You can configure whether CloudFront forwards query string parameters to your origin. 
        - Origin Connection Timeout and Attempts
            - `Origin connection timeout` is the number of seconds that CloudFront waits when trying to establish a connection to the origin.
            - `Origin connection attempts` is the number of times that CloudFront attempts to connect to the origin.
            - By default, CloudFront waits as long as 30 seconds (3 attempts of 10 seconds each)
        - Origin Response Timeout
            - The origin response timeout, also known as the origin read timeout or origin request timeout, applies to both of the following:
                - `GET` and `HEAD` requests 
                - `DELETE`, `OPTIONS`, `PATCH`, `PUT`, and `POST` requests 
        - Simultaneous Requests for the Same Object (Traffic Spikes)
            - If there's a traffic spike—if additional requests for the same object arrive at the edge location before your origin responds to the first request—CloudFront pauses briefly before forwarding additional requests for the object to your origin. 
            - 是緩衝，不是 queue
        - User-Agent Header
            - If you want CloudFront to cache different versions of your objects based on the device that a user is using to view your content, we recommend that you configure CloudFront to forward one or more of the following headers to your custom origin
            - Based on the value of the `User-Agent` header, CloudFront sets the value of these headers to true or false before forwarding the request to your origin.
    - How CloudFront Processes Responses from Your Custom Origin Server
        - 100-Continue Responses
        - Caching
        - Canceled Requests
        - Content Negotiation
        - Cookies
        - Dropped TCP Connections
        - HTTP Response Headers that CloudFront Removes or Replaces
        - Maximum File Size
        - Origin Unavailable
        - Redirects
        - Transfer Encoding

- CloudFront 會有至少四個角色
    - End user
    - CloudFront
    - Origin
    - CloudFront 開發者

- 將熊的筆記跟 Reference 分開來
	- CloudFront
		- Bear
		- Reference
			- AWS Document
- 想辦法簡化自己的筆記
	- 圖解
	- 去掉形容詞
- 每一個句子都要有完整敘述 (S+V+O)