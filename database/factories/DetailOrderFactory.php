<?php

namespace Database\Factories;

use App\Models\DetailOrder;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetailOrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DetailOrder::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'obat_id' => 1,
            // 'order_id' => 1,
            // 'jumlah_order' => 0,
            // 'harga' => 0
        ];
    }
}
