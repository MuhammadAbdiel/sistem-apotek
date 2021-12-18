@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Shopping Cart</span>
            <h2>Shopping Cart</h2>
        </div>

        @if (session()->has('success'))
        <div class="alert alert-success" role="alert">
            {{ session('success') }}
        </div>
        @endif

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
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            @php
                            $order = \App\Models\Order::where('user_id', auth()->user()->id)->where('status',
                            0)->first();

                            if (!empty($order)) {
                            $detailOrders = \App\Models\DetailOrder::where('order_id', $order->id)->get();
                            }
                            @endphp

                            @if (!empty($order))
                            @foreach ($detailOrders as $detailOrder)
                            <tr>
                                <td>

                                    @if ($detailOrder->obat->gambar)
                                    <img src="{{ asset('storage/' . $detailOrder->obat->gambar) }}" width="50"
                                        alt="image">
                                    @else
                                    @if ($detailOrder->order->total_harga == 0)
                                    -
                                    @endif
                                    <img src="/assets/img/product/kosong.png" width="50" alt="image">
                                    @endif

                                </td>
                                <td>
                                    @if ($detailOrder->order->total_harga == 0)
                                    -
                                    @endif
                                    {{ $detailOrder->obat->nama_obat }}
                                </td>
                                <td>
                                    @if ($detailOrder->order->total_harga == 0)
                                    0
                                    @endif
                                    {{ $detailOrder->jumlah_order }}
                                </td>
                                <td>
                                    Rp. @if ($detailOrder->order->total_harga == 0)
                                    0
                                    @endif
                                    {{ number_format($detailOrder->obat->harga) }}
                                </td>
                                <td>
                                    Rp. @if ($detailOrder->order->total_harga == 0)
                                    0
                                    @endif
                                    {{ number_format($detailOrder->harga) }}
                                </td>
                                <td>
                                    @if ($detailOrder->order->total_harga == 0)
                                    -
                                    @endif
                                    <form action="/order/{{ $detailOrder->id }}" method="post">
                                        @method('delete')
                                        @csrf
                                        <button onclick="return confirm('Are you sure to cancel your order?')"
                                            type="submit" class="btn btn-danger p-1">
                                            <img src="/assets/img/icon/delete.png" alt="delete" width="30">
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                            @endif

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <h1 class="card-title text-dark fs-4 fw-bold">Total Harga</h1>
                        <div class="row my-4">
                            <div class="col-6">
                                <p class="fw-bold">
                                    Total
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="fw-bold">

                                    @if (!empty($order))
                                    Rp.
                                    @if ($order->total_harga == 0)
                                    0
                                    @else
                                    {{ number_format($order->total_harga) }}
                                    @endif
                                    @endif

                                </p>
                            </div>
                        </div>
                        <form action="/checkout" method="post">
                            @csrf
                            <button onclick="return confirm('Are you sure to checkout your orders?')" type="submit"
                                class="card-link btn btn-outline-info" style="width: 100%;">
                                <i class="bi-cart-fill me-1"></i> Checkout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection