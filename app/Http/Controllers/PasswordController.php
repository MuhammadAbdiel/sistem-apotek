<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    public function index()
    {
        return view('landing-page.change-password.index', [
            'title' => 'Change Password'
        ]);
    }

    public function save(Request $request)
    {
        $request->validate([
            'old_password' => 'required|min:5|max:255',
            'new_password' => 'required|min:5|max:255',
            'confirm_password' => 'required|same:new_password'
        ]);

        if (Hash::check($request->old_password, auth()->user()->password)) {
            User::where('id', auth()->user()->id)->update([
                'password' => bcrypt($request->new_password)
            ]);

            return redirect('/profile')->with('successPassword', "Password has been updated!");
        }

        return back()->with('errorPassword', "Old password doesn't matched!");
    }
}
