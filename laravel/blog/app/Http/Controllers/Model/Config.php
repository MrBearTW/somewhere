<?php

namespace App\Http\Controllers\Model;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    protected $table = 'config';
    protected $primaryKey = 'conf_id';
    public $timestamps = false;
    protected $guarded = [];
}
