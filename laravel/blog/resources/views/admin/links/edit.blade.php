@extends('layouts.admin')
@section('content')
    



    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
    <i class="fa fa-home"></i> <a href="{{url('admin/info')}}">首頁</a> &raquo;超連結管理
    </div>
    <!--面包屑导航 结束-->

	<!--结果集标题与导航组件 开始-->
	<div class="result_wrap">
        <div class="result_title">
            <h3>編輯超連結</h3>
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
                <a href="{{url('admin/links/create')}}"><i class="fa fa-plus"></i>新增超連結</a>
                <a href="{{url('admin/links')}}"><i class="fa fa-recycle"></i>全部超連結</a>
                </div>
            </div>
        </div>
    </div>
    <!--结果集标题与导航组件 结束-->
    
    <div class="result_wrap">
    <form action="{{url('admin/links/'.$field->link_id)}}" method="post">
            {{method_field('PUT')}}   {{--  <input type="hidden" name="_method" value="put"> --}}
            {{csrf_field()}}
            <table class="add_tab">
                <tbody>
                            <tr>
                                <th><i class="require">*</i>超連結名稱：</th>
                                <td>
                                <input type="text" name="link_name" value="{{$field->link_name}}">
                                    <span><i class="fa fa-exclamation-circle yellow"></i>超連結名稱必須填寫</span>
                                </td>
                            </tr>
                            <tr>
                                <th><i class="require">*</i>URL：</th>
                                <td>
                                    <input type="text" class="lg" name="link_url" value="{{$field->link_url}}">
                                </td>
                            </tr>
                            <tr>
                                <th>超連結標題：</th>
                                <td>
                                    <input type="text" class="lg" name="link_title" value="{{$field->link_title}}">
                                </td>
                            </tr>
                            <tr>
                                <th>排序：</th>
                                <td>
                                    <input type="text" class="sm" name="link_order" value="{{$field->link_order}}">
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
