/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 工单 - 待理处理订单数量
   */
  WorkOrderPendingCountPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPendingCountResp>> => {
    return request({
      url: `/work/order/pendingCount`,
      method: "POST",
            ...config
    });
  }
  };
