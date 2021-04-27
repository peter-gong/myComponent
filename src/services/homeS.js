import axios from 'axios';

// 获取test数据
export function getTestData(data) {
  axios.get('http://localhost:8080/test/echartData').then(res => {
    return res;
  });
}
