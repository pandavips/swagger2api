/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 手续费-手续费
          req =>>
            IFeeStatisticsReq {
              end: string //结束日期
              start: string //起始日期
            }
        
          res =>>
            IFeeStatisticsResp {
              digitalFee: number //USDT手续费
              fee: number //手续费
              legalFee: number //法币手续费
              withdrawFee: number //提款手续费
            }
          */
    FeeStatisticsFeePOST: (data = {}, config = {}) => {
      return request({
        url: `/fee/statistics/fee`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
