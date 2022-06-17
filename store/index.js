export const state = () => ({
  content_id: 2
})

export const mutations = {
  changeContent(state, id) {
    state.content_id = id
  }
}