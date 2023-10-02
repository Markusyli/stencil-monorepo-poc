<script setup lang="ts">
  import { ref } from 'vue'

  const firstName = ref('')
  const lastName = ref('')
  const streetAddress = ref('')
</script>

<template>
  <div class="about">
    <my-container>
      <my-row>
        <my-col size=12>
          <h1>Contact form with Stencil component library</h1>
        </my-col>
        <my-col size=6>
          {{firstName}}
          <my-text-input name="first-name" label="First name" v-model="firstName" />
        </my-col>
        <my-col size=6>
          <my-text-input name="last-name" label="Last name" v-model="lastName" />
        </my-col>
        <my-col size=12>
          <my-text-input name="street-address" label="Street address" v-model="streetAddress" />
        </my-col>
        <my-col size=12>
          <my-button>Submit</my-button>
        </my-col>
      </my-row>
    </my-container>
  </div>
</template>

