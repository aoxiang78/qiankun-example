<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Table :columns="columns" :data="listData"/>
  </div>
</template>

<script>
import Table from '@/components/table'

export default {
  components: {
    Table
  },
  data () {
    return {
      listData: [], // 从服务器获取
      columns: [
        {
          title: '姓名',
          valueIndex: 'name'
        },
        {
          title: '课堂作品',
          valueIndex: 'pic',
          render: (h, text, record) => {
            const img =
              (text && (
                <img
                  style='width: 100px; height: 100px;'
                  src={text}
                />
              )) ||
              ''
            return img
          }
        },
        { title: '作品点评', valueIndex: 'sex' },
        {
          title: '余额',
          valueIndex: 'money',
          valueType: 'money'
        },
        {
          title: '编辑',
          valueIndex: 'options',
          render: (h, text, record) => {
            return (
              <button
                onClick={() => {
                  this.handleEdit(record)
                }}
              >编辑</button>
            )
          }
        }
      ]
    }
  },
  methods: {
    handleEdit (val) {
      console.log(val)
    }
  },
  mounted () {
    setTimeout(() => {
      this.listData = [
        { name: '张三', pic: 'https://gw.alicdn.com/bao/uploaded/i1/2206929879226/O1CN01chwZCU2I1YiweKXJa_!!0-item_pic.jpg_300x300q90.jpg', sex: 'male', money: '20.10' },
        { name: '李四', pic: 'https://gw.alicdn.com/bao/uploaded/i1/864632062/O1CN01xQqX5K1R6RHX4tf0Z_!!864632062.jpg_300x300q90.jpg', sex: 'male', money: '180.00' }
      ]
    }, 1000)
  }
}
</script>
