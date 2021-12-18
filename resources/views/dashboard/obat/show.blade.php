@extends('dashboard.layouts.main')

@section('content')
<div class="pd-ltr-20 xs-pd-20-10">
    <div class="card-box pd-20 height-100-p mb-30">
        <h4 class="h4 text-blue mb-30">Detail Obat</h4>
        <div class="row align-items-center">
            <div class="col-md-4">

                @if ($obat->gambar)
                <img src="{{ asset('storage/' . $obat->gambar) }}" alt="image">
                @else
                <img src="/assets/img/product/kosong.png" alt="image">
                @endif

            </div>
            <div class="col-md-8">
                <h1 class="font-20 mb-10 text-capitalize">{{ $obat->nama_obat }}</h1>
                <p class="font-18 max-width-600">{!! $obat->deskripsi !!}</p>
                <a href="/dashboard/obat" class="btn btn-danger">Back</a>
            </div>
        </div>
    </div>

    @include('dashboard.layouts.footer')

</div>
@endsection