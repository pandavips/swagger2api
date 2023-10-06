/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 归集管理-获取归集配置信息
          res =>>
            ICollectResp {
              collectAddress: string //波场归集地址
              collectAddressBsc: string //币安归集地址
              hotAddress: string //波场头寸地址
              hotAddressBsc: string //币安头寸地址
              minAmount: number //最小归集金额
              period: number //归集周期(小时)
            }
          */
    CollectGetGET: (config = {}) => {
      return request({
        url: `/collect/get`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 归集管理-更新归集地址
          req =>>
            IAddressReq {
              address: string //地址
              chain: string //链 币安:BSC 波场:TRON
            }
          */
    CollectUpdateCollectPOST: (data = {}, config = {}) => {
      return request({
        url: `/collect/updateCollect`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 归集管理-更新头寸
          req =>>
            IPrivateKeyReq {
              chain: string //链 币安:BSC 波场:TRON
              privateKey: string //私钥
            }
          */
    CollectUpdateHotPOST: (data = {}, config = {}) => {
      return request({
        url: `/collect/updateHot`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
