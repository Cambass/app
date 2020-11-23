<template>
  <div class="container mx-auto mt-5 text-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
      <div class="col-start-1">
        <h2>Filtrar Por Nombre</h2>
        <input
          class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
          id="filter"
          placeholder="Buscar..."
          type="text"
          v-model="filter"
        />
        <br />
        <div>
          <span>estrellas</span>
          <br />
          <input type="checkbox" id="1" value="1" v-model="filter1" />
          <label for="php">1</label>
          <br />
          <input type="checkbox" id="2" value="2" v-model="filter1" />
          <label for="laravel">2</label>
          <br />
          <input type="checkbox" id="3" value="3" v-model="filter1" />
          <label for="html">3</label>
          <br />
          <input type="checkbox" id="4" value="4" v-model="filter1" />
          <label for="html">4</label>
          <br />
          <input type="checkbox" id="5" value="5" v-model="filter1" />
          <label for="html">5</label>
        </div>
      </div>
      <div v-for="a in filteredHotels" :key="a.id">
        <a class="card-link" href="#">
          <article>
            <img :src="`@/assets/images/hotels/${a.image}`" />
            <div>
              <h2 class="text-orange-600">{{ a.name }}</h2>
              <ul>
                <li>{{ a.stars }}</li>
              </ul>
              <ul>
                <li>{{ a.amenities }}</li>
              </ul>
            </div>
            <div>
              <span class="text-gray-600">Precio Por Noche por habitación</span>
              <h2 class="text-yellow-600">{{ a.price | dollar }}</h2>
            </div>
          </article>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvCard',
  data() {
    return {
      filter: '',
      filter1: ''
    }
  },
  props: {
    hotels: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredHotels() {
      if (!this.filter) {
        return this.hotels
      }
      return this.hotels.filter(a =>
        a.name.toLowerCase().includes(this.filter.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
