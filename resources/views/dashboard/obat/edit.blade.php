@extends('dashboard.layouts.main')

@section('content')
<div class="pd-ltr-20 xs-pd-20-10">
    <div class="pd-20 card-box mb-30">
        <div class="clearfix">
            <div class="pull-left">
                <h4 class="text-blue h4">Edit Data Obat</h4>
            </div>
        </div>
        <form action="/dashboard/obat/{{ $obat->kode_obat }}" method="POST" enctype="multipart/form-data">
            @method('put')
            @csrf
            <div class="form-group row mt-3">
                <label class="col-sm-12 col-md-2 col-form-label" for="kode_obat">Kode Obat</label>
                <div class="col-sm-12 col-md-10">
                    <input readonly class="form-control @error('kode_obat') is-invalid @enderror" name="kode_obat"
                        id="kode_obat" value="{{ old('kode_obat', $obat->kode_obat) }}" type="text"
                        placeholder="Masukkan kode obat">
                    @error('kode_obat')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
            </div>
            <div class="form-group row mt-3">
                <label class="col-sm-12 col-md-2 col-form-label" for="nama_obat">Nama Obat</label>
                <div class="col-sm-12 col-md-10">
                    <input class="form-control @error('nama_obat') is-invalid @enderror" name="nama_obat" id="nama_obat"
                        value="{{ old('nama_obat', $obat->nama_obat) }}" type="text" placeholder="Masukkan nama obat">
                    @error('nama_obat')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
            </div>
            <div class="form-group row mt-3">
                <label class="col-sm-12 col-md-2 col-form-label" for="gambar">Gambar</label>
                <div class="custom-file col-sm-12 col-md-10">
                    <input type="file" id="gambar" name="gambar"
                        class="custom-file-input form-control @error('gambar') is-invalid @enderror"
                        onchange="previewImage()">
                    <label class="custom-file-label">Pilih file gambar</label>
                    @error('gambar')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
                <div class="col-sm-12 col-md-10 image" style="margin-left: 200px !important;">
                    <input type="hidden" name="gambarLama" value="{{ $obat->gambar }}">

                    @if ($obat->gambar)
                    <img src="{{ asset('storage/' . $obat->gambar) }}" class="img-preview img-fluid" width="200">
                    @else
                    <img class="img-preview img-fluid" width="200">
                    @endif

                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label" for="category_id">Kategori Obat</label>
                <div class="col-sm-12 col-md-10">
                    <select class="custom-select2 form-control" id="category_id" name="category_id">
                        <optgroup label="Kategori Obat">
                            <option selected>-- Pilih --</option>

                            @foreach ($categories as $category)
                            @if (old('category_id', $obat->category_id) == $category->id)
                            <option value="{{ $category->id }}" selected>{{ $category->nama_kategori }}
                            </option>
                            @else
                            <option value="{{ $category->id }}">{{ $category->nama_kategori }}
                            </option>
                            @endif
                            @endforeach

                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label" for="deskripsi">Deskripsi</label>
                <div class="col-sm-12 col-md-10">
                    <input id="deskripsi" type="hidden" name="deskripsi"
                        value="{{ old('deskripsi', $obat->deskripsi) }}">
                    <trix-editor input="deskripsi"></trix-editor>
                    @error('deskripsi')
                    <div class="alert alert-danger mt-3" role="alert">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label" for="harga">Harga</label>
                <div class="col-sm-12 col-md-10">
                    <input class="form-control @error('harga') is-invalid @enderror"
                        value="{{ old('harga', $obat->harga) }}" id="harga" name="harga" type="number"
                        placeholder="Masukkan harga">
                    @error('harga')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label" for="stok">Stok</label>
                <div class="col-sm-12 col-md-10">
                    <input class="form-control @error('stok') is-invalid @enderror"
                        value="{{ old('stok', $obat->stok) }}" id="stok" name="stok" type="number"
                        placeholder="Masukkan stok">
                    @error('stok')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
            </div>
            <button type="submit" class="btn btn-success">Update</button>
            <a href="/dashboard/obat" class="btn btn-danger">Back</a>
        </form>
    </div>

    @include('dashboard.layouts.footer')

</div>

@include('dashboard.layouts.preview')

@endsection