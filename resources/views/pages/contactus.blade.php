
      <!--************************************
				Inner Banner Start
		*************************************-->
      <section
        class="tg-parallax tg-innerbanner"
        data-appear-top-offset="600"
        data-parallax="scroll"
        data-image-src="theme/images/parallax/bgparallax-05.jpg"
      >
        <div class="tg-sectionspace tg-haslayout">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>Contact Us</h1>
                <h2>Wherever You Want To Travel</h2>
                <ol class="tg-breadcrumb">
                  <li><a href="javascript:void(0);">Home</a></li>
                  <li class="tg-active">Contact Us</li>
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
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div id="tg-content" class="tg-content">
                <ul class="tg-contactinfo">
                  <li>
                    <span class="tg-contactinfoicon"
                      ><i class="fa fa-phone"></i
                    ></span>
                    <h2>Phone</h2>
                    <div class="tg-description">
                      <a href="tel:+90 216 550 1">+90 216 550 1</a>
                    </div>
                  </li>
                  <li>
                    <span class="tg-contactinfoicon"
                      ><i class="fa fa-map-marker"></i
                    ></span>
                    <h2>Visit Our Location</h2>
                    <address>
                      Caferaga Mh, General Asim Gunduz Cad. NO:80/8 Kadikoy -
                      Istanbul/TURKEY
                    </address>
                    <strong
                      ><a href="javascript:void(0);">Get Directions</a></strong
                    >
                  </li>
                  <li>
                    <span class="tg-contactinfoicon"
                      ><i class="fa fa-commenting-o"></i
                    ></span>
                    <h2>Mail</h2>
                    <div class="tg-description">
                      <a href="mailto:info@foxdmc.com">info@foxdmc.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="container ">
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
      <br><br>
      <!--************************************
				Main End
		*************************************-->
