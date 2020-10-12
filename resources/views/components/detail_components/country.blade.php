@php
$tours = \App\Models\Post::where('type','service')->where('slug',$itemId)->first();
$tours = \App\Models\Post::where('type','service')->where('options','like','%"id":'.$tours->id.'%')->get();
    @endphp
<section class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            @isset($tours)
                @foreach($tours as $key=> $tour)
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        @if($key%2==0)
                            <div class="tg-topdestination">
                                <figure>
                                    <a href="{{route('tour.find',$tour->slug)}}" class="tg-btnviewall">View All Tours</a>
                                    <a href="{{route('tour.find',$tour->slug)}}"
                                    ><img
                                            src="{{$tour->thumbnail}}"
                                            alt="image description"
                                        /></a>
                                    <figcaption>
                                        <h2><a href="{{route('tour.find',$tour->slug)}}">{{$tour->title}}</a></h2>
                                    </figcaption>
                                </figure>
                            </div>
                        @else
                            @if(isset($tours[$key+1]->slug))
                            <div class="tg-topdestination">
                                <figure>
                                    <a href="{{route('tour.find',$tours[$key+1]->slug)}}" class="tg-btnviewall"
                                    >View All Tours</a
                                    >
                                    <a href="{{route('tour.find',$tours[$key+1]->slug)}}"
                                    ><img
                                            src="{{$tours[$key+1]->thumbnail}}"
                                            alt="image description"
                                        /></a>
                                    <figcaption>
                                        <h2><a href="{{route('tour.find',$tours[$key+1]->slug)}}">{{$tours[$key+1]->title}}</a></h2>
                                    </figcaption>
                                </figure>
                            </div>
                                @endif
                        @endif
                    </div>
                @endforeach
            @endisset
        </div>
    </div>
</section>

<!--************************************
          Main End
  *************************************-->
