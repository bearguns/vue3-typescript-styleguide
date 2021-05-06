import { createStore, createLogger, MutationTree } from "vuex";

interface State {
  loggedIn: boolean;
}

const state: State = {
  loggedIn: false,
};

const mutations: MutationTree<State> = {
  setLoggedIn(state: State, loggedIn: boolean) {
    state.loggedIn = loggedIn;
  },
};

export default createStore<State>({
  state,
  mutations,
  plugins: import.meta.env.DEV ? [createLogger()] : [],
});
