/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 账户相关 - 平台账户（归集地址）
   */

  AccountCollectionAccountGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICollectionAccountResp>> => {
    return request({
      url: `/account/collectionAccount`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 头寸余额
   */

  AccountHotAccountGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IHotAccountResp>> => {
    return request({
      url: `/account/hotAccount`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 平台账户 - 手续费余额
   */

  AccountPlatformGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPlatformAccountResp>> => {
    return request({
      url: `/account/platform`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 盘内实时余额
   */

  AccountStatisticsBalanceCurrentPOST: (
    data: IQueryCurrentAccountTotalReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAccountCurrentTotalResp>> => {
    return request({
      url: `/account/statistics/balance/current`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户相关 - 盘内历史余额
   */

  AccountStatisticsBalanceHistoryPOST: (
    data: IQueryAccountTotalReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAccountDailyTotalResp>[]> => {
    return request({
      url: `/account/statistics/balance/history`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户相关 - 单个用户余额
   */

  AccountUserBalancePOST: (
    data: IUserNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserAccountBalanceResp>> => {
    return request({
      url: `/account/userBalance`,
      method: "POST",
                      data: data,
                            ...config
    });
  }  };
