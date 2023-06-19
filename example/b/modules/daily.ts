/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 日常数据 - 充/提数据统计
   */
  DailyStatisticsDepositWithdrawPOST: (
    data: IDailyStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyDailyStatResp>> => {
    return request({
      url: `/daily/statistics/depositWithdraw`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 日常数据 - 充值/提现人数查询
   */
  DailyStatisticsDepositWithdrawUserCountPOST: (
    data: IDailyStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositUserCountResp>[]> => {
    return request({
      url: `/daily/statistics/depositWithdrawUserCount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 日常数据 - 注册和活跃数据
   */
  DailyStatisticsUserActionPOST: (
    data: IDailyStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserActionStatisticsResp>> => {
    return request({
      url: `/daily/statistics/userAction`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
