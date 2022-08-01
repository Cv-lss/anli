<template>
    <div>
        <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />


        <van-card v-for="item, index in list" :key="index" :price="item.price" :desc="item.desc" :title="item.title"
            :thumb="`http://liufusong.top:8080${item.houseImg}`">
            <template #tags>
                <span v-for="tags, index in item.tags" :key="index">{{ tags }}</span>
            </template>
        </van-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await this.$API.reqCollectionList()
        console.log(result);
        this.list = result.data.body
    },
    methods: {
        onClickLeft() {
            this.$router.push('/layout/my')
        }
    },
}
</script>

<style>
</style>