@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Change Password</span>
            <h2>Change Password</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10">

                @if (session()->has('errorPassword'))
                <div class="alert alert-danger" role="alert">
                    {{ session('errorPassword') }}
                </div>
                @endif

                <form action="/change-password/{{ auth()->user()->id }}" method="POST">
                    @method('put')
                    @csrf
                    <div class="shadow-lg p-3 mb-5 bg-body rounded">
                        <div class="mb-3">
                            <label for="old_password" class="form-label">Old Password</label>
                            <input type="password" class="form-control @error('old_password') is-invalid @enderror"
                                name="old_password" id="old_password">
                            @error('old_password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="new_password" class="form-label">New Password</label>
                            <input type="password" class="form-control @error('new_password') is-invalid @enderror"
                                name="new_password" id="new_password">
                            @error('new_password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="confirm_password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control @error('confirm_password') is-invalid @enderror"
                                name="confirm_password" id="confirm_password">
                            @error('confirm_password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-info">Save</button>
                            <a href="/profile" class="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection