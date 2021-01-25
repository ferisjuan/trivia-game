import { createTypedHooks } from "easy-peasy";
import { IStore } from "./interfaces/IStore";

const typedHooks = createTypedHooks<IStore>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
