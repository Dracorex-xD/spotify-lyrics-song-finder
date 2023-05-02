<template lang="en">
    <div class=container>
        <appHead></appHead>
        <appBody></appBody>
        <appFoot></appFoot> 
    </div>
</template>
<script>
import appBody from "./Body";
import appHead from "./Head";
import appFoot from "./Foot";

export default {
    name: 'app-container',
    components: {
        appBody,
        appFoot,
        appHead
    }
}
</script>
<style lang="en">
    
</style>