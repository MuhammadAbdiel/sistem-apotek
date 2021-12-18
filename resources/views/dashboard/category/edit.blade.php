@extends('dashboard.layouts.main')

@section('content')
<div class="pd-ltr-20 xs-pd-20-10">
    <div class="pd-20 card-box mb-30">
        <div class="clearfix">
            <div class="pull-left">
                <h4 class="text-blue h4">Ubah Data Kategori</h4>
            </div>
        </div>
        <form action="/dashboard/category/{{ $category->kode_kategori }}" method="POST">
            @method('put')
            @csrf
            <div class="form-group row mt-3">
                <label class="col-sm-12 col-md-2 col-form-label" for="kode_kategori">Kode Kategori</label>
                <div class="col-sm-12 col-md-10">
                    <input readonly class="form-control" type="text" name="kode_kategori" id="kode_kategori"
                        value="{{ old('kode_kategori', $category->kode_kategori) }}"
                        placeholder="Masukkan kode kategori">
                </div>
            </div>
            <div class="form-group row mt-3">
                <label class="col-sm-12 col-md-2 col-form-label" for="nama_kategori">Nama Kategori</label>
                <div class="col-sm-12 col-md-10">
                    <input class="form-control" type="text" name="nama_kategori" id="nama_kategori"
                        value="{{ old('nama_kategori', $category->nama_kategori) }}"
                        placeholder="Masukkan nama kategori">
                </div>
            </div>
            <button type="submit" class="btn btn-success">Update</button>
            <a href="/dashboard/category" class="btn btn-danger">Back</a>
        </form>
    </div>

    @include('dashboard.layouts.footer')

</div>
@endsection