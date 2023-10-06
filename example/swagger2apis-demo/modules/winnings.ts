/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 用户彩金发放记录-导出excel      
      req =>>
        IWinningsrecordexportExcelQueryParams {
          agentUid: number //代理id
          userId: number //用户id
          start: number //到账时间
          end: number //到账时间
          activityType: string //活动类型
        }
      */
    WinningsRecordExportExcelGET: (data: IWinningsrecordexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/winnings/record/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 用户彩金发放记录-彩金记录查询      
      res =>>
        IPageResultYongHuCaiJinFaFangJiLu {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IYongHuCaiJinFaFangJiLu[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang {
          activityType: string //活动类型
          agentUid: string //代理id
          agentUidLong: number //没有提供描述
          end: string //到账时间
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          reviewTimeEnd: string //审核时间-结束
          reviewTimeStart: string //审核时间-开始
          start: string //到账时间
          statusList: number[] //状态
          userId: number //用户id
        }
      */
    WinningsRecordPagePOST: (
      data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang = {},
      config = {}
    ): Promise<IPageResultYongHuCaiJinFaFangJiLu> => {
      return request({
        url: `/winnings/record/page`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户彩金发放记录-彩金审核      
      req =>>
        IReviewUserWinningsRecordProxyReq {
          agentUid: number //代理id
          explainReview: string //说明(原因)
          id: number //id
          status: number //状态(1:通过；2:拒绝)
          userId: number //用户id
        }
      */
    WinningsRecordReviewPOST: (data: IReviewUserWinningsRecordProxyReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/winnings/record/review`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户彩金发放记录-查询统计信息      
      req =>>
        IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang {
          activityType: string //活动类型
          agentUid: string //代理id
          agentUidLong: number //没有提供描述
          end: string //到账时间
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          reviewTimeEnd: string //审核时间-结束
          reviewTimeStart: string //审核时间-开始
          start: string //到账时间
          statusList: number[] //状态
          userId: number //用户id
        }
    
      res =>>
        ICaiJinTongJiShuJuBossZhiDuiXiang {
          missionAmount: number //任务彩金总发放数
          missionScore: number //任务彩金总发放分
          otherAmount: number //其他彩金总发放数
          otherScore: number //其他彩金总发放分
          refuseAmount: number //审核拒绝金额
          registerAmount: number //注册彩金总发放数
          signInAmount: number //签到彩金总发放数
          systemAllocateAmount: number //红包发放数量
          totalAmount: number //彩金总发放数
          unreviewAmount: number //待审核金额
          vipAmount: number //vip彩金总发放数
          vipScore: number //vip彩金总发放分
        }
      */
    WinningsRecordStatisticPOST: (
      data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang = {},
      config = {}
    ): Promise<ICaiJinTongJiShuJuBossZhiDuiXiang> => {
      return request({
        url: `/winnings/record/statistic`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 彩金规则配置控制器-删除配置      
      req =>>
        ICaiJinPeiZhiChaXunDuiXiang {
          id: number //主键
          proxyUid: number //包网商id
        }
      */
    WinningsRuleDeletePOST: (data: ICaiJinPeiZhiChaXunDuiXiang = {}, config = {}): Promise<null> => {
      return request({
        url: `/winnings/rule/delete`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 彩金规则配置控制器-通过id获取配置      
      res =>>
        ICaiJinGuiZePeiZhiXinXi {
          allocateRule: IHouTaiFaFangGuiZe[] //客服分配规则，对应配置类型：SYSTEM_ALLOCATION
          createTime: string //没有提供描述
          firstDepositRule: IShouChongLeiXingGuiZe[] //首次存款规则，对应配置类型：FIRST_DEPOSIT
          id: number //没有提供描述
          needReview: number //是否需要审核：1 是；0 否；红包传0
          oneAssAccountOneTime: number //关联帐号是否只参加一次：1 是；0 否；红包传0
          proxyUid: number //包网商id
          registerRule: IZhuCeLeiXingGuiZe[] //注册规则，对应配置类型：REGISTER
          signInRule: IQianDaoLeiXingGuiZe[] //签到规则，对应配置类型：SIGN_IN
          status: boolean //状态
          type: string //当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN
          updateTime: string //没有提供描述
        }
    
      req =>>
        ICaiJinPeiZhiChaXunDuiXiang {
          id: number //主键
          proxyUid: number //包网商id
        }
      */
    WinningsRuleGetPOST: (data: ICaiJinPeiZhiChaXunDuiXiang = {}, config = {}): Promise<ICaiJinGuiZePeiZhiXinXi> => {
      return request({
        url: `/winnings/rule/get`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 彩金规则配置控制器-列表      
      res =>>
        IPageResultCaiJinGuiZePeiZhiXinXi {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: ICaiJinGuiZePeiZhiXinXi[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IPaging {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    WinningsRulePagePOST: (data: IPaging = {}, config = {}): Promise<IPageResultCaiJinGuiZePeiZhiXinXi> => {
      return request({
        url: `/winnings/rule/page`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 彩金规则配置控制器-保存配置      
      req =>>
        ICaiJinGuiZePeiZhiCanShuDuiXiang {
          allocateRule: IHouTaiFaFangGuiZe[] //客服分配规则，对应配置类型：SYSTEM_ALLOCATION, MISSION
          firstDepositRule: IShouChongLeiXingGuiZe[] //首次存款规则，对应配置类型：FIRST_DEPOSIT
          id: number //主键，新增是为空
          needReview: number //是否需要审核：1 是；0 否；红包传0
          oneAssAccountOneTime: number //关联帐号是否只参加一次：1 是；0 否；红包传0
          proxyUid: number //包网商id
          registerRule: IZhuCeLeiXingGuiZe[] //注册规则，对应配置类型：REGISTER
          signInRule: IQianDaoLeiXingGuiZe[] //签到规则，对应配置类型：SIGN_IN
          status: boolean //状态
          type: string //当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN,MISSION
        }
      */
    WinningsRuleSavePOST: (data: ICaiJinGuiZePeiZhiCanShuDuiXiang = {}, config = {}): Promise<null> => {
      return request({
        url: `/winnings/rule/save`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
