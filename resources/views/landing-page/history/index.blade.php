@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>History</span>
            <h2>History</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Waktu Pesan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total Harga</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($orders as $order)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $order->waktu_pesan }}</td>
                                <td>

                                    @if ($order->status == 1)
                                    <div class="badge bg-danger">Belum dibayar</div>
                                    @else
                                    <div class="badge bg-success">Sudah dibayar</div>
                                    @endif

                                </td>
                                <td>Rp. {{ number_format($order->total_harga) }}</td>
                                <td>
                                    <a href="/history/{{ $order->kode_unik }}" class="btn btn-info">
                                        <img src="/assets/img/icon/info.png" width="25" alt="image"> Detail
                                    </a>
                                </td>
                            </tr>
                            @endforeach

                        </tbody>
                    </table>
                    <a href="/cart" class="btn btn-danger">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection