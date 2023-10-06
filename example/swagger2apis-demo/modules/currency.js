/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 币种管理-启用/禁用
          req =>>
            IBiZhongQiYongJinYongQingQiuXinXi {
              code: string //币种代码
              status: number //状态：1 可用；0 不可用
            }
          */
    CurrencyEnablePOST: (data = {}, config = {}) => {
      return request({
        url: `/currency/enable`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 系统币种-基础币种  */
    CurrencyGetPOST: (config = {}) => {
      return request({
        url: `/currency/get`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 币种管理-查询
          req =>>
            ICurrencyQueryReq {
              end: string //结束时间
              keyword: string //币种代码
              start: string //开始时间
              status: number //状态：1 可用；0 不可用
            }
          */
    CurrencyQueryPOST: (data = {}, config = {}) => {
      return request({
        url: `/currency/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 币种管理-更新汇率
          req =>>
            IBiZhongHuiShuaiGengXinQingQiuXinXi {
              code: string //币种代码
              rate: number //汇率
            }
          */
    CurrencyRateUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/currency/rate/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 币种管理-USDT汇率  */
    CurrencyUsdtRatePOST: (config = {}) => {
      return request({
        url: `/currency/usdt/rate`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 币种管理-添加或编辑USDT汇率
          req =>>
            IUSDTGengXinQingQiuXinXi {
              rate: number //汇率
            }
          */
    CurrencyUsdtUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/currency/usdt/update`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
