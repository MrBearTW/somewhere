<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class video extends Model
{
    public function comments()
    {
        return $this->morphMany('App\comment','commentable');
    }

    // part11
    public function tags()
    {
        return $this->morphToMany('App\tag','taggable');
    }
}
