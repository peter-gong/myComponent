/**
 * 要求：能根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是Promise
 */

import ajax from '../utils/ajax';

//获取echart数据
export const reqGetEchart = () => ajax('/test/echartData');
