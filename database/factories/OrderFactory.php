<?php

namespace Database\Factories;

use DateTime;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $dateTime = new DateTime();

        return [
            // 'user_id' => 1,
            // 'waktu_pesan' => $dateTime->format('Y-m-d H:i:s'),
            // 'status' => '0',
            // 'total_harga' => 0,
        ];
    }
}
