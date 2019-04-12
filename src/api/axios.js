import base from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
import url from './api'

const api = {
  // 第一次判断拉取接口
  checkCustomer (params) {
    return axios.post(`${base.dev}/${url.checkCustomer}`,
      params
    );
  },
  // 全部客户资料
  firstPullcuster (params) {
    return axios.post(`${base.dev}/${url.firstPullcuster}`,
      params
    );
  },
  //获取全部数据
  indexAllCus(params){
    return axios.post(`${base.dev}/${url.indexAllCus}`,
      params
    );
  },
  //跟进状态
  followStatus(params){
    return axios.post(`${base.dev}/${url.followStatus}`,
      params
    );
  },
  cusBirthday(params){
  return axios.post(`${base.dev}/${url.cusBirthday}`,
    params
  );
  },
  policyAnni(params){
    return axios.post(`${base.dev}/${url.policyAnni}`,
      params
    );
  },
  // post提交
  login (params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  }
  // 其他接口…………
}

export default api;
