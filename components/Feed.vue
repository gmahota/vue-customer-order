<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          title="Previous page"
          square
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-flex>

      <v-flex
        xs6
        text-xs-center
        subheading
      >
        PAGE {{ page }} OF {{ pages }}
      </v-flex>

      <v-flex
        xs3
        text-xs-right
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          title="Next page"
          square
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
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
    name: 'Feed',
    components: {
      FeedCard: () => import('@/components/FeedCard')
    },
    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,

      articles: [
      {
        "title": "Agnus CRM",
        "author": "",
        "category": "Web App -CRM",
        "hero": "bg2.jpg"
      },
      {
        "title": "Desenvolvimento Web & Mobile",
        "author": "",
        "category": "Software Developer",
        "hero": "bg6.jpg"
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
      ...mapState(
          {
            articless: state => state.articles
        }),
      pages () {
        return 2
        // Math.ceil(this.articles.length / 11)
      },
      paginatedArticles () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11
        return this.articles.slice(start, stop)
      }
    },
    watch: { 
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>