@php
    $destinations = \App\Models\Post::where('type','service')->where('options','not like',"%id%")->get();
@endphp
<footer id="tg-footer" class="tg-footer tg-haslayout">
    <div class="tg-fourcolumns">
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="tg-footercolumn tg-widget tg-widgettext">
                        <div class="tg-widgettitle">
                            <h3>Contact</h3>
                        </div>
                        <div class="tg-widgetcontent">
                            <div class="tg-description">
                                @isset($setting['address']->value)<p>{{$setting['address']->value}}</p>@endisset
                            </div>
                            <div class="tg-description">
                                <p>+90216 550 1FOX</p>
                            </div>
                            <div class="tg-description">
                                @isset($setting['email']->value)<p>{{$setting['email']->value}}</p>@endisset
                            </div>
                            <ul class="tg-socialicons tg-socialiconsvtwo">
                                <li>
                                    <a href="@isset($setting['facebook']->value){{$setting['facebook']->value}}@endisset"><i
                                            class="icon-facebook-logo-outline"></i></a>
                                </li>
                                <li>
                                    <a href="@isset($setting['instagram']->value){{$setting['instagram']->value}}@endisset"><i
                                            class="icon-instagram-social-outlined-logo"></i></a></li>
                                <li><a href="@isset($setting['twitter']->value){{$setting['twitter']->value}}@endisset"><i
                                            class="icon-twitter-social-outlined-logo"></i></a></li>
                                <li>
                                    <a href="@isset($setting['linkedin']->value){{$setting['linkedin']->value}}@endisset"><i
                                            class="icon-linkedin-social-outline-logotype"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="tg-footercolumn tg-widget tg-widgettravelunews">
                        <div class="tg-widgettitle">
                            <h3>Follow Us on Instagram</h3>
                        </div>
                        <div class="tg-widgetcontent">
                            <div class="instagramFeed">
                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>

                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>

                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>

                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>

                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>

                                <div class="instaPostItem">
                                    <a href="#" class="instaOverlay"><i class="fa fa-instagram"></i></a>
                                    <img src="https://www.placehold.it/300x300" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="tg-footercolumn tg-widget tg-widgetdestinations">
                        <div class="tg-widgettitle">
                            <h3>Top Destinations</h3>
                        </div>
                        <div class="tg-widgetcontent">
                            <ul>
                                @isset($destinations)
                                    @foreach($destinations as $item)
                                        <li><a href="{{route('service.find',$item->slug)}}">{{$item->title}}</a></li>
                                    @endforeach
                                @endisset
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="tg-footercolumn tg-widget tg-widgetnewsletter">
                        <div class="tg-widgettitle">
                            <h3>Newsletter</h3>
                        </div>
                        <div class="tg-widgetcontent">
                            <div class="tg-description">
                                <p>Sign up for our mailing list to get latest updates and offers</p>
                            </div>
                            <form action="{{route('contact.form')}}" id="myform3" method="post"
                                  class="tg-formtheme tg-formnewsletter">
                                @csrf
                                <fieldset>
                                    <input type="hidden" name="subs" value="New subscribe">
                                    <input type="email" name="email" class="form-control"
                                           placeholder="Your Email">
                                    <button onclick="document.getElementById('myform3').submit()"><img
                                            src="{{asset('theme/images/icons/icon-08.png')}}"
                                            alt="image destinations"></button>
                                </fieldset>
                            </form>
                            <span>We respect your privacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tg-footerbar">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>Copyright &copy; 2020 FOX DMC. All rights reserved, design by <a
                            href="https://www.mindfactory.com.tr/">Mindfactory</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!--************************************
        Login Singup End
*************************************-->
<div class="wp-area">
    <a target="_blank" href="https://wa.me/@isset($setting['phone']->value){{$setting['phone']->value}}@endisset"><i
            class="fa fa-whatsapp"></i></a>
</div>
