//全部客户标签
export const statekfdata = [
  {
  "name": "全部"
  },
  {
    "name": "未签单"
  },
  {
    "name": "已签单"
  },
]
//客户跟进状态标签
export const gzstate = [{
  "name": "全部"
},
  {
    "name": "开启面谈"
  },
  {
    "name": "需求分析"
  },
  {
    "name": "说明/促成"
  },
]
//客户生日状态标签
export const khbirthday = [{
  "month": "一月"
},
  {
    "month": "二月"
  },
  {
    "month": "三月"
  },
  {
    "month": "四月"
  },
  {
    "month": "五月"
  },
  {
    "month": "六月"
  },
  {
    "month": "七月"
  },
  {
    "month": "八月"
  },
  {
    "month": "九月"
  },
  {
    "month": "十月"
  },
  {
    "month": "十一月"
  },
  {
    "month": "十二月"
  }
]


//客户跟进状态标签
export const zhuangtai=[
  {"name":"1对1面谈"},
  {"name":"COP"},
  {"name":"软性活动"},
  {"name":"CC测评"},
  {"name":"甄选面试"},
  {"name":"承诺面试"},
  {"name":"岗前培训"},
  {"name":"签约"},
]

export const zygzstate=[
  {"name":"不限"},
  {"name":"买过保险"},
  {"name":"未买过保险"},
]
/*
 * 为String类型增加一个方法，可根据传入的参数值来替换字符串中的"{n}"
 * 函数返回替换后的字符串
 * */
//经验状态标签
export const experience=[
  {"month":"不限"},
  {"month":"3年内"},
  {"month":"3-5年"},
  {"month":"5年以上"},
]
//经验状态标签
export const education=[
  {"month":"高中以下"},
  {"month":"大专"},
  {"month":"本科"},
  {"month":"硕士"},
  {"month":"博士"},
]
//经验状态标签
var income=[
  {"month":"不限"},
  {"month":"5万以下"},
  {"month":"5-10万"},
  {"month":"10-30万"},
  {"month":"30万以上"},
]

//客户登记标签
 export const customerTags = [
   {name:'全部客户',id:0},
   {name:'跟进状态',id:1},
   {name:'客户生日',id:2},
   {name:'保单周年日',id:3},
 ]

//准增员
export const zhunCustomerTags = [
  {name:'全部',id:0},
  {name:'状态',id:1},
  {name:'保单',id:2},
  {name:'经验',id:3},
  {name:'学历',id:4},
  {name:'年收入',id:5},
]
