<template>
  <div id="skPlayer"></div>
</template>

<script>
import skPlayer from 'skPlayer'
import { mapState } from 'vuex'

export default {
  props: ['userInfo'],
  watch: {
    userInfo: function(val, oldVal) {
      if (val.hasOwnProperty('login')) {
        this.initSkPlayer()
      }
    }
  },
  async mounted () {
    if (this.userInfo.hasOwnProperty('login')) {
      this.initSkPlayer()
    }
  },
  methods: {
    initSkPlayer() {
      this.initLive2D()
      const player = new skPlayer({
        autoplay: false,
        listshow: false,
				music: {
					type: 'cloud',
					source: 165025282
				}
		  });
    },
    initLive2D() {
      L2Dwidget.init({"model":{"jsonPath":"/model/aks/model.json"}})
    }
  }
}
</script>

<style lang="less" scoped>
  #skPlayer {
    position: fixed;
    top: 60px;
    left: 0;
  }
</style>
