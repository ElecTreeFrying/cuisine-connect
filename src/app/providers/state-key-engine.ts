import { StateToken } from "@ngxs/store";
import { LOCAL_STORAGE_ENGINE, SESSION_STORAGE_ENGINE } from "@ngxs/storage-plugin";
import { KeyWithExplicitEngine } from "@ngxs/storage-plugin/src/internals/storage-key";

export { KeyWithExplicitEngine } from "@ngxs/storage-plugin/src/internals/storage-key";

export function keyEngine<T>(STATE_TOKEN: StateToken<T>, engine: 'local' | 'session'): KeyWithExplicitEngine{
  return {
    key: STATE_TOKEN,
    engine: engine === 'local' ? LOCAL_STORAGE_ENGINE: SESSION_STORAGE_ENGINE
  }
}
