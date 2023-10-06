/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 工单-待理处理订单数量
          res =>>
            IPendingCountResp {
              agentApplyCount: number //代理申请数量
              depositCount: number //充值单数量
              withdrawCount: number //提现/币单数量
            }
          */
    WorkOrderPendingCountPOST: (config = {}) => {
      return request({
        url: `/work/order/pendingCount`,
        method: "POST",
        ...config
      });
    }
  };
};
