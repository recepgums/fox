<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? $t('addPost'): $t('updatePost') }}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">


        <div class="vx-row match-height">
          <div class="vx-col w-full md:w-11/12 mb-base">
            <vx-card>
              <vs-tabs>
                <vs-tab :label="$t('textArea')">
                  <div class="mt-3">
                    <!-- NAME -->
                    <vs-input :label="$t('postName')" v-model="title" class="mt-5 w-full" name="title" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title') ? $t('titleRequired') : ''}}</span>

                    <div class="flex flex-wrap items-center mb-20 mt-20 h-full">
                      <span>{{$t('postContent')}}</span>
                      <quill-editor  :label="$t('postContent')" name="dataDescription" v-model="content"></quill-editor>
                      <span class="text-danger text-sm" v-show="errors.has('content')">{{ errors.first('content') ? $t('descriptionRequired') : ''}}</span>
                    </div>



                      <span>{{$t('relevantServices')}}</span>
                     <v-select
                             multiple
                            v-model="relevantServices"
                            :options="data.services"
                            @search="query => search = query"
                            :getOptionLabel="option => option.title"
                            :filterable="true"/>



                    <!--  STATUS -->
                    <vs-select v-model="status" :label="$t('status')"  name="status" class="mt-5 w-full">
                      <vs-select-item :key="status.value" :value="status.value" :text="status.text" v-for="status in status_choices" />
                      <span class="text-danger text-sm" v-show="errors.has('status')">{{ errors.first('status') ? $t('statusRequired') : '' }}</span>
                    </vs-select>

                  </div>
                </vs-tab>
                <vs-tab :label="$t('ImageArea')">
                  <div class="vx-col w-full sm:w-10/12 lg:w-2/5 mb-base">
                    <vx-card>
                      <div slot="no-body">
                        <img :src="thumbnail" alt="Resim Yükle" class="responsive card-img-top">
                      </div>
                      <div class="flex justify-between flex-wrap">
                        <input type="file" class="hidden" ref="updateImgInput" @change="update_avatar" accept="image/*">
                        <vs-button class="mr-4 sm:mb-0 mb-2" @click="$refs.updateImgInput.click()">{{$t('ImageUpload') ? $t('thumbnailRequired') : ''}}</vs-button>
                      </div>
                    </vx-card>

                   </div>
                </vs-tab>
                <vs-tab :label="$t('SeoArea')">
                  <div class="mt-3">
                    <!-- SEO TITLE -->
                    <vs-input :label="$t('seoTitle')" v-model="seo_title" class="mt-5 w-full" name="seo_title" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('seo_title')">{{ errors.first('seo_title') ? $t('seoTitleRequiredMax71Char') : '' }}</span>
                    <vs-progress :percent="Number(seo_title.length)" :color="getPopularityColorTitle(Number(seo_title.length))" class="shadow-md" />

                    <!-- SEO DESCRIPTION -->
                    <vs-input :label="$t('seoDescription')" v-model="seo_description" class="mt-5 w-full" name="seo_description" v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('seo_description')">{{ errors.first('seo_description') ? $t('seoDescRequiredMax161Char') : '' }}</span>
                    <vs-progress :percent="Number(seo_description.length)" :color="getPopularityColorDescription(Number(seo_description.length))" class="shadow-md" />
                  </div>
                </vs-tab>
              </vs-tabs>
            </vx-card>
          </div>
        </div>

        <div class="flex flex-wrap items-center p-6" slot="footer">
          <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{$t('save')}}</vs-button>
          <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{$t('cancel')}}</vs-button>
        </div>

      </div>
    </VuePerfectScrollbar>


  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import i18n from '@/i18n/i18n'
  import vSelect from 'vue-select'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
        if (this.data.newData) {
        this.initValues()
        this.$validator.reset()
      } else {
        const {  id, title, content, status, thumbnail, seo_title, seo_description} = JSON.parse(JSON.stringify(this.data.data))
        console.log('active:', JSON.parse(JSON.stringify(this.data.data)))
        this.id = id
        this.title = title
        this.content = content
        this.seo_title = seo_title
        this.seo_description = seo_description
        this.status = status
        this.thumbnail = thumbnail
        this.category_id = JSON.stringify(this.data.data.category.id)
        this.relevantServices = JSON.parse(this.data.data.options).relevantServices

      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataUsage_amount } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data () {
    return {
      type: 'service',
      thumbnail :null,
      id: null,
      search:'',
      title:'',
      content: '',
      seo_title: '',
      seo_description: '',
      status: '',
      category_id: '',
      category:'',
      categories:[],
      relevantServices:[],
      status_choices: [
        {text:i18n.t('active'), value:1},
        {text:i18n.t('deActive'), value:0}
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          this.$validator.reset()
          this.initValues()
        }
      },
      categories () {
        return this.$store.state.post.categories
      },
       filtered () {
            return this.data.services.filter(service => service.includes(this.search))
            },

    },
    isFormValid () {
      return !this.errors.any()
      && this.title
      && this.content
      && this.category_id
      && this.thumbnail
      && this.seo_title
      && this.seo_description
    }
  },
  created () {
    this.$store.dispatch('post/fetchItems')
  },
  mounted () {
    this.isMounted = true
  },
  methods: {
    getPopularityColorTitle (num) {
      if (num > 71) return 'dark'
      if (num >= 60 && num <= 71) return 'success'
      if (num < 60) return 'primary'
      return 'primary'
    },
    getPopularityColorDescription (num) {
      if (num > 160) return 'dark'
      if (num >= 145 && num <= 170) return 'success'
      if (num < 145) return 'primary'
      return 'primary'
    },
    initValues () {
      if (this.data.id) return
      this.id = null
      this.title = i18n.t('title')
      this.content = i18n.t('content')
      this.seo_title = i18n.t('seo_title')
      this.seo_description = i18n.t('seo_description')
      this.thumbnail = 'https://via.placeholder.com/500.png'
      this.status = 1
      this.category_id = 3
    },
    submitData () {
      this.$vs.loading()
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.id,
            title: this.title,
            category_id: this.category_id,
            content:this.content,
            options:{relevantServices:this.relevantServices},
            seo_title:this.seo_title,
            seo_description:this.seo_description,
            thumbnail: this.thumbnail,
            status: this.status,
            type: this.type,

          }
          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('post/updateItem', obj).then((response) => {
              this.$vs.loading.close()
              this.$vs.notify({
                title: i18n.t('success'),
                text: i18n.t('SuccessfullyUpdated'),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            }).catch(error => {
               console.log(error)
              this.$vs.loading.close()
              this.$vs.notify({
                title: i18n.t('error'),
                text: i18n.t('CouldntUpdated'),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
          } else {
            delete obj.id
            this.$store.dispatch('post/addItem', obj).then((response) => {
              this.$vs.loading.close()
              this.$vs.notify({
                title: i18n.t('success'),
                text: i18n.t('SuccessfullyAdded'),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })
            })
              .catch(error => {
                console.log(error)
                this.$vs.loading.close()
                this.$vs.notify({
                  title: i18n.t('error'),
                  text: i18n.t('CouldntAdd'),
                  iconPack: 'feather',
                  icon: 'icon-alert-circle',
                  color: 'danger'
                })
              })
          }
          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    update_avatar (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.thumbnail = e.target.result
          console.log('IMAGEURL', e.target.result)
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
  },
  components: {
    VuePerfectScrollbar,
    quillEditor,
     'v-select': vSelect,
  }
}
</script>

<style lang="scss" scoped>
  .add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
      z-index: 52010;
    }

    .vs-sidebar {
      max-width: 1240px !important;
    }
    ::v-deep .vs-sidebar {
      z-index: 52010;
      width: 1240px !important;
      max-width: 90vw ;

      .img-upload {
        margin-top: 2rem;

        .con-img-upload {
          padding: 0;
        }

        .con-input-upload {
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
  }


</style>
