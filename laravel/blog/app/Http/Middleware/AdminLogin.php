<?php

namespace App\Http\Middleware;

use Closure;

class AdminLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        echo "this adminlogin.php  ";
        //session(['admin'=>null]);
        if(!session('admin')){
           //return redirect('/');    //若無登入則跳回login頁面
        }
        //exit; //加入後可以在此頁就跳出，多一層保護
        return $next($request);
    }
}
