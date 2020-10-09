@php
    $tourPhotos = \App\Models\Gallery::all();
$contents = Helper::findCustomData('aboutUsPage');
$imagesAndContents = Helper::findCustomData('AboutUSMembers');
@endphp
<!--************************************
				Inner Banner Start
		*************************************-->
<section
    class="tg-parallax tg-innerbanner"
    data-appear-top-offset="600"
    data-parallax="scroll"
    data-image-src="theme/images/parallax/bgparallax-logo.jpg"
>
    <div
        class="tg-sectionspace tg-haslayout"
        style="background: rgb(255 255 255 / 0%)"
    >
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
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
    <!--************************************
                Features Start
        *************************************-->
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="tg-features">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        @isset($contents['first'])   {!! $contents['first'] !!}@endisset
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--************************************
                About Us Start
        *************************************-->
    <section class="tg-aboutus">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="row">
                @isset($imagesAndContents[0]['image'])
                    <figure
                        data-vide-bg="poster: {{substr($imagesAndContents[0]['image'],1)}}"
                        data-vide-options="position: 0% 50%"
                    >
                        <img src="{{substr($imagesAndContents[0]['image'],1)}}" alt="">
                    </figure>
                @endisset
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="row">
                <div class="tg-textbox">
                    <div class="tg-description">
                        @isset($imagesAndContents[0]['content']){!!$imagesAndContents[0]['content']  !!}@endisset
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-right">
            <div class="row">
                @isset($imagesAndContents[1]['image'])
                    <figure
                        data-vide-bg="poster: {{substr($imagesAndContents[1]['image'],1)}}"
                        data-vide-options="position: 0% 50%"
                    >
                        <img src="{{substr($imagesAndContents[1]['image'],1)}}" alt="">

                    </figure>
                @endisset
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left">
            <div class="row">
                <div class="tg-textbox">
                    <div class="tg-description">
                        @isset($imagesAndContents[1]['content']){!!$imagesAndContents[1]['content']  !!}@endisset
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="tg-features">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead">
                            <div class="tg-description">
                                @isset($contents['second'])   {!! $contents['second'] !!}@endisset
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tg-aboutus">
        @isset($imagesAndContents)
            @foreach($imagesAndContents as $key=>$item)
                @if($key>1)
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="row">
                        @isset($item['image'])
                        <figure
                            data-vide-bg="poster: {{$item['image']}}"
                            data-vide-options="position: 0% 50%"
                        >
                            <img src="{{substr($imagesAndContents[2]['image'],1)}}" alt="">


                        </figure>
                        @endisset
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="row">
                        <div class="tg-textbox">
                            @isset($item['content']){!! $item['content'] !!}@endisset
                        </div>
                    </div>
                </div>
                @endif
            @endforeach
        @endisset
    </section>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="tg-features">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead">
                            <div class="tg-description">
                                @isset($contents['third'])   {!! $contents['third'] !!}@endisset

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-top: 50px">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div id="tg-content" class="tg-content">
                        <div class="tg-listing tg-listingvtwo">
                            <div class="clearfix"></div>
                            <div id="momentsTours" class="row">
                                @isset($tourPhotos)
                                    @foreach($tourPhotos as $photo)
                                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                            <div class="tg-trendingtrip">
                                                <figure>
                                                    <a
                                                        href="{{$photo->slug}}"
                                                        data-lightbox="ourTours"
                                                    >
                                                        <img
                                                            src="{{$photo->slug}}"
                                                            alt="image destinations"
                                                        />
                                                        <div class="tg-hover">
                                <span
                                ><i class="fa fa-search-plus fa-2x"></i
                                    ></span>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    @endforeach
                                @endisset
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--************************************
                About Us End
        *************************************-->
    <!--************************************
                Features End
        *************************************-->
    <!--************************************
                Call To Action Start
        *************************************-->
    <section
        class="tg-parallax"
        data-appear-top-offset="600"
        data-parallax="scroll"
        data-image-src="theme/images/parallax/bgparallax-02.jpg"
    >
        <div class="tg-sectionspace tg-haslayout">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-calltoaction">
                            <h2>
                                Subscribe for our mailing to get latest updates,<br/>
                                offers and special promotions.
                            </h2>
                            <div class="tg-description">
                                <p>
                                    Subscribers will get $50 reduction and surprise gifts
                                    from the first booking with the <b>#TravelSmart</b> gift
                                    code
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4"
                    >
                        <form class="tg-formtheme tg-formnewsletter">
                            <fieldset>
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    placeholder="Your Email"
                                />
                                <button type="submit">
                                    <img
                                        src="theme/images/icons/icon-08.png"
                                        alt="image destinations"
                                    />
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--************************************
                Call To Action End
        *************************************-->
</main>
<!--************************************
          Main End
  *************************************-->
