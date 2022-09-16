export default {
  functional: true,
  render (h, { props }) {
    return props.renderContainer(h, props.text, props.data)
  }
}
