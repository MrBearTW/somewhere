- [Laravel tutorials](https://www.youtube.com/playlist?list=PLe30vg_FG4OQz1yZq0z19ZuWD_C3MZbA4)  
- 啟動內建的網頁伺服器php artisan serve
- Part 3
    - web.php傳資料到blade
    - blade 用@foreach 顯示資料
    - @unless 控制沒資料時要顯示的資訊
        - [更多blade資訊](https://laravel.com/docs/6.x/blade)
- Part 4
    - blade做 layout
        - 要延伸自 views\layout\app.blade.php
        - `extends(layout.aaa)`
    - yield
        - 模板中 `@yield('AAA')`
        - 插入資料 `@section('AAA','AAA要寫入的資料')`
    - section
        - 模板中
            ```
            @section('BBB')
                @show
            ```
        - 插入資料 
            ```
            @section('BBB')
                BBB區塊要加入的資料
            @endsection
            ```
- Prat 5
    - 在建立controller時，加入`--resource`
    - "namespace" is define where you are
    - 啟用內建伺服器`php artisan serve`


- Part 6 One to One
    - 建立 migration 就是教laravel how to design your table
    - `->unsigned();`永遠是正數
    - 建立migration`php artisan make:migration creat_user_table --create=users`
    - 執行migration`php artisan migrate`
        - 反執行`php artisan migrate:reset`
    - 用CMD插入資料
        - 進入增加資料的模式`php artisan tinker`
            - 輸入要增加的資料`DB::table('users')->insert(['name'=>'bear','created_at'=>new Datetime,'updated_at'=>new Datetime]);`
            - 查詢 `App\user::all();`
        - Crtl + C 退出
    - 製作madel`php artisan make:model XXXXXX`

- Part 7 One to Many
    - 一對多關係
        - 一個人有多支手機

- Part 8 Many to Many
    - 多對多關係
        - 人物與角色
            - 管理員
            - 編輯
            - 作者
    - model
        - 建立 user model
        - 建立 role model
        - 不用建立 user - role 的model
- Part 9 Has one through
    - 客戶 - 廠商
    - 廠商歷史資料
- Part 10 Ploymorphic Relation 多態 一對多
    - post video
    - comment
- Part 11 Ploymorphic Many to Many 多態 多對多
    - 