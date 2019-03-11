
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</Title>
    </head>
    <body>
        <div class="head">頭Vide015</div>
        
        <!-- 1 -->
        @yield('contant')
        
        <!-- 2 -->
        @section('content2')
            <p>我是主模板裡面的內容</p>
        @show

        <div class="footer">足Vide015</div>    
    </body>
</html>