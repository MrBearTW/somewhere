<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class post extends Model
{
    //part10
    public function comments()
    {
        return $this->morphMany('App\comment','commentable');
    }

    //part11
    public function tags()
    {
        return $this->morphToMany('App\tag','taggable');
    }
}
