import React from 'react';
import { connect } from 'dva';

function Home({ dispatch, homeM }) {
  debugger;
  return <div>Hello Home! homeM:{homeM}</div>;
}

function homeToProps(state) {
  return { homeM: state.homeM };
}
export default connect(homeToProps)(Home);
