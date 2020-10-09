<template>
  <div class="vx-col w-full md:w-12/12 mb-base">


             <vx-card >
               <div class="flex flex-wrap items-center mb-5 mt-5 ml-5 h-full">
                      <span>Birinci yazı alanı</span>
                      <quill-editor v-model="aboutUsPage.first" :label="'Birinci yazı alanı'" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.birinci')">{{ errors.first('first') ? 'Birinci yazı alanı' : ''}}</span>
               </div>
               <div class="flex flex-wrap items-center mb-5 mt-10 ml-5 h-full">
                      <span>İkinci yazı alanı</span>
                      <quill-editor v-model="aboutUsPage.second" :label="'İkinci yazı alanı'" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.ikinci')">{{ errors.first('second') ? 'İkinci yazı alanı' : ''}}</span>
               </div>
               <div class="flex flex-wrap items-center mb-5 mt-10 ml-5 h-full">
                      <span>Üçüncü yazı alanı</span>
                      <quill-editor v-model="aboutUsPage.third" :label="'Üçüncü yazı alanı'" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.ucuncu')">{{ errors.first('third') ? 'Üçüncü yazı alanı' : ''}}</span>
               </div>
            </vx-card>
           <vs-button class="ml-auto mt-2" @click="SaveData('aboutUsPage')">{{$t('save')}}</vs-button>


            <vx-card v-for="(option,index)  in AboutUSMembers" :key="index" class="mb-5 ml-2 mr-5 mt-5" >
                    <div class="vx-row">
                        <div class="flex flex-wrap items-center mb-5 mt-10 ml-5 h-full">
                            <span>Resmin Yanındaki Yazı</span>
                            <quill-editor v-model="option.content" :label="$t('vision')" height="600" />
                            <span class="text-danger text-sm" v-show="errors.has('AboutUSMembers.vision')">{{ errors.first('vision') ? 'Resmin Yanındaki Yazı' : ''}}</span>
                        </div>
                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                            <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                          <img v-if="!option.image"  src="https://via.placeholder.com/150.png"  height="150px"  width="150px" class="card-img-top" />
                          <img v-else :src="option.image"   height="150px"  width="150px" class="card-img-top" />
                        <div>
                            <input type="file"  class=a"hidden" :ref="'AboutUSMembers'+index" @change="sliderUpload($event,index,'AboutUSMembers')" accept="image/*">
                            <vs-button class="ml-3 sm:mb-0 mb-2" @click="openFileInput('AboutUSMembers'+index)">{{$t('AboutUSMembers')}}</vs-button>
                        </div>
                        </div>
                        </div>
                    </div>
                    <vs-button class="bg-danger mt-3" @click="removeThis(index,'AboutUSMembers')" >{{$t('removeThisSection')}}</vs-button>
                </vx-card>

                <vs-button class="mr-6" @click="addOptions('AboutUSMembers')" >{{$t('AddNew')}}</vs-button>
                <div class="flex flex-wrap items-center justify-end">
                    <vs-button class="ml-auto mt-2" @click="SaveData('AboutUSMembers')">{{$t('save')}}</vs-button>
                </div>
  </div>

</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    flatPickr,
    vSelect,
    quillEditor
  },
  data () {
    return {
        title: '',
        AboutUSMembers:
            [
                {
                    content: '',
                    image: '',
                }
            ],
            aboutUsPage:{
                first : '',
                second : '',
                third : ''
              }
    }
  },
  methods:{
    addOptions (type) {
      this[type].push({})
    },
    removeThis (index, type) {
      this[type].splice(index, 1)
    },
     sliderUpload (input,index,type) {
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
          text:' İçerik Başarıyla Eklendi',
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
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.auth.user
    }
  },
  created () {
    this.$store.dispatch('custom/fetchItems')
      .then((response) => {
        response.data.forEach(element => {
          if (element.type === 'AboutUSMembers') {
            this[element.type].push(JSON.parse(element.JsonData)[element.type])
            this[element.type].splice(0, 1)
            this[element.type] = this[element.type][0]
          } else {
            this[element.type] = JSON.parse(element.JsonData)[element.type]
          }
        })
      })
      .catch((error) => { console.log(error) })
  }
}
</script>
