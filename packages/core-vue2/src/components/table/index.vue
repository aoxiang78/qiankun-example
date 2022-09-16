<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="(item, index) in columns" :key="index"> {{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <th v-for="(column) in columns" :key="column.valueIndex">
          <span v-if="typeof column.render === 'function'">
              <Container :renderContainer="column.render" :text="item[column.valueIndex]" :data="item" />
          </span>
          <span v-else-if="column.valueType === 'money'">
             <Money :data="item[column.valueIndex]"/>
         </span>
          <span v-else>
             {{ item[column.valueIndex] }}
         </span>
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Container from './container'
import Money from './money'

export default {
  components: {
    Container,
    Money
  },
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      },
      validator: value => {
        const validate = value.every(item => {
          const { valueIndex } = item
          return !!valueIndex
        })
        if (!validate) {
          console.log('传入的 titleList 属性的元素必须包含 title  和 prop 属性')
        }
        return validate
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
