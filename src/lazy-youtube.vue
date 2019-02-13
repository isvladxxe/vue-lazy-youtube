<template>
  <div width="1920" height="1080" :class="['video '+ [enable?'video--enabled':'']]">
    <a
      v-if="!active"
      class="video__link"
      :href="'https://youtu.be/'+vid"
      @click.prevent="active=true"
    >
      <picture>
        <source
          :srcset="'https://i.ytimg.com/vi_webp/'+vid+'/maxresdefault.webp'"
          type="image/webp"
        >
        <img
          class="video__media"
          :src="'https://i.ytimg.com/vi/'+vid+'/maxresdefault.jpg'"
          :alt="alt"
        >
      </picture>
    </a>
    <button
      @click="active=true"
      v-if="!active"
      class="video__button"
      type="button"
      aria-label="Запустить видео"
    >
      <svg width="68" height="48" viewBox="0 0 68 48">
        <path
          class="video__button-shape"
          d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
        ></path>
        <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
      </svg>
    </button>
    <iframe
      width="1920"
      height="1080"
      v-if="active"
      :src="src"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="video__media"
    ></iframe>
  </div>
</template>
<script>
export default {
  props: ["vid", "alt"],
  name: "LazyYoutube",
  data: () => ({
    enable: false,
    active: false
  }),
  computed: {
    src() {
      let query = "?rel=0&showinfo=0&autoplay=1&hd=1";
      return "https://www.youtube.com/embed/" + this.vid + query;
    }
  },
  mounted() {
    this.enable = true;
  }
};
</script>
<style scoped>
.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #000000;
}

.video__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video__media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video__button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: none;
  padding: 0;
  width: 68px;
  height: 48px;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.video__button-shape {
  fill: #212121;
  fill-opacity: 0.8;
}

.video__button-icon {
  fill: #ffffff;
}

.video__button:focus {
  outline: none;
}

.video:hover .video__button-shape,
.video__button:focus .video__button-shape {
  fill: #ff0000;
  fill-opacity: 1;
}

/* Enabled */

.video--enabled {
  cursor: pointer;
}

.video--enabled .video__button {
  display: block;
}
</style>
