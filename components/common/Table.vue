<template>
  <section>
    <h3 v-if="title" class="font-bold text-2xl">{{ title }}</h3>
    <p v-if="description" class="pb-4 text-gray-400">{{ description }}</p>
    <table class="w-full border-collapse">
      <tr>
        <th
          v-for="(header, headerIndex) in headers"
          :key="headerIndex"
          class="text-gray-400 p-2 text-left"
        >
          {{ header }}:
        </th>
      </tr>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td
          v-for="(value, valueIndex) in row"
          :key="valueIndex"
          class="p-2 text-gray-900 text-left"
        >
          {{ value }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [[]],
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
