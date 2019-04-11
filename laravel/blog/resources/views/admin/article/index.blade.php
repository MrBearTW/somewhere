@extends('layouts.admin')
@section('content')  
    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
    <i class="fa fa-home"></i> <a href="{{url('aadmin/info')}}">首页</a> &raquo;文章管理 
    </div>
    <!--面包屑导航 结束-->


	<!--结果页快捷搜索框 开始-->
	<div class="search_wrap">  
    </div>
    <!--结果页快捷搜索框 结束-->

    <!--搜索结果页面 列表 开始-->
    <form action="#" method="post">
        <div class="result_wrap">
            <!--快捷导航 开始-->
            <div class="result_content">
                <div class="result_title">
                    <h3>文章列表</h3>
                </div>  
                <div class="short_wrap">
                    <a href="{{url('admin/article/create')}}"><i class="fa fa-plus"></i>新增文章</a>
                    <a href="#"><i class="fa fa-recycle"></i>批量删除</a>
                    <a href="#"><i class="fa fa-refresh"></i>更新排序</a>
                </div>
            </div>
            <!--快捷导航 结束-->
        </div>

        <div class="result_wrap">
            <div class="result_content">
                <table class="list_tab">
                    <tr>
                        <th class="tc">ID</th>
                        <th>標題</th>
                        <th>點擊數</th>
                        <th>編輯</th>
                        <th>發布時間</th>
                        <th>操作</th>
                    </tr>
                    @foreach ($data as $v)
                    <tr>
                            <td class="tc">{{$v->art_id}}</td>
                            <td>
                            <a href="#">{{$v->art_title}}</a>
                            </td>
                            <td>{{$v->art_view}}</td>
                            <td>{{$v->art_editor}}</td>
                            <td>{{date('Y-m-d',$v->art_time)}}</td>
                            <td>
                                <a href="#">修改</a>
                                <a href="#">删除</a>
                            </td>
                        </tr>  
                    @endforeach

                </table>

                <div class="page_list">
                {{$data->links()}}
                </div>
            </div>
        </div>
    </form>
    <!--搜索结果页面 列表 结束-->
<style>
.result_content ul li span{
    front-size:15px;
    padding:6px 12px;
}
</style>
@endsection