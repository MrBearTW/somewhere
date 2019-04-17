<?php

namespace App\Http\Controllers\Model;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    protected $table = 'links';
    protected $primaryKey = 'link_id';
    public $timestamps = false;
    protected $guarded = [];
}
