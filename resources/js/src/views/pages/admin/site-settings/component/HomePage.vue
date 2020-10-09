<template>

    <!--HomeSlider-->
    <vs-tabs position="left" color="danger">
        <vs-tab :label="$t('homepageSliderArea')" class="mb-5 ml-5 mt-5 sm:w-11/12">

            <vx-card v-for="(option,index)  in HomeUnderMenuSlider" :key="index" class="mb-5 ml-2 mr-5 mt-5">
                <div class="vx-row">
                    <!-- <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                          <vs-input :label="'H1 Aciklama'"  v-model="option.h1" class="mt-5 w-full"  />
                     </div>
                     <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                        <vs-input :label="'H2 Aciklama'"  v-model="option.h2" class="mt-5 w-full"  />
                     </div>-->
                    <!--<div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                        <vs-input :label="'Video Url'"  v-model="option.video" class="mt-5 w-full"  />
                    </div>
                    <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                         <vs-input :label="'Button Url'"  v-model="option.url" class="mt-5 w-full"  />
                    </div>-->
                    <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                        <img v-if="!option.image" src="@assets/images/place-holders/slider-to-here.png" height="480px"
                             width="720px" class="card-img-top"/>
                        <img v-else :src="option.image" height="480px" width="720px" class="card-img-top"/>
                        <div>
                            <input type="file" class="hidden" :ref="'sliderImage'+index"
                                   @change="sliderUpload($event,index,'HomeUnderMenuSlider')" accept="image/*">
                            <vs-button class="ml-3 sm:mb-0 mb-2" @click="openFileInput('sliderImage'+index)">
                                {{$t('addSlider')}}
                            </vs-button>
                        </div>
                    </div>
                </div>
                <vs-button class="bg-danger mt-3" @click="removeThis(index,'HomeUnderMenuSlider')">
                    {{$t('removeThisSLider')}}
                </vs-button>
            </vx-card>

            <vs-button class="mr-6" @click="addOptions('HomeUnderMenuSlider')">{{$t('AddNew')}}</vs-button>
            <div class="flex flex-wrap items-center justify-end">
                <vs-button class="ml-auto mt-2" @click="SaveData('HomeUnderMenuSlider')">{{$t('save')}}</vs-button>
            </div>
        </vs-tab>


        <!--ICON-->

        <vs-tab>
            <div :label="'Iconlar'" class="mb-5 ml-5 mt-5 sm:w-11/12">
                <vx-card v-for="(option,index)  in IconImages" :key="index" class="mb-5 ml-2 mr-5 mt-5">
                    <div class="vx-row">
                        <div class="vx-col sm:w-8/12 mb-2">
                            <div class="vx-row">
                                <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                                    <img v-if="!option.image" src="@assets/images/place-holders/slider-to-here.png"
                                         height="80px" width="80px" class="card-img-top"/>
                                    <img v-else :src="option.image" height="80px" width="80px" class="card-img-top"/>
                                    <vs-input :label="'Icon adı'" v-model="option.name" class="mt-5 ml-5"/>
                                    <div>
                                        <input type="file" class="hidden" :ref="'IconImageRef'+index"
                                               @change="sliderUpload($event,index,'IconImages')" accept="image/*">
                                        <vs-button class="ml-3 sm:mb-0  mt-10 py-3"
                                                   @click="openFileInput('IconImageRef'+index)">Icon Ekleyin
                                        </vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col sm:w-2/12  mt-5">
                            <feather-icon @click="removeThis(index,'IconImages')" icon="XCircleIcon"
                                          svgClasses="w-16 h-16 text-red"></feather-icon>
                        </div>
                        <div class="vx-col sm:w-2/12  mt-5">
                            <feather-icon @click="addOptions('IconImages')" icon="PlusCircleIcon"
                                          svgClasses="w-16 h-16 text-red"></feather-icon>
                        </div>
                    </div>
                </vx-card>
                <vs-button class="mr-6 mt-5" v-show="IconImages.length==0" @click="addOptions('IconImages')">
                    {{$t('AddNew')}}
                </vs-button>
            </div>
            <vs-button class="ml-auto mt-2" @click="SaveData('IconImages')">{{$t('save')}}</vs-button>
        </vs-tab>


        <!--ANASAYFA 4 LÜ RESİM-->

        <vs-tab :label="'Anasayfa 4lü Resimler'" class="mb-5 ml-5 mt-5 sm:w-11/12">
            <vx-card v-for="(option,index)  in fourImages" :key="index" class="mb-5 ml-2 mr-5 mt-5">
                <div class="vx-row">
                    <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                        <img v-if="!option.image" src="@assets/images/place-holders/slider-to-here.png" height="200px"
                             width="200px" class="card-img-top"/>
                        <img v-else :src="option.image" height="200px" width="200px" class="card-img-top"/>
                        <div>
                            <input type="file" class="hidden" :ref="'sliderImage'+index"
                                   @change="sliderUpload($event,index,'fourImages')" accept="image/*">
                            <vs-button class="ml-3 sm:mb-0 mb-2" @click="openFileInput('sliderImage'+index)">
                                Resim Seç
                            </vs-button>
                        </div>
                        <vs-input :label="'Lokasyon Adı'" v-model="option.name" placeholder="Lokasyon"
                                  class="mt-5 ml-5"/>
                        <vs-input :label="'Yönlendirilecek sayfa urlsi'" v-model="option.url"
                                  placeholder=" örn: https://fox-dmc/russia" class="mt-5 ml-5"/>
                    </div>
                </div>
                <vs-button class="bg-danger mt-3" @click="removeThis(index,'fourImages')">
                    Bu Resmi Sil
                </vs-button>
            </vx-card>
            <vs-button class="mr-6" @click="addOptions('fourImages')">Yeni Resim Ekle</vs-button>
            <!--            <vs-button class="mr-6 mt-5" v-show="fourImages.length==0" @click="addOptions('fourImages')" >İlk Resmi Ekle</vs-button>-->
            <div class="flex flex-wrap items-center justify-end">
                <vs-button class="ml-auto mt-2" @click="SaveData('fourImages')">{{$t('save')}}</vs-button>
            </div>
        </vs-tab>

        <!--Email Abone Olma Yazısı-->

        <vs-tab :label="'Email Abone Olma Yazısı'" class="mt-5 sm:w-12/12">
            <vx-card>
                <div class="flex flex-wrap items-center ml-5 " style="height: 400px">
                    <span>E-mail Abone Olma-Büyük Yazılar</span>
                    <quill-editor v-model="subscribeDiscount.content" :label="'subscribeDiscount'"
                                  style="height: 50px;margin-bottom: 150px"/>
                    <span>E-mail Abone Olma-Küçük Yazılar</span>
                    <quill-editor v-model="subscribeDiscount.subContent" :label="'Küçük yazı fontu '"
                                  style="height: 50px;margin-bottom: 150px"/>

                    <span class="text-danger text-sm" v-show="errors.has('subscribeDiscount')">{{ errors.first('Content') ? $t('Content') : ''}}</span>
                </div>
            </vx-card>
            <vs-button class="ml-auto mt-2" @click="SaveData('subscribeDiscount')">{{$t('save')}}</vs-button>
        </vs-tab>

        <!--HOMEPAGE ABOUT US-->
        <vs-tab :label="$t('homepageaboutArea')" class="mb-5 ml-5 mt-5 sm:w-11/12">
            <vx-card>
                <div class="flex flex-wrap items-center mb-5 mt-5 ml-5 h-full">
                    <span>{{$t('Content')}}</span>
                    <quill-editor v-model="about.homePageDesc" :label="$t('Content')" height="600"
                                  style="height: 350px;margin-bottom: 150px"/>
                    <span class="text-danger text-sm" v-show="errors.has('Content')">{{ errors.first('Content') ? $t('Content') : ''}}</span>
                </div>
            </vx-card>
            <vs-button class="ml-auto mt-2" @click="SaveData('about')">{{$t('save')}}</vs-button>
        </vs-tab>

    </vs-tabs>


</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import vSelect from 'vue-select'

    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor} from 'vue-quill-editor'

    export default {
        components: {
            flatPickr,
            quillEditor,
            vSelect
        },

        data () {
            return {
                HomeUnderMenuSlider:
                    [
                        {
                            image: 'https://via.placeholder.com/500.png'
                        }
                    ],
                fourImages:
                    [
                        {
                            image: 'https://via.placeholder.com/500.png',
                            name: 'Location',
                            url: ''
                        }
                    ],
                subscribeDiscount:
                    {
                        content: 'Email Abone Olma Kampanyası',
                        subContent: 'Daha küçük yazı boyutu olan alan'
                    },
                IconImages:
                    [
                        {
                            image: 'https://via.placeholder.com/500.png',
                            name: 'Icon Name'
                        }
                    ],
                QuickServiceList:
                    [
                        {
                            key: ''
                        }
                    ],
                fourBox:
                    {
                        allusers: '',
                        providers: '',
                        employments: '',
                        exportvolume: ''
                    },


                about: {
                    homePageDesc: ''
                }
            }
        },
        methods: {
            addOptions (type) {
                this[type].push({})
            },
            removeThis (index, type) {
                this[type].splice(index, 1)
            },
            SaveData (dataType) {
                const obj = {
                    [dataType]: this[dataType],
                    type: dataType
                }
                console.log(obj)
                this.$store.dispatch('custom/addItem', obj).then((response) => {
                    this.$vs.notify({
                        title: 'Başarılı',
                        text: ' İçerik Başarıyla Eklendi',
                        iconPack: 'feather',
                        icon: 'icon-success',
                        color: 'success'
                    })

                }).catch(error => {
                    this.$vs.notify({
                        title: 'Hata',
                        text: 'İçerik Eklenemedi.',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    })
                })
            },

            sliderUpload (input, index, type) {
                //console.log(input.target.files[0])
                if (input.target.files && input.target.files[0]) {
                    const reader = new FileReader()
                    reader.onload = e => {
                        return this[type][index].image = e.target.result
                    }
                    reader.readAsDataURL(input.target.files[0])
                }
            },
            openFileInput (type) {
                return this.$refs[type][0].click()
            }

        },
        computed: {
            activeUserInfo () {
                return this.$store.state.AppActiveUser
            }
        },
        created () {
            this.$store.dispatch('custom/fetchItems')
                .then((response) => {
                    response.data.forEach(element => {
                        if (element.type === 'HomeUnderMenuSlider') {
                            this[element.type].push(JSON.parse(element.JsonData)[element.type])
                            this[element.type].splice(0, 1)
                            this[element.type] = this[element.type][0]
                        } else {
                            this[element.type] = JSON.parse(element.JsonData)[element.type]
                        }

                    })

                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }
</script>
