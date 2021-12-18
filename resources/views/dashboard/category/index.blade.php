@extends('dashboard.layouts.main')

@section('content')
<div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
        <div class="card-box mb-30">
            <div class="pd-20">
                <h4 class="text-blue h4">Data Kategori Obat</h4>

                @if (session()->has('success'))
                <div class="alert alert-success" role="alert">
                    {{ session('success') }}
                </div>
                @endif

                <a href="/dashboard/category/create" class="btn btn-primary"><i class="icon-copy dw dw-notepad-2"></i>
                    Tambah Data</a>
            </div>
            <div class="pb-20">
                <table class="table hover multiple-select-row data-table-export nowrap">
                    <thead>
                        <tr>
                            <th class="table-plus">No</th>
                            <th>Nama Kategori</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($categories as $category)
                        <tr>
                            <td class="table-plus">{{ $loop->iteration }}</td>
                            <td>{{ $category->nama_kategori }}</td>
                            <td>
                                <a href="/dashboard/category/{{ $category->kode_kategori }}/edit"
                                    class="btn btn-warning"><i class="icon-copy dw dw-edit-2"></i> Edit</a>
                                <form action="/dashboard/category/{{ $category->kode_kategori }}" method="POST"
                                    class="d-inline-block">
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