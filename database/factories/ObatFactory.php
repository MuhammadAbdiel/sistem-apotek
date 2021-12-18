<?php

namespace Database\Factories;

use App\Models\Obat;
use Illuminate\Database\Eloquent\Factories\Factory;

class ObatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Obat::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'kode_obat' => $this->faker->regexify('[A-Z]{2}[0-9]{5}'),
            'nama_obat' => $this->faker->word(),
            'category_id' => mt_rand(1, 5),
            'deskripsi' => '<p>' . implode('</p><p>', $this->faker->paragraphs(3)) . '</p>',
            'harga' => $this->faker->randomNumber(5, true),
            'stok' => $this->faker->randomNumber(3, false)
        ];
    }
}
