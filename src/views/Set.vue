<template>
  <div class="about">
    <h2>在此输入你的信息<br/>将作为生成数据</h2>
    <h4>仅保留在本地</h4>
    <div class="name">
      <h6>姓名</h6>
      <input v-model="user.name" />
    </div>
    <div class="school">
      <h6>学院</h6>
      <input v-model="user.school" />
    </div>
    <div class="id">
      <h6>学号</h6>
      <input v-model="user.id" />
    </div>
    <div class="op">
      <button class="save" @click="save">保存</button>
      <button class="check" @click="check">查看</button>
    </div>
  </div>
</template>

<script>
const key = 'app-info';

export default {
  name:'Set',
  data(){
    return {
      user:{
        name:'张三',
        school:'',
        id: ''
      }
    }
  },
  mounted: function(){
    this.load()
  },
  methods: {
    save(){
      window.localStorage.setItem(key,JSON.stringify(this.user))
      alert('已保存');
    },
    load(){
      const data = window.localStorage.getItem(key);
      if(data != null && data!=''){
        const new_user = JSON.parse(data);
        this.user = new_user;
      }
    },
    check(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
.about {
  margin-top: 36px;
  font-size: 22px;
  line-height: 1.5;
}

input {
  width: 60%;
  font-size: 22px;
  height: 36px;
}
.name,
.school,
.id {
  margin: 24px 0;
  width: 100%;
}

.name h6,
.school h6,
.id h6 {
  font-size: 22px;
  margin: 12px 0;
}

.op {
  display: flex;
  margin: 16px auto;
  flex-direction: column;
  align-items: center;
}

.save {
  height: 36px;
  font-size: 22px;
  width: 72px;
  margin: 16px 0;
  background: #00ccf0;
}

.check {
  height: 36px;
  font-size: 22px;
  width: 72px;
  background: #09e02d;
}
</style>
