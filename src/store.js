import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    tasks: [
        {title: 'do something', id: 1, done: false},
        {title: 'do something else', id: 2, done: false},
        {title: 'do something at all', id: 3, done: false},
    ]
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task);
    },
    setDone(state, id) {
      const task = state.tasks.find(t => t.id === id);
      task.done = true;
    }
  },
  getters: {
    openTasks(state) {
      return state.tasks.filter(t => !t.done);
    }
  }
});

export default store;