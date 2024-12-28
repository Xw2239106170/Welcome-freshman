<template>
  <view>
    <Major v-if="indicate === '11'"></Major>
    <Present v-if="indicate === '12'"></Present>
    <Tutition v-if="indicate === '13'"></Tutition>
    <IdentifyFace v-if="indicate === '14'"></IdentifyFace>

    <GetTest v-if="indicate === '1'"></GetTest>

    <Dormitory v-if="indicate === '2'"></Dormitory>
    <Myclub v-if="indicate === '3'"></Myclub>

    <myRoad v-if="indicate === '4'"></myRoad>
    <Individual v-if="indicate === '5'"></Individual>
    <MyInfo v-if="indicate === '7'"></MyInfo>
    <WelcomeDot v-if="indicate === '8'"></WelcomeDot>
    <MyForecast v-if="indicate == '9'"></MyForecast>
    <!-- <SchoolCard v-if="indicate == '9'"></SchoolCard> -->
    <MySetting v-if="indicate === '10'"></MySetting>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        indicate: ''
      };
    },
    onLoad(option) {
      console.log(option)
      this.indicate = option.id;
    }
  }
</script>

<style lang="scss">

</style>