<template>
  <article class="flex flex-col bg-zinc-700 mt-9 rounded-xl overflow-hidden sm:flex-row sm:w-600 mx-auto" >
        <div>
          <img :src="character.image" alt="char image" class="w-full">
        </div>
        <div class="flex flex-col p-4">
          <span class="text-lg font-extrabold tracking-wide mt-4">
            {{ character.name }}
          </span>
          <div class="flex items-center text-base">
            <div :class="[getStatusColor, 'w-2', 'h-2', 'rounded-full', 'mr-3']"></div>
            {{ character.status }} - {{character.species}} - {{character.gender}}
          </div>
          <span class="mt-6 text-lg">
            Last known location:
          </span>
          <span class="text-base">
            {{ character.location.name }}
          </span>
          <span class="mt-6 text-lg">
            First seen in:
          </span>
          <span class="text-base">
            {{ episodeName }}
          </span>
        </div>
      </article>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { getEpisode } from '../api/api';
import {Character} from '../api/characters';

export default defineComponent({
  name: 'CharacterCard',
  props: {
    character: {
      type: Object as PropType<Character>,
      default: {},
      requred: true,
    }
  },
  data() {
    return {
      episodeName: ''
    }
  },
  async mounted() {
    let res = await getEpisode(this.character.episode[this.character.episode.length -1 ])   
    this.episodeName = res?.name || ''
  },

  computed: {
    getStatusColor() : string {
      enum ColorDict {
        'Alive' = 'bg-green-600',
        'Dead' = 'bg-red-600',
        'unknown'= 'bg-indigo-600'
      }
      if (this.character.status === 'Alive') return 'bg-green-600'
      else if (this.character.status === 'Dead') return 'bg-red-600'
      else return 'bg-indigo-600'
    },
  }


})
</script>