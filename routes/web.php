<?php

use App\Models\Obat;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ObatController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $obats = Obat::latest();

    if (request('search')) {
        $obats->where('nama_obat', 'like', '%' . request('search') . '%')
            ->orWhere('harga', 'like', '%' . request('search') . '%');
    }

    return view('landing-page.index', [
        'title' => 'Home',
        'categories' => Category::latest()->get(),
        'obats' => $obats->paginate(4)
    ]);
});

Route::get('/cart', function () {
    return view('landing-page.cart', [
        'title' => 'Cart',
    ]);
})->middleware('auth');

Route::get('/dashboard', function () {
    return view('dashboard.index', [
        'title' => 'Dashboard'
    ]);
})->middleware('admin');

Route::get('/profile', [ProfileController::class, 'index'])->middleware('auth');
Route::get('/profile/edit', [ProfileController::class, 'edit'])->middleware('auth');
Route::put('/profile/{user}', [ProfileController::class, 'update']);

Route::get('/history', [HistoryController::class, 'index'])->middleware('auth');
Route::get('/history/{order}', [HistoryController::class, 'detail'])->middleware('auth');

Route::get('/change-password/change', [PasswordController::class, 'index'])->middleware('auth');
Route::put('/change-password/{user}', [PasswordController::class, 'save']);

Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/register', [RegisterController::class, 'index'])->middleware('guest');
Route::post('/register', [RegisterController::class, 'store']);

Route::resource('/dashboard/obat', ObatController::class)->middleware('admin');
Route::resource('/dashboard/category', CategoryController::class)->except('show')->middleware('admin');

Route::get('/order/{obat}', [OrderController::class, 'index'])->middleware('auth');
Route::post('/order/{obat}', [OrderController::class, 'store']);
Route::delete('/order/{detail_order}', [OrderController::class, 'delete']);
Route::post('/checkout', [OrderController::class, 'checkout']);

// Route::get('/search', [SearchController::class, 'search']);
