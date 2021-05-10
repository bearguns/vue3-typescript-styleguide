import { createStore, createLogger, MutationTree } from "vuex";

interface State {
  loggedIn: boolean;
  loading: boolean;
}

const state: State = {
  loggedIn: false,
  loading: false,
};

const mutations: MutationTree<State> = {
  setLoggedIn(state: State, loggedIn: boolean) {
    state.loggedIn = loggedIn;
  },
  setLoading(state: State, loading: boolean) {
    state.loading = loading;
  },
};

export default createStore<State>({
  state,
  mutations,
  plugins: import.meta.env.DEV ? [createLogger()] : [],
});
