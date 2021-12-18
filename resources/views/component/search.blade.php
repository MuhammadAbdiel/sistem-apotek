@php
$keyword = $_GET['keyword'];

$obats = \App\Models\Obat::where('nama_obat', 'like', '%' . $keyword . '$')
->where('harga', 'like', '%' . $keyword . '$')->paginate(4);
@endphp

<div class="row services-container gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

    @forelse ($obats as $obat)
    <div class="col mb-5 services-item filter-{{ $obat->category->kode_kategori }}">
        <div class="shadow p-3 mb-5 bg-body rounded">
            <!-- Product image-->

            @if ($obat->gambar)
            <img class="card-img-top" src="{{ asset('storage/' . $obat->gambar) }}" alt="image">
            @else
            <img class="card-img-top" src="/assets/img/product/kosong.png" alt="image">
            @endif

            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">{{ $obat->nama_obat }}</h5>
                    <!-- Product price-->
                    Rp. {{ number_format($obat->harga) }}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-info mt-auto" href="/order/{{ $obat->kode_obat }}"><i
                            class="bi-cart-fill me-1"></i> Order</a></div>
            </div>
        </div>
    </div>

    @empty
    <div class="alert alert-danger" role="alert">
        Tidak ada data
    </div>
    @endforelse

</div>

<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
    <div class="col d-flex justify-content-start">

        {{ $obats->links() }}

    </div>
</div>