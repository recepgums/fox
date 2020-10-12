@php
    $post = \App\Models\Post::where('type','post')->where('slug',$post->slug)->first();
    $recentPosts = \App\Models\Post::where('type','post')->orderBy('created_at','desc')->get();
@endphp

<!--************************************
				Inner Banner Start
		*************************************-->
<section class="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll"
         data-image-src="{{$post->thumbnail}}">
    <div class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Latest News</h1>
                    <h2>{{$post->title}}</h2>
                    <ol class="tg-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="tg-active"><a href="/blog">Blog</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</section>
<!--************************************
        Inner Banner End
*************************************-->
<!--************************************
        Main Start
*************************************-->
<main id="tg-main" class="tg-main tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1">
                <div id="tg-content" class="tg-content">
                    <div class="tg-blogdetail">
                        <div class="tg-detailbox">
                            <div class="tg-description">
                                {!! $post->content !!}
                            </div>
                            <br>
                            <br>
                            <br>
                            <div class="sharethis-inline-share-buttons"></div>
                            <br>
                            <br>
                            <br>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<section class="tg-parallax" data-appear-top-offset="600" data-parallax="scroll"
         data-image-src="theme/images/parallax/bgparallax-01.jpg">
    <div class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectiontitle tg-sectiontitleleft">
                        <h2>FOX - Blog</h2>
                        <a class="tg-btnvtwo" href="/blog">All blog</a>
                    </div>
                    <div id="tg-populartoursslider" class="tg-populartoursslider tg-populartours owl-carousel">
                        @isset($recentPosts)
                            @foreach($recentPosts as $post)
                                <div class="item tg-populartour">
                                    <figure>
                                        <a href="{{route('post.find',$post->slug)}}"><img
                                                style="height: 256px;width: 360px"
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
</section>
<!--************************************
        Main End
*************************************-->
