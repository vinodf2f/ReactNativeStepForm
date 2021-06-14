import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//reducer
import {stepFormReducer} from '../pages/stepForm/reducer2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['stepFormReducer'], //For development only
};
const persistedReducer = persistReducer(persistConfig, stepFormReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
