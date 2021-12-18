<?php

namespace App\Http\Livewire\Obat;

use App\Models\Obat;
use Livewire\Component;

class Search extends Component
{
    public $search;

    protected $queryString = ['search'];


    public function render()
    {
        return view('livewire.obat.search', [
            'dataObat' => Obat::where('nama_obat', 'LIKE', '%' . $this->search . '%')
                ->where('harga', 'LIKE', '%' . $this->search . '%')
                ->get()
        ]);
    }
}
