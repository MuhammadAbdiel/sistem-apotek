@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Edit Profile</span>
            <h2>Edit Profile</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10">
                <form action="/profile/{{ auth()->user()->id }}" method="POST">
                    @method('put')
                    @csrf
                    <div class="shadow-lg p-3 mb-5 bg-body rounded">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama</label>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                                id="name" value="{{ old('name', $user->name) }}">
                            @error('name')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control @error('username') is-invalid @enderror"
                                name="username" id="username" value="{{ old('username', $user->username) }}">
                            @error('username')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                                id="email" value="{{ old('email', $user->email) }}">
                            @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="nohp" class="form-label">No HP</label>
                            <input type="number" class="form-control @error('nohp') is-invalid @enderror" name="nohp"
                                id="nohp" value="{{ old('nohp', $user->nohp) }}">
                            <div id="emailHelp" class="form-text">Example: 6281*****</div>
                            @error('nohp')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="alamat" class="form-label">Alamat</label>
                            <input type="text" class="form-control @error('alamat') is-invalid @enderror" name="alamat"
                                id="alamat" value="{{ old('alamat', $user->alamat) }}">
                            @error('alamat')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-success">Update</button>
                            <a href="/profile" class="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection