/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 包网商达成条件配置-获取达成条件配置
          res =>>
            IProxyAchievingConditionsResp {
              calculationPeriod: string //结算周期:DAY,WEEK,HALF_MONTH,MONTH
              conditionsChildList: IAchievingConditionsChildReq[] //周期内有效流水
              directlyUnderMembers: number //周期直属有效会员数
              negativeProfitIsAccumulated: boolean //负盈利是否累计
              settlementMethod: boolean //结算方式: false自动、true手动
              subordinateMembers: number //周期内下级VIP用户数
              totalMembers: number //周期总有效会员数
              validAmount: number //周期内有效流水
              validDepositAmount: number //周期内存款值
              validNegativeProfit: number //周期内负盈利值
              vipLevel: number //vip等级
            }
        
          req =>>
            IOperateconfigachievinggetAchievingConditionsQueryParams {
              agentId: number //agentId
            }
          */
    OperateConfigAchievingGetAchievingConditionsGET: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/achieving/getAchievingConditions`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 包网商达成条件配置-更新达成条件配置
          req =>>
            IUpdateAchievingConditionsReq {
              agentId: number //代理id
              calculationPeriod: string //结算周期：DAY,WEEK,HALF_MONTH,MONTH
              conditionsChildList: IAchievingConditionsChildReq[] //周期内有效流水
              directlyUnderMembers: number //周期直属有效会员数
              negativeProfitIsAccumulated: boolean //负盈利是否累计
              settlementMethod: boolean //结算方式: false自动、true手动
              subordinateMembers: number //周期内下级VIP用户数
              totalMembers: number //周期总有效会员数
              validAmount: number //周期内有效流水
              validDepositAmount: number //周期内存款值
              validNegativeProfit: number //周期内负盈利值
              vipLevel: number //vip等级
            }
          */
    OperateConfigAchievingUpdateAchievingConditionsPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/achieving/updateAchievingConditions`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-配置中心获取包网商配置
          res =>>
            IProxyRelationConfigResp {
              bankCardBoundOnce: boolean //同一银行卡是否仅绑定一次
              bankCardEditAndDelete: number //银行卡是否可编辑和删除：0否，1是
              bankCardTopUp: number //银行卡充值：0否，1是
              commissionMultiple: number //佣金提现流水倍数
              depositMultiple: number //充值流水有效倍数
              id: number //数据id
              invitationCodeSet: boolean //邀请码是否必填：false:否，true:是
              minimumBalance: number //提现条件阈值
              proxyId: number //包网商ID
              registerAmountLimit: number //ip注册数量限制
              thirdTopUp: number //三方充值：0否，1是
              userBankCardAmount: number //用户绑定银行卡数量限制
              userRelationAccount: string //会员关联账号,多个用英文逗号分隔,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联,bankCard:相同银行卡关联,parentAgent:相同上级代理关联
              userRelationProcessMode: number //关联会员处理方式，1：不处理，2:自动拉黑
              userRelationProcessRange: number //关联会员处理范围，1:全部关联会员，2:仅当前会员，3:仅当前及以后注册会员
            }
          */
    OperateConfigCenterGetProxyConfigGET: (config = {}) => {
      return request({
        url: `/operate/config/center/getProxyConfig`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新银行卡充值设置
          req =>>
            IUpdateBankCardTopUpReq {
              bankCardTopUp: number //银行卡充值 0：关闭；1:打开
            }
          */
    OperateConfigCenterUpdateBankCardTopUpPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateBankCardTopUp`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新佣金提现流水倍数设置
          req =>>
            IUpdateCommissionMultipleReq {
              multiple: number //佣金提现流水倍数
            }
          */
    OperateConfigCenterUpdateCommissionMultiplePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateCommissionMultiple`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新充值有效流水倍数
          req =>>
            IChongZhiLiuShuiYouXiaoBeiShu {
              multiple: number //倍数
            }
          */
    OperateConfigCenterUpdateDepositMultiplePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateDepositMultiple`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新邀请码必填设置
          req =>>
            IUpdateInvitationCodeSetReq {
              invitationCodeSet: boolean //邀请码是否必填
            }
          */
    OperateConfigCenterUpdateInvitationCodeSetPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateInvitationCodeSet`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新提现条件阈值
          req =>>
            IUpdateMinimumBalanceReq {
              minimumBalance: number //提现条件阈值
            }
          */
    OperateConfigCenterUpdateMinimumBalancePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateMinimumBalance`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-修改ip最大注册个数限制
          req =>>
            IZhuCeShuLiangXianZhi {
              amount: number //最大注册数
            }
          */
    OperateConfigCenterUpdateRegisterAmountPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateRegisterAmount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新三方充值设置
          req =>>
            IUpdateThirdTopUpReq {
              thirdTopUp: number //三方充值 0：关闭；1:打开
            }
          */
    OperateConfigCenterUpdateThirdTopUpPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateThirdTopUp`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-用户绑定银行卡限制
          req =>>
            IXiuGaiYongHuYinHangKaBangDingShuLiang {
              amount: number //最大数量
              bankCardEditAndDelete: number //银行卡是否可编辑和删除：0否，1是
              boundOnce: boolean //同一银行卡仅绑定一次
            }
          */
    OperateConfigCenterUpdateUserBankCardAmountPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateUserBankCardAmount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商配置中心-更新会员关联账号
          req =>>
            IHuiYuanGuanLianZhangHao {
              userRelationAccount: string //会员关联账号,多个用英文逗号分隔,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联,bankCard:相同银行卡关联,parentAgent:相同上级代理关联
              userRelationProcessMode: number //关联会员处理方式，1：不处理，2:自动拉黑
              userRelationProcessRange: number //关联会员处理范围，1:全部关联会员，2:仅当前会员，3:仅当前及以后注册会员
            }
          */
    OperateConfigCenterUpdateUserRelationAccountPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/center/updateUserRelationAccount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 包网商配置中心游戏比例配置-获取游戏比例配置  */
    OperateConfigGameScaleGetGameScaleGET: (config = {}) => {
      return request({
        url: `/operate/config/gameScale/getGameScale`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 包网商配置中心游戏比例配置-更新游戏比例配置  */
    OperateConfigGameScaleUpdateGameScalePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/gameScale/updateGameScale`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: ip访问限制-添加
          req =>>
            IIpGuiZeTianJiaCanShu {
              rangeType: string //范围类型,REGION:地区,IP_PATTERN:ip模式,IP_RANGE:ip范围
              ruleEnd: string //结束规则
              ruleStart: string //开始规则
            }
          */
    OperateConfigIpControlAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/ipControl/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: ip访问限制-删除  */
    OperateConfigIpControlDel$id$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/config/ipControl/del/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: ip访问限制-删除  */
    OperateConfigIpControlDelByCodePOST: (code = "", config = {}) => {
      return request({
        url: `/operate/config/ipControl/del/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: ip访问限制-删除  */
    OperateConfigIpControlDelByCodeIdPOST: (code = "", config = {}) => {
      return request({
        url: `/operate/config/ipControl/del/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: ip访问限制-规则列表
          res =>>
            IPageResultipGuiZeVo {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IIpGuiZeVo[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IFangWenKongZhiLieBiaoCanShu {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
            }
          */
    OperateConfigIpControlListPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/config/ipControl/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: ip访问限制-获取地区基础配置  */
    OperateConfigIpControlRegionListPOST: (config = {}) => {
      return request({
        url: `/operate/config/ipControl/regionList`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 客服配置-删除  */
    OperateCustomerServiceDelete$id$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/delete/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 客服配置-删除  */
    OperateCustomerServiceDeleteByCodePOST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/delete/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 客服配置-删除  */
    OperateCustomerServiceDeleteByCodeIdPOST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/delete/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 客服配置-获取配置列表
          res =>>
            IPageResultBaoWangShangKeFuPeiZhiXinXi {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IBaoWangShangKeFuPeiZhiXinXi[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPeiZhiChaXunDuiXiang {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: boolean //需要查询的状态
            }
          */
    OperateCustomerServicePagePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/customer/service/page`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 客服配置-保存配置
          req =>>
            IBaoWangShangKeFuPeiZhiCanShuDuiXiang {
              content: string //内容
              id: number //没有提供描述
              img: string //logo图片
              name: string //客服人员名称
              status: boolean //状态
              type: string //客服类型
              url: string //跳转链接
            }
          */
    OperateCustomerServiceSavePOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/customer/service/save`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 客服配置-修改状态  */
    OperateCustomerServiceStatus$id$$status$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/status/${code}/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 客服配置-修改状态  */
    OperateCustomerServiceStatusByCode$status$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/status/${code}/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 客服配置-修改状态  */
    OperateCustomerServiceStatusByCodeId$status$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/status/${code}/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 客服配置-getById
          res =>>
            IBaoWangShangKeFuPeiZhiXinXi {
              content: string //内容
              createTime: string //没有提供描述
              id: number //没有提供描述
              img: string //logo图片
              imgUrl: string //图片链接
              name: string //客服人员名称
              proxyUid: number //所属包网商
              status: boolean //状态
              type: string //客服类型
              updateTime: string //没有提供描述
              url: string //跳转链接
            }
          */
    OperateCustomerService$id$POST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 客服配置-getById
          res =>>
            IBaoWangShangKeFuPeiZhiXinXi {
              content: string //内容
              createTime: string //没有提供描述
              id: number //没有提供描述
              img: string //logo图片
              imgUrl: string //图片链接
              name: string //客服人员名称
              proxyUid: number //所属包网商
              status: boolean //状态
              type: string //客服类型
              updateTime: string //没有提供描述
              url: string //跳转链接
            }
          */
    OperateCustomerServiceByCodePOST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 客服配置-getById
          res =>>
            IBaoWangShangKeFuPeiZhiXinXi {
              content: string //内容
              createTime: string //没有提供描述
              id: number //没有提供描述
              img: string //logo图片
              imgUrl: string //图片链接
              name: string //客服人员名称
              proxyUid: number //所属包网商
              status: boolean //状态
              type: string //客服类型
              updateTime: string //没有提供描述
              url: string //跳转链接
            }
          */
    OperateCustomerServiceByCodeIdPOST: (code = "", config = {}) => {
      return request({
        url: `/operate/customer/service/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 用户达成数据查询-获取结算达成情况
          res =>>
            IUserAchievingBo {
              depositAmount: number //存款值
              directSum: number //直属有效会员数
              effectiveSum: number //总有效会员数
              gameValidAmount: number //有效流水
              negativeProfitAmount: number //负盈利
              vipSum: number //达成条件的vip用户数
              withdrawAmount: number //提款值
            }
        
          req =>>
            IUserAchievingReq {
              userId: number //用户Id
            }
          */
    OperateGetAchievingPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/getAchieving`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 包网商有效会员标准设置-获取有效会员标准配置
          res =>>
            IProxyValidMembersResp {
              bettingDays: number //下注天数
              bettingNum: number //下注次数
              calculationPeriod: number //计算周期(天)
              id: number //数据id
              proxyId: number //包网商ID
              validAmount: number //投注有效流水
              validDepositAmount: number //存款金额
              validNegativeProfit: number //负盈利金额
            }
          */
    OperateValidMembersGetProxyValidMembersGET: (config = {}) => {
      return request({
        url: `/operate/validMembers/getProxyValidMembers`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 包网商有效会员标准设置-更新有效会员设置
          req =>>
            IUpdateValidMembersReq {
              bettingDays: number //下注天数
              bettingNum: number //下注次数
              calculationPeriod: number //计算周期
              depositAmount: number //存款金额
              negativeProfitAmount: number //负盈利金额
              validAmount: number //投注有效流水
            }
          */
    OperateValidMembersUpdateValidMembersPOST: (data = {}, config = {}) => {
      return request({
        url: `/operate/validMembers/updateValidMembers`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
