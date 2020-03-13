# 2020FB自學
- developercircleresources
    - https://www.developercircleresources.com/opportunities/803d5a3e-25c9-4c03-ab31-c0c210d8106d
    - [Clement大大 Facebook Developer Circle: Taipei起始發文](https://www.facebook.com/groups/DevCTaipei/permalink/1504115996406484/)
- Front-End Web Developer
    - openclassrooms https://openclassrooms.com/en/teams/facebook-developers-circle-q1-2020
    - Jan 13 to March 13, 2020
    - Deeper Skills application form open February 28 - March 13, 2020 for April 1, 2020 start.
- Data Science
    - datacamp https://www.datacamp.com/home
    - NEW COURSES 前三個做完
    - You have full access until March 02, 2020
    - Deeper Skills application form open February 28 - March 13, 2020 for April 1, 2020 start.
- Deep Learning Training Course
    - udacity https://classroom.udacity.com/nanodegrees/nd288/syllabus/core-curriculum
    - Deeper Skills application form open March 2 - 13, 2020 for April 1, 2020 start.

- ELIGIBILITY
    - Web Development
        - Successfully complete Foundational Skills track (track 1)
        - Successfully complete the prerequisite courses on OpenClassrooms:
            - Build your First Web Pages with HTML & CSS
            - Learn Programming with Javascript
            - Build Web Apps with ReactJS
        - Complete Application Form.
    - Data
        - Successfully complete Foundational Skills track (track 1)
        - Successfully complete any of the prerequisite courses (quizzes and/or tests) on DataCamp:
            - Introduction to R
            - Introduction to Python for Data Science
            - Introduction to SQL for Data Science
            - Complete Application Form. 
    - Machine Learning
        - Successfully complete Foundational Skills track (track 1)
        - Successfully complete Introduction to Machine Learning course
        - Complete Application Form. 
        - CRITERIA FOR SELECTION
# Front-End Web Developer / openclassrooms
- CSS stands for Cascading Style Sheets.
- https://codepen.io/
- 加粗字 <strong> </strong>
- 斜體字 <em></em>
- <a href="https://www.facebook.com/8deroad/"></a>
    - a stands for anchor
    - href (pronounced "h" — like the letter — "ref) is short for Hypertext Reference. 
- List
    - Unorder list
        ```html
        <ul>
            <li>AAA</li>
            <li>BBB</li>
        </ul>
        ```
    - Order list 會自動跑出數字
        ```html
        <ol>
            <li>AAA</li>
            <li>BBB</li>
        </ol>
        ```
- 加入圖片
    - <img src="圖片放置網址" alt="寫在這裡可以讓聽障人士聽出這是什麼圖片" title="滑鼠移過去會顯示的字">
        - 整組圖案
            ```html
            <figure>
                <img src="">
                <figcaption> 圖片標題 </figcaption>
            </figure>
            ```
- 排版
    - Block-level
        - Headings (h1)
        - Paragraphs (p)
        - Lists and list items (ul, ol, li)
        - Structuring elements (header, nav, section, article, aside, figure, footer)
    - Inline
        - Images (img)
        - Emphasized text (em)
        - Strong text (strong)
        - Links (a)
    - div & span
        - Block-level: div 
        - Inline elements: span
    - 分割
        - <br> 斷行
        - <hr> 分隔線
    - head 中該有的內容
        - <title>顯示在瀏覽器 Tab 的文字</title>
        - 小 LOGO
        - <meta name = "" content = "" > 給搜尋引擎用的
        - <>社交媒體用的 Facebook 或是 twitter 會節錄的標題文字圖片等
        - CSS 和 Javascript 連結
        - 文字格式
- CSS 
    - selector{property: value;}
    - CSS 和 html 不同檔案時，要在 <head> 中引用
        - <link href=“位置css/style.css” type=“text/css” rel=“stylesheet” /> 
    - CSS 和 html 在同檔案時
        - 在 <head> 中加入 <style type=“text/css”></style>
    - CSS 也可以直接寫在元素中
        - <h1 style="color: pink;">XXX</h1>
    - 顏色
    - 字形
        - 可以設定第兩個字形當備用
            - 
        - 理論上免費的字形網站
            - Font Squirrel: https://www.fontsquirrel.com/
            - Google Fonts: https://fonts.google.com/
            - Urban Fonts: https://www.urbanfonts.com/
    - 字大小控制
        - pixels
        - em
        - rem
        - percentages
        - 可以找換算表
    - 行距和字距
        spacing
        - line-height
        - letter-spacing
        - word-spacing
    - 字的調整
        - text-decoration: line-through;
        - text-transform: uppercase;
        - 狀態
            - 元素:visited
            - 元素:hover
            - 元素:active

# Javascript
- [JSBin](jsbin.com)
- Variable
    - type
- 歐美算錢記得 乘以 100
- 文字只能用 + 串聯，用 - 會出現 NaN
- class 是一個藍圖，object 是被製造出來的
- 我們不一樣
    - In JavaScript, primitive types like numbers, booleans, and strings are passed by value.
    - This is not the case with objects and arrays, which are passed by reference. 
- Array 操作
    - length 算元素數量
    - push 加到最後面
    - pop 移除最後一個
    - unshift 加在最前面
- switch 可以在最後面加一個 default