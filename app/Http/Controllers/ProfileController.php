<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        return view('landing-page.profile.index', [
            'title' => 'Profile',
            'user' => User::where('id', auth()->user()->id)->first()
        ]);
    }

    public function edit()
    {
        return view('landing-page.profile.edit', [
            'title' => 'Edit Profile',
            'user' => User::where('id', auth()->user()->id)->first()
        ]);
    }

    public function update(Request $request, User $user)
    {
        $rules = [
            'name' => 'required|max:255',
            'nohp' => 'required',
            'alamat' => 'required'
        ];

        if ($request->username != $user->username) {
            $rules['username'] = 'required|unique:users';
        }

        if ($request->email != $user->email) {
            $rules['email'] = 'required|email|unique:users';
        }

        $validatedData = $request->validate($rules);

        User::where('id', auth()->user()->id)->update($validatedData);
        return redirect('/profile')->with('success', 'Your profile has been updated!');
    }
}
