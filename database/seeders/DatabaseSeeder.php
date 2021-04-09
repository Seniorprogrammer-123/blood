<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => date("Y-m-d"),
            'password' => '123456',
            'dni_number' => 'G.Chile.Pcr-1235',
            'remember_token' => Str::random(10),
            'especialy' => "Admin",
            'permission' => 'Admin',
            'created_at' => date("Y-m-d"),
            'updated_at' => date("Y-m-d"),
        ]);
    }
}
