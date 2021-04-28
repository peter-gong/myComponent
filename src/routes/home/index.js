import React from 'react';
import { connect } from 'dva';

function Home({ dispatch, homeM }) {
  const { testData } = homeM;
  return <div>Hello Home! homeM:{JSON.stringify(testData)}</div>;
}

function homeToProps(state) {
  return { homeM: state.homeM };
}
export default connect(homeToProps)(Home);
