import { IContext } from "./../../node_modules/overmind/es/types.d";
import { createActionsHook, createStateHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";
import { Actions } from "./actions";

export const useAppState = createStateHook();
export const useActions = createActionsHook<IContext<{ actions: Actions }>>();

export const config = {
  state,
  actions,
  effects,
};
