<template>
  <div class="container">
      <h2>热电厂二期项目</h2>
      <input class="form-control search" placeholder="搜索过滤建筑物名称" v-model="searchName">
      <h3 class="title">单位建筑</h3>
          <div class="project"  v-for="(building,index) in handleBuildings">
            <h3 class="text-center">{{ building.name }}</h3>
            <div class="row">
                <div class="col-xs-3">
                  <span class="des-title">计划开始</span>
                  <span class="des-data">{{ building.start_date }}</span>
                </div>
                <div class="col-xs-3">
                  <span class="des-title">计划完成</span>
                  <span class="des-data">{{ building.end_date }}</span>
                </div>
                <div class="col-xs-3">
                  <span class="des-title">计划工期</span>
                  <span class="des-data">{{ building.total_duration }}天</span>
                </div>
                <div class="col-xs-3">
                  <span class="des-title">已经施工</span>
                  <span class="des-data">{{ building.total_elapsed }}天</span>
                </div>
            </div>
            <div class="speed">
              <div class="speed-real clearfix" v-bind:style="{ width: building.real_progress+'%'}">
                <span class="speed-title">实际进度</span>
                <span class="speed-data real-color">{{ building.real_progress}}%</span>
              </div>
              <div class="progress">
                <div class="progress-bar real-color-bg" role="progressbar" v-bind:style="{ width: building.real_progress+'%'}">
                </div>
                <div class="progress-bar plan-color-bg" role="progressbar" v-bind:style="{width:building.plan_progress+'%'}">
                </div>
              </div>
              <div class="speed-plan clearfix" v-bind:style="{width:building.plan_progress+'%'}">
                <span class="speed-title">计划进度</span>
                <span class="speed-data plan-color">{{ building.plan_progress }}%</span>
              </div> 
            </div>
            <div :id="'pro_'+index">
              <p class="text-center isshow" data-toggle="collapse" :data-parent="'#pro_'+index" :href="'#pro_item_'+index" @click="showbtn">
                  {{showBtnMsg}}<span class="glyphicon glyphicon-chevron-down"></span>
              </p>
              <h4 class="text-center">分部工程</h4>
              <div class="pro-list-box collapse" :id="'pro_item_'+index">
                  <div class="pro-list"  v-for="part in building.parts">  
                    <div class="pro-item" v-if="part.isshow">
                      <!-- <div v-bind="cc = $index"></div> -->
                      <h5 class="text-center"> {{building.name}}&nbsp;{{part.name}}</h5>
                      <div class="row">
                        <div class="col-xs-3">
                          <span class="des-title">计划开始</span>
                          <span class="des-data">{{ part.start_date }}</span>
                        </div>
                        <div class="col-xs-3">
                          <span class="des-title">计划完成</span>
                          <span class="des-data">{{ part.end_date }}</span>
                        </div>
                        <div class="col-xs-3">
                          <span class="des-title">计划工期</span>
                          <span class="des-data">{{ part.total_duration }}天</span>
                        </div>
                        <div class="col-xs-3">
                          <span class="des-title">已经施工</span>
                          <span class="des-data">{{ part.total_elapsed }}天</span>
                        </div>
                      </div>
                      <div class="speed">
                        <div class="speed-real clearfix"  v-bind:style="{ width: part.real_progress+'%'}">
                          <span class="speed-title">实际进度</span>
                          <span class="speed-data real-color">{{ part.real_progress }}%</span>
                        </div>
                        <div class="progress">
                          <div class="progress-bar real-color-bg" role="progressbar" v-bind:style="{ width: part.real_progress+'%'}">
                          </div>
                          <div class="progress-bar plan-color-bg" role="progressbar" v-bind:style="{ width: part.plan_progress+'%'}">
                          </div>
                        </div>
                        <div class="speed-plan clearfix"  v-bind:style="{ width: part.plan_progress+'%'}">
                          <span class="speed-title">计划进度</span>
                          <span class="speed-data plan-color">{{ part.plan_progress }}%</span>
                        </div> 
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
            
          </div>
  </div>
</template>

<script>
export default {
  props: ['db'],
  data () {
    return {
      searchName: '',
      showBtnMsg: '显示分部工程进度'
    }
  },
  computed:{
    handleBuildings:function(){
      let buildings = this.db.buildings;
      let searchName = this.searchName;

      for(var key in buildings) {
        buildings[key].plan_progress = this.progressHandle(buildings[key].plan_progress)
        buildings[key].real_progress = this.progressHandle(buildings[key].real_progress)
        buildings[key].start_date = this.dateHandle(buildings[key].start_date)
        buildings[key].end_date = this.dateHandle(buildings[key].end_date)

        for(var o in buildings[key].parts){
          buildings[key].parts[o].plan_progress = this.progressHandle(buildings[key].parts[o].plan_progress)
          buildings[key].parts[o].real_progress = this.progressHandle(buildings[key].parts[o].real_progress)
          buildings[key].parts[o].start_date = this.dateHandle(buildings[key].parts[o].start_date)
          buildings[key].parts[o].end_date = this.dateHandle(buildings[key].parts[o].end_date)
          buildings[key].parts[o].isshow = true

        }
      }
      // if (searchName) {
        for(let i in buildings){
          for(let item in buildings[i].parts){
            // console.log(buildings[i].parts);
            // console.log(item);
            if (buildings[i].parts[item].name.indexOf(searchName) == -1) {
              buildings[i].parts[item].isshow = false;
            }
          }
        // }
      }
      return buildings;
    }  
  },
  methods:{
    progressHandle:function(num){
      return num.toFixed(2)*100;
    },
    dateHandle:function(str){
      return str.slice(0,10).split('-').join('')
    },
    showbtn:function(event){
      this.showBtnMsg = this.showBtnMsg == '显示分部工程进度'?'收起分部工程进度':'显示分部工程进度';      
    }
  }
}

</script>
