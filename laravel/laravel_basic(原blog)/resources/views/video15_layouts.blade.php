@extends('layouts.home')

@section('content')
    <div class="middle">我是用layout模板繼承的內容 方法1</div>
@endsection

@section('content2')
    <div class="middle">我是用layout模板繼承的內容 方法2</div>
    @parent
@endsection