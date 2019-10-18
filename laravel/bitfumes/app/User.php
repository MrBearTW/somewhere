<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    public function passport()
    {
        return $this->hasone(Passport::class);
    }

    public function mobile()
    {
        return $this->hasMany(Mobile::class);
        // return $this->hasone(Mobile::class);
    }

    public function roles()
    {
        return $this->belongsToMany(role::class);
        // return $this->hasone(Mobile::class);
    }
}
