<template>
  <div>
    <div class="row">
      <div class="col text-center">
        <div>
          <!-- Using components -->
          <b-input-group prepend="Listing" class="mt-3">
            <b-form-input v-model="keyword"></b-form-input>
            <b-input-group-append>
              <b-button @click="search" variant="outline-primary">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="text-center mt-5" v-show="loading">
          <b-spinner variant="primary" label="Spinning"></b-spinner>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-12 text-center" v-for="list in listings" :key="list._id">
        <b-card
          :title=" list.name "
          :img-src="list.images.picture_url"
          :img-alt="list.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mt-3"
        >
          <b-card-text>{{ list.summary.substring(0,50)+ "..." }}</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <!-- <div class="col">
          <h3 v-for="list in listings" :key="list._id">{{ list.name }}</h3>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      listings: [],
      loading: false
    };
  },

  methods: {
    search() {
      this.loading = true;
      console.log(this.keyword);
      let url =
        "http://airbnbapidemo.azurewebsites.net/api/airbnb/listings/city/";
      url = url + this.keyword;
      axios.get(url).then(response => {
        console.log(response.data);
        this.listings = response.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style>
</style>