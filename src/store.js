import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    tasks: [
        {title: 'do something'},
        {title: 'do something else'},
        {title: 'do something at all'},
    ]
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task);
    }
  }
});

export default store;