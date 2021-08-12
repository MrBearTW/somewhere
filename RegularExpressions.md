# Regular expressions

- [工具](https://regexr.com/)
- [教學](https://regexone.com/)

## Lesson Notes

- abc…	Letters
- 123…	Digits
- \d	Any Digit
- \D	Any Non-digit character
- .	Any Character
- \.	Period
- [abc]	Only a, b, or c
- [^abc]	Not a, b, nor c
- [a-z]	Characters a to z
- [0-9]	Numbers 0 to 9
- \w	Any Alphanumeric character
- \W	Any Non-alphanumeric character
- {m}	m Repetitions
- {m,n}	m to n Repetitions
- *	Zero or more repetitions
- +	One or more repetitions
- ?	Optional character
- \s	Any Whitespace
- \S	Any Non-whitespace character
- ^…$	Starts and ends
- (…)	Capture Group
- (a(bc))	Capture Sub-group
- (.*)	Capture all
- (abc|def)	Matches abc or def

## All Lessons

- What: 篩選字串，回覆 T or F，讓程式碼去做後續的處理 & Capture
- When:  
- Why: 
- How: 撰寫正規表達式時，使用兩個斜線 `/ /` 或是 `new RegExp()` 來建立一個 RegExp 物件。 [參考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


- Lesson 1: An Introduction, and the ABCs
    - The first thing to recognize when using regular expressions is that `everything is essentially a character`, and we are writing patterns to match a specific sequence of characters (also known as a string).
    - 都是字元組成
- Lesson 1½: The 123s
    - the character `\d` can be used in place of any digit from 0 to 9.
- Lesson 2: The Dot
    - Similarly, there is the concept of a `wildcard`, which is represented by the . (dot) metacharacter, and can `match any single character` (letter, digit, whitespace, everything).
- Lesson 3: Matching specific characters
    - [x]中跨號 只包含 x
- Lesson 4: Excluding specific characters
    - [^x]中跨號 不包含 x
- Lesson 5: Character ranges
    - [A-C] 透過 - 寫出一個範圍
    - 大小寫不一樣
- Lesson 6: Catching some zzz's
    - `x{a,b}` 重複 a~b 次
- Lesson 7: Mr. Kleene, Mr. Kleene
    - `\d*` to match any number of digits, 
    - but a tighter regular expression would be `\d+` which ensures that the input string has at least one digit.
- Lesson 8: Characters optional
    - 問號表示前一個字元是選擇性的
- Lesson 9: All this whitespace
    - `\s` 空格 來表示
        - the space (␣), the tab (\t), the new line (\n) and the carriage return (\r) (useful in Windows environments)
- Lesson 10: Starting and ending
    - Starting: `^` (hat) 
    - ending: `$` (dollar sign)
- Lesson 11: Match groups
    - This is done by defining groups of characters and capturing them using the special parentheses ( and ) metacharacters.
    - 只要 () 中
        - capture 之後尼？可以取出來用嗎？？？？？？？？？ --> 搭配 [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
            - back referencing
- Lesson 12: Nested groups
    - 巢狀 () 內可在放 ()
- Lesson 13: More group work
- Lesson 14: It's all conditional
    - `|` or
- Lesson 15: Other special characters
    - Additionally, there is a special metacharacter `\b` which matches the boundary between a word and a non-word character. It's most useful in capturing entire words (for example by using the pattern `\w+\b`).
    - One concept that we will not explore in great detail in these lessons is `back referencing`, mostly because it varies depending on the implementation. However, many systems allow you to reference your captured groups by using \0 (usually the full matched text), `\1` (group 1), `\2` (group 2), etc. This is useful for example when you are in a text editor and doing a search and replace using regular expressions to swap two numbers, you can search for "(\d+)-(\d+)" and replace it with "\2-\1" to put the second captured number first, and the first captured number second for example.
- Lesson X: Infinity and beyond!

- 常用
    - (\d+) 數字 e.g. 1999
    - (\w+) Alphanumeric character e.g. covid19

## Practice Problems

- Problem 1: Matching a decimal numbers
    - 各種金融數字格式
        - 參考答案`^-?\d+(,\d+)*(\.\d+(e\d+)?)?$`
- Problem 2: Matching phone numbers
    - 各種形式電話號碼寫法
        - `1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}`
- Problem 3: Matching emails
    - 擷取 email 開頭
        - `^([\w\.]*)` or `^([\w\.\+]*)`
    - ((\w+)?|(\w+\.\w+)?) 失敗？？？ / 
- Problem 4: Matching HTML
    - You can also capture tag contents `>([\w\s]*)<`, or even attribute values `='([\w://.]*)`' if desired (not the goal of this problem though).
- Problem 5: Matching specific filenames
    - 要一些特定檔名收尾
        - e.g. `(\w+)\.(jpg|png|gif)$`
- Problem 6: Trimming whitespace from start and end of line
    - 處理包含空格時的字串
    - For example, the expression ^\s*(.*)\s*$ will catch only the content.
- Problem 7: Extracting information from a log file
    - 知道 log 格式，將其篩選出來
        - e.g. `(\w+)\(([\w\.]+):(\d+)\)`
            - makeView(ListView.java:1727)
            - fillDown(ListView.java:652)
- Problem 8: Parsing and extracting data from a URL
    - https://s3cur3-server.com:9999/
    - 分別
        - `https://` the protocols in our list are all alphanumeric, so they can be matched using `(\w+)://`
        - `://s3cur3-server.com` The hosts can contain non-alphanumeric characters like the dash or the period, so we will have to specifically include those characters using `://([\w\-\.]+)`
        - `:9999` The port is an optional part of the URI and is preceeded with a colon and can be matched using `(:(\d+))`
    - 一起 (\w+)://([\w\-\.]+)(:(\d+))?
- Problem X: Infinity and beyond!



