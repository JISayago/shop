<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware(['auth','admin:1'])->group(function () {
    Route::get('/admin-panel', [AdminController::class, 'index'])->name('admin.index');
   // Route::inertia('/admin-panel/employee','AdminEmployeeList')->name('admin.employee');
    /*Route::get('/admin-panel/employees', [AdminController::class, 'employees'])->name('admin.employees');
    Route::get('/admin-panel/clients', [AdminController::class, 'clients'])->name('admin.clients');
    Route::get('/admin-panel/products', [AdminController::class, 'products'])->name('admin.products');
    /*Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');*/
});
/*Route::get('/admin-panel', function () {
    return Inertia::render('AdminPanel');
})->middleware(['auth','admin:1']);*/


require __DIR__.'/auth.php';
