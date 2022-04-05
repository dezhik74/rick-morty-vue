<template>
  <div class="">
    <div class="lg:flex lg:flex-raw lg:flex-wrap lg:justify-evenly ">
      <character-card :character="char" v-for="char in characters?.results" :key="`char-${char.id}`"/>      
    </div>
  </div>
  <div class="flex justify-center mt-6 ">
    <b-f-button @click="onBack" v-if="currentPage > 1">
      arrow_back
    </b-f-button>
    <b-f-button @click="onForward" v-if="currentPage < maxPages" class="ml-3">
      arrow_forward
    </b-f-button>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Characters} from '../api/characters';
import {getCharacters} from '../api/api'
import CharacterCard from '../components/CharacterCard.vue';
import BFButton from '../components/BFButton.vue';

export default defineComponent({
  name: 'Caracters',
  components: {CharacterCard, BFButton},
  data() {
    return {
      characters: null as Characters | null,
      currentPage: 1 as number,
    }
  },
  async mounted() {
    this.characters = await getCharacters(this.currentPage)
    this.maxPages= this.characters?.info.pages ? this.characters?.info.pages : 1
  },
  methods: {
    async onBack() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.characters = await getCharacters(this.currentPage)
        window.scrollTo(0, 0)
      }
    },
    async onForward() {
      if (this.characters && this.currentPage < this.maxPages) {
        this.currentPage += 1
        this.characters = await getCharacters(this.currentPage)
        window.scrollTo(0, 0)
      }
    }
  },
  computed: {
    maxPages(): number {
      return this.characters?.info.pages ? this.characters?.info.pages : 1
    }
  }
  
})
</script>