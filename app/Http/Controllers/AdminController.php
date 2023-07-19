<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

use App\Models\User;

class AdminController extends Controller
{
    public function index(Request $request) {
        $user = User::find($request->user()->id);
        foreach($user->roles as $role){
            if($role->number == 1){
                return Inertia::render('AdminPanel/AdminPanel');
            } 
        }
        return Redirect::route('dashboard');

    }

    public function employees(){
        return Inertia::render('AdminPanel/AdminPanel',[
        'employees' => User::where('userType_id' == 1)->get()
        ]);
    }
}
