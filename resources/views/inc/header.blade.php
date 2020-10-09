 @php
    $places = \App\Models\Post::where('type','service')->where('options','not like',"%id%")->get();
 @endphp

<body class="tg-home tg-homevone">
<!--[if lt IE 8]->value>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]->value-->
<!--************************************
            Loader Start
*************************************-->
<div class="loader" style="display: none">
    <div class="span">
        <div class="location_indicator"></div>
    </div>
</div>
<!--************************************
            Loader End
*************************************-->
<!--************************************
            Loader Start
*************************************-->
<div class="loader" style="display: none">
    <div class="span">
        <div class="location_indicator"></div>
    </div>
</div>
<!--************************************
            Loader End
*************************************-->
<!--************************************
        Mobile Menu Start
*************************************-->
<nav id="menu">
    <ul>
        <li><a href="{{url('anasayfa')}}"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="{{url('destinations')}}"><i class="fa fa-map-marker"></i> Destinations</a></li>
        <li><a href="{{url('itineraries')}}"><i class="fa fa-plane"></i> Itineraries</a>
            <ul>
                 @isset($places)
                     @foreach($places as $place)
                        <li><a href="{{route('service.find',$place->slug)}}">{{$place->slug}}</a></li>
                     @endforeach
                 @endisset
            </ul>
        </li>
        <li><a href="{{url('aboutus')}}">
                <i class="fa fa-id-card"></i> About
            </a>
        </li>
        <li><a href="{{url('contactus')}}">
                <i class="fa fa-phone"></i> Contact
            </a>
        </li>
        <li><a href="{{url('blog')}}">
                <i class="fa fa-newspaper-o"></i> Blog
            </a>
        </li>
    </ul>
</nav>
<!--************************************
        Mobile Menu End
*************************************-->
<!--************************************
        Wrapper Start
*************************************-->
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <!--************************************
            Header Start
    *************************************-->
    <header id="tg-header" class="tg-header tg-haslayout">
        <div class="container-fluid">
            <div class="row">
                <div class="tg-topbar">
                    <nav class="tg-infonav">
                        <ul>
                            <li>
                                <i><img src="{{asset('theme/images/icons/icon-01.png')}}" alt="image destinations"></i>
                                <span><a
                                        href="tel: @isset($setting['phone']->value){{$setting['phone']->value}} @endisset"> @isset($setting['phone']->value){{$setting['phone']->value}} @endisset</a></span>
                            </li>
                            <li>
                                <i><img src="{{asset('theme/images/icons/icon-08.png')}}" alt="image destinations"></i>
                                <span><a
                                        href="mailto: @isset($setting['email']->value){{$setting['email']->value}} @endisset"> @isset($setting['email']->value){{$setting['email']->value}} @endisset</a></span>
                            </li>
                            <li>
                                <i><img src="{{asset('theme/images/icons/icon-02.png')}}" alt="image destinations"></i>
                                <span><a
                                        href=" @isset($setting['map_iframe']->value){{$setting['map_iframe']->value}} @endisset">Discover more</a></span>
                            </li>
                        </ul>
                    </nav>
                    <div class="tg-addnavcartsearch">
                        <nav class="tg-addnav">
                            <ul>
                                <li><a href="{{url('aboutus')}}">about</a></li>
                                <li><a href="{{url('contactus')}}">contact</a></li>
                            </ul>
                        </nav>
                        <nav class="tg-cartsearch">
                            <ul>
                                <li><a href="#tg-search"><img src="{{asset('theme/images/icons/icon-04.png')}}"
                                                              alt="image destinations"></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="tg-navigationarea tg-headerfixed">
                    <strong class="tg-logo"><a href="{{url('anasayfa')}}"><img src="{{asset('theme/images/logo.png')}}"
                                                                    alt="company logo here"></a></strong>
                    <div class="tg-socialsignin">
                        <ul class="tg-socialicons">
                            <li>
                                <a href=" @isset($setting['facebook']->value){{$setting['facebook']->value}}  @endisset"><i
                                        class="icon-facebook-logo-outline"></i></a></li>
                            <li>
                                <a href=" @isset($setting['instagram']->value){{$setting['instagram']->value}}  @endisset"><i
                                        class="icon-instagram-social-outlined-logo"></i></a></li>
                            <li><a href=" @isset($setting['twitter']->value){{$setting['twitter']->value}}  @endisset"><i
                                        class="icon-twitter-social-outlined-logo"></i></a>
                            </li>
                            <li>
                                <a href=" @isset($setting['linkedin']->value){{$setting['linkedin']->value}}  @endisset"><i
                                        class="icon-linkedin-social-outline-logotype"></i></a>
                            </li>
                        </ul>
                    </div>
                    <nav id="tg-nav" class="tg-nav">
                        <div class="navbar-header">
                            <a href="#menu" class="navbar-toggle collapsed">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </a>
                        </div>
                        <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
                            <ul>
                                <li class="menu-item-has-children  @if($category == '' or $category == '/' or $category =='anasayfa')current-menu-item @endif"><a href="{{url('anasayfa')}}"><i
                                            class="fa fa-home"></i> Home</a>
                                </li>
                                <li class="@if($category=='destinations')current-menu-item @endif "><a href="{{url('destinations')}}"><i class="fa fa-map-marker "></i> Destinations</a>
                                </li>
                                <li class="menu-item-has-children  @if($category=='itineraries' or $category =='country' or $category=='tour')current-menu-item @endif  "><a href="{{url('itineraries')}}"><i
                                            class="fa fa-plane"></i> Itineraries</a>
                                    <ul class="sub-menu ">
                                             @isset($places)
                                                 @foreach($places as $place)
                                                    <li><a href="{{route('service.find',$place->slug)}}">{{$place->slug}}</a></li>
                                                 @endforeach
                                             @endisset
                                    </ul>
                                </li>
                                <li class="@if($category=='aboutus')current-menu-item @endif">
                                    <a href="{{url('aboutus')}}" class="   ">
                                        <i class="fa fa-id-card"></i> About
                                    </a>
                                </li>
                                <li  class=" @if($category=='contactus')current-menu-item @endif ">
                                    <a href="{{url('contactus')}}">
                                        <i class="fa fa-phone"></i> Contact
                                    </a>
                                </li>
                                <li  class=" @if($category=='blog') current-menu-item @endif">
                                    <a href="{{url('blog')}}"  >
                                        <i class="fa fa-newspaper-o"></i> Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!--************************************
            Header End
    *************************************-->
    <!--************************************
            Home Slider Start
    *************************************-->
