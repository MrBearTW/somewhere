<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class passports extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
