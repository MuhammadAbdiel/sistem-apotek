<?php

namespace Database\Seeders;

use App\Models\Obat;
use App\Models\User;
use App\Models\Order;
use App\Models\Category;
use App\Models\DetailOrder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Moch. Rofiqi',
            'username' => 'mochrofiqi',
            'email' => 'rofiqi@gmail.com',
            'password' => bcrypt('password'),
            'level' => 'admin',
        ]);

        User::create([
            'name' => 'Mochammad Rafly Herdianto',
            'username' => 'raflyherdianto',
            'email' => 'rafly@gmail.com',
            'password' => bcrypt('password'),
            'level' => 'admin',
        ]);

        User::create([
            'name' => 'Muhammad Abdiel Firjatullah',
            'username' => 'muhammadabdiel',
            'email' => 'abdielfirdie@gmail.com',
            'password' => bcrypt('13122001'),
            'level' => 'admin',
        ]);

        User::factory(10)->create();

        // Category::factory(10)->create();
        Category::create([
            'kode_kategori' => 'AB00001',
            'nama_kategori' => 'Obat Batuk'
        ]);
        Category::create([
            'kode_kategori' => 'AB00002',
            'nama_kategori' => 'Obat Demam'
        ]);
        Category::create([
            'kode_kategori' => 'AB00003',
            'nama_kategori' => 'Obat Flu'
        ]);
        Category::create([
            'kode_kategori' => 'AB00004',
            'nama_kategori' => 'Obat Sakit Kepala'
        ]);
        Category::create([
            'kode_kategori' => 'AB00005',
            'nama_kategori' => 'Obat Mata'
        ]);

        Obat::factory(10)->create();

        // Order::factory(1)->create();

        // DetailOrder::factory(1)->create();
    }
}
