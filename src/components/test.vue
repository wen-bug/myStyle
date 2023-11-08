<script setup lang='ts'>
import {computed,ref} from 'vue';
defineProps({
    title: String
})
let show=ref(0)
let showC=ref(0)
let rotate=computed(()=>{
    return `rotate(${show.value}deg)`
})
let height=computed(()=>{
    return `${showC.value}fr`
})
let change=()=>{
    if(show.value==0){
        show.value=180
        showC.value=1
    }else{
        show.value=0
        showC.value=0
    }
}
</script>

<template>
    <div>
        <div class="title" @click="change">
            <div>标题</div>
            <div :style="{transform:rotate,transition:'transform 0.5s'}">
                <nut-icon name='rect-up'></nut-icon>
            </div>
        </div>
        <div class="content" :style="{gridTemplateRows:height}">
            <div style="min-height: 0;">
            asdflskjf sdfkj<br>
            sadfkjk
            asdflskjf sdfkj<br>
            asdflskjf sdfkj<br>
            asdflskjf sdfkj<br>
            </div>
        </div>
    </div>
</template>

<style  scoped>
.title{
    display: flex;
    justify-content: space-between;
}
.content{
    display: grid;
    transition: 0.5s;
    overflow: hidden;
    grid-template-rows: 0fr;
}
.title:hover .content{
    grid-template-rows: 1fr;
}
</style>