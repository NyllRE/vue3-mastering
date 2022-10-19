<template lang="pug">

learning-survey( @pushed="update" )
user-experiences( :update="newResults" )


</template>

<script>
import LearningSurvey from '../components/survey/LearningSurvey.vue';
import UserExperiences from '../components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      newResults: [],
    }
  },
  methods: {
    update() {
      this.newResults.push(1)
    }
  },
  mounted() {
    this.newResults.push(1)
  },
};
</script>
