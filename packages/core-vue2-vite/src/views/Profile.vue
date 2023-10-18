<template>
  <div>
    <h1>Public profile</h1>
    <UserProfileForm/>
  </div>
</template>

<script>
import { mapState } from "pinia";
import UserProfileForm from "../components/UserProfileForm.vue";
import { useGlobalModel } from "../stores/useGlobalModel";

export default {
  components:{
    UserProfileForm,
  },
  computed: {
    ...mapState(useGlobalModel, ['globalModel'])
  },
};
</script>
