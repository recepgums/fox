@php
    $posts = \App\Models\Post::where('type','post')->get();
@endphp

<!--************************************
				Inner Banner Start
		*************************************-->
<section class="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll"
         data-image-src="theme/images/parallax/bgparallax-05.jpg">
    <div class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Latest News</h1>
                    <h2>Wherever You Want To Travel</h2>
                    <ol class="tg-breadcrumb">
                        <li><a href="javascript:void(0);">Home</a></li>
                        <li class="tg-active">Listing</li>
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
<main id="tg-main" class="tg-main tg-sectionspace tg-haslayout">
    <div class="container-fluid">
        <div class="row">
            <div class="tg-sectionspace tg-haslayout">
                <div class="container">
                    <div class="row">
                        @isset($posts)
                            @foreach($posts as $post)
                                <div class="col-md-4">
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
                                </div>
                    @endforeach
                    @endisset
                </div>
            </div>
        </div>
    </div>
</main>
<!--************************************
        Main End
*************************************-->
