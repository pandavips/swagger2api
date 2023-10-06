/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 仪表盘-代理统计      
      res =>>
        IDashboardStatAgentResp {
          agentCount: number //代理人数
          amountRebatesData: IAgentData[] //返佣额
          depositAmountData: IAgentData[] //充值总额
          effectiveAgentCount: number //有效代理人数
          effectiveAmountRebates: number //有效流水返佣额
          negativeProfitAmountRebates: number //负盈利返佣额
          subUserCountData: IAgentData[] //下级会员数
          withdrawAmountData: IAgentData[] //提现总额
        }
    
      req =>>
        IYiBiaoPanCanShuDuiXiang {
          end: string //结束日期
          groupBy: number //统计纬度:1 按天 2 按周 3 按月
          proxyUid: number //包网商id,查全部传0
          start: string //起始日期
        }
      */
    DashboardStatAgentPOST: (data: IYiBiaoPanCanShuDuiXiang = {}, config = {}): Promise<IDashboardStatAgentResp> => {
      return request({
        url: `/dashboard/stat/agent`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 仪表盘-统计概览      
      req =>>
        IYiBiaoPanCanShuDuiXiang {
          end: string //结束日期
          groupBy: number //统计纬度:1 按天 2 按周 3 按月
          proxyUid: number //包网商id,查全部传0
          start: string //起始日期
        }
    
      res =>>
        ICunKuanTongJi {
          accountBalance: number //盘内余额
          actualWithdrawAmount: number //实际提款额（总提款额-手续费）
          bankDepositAmount: number //银行存款额
          channelDepositAmount: number //渠道存款额（三方支付）
          channelDepositNormalAmount: number //渠道存款额（普通）
          depositCount: number //存款笔数
          depositMaxAmount: number //单笔最高存款
          depositMinAmount: number //单笔最低存款
          depositUserAmount: number //存款人数
          depositWithdrawDiff: number //存取差额（总存款额-实际提款额）
          firstDeposit: number //首充
          firstDepositTotalAmount: number //首次存款总额
          firstDepositUserAmount: number //首次存款人数
          firstWithdrawAmount: number //首次提款总额
          firstWithdrawUserCount: number //首次提款人数
          gameCount: number //游戏笔数
          journalAccountAmount: number //有效流水统计
          lossAmount: number //总输
          negativeProfitAmount: number //负盈利额（总输-总赢）
          register: number //注册
          rewardAmount: number //赠送彩金统计
          signIn: number //签到
          sumWithdrawAmount: number //总提款额
          totalDeposit: number //总存款额
          usdtDepositAmount: number //USDT存款额
          userRebateAmount: number //会员反水统计
          userRebateCount: number //会员反水人数
          userRewardCount: number //赠送彩金会员人数
          winAmount: number //总赢
          withdrawCount: number //提款笔数
          withdrawFee: number //提款手续费
          withdrawUserCount: number //提款人数
        }
      */
    DashboardStatAmountPOST: (data: IYiBiaoPanCanShuDuiXiang = {}, config = {}): Promise<ICunKuanTongJi> => {
      return request({
        url: `/dashboard/stat/amount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 仪表盘-游戏排行      
      req =>>
        IYouXiPaiHangCanShuDuiXiang {
          end: string //结束日期
          proxyUid: number //包网商id,查全部传0
          start: string //起始日期
          xtype: string //没有提供描述
          ytype: string //没有提供描述
        }
    
      res =>>
        IYouXiPaiHangDuiXiang {
          elements: IZhuZhuangTuYuanSu[] //图表元素
        }
      */
    DashboardStatGameRankPOST: (data: IYouXiPaiHangCanShuDuiXiang = {}, config = {}): Promise<IYouXiPaiHangDuiXiang> => {
      return request({
        url: `/dashboard/stat/gameRank`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 仪表盘-会员统计      
      res =>>
        IDashboardStatUserResp {
          activityCount: number //活跃会员
          activityData: IUserActivityDaily[] //活跃会员折线数据
          depositCount: number //存款会员
          depositData: IUserActivityDaily[] //存款会员折线数据
          effectiveCount: number //有效会员数
          onlineUserCount: number //当前实时在线会员
          registerCount: number //注册会员
          registerData: IUserActivityDaily[] //注册会员折线数据
          withdrawCount: number //提款会员
          withdrawData: IUserActivityDaily[] //提款会员折线数据
        }
    
      req =>>
        IYiBiaoPanCanShuDuiXiang {
          end: string //结束日期
          groupBy: number //统计纬度:1 按天 2 按周 3 按月
          proxyUid: number //包网商id,查全部传0
          start: string //起始日期
        }
      */
    DashboardStatUserPOST: (data: IYiBiaoPanCanShuDuiXiang = {}, config = {}): Promise<IDashboardStatUserResp> => {
      return request({
        url: `/dashboard/stat/user`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 仪表盘-会员统计折线图      
      res =>>
        IDashboardStatUserResp {
          activityCount: number //活跃会员
          activityData: IUserActivityDaily[] //活跃会员折线数据
          depositCount: number //存款会员
          depositData: IUserActivityDaily[] //存款会员折线数据
          effectiveCount: number //有效会员数
          onlineUserCount: number //当前实时在线会员
          registerCount: number //注册会员
          registerData: IUserActivityDaily[] //注册会员折线数据
          withdrawCount: number //提款会员
          withdrawData: IUserActivityDaily[] //提款会员折线数据
        }
    
      req =>>
        IYiBiaoPanCanShuDuiXiang {
          end: string //结束日期
          groupBy: number //统计纬度:1 按天 2 按周 3 按月
          proxyUid: number //包网商id,查全部传0
          start: string //起始日期
        }
      */
    DashboardStatUserPolylinePOST: (data: IYiBiaoPanCanShuDuiXiang = {}, config = {}): Promise<IDashboardStatUserResp> => {
      return request({
        url: `/dashboard/stat/user/polyline`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
