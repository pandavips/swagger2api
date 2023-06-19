/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 渠道充提信息接口 - 汇总信息
   */
  ChannelDepositWithdrawSummaryPOST: (
    data: IChannelDepostWithdrawSummaryReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IChannelDepostWithdrawSummaryResp>> => {
    return request({
      url: `/channel/deposit/withdraw/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
