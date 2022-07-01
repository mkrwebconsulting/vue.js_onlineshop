import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const cartModule = {
  mutations,
  actions,
  getters,
  state,
};

export default cartModule;
