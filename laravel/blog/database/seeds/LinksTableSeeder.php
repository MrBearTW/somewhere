<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LinksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'link_name' => '敘日朝食',
                'link_title' => '打造一個以日式米食為主的早午餐餐廳',
                'link_url' => 'https://www.facebook.com/risingbrunch/',
                'link_order' => '1',
            ],
            [
                'link_name' => '一隅有花',
                'link_title' => '一週買一束鮮花，開始在這城市中的老派生活吧',
                'link_url' => 'https://yiyu.florist/',
                'link_order' => '2',
            ],
            [
                'link_name' => '地方飾物 IFJO',
                'link_title' => '取材地方；溫感飾物。',
                'link_url' => 'https://www.facebook.com/IFJO.TW/',
                'link_order' => '3',
            ],
            [
                'link_name' => '淘氣小農',
                'link_title' => '我們是種茶人，是生產者  致力於推廣好茶與好農與你分享',
                'link_url' => 'https://www.facebook.com/touchfarmer/',
                'link_order' => '4',
            ],
        ];
        DB::table('links')->insert($data);
    }
}