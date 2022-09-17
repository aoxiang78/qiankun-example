<script lang="ts" setup>
import { useGlobalModel } from "@/stores/useGlobalModel";
import UserProfileForm from "@/components/UserProfileForm.vue"

const { globalModel } = useGlobalModel();
</script>
<template>
  <div>
    <h1>Public profile</h1>
    <div>name: {{ globalModel.name }}</div>
    <div>email: {{ globalModel.email }}</div>
    <UserProfileForm />
  </div>
</template>
