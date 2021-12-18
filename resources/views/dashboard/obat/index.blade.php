@extends('dashboard.layouts.main')

@section('content')
<div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
        <div class="card-box mb-30">
            <div class="pd-20">
                <h4 class="text-blue h4">Data Obat</h4>

                @if (session()->has('success'))
                <div class="alert alert-success" role="alert">
                    {{ session('success') }}
                </div>
                @endif

                <a href="/dashboard/obat/create" class="btn btn-primary"><i class="icon-copy dw dw-notepad-2"></i>
                    Tambah Data</a>
            </div>
            <div class="pb-20">
                <table class="table hover multiple-select-row data-table-export nowrap">
                    <thead>
                        <tr>
                            <th class="table-plus">No</th>
                            <th>Nama Obat</th>
                            <th>Gambar</th>
                            <th>Kategori</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($obats as $obat)
                        <tr>
                            <td class="table-plus">{{ $loop->iteration }}</td>
                            <td>{{ $obat->nama_obat }}</td>
                            <td>

                                @if ($obat->gambar)
                                <img src="{{ asset('storage/' . $obat->gambar) }}" alt="image" width="50">
                                @else
                                <img src="/assets/img/product/kosong.png" alt="image" width="50">
                                @endif

                            </td>
                            <td>{{ $obat->category->nama_kategori }}</td>
                            <td>Rp. {{ number_format($obat->harga) }}</td>
                            <td>{{ $obat->stok }}</td>
                            <td>
                                <a href="/dashboard/obat/{{ $obat->kode_obat }}" class="btn btn-info"><i
                                        class="icon-copy dw dw-view"></i>
                                    Detail</a>
                                <a href="/dashboard/obat/{{ $obat->kode_obat }}/edit" class="btn btn-warning"><i
                                        class="icon-copy dw dw-edit-2"></i>
                                    Edit</a>
                                <form class="d-inline-block" action="/dashboard/obat/{{ $obat->kode_obat }}"
                                    method="POST">
                                    @method('delete')
                                    @csrf
                                    <button type="submit" class="btn btn-danger"
                                        onclick="return confirm('Are sure to delete this data?')">
                                        <i class="icon-copy dw dw-delete-3"></i> Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    @include('dashboard.layouts.footer')

</div>
@endsection