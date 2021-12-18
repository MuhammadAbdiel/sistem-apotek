@extends('landing-page.layouts.main')

@section('content')
<section class="py-5 section-bg">
    <div class="container px-4 px-lg-5 my-2">
        <div class="section-title">
            <span>Order</span>
            <h2>Order</h2>
        </div>

        @if (session()->has('stokTerbatas'))
        <div class="alert alert-danger" role="alert">
            {{ session('stokTerbatas') }}
        </div>
        @endif

        <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6 border rounded bg-white">

                @if ($obat->gambar)
                <img class="card-img-top mb-5 mb-md-0" src="{{ asset('storage/' . $obat->gambar) }}" alt="image">
                @else
                <img class="card-img-top mb-5 mb-md-0" src="/assets/img/product/kosong.png" alt="image">
                @endif

            </div>
            <div class="col-md-6">
                <h1 class="display-5 fw-bolder">{{ $obat->nama_obat }}</h1>
                <div class="fs-5 mb-5">
                    <span>Rp. {{ number_format($obat->harga) }}</span>
                </div>
                <p class="lead">{!! $obat->deskripsi !!}</p>
                <div class="d-flex">
                    <form action="/order/{{ $obat->kode_obat }}" method="post" class="d-flex">
                        @csrf
                        <input class="form-control text-center me-3" id="jumlah_order" name="jumlah_order" type="num"
                            value="" style="max-width: 3rem" />
                        <button class="btn btn-outline-info flex-shrink-0" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection