<?php

namespace App\Http\Controllers;

use App\Models\Obat;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        if ($request->ajax()) {

            $dataObat = Obat::latest()->get();

            if ($dataObat) {

                $result = '';
                $obats = Obat::where('nama_obat', 'LIKE', '%' . $request->search . '%')
                    ->where('harga', 'LIKE', '%' . $request->search . '%')
                    ->get();

                foreach ($obats as $obat) {
                    $result .= '
                        <div class="col mb-5 services-item filter-' . $obat->category->kode_kategori . '">
                            <div class="shadow p-3 mb-5 bg-body rounded">';

                    if ($obat->gambar) {
                        $result .= '<img class="card-img-top" src="' . asset("storage/" . $obat->gambar) . '" alt="image">';
                    } else {
                        $result .= '<img class="card-img-top" src="/assets/img/product/kosong.png" alt="image">';
                    }

                    $result .=  '<div class="card-body p-4">
                                    <div class="text-center">

                                        <h5 class="fw-bolder">' . $obat->nama_obat . '</h5>

                                        Rp. ' . number_format($obat->harga) . '
                                    </div>
                                </div>

                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-info mt-auto"
                                            href="/order/' . $obat->kode_obat . '"><i class="bi-cart-fill me-1"></i> Order</a></div>
                                </div>
                            </div>
                        </div>
                    ';
                }

                return Response($result);
            } else {

                $result = '';
                $obats = Obat::latest()->paginate(4);

                foreach ($obats as $obat) {
                    $result .= '
                        <div class="col mb-5 services-item filter-' . $obat->category->kode_kategori . '">
                            <div class="shadow p-3 mb-5 bg-body rounded">';

                    if ($obat->gambar) {
                        $result .= '<img class="card-img-top" src="' . asset("storage/" . $obat->gambar) . '" alt="image">';
                    } else {
                        $result .= '<img class="card-img-top" src="/assets/img/product/kosong.png" alt="image">';
                    }

                    $result .=  '<div class="card-body p-4">
                                    <div class="text-center">

                                        <h5 class="fw-bolder">' . $obat->nama_obat . '</h5>

                                        Rp. ' . number_format($obat->harga) . '
                                    </div>
                                </div>

                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-info mt-auto"
                                            href="/order/' . $obat->kode_obat . '"><i class="bi-cart-fill me-1"></i> Order</a></div>
                                </div>
                            </div>
                        </div>
                    ';
                }

                return Response($result);
            }
        }
    }
}
