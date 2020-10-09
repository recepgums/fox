@php
    $findServiceswithoutId5 = Helper::findServiceswithoutId();
    $QuickServiceList = Helper::findCustomData('QuickServiceList');
    $service = $findServiceswithoutId5[0];
@endphp


<!--************************************
				Inner Banner Start
		*************************************-->
<section
    class="tg-parallax tg-innerbanner"
    data-appear-top-offset="600"
    data-parallax="scroll"
    data-image-src="{{$findServiceswithoutId5[0]->thumbnail}}"
>
    <div class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Itineraries</h1>
                    <h2>{{$service->title}}</h2>
                    <ol class="tg-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="tg-active">Itineraries</li>
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
            <div
                class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1"
            >
                <div id="tg-content" class="tg-content">
                    <div class="tg-blogdetail">
                        <div class="tg-detailbox">
                            <div class="tg-description">
                               {!! $service->content !!}
                            </div>
                        </div>
                        <div class="tg-leaveyourcomment">
                            <div class="tg-heading tg-headingvtwo">
                                <h4>SUBJECT : 3N4D ISTANBUL TOUR BY FOX DMC</h4>
                            </div>
                            <form class="tg-formtheme tg-formleavecomment" id="myForm" action="{{route('contact.form')}}" method="post">
                                @csrf
                                <fieldset>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    placeholder="Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    class="form-control"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    placeholder="Mail Address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                              <textarea
                                  name="message"
                                  placeholder="Please Ask Your Question"
                              ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                            <a onclick="document.getElementById('myForm').submit()" class="tg-btn"><span>submit</span></a>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!--************************************
          Main End
  *************************************-->
