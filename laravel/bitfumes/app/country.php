<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    public function posts()
    {
        return $this->hasManyThrough(Post::class,User::class);
    }
}
