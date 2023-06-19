/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 支付渠道管理 - 查询支付渠道帐号列表
   */
  PaymentChannelAccountQueryListPOST: (
    data: IQueryPaymentChannelReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPaymentChannelResq>[]> => {
    return request({
      url: `/payment/channel/account/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 支付渠道管理 - 新增或修改支付渠道
   */
  PaymentChannelAccountUpdatePOST: (
    data: IPaymentChannelReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/payment/channel/account/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 支付渠道管理 - 查询支付渠道列表（boss分配给包网商的）
   */
  PaymentChannelQueryListPOST: (
    data: IQueryPaymentChannelReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/payment/channel/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
