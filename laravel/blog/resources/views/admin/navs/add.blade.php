@extends('layouts.admin')
@section('content')
    



    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
    <i class="fa fa-home"></i> <a href="{{url('admin/info')}}">首頁</a> &raquo;導航列管理
    </div>
    <!--面包屑导航 结束-->

	<!--结果集标题与导航组件 开始-->
	<div class="result_wrap">
        <div class="result_title">
            <h3>添加導航列</h3>
            @if(count($errors)>0)
            <div class="mark">
                @if(is_object($errors))     <!-- is_object 物件 -->
                    @foreach($errors->all() as $error)    <!-- 陣列？？？ -->
                        <p>{{$error}}</p>
                    @endforeach
                @else
                    <p>{{$errors}}</p>
                @endif
            </div>
            @endif
            <div class="result_content">
                    <div class="short_wrap">
                    <a href="{{url('admin/navs/create')}}"><i class="fa fa-plus"></i>新增導航</a>
                    <a href="{{url('admin/navs')}}"><i class="fa fa-recycle"></i>全部導航</a>
            </div>
        </div>
    </div>
    <!--结果集标题与导航组件 结束-->
    
    <div class="result_wrap">
    <form action="{{url('admin/navs')}}" method="post">
            {{csrf_field()}}
            <table class="add_tab">
                <tbody>
                            <tr>
                                <th><i class="require">*</i>導航列名稱：</th>
                                <td>
                                    <input type="text" name="nav_name">
                                    <input type="text" class="sm" name="nav_alias">
                                    <span><i class="fa fa-exclamation-circle yellow"></i>導航列名稱必須填寫</span>
                                </td>
                            </tr>
                            <tr>
                                <th><i class="require">*</i>URL：</th>
                                <td>
                                    <input type="text" class="lg" name="nav_url" value="http://">
                                </td>
                            </tr>
                            <tr>
                                <th>排序：</th>
                                <td>
                                    <input type="text" class="sm" name="nav_order" value="0">
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <input type="submit" value="提交">
                                    <input type="button" class="back" onclick="history.go(-1)" value="返回">
                                </td>
                            </tr>
                </tbody>
            </table>
        </form>
    </div>
    @endsection
