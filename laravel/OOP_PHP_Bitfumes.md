# OOP PHP by Bitfumes
- [OOP PHP by Bitfumes](https://www.youtube.com/playlist?list=PLe30vg_FG4OSEHH6bRF8FrA7wmoAMUZLv)

## OOP PHP | What is OOP ? Why we need OOP ? #1
- Datatype 
    - Primitive
        - String
        - Integer
        - Boolean
    - Structure
        - Object
        - Array

- Object
    - function
    - attributes

- Class
    - Object (instance)
        - Variables
        - Functions
    - Contains
        - Properties
        - Functions

- Code
    - Reusable
    - Clear Structure
    - Easy to maintain
    - Simplify

- 英文翻譯
    - Classes -> Objects -> Inheritance -> Abstraction -> Magic Methods -> Polymorphism
        - 類 -> 對象 -> 繼承 -> 抽象 -> 魔術方法 -> 多態
    - methodology 方法論
    - orient 方向

## OOP PHP | Why we create Class ? #2
## OOP PHP | Class Properties & Object #3
## OOP PHP | Functions or Methods #4
- $this->AAA
- $this(現在這一個 class)

## OOP PHP | Method Chaining #5
- Method Chaining
- $bill->dinner(2)->dessert(1)->coldDrink(1)->bill;
    - class bill
    - 經過 fun dinner dessert coldDrink 後
    - 拿參數 bill

## OOP PHP | Construct and Destruct #6
```php
public function __construct(){

}
public function __destruct(){
    
}
```
- 每次這個 class 被呼叫時，function __construct() 就會先自動執行
- 每次這個 class 被呼叫時，function __destruct() 會最後自動執行

## OOP PHP | Inheritance #8
```php
class ParentClass{

}

class ChildClass extends ParentClass{

}
```

## OOP PHP | Access Modifiers #7
- public > protected > private
- class 外也可以用 > extends 的 class 也可以用 > 只有 class 內可以用
```php
class User{
    public $name = 'AAA';
    private $password = '1111';
    protected $email = '123@abc.com'
    public function getPass(){
        return $this->password;
    }
}
class Adime extends User{
    function __construct(){
        echo $this->email; // extends 的 class 也可以用
    }
}
＄user = new User;
echo $user->getPass();  // 多 getPass 這個 function，可以拿到 private 的資料
```
## OOP PHP | Implements Interface #9
- Interface force you to have some function your class
    - 確保所有人都會寫出需要的 function
- 錯誤訊息 Class AAA contain 1 abstract method

## OOP PHP | Abstract Classes ans Functions #10
- abstract class 可以被 extends 當 Interface 來使用
- abstract class 不能被實作
- 寫在 （abstract？） class 內的 abstract function 一定要被實作

## OOP PHP | What is Type Hinting #11
```php
$price = 5566;
public function price(int $price){

}
```
- 在輸入（$price）的前方可以加上一個限制 int ，一定要是 int
    - int 可以換成 array 或其他
    - 也可以要求是一個 object

## OOP PHP | Static Methods and Properties #12
- `::` Scope Resolution Operator 
```php
User::getName();
```
- 在 function 前加上 Static 就可透過
- 有一些狀況 `this->` 不能用要改成 `self::`
```php
class User{
    static public $name = 'AAA'
    static public function getName(){
        // return $this->$name = 'BBB'      // 要改成 self
        return self::$name = 'BBB'
    }
}
User::getName();    // use as autility perpose or as counters
echo User::$name;
```

## OOP PHP | Constant and Their Uses #13
- Constant 前不用加 `$`

## OOP PHP | Overriding Methods #14
- 子 class 的 function 會優先於 父 class 的 function
- 子 class 可以被 Overriding

## OOP PHP | Early binding and Late Binding #15
- Early binding: binding on the compileing time
- Late Binding: runtime binding

## OOP PHP | Late Static Binding #16

## OOP PHP | Final Method and Final class #17

## OOP PHP | Autoload Class #18

## OOP PHP | Namespaces in PHP #19

## OOP PHP | What is Traits and Why we need it #20

## OOP PHP | Multiple Traits #21

## OOP PHP | Traits: Abstract Functions and Properties #22
