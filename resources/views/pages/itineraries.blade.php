@php
    $countries =\App\Models\Post::where('type','service')->where('options','not like','%"id":%')->get();
@endphp
<!--************************************
				Inner Banner Start
		*************************************-->

<!--************************************
          Inner Banner End
  *************************************-->
<!--************************************
          Main Start
  *************************************-->
<section class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            @isset($countries)
                @foreach($countries as $key=> $country)
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="tg-topdestination">
                            <figure>
                                <a href="{{route('service.find',$country->slug)}}" class="tg-btnviewall"
                                >View All Tours</a
                                >
                                <a href="{{route('service.find',$country->slug)}}"
                                ><img
                                        src="{{$country->thumbnail}}"
                                        alt="image description"
                                    /></a>
                                <figcaption>
                                    <h2><a href="{{route('service.find',$country->slug)}}">{{$country->title}}</a></h2>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    @if($key==1 or $key==2)
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            @if($key==1)
                                <div class="tg-topdestination">
                                    <figure>
                                        <a href="{{route('service.find',$country->slug)}}" class="tg-btnviewall"
                                        >View All Tours</a
                                        >
                                        <a href="{{route('service.find',$country->slug)}}"
                                        ><img
                                                src="{{$country->thumbnail}}"
                                                alt="image description"
                                            /></a>
                                        <figcaption>
                                            <h2>
                                                <a href="{{route('service.find',$country->slug)}}">{{$country->title}}</a>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                </div>
                            @endif
                            @if($key==2)
                                <div class="tg-topdestination">
                                    <figure>
                                        <a href="{{route('service.find',$country->slug)}}" class="tg-btnviewall"
                                        >View All Tours</a
                                        >
                                        <a href="{{route('service.find',$country->slug)}}"
                                        ><img
                                                src="{{$country->thumbnail}}"
                                                alt="image description"
                                            /></a>
                                        <figcaption>
                                            <h2>
                                                <a href="{{route('service.find',$country->slug)}}">{{$country->title}}</a>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                </div>
                            @endif
                        </div>
                    @endif
                @endforeach
            @endisset
        </div>
    </div>
</section>

<!--************************************
          Main End
  *************************************-->
