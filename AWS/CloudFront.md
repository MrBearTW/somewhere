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


- Lambda 圖
- CloudFront 缺少的部分 
- Request and Response Behavior
    - Request and Response Behavior for Amazon S3 Origins
    - (V) Request and Response Behavior for Custom Origins 
        - 看大中標，看完和上面 Ｓ3 比一下
- 60 重點 origin  behavior
- 15 CloudFront 要刪除 Cache 用字是？
- 90 VWRS bin/V-V-V-V-init.ts 從頭到尾