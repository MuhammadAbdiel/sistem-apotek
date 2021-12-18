<?php

namespace App\Http\Controllers;

use DateTime;
use App\Models\Obat;
use App\Models\Order;
use App\Models\DetailOrder;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    public function index(Obat $obat)
    {
        return view('landing-page.pesanan.index', [
            'title' => 'Order',
            'obat' => $obat,
        ]);
    }

    public function store(Request $request, Obat $obat)
    {
        $dateTime = new DateTime();

        // Cek apakah obat yang diorder melebihi stok
        if ($request->jumlah_order > $obat->stok) {
            return redirect('/order/' . $obat->kode_obat)->with('stokTerbatas', 'Pesanan Anda melebihi stok yang tersedia!');
        }

        // Cek apakah user yang status = 0 sudah melakukan order sebelumnya
        if (empty(Order::where('user_id', auth()->user()->id)->where('status', 0)->first())) {
            Order::insert([
                'user_id' => auth()->user()->id,
                'waktu_pesan' => $dateTime->format('Y-m-d H:i:s'),
                'status' => 0,
                'kode_unik' => Str::random(7),
                'total_harga' => 0
            ]);
        }

        $obatId = Obat::where('id', $obat->id)->first();
        $orderUserStatus = Order::where('user_id', auth()->user()->id)->where('status', 0)->first();
        $detailOrderId = DetailOrder::where('obat_id', $obatId->id)->where('order_id', $orderUserStatus->id)->first();

        $tambahOrder = [];

        // Cek apakah di DetailOrder sudah terdapat obat_id dan user_id yang sama
        if (empty($detailOrderId)) {
            $tambahOrder = [
                'obat_id' => $obatId->id,
                'order_id' => $orderUserStatus->id,
                'harga' => $obat->harga * $request->jumlah_order
            ];

            if ($request->jumlah_order != null) {
                $tambahOrder['jumlah_order'] = $request->jumlah_order;
            } else {
                return redirect('/')->with('error', 'Pesanan gagal ditambahkan!');
            }

            DetailOrder::insert($tambahOrder);
        } else {
            $detailOrderId->harga += ($obat->harga * $request->jumlah_order);

            if ($request->jumlah_order != null) {
                $detailOrderId->jumlah_order += $request->jumlah_order;
            } else {
                return redirect('/')->with('error', 'Pesanan gagal ditambahkan!');
            }

            $detailOrderId->update();
        }

        $orderUserStatus->total_harga += ($obat->harga * $request->jumlah_order);
        $orderUserStatus->update();

        return redirect('/')->with('success', 'Pesanan berhasil ditambahkan!');
    }

    public function delete(DetailOrder $detailOrder)
    {
        if ($detailOrder->obat->gambar) {
            Storage::delete($detailOrder->obat->gambar);
        }

        $detailOrderId = DetailOrder::where('id', $detailOrder->id)->first();
        $orderId = Order::where('id', $detailOrderId->order_id)->first();
        $orderId->total_harga -= $detailOrderId->harga;
        $orderId->update();

        $detailOrderId->delete();
        return redirect('/cart')->with('success', 'Pesanan berhasil dibatalkan!');
    }

    public function checkout()
    {
        $order = Order::where('user_id', auth()->user()->id)->where('status', 0)->first();
        $order->status = 1;
        $order->update();

        $detailOrders = DetailOrder::where('order_id', $order->id)->get();
        foreach ($detailOrders as $detailOrder) {
            $obat = Obat::where('id', $detailOrder->obat_id)->first();
            $obat->stok -= $detailOrder->jumlah_order;
            $obat->update();
        }

        return redirect('/history/' . $order->kode_unik)->with('success', 'Anda berhasil melakukan checkout!');
    }
}
