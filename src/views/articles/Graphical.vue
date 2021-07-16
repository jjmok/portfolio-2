<template>
  <CaseStudyReader>
    <h1>Graphic Works</h1>
    <p class="mb-5">My works on illustrations, graphic design, 3D designs and product packaging</p>
    <hr/>

    <h3>Bella The Butterfly</h3>
    <p>Bella the Butterfly was original a children's book and I was working as the background illustration artist</p>
    <div class="image-container">
      <div class="image-gallery">
        <image-loader url="designs/bella/bella-bg.jpg" alt="cave"/>
        <image-loader url="designs/bella/bella-bg3.jpg" alt="forest"/>
        <image-loader url="designs/bella/bella-bg4.jpg" alt="fields"/>
        <image-loader url="designs/bella/bella-bg5.jpg" alt="rose bush"/>
        <image-loader url="designs/bella/bella-bg6.jpg" alt=""/>
        <image-loader url="designs/bella/bella-bg7.jpg" alt=""/>
        <image-loader url="designs/bella/bella-bg8.jpg" alt=""/>
        <image-loader url="designs/bella/bella-bg9.jpg" alt=""/>
        <image-loader url="designs/bella/bella-bg10.jpg" alt=""/>
        <image-loader url="designs/bella/bella-forest.jpg" alt=""/>
        <image-loader url="designs/bella/bella-forest2.jpg" alt=""/>
        <image-loader url="designs/bella/bella-leaves1.jpg" alt=""/>
        <image-loader url="designs/bella/bella-spider1.jpg" alt=""/>
        <image-loader url="designs/bella/bella-spider2.jpg" alt=""/>
        <image-loader url="designs/bella/bella-spider3.jpg" alt=""/>
      </div>
    </div>

    <h2>Sacha the Porcupine</h2>
    <div class="image-container">
      <div class="image-gallery wide-2">
        <image-loader url="designs/sacha-porcupine/img-1.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-2.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-3.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-4.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-5.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-6.jpg" alt=""/>
        <image-loader url="designs/sacha-porcupine/img-7.jpg" alt=""/>
      </div>
    </div>

    <h2>When the wind blows</h2>
    <div class="image-container">
      <div class="image-gallery wide-2 img-450">
        <image-loader url="designs/when-the-wind-blows/cover.jpg" alt="book cover"/>
        <image-loader url="designs/when-the-wind-blows/img-1.jpg" alt="book cover 2"/>
        <image-loader url="designs/when-the-wind-blows/img-2.jpg" alt=""/>
        <image-loader url="designs/when-the-wind-blows/img-3.jpg" alt=""/>
        <image-loader url="designs/when-the-wind-blows/img-4.jpg" alt=""/>
        <image-loader url="designs/when-the-wind-blows/img-5.jpg" alt=""/>
        <image-loader url="designs/when-the-wind-blows/img-6.jpg" alt=""/>
        <image-loader url="designs/when-the-wind-blows/img-7.jpg" alt=""/>
      </div>
    </div>

    <h2>3D Renders</h2>
    <div class="image-container">
      <div class="image-gallery wide-2">
        <image-loader class="landscape" url="designs/3d/render1.png" alt=""/>
        <image-loader class="landscape" url="designs/3d/render2.png" alt=""/>
        <image-loader class="landscape" url="designs/3d/render3.png" alt=""/>
        <image-loader class="landscape" url="designs/3d/render4.png" alt=""/>
      </div>
    </div>
  
    <h2>Packaging Designs</h2>
    <div class="image-container">
      <div class="image-gallery wide-2 img-450">
        <image-loader class="landscape" url="designs/graphic-design/img-1.jpg" alt=""/>
        <image-loader class="landscape" url="designs/graphic-design/img-2.jpg" alt=""/>
        <image-loader class="landscape" url="designs/graphic-design/img-3.jpg" alt=""/>
        <image-loader class="landscape" url="designs/graphic-design/img-6.png" alt=""/>
      </div>
    </div>
    
    <div class="image-container">
      <div class="image-gallery">
        <image-loader class="portrait-half" url="designs/graphic-design/img-4.png" alt="rheumatism oil"/>
        <image-loader class="portrait-half" url="designs/graphic-design/img-5.png" alt="sea cucumber oil"/>
      </div>
    </div>
  </CaseStudyReader>
</template>

<script>
import CaseStudyReader from "@/components/CaseStudyReader.vue";
import ImageLoader from "@/components/ImageLoader.vue";

export default {
  name: "Training",
  components: {
    CaseStudyReader,
    ImageLoader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/prerequisite";

.image-container {
  display: flex;
  overflow-x: scroll;
  margin-bottom: 64px;
  width: calc(100% + 50px);
  margin-left: -25px;
  position: relative;

  @include media-breakpoint-up(lg) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    overflow: initial;
  }
}

.img-250 {
  > img { height: 250px;}
}
.img-450 {
  > img { height: 450px;}
}

.image-gallery {
  display: flex;
  padding: $spacer-4;
  background-color: $gray-700;

  @include media-breakpoint-up(lg) {
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-flow: row dense;
    grid-gap: 30px;
    background-color: initial;
  }

  > img {
    height: 350px;
    border-radius: 4px;
    border: 1px solid $gray-600;
    background-color: $gray-600;
    margin-right: $spacer-4;
    transform: scale(1.00);
    transition: transform 0.3s ease;
    will-change: transform;
    grid-row-end: span 2;
    grid-column-end: span 1;

    &:last-child {
      margin: 0;
    }

    &:hover {
      transform: scale(1.07);
    }

    @include media-breakpoint-up(lg) {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
}

.landscape {
  grid-column: 1/-1;
}

.wide-2 {
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}
</style>