@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Detail Order</span>
            <h2>Detail Order</h2>
        </div>

        <div class="alert alert-success">
            <img src="/assets/img/icon/info.png" width="35" alt="image">
            <h3 class="d-inline-block mb-4">Sukses Checkout</h3><br>
            <strong>Kode Unik : {{ $order->kode_unik }}</strong><br>
            @if ($order->status == 1)
            Pesanan berhasil di checkout, silahkan lanjutkan pembayaran dengan cara : <br>
            Transfer ke rekening <strong>BCA : 0123-456789-012</strong> dengan nominal
            <strong>Rp. {{ number_format($order->total_harga) }}</strong>
            @else
            Pesanan sudah dibayar!
            @endif
        </div>

        <div class="row justify-content-between">
            <div class="col-md-8">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            @if (!empty($order))
                            @foreach ($detailOrders as $detailOrder)
                            <tr>
                                <td>

                                    @if ($detailOrder->obat->gambar)
                                    <img src="{{ asset('storage/' . $detailOrder->obat->gambar) }}" width="50"
                                        alt="image">
                                    @else
                                    <img src="/assets/img/product/kosong.png" width="50" alt="image">
                                    @endif

                                </td>
                                <td>{{ $detailOrder->obat->nama_obat }}</td>
                                <td>{{ $detailOrder->jumlah_order }}</td>
                                <td>Rp. {{ number_format($detailOrder->obat->harga) }}</td>
                                <td>Rp. {{ number_format($detailOrder->harga) }}</td>
                            </tr>
                            @endforeach
                            @endif

                        </tbody>
                    </table>
                    <a href="/history" class="btn btn-danger">Back</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <h1 class="card-title text-dark fs-4 fw-bold">Total Yang Harus Dibayar</h1>
                        <div class="row my-4">
                            <div class="col-6">
                                <p class="fw-bold">
                                    Total
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="fw-bold">

                                    Rp. @if (!empty($order))
                                    {{ number_format($order->total_harga) }}
                                    @endif

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection