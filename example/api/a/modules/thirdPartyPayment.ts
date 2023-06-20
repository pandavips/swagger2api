/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 三方支付管理 - 添加或编辑
   */

  ThirdPartyPaymentAddOrUpdatePOST: (
    data: IThirdPayUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/thirdPartyPayment/addOrUpdate`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 删除
   */

  ThirdPartyPaymentDeleteGET: (
    data: IThirdPartyPaymentDeleteGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/thirdPartyPayment/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 详情
   */

  ThirdPartyPaymentDetailGET: (
    data: IThirdPartyPaymentDetailGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IThirdPayDetailResp>> => {
    return request({
      url: `/thirdPartyPayment/detail`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 列表查询
   */

  ThirdPartyPaymentListPOST: (
    data: IThirdPayListReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IThirdPayListResp>[]> => {
    return request({
      url: `/thirdPartyPayment/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  }  };
