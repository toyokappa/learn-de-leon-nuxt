export const state = () => ({
  content_id: 3
})

export const mutations = {
  changeContent(state, id) {
    state.content_id = id
  }
}