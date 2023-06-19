/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 手续费 - 手续费
   */
  FeeStatisticsFeePOST: (
    data: IFeeStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IFeeStatisticsResp>> => {
    return request({
      url: `/fee/statistics/fee`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
