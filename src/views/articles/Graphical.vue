<template>
  <CaseStudyReader>
    <h1>Graphic Works</h1>
    <p class="mb-5">My works on illustrations, graphic design, 3D designs and product packaging</p>
    <hr/>

    <h3>Bella The Butterfly</h3>
    <p>Bella the Butterfly was original a children's book and I was working as the background illustration artist</p>
    <div class="image-container">
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

    <h2>Sacha the Porcupine</h2>
    <div class="image-container">
      <image-loader url="designs/sacha-porcupine/img-1.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-2.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-3.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-4.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-5.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-6.jpg" alt=""/>
      <image-loader url="designs/sacha-porcupine/img-7.jpg" alt=""/>
    </div>

    <h2>When the wind blows</h2>
    <div class="image-container">
      <image-loader url="designs/when-the-wind-blows/cover.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-1.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-2.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-3.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-4.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-5.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-6.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-7.jpg" alt=""/>
      <image-loader url="designs/when-the-wind-blows/img-8.jpg" alt=""/>
    </div>

    <h2>3D Renders</h2>
    <div class="image-container">
      <image-loader class="landscape" url="designs/3d/render1.png" alt=""/>
      <image-loader class="landscape" url="designs/3d/render2.png" alt=""/>
      <image-loader class="landscape" url="designs/3d/render3.png" alt=""/>
      <image-loader class="landscape" url="designs/3d/render4.png" alt=""/>
    </div>


    <h2>Packaging Designs</h2>
    <div class="image-container">
      <image-loader class="landscape" url="designs/graphic-design/img-1.jpg" alt=""/>
      <image-loader class="landscape" url="designs/graphic-design/img-2.jpg" alt=""/>
      <image-loader class="landscape" url="designs/graphic-design/img-3.jpg" alt=""/>
      <image-loader class="landscape" url="designs/graphic-design/img-6.png" alt=""/>
      <image-loader class="portrait-half" url="designs/graphic-design/img-4.png" alt="rheumatism oil"/>
      <image-loader class="portrait-half" url="designs/graphic-design/img-5.png" alt="sea cucumber oil"/>
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
  margin: 0 auto 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;

  > img {
    border: 1px solid $gray-700;
    border-radius: 4px;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-out;
    background-color: $gray-800;
    margin-bottom: 12px;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      z-index: 1;
    }
  }
  
  @include media-breakpoint-up(md) {
    display: grid;
    grid-auto-rows: 450px;
    grid-auto-flow: row dense;
    grid-gap: 30px;
    padding: $spacer-3 0;
    margin-bottom: $spacer-5;
    
    width: 90%;
  }
}


.landscape {
  grid-column: 1/-1;
}

.portrait {
  grid-row-end: span 2;
}

.portrait-half {
  grid-row-end: span 2;
  grid-column-end: span 6;
}

.wide-2 { 
  @include media-breakpoint-up(md) {
    grid-column-end: span 2; 
    object-fit: cover;
  }
}

.wide-3 { 
  @include media-breakpoint-up(xl) {
    grid-column-end: span 3;
    object-fit: cover;
  }
}

.wide-4 { 
  grid-column: 1/-1; 
}

.object-contain {
  object-fit: contain;
}
.object-cover {
  object-fit: cover;
}

.tall-2 { grid-row-end: span 2; }
.tall-3 { grid-row-end: span 3; }
.tall-4 { grid-row-end: span 4; }

.full {  grid-column-end: auto;
  
  @media screen and (min-width: 1024px) {
    grid-column: 1/-1;
    grid-row-end: span 2;
  }
}
</style>