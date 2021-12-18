@extends('landing-page.layouts.main')

@section('content')
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Profile</span>
            <h2>Profile</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-10">

                @if (session()->has('success'))
                <div class="alert alert-success" role="alert">
                    {{ session('success') }}
                </div>
                @endif

                @if (session()->has('successPassword'))
                <div class="alert alert-success" role="alert">
                    {{ session('successPassword') }}
                </div>
                @endif

                <div class="shadow-lg p-3 mb-5 bg-body rounded">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th width="100"></th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td width="100"></td>
                                <td>{{ $user->name }}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td width="100"></td>
                                <td>{{ $user->username }}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td width="100"></td>
                                <td>{{ $user->email }}</td>
                            </tr>
                            <tr>
                                <td>No HP</td>
                                <td width="100"></td>
                                <td>{{ $user->nohp }}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td width="100"></td>
                                <td>{{ $user->alamat }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/profile/edit" class="btn btn-warning p-2">
                        <img src="/assets/img/icon/edit.png" alt="image" width="20"> Edit Profile
                    </a>
                    <a href="/change-password/change" class="btn btn-primary p-2">
                        <img src="/assets/img/icon/key.png" alt="image" width="20"> Change Password
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection