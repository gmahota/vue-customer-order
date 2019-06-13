<template>
  <v-container pa-0>
    <base-subheading>Newest Blog Posts</base-subheading>
    <v-layout
      v-for="(article, i) in articles.slice(11, 14)"
      :key="i"
      align-center
      mb-2
    >
      <v-flex
        xs12
        d-flex
      >
        <v-img
          :src="require(`@/assets/articles/${article.hero}`)"
          class="mr-3"
          height="36"
          max-width="36"
        />
        <div>
          <div class="subheading">
            Article Title
          </div>
          <div class="caption">
            Date
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'
  export default {
    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,

      articles: [
      {
        "title": "Moroccan Days",
        "author": "John L",
        "category": "Travel",
        "hero": "moroccandays.jpg"
      },
      {
        "title": "Swedish Fishing",
        "author": "Rachel L",
        "category": "Leisure",
        "hero": "autumnclouds.jpg"
      },
      {
        "title": "The Adventure Begins",
        "hero": "snowcup.jpg",
        "prominent": true
      },
      {
        "title": "Paris in Spring",
        "author": "John L",
        "category": "Travel",
        "hero": "christmas.jpg"
      },
      {
        "title": "Youthful Independence",
        "author": "Rachel L",
        "category": "Political",
        "hero": "july4.jpg"
      },
      {
        "title": "Trial By Fire",
        "author": "Anthony R",
        "category": "Cooking",
        "hero": "firepots.jpg"
      },
      {
        "title": "Water Ventures",
        "author": "Rachel L",
        "category": "Leisure",
        "hero": "jellyfish.jpg"
      },
      {
        "title": "Mt. Zekial",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "mountaincabin.jpg"
      },
      {
        "title": "Cozumel Caves",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "lightcave.jpg"
      },
      {
        "title": "Amazing Ireland",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "greengrass.jpg"
      },
      {
        "title": "Cabin Fever",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "snowcabin.jpg"
      },
      {
        "title": "To the ancient ruins",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "ruins.jpg"
      },
      {
        "title": "New fashion trends",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "umbrella.jpg"
      },
      {
        "title": "Go on a vacation",
        "author": "Rachel L",
        "category": "Travel",
        "hero": "adventurecave.jpg"
      }
    ]
    }),


    computed: {
      ...mapState(['articles'])
    }
  }
</script>