/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 渠道充提信息接口-汇总信息
          req =>>
            IChannelDepostWithdrawSummaryReq {
              end: string //结束日期
              start: string //开始日期
            }
        
          res =>>
            IChannelDepostWithdrawSummaryResp {
              depositBaseAmount: number //充值金额（基础币种，已扣手续费）
              withdrawBaseAmount: number //提现金额（基础币种，已扣手续费）
            }
          */
    ChannelDepositWithdrawSummaryPOST: (data = {}, config = {}) => {
      return request({
        url: `/channel/deposit/withdraw/summary`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
