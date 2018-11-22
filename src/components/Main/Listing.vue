<template>
  <mu-paper :z-depth='2' :class='returnClass(store)'>
    <mu-flex justify-content='center'>
      <h2 v-if='store.pageWidth >= 800'>{{title}}</h2>
      <mu-flex fill justify-content='around' v-else-if='store.pageWidth >= 480'>
        <h2 v-on:click='focusTitle("Drivers")' :class='isItFocused("Drivers")'>Drivers</h2>
        <h2 v-on:click='focusTitle("Passengers")' :class='isItFocused("Passengers")'>Passengers</h2>
        <h2 v-on:click='focusTitle("Routes")' :class='isItFocused("Routes")'>Routes</h2>
      </mu-flex>
      <mu-flex fill justify-content='around' v-else>
        <h2 v-on:click='focusTitle("Drivers")' :class='isItFocused("Drivers")'><mu-icon value='directions_car'></mu-icon></h2>
        <h2 v-on:click='focusTitle("Passengers")' :class='isItFocused("Passengers")'><mu-icon value='person'></mu-icon></h2>
        <h2 v-on:click='focusTitle("Routes")' :class='isItFocused("Routes")'><mu-icon value='place'></mu-icon></h2>
      </mu-flex>
    </mu-flex>
    <mu-flex justify-content='center'>
      <List :pageName='pageName' :title='title' v-if='store.pageWidth >= 800' />
      <List :pageName='pageName' :title='focusedTitle' v-else />
    </mu-flex>
    <mu-flex justify-content='center'>
      <mu-text-field
        v-model='store.searchBoxFilters[title.toLowerCase()]'
        type='text'
        icon='search'
        style='width: 100%'
      ></mu-text-field>
    </mu-flex>
  </mu-paper>
</template>

<script>
import List from '@/components/Main/List'
import store from '@/store.js'

export default {
  name: 'Listing',
  components: {List},
  data() {
    return {
      store: store.data,
      focusedTitle: this.title,
    }
  },
  props: ['title', 'pageName'],
  methods: {
    filter(users) {
      return users
    },
    sort(users) {
      return users
    },
    returnClass(store) {
      if (store.pageWidth >= 1024) {
        return 'listing'
      } else if (store.pageWidth >= 800) {
        return 'listing listing-compact'
      } else {
        return 'listing listing-one'
      }
    },
    focusTitle(title) {
      this.focusedTitle = title
    },
    isItFocused(title) {
      if (title === this.focusedTitle) {
        return 'red'
      }
    }
  },
}
</script>

<style scoped>
  h2 {
    margin: 0 0 20px;
  }

  .listing {
    width: 30%;
    margin-left: calc(10% / 3);
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .listing:last-child {
    margin-right: calc(10% / 3);
  }

  .listing-compact {
    width: calc(30% + 10% / 6);
    margin-left: calc(10% / 6);
    padding: 10px;
  }

  .listing-compact:last-child {
    margin-right: calc(10% / 6);
  }

  .listing-one {
    width: 80%;
    margin: auto;
    padding: 10px 30px;
  }

  .listing-one:last-child {
    margin-right: auto;
  }

  .red {
    color: #d00;
  }
</style>
