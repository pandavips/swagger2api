/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 日常数据-充/提数据统计      
      req =>>
        IDailyStatisticsReq {
          agentId: number //代理编号
          end: string //结束日期
          start: string //起始日期
        }
    
      res =>>
        IProxyDailyStatResp {
          depositCount: number //充值笔数
          firstDeposit: number //首存人数
          secondDeposit: number //二存人数
          withdrawCount: number //提现笔数
          withdrawUserCount: number //提现人数
        }
      */
    DailyStatisticsDepositWithdrawPOST: (data: IDailyStatisticsReq = {}, config = {}): Promise<IProxyDailyStatResp> => {
      return request({
        url: `/daily/statistics/depositWithdraw`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 日常数据-充值/提现人数查询      
      req =>>
        IDailyStatisticsReq {
          agentId: number //代理编号
          end: string //结束日期
          start: string //起始日期
        }
      */
    DailyStatisticsDepositWithdrawUserCountPOST: (data: IDailyStatisticsReq = {}, config = {}): Promise<IDepositUserCountResp[]> => {
      return request({
        url: `/daily/statistics/depositWithdrawUserCount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 日常数据-注册人数详情查询      
      res =>>
        IPageResultRegisterDetailsResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IRegisterDetailsResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IRegisterDetailsReq {
          account: string //用户名
          end: string //结束日期
          firstDeposit: number //是否首存（1:是；0否）
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          proxyId: number //没有提供描述
          start: string //起始日期
          userId: number //用户id
        }
      */
    DailyStatisticsQueryRegisterDetailsPOST: (data: IRegisterDetailsReq = {}, config = {}): Promise<IPageResultRegisterDetailsResp> => {
      return request({
        url: `/daily/statistics/queryRegisterDetails`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 日常数据-实时在线人数查询  */
    DailyStatisticsRealTimeOnlineUsersGET: (config = {}): Promise<number> => {
      return request({
        url: `/daily/statistics/realTimeOnlineUsers`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 日常数据-注册和活跃数据      
      req =>>
        IDailyStatisticsReq {
          agentId: number //代理编号
          end: string //结束日期
          start: string //起始日期
        }
    
      res =>>
        IUserActionStatisticsResp {
          activityCount: number //活跃用户数
          activityData: IUserActivityDaily[] //活跃用户折线数据
          registerCount: number //注册用户数
          registerData: IUserActivityDaily[] //注册用户折线数据
        }
      */
    DailyStatisticsUserActionPOST: (data: IDailyStatisticsReq = {}, config = {}): Promise<IUserActionStatisticsResp> => {
      return request({
        url: `/daily/statistics/userAction`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
