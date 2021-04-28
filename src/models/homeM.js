import React from 'react';
import { message } from 'antd';
import { reqGetEchart } from '../services/homeS';

const initSearch = {
  page: 0,
  size: 10,
};

export default {
  namespace: 'homeM',

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/home') {
          dispatch({ type: 'addAfter1Second' });
        }
      });
    },
  },

  state: 0,

  effects: {
    *addAfter1Second({ payload }, { call, put }) {
      debugger;
      const data = yield call(reqGetEchart);
      console.log('data:', data);
      yield put({ type: 'add' });
    },
  },

  reducers: {
    add(state) {
      return state + 1;
    },
  },
};
