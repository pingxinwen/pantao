<template>
  <div id="home">
    <div class="yujiazai" id="gogo" v-show="loading">
    <img :src="require('../assets/加载.jpg')" alt="" />
    </div>
    <!-- <header>
    <div>
      <div class="left">申请表单</div>
      <div class="right"></div>
    </div>
    <div class="header_bottom"></div>
    </header> -->
    <div class="header-school">
      <img :src="require('../assets/组织.svg')"/>
      当前部门：{{user.school}}
      <div class="header-menu">
          <img :src="require('@/assets/下拉.svg')">
      </div>
    </div>
    <div class="header1">
    <!-- 本子 -->
    <img :src="require('../assets/本子.png')" alt="" width="12" />请假外出、返校权限查询
    </div>
    <div class="xingming">姓名</div>
    <div class="mingzi">{{user.name}}</div>
    <div class="xueyuan">学院</div>
    <div class="jingguan">{{user.school}}</div>
    <div class="colorful">
        <div class="color-img">
            <img src="https://imgservice.bupt.edu.cn/image/1958/3916676.gif" />
        </div>
    </div>
    <div class="zhuangtaima">状态码</div>
    <div class="erweima">
    <!-- 绿码 -->
    <img :src="require('../assets/绿码.jpg')" alt="" />
    </div>
    <div class="zhuangtai"></div>
    <div class="yunxvruxiao" @click="trans">{{direction}}</div>
    <div class="xuegonghao">学工号</div>
    <div class="xuehao">{{user.id}}</div>
    <div class="churuxiaoshijian">出入校时间</div>
    <div class="shijian" @click="getTimer">{{timer}}</div>
    <div style="height: 10px;"></div>
    <div class="gengduo">
        <button @click="back">更多</button>
    </div>
  </div>
</template>

<script>
const key = 'app-info';

export default {
  name: 'Home',
  data(){
    return {
      timer:'',
      loading:true,
      direction:'允许入校',
      user: {
        name: '',
        school:'',
        id: ''
      }
    }
  },
  mounted:function(){
    document.title = '请假外出、返校权限查询通行码';
    if(this.load()){
        this.getTimer();
    }
    setTimeout(()=>{
        this.$data.loading = false
    },1500)
  },
  methods:{
    getTimer() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month;
      var dates = date.getDate();
      // var day = date.getDay();
      // var arrday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      var h = date.getHours();
      h = h < 10 ? '0' + h : h;
      var m = date.getMinutes();
      m = m < 10 ? '0' + m : m;
      var s = date.getSeconds();
      s = s < 10 ? '0' + s : s;
      this.$data.timer =  year + '-' + month + '-' + dates + ' ' + ' ' + h + ':' + m + ':' + s;
    },
    load(){
      const data = window.localStorage.getItem(key);
      if(data != null && data!=''){
        const new_user = JSON.parse(data);
        this.user = new_user;
        return true;
      }
      return false;
    },
    trans(){
        this.direction = this.direction === '允许入校' ? '允许出校': '允许入校'
    },
    back(){
        this.$router.push('/set')
    }
  }
}
</script>

<style>
* {
    border: 0;
    margin: 0;
}
body {
    background-color: #f2f2f2;
}
#home {
    width: 100%;
}

.yujiazai {
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    z-index: 2;
}

.yujiazai img {
    position: absolute;
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 5s infinite;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) rotateZ(0);
    }
    to {
        transform: translate(-50%, -50%) rotateZ(360deg);
    }
}

header {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #fff;
}

header>div {
    height: 47.45px;
}

header .left {
    float: left;
    width: 50%;
    height: 47.45px;
    line-height: 47.45px;
    text-align: center;
    font-size: 13px;
    color: #666;
}

header .right {
    float: left;
    width: 50%;
    height: 47.45px;
}

.header_bottom {
    width: 45%;
    height: 2px;
    margin-left: 2%;
    background-color: #4285F4;
}

.header1,.header-school {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 36.8px;
    padding-left: 5px;
    margin: 12px 0;
    font-size: 12px;
    line-height: 36.8px;
    font-weight: 700;
    background-color: #fff;
    text-align: left;
}

.header1 img, .header-school img {
    vertical-align: middle;
    margin: 0 0.5em;
}

.header-menu {
    position: absolute;
    right: 4px;
    top: 0;
}

.xingming,
.xueyuan,
.zhuangtaima,
.zhuangtai,
.xuegonghao,
.churuxiaoshijian {
    height: 42.38px;
    width: 100%;
    line-height: 42.38px;
    font-size: 14px;
    text-indent: 1em;
    color: #888;
    text-align: left;
    background: #f4f7fa;
}
.zhuangtai {
    height: 10px;
}

.mingzi,
.jingguan,
.erweima,
.yunxvruxiao,
.xuehao,
.shijian {
    font-size: 14px;
    height: 42.8px;
    background-color: #fff;
    line-height: 42.8px;
    text-align: center;
    color: #333;
}

.shijian {
    border-bottom: 51.2px solid #f2f2f2;
}

.erweima {
    height: 176px;
}

.erweima img {
    width: 150px;
    height: 150px;
    margin-top: 13px;
}

.yunxvruxiao {
    font-size: 18px;
    font-weight: 700;
    font-family: '微软雅黑';
    color: green;
}

.colorful {
    position: relative;
    height: 58.3176px;
    margin-top: 12px;
    width: 100%;
    background-color: #fff;
}

.color-img {
    padding: 13px 15px;
}

.color-img  img {
    width: 100%;
    height: 100%;
}

.gengduo {
    text-align: left;
    position: fixed;
    bottom: 0;
    height: 51.2px;
    width: 100%;
    background-color: #fff;
}

.gengduo button {
    height: 36px;
    width: 72px;
    color: #4285f4;
    background-color: #fff;
    border: 1px solid #4285f4;
    border-radius: 18px;
    margin-top: 24.6px;
    transform: translateY(-50%);
    margin-left: .5em;
}
</style>
