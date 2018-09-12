<template>
    <div>
         <a-pagination :defaultCurrent="1" :total="50" showSizeChanger />
    </div>
</template>

<script>
import { Pagination } from "ant-design-vue";
    export default {
        components:{
            APagination:Pagination
        }
    }
</script>
