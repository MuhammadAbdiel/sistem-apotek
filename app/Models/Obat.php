<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obat extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function detail_order()
    {
        return $this->hasMany(DetailOrder::class);
    }

    public function getRouteKeyName()
    {
        return 'kode_obat';
    }
}
