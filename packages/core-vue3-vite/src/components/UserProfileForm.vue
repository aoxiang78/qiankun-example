<script lang="ts" setup>
import { ref } from "vue";
import { useGlobalModel } from "@/stores/useGlobalModel";

const { globalModel, setGlobalModel } = useGlobalModel();

const user = ref(JSON.parse(JSON.stringify(globalModel)));
const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setGlobalModel(user);
};
</script>

<template>
  <div>
    <form @submit="handleSubmit">
      <label>
        Name:
        <input v-model="user.name" type="text" />
      </label>
      <label>
        Public email:
        <select v-model="user.email">
          <option value="">Select a verified email to display</option>
          <option value="you@example.com">you@example.com</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
