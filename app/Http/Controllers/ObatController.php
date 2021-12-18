<?php

namespace App\Http\Controllers;

use App\Models\Obat;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ObatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('dashboard.obat.index', [
            'title' => 'Data Obat',
            'obats' => Obat::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.obat.create', [
            'title' => 'Tambah Data',
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode_obat' => 'required|unique:obats',
            'nama_obat' => 'required|max:255',
            'gambar' => 'image|file|max:5120',
            'category_id' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required',
            'stok' => 'required',
        ]);

        if ($request->file('gambar')) {
            $validatedData['gambar'] = $request->file('gambar')->store('gambar-obat');
        }

        Obat::create($validatedData);
        return redirect('/dashboard/obat')->with('success', 'Data obat berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Obat  $obat
     * @return \Illuminate\Http\Response
     */
    public function show(Obat $obat)
    {
        return view('dashboard.obat.show', [
            'title' => 'Detail Obat',
            'obat' => $obat
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Obat  $obat
     * @return \Illuminate\Http\Response
     */
    public function edit(Obat $obat)
    {
        return view('dashboard.obat.edit', [
            'title' => 'Edit Data',
            'obat' => $obat,
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Obat  $obat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Obat $obat)
    {
        $rules = [
            'nama_obat' => 'required|max:255',
            'gambar' => 'image|file|max:5120',
            'category_id' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required',
            'stok' => 'required',
        ];

        if ($request->kode_obat != $obat->kode_obat) {
            $rules['kode_obat'] = 'required|unique:obats';
        }

        $validatedData = $request->validate($rules);

        if ($request->file('gambar')) {
            if ($request->gambarLama) {
                Storage::delete($request->gambarLama);
            }
            $validatedData['gambar'] = $request->file('gambar')->store('gambar-obat');
        }

        Obat::where('id', $obat->id)->update($validatedData);
        return redirect('/dashboard/obat')->with('success', 'Data Obat berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Obat  $obat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Obat $obat)
    {
        if ($obat->gambar) {
            Storage::delete($obat->gambar);
        }

        Obat::destroy($obat->id);
        return redirect('/dashboard/obat')->with('success', 'Data obat telah dihapus');
    }
}
