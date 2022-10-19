<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
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

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios'

export default {
  props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      experiences: []
    }
  },
  methods: {
    loadExperiences() {
      axios.get('https://basic-testing-backend-default-rtdb.europe-west1.firebasedatabase.app/surveys.json').then((res) => {
        if (res.status == 200) {
          for (const id in res.data) {
            this.experiences.push({
              id: id,
              name: res.data[id].name,
              rating: res.data[id].rating,
            })
          }
        } else {
          console.log('uh um',res);
        }
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>