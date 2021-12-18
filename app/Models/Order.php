<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function detail_order()
    {
        return $this->hasMany(DetailOrder::class);
    }

    public function getRouteKeyName()
    {
        return 'kode_unik';
    }
}
