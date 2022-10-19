<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2> 
      <!-- <div> >>=> for debugging purposes
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div> -->
      <ul>
        <li v-if="isLoading == 1">Loading...</li>
        <li v-else-if="isLoading == -1">{{ err }} has occured</li>
        <survey-result
          v-for="result in experiences"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts">
import SurveyResult from './SurveyResult.vue';
import axios from 'axios'

export default {
  props: ['update'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      experiences: [{
        id: Number,
        name: String,
        rating: String
      }],
      isLoading: 0,
      err: null,
      updated: this.update
    }
  },
  watch: {
    updated(o, n) {
      this.loadExperiences();
      console.log(this.updated, this.update, o, n);
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = 1;
      axios.get('https://basic-testing-backend-default-rtdb.europe-west1.firebasedatabase.app/surveys.json').then((res) => {
        if (res.status == 200) {
          const results = []
          for (const id in res.data) {
            results.push({
              id: id,
              name: res.data[id].name,
              rating: res.data[id].rating,
            })
            this.experiences = results
          }
        } else {
          console.log('uh um',res);
        }
        this.isLoading = 0;
      }).catch((err) => {
        this.isLoading = -1;
        this.err = err.message
        this.experiences = []
        
      });
    }
  },
  mounted() {
    this.loadExperiences()
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>