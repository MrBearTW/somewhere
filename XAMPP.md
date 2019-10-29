# 升級XAMPP中的PHP版本 PHP 5.6.37 -> 7.2.24
- 環境
    - WIN10
    -
下載要使用的PHP版本

解壓縮到一個資料夾中

將C:\xampp中的php資料夾替換
```
#LoadFile "C:/xampp/php/php5ts.dll"
#LoadModule php5_module "C:/xampp/php/php5apache2_4.dll"
LoadFile “C:/xampp/php/php7ts.dll”
LoadModule php7_module “C:/xampp/php/php7apache2_4.dll”
```