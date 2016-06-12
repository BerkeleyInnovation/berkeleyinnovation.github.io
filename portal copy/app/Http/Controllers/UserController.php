<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UserController extends Controller {

    // Signing up for the first time
    public function postSignUp(Request $request) {

        $name = $request['name'];
        $email = $request['email'];
        $password = bcrypt($request['password']); // hash password for security

        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->password = $password;

        $user->save(); // write to database

        return redirect()->back();

    }


    // Signing in again
    public function postSignIn(Request $request) {

    }
}