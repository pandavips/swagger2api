/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 账户相关-平台账户（归集地址）      
      res =>>
        ICollectionAccountResp {
          bscUsdtAmount: number //usdt-bsc
          trcUsdtAmount: number //usdt-trc
        }
      */
    AccountCollectionAccountGET: (config = {}): Promise<ICollectionAccountResp> => {
      return request({
        url: `/account/collectionAccount`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 账户相关-头寸余额      
      res =>>
        IHotAccountResp {
          bscAmount: number //头寸币安币余额
          tronAmount: number //头寸波场币余额
          usdtAmount: number //头寸USDT余额
          usdtAmountBsc: number //币安USDT余额
        }
      */
    AccountHotAccountGET: (config = {}): Promise<IHotAccountResp> => {
      return request({
        url: `/account/hotAccount`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 账户相关-平台账户 - 手续费余额      
      res =>>
        IPlatformAccountResp {
          feeCNY: number //手续费账户(CNY)
          feeUSDT: number //手续费账户(USDT)，这是充U的手续费
        }
      */
    AccountPlatformGET: (config = {}): Promise<IPlatformAccountResp> => {
      return request({
        url: `/account/platform`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 账户相关-盘内实时余额      
      res =>>
        IAccountCurrentTotalResp {
          accountBalance: number //盘内余额(不包括游戏账户和冻结余额)
          accountTotal: number //盘内总余额(包括冻结余额, 不包括游戏账户)
          channelBalance: number //游戏账户余额
        }
    
      req =>>
        IQueryCurrentAccountTotalReq {
          agentUid: number //代理商编号
        }
      */
    AccountStatisticsBalanceCurrentPOST: (data: IQueryCurrentAccountTotalReq = {}, config = {}): Promise<IAccountCurrentTotalResp> => {
      return request({
        url: `/account/statistics/balance/current`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 账户相关-盘内历史余额      
      req =>>
        IQueryAccountTotalReq {
          agentUid: number //代理商编号
          end: string //结束日期
          start: string //起始日期
        }
      */
    AccountStatisticsBalanceHistoryPOST: (data: IQueryAccountTotalReq = {}, config = {}): Promise<IAccountDailyTotalResp[]> => {
      return request({
        url: `/account/statistics/balance/history`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 账户相关-单个用户余额      
      res =>>
        IUserAccountBalanceResp {
          amountCNY: number //cny余额
          amountUSDT: number //usdt余额
        }
    
      req =>>
        IUserNoReq {
          userNo: number //用户编号
        }
      */
    AccountUserBalancePOST: (data: IUserNoReq = {}, config = {}): Promise<IUserAccountBalanceResp> => {
      return request({
        url: `/account/userBalance`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
