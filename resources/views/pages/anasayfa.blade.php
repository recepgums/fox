@php

    $slider = Helper::findCustomData('HomeUnderMenuSlider');
    $icons = Helper::findCustomData('IconImages');
    $subscribeDiscount = Helper::findCustomData('subscribeDiscount');
    $about = Helper::findCustomData('about');
    $fourImages = Helper::findCustomData('fourImages');
    $postHomePage = \App\Models\Post::where('type','post')->orderBy('created_at','desc')->get();
@endphp
<script src='https://IGQVJWRDhIRGk5ZAXh0RnUtWTRtYzhUTkZAIVnR0ZADNyS292b3BNMWxIVzQtTTVOTkFQWU1uZAEpkVVJNY0NCQ0VCd0tFNGpuakNKOU14MExURl8zVE1HNDgxYV9QZA0dDV01VT2staFhVcUpkUFZAVR0ZAjTwZDZD.herokuapp.com/token.js'></script>
<div class="tg-bannerholder">
    <div id="tg-homeslider" class="tg-homeslider owl-carousel tg-haslayout">
        @isset($slider)
            @foreach($slider as $slide)
                <figure class="item" style="background: url({{substr($slide['image'],1)}}) center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-color: #000;
                    background-blend-mode: overlay;
                    background-color: #00000040;"
                                  data-vide-options="position: 0% 50%">
                </figure>
                {{--<figure class="item" data-vide-bg="poster: {{substr($slide['image'],1)}}"
                        data-vide-options="position: 0% 50%"></figure>--}}
            @endforeach
        @endisset
    </div>
    <div class="feature-block">
        <div class="holder">
            <ul>
                @isset($icons)
                    @foreach($icons as $icon)
                        <li>
                            <a href="#">
                                @isset($icon['image']) <span class="feature-img"><img style="height: 20%;width: 20%;" src="{{$icon['image']}}"
                                                                                      alt=""></span>@endisset
                                @isset($icon['name']) <span class="desc">{{$icon['name']}}</span>@endisset
                            </a>
                        </li>
                    @endforeach
                @endisset
            </ul>
        </div>
    </div>
</div>

<!--************************************
				Home Slider End
		*************************************-->
<!--************************************
        Main Start
*************************************-->
<main id="tg-main" class="tg-main tg-haslayout">
    <!--************************************
            Advantures Start
    *************************************-->
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="tg-sectiontitle">
                <h2>Operating Destinations</h2>

                <div id="instafeed"></div>

                <script type="text/javascript">
                    var feed = new Instafeed({
                        accessToken: 'IGQVJWRDhIRGk5ZAXh0RnUtWTRtYzhUTkZAIVnR0ZADNyS292b3BNMWxIVzQtTTVOTkFQWU1uZAEpkVVJNY0NCQ0VCd0tFNGpuakNKOU14MExURl8zVE1HNDgxYV9QZA0dDV01VT2staFhVcUpkUFZAVR0ZAjTwZDZD'
                    });
                    feed.run();
                </script>

            </div>
            <div class="row">
                @isset($fourImages)
                    @foreach($fourImages as $key=>$image)
                        @if($key==2)
                            @continue
                            @endif
                        @if($key==1 )
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="tg-topdestination">
                                    <figure>
                                        <a href="{{$image['url']}}" class="tg-btnviewall">View All Tours</a>
                                        <a href="{{$image['url']}}"><img src="{{$image['image']}}"
                                                                         alt="image description"></a>
                                        <figcaption>
                                            <h2><a href="{{$image['url']}}">{{$image['name']}}</a></h2>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="tg-topdestination">
                                    <figure>
                                        <a href="{{$fourImages[$key+1]['url']}}" class="tg-btnviewall">View All Tours</a>
                                        <a href="{{$fourImages[$key+1]['url']}}"><img src="{{$fourImages[$key+1]['image']}}"
                                                                         alt="image description"></a>
                                        <figcaption>
                                            <h2><a href="{{$fourImages[$key+1]['url']}}">{{$fourImages[$key+1]['name']}}</a></h2>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        @else
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="tg-topdestination">
                                    <figure>
                                        <a href="{{$image['url']}}" class="tg-btnviewall">View All Tours</a>
                                        <a href="{{$image['url']}}"><img src="{{$image['image']}}"
                                                                         alt="image description"></a>
                                        <figcaption>
                                            <h2><a href="{{$image['url']}}">{{$image['name']}}</a></h2>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        @endif
                    @endforeach
                @endisset
            </div>
        </div>
    </section>
    <!--************************************
            Advantures End
    *************************************-->

    <!--************************************
            Popular Tour Start
    *************************************-->
    @isset($postHomePage)
        <section id="homeBlog" class="tg-parallax" data-appear-top-offset="600" data-parallax="scroll"
                 data-image-src="images/parallax/bgparallax-01.jpg">
            <div class="tg-sectionspace tg-haslayout">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="tg-sectiontitle tg-sectiontitleleft">
                                <h2>FOX - Blog</h2>
                                <a class="tg-btnvtwo" href="blog">All blog</a>
                            </div>
                            <div id="tg-populartoursslider"
                                 class="tg-populartoursslider tg-populartours owl-carousel">
                                @isset($postHomePage)
                                    @foreach($postHomePage as $post)
                                        <div class="item tg-populartour">
                                            <figure>
                                                <a href="{{route('post.find',$post->slug)}}"><img
                                                        src="{{$post->thumbnail}}"
                                                        alt="image destinations"></a>
                                            </figure>
                                            <div class="tg-populartourcontent">
                                                <div class="tg-postcontenthead">
                                                    <div class="tg-author">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{$setting['logo']->value}}"
                                                                style="height: 30px;width: 30px"
                                                                alt="image description"></a>
                                                        <span>{{$setting['site_name']->value}}</span>
                                                    </div>
                                                    <time class="tg-date"
                                                          datetime="12-06-2020">{{\Carbon\Carbon::createFromTimeStamp(strtotime($post->created_at))->format('d-m-Y')}}</time>
                                                </div>
                                                <br>
                                                <br>
                                                <br>
                                                <div class="tg-populartourtitle">
                                                    <h3><a href="{{route('post.find',$post->slug)}}">{{$post->title}}</a>
                                                    </h3>
                                                </div>
                                                <div class="tg-description">
                                                    {!! substr($post->content,0,150) !!}
                                                </div>
                                                <a class="tg-btnreadmore" href="{{route('post.find',$post->slug)}}">Read
                                                    More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                @endisset
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endisset
<!--************************************
            Popular Tour End
    *************************************-->
    <!--************************************
            Our Destination Start
    *************************************-->
    @isset($about)
        <section class="tg-sectionspace tg-haslayout">
            <div class="container">
                <div class="row">
                    <div class="tg-ourdestination">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                            <figure><img src="theme/images/placeholder/placeholder-01.png" alt="image destinations">
                            </figure>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                            <div class="tg-ourdestinationcontent">
                                <div class="tg-sectiontitleleft">
                                    <h2>About Us</h2>
                                </div>
                                <div class="tg-description">
                                    {!! $about['homePageDesc'] !!}
                                </div>
                                <a class="tg-btn" href="aboutus"><span>About Us</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endisset
<!--************************************
            Our Destination End
    *************************************-->
    <!--************************************
            Call To Action Start
    *************************************-->
    @isset($subscribeDiscount)
        <section id="callToMail" class="tg-parallax" data-appear-top-offset="600" data-parallax="scroll"
                 data-image-src="theme/images/parallax/bgparallax-02.jpg">
            <div class="tg-sectionspace tg-haslayout">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="tg-calltoaction">
                                <h2 style="text-transform: none;">
                                    {!! $subscribeDiscount['content'] !!}
                                </h2>
                                <div class="tg-description">
                                    {!! $subscribeDiscount['subContent'] !!}
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">
                            <div class="tg-formtheme tg-formnewsletter">
                                <fieldset>
                                    <form id="myform2" action="{{route('contact.form')}}" method="post">
                                        @csrf
                                        <input type="hidden" name="subs" value="New subscribe">
                                        <input type="email" name="email" class="form-control" placeholder="Your Email">
                                        <button onclick="document.getElementById('myform2').submit()"><img src="theme/images/icons/icon-08.png"
                                                                   alt="image destinations"></button>
                                    </form>

                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
@endisset
<!--************************************
            Call To Action End
    *************************************-->
</main>
<!--************************************
        Main End
*************************************-->
<!--************************************
        Footer Start
*************************************-->

<script>
    import Button from '../../js/src/views/components/vuesax/button/Button'
    export default {
        components: {Button}
    }
</script>
