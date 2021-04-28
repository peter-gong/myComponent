import React from 'react';
import { message } from 'antd';
import { reqGetEchart } from '../services/homeS';
// import u from 'updeep'

const u = require('updeep');

const initSearch = {
  testData: [],
  page: 0,
  size: 10,
};

export default {
  namespace: 'homeM',

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/home') {
          dispatch({ type: 'getEchart' });
        }
      });
    },
  },

  state: { ...initSearch },

  effects: {
    *getEchart({ payload }, { call, put }) {
      const data = yield call(reqGetEchart);
      if (data) {
        yield put({
          type: 'updateState',
          payload: {
            testData: data,
          },
        });
      }
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return u(payload, state);
    },
    add(state) {
      return state + 1;
    },
  },
};
