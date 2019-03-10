<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 5</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div>
                <?php echo $data['name'] ?> - <?php echo $data['age'] ?>
                    <p>直接echo<?php echo $title ?></p>
                    <p>blade寫法用家兩個大跨號  {{$title}}</p> 
                    <p>blade失效寫法寫法加@ @{{$title}}</p>
                    <p>{{$varmaybeisnull or '這裡可以寫傳值是null時的預設值'}}</p><!-- 有傳值但可能為null -->
                    <p>{{isset($varmaybeisnull)?$varmaybeisnull:'這裡varmaybeisnull是null時的預設值'}}</p><!-- 可能連值都沒有傳的寫法 -->
                    <p>{{$str}}</p><!-- 安全性考量，上面的寫法不會真的執行js code -->
                    <p>{!!$str2!!}</p><!-- 這一種雙!!的寫法才會真的執行js code -->

                    <!-- vedio14 -->
                    <p>
                    @if($data2['score']<80)
                        blade可以寫判斷句if                    
                    @else
                        blade可以寫判斷句else
                    @endif

                    @unless($data2['score']>90)
                        unless>90不然就會顯示這一行
                    @endunless
                    </p>
                    <p>
                        @for($i=0;$i<$data2['num'];$i++)
                            {{$i}}
                            @endfor
                    </p>
                    <p>
                        @foreach ($data2['article'] as $v)
                            {{$v}}
                        @endforeach
                    </p>
                    <p>
                        @foreach ($data2['article'] as $k=>$v)
                        @if($k>2)
                            {{$k}}=>{{$v}}
                            @endif
                        @endforeach
                    </p>
                    <p>
                        @forelse ($data2['article2'] as $v) 
                            {{$v}}
                        @empty
                        沒有數據會走這邊
                        @endforelse
                    </p>
                </div>


                <div class="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>
