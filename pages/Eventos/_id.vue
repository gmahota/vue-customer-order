<template>
  <div class="event">
    <h3>{{card.title }}</h3>
    <h4>{{card.desc }}</h4>
    <p>Email : {{card.src}}</p>
    <p>
      <NuxtLink to="/">
        List Of Event's
      </NuxtLink>
    </p>
  </div>
</template>

<script>

export default {


    validate({ params }) {
        return !isNaN(+params.id)
    },

  

  async asyncData({ params, error }) {
    try {
      const { data } =[
        { cardId:1, title: 'Desafio N4', desc:'', src: require('~/assets/eventos/desafio1.png') , flex: 12,date : '' },
        { cardId:2, title: 'Desafio Bilene', desc:'', src: require('~/assets/eventos/desafio2.png'), flex: 6 },
        { cardId:3, title: 'Desafio Papilon', desc:'', src: require('~/assets/eventos/desafio3.png'), flex: 6 }
        ];

        
        for (var i = 0; i < data.length; i++) {
            if (data[i].cardId === params.id) {
                return { card: data[i] } 
            }
            
            return { card: null } 
        }
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
  
}
</script>
