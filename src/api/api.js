import base from "./base";


const BASEURl = "/";
/*接口信息*/

 const url = {
  'memo':BASEURl+'wcrmc/vis/memo.serv',//备注
  'visrecord':BASEURl+'wcrmc/vis/visRecord.serv',//互动记录

  'Zexperience':BASEURl+'wcrmc/cusHomepage/increasPersByExp.serv', //准增员首页-经验
  'Zeducation':BASEURl+'wcrmc/cusHomepage/increasPersByQualif.serv', //准增员首页-学历
  'Zyearincome':BASEURl+'wcrmc/cusHomepage/increasPersByInc.serv', //准增员首页-年收入
  'ZBd':BASEURl+'wcrmc/cusHomepage/increasPersByApply.serv', //准增员首页-保险
  'Zstatus':BASEURl+'wcrmc/cusHomepage/increasPersByStatus.serv', //准增员首页-状态




  'indexAllCus':BASEURl+'wcrmc/cusHomepage/toHomePage.serv',//客户登记首页-签单状态
  'followStatus':BASEURl+'wcrmc/cusHomepage/followStatus.serv',//客户登记首页-跟进状态
  'cusBirthday':BASEURl+'wcrmc/cusHomepage/cusBirthday.serv',//客户登记首页-客户生日
  'policyAnni':BASEURl+'wcrmc/cusHomepage/policyAnni.serv',//客户登记首页-保单周年日
  'schedule':BASEURl+'wcrmc/vis/schedule.serv', //客户登记首页

  'checkCustomer':BASEURl+'wcrmc/cusHomepage/isFirstEnter.serv', // 判断是否第一次进入
  'firstPullcuster':BASEURl+'wcrmc/cusHomepage/toPullByAgentid.serv', //拉去所有客户信息

  'appsurrender':BASEURl+'wcrmc/cusRegister/cusRegister.serv',//预登记
  'findCustomers':BASEURl+'wcrmc/cusList/cusListByName.serv',//查找客户
  'writeMaterial':BASEURl+'wcrmc/cusInfo/showCusInfo.serv',//编辑资料的查询
  'writeMaterialSub':BASEURl+'wcrmc/cusInfo/editCusInfo.serv',//编辑资料的提交
  'clienteleInfo':BASEURl+'wcrmc/cusInfo/showCusDetails.serv',//客户详情
  'editCusType':BASEURl+'wcrmc/cusInfo/editCusType.serv',//修改客户分类
  'editCusLabel':BASEURl+'wcrmc/cusInfo/editLable.serv',//修改客户标签
  'editRemark':BASEURl+'wcrmc/remark/editRemark.serv',//编辑联系人备注-从详情页进入编辑
  'editFamily':BASEURl+'wcrmc/cusFamily/cusFamily.serv',//编辑家庭成员
  'editFamilyPolicy':BASEURl+'wcrmc/familyPolicy/saveFamilyPolicy.serv',//编辑家庭保单
  'showFamilyPolicy':BASEURl+'wcrmc/familyPolicy/showPolicyDetail.serv',//查询家庭保单
  'deleteFamilyPolicy':BASEURl+'wcrmc/familyPolicy/deletePolicy.serv',//删除家庭保单
  'savePhotos':BASEURl+'wcrmc/familyPolicy/savePhotos.serv',//家庭保单、客户头像、互动记录中添加图片
  'deletePhoto':BASEURl+'wcrmc/familyPolicy/deletePhoto.serv',//家庭保单、客户头像、互动记录中删除图片

}
export default url;
