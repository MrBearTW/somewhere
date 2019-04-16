<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links', function (Blueprint $table) {
            // $table->engine = 'MyISAM';  // syntax error, unexpected ''MyISAM'' (T_CONSTANT_ENCAPSED_STRING)
            $table->engine = 'InnoDB';
            $table->increments('link_id');
            $table->string('link_name')->default('')->comment('//名稱');
            $table->string('link_title')->default('')->comment('//標題');
            $table->string('link_url')->default('')->comment('//超連結');
            $table->integer('link_order')->default('0')->comment('//排序');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links');
    }
}
