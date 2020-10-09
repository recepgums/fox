<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Models\Setting;
use App\Mail\ShortEmail;
use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Newsletter;


class ApiAppointmentController extends ApiController
{


    public function __construct(Request $request)
    {

    }


    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index(Request $request)
    {
        $user = auth()->setRequest($request)->user();
        // Get user from $request token.
        if (!$user->role == 'admin') {
            return $this->responseUnauthorized();
        }
        $collection = Appointment::orderBy('created_At', 'desc')->get();

        return $collection->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'email|required',

            //'phone' => 'required|integer|min:10|max:13',
        ]);
        if ($validator->fails()) {
            return back()->with('errors', $validator->messages()->all())->withInput();
        }
        //===========================================
        // ============ VALIDATION RULES ============
        //===========================================

        $urlComingFrom = str_replace(url('/'), '', url()->previous());
        if (isset($request->subs)) {
            $email = $request->email;
            $adminEmail = User::where('role','admin')->first()->email;
            $data2 = [ 'email' => $adminEmail];
            $data = [ 'email' => $email];
            Mail::send('mail.newsletter', ["data" => $data], function ($message) use ($email) {
                $message->to($email)
                    ->subject('E-İhracat bültenine başarıyla kaydoldunuz');
            });
           /* Mail::send('mail.newsletter', ["data2" => $data2], function ($message) use ($adminEmail) {
                $message->to($adminEmail)
                    ->subject('Bültene yeni birisi katıldı');
            });*/

        }
        if ($urlComingFrom === "/appointment-form") {
            //Burası admine gitmeli
            $email = $request->email;
            $name = $request->name;
            $phone = $request->phone;
            $hour = $request->appSetHour;
            $date = $request->date;
            $appServiceSelect = Post::find($request->appServiceSelect)->title;
            $detailservices = $request->detailservices;
            $message = $request->message;
            $data = ['name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $message,
                'appServiceSelect' => $appServiceSelect, 'detailservices' => $detailservices,
                'hour' => $hour, 'date' => $date
            ];
            Mail::send('mail.aaa', ["data" => $data], function ($message) use ($email, $name) {
                $message->to($email)
                    ->subject('E-ihracat Randevu');
            });
            Mail::send('mail.aaa', ["data" => $data], function ($message) use ($email, $name) {
                $admin = User::where('role', 'admin')->first();
                $message->to($admin->email)
                    ->subject('Yeni bir randevu talebeniz var');
            });

        }


        if ($request->subscribe === "subscribe") {
            $email = $request->email;
            $data = ['email' => $email];
            Mail::send('mail.newsletter', ["data" => $data], function ($message) use ($email) {
                $message->to($email)
                    ->subject('E-İhracat bültenine başarıyla kaydoldunuz');
            });
        } else {
            $request->request->remove('subscribe');
        }




        function namedSettings($settings)
        {
            $named_settings = [];
            foreach ($settings as $setting) {
                $named_settings[$setting->name] = $setting;
            }
            return $named_settings;
        }

        $setting = namedSettings(Setting::all());

        try {
            $CreateForm = Appointment::create([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
                'FormData' => json_encode($request->all()),
                'appointment_case' => $request->appointment_case,
                'appointment_date' => $request->appointment_date,
                'form_type' => $request->form_type,
            ]);


            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
                'appointment_case' => $request->appointment_case,
                'appointment_date' => $request->appointment_date,
                'form_type' => $request->form_type,
            ];


            //Mail::to($setting['Email']->value)->send(new ShortEmail($setting['Email']->value,$setting['site_name']->value,$data));

            return back()->withSuccess(trans('lang.your_messsage_has_been_sent'));
            //return redirect('contact')->with('success', 'Task Created Successfully!');
            //return back()->with('success', 'Mesajınız Başarıyla Gönderildi');

        } catch (\Exception $e) {
            return $this->responseServerError($e);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Appointment $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    public function partnerContact(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'name' => 'string|max:80',
            'email' => 'email',
            //'phone' => 'required|integer|min:10|max:13',
        ]);
        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        $toMail = User::find($request->to)->email;
        $fromEmail = $request->email;
        $name = $request->name;
        $phone = $request->phone;
        $message = $request->message;
        $data = ['name' => $name, 'email' => $fromEmail, 'phone' => $phone, 'message' => $message, 'toMail' => $toMail,];
        Mail::send('mail.contact', ["data1" => $data], function ($message) use ($fromEmail, $name) {
            $message->to($fromEmail)
                ->subject('E-İhracat\'a iletişim formunuz gönderildi');
        });
        Mail::send('mail.contact', ["data1" => $data], function ($message) use ($toMail) {
            $message->to($toMail)
                ->subject('E-ihracat Yeni Form Talebi');
        });
        function namedSettings($settings)
        {
            $named_settings = [];
            foreach ($settings as $setting) {
                $named_settings[$setting->name] = $setting;
            }
            return $named_settings;
        }

        $setting = namedSettings(Setting::all());


        $CreateForm = Appointment::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
            'FormData' => json_encode($request->all()),
            'appointment_case' => $request->appointment_case,
            'appointment_date' => $request->appointment_date,
            'form_type' => $request->form_type,
        ]);


        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
            'appointment_case' => $request->appointment_case,
            'appointment_date' => $request->appointment_date,
            'form_type' => $request->form_type,
        ];

//dd("mail gidecek");
//            Mail::to($request->to)->send(new ShortEmail($request->email,$request->name,$request->message));

        return back()->withSuccess(trans('lang.your_messsage_has_been_sent'));
        //return redirect('contact')->with('success', 'Task Created Successfully!');
        //return back()->with('success', 'Mesajınız Başarıyla Gönderildi');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Appointment $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Appointment $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $id)
    {
        $user = auth()->setRequest($request)->user();
        // Get user from $request token.
        if (!$user->role === 'admin') {
            return $this->responseUnauthorized();
        }
        $userData = Appointment::where('id', $id)->firstOrFail();

        try {
            $userData->delete();
            return $this->responseResourceDeleted();
        } catch (Exception $e) {
            return $this->responseServerError('Error deleting resource.');
        }
    }

    public function ajaxService(Request $request)
    {
        $data = Post::where('options', 'LIKE', '%{"id":' . $request->id . '%')->get();
        return response()->json(['data' => $data]);
    }
}
