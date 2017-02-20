/**
 * Created by Administrator on 2017/2/15.
 */
import {STORAGE_KEY} from './ToDo';

const localStoragePlugin = store => {
  debugger;
  store.subscribe((mutation, {arrList}) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(arrList))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [localStoragePlugin]
  : [localStoragePlugin]

