<template>
  <div>
    <av-card :hotels="hotels" />
  </div>
</template>

<script>
import AvCard from '@/components/AvCard'
const axios = require('axios')

export default {
  name: 'Home',
  components: { AvCard },

  data() {
    return {
      hotels: []
    }
  },
  created: function() {
    var that = this
    axios
      .get('http://localhost:3001/hotels')
      .then(function(response) {
        that.hotels = response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>
