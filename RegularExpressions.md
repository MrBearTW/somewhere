# Regular expressions

- https://regexone.com/

## All Lessons


- What: 篩選字串，回覆 T or F，讓程式碼去做後續的處理
- When:  
- Why: 
- How: 

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
    - 
- Lesson 9: All this whitespace
- Lesson 10: Starting and ending
- Lesson 11: Match groups
- Lesson 12: Nested groups
- Lesson 13: More group work
- Lesson 14: It's all conditional
- Lesson 15: Other special characters
- Lesson X: Infinity and beyond!

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

## Practice Problems

- Problem 1: Matching a decimal numbers
- Problem 2: Matching phone numbers
- Problem 3: Matching emails
- Problem 4: Matching HTML
- Problem 5: Matching specific filenames
- Problem 6: Trimming whitespace from start and end of line
- Problem 7: Extracting information from a log file
- Problem 8: Parsing and extracting data from a URL
- Problem X: Infinity and beyond!