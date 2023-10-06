/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 用户管理-新增会员      
      req =>>
        IAddUserReq {
          account: string //账号
          inviteCode: string //邀请码
          password: string //密码
        }
      */
    UserAddUserPOST: (data: IAddUserReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/addUser`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-删除      
      req =>>
        IUserBankCardDetailReq {
          bizCardCode: string //业务卡号
          userId: number //用户ID
        }
      */
    UserBankCardDeleteCardPOST: (data: IUserBankCardDetailReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/bankCard/deleteCard`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-银行卡 - 详情      
      res =>>
        IBankCardDetailResp {
          bankName: string //银行名称
          bankNameEn: string //银行英文名称
          bankNamePh: string //银行菲律宾名称
          bankNameTh: string //银行泰语名称
          bankNameVn: string //银行越南名称
          currencyCode: string //法币，都好分割
          props: IBankCardDetailPropResp[] //其他属性
          receivingDayLimit: number //单日收款上限
          receivingEnd: string //收款结束时间
          receivingSingleMax: number //单笔收款最大金额
          receivingSingleMin: number //单笔收款最小金额
          receivingStart: string //收款开始时间
          status: number //状态：1 可用；0 不可用
          userLabel: string //用户标签，多个用逗号隔开
          userLabelText: string //用户标签文本，多个用逗号隔开
          vipLevel: string //vip等级，多个用逗号隔开
          vipLevelText: string //vip等级文本，多个用逗号隔开
        }
    
      req =>>
        IUserBankCardDetailReq {
          bizCardCode: string //业务卡号
          userId: number //用户ID
        }
      */
    UserBankCardDetailPOST: (data: IUserBankCardDetailReq = {}, config = {}): Promise<IBankCardDetailResp> => {
      return request({
        url: `/user/bankCard/detail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-编辑      
      req =>>
        IUserBankCardUpdateReq {
          bankName: string //银行名称
          bizCardCode: string //业务卡号，更新或查看时，必传
          currencyCode: string //法币，顿号（、）分割
          props: IBankCardUpdatePropReq[] //其他属性
          status: number //状态：1 可用；0 不可用
          userId: number //用户ID
        }
      */
    UserBankCardUpdatePOST: (data: IUserBankCardUpdateReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/bankCard/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-银行卡      
      req =>>
        IUserBankCardQueryReq {
          userId: number //用户ID
        }
      */
    UserBankCardsPOST: (data: IUserBankCardQueryReq = {}, config = {}): Promise<IUserBankCardQueryResp[]> => {
      return request({
        url: `/user/bankCards`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 子账号管理-添加子账号      
      req =>>
        IAddChildReq {
          account: string //子账号
          password: string //密码
          role: string //角色
          status: number //状态 1:启用 0:禁用
        }
      */
    UserChildAddPOST: (data: IAddChildReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/child/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 子账号管理-授权用户角色      
      req =>>
        IUserRoleRequestVo {
          roleIds: string[] //角色编号集合
          userId: string //用户编号
        }
      */
    UserChildAuthorizeRolePOST: (data: IUserRoleRequestVo = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/child/authorizeRole`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 子账号管理-查询子账号      
      res =>>
        IPageResultProxyChildResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IProxyChildResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IPaging {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    UserChildQueryListPOST: (data: IPaging = {}, config = {}): Promise<IPageResultProxyChildResp> => {
      return request({
        url: `/user/child/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-禁用用户      
      req =>>
        IUpdateUserStatusReq {
          remark: string //状态变更原因
          userId: number //用户编号
        }
      */
    UserDisableUserPOST: (data: IUpdateUserStatusReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/disableUser`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 用户管理-批量禁用用户  */
    UserDisableUserBatchPOST: (data: number[] = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/disableUser/batch`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-启用用户      
      req =>>
        IUpdateUserStatusReq {
          remark: string //状态变更原因
          userId: number //用户编号
        }
      */
    UserEnableUserPOST: (data: IUpdateUserStatusReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/enableUser`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 用户管理-批量启用用户  */
    UserEnableUserBatchPOST: (data: number[] = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/enableUser/batch`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-封锁/解封用户      
      req =>>
        IXiuGaiYongHuFengJinZhuangTai {
          forbidden: boolean //封锁：true，解封：false
          userId: number //用户id
        }
      */
    UserForbiddenUserPOST: (data: IXiuGaiYongHuFengJinZhuangTai = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/forbiddenUser`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 游戏记录相关-导出excel      
      req =>>
        IUsergameexportExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          factoryCode: string //游戏渠道
          typeId: number //游戏类型id
          start: number //开始时间
          end: number //结束时间
          fetchStart: number //拉取时间 - 开始时间
          fetchEnd: number //拉取时间 - 结束时间
          userId: number //用户编号
          userName: string //用户名
          proxyAccount: string //归属包网商
        }
      */
    UserGameExportExcelGET: (data: IUsergameexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/game/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 游戏记录相关-游戏记录      
      res =>>
        IPageResultUserGameRecordResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IUserGameRecordResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IUserGameRecordReq {
          end: number //结束时间
          factoryCode: string //游戏渠道
          fetchEnd: number //拉取时间 - 结束时间
          fetchStart: number //拉取时间 - 开始时间
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          proxyAccount: string //归属包网商
          start: number //开始时间
          typeId: number //游戏类型id
          userId: number //用户编号
          userName: string //用户名
        }
      */
    UserGameGetRecordPOST: (data: IUserGameRecordReq = {}, config = {}): Promise<IPageResultUserGameRecordResp> => {
      return request({
        url: `/user/game/getRecord`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 游戏记录相关-概况统计      
      req =>>
        IGameSummaryReq {
          end: number //结束时间
          start: number //开始时间
          userId: number //用户编号
          userName: string //用户编号
        }
    
      res =>>
        IGameSummaryResp {
          gameValidAmount: number //总有效流水
          negativeProfitAmount: number //总盘负盈利
          rewardAmount: number //彩金
        }
      */
    UserGameSummaryPOST: (data: IGameSummaryReq = {}, config = {}): Promise<IGameSummaryResp> => {
      return request({
        url: `/user/game/summary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-查询关联用户信息      
      req =>>
        IGuanLianHuiYuanChaXunQingQiuDuiXiang {
          userId: number //查询用户id
        }
    
      res =>>
        IGuanLianHuiYuanChaXunFanHuiDuiXiang {
          disabledUserCount: number //已拉黑数量
          relationUserCount: number //关联会员数量
        }
      */
    UserGetRelationUserInfoPOST: (data: IGuanLianHuiYuanChaXunQingQiuDuiXiang = {}, config = {}): Promise<IGuanLianHuiYuanChaXunFanHuiDuiXiang> => {
      return request({
        url: `/user/getRelationUserInfo`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-踢下线      
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserKickUserPOST: (data: IUserIdReq = {}, config = {}): Promise<string> => {
      return request({
        url: `/user/kickUser`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-修改用户标签      
      req =>>
        IUserLabelUpdate {
          labelCode: string //用户标签编码
          userId: number //用户编号
        }
      */
    UserLabelUpdatePOST: (data: IUserLabelUpdate = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/label/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-关联账号      
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserMatchPOST: (data: IUserIdReq = {}, config = {}): Promise<IUserRelationAccountResp[]> => {
      return request({
        url: `/user/match`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-查询用户账户      
      res =>>
        IUserAccountResp {
          balance: number //人民币总余额
          channelAccount: IChannelAccountResp[] //渠道余额信息
          channelBalance: number //游戏账户余额
        }
    
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserQueryPOST: (data: IUserIdReq = {}, config = {}): Promise<IUserAccountResp> => {
      return request({
        url: `/user/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-个人数据概况      
      res =>>
        IUserDataSummary {
          accountBalance: number //账户余额
          channelBalance: number //游戏账户余额
          deposit: number //充值累计
          depositWithdrawFactor: number //充值提现流水倍数
          effectiveBet: number //有效流水
          redBagWithdrawFactor: number //红包提现流水倍数
          remainNeedAmount: number //剩余需要的有效流水
          reverseProfit: number //负盈利
          rewardAmount: number //返佣累计
          userId: number //用户编号
          winnings: number //彩金累计
          withdraw: number //提现累计
        }
    
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserQueryDataSummaryPOST: (data: IUserIdReq = {}, config = {}): Promise<IUserDataSummary> => {
      return request({
        url: `/user/queryDataSummary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-查询用户详情      
      res =>>
        IUserDetailResp {
          account: string //账号
          agentCreateTime: string //成为代理时间
          agentLevel: number //代理级别
          birthday: string //生日
          businessIdNumber: string //企业身份号码
          createTime: string //注册时间
          effective: number //有效会员 1:是 0:否
          email: string //邮箱
          experience: number //经验值
          forbidden: boolean //封禁用户，true：封禁
          inviteAccount: string //邀请人账号(所属代理)
          inviteUid: number //邀请人编号
          inviteUrl: string //邀请链接
          isOnline: number //是否在线 1:是 0:否
          lastLogin: number //最后登录时间
          lastLoginIp: string //最后一次登陆ip
          layerCode: string //邀请码
          mobileArea: string //手机区号
          mobileNo: string //手机号
          nickName: string //昵称
          personalIdNumber: string //个人身份号码
          registerDevice: string //注册端(h5/pc端)
          registerIp: string //注册ip
          reminder: string //备注
          rewardRate: number //奖励比例
          rewardType: number //奖励类型 1:占成 2:返佣
          status: number //用户状态 1:正常 0:锁定
          telegram: string //飞机账号
          userId: number //用户编号
          userLabel: string //用户标签，多个逗号隔开
          userLabelText: string //用户标签文本，多个逗号隔开
          userName: string //真实姓名
          userType: number //用户类型 1:普通 3:一级代理 4:代理用户
          vipLevel: number //vip等级
          vipLevelName: string //vip等级名称
        }
    
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserQueryDetailPOST: (data: IUserIdReq = {}, config = {}): Promise<IUserDetailResp> => {
      return request({
        url: `/user/queryDetail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-查询用户列表      
      res =>>
        IPageResultUserResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IUserResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQueryUserListReq {
          account: string //账号
          agentUid: number //代理编号
          bankCardNumber: string //银行卡号
          effective: number //有效会员 1:是 0:否
          end: string //注册时间结束
          lastLoginIp: string //最后一次登陆ip
          mobileNo: string //手机号
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          registerIp: string //注册ip
          start: string //注册时间开始
          userId: number //用户编号
          userIdList: number[] //用户编号集合
          userLabel: string //用户标签，多个逗号隔开
          userName: string //用户名
          userType: number //用户类型 1:普通 4:代理用户
          vipLevel: number //vip等级
        }
      */
    UserQueryListPOST: (data: IQueryUserListReq = {}, config = {}): Promise<IPageResultUserResp> => {
      return request({
        url: `/user/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-查询用户操作日志      
      res =>>
        IPageResultOperationLogResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IOperationLogResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IUserOperationLogReq {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          userId: number //用户编号
        }
      */
    UserQueryLogPOST: (data: IUserOperationLogReq = {}, config = {}): Promise<IPageResultOperationLogResp> => {
      return request({
        url: `/user/queryLog`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-历史备注列表      
      req =>>
        IUserIdReq {
          userId: number //用户编号
        }
      */
    UserReminderListPOST: (data: IUserIdReq = {}, config = {}): Promise<IUserInfoReminderResp[]> => {
      return request({
        url: `/user/reminder/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-修改备注      
      req =>>
        IUserReminderUpdate {
          reminder: string //用户备注
          userId: number //用户编号
        }
      */
    UserReminderUpdatePOST: (data: IUserReminderUpdate = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/reminder/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-解锁密码错误限制      
      req =>>
        IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang {
          userId: number //用户id
        }
      */
    UserRemoveUserPwdErrCountPOST: (data: IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/removeUserPwdErrCount`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-重置手机号      
      req =>>
        IResetMobileNoReq {
          mobileArea: string //手机区号
          mobileNo: string //手机号
          userId: number //用户编号
        }
      */
    UserResetMobileNoPOST: (data: IResetMobileNoReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/resetMobileNo`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-重置登录密码      
      req =>>
        IResetPasswordReq {
          password: string //密码
          userId: number //用户编号
        }
      */
    UserResetPasswordPOST: (data: IResetPasswordReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/resetPassword`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-重置资金密码      
      req =>>
        IResetPasswordReq {
          password: string //密码
          userId: number //用户编号
        }
      */
    UserResetSecretPasswordPOST: (data: IResetPasswordReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/resetSecretPassword`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户统计-导出excel      
      req =>>
        IUserstatisticsexportExcelQueryParams {
          groupBy: number //统计纬度:1 按天；3 按月
          start: number //开始时间
          end: number //结束时间
        }
      */
    UserStatisticsExportExcelGET: (data: IUserstatisticsexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/statistics/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 用户统计-总用户信息      
      res =>>
        IUserStatisticsInfoResp {
          totalCount: number //总用户
        }
      */
    UserStatisticsInfoPOST: (config = {}): Promise<IUserStatisticsInfoResp> => {
      return request({
        url: `/user/statistics/info`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 用户统计-记录      
      req =>>
        IUserStatisticsReq {
          end: string //结束时间
          groupBy: number //统计纬度:1 按天；3 按月
          start: string //开始时间
        }
      */
    UserStatisticsListPOST: (data: IUserStatisticsReq = {}, config = {}): Promise<IUserStatisticsResp[]> => {
      return request({
        url: `/user/statistics/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-团队数据      
      req =>>
        ITeamStatisticsReq {
          end: string //时间范围结束
          start: string //时间范围开始
          statDateType: number //统计日期类型:0 今日；1 昨天；7 近7天；30 近30天；9999 全部
          userId: number //会员ID
        }
    
      res =>>
        ITeamStatisticsResp {
          agentCount: number //代理数
          depositAmount: number //存款值
          directSum: number //直属有效会员数
          effectiveSum: number //总有效会员数
          gameValidAmount: number //有效流水
          negativeProfitAmount: number //负盈利
          rewardAmount: number //彩金
          settleAmount: number //返佣金额
          userCount: number //总会员数
          vipSum: number //达成条件的vip用户数
          withdrawAmount: number //提款值
        }
      */
    UserTeamPOST: (data: ITeamStatisticsReq = {}, config = {}): Promise<ITeamStatisticsResp> => {
      return request({
        url: `/user/team`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户管理-修改用户信息      
      req =>>
        IUpdateUserReq {
          businessIdNumber: string //企业身份号码
          email: string //邮箱
          personalIdNumber: string //个人身份号码
          userId: number //用户编号
          userName: string //真实姓名
        }
      */
    UserUpdateUserPOST: (data: IUpdateUserReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/user/updateUser`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
