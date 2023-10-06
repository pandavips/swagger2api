/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
declare interface IAccountCurrentTotalResp {
  /**盘内余额(不包括游戏账户和冻结余额) */
  accountBalance: number;
  /**盘内总余额(包括冻结余额, 不包括游戏账户) */
  accountTotal: number;
  /**游戏账户余额 */
  channelBalance: number;
}
declare interface IAccountDailyTotalResp {
  /**余额 */
  amount: number;
  /**日期 */
  period: string;
}
declare interface IAchievingConditionsChildReq {
  /**流水下限 */
  lowerLimit: number;
  /**返佣比例 */
  proportion: number;
  /**有效流水最大值 */
  validAmountMax: number;
}
declare interface IAddAgentReq {
  /**代理账号 */
  account: string;
  /**代理类型 1:直营 2:招募 */
  agentType: number;
  /**密码 */
  password: string;
  /**代理域名 */
  proxyDomainId: number;
  /**奖励比例 0-1之间 */
  rewardRate: number;
  /**奖励类型 1:占成 2:返佣 */
  rewardType: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IAddArticleReq {
  /**内容(最大不能超过2000) */
  content: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**标题(最大不能超过64) */
  title: string;
}
declare interface IAddBannerReq {
  /**文件编号 */
  fileNo: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**链接(最大不能超过256) */
  url: string;
}
declare interface IAddChildReq {
  /**子账号 */
  account: string;
  /**密码 */
  password: string;
  /**角色 */
  role: string;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IAddDocReq {
  /**内容 */
  context: string;
  /**语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**名称 */
  name: string;
}
declare interface IAddPosterReq {
  /**图片 */
  img: string;
  /**语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态: false:待发布、true:发布中 */
  status: boolean;
}
declare interface IAddUserReq {
  /**账号 */
  account: string;
  /**邀请码 */
  inviteCode: string;
  /**密码 */
  password: string;
}
declare interface IAddVipReq {
  /**周期奖励彩金 */
  cycleLottery: number;
  /**降级存款值条件 */
  downDepositAmount: number;
  /**降级负盈利值条件 */
  downNegativeProfitAmount: number;
  /**降级有效流水值条件 */
  downValidAmount: number;
  /**降级有效会员数条件 */
  downValidMembers: number;
  /**升级存款值条件 */
  upDepositAmount: number;
  /**升级奖励彩金 */
  upLottery: number;
  /**升级负盈利值条件 */
  upNegativeProfitAmount: number;
  /**升级有效流水值条件 */
  upValidAmount: number;
  /**升级有效会员数条件 */
  upValidMembers: number;
  /**vip名称(中文) */
  vipName: string;
  /**vip名称(葡语-巴西) */
  vipNameBr: string;
  /**vip名称(菲律宾语) */
  vipNamePh: string;
  /**vip名称(泰语) */
  vipNameTh: string;
  /**vip名称(英文) */
  vipNameUs: string;
  /**vip名称(越南语) */
  vipNameVn: string;
}
declare interface IAddressReq {
  /**地址 */
  address: string;
  /**链 币安:BSC 波场:TRON */
  chain: string;
}
declare interface IAdjustWithdrawLimitReq {
  /**金额 */
  amount: number;
  /**类型：0：减少，1：增加 */
  type: number;
  /**用户id */
  userId: number;
}
declare interface IAdjustmentReq {
  /**金额 */
  amount: number;
  /**备注 */
  remark: string;
  /**类型：0：减少余额，1：增加余额，2：发红包，3:其它 */
  type: number;
  /**用户id */
  userId: number;
  /**提现流水倍数 */
  withdrawFactor: number;
}
declare interface IAgentApplyPassReq {
  /**申请编号 */
  applyId: string;
  /**上级代理编号 */
  parentUid: number;
  /**拒绝或通过原因 */
  remark: string;
  /**占成比例或返佣比例(当申请单奖励标志为1时必填) */
  rewardRate: number;
  /**奖励类型(当申请单奖励标志为1时必填) 1:占成 2:返佣 */
  rewardType: number;
}
declare interface IAgentApplyRefuseReq {
  /**申请编号 */
  applyId: string;
  /**拒绝或通过原因 */
  remark: string;
}
declare interface IAgentApplyResp {
  /**申请用户账号 */
  account: string;
  /**代理级别 */
  agentLevel: number;
  /**申请编号 */
  applyId: string;
  /**申请时间 */
  createTime: string;
  /**邀请链接 */
  inviteUrl: string;
  /**邀请码 */
  layerCode: string;
  /**上级代理账号 */
  parentAccount: string;
  /**上级代理编号 */
  parentUid: number;
  /**所属包网商 */
  proxyUid: number;
  /**通过或拒绝原因 */
  remark: string;
  /**是否需要指定分成或返佣及其比例 1:需要设置 0:不需要设置 */
  rewardFlag: number;
  /**状态 0:待审核 1:通过 2:拒绝 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**申请用户编号 */
  userId: number;
}
declare interface IAgentData {
  /**没有提供描述 */
  xvalue: string;
  /**没有提供描述 */
  yvalue: string;
}
declare interface IAgentIdReq {
  /**代理编号 */
  agentId: number;
}
declare interface IAgentInfoByParentResp {
  /**账号 */
  account: string;
  /**代理编号 */
  agentId: number;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**最后登录时间 */
  lastLoginTime: number;
  /**注册ip */
  registerIp: string;
  /**用户标签 */
  userLabel: string;
}
declare interface IAgentInfoResp {
  /**账号 */
  account: string;
  /**代理编号 */
  agentId: number;
  /**代理级别 */
  agentLevel: number;
  /**代理类型 1:直营 2:招募 3:会员申请 */
  agentType: number;
  /**创建时间 */
  createTime: string;
  /**邀请链接 */
  inviteUrl: string;
  /**邀请码 */
  layerCode: string;
  /**上级代理账号 */
  parentAccount: string;
  /**上级代理编号 */
  parentUid: number;
  /**包网商账号 */
  proxyAccount: string;
  /**代理域名ID */
  proxyDomainId: number;
  /**包网商编号 */
  proxyUid: number;
  /**奖励比例 */
  rewardRate: number;
  /**奖励类型 1:占成 2:返佣 */
  rewardType: number;
  /**代理状态 1:正常 0:锁定 */
  status: number;
}
declare interface IAgentSettleApplyResp {
  /**代理帐号 */
  agentAccount: string;
  /**代理级别 */
  agentLevel: number;
  /**代理类型 1:直营 2:招募 3:会员申请 */
  agentType: number;
  /**代理编号 */
  agentUserId: string;
  /**结算额 */
  amount: number;
  /**申请单号 */
  applyNo: string;
  /**创建时间 */
  createTime: string;
  /**周期结束日期 */
  endPeriod: string;
  /**上级代理 */
  parentAccount: string;
  /**上级代理ID */
  parentId: number;
  /**结算周期类型 */
  periodType: string;
  /**奖励类型 1:占成 2:返佣 */
  rewardType: number;
  /**结算单号 */
  settleNo: string;
  /**周期开始日期 */
  startPeriod: string;
  /**状态 0:用户提出（待审核）1：驳回 2：通过 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IAgentSettleReq {
  /**代理帐号 */
  agentAccount: string;
  /**代理ID */
  agentId: number;
  /**代理类型 1:直营 2:招募 3:会员申请 */
  agentType: number;
  /**结束时间 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**上级代理 */
  parentAccount: string;
  /**结算单号 */
  settleNo: string;
  /**开始时间 */
  start: string;
  /**状态  0:待审核 1：驳回 2：通过 */
  status: number;
}
declare interface IAgentSettleResp {
  /**代理帐号 */
  agentAccount: string;
  /**代理级别 */
  agentLevel: number;
  /**代理类型 1:直营 2:招募 3:会员申请 */
  agentType: number;
  /**没有提供描述 */
  agentTypeDesc: string;
  /**代理编号 */
  agentUserId: number;
  /**结算额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**结算周期编号 */
  cycleNo: string;
  /**周期结束日期 */
  endPeriod: string;
  /**结算周期类型 */
  periodType: string;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**包网商编号 */
  proxyUserId: number;
  /**奖励类型 1:占成 2:返佣 */
  rewardType: number;
  /**没有提供描述 */
  rewardTypeDesc: string;
  /**结算单号 */
  settleNo: string;
  /**周期开始日期 */
  startPeriod: string;
  /**状态：2：下层代理统计完成（只有这个状态可以提出申请）3:用户提出申请 8:未满足条件 9：线下或自动结算完成 */
  status: number;
  /**没有提供描述 */
  statusDesc: string;
  /**更新时间 */
  updateTime: string;
}
declare interface IAgentUpdateReq {
  /**代理编号 */
  agentId: number;
  /**代理域名 */
  proxyDomainId: number;
  /**奖励比例 0-1之间 */
  rewardRate: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IAreaIdReq {
  /**区域编号 */
  areaId: number;
}
declare interface IArticleIdReq {
  /**公告编号 */
  articleNo: string;
}
declare interface IArticleResp {
  /**公告编号 */
  articleNo: string;
  /**内容 */
  content: string;
  /**创建时间 */
  createTime: string;
  /**语言 */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**标题 */
  title: string;
  /**更新时间 */
  updateTime: string;
}
declare interface IAssetChangeLogReq {
  /**交易时间结束 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商编号 */
  proxyUid: number;
  /**交易时间开始 */
  start: string;
  /**类型 */
  type: string;
  /**用户编号 */
  userId: number;
}
declare interface IAssetChangeLogResp {
  /**上级代理名称 */
  agentName: string;
  /**上级代理id */
  agentUid: number;
  /**发生额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**方向 in:入金 out:出金 */
  direct: string;
  /**流水倍数 */
  multiple: number;
  /**所属包网商 */
  proxyName: string;
  /**所属包网商id */
  proxyUid: number;
  /**变动类型 */
  transactionType: string;
  /**变动类型文本 */
  transactionTypeText: string;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IAssetChangeLogType {
  /**下拉编码 */
  code: string;
  /**下拉文本 */
  text: string;
}
declare interface IBankCardDeleteReq {
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
}
declare interface IBankCardDetailPropResp {
  /**属性编码 */
  propCode: string;
  /**没有提供描述 */
  propDesc: string;
  /**没有提供描述 */
  propLen: number;
  /**属性名 */
  propName: string;
  /**属性葡语名 */
  propNameBr: string;
  /**属性英文名 */
  propNameEn: string;
  /**属性菲律宾名 */
  propNamePh: string;
  /**属性泰语名 */
  propNameTh: string;
  /**属性越南名 */
  propNameVn: string;
  /**是否必填 */
  propRequired: number;
  /**值 */
  propValue: string;
  /**更新时间 */
  updateTime: string;
}
declare interface IBankCardDetailReq {
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
}
declare interface IBankCardDetailResp {
  /**银行名称 */
  bankName: string;
  /**银行英文名称 */
  bankNameEn: string;
  /**银行菲律宾名称 */
  bankNamePh: string;
  /**银行泰语名称 */
  bankNameTh: string;
  /**银行越南名称 */
  bankNameVn: string;
  /**法币，都好分割 */
  currencyCode: string;
  /**其他属性 */
  props: IBankCardDetailPropResp[];
  /**单日收款上限 */
  receivingDayLimit: number;
  /**收款结束时间 */
  receivingEnd: string;
  /**单笔收款最大金额 */
  receivingSingleMax: number;
  /**单笔收款最小金额 */
  receivingSingleMin: number;
  /**收款开始时间 */
  receivingStart: string;
  /**状态：1 可用；0 不可用 */
  status: number;
  /**用户标签，多个用逗号隔开 */
  userLabel: string;
  /**用户标签文本，多个用逗号隔开 */
  userLabelText: string;
  /**vip等级，多个用逗号隔开 */
  vipLevel: string;
  /**vip等级文本，多个用逗号隔开 */
  vipLevelText: string;
}
declare interface IBankCardQueryReq {
  /**结束时间 */
  end: string;
  /**开始时间 */
  start: string;
  /**状态：1 可用；0 不可用 */
  status: number;
}
declare interface IBankCardQueryResp {
  /**银行账号 */
  bankAccount: string;
  /**银行名称 */
  bankName: string;
  /**银行英文名称 */
  bankNameEn: string;
  /**银行菲律宾名称 */
  bankNamePh: string;
  /**银行泰语名称 */
  bankNameTh: string;
  /**银行越南名称 */
  bankNameVn: string;
  /**业务卡号 */
  bizCardNo: string;
  /**币种编码 */
  currencyCode: string;
  /**币种名称 */
  currencyName: string;
  /**状态 1:开启 0:关闭 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IBankCardUpdatePropReq {
  /**属性编码 */
  propCode: string;
  /**属性名 */
  propName: string;
  /**值 */
  propValue: string;
}
declare interface IBankCardUpdateReq {
  /**银行名称 */
  bankName: string;
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
  /**法币，顿号（、）分割 */
  currencyCode: string;
  /**其他属性 */
  props: IBankCardUpdatePropReq[];
  /**单日收款上限 */
  receivingDayLimit: number;
  /**收款结束时间 */
  receivingEnd: string;
  /**单笔收款最大金额 */
  receivingSingleMax: number;
  /**单笔收款最小金额 */
  receivingSingleMin: number;
  /**收款开始时间 */
  receivingStart: string;
  /**状态：1 可用；0 不可用 */
  status: number;
  /**用户标签，多个用逗号隔开，为空表示全部 */
  userLabel: string;
  /**vip等级，多个用逗号隔开，为空表示全部 */
  vipLevel: string;
}
declare interface IBankDetailResp {
  /**银行名称 */
  bankName: string;
  /**银行英文名称 */
  bankNameEn: string;
  /**银行菲律宾名称 */
  bankNamePh: string;
  /**银行泰语名称 */
  bankNameTh: string;
  /**银行越南名称 */
  bankNameVn: string;
  /**其他属性 */
  props: IYinHangShuXingQingQiu[];
}
declare interface IBankQueryReq {
  /**银行名称 */
  bankName: string;
}
declare interface IBankQueryResp {
  /**银行信息数量 */
  bankCount: number;
  /**银行名称 */
  bankName: string;
  /**更新时间 */
  updateTime: string;
}
declare interface IBannerNoReq {
  /**横幅编号 */
  bannerNo: string;
}
declare interface IBannerResp {
  /**横幅编号 */
  bannerNo: string;
  /**创建时间 */
  createTime: string;
  /**横幅文件 */
  fileNo: string;
  /**横幅文件地址 */
  fileUrl: string;
  /**语言 */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**横幅点击跳转链接 */
  url: string;
}
declare interface IChannelAccountResp {
  /**余额 */
  balance: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
}
declare interface IChannelDepostWithdrawSummaryReq {
  /**结束日期 */
  end: string;
  /**开始日期 */
  start: string;
}
declare interface IChannelDepostWithdrawSummaryResp {
  /**充值金额（基础币种，已扣手续费） */
  depositBaseAmount: number;
  /**提现金额（基础币种，已扣手续费） */
  withdrawBaseAmount: number;
}
declare interface IChannelTypeResp {
  /**游戏渠道 */
  factoryCode: string;
  /**类型编号 */
  typeId: number;
  /**游戏类型名称 */
  typeName: string;
}
declare interface ICheckPassReq {
  /**申请单号 */
  applyNo: number;
  /**是否通过 */
  pass: boolean;
}
declare interface IChessCardGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IChessCardGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**抽水 */
  revenue: number;
  /**投注时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**投注额 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IChickenGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IChickenGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**结束时间 */
  endTime: number;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**投注额 */
  totalBet: number;
  /**用户Id */
  userId: number;
  /**有效投注 */
  validBet: number;
}
declare interface ICollectResp {
  /**波场归集地址 */
  collectAddress: string;
  /**币安归集地址 */
  collectAddressBsc: string;
  /**波场头寸地址 */
  hotAddress: string;
  /**币安头寸地址 */
  hotAddressBsc: string;
  /**最小归集金额 */
  minAmount: number;
  /**归集周期(小时) */
  period: number;
}
declare interface ICollectionAccountResp {
  /**usdt-bsc */
  bscUsdtAmount: number;
  /**usdt-trc */
  trcUsdtAmount: number;
}
declare interface ICurrencyQueryReq {
  /**结束时间 */
  end: string;
  /**币种代码 */
  keyword: string;
  /**开始时间 */
  start: string;
  /**状态：1 可用；0 不可用 */
  status: number;
}
declare interface IDailyStatisticsReq {
  /**代理编号 */
  agentId: number;
  /**结束日期 */
  end: string;
  /**起始日期 */
  start: string;
}
declare interface IDashboardStatAgentResp {
  /**代理人数 */
  agentCount: number;
  /**返佣额 */
  amountRebatesData: IAgentData[];
  /**充值总额 */
  depositAmountData: IAgentData[];
  /**有效代理人数 */
  effectiveAgentCount: number;
  /**有效流水返佣额 */
  effectiveAmountRebates: number;
  /**负盈利返佣额 */
  negativeProfitAmountRebates: number;
  /**下级会员数 */
  subUserCountData: IAgentData[];
  /**提现总额 */
  withdrawAmountData: IAgentData[];
}
declare interface IDashboardStatUserResp {
  /**活跃会员 */
  activityCount: number;
  /**活跃会员折线数据 */
  activityData: IUserActivityDaily[];
  /**存款会员 */
  depositCount: number;
  /**存款会员折线数据 */
  depositData: IUserActivityDaily[];
  /**有效会员数 */
  effectiveCount: number;
  /**当前实时在线会员 */
  onlineUserCount: number;
  /**注册会员 */
  registerCount: number;
  /**注册会员折线数据 */
  registerData: IUserActivityDaily[];
  /**提款会员 */
  withdrawCount: number;
  /**提款会员折线数据 */
  withdrawData: IUserActivityDaily[];
}
declare interface IDeleteItemsReq {
  /**明细编号 */
  itemsId: number[];
  /**方案编号 */
  planId: number;
}
declare interface IDeleteVipManagementReq {
  /**需要删除的VIPid */
  deleteId: number;
  /**转移用户的VIPid */
  targetId: number;
}
declare interface IDepositBankCardResp {
  /**没有提供描述 */
  bankName: string;
  /**没有提供描述 */
  bizCardNo: string;
  /**没有提供描述 */
  currencyCode: string;
  /**没有提供描述 */
  propName: string;
  /**没有提供描述 */
  propValue: string;
}
declare interface IDepositNoReq {
  /**充值单号 */
  depositNo: string;
}
declare interface IDepositQueryReq {
  /**第三方订单号 */
  channelOrderNo: string;
  /**渠道类型 */
  channelType: string;
  /**充值类型:1 数字货币；2 法币 */
  currencyType: number;
  /**订单编号 */
  depositNo: number;
  /**充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值 */
  depositWay: number;
  /**交易时间结束 */
  end: string;
  /**充币地址 */
  fromAddress: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**交易时间开始 */
  start: string;
  /**状态：0:待审核 1:审核通过 2:审核拒绝 */
  status: number;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
}
declare interface IDepositQueryResp {
  /**实际总分值 */
  actualAmount: number;
  /**1级代理账户 */
  agentAccount: string;
  /**1级代理ID */
  agentId: number;
  /**充值金额 */
  amount: number;
  /**链 */
  chain: string;
  /**第三方订单号 */
  channelOrderNo: string;
  /**渠道类型 */
  channelType: string;
  /**交易完成时间 */
  completeTime: string;
  /**到账时间 */
  createTime: string;
  /**币种代码 */
  currencyCode: string;
  /**充值类型：1 数字货币；2 法币 */
  currencyType: number;
  /**充币单号 */
  depositNo: string;
  /**充币类型 1:外部充币 2:内部充币 3：系统充值 */
  depositType: number;
  /**充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值 */
  depositWay: number;
  /**手续费 */
  fee: number;
  /**手续费类型:1 百分比；2 固定值 */
  feeType: number;
  /**没有提供描述 */
  feeValue: number;
  /**充值地址 */
  fromAddress: string;
  /**上级代理帐号 */
  parentAccount: string;
  /**上级代理ID */
  parentId: number;
  /**转账截图 */
  photo: string;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**代理ID */
  proxyUserId: number;
  /**汇率 */
  rate: number;
  /**拒绝理由 */
  refuseDesc: string;
  /**备注 */
  reminder: string;
  /**状态:0:待审核 1:审核通过 2:审核拒绝 9：超时取消 */
  status: number;
  /**接收地址 */
  toAddress: string;
  /**总分值 */
  totalAmount: number;
  /**交易hash */
  txHash: string;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**会员类型 */
  userType: number;
}
declare interface IDepositRefuseReq {
  /**充值单号 */
  depositNo: string;
  /**拒绝理由 */
  refuseDesc: string;
}
declare interface IDepositSummaryReq {
  /**代理layer */
  agentLayerCode: string;
  /**结束日期 */
  end: string;
  /**开始日期 */
  start: string;
  /**代理ID */
  userId: string;
}
declare interface IDepositSummaryResp {
  /**总存款 */
  depositAmount: number;
  /**USDT存款 */
  depositDigitalAmount: number;
  /**法币存款 */
  depositLegalAmount: number;
}
declare interface IDepositUserCountResp {
  /**充值人数 */
  depositUserCount: number;
  /**日期 */
  period: string;
  /**充值人数 */
  withdrawUserCount: number;
}
declare interface IDepositWayListResp {
  /**存款方式编码 */
  code: number;
  /**存款方式描述 */
  desc: string;
}
declare interface IEditActivityLanguageReq {
  /**Banner */
  banner: string;
  /**活动详情 */
  detail: string;
  /**活动入口图 */
  entrancePic: string;
  /**语言 */
  language: string;
  /**语言编号 */
  languageNo: string;
  /**活动标题 */
  title: string;
}
declare interface IEditActivityReq {
  /**活动名称 */
  activityName: string;
  /**活动编号 */
  activityNo: string;
  /**结束时间 */
  endTime: string;
  /**语言类型 */
  lanList: IEditActivityLanguageReq[];
  /**开始时间 */
  startTime: string;
  /**状态,1:上架;2:下架 */
  status: number;
  /**分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变 */
  type: number;
  /**权重 */
  weights: number;
}
declare interface IEditActivityResp {
  /**活动编号 */
  activityNo: string;
}
declare interface IEditActivityStatusReq {
  /**活动No */
  activityNo: string;
  /**状态,1:上架;2:下架 */
  status: number;
}
declare interface IElectronGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IElectronGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**投注时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**投注额 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IEsportGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**渠道Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IEsportGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**比赛时间 */
  competitionTime: string;
  /**拉取时间 */
  createTime: string;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**单局总投注 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IFeeStatisticsReq {
  /**结束日期 */
  end: string;
  /**起始日期 */
  start: string;
}
declare interface IFeeStatisticsResp {
  /**USDT手续费 */
  digitalFee: number;
  /**手续费 */
  fee: number;
  /**法币手续费 */
  legalFee: number;
  /**提款手续费 */
  withdrawFee: number;
}
declare interface IFishGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IFishGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**单局总投注 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
  /**彩金 */
  winningsAmount: number;
}
declare interface IGameChannelStatementReq {
  /**渠道编号 */
  channelId: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏类型 */
  gameType: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**统计周期 */
  period: string;
  /**包网商id */
  proxyId: number;
}
declare interface IGameChannelStatementResp {
  /**总投注 */
  betAmount: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**总局数 */
  count: number;
  /**创建时间 */
  createTime: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏类型 */
  gameType: number;
  /**总输 */
  lose: number;
  /**统计周期 */
  period: string;
  /**包网商id */
  proxyUid: number;
  /**总结果 */
  result: number;
  /**总抽水 */
  revenue: number;
  /**更新时间 */
  updateTime: string;
  /**有效投注 */
  validAmount: number;
  /**总赢 */
  win: number;
}
declare interface IGameChannelSummary {
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
}
declare interface IGameChannelTypeResp {
  /**类型id */
  gameType: number;
  /**类型名称 */
  gameTypeName: string;
}
declare interface IGameItem {
  /**没有提供描述 */
  code: number;
  /**没有提供描述 */
  name: string;
}
declare interface IGameMainTypeResp {
  /**类型编号 */
  gameMainTypeCode: string;
  /**厂商编码 */
  gameMainTypeName: string;
}
declare interface IGameProxyStatisticsResp {
  /**总投注 */
  betAmount: number;
  /**总局数 */
  count: number;
  /**总输 */
  lose: number;
  /**代理用户编号 */
  proxyUid: number;
  /**总结果 */
  result: number;
  /**统计时间 */
  time: string;
  /**有效投注 */
  validAmount: number;
  /**总赢 */
  win: number;
}
declare interface IGameSummaryReq {
  /**结束时间 */
  end: number;
  /**开始时间 */
  start: number;
  /**用户编号 */
  userId: number;
  /**用户编号 */
  userName: string;
}
declare interface IGameSummaryResp {
  /**总有效流水 */
  gameValidAmount: number;
  /**总盘负盈利 */
  negativeProfitAmount: number;
  /**彩金 */
  rewardAmount: number;
}
declare interface IGameUserStatisticsReq {
  /**游戏渠道编号 */
  channelId: string;
  /**结束时间 */
  end: number;
  /**游戏渠道编号 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**代理编号 */
  parentId: number;
  /**开始时间 */
  start: number;
  /**用户编号 */
  userId: number;
}
declare interface IGameUserStatisticsResp {
  /**总投注 */
  betAmount: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**总局数 */
  count: number;
  /**厂商名称 */
  factoryCode: string;
  /**游戏类型ID */
  gameType: number;
  /**游戏类型 */
  gameTypeName: string;
  /**总输 */
  lose: number;
  /**上级编号 */
  parentId: number;
  /**统计时间 */
  period: string;
  /**总结果 */
  result: number;
  /**用户编号 */
  userId: number;
  /**有效投注 */
  validAmount: number;
  /**总赢 */
  win: number;
}
declare interface IHotAccountResp {
  /**头寸币安币余额 */
  bscAmount: number;
  /**头寸波场币余额 */
  tronAmount: number;
  /**头寸USDT余额 */
  usdtAmount: number;
  /**币安USDT余额 */
  usdtAmountBsc: number;
}
declare interface ILiveVideoGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface ILiveVideoGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**厂商Code */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**投注时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**投注额 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface ILoginReq {
  /**账户 */
  account: string;
  /**密码 */
  password: string;
}
declare interface ILoginResp {
  /**账号 */
  account: string;
  /**添加时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**包网商账号 */
  proxyAccount: string;
  /**包网商编号 */
  proxyUid: number;
  /**角色 */
  role: string;
  /**app token信息 */
  token: string;
  /**token header头 */
  tokenName: string;
  /**用户编号 */
  userNo: number;
}
declare interface ILotteryGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**渠道Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface ILotteryGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**副单号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**结束时间 */
  endTime: number;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**单局总投注 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
  /**开奖号码 */
  winningNo: string;
}
declare interface IMenuBaseVo {
  /**展开状态(1:展开;0:收缩)  */
  expanded: string;
  /**节点图标 */
  icon: string;
  /**节点图标CSS类名 */
  iconCls: string;
  /**菜单编码，可作为按钮的显隐 */
  menuCode: string;
  /**菜单级别(0:树枝节点;1:叶子节点;2:按钮级别) */
  menuLevel: string;
  /**菜单名称(最长50) */
  menuName: string;
  /**菜单类型(1:系统菜单;0:业务菜单) */
  menuType: string;
  /**上级菜单编号 */
  parentId: string;
  /**备注(最长200) */
  remark: string;
  /**请求地址(最长200) */
  request: string;
  /**排序号 */
  sortNo: number;
}
declare interface IMenuResponseVo {
  /**展开状态(1:展开;0:收缩)  */
  expanded: string;
  /**节点图标 */
  icon: string;
  /**节点图标CSS类名 */
  iconCls: string;
  /**菜单编码，可作为按钮的显隐 */
  menuCode: string;
  /**菜单编号 */
  menuId: string;
  /**菜单级别(0:树枝节点;1:叶子节点;2:按钮级别) */
  menuLevel: string;
  /**菜单名称(最长50) */
  menuName: string;
  /**菜单类型(1:系统菜单;0:业务菜单) */
  menuType: string;
  /**上级菜单编号 */
  parentId: string;
  /**备注(最长200) */
  remark: string;
  /**请求地址(最长200) */
  request: string;
  /**排序号 */
  sortNo: number;
}
declare interface IMenuUpdateVo {
  /**展开状态(1:展开;0:收缩)  */
  expanded: string;
  /**节点图标 */
  icon: string;
  /**节点图标CSS类名 */
  iconCls: string;
  /**菜单编码，可作为按钮的显隐 */
  menuCode: string;
  /**菜单编号 */
  menuId: string;
  /**菜单级别(0:树枝节点;1:叶子节点;2:按钮级别) */
  menuLevel: string;
  /**菜单名称(最长50) */
  menuName: string;
  /**菜单类型(1:系统菜单;0:业务菜单) */
  menuType: string;
  /**上级菜单编号 */
  parentId: string;
  /**备注(最长200) */
  remark: string;
  /**请求地址(最长200) */
  request: string;
  /**排序号 */
  sortNo: number;
}
declare interface IMissionConfigReq {
  /**登陆后自动弹出任务中心 0:否 1:是 */
  autoShowMissionCenter: number;
  /**任务悬浮入口icon */
  missionFloatIcon: string;
  /**显示任务中心悬浮入口 0:否 1:是 */
  showMissionFloatIcon: number;
}
declare interface IMissionConfigResp {
  /**登陆后自动弹出任务中心 0:否 1:是 */
  autoShowMissionCenter: number;
  /**创建时间 */
  createTime: string;
  /**任务悬浮入口icon */
  missionFloatIcon: string;
  /**显示任务中心悬浮入口 0:否 1:是 */
  showMissionFloatIcon: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IMissionCreateOrUpdateReq {
  /**流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏 */
  auditGameType: number;
  /**流水稽核游戏 */
  auditGameValue: string[];
  /**审核模式 0:无需审核自动发放 1:审核后发放 */
  auditMode: number;
  /**循环周期，单位：天 */
  cyclingPeriod: number;
  /**循环方式，1:每天 2:每周 3:每月 4:自定义 */
  cyclingType: number;
  /**结束时间：注册后n天 */
  daysAfterRegister: number;
  /**结束时间 */
  endTime: string;
  /**结束类型 0:长期有效 1:指定时间 2:注册后n天 */
  endTimeType: number;
  /**多语言任务描述 */
  missionDesc: IMissionDesc[];
  /**主任务id，唯一 */
  missionId: number;
  /**任务项信息 */
  questInfo: IQuestInfo[];
  /**第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制 */
  receiveLimit: number[];
  /**开始时间 */
  startTime: string;
  /**参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户 */
  targetUserType: number;
  /**任务类型 1:限时 2:循环 */
  type: number;
  /**有效流水倍数 */
  validAmountMultiplier: number;
}
declare interface IMissionDesc {
  /**任务封面图 */
  coverImage: string;
  /**任务说明 */
  description: string;
  /**语言 */
  lang: string;
  /**任务名称 */
  missionName: string;
}
declare interface IMissionInfoListReq {
  /**任务名称 */
  missionName: string;
  /**0:升序 1:降序 */
  order: number;
  /**排序字段 0:序号 1:新增时间 */
  orderField: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**任务状态 0:下线 1:上线 */
  status: number;
  /**任务类型 1:限时 2:循环 */
  type: number;
}
declare interface IMissionInfoListResp {
  /**新增时间 */
  createTime: string;
  /**结束类型 0:长期有效 1:指定时间 2:注册后n天 */
  endTime: string;
  /**任务ID */
  missionId: number;
  /**任务名称 */
  missionName: string;
  /**任务项数量 */
  questCount: number;
  /**排序，越小优先级越高 */
  sortOrder: number;
  /**开始时间 */
  startTime: string;
  /**任务状态 0:下线 1:上线 */
  status: number;
  /**累计发放彩金 */
  totalRewardAmount: number;
  /**任务类型 1:限时 2:循环 */
  type: number;
  /**参与会员数 */
  userCount: number;
}
declare interface IMissionInfoOrderReq {
  /**任务ID */
  missionId: number;
  /**排序，越小优先级越高 */
  sortOrder: number;
}
declare interface IMissionInfoQueryOneResp {
  /**流水稽核游戏详情 */
  auditGameItem: IGameItem[];
  /**流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏 */
  auditGameType: number;
  /**流水稽核游戏 */
  auditGameValue: string[];
  /**审核模式 0:无需审核自动发放 1:审核后发放 */
  auditMode: number;
  /**循环周期，单位：天 */
  cyclingPeriod: number;
  /**循环方式，1:每天 2:每周 3:每月 4:自定义 */
  cyclingType: number;
  /**结束时间：注册后n天 */
  daysAfterRegister: number;
  /**结束时间 */
  endTime: string;
  /**结束类型 0:长期有效 1:指定时间 2:注册后n天 */
  endTimeType: number;
  /**多语言任务描述 */
  missionDesc: IMissionDesc[];
  /**主任务id，唯一 */
  missionId: number;
  /**第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制 */
  receiveLimit: number[];
  /**开始时间 */
  startTime: string;
  /**参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户 */
  targetUserType: number;
  /**任务类型 1:限时 2:循环 */
  type: number;
  /**有效流水倍数 */
  validAmountMultiplier: number;
}
declare interface IMissionInfoStatusReq {
  /**任务ID */
  missionId: number;
  /**状态 0:下线 1:上线 */
  status: number;
}
declare interface IMissionNameReq {
  /**语言 */
  lang: string;
  /**任务名称 */
  missionName: string;
}
declare interface IMissionQuestCreateOrUpdateReq {
  /**主任务Id */
  missionId: number;
  /**没有提供描述 */
  questInfo: IQuestInfo[];
}
declare interface IMissionQuestInfoListResp {
  /**流水稽核游戏详情 */
  auditGameItem: IGameItem[];
  /**流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏 */
  auditGameType: number;
  /**流水稽核游戏 */
  auditGameValue: string[];
  /**存款方式 */
  depositWay: number[];
  /**没有提供描述 */
  id: number;
  /**会员类型 0-注册会员 1-有效会员 */
  memberType: number;
  /**vip等级限制 */
  minVipLevel: number;
  /**主任务Id */
  missionId: number;
  /**任务达成条件值 */
  requirement: number;
  /**奖励彩金 */
  rewardAmount: number;
  /**单次投注流水 */
  singleBetAmount: number;
  /**单次存款金额 */
  singleDepositAmount: number;
  /**排序，越小优先级越高 */
  sortOrder: number;
  /**任务项 */
  title: string;
  /**任务项编码 */
  type: number;
  /**是否需要绑定提款资料 */
  withdrawProfileRequired: number;
}
declare interface IMissionQuestInfoTypeListResp {
  /**任务项编码 */
  typeCode: number;
  /**任务项名称 */
  typeName: string;
}
declare interface IMissionUserQuestRewardListReq {
  /**任务名称 */
  missionName: string;
  /**任务类型 1:限时 2:循环 */
  missionType: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**领取时间（结束时间） */
  receiveEndTime: string;
  /**领取时间（开始时间） */
  receiveStartTime: string;
  /**发放ID */
  rewardNo: string;
  /**发放状态 0:待审核 1:已通过 2:已拒绝 3:自动发放 */
  status: number;
  /**任务项 */
  typeCode: number;
  /**用户名 */
  userName: string;
}
declare interface IMissionUserQuestRewardListResp {
  /**稽核流水游戏 */
  auditGameValue: string;
  /**审核时间 */
  auditTime: string;
  /**领取时间 */
  createTime: string;
  /**币种代码 */
  currencyCode: string;
  /**任务id */
  missionId: number;
  /**任务名称 */
  missionName: string;
  /**任务类型 1:限时 2:循环 */
  missionType: number;
  /**日期，循环任务的循环周期开始日期，限时任务的开始日期 */
  period: string;
  /**任务项id */
  questId: number;
  /**任务项title */
  questTitle: string;
  /**任务项类型 */
  questType: number;
  /**领取设备mac */
  receiveDeviceMac: string;
  /**领取ip */
  receiveIp: string;
  /**领取端口 1:WEB 2:H5 3:App */
  receivePlatform: string;
  /**拒绝理由 */
  remarks: string;
  /**奖励彩金 */
  rewardAmount: number;
  /**发放编号 */
  rewardNo: string;
  /**奖金发放状态 0:待审核 1:已通过 2:已拒绝 3:自动发放 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**用户名 */
  userAccount: string;
  /**用户编号 */
  userId: number;
  /**有效流水倍数 */
  validAmountMultiplier: number;
  /**彩金记录编号 */
  winningRecordNo: string;
}
declare interface IOperationDocReq {
  /**文档id */
  docId: number;
}
declare interface IOperationLogReq {
  /**结束时间 */
  end: string;
  /**系统模块 */
  operationBiz: string;
  /**操作类型 */
  operationType: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**操作内容 */
  remark: string;
  /**开始时间 */
  start: string;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
}
declare interface IOperationLogResp {
  /**子类型 */
  bizChild: string;
  /**业务编号 */
  bizId: string;
  /**业务类型 */
  bizType: string;
  /**操作用户账号 */
  operationAccount: string;
  /**操作时间 */
  operationTime: string;
  /**操作用户编号 */
  operationUid: number;
  /**操作说明 */
  remark: string;
}
declare interface IOperationLogVo {
  /**日志编号 */
  id: number;
  /**操作业务 */
  operationBiz: string;
  /**操作时间 */
  operationTime: string;
  /**操作类型 */
  operationType: string;
  /**操作说明 */
  remark: string;
  /**操作人编号 */
  userId: string;
  /**操作人姓名 */
  userName: string;
}
declare interface IOperationPosterReq {
  /**海报编号 */
  posterId: number;
}
declare interface IOrdinaryGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**渠道Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**游戏主类型 */
  gameMainType: string;
  /**游戏类型 */
  gameType: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**游戏结果 */
  resultFlag: number;
  /**状态 */
  status: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IOrdinaryGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**结束时间 */
  endTime: number;
  /**厂商Code */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏Code */
  gameCode: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**单局总投注 */
  totalBet: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IPageResultAgentApplyResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAgentApplyResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultAgentInfoByParentResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAgentInfoByParentResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultAgentInfoResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAgentInfoResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultAgentSettleApplyResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAgentSettleApplyResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultAgentSettleResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAgentSettleResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultArticleResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IArticleResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultAssetChangeLogResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAssetChangeLogResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultBannerResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IBannerResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultChessCardGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IChessCardGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultChickenGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IChickenGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultDepositQueryResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IDepositQueryResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultElectronGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IElectronGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultEsportGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IEsportGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultFishGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IFishGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultGameChannelStatementResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameChannelStatementResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultGameProxyStatisticsResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameProxyStatisticsResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultGameUserStatisticsResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameUserStatisticsResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultLiveVideoGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ILiveVideoGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultLotteryGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ILotteryGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultMissionInfoListResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IMissionInfoListResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultMissionUserQuestRewardListResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IMissionUserQuestRewardListResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultOperationLogResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IOperationLogResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultOperationLogVo {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IOperationLogVo[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultOrdinaryGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IOrdinaryGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultPlatformSettleResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IPlatformSettleResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyChildResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyChildResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyDocManagementResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyDocManagementResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyExperienceValueResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyExperienceValueResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyGameResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyGameResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyInvitationPosterResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyInvitationPosterResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxyRebateRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyRebateRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultProxySettleResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxySettleResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultQueryActivityResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IQueryActivityResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultRegisterDetailsResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IRegisterDetailsResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultSettingsReturnGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ISettingsReturnGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultSettingsReturnGameResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ISettingsReturnGameResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultSiteMessageResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ISiteMessageResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultSportGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ISportGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultSystemDepositWithdrawBo {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ISystemDepositWithdrawBo[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultUserGameRecordResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserGameRecordResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultUserReferralsResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserReferralsResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultUserRelationAccountResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserRelationAccountResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultUserRelationResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserRelationResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultUserResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultVipManagementResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IVipManagementResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultWithdrawResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IWithdrawResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultipGuiZeVo {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IIpGuiZeVo[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultHuiYuanJiHeChaXunFanHuiDuiXiang {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IHuiYuanJiHeChaXunFanHuiDuiXiang[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultChongZhiFanYongJiLu {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IChongZhiFanYongJiLu[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultBaoWangShangKeFuPeiZhiXinXi {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IBaoWangShangKeFuPeiZhiXinXi[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultCaiJinGuiZePeiZhiXinXi {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: ICaiJinGuiZePeiZhiXinXi[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultYongHuCaiJinFaFangJiLu {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IYongHuCaiJinFaFangJiLu[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultJiHeIpLieBiaoZhiDuiXiang {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IJiHeIpLieBiaoZhiDuiXiang[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultJiaoSeXiangYingXinXi {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IJiaoSeXiangYingXinXi[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultFanShuiFangAnXinXi {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IFanShuiFangAnXinXi[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPageResultHeiMingDanYongHuLieBiao {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IHeiMingDanYongHuLieBiao[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
declare interface IPaging {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
declare interface IPaymentChannelReq {
  /**渠道类型 */
  channelType: string;
  /**币种代码 */
  currencyCode: string;
  /**其它扩展条件等 */
  ext: string;
  /**商户key */
  merchantKey: string;
  /**商户号 */
  merchantNo: string;
  /**排序 */
  sortOrder: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IPaymentChannelResq {
  /**编号 */
  bizNo: string;
  /**boss支付渠道管理id */
  boosPcId: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**渠道类型 */
  channelType: string;
  /**币种代码 */
  currencyCode: string;
  /**其它扩展条件等 */
  ext: string;
  /**商户key */
  merchantKey: string;
  /**商户号 */
  merchantNo: string;
  /**proxyUid */
  proxyUid: number;
  /**排序 */
  sortOrder: number;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IPendingCountResp {
  /**代理申请数量 */
  agentApplyCount: number;
  /**充值单数量 */
  depositCount: number;
  /**提现/币单数量 */
  withdrawCount: number;
}
declare interface IPlanIdReq {
  /**方案编号 */
  planId: number;
}
declare interface IPlanQueryReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**方案名称 */
  planName: string;
  /**方案状态 */
  status: number;
}
declare interface IPlatformAccountResp {
  /**手续费账户(CNY) */
  feeCNY: number;
  /**手续费账户(USDT)，这是充U的手续费 */
  feeUSDT: number;
}
declare interface IPlatformSettleReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**0 待线下结算;1 已结算 */
  status: number;
}
declare interface IPlatformSettleResp {
  /**结算额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**结算周期编号 */
  cycleNo: string;
  /**周期结束日期 */
  endPeriod: string;
  /**结算周期类型 */
  periodType: string;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**包网商编号 */
  proxyUserId: number;
  /**占成结算额 */
  ratioAmount: number;
  /**返佣结算额 */
  rebateAmount: number;
  /**结算单号 */
  settleNo: string;
  /**周期开始日期 */
  startPeriod: string;
  /**状态 -1:进行中 0：统计完成，待线下结算 1:已结算 */
  status: number;
  /**状态 -1:进行中 0：统计完成，待线下结算 1:已结算 */
  statusDesc: string;
  /**sum(输赢) */
  totalResultAmount: number;
  /**sum(有效) */
  totalValidAmount: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IPrivateKeyReq {
  /**链 币安:BSC 波场:TRON */
  chain: string;
  /**私钥 */
  privateKey: string;
}
declare interface IProxyAchievingConditionsResp {
  /**结算周期:DAY,WEEK,HALF_MONTH,MONTH */
  calculationPeriod: string;
  /**周期内有效流水 */
  conditionsChildList: IAchievingConditionsChildReq[];
  /**周期直属有效会员数 */
  directlyUnderMembers: number;
  /**负盈利是否累计 */
  negativeProfitIsAccumulated: boolean;
  /**结算方式: false自动、true手动 */
  settlementMethod: boolean;
  /**周期内下级VIP用户数 */
  subordinateMembers: number;
  /**周期总有效会员数 */
  totalMembers: number;
  /**周期内有效流水 */
  validAmount: number;
  /**周期内存款值 */
  validDepositAmount: number;
  /**周期内负盈利值 */
  validNegativeProfit: number;
  /**vip等级 */
  vipLevel: number;
}
declare interface IProxyBaseUpdateReq {
  /**logo编号 */
  logo: string;
  /**页签ico编号 */
  pageIco: string;
  /**页签名称(中文) */
  pageName: string;
  /**页签名称(菲律宾语) */
  pageNamePh: string;
  /**页签名称(泰语) */
  pageNameTh: string;
  /**页签名称(英文) */
  pageNameUs: string;
  /**页签名称(越南语) */
  pageNameVn: string;
}
declare interface IProxyChildResp {
  /**账号 */
  account: string;
  /**创建时间 */
  createTime: string;
  /**最后登录时间 */
  lastLogin: number;
  /**角色 */
  role: string;
  /**角色id */
  roleId: string;
  /**用户状态 1:正常 0:锁定 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**用户编号 */
  userId: number;
}
declare interface IProxyChoiceGameResp {
  /**大图 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
  /**代理编号 */
  proxyId: number;
}
declare interface IProxyDailyStatResp {
  /**充值笔数 */
  depositCount: number;
  /**首存人数 */
  firstDeposit: number;
  /**二存人数 */
  secondDeposit: number;
  /**提现笔数 */
  withdrawCount: number;
  /**提现人数 */
  withdrawUserCount: number;
}
declare interface IProxyDocManagementResp {
  /**文档内容 */
  context: string;
  /**创建时间 */
  createTime: string;
  /**序号 */
  docId: number;
  /**语言 */
  lang: string;
  /**文档名称 */
  name: string;
  /**文档状态：false已下架，true已上架 */
  status: boolean;
}
declare interface IProxyDomainResp {
  /**创建时间 */
  createTime: string;
  /**域名 */
  domain: string;
  /**域名编号 */
  proxyDomainId: number;
  /**代理编号 */
  proxyUid: number;
  /**状态 1:正常 0:下线 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxyExperienceValueResp {
  /**每日上限 */
  dailyCeiling: number;
  /**经验值汇率 */
  exchangeRate: number;
  /**包网商ID */
  proxyId: number;
  /**类型 */
  type: string;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxyGameIdReq {
  /**代理游戏编号 */
  proxyGameId: number;
}
declare interface IProxyGameResp {
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**创建时间 */
  createTime: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏区域编号 */
  gameArea: number;
  /**游戏区域名称 */
  gameAreaName: string;
  /**基础游戏编号 */
  gameId: number;
  /**游戏名称 */
  gameName: string;
  /**自定义游戏名称 */
  gameNameCustomer: string;
  /**游戏英文名称 */
  gameNameEn: string;
  /**游戏类型 */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**游戏icon */
  icon: string;
  /**游戏icon2 */
  icon2: string;
  /**icon2链接 */
  icon2Url: string;
  /**游戏icon3 */
  icon3: string;
  /**icon3链接 */
  icon3Url: string;
  /**icon链接 */
  iconUrl: string;
  /**是否热门游戏：true:是，false:否 */
  popular: boolean;
  /**渠道游戏编号 */
  proxyGameId: number;
  /**代理编号 */
  proxyId: number;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxyGameScaleResp {
  /**流水返佣上限 */
  amountRebatesCeiling: number;
  /**游戏渠道 */
  channelName: string;
  /**类型 */
  channelType: string;
  /**游戏渠道类型id */
  channelTypeId: number;
  /**ID */
  id: number;
  /**负盈利分成上限 */
  negativeProfitRebatesCeiling: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxyGameUpdateAreaReq {
  /**区域编号 */
  areaId: number;
  /**代理游戏编号 */
  proxyGameIds: number[];
  /**代理编号 */
  proxyId: number;
}
declare interface IProxyGameUpdatePopularReq {
  /**区域编号 */
  areaId: number;
  /**是否热门：true是，false否 */
  popular: boolean;
  /**代理游戏编号 */
  proxyGameIds: number[];
  /**代理编号 */
  proxyId: number;
}
declare interface IProxyIdReq {
  /**代理编号 */
  proxyId: number;
}
declare interface IProxyInvitationPosterResp {
  /**图片 */
  img: string;
  /**图片链接 */
  imgUrl: string;
  /**语言 */
  lang: string;
  /**序号 */
  posterId: number;
  /**发布状态：false:待发布、true:发布中 */
  status: boolean;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxyRebateRecordResp {
  /**创建时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**返水编号 */
  id: number;
  /**周期 */
  period: string;
  /**方案名称 */
  planName: string;
  /**返水金额 */
  rebateAmount: number;
  /**方案id */
  rebateItemId: number;
  /**状态：0待发放，1已发放，2已拒绝 */
  status: number;
  /**状态：0待发放，1已发放，2已拒绝 */
  statusName: string;
  /**更新时间 */
  updateTime: string;
  /**用户id */
  userId: number;
  /**用户名称 */
  userName: string;
}
declare interface IProxyRelationConfigResp {
  /**同一银行卡是否仅绑定一次 */
  bankCardBoundOnce: boolean;
  /**银行卡是否可编辑和删除：0否，1是 */
  bankCardEditAndDelete: number;
  /**银行卡充值：0否，1是 */
  bankCardTopUp: number;
  /**佣金提现流水倍数 */
  commissionMultiple: number;
  /**充值流水有效倍数 */
  depositMultiple: number;
  /**数据id */
  id: number;
  /**邀请码是否必填：false:否，true:是 */
  invitationCodeSet: boolean;
  /**提现条件阈值 */
  minimumBalance: number;
  /**包网商ID */
  proxyId: number;
  /**ip注册数量限制 */
  registerAmountLimit: number;
  /**三方充值：0否，1是 */
  thirdTopUp: number;
  /**用户绑定银行卡数量限制 */
  userBankCardAmount: number;
  /**会员关联账号,多个用英文逗号分隔,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联,bankCard:相同银行卡关联,parentAgent:相同上级代理关联 */
  userRelationAccount: string;
  /**关联会员处理方式，1：不处理，2:自动拉黑 */
  userRelationProcessMode: number;
  /**关联会员处理范围，1:全部关联会员，2:仅当前会员，3:仅当前及以后注册会员 */
  userRelationProcessRange: number;
}
declare interface IProxyRewardRateResp {
  /**没有提供描述 */
  ratioRate: number;
  /**没有提供描述 */
  rebateRate: number;
}
declare interface IProxySettleResp {
  /**结算额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**结算周期编号 */
  cycleNo: string;
  /**周期结束日期 */
  endPeriod: string;
  /**结算周期类型 */
  periodType: string;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**包网商编号 */
  proxyUserId: number;
  /**占成结算额 */
  ratioAmount: number;
  /**返佣结算额 */
  rebateAmount: number;
  /**结算单号 */
  settleNo: number;
  /**周期开始日期 */
  startPeriod: string;
  /**状态 -1:进行中 0：统计完成，待线下结算 1:已结算 */
  status: number;
  /**状态 -1:进行中 0：统计完成，待线下结算 1:已结算 */
  statusDesc: string;
  /**sum(输赢) */
  totalResultAmount: number;
  /**sum(有效) */
  totalValidAmount: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IProxySumResp {
  /**包网商id */
  proxyId: number;
  /**调账总增加金额 */
  sumDeposit: number;
  /**调账总减少金额 */
  sumWithdraw: number;
}
declare interface IProxySummerResp {
  /**logo编号 */
  logo: string;
  /**logo链接 */
  logoUrl: string;
  /**页签ico编号 */
  pageIco: string;
  /**页签ico链接 */
  pageIcoUrl: string;
  /**页签名称(中文) */
  pageName: string;
  /**页签名称(菲律宾语) */
  pageNamePh: string;
  /**页签名称(泰语) */
  pageNameTh: string;
  /**页签名称(英文) */
  pageNameUs: string;
  /**页签名称(越南语) */
  pageNameVn: string;
  /**代理编号 */
  proxyId: number;
}
declare interface IProxyValidAmountResp {
  /**每日上限 */
  dailyCeiling: number;
  /**汇率 */
  exchangeRate: number;
  /**游戏渠道 */
  factoryCode: string;
  /**ID */
  id: number;
  /**包网商ID */
  proxyId: number;
}
declare interface IProxyValidMembersResp {
  /**下注天数 */
  bettingDays: number;
  /**下注次数 */
  bettingNum: number;
  /**计算周期(天) */
  calculationPeriod: number;
  /**数据id */
  id: number;
  /**包网商ID */
  proxyId: number;
  /**投注有效流水 */
  validAmount: number;
  /**存款金额 */
  validDepositAmount: number;
  /**负盈利金额 */
  validNegativeProfit: number;
}
declare interface IQueryAccountTotalReq {
  /**代理商编号 */
  agentUid: number;
  /**结束日期 */
  end: string;
  /**起始日期 */
  start: string;
}
declare interface IQueryActivityDetailReq {
  /**活动No */
  activityNo: string;
}
declare interface IQueryActivityDetailResp {
  /**活动名称 */
  activityName: string;
  /**活动编号 */
  activityNo: string;
  /**结束时间 */
  endTime: string;
  /**活动语言版本 */
  lanList: IQueryActivityLanDetailVo[];
  /**开始时间 */
  startTime: string;
  /**状态,0:初始化;1:上架;2:下架 */
  status: number;
  /**分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变 */
  type: number;
  /**权重 */
  weights: number;
}
declare interface IQueryActivityLanDetailVo {
  /**没有提供描述 */
  activityNo: string;
  /**没有提供描述 */
  banner: string;
  /**没有提供描述 */
  detail: string;
  /**没有提供描述 */
  entrancePic: string;
  /**没有提供描述 */
  language: string;
  /**没有提供描述 */
  languageNo: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**没有提供描述 */
  title: string;
}
declare interface IQueryActivityReq {
  /**活动名称 */
  activityName: string;
  /**活动编号 */
  activityNo: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**开始时间 */
  startTime: string;
  /**状态,0:初始化;1:上架;2:下架 */
  status: number;
  /**分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变 */
  type: number;
}
declare interface IQueryActivityResp {
  /**活动名称 */
  activityName: string;
  /**活动编号 */
  activityNo: string;
  /**结束时间 */
  endTime: string;
  /**开始时间 */
  startTime: string;
  /**状态,0:初始化;1:上架;2:下架 */
  status: number;
  /**分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变 */
  type: number;
  /**权重 */
  weights: number;
}
declare interface IQueryAgentApplyReq {
  /**申请人账号 */
  account: string;
  /**查询结束时间 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**归属 */
  parentAccount: string;
  /**查询开始时间 */
  start: string;
  /**状态 0:待审核 1:通过 2:拒绝 */
  status: number;
  /**ID */
  userId: string;
}
declare interface IQueryAgentListReq {
  /**账号 */
  account: string;
  /**代理编号 */
  agentId: number;
  /**代理级别 */
  agentLevel: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
declare interface IQueryArticleReq {
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**标题 */
  title: string;
}
declare interface IQueryBannerReq {
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IQueryCurrentAccountTotalReq {
  /**代理商编号 */
  agentUid: number;
}
declare interface IQueryDocListReq {
  /**结束时间 */
  endTime: string;
  /**语言 */
  lang: string;
  /**文档名称，支持模糊查询 */
  name: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**起始时间 */
  startTime: string;
}
declare interface IQueryDocReq {
  /**文档序号 */
  docId: number;
}
declare interface IQueryExperienceValueReq {
  /**类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS */
  type: string;
}
declare interface IQueryPaymentChannelReq {
  /**币种代码 */
  currencyCode: string;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IQueryProxyGameReq {
  /**游戏厂商 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型 */
  gameTypeName: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**是否热门：true是，false否 */
  popular: boolean;
  /**状态 1:启用 0:禁用 */
  status: number;
}
declare interface IQuerySettingsReturnGameRecordReqReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**记录类型  1:高倍返奖 2:高返奖额 */
  recordType: number;
}
declare interface IQuerySmsChannelReq {
  /**状态 1:启用 0:禁用 */
  status: number;
  /**渠道推送方式 1:短信 2:邮件 */
  wayType: number;
}
declare interface IQueryUserListReq {
  /**账号 */
  account: string;
  /**代理编号 */
  agentUid: number;
  /**银行卡号 */
  bankCardNumber: string;
  /**有效会员 1:是 0:否 */
  effective: number;
  /**注册时间结束 */
  end: string;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**手机号 */
  mobileNo: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**注册ip */
  registerIp: string;
  /**注册时间开始 */
  start: string;
  /**用户编号 */
  userId: number;
  /**用户编号集合 */
  userIdList: number[];
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**用户名 */
  userName: string;
  /**用户类型 1:普通 4:代理用户 */
  userType: number;
  /**vip等级 */
  vipLevel: number;
}
declare interface IQueryUserReferralsReq {
  /**账号 */
  account: string;
  /**注册时间结束 */
  end: string;
  /**是否首存（1:是；0否） */
  firstDeposit: number;
  /**邀请人账号(所属代理) */
  inviteAccount: string;
  /**邀请人编号 */
  inviteUid: number;
  /**邀请码 */
  layerCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**注册时间开始 */
  start: string;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
  /**用户类型 1:普通 4:代理用户 */
  userType: number;
}
declare interface IQueryVipManagementReq {
  /**数据id */
  vipId: number;
}
declare interface IQuestInfo {
  /**流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏 */
  auditGameType: number;
  /**流水稽核游戏 */
  auditGameValue: string[];
  /**存款方式 */
  depositWay: number[];
  /**没有提供描述 */
  id: number;
  /**会员类型 0-注册会员 1-有效会员 */
  memberType: number;
  /**vip等级限制 */
  minVipLevel: number;
  /**任务达成条件值 */
  requirement: number;
  /**奖励彩金 */
  rewardAmount: number;
  /**单次投注流水 */
  singleBetAmount: number;
  /**单次存款 */
  singleDepositAmount: number;
  /**排序，越小优先级越高 */
  sortOrder: number;
  /**任务项编码 */
  typeCode: number;
  /**是否需要绑定提款资料 */
  withdrawProfileRequired: number;
}
declare interface IRecordIdsReq {
  /**编号集合 */
  ids: number[];
}
declare interface IRecordQueryReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**周期 */
  period: string;
  /**状态 */
  status: number;
  /**用户id */
  userId: number;
  /**用户名称 */
  userName: string;
}
declare interface IRegisterDetailsReq {
  /**用户名 */
  account: string;
  /**结束日期 */
  end: string;
  /**是否首存（1:是；0否） */
  firstDeposit: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**没有提供描述 */
  proxyId: number;
  /**起始日期 */
  start: string;
  /**用户id */
  userId: number;
}
declare interface IRegisterDetailsResp {
  /**用户名 */
  account: string;
  /**所属代理id */
  agentId: number;
  /**所属代理名称 */
  agentName: string;
  /**注册时间 */
  createTime: string;
  /**是否首存（1:是；0否） */
  firstDeposit: number;
  /**首存金额 */
  firstDepositAmount: number;
  /**用户id */
  id: number;
  /**注册ip */
  registerIp: string;
}
declare interface IResetMobileNoReq {
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobileNo: string;
  /**用户编号 */
  userId: number;
}
declare interface IResetPasswordReq {
  /**密码 */
  password: string;
  /**用户编号 */
  userId: number;
}
declare interface IReviewUserWinningsRecordProxyReq {
  /**代理id */
  agentUid: number;
  /**说明(原因) */
  explainReview: string;
  /**id */
  id: number;
  /**状态(1:通过；2:拒绝) */
  status: number;
  /**用户id */
  userId: number;
}
declare interface IRoleBaseVo {
  /**备注(最长50) */
  remark: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
}
declare interface IRoleLockRequestVo {
  /**锁定标志 1:锁定;0:激活 */
  lockFlag: string;
  /**角色编号 */
  roleId: string;
}
declare interface IRoleMenuRequestVo {
  /**菜单编号集合 */
  menuIds: string[];
  /**角色编号 */
  roleId: string;
}
declare interface IRoleMenuResponseVo {
  /**创建时间 */
  createTime: string;
  /**锁定标志 1锁定 0激活 */
  locked: string;
  /**权限信息 */
  menus: IMenuResponseVo[];
  /**备注(最长50) */
  remark: string;
  /**角色编号 */
  roleId: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
  /**修改时间 */
  updateTime: string;
}
declare interface IRoleQueryRequestVo {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**角色描述 */
  remark: string;
  /**角色名称 */
  roleName: string;
}
declare interface IRoleUpdateVo {
  /**备注(最长50) */
  remark: string;
  /**角色编号 */
  roleId: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
}
declare interface ISettingsReturnGameRecordReq {
  /**编码(新增的时候不传，修改时必传) */
  bizNo: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**代理游戏编号 */
  proxyGameId: number;
  /**记录类型  1:高倍返奖 2:高返奖额 */
  recordType: number;
  /**返奖金额 */
  result: number;
  /**用户名 */
  userName: string;
  /**投注金额 */
  validBet: number;
}
declare interface ISettingsReturnGameRecordResp {
  /**编码 */
  bizNo: string;
  /**新增时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**代理游戏编号 */
  proxyGameId: number;
  /**返奖金额 */
  result: number;
  /**返奖倍数 */
  returnMultiplier: number;
  /**用户名称 */
  userName: string;
  /**投注金额 */
  validBet: number;
}
declare interface ISettingsReturnGameReq {
  /**基础总返奖额 */
  baseTotalReturnAmount: number;
  /**基础总返奖人数 */
  baseTotalReturnUser: number;
  /**编码(新增的时候不传，修改时必传) */
  bizNo: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**代理游戏编号 */
  proxyGameId: number;
}
declare interface ISettingsReturnGameResp {
  /**基础总返奖额 */
  baseTotalReturnAmount: number;
  /**基础总返奖人数 */
  baseTotalReturnUser: number;
  /**编码 */
  bizNo: string;
  /**新增时间 */
  createTime: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**代理游戏编号 */
  proxyGameId: number;
}
declare interface ISiteMessageReq {
  /**业务类型 */
  bizType: string;
  /**结束时间 */
  end: string;
  /**站内信id */
  id: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**方式 1.站内信 2.邮件 3.短信 */
  pushWay: number;
  /**发送类型 */
  sendType: string;
  /**开始时间 */
  start: string;
  /**状态 */
  status: string;
}
declare interface ISiteMessageResp {
  /**业务类型，1充值2充币... */
  bizType: number;
  /**内容 */
  content: string;
  /**创建时间 */
  createTime: string;
  /**自增编号 */
  id: string;
  /**发送对象内容，对象类型对应的具体内容，例如存用户ID，具体的vip等级等，多个用逗号隔开 */
  objectContent: string;
  /**没有提供描述 */
  objectContentText: string;
  /**发送对象类型，例如指定vip，指定会员，指定代理等 */
  objectType: number;
  /**方式 1.站内信 2.邮件 3.短信 */
  pushWay: number;
  /**发送时间 */
  sendTime: string;
  /**发送类型，1手动发送2系统发送 */
  sendType: number;
  /**状态，1待发送2已发送3发送失败4已撤回 */
  status: number;
  /**标题 */
  subject: string;
}
declare interface ISiteMessageSendReq {
  /**内容 */
  content: string;
  /**发送对象内容，对象类型对应的具体内容，例如存用户ID，具体的vip等级等，多个用逗号隔开 */
  objectContent: string[];
  /**发送对象类型，例如指定vip，指定会员，指定代理等 */
  objectType: number;
  /**发送方式 1.站内信 2.电子邮箱 3.短信 */
  pushWay: number;
  /**发送时间 */
  sendTime: string;
  /**标题，邮件必填 */
  subject: string;
}
declare interface ISmsChannelReq {
  /**编码 */
  bizNo: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**适用业务类型集合(1:注册；2:提现；3:提币；4:重置密码) */
  usageScenarioTypes: string;
  /**渠道推送方式 1:短信 2:邮件 */
  wayType: number;
}
declare interface ISmsChannelResq {
  /**编号 */
  bizNo: string;
  /**boss编码 */
  bossBizNo: string;
  /**通道名称 */
  channelName: string;
  /**通道类型 */
  channelType: string;
  /**创建时间 */
  createTime: string;
  /**代理编号 */
  proxyUid: number;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**适用业务类型集合;1:注册，2:提现 */
  usageScenarioTypes: string;
}
declare interface ISportGameRecordReq {
  /**注单时间-结束 */
  betEndTime: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**用户Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface ISportGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**副单号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**拉取时间 */
  createTime: string;
  /**结束时间 */
  endTime: number;
  /**详情 */
  extendInfo: string;
  /**厂商 */
  factoryCode: string;
  /**游戏账户 */
  gameAccount: string;
  /**游戏名称 */
  gameName: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**输赢金额 */
  result: number;
  /**游戏结果 */
  resultFlagName: string;
  /**开始时间 */
  startTime: number;
  /**结算状态 */
  statusName: string;
  /**单局总投注 */
  totalBet: number;
  /**注单流水号 */
  transactionId: string;
  /**用户Id */
  userId: number;
  /**用户名 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IStatisticsReq {
  /**结束日期 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**开始日期 */
  start: string;
}
declare interface ISummaryReq {
  /**结束日期 */
  end: string;
  /**开始日期 */
  start: string;
}
declare interface ISystemDepositWithdrawBo {
  /**调账类型 1:增加余额 0:减少余额 */
  adjustType: number;
  /**调整金额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**数据ID */
  id: number;
  /**包网商id */
  proxyId: number;
  /**备注 */
  remark: string;
  /**用户id */
  userId: number;
}
declare interface ITeamStatisticsReq {
  /**时间范围结束 */
  end: string;
  /**时间范围开始 */
  start: string;
  /**统计日期类型:0 今日；1 昨天；7 近7天；30 近30天；9999 全部 */
  statDateType: number;
  /**会员ID */
  userId: number;
}
declare interface ITeamStatisticsResp {
  /**代理数 */
  agentCount: number;
  /**存款值 */
  depositAmount: number;
  /**直属有效会员数 */
  directSum: number;
  /**总有效会员数 */
  effectiveSum: number;
  /**有效流水 */
  gameValidAmount: number;
  /**负盈利 */
  negativeProfitAmount: number;
  /**彩金 */
  rewardAmount: number;
  /**返佣金额 */
  settleAmount: number;
  /**总会员数 */
  userCount: number;
  /**达成条件的vip用户数 */
  vipSum: number;
  /**提款值 */
  withdrawAmount: number;
}
declare interface IThirdPayDetailResp {
  /**三方支付账号 */
  account: string;
  /**业务唯一编码 */
  bizNo: string;
  /**创建时间 */
  createTime: string;
  /**币种，多个用逗号隔开 */
  currency: string;
  /**支付工具名称 */
  name: string;
  /**包网商id */
  proxyUserId: number;
  /**单日收款上限 */
  receivingDayLimit: number;
  /**收款结束时间 */
  receivingEnd: string;
  /**三方支付收款名称 */
  receivingName: string;
  /**单笔收款最大金额 */
  receivingSingleMax: number;
  /**单笔收款最小金额 */
  receivingSingleMin: number;
  /**收款开始时间 */
  receivingStart: string;
  /**状态 1:可用 0:不可用 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**用户标签，多个用逗号隔开 */
  userLabel: string;
  /**用户标签文本，多个用逗号隔开 */
  userLabelText: string;
  /**vip等级，多个用逗号隔开 */
  vipLevel: string;
  /**vip等级文本，多个用逗号隔开 */
  vipLevelText: string;
}
declare interface IThirdPayListReq {
  /**更新结束时间 */
  end: string;
  /**支付工具名称 */
  name: string;
  /**更新开始时间 */
  start: string;
  /**状态 1:可用 0:不可用 */
  status: string;
}
declare interface IThirdPayListResp {
  /**三方支付账号 */
  account: string;
  /**业务唯一编码 */
  bizNo: string;
  /**创建时间 */
  createTime: string;
  /**币种，多个用逗号隔开 */
  currency: string;
  /**币种文本，多个用逗号隔开 */
  currencyText: string;
  /**支付工具名称 */
  name: string;
  /**包网商id */
  proxyUserId: number;
  /**三方支付收款名称 */
  receivingName: string;
  /**状态 1:可用 0:不可用 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IThirdPayUpdateReq {
  /**三方支付账号 */
  account: string;
  /**业务唯一编码,编辑必传 */
  bizNo: string;
  /**币种，多个用逗号隔开 */
  currency: string;
  /**支付工具名称 */
  name: string;
  /**单日收款上限 */
  receivingDayLimit: number;
  /**收款结束时间 */
  receivingEnd: string;
  /**三方支付收款名称 */
  receivingName: string;
  /**单笔收款最大金额 */
  receivingSingleMax: number;
  /**单笔收款最小金额 */
  receivingSingleMin: number;
  /**收款开始时间 */
  receivingStart: string;
  /**状态 1:可用 0:不可用 */
  status: string;
  /**用户标签，多个用逗号隔开，为空表示全部 */
  userLabel: string;
  /**vip等级，多个用逗号隔开，为空表示全部 */
  vipLevel: string;
}
declare interface IUSDTGengXinQingQiuXinXi {
  /**汇率 */
  rate: number;
}
declare interface IUpdateAchievingConditionsReq {
  /**代理id */
  agentId: number;
  /**结算周期：DAY,WEEK,HALF_MONTH,MONTH */
  calculationPeriod: string;
  /**周期内有效流水 */
  conditionsChildList: IAchievingConditionsChildReq[];
  /**周期直属有效会员数 */
  directlyUnderMembers: number;
  /**负盈利是否累计 */
  negativeProfitIsAccumulated: boolean;
  /**结算方式: false自动、true手动 */
  settlementMethod: boolean;
  /**周期内下级VIP用户数 */
  subordinateMembers: number;
  /**周期总有效会员数 */
  totalMembers: number;
  /**周期内有效流水 */
  validAmount: number;
  /**周期内存款值 */
  validDepositAmount: number;
  /**周期内负盈利值 */
  validNegativeProfit: number;
  /**vip等级 */
  vipLevel: number;
}
declare interface IUpdateArticleReq {
  /**公告编号 */
  articleNo: string;
  /**内容(最大不能超过2000) */
  content: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**标题(最大不能超过64) */
  title: string;
}
declare interface IUpdateBankCardTopUpReq {
  /**银行卡充值 0：关闭；1:打开 */
  bankCardTopUp: number;
}
declare interface IUpdateBannerReq {
  /**横幅编号 */
  bannerNo: string;
  /**文件编号 */
  fileNo: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**链接(最大不能超过256) */
  url: string;
}
declare interface IUpdateCommissionMultipleReq {
  /**佣金提现流水倍数 */
  multiple: number;
}
declare interface IUpdateDocReq {
  /**内容 */
  context: string;
  /**编号 */
  docId: number;
  /**语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**名称 */
  name: string;
}
declare interface IUpdateExperienceValueReq {
  /**每日上限 */
  dailyCeiling: number;
  /**经验值汇率 */
  exchangeRate: number;
  /**类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS */
  type: string;
}
declare interface IUpdateGameScaleReq {
  /**流水返佣上限 */
  amountRebatesCeiling: number;
  /**游戏渠道类型id */
  channelTypeId: number;
  /**ID */
  id: number;
  /**负盈利分成上限 */
  negativeProfitRebatesCeiling: number;
}
declare interface IUpdateInvitationCodeSetReq {
  /**邀请码是否必填 */
  invitationCodeSet: boolean;
}
declare interface IUpdateMinimumBalanceReq {
  /**提现条件阈值 */
  minimumBalance: number;
}
declare interface IUpdatePeriodReq {
  /**结算周期：WEEK、MONTH */
  settlementType: string;
}
declare interface IUpdatePosterReq {
  /**图片 */
  img: string;
  /**编号 */
  posterId: number;
  /**状态: false:待发布、true:发布中 */
  status: boolean;
}
declare interface IUpdateProxyChoiceGameReq {
  /**游戏图标 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
}
declare interface IUpdateProxyGameReq {
  /**自定义游戏名称 */
  gameName: string;
  /**游戏图标 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
}
declare interface IUpdateSortOrderReq {
  /**渠道类型 */
  channelType: string;
  /**币种代码 */
  currencyCode: string;
  /**排序 */
  sortOrder: number;
}
declare interface IUpdateThirdTopUpReq {
  /**三方充值 0：关闭；1:打开 */
  thirdTopUp: number;
}
declare interface IUpdateUserReq {
  /**企业身份号码 */
  businessIdNumber: string;
  /**邮箱 */
  email: string;
  /**个人身份号码 */
  personalIdNumber: string;
  /**用户编号 */
  userId: number;
  /**真实姓名 */
  userName: string;
}
declare interface IUpdateUserStatusReq {
  /**状态变更原因 */
  remark: string;
  /**用户编号 */
  userId: number;
}
declare interface IUpdateValidAmountReq {
  /**每日上限 */
  dailyCeiling: number;
  /**经验值汇率 */
  exchangeRate: number;
  /**游戏渠道 */
  factoryCode: string;
  /**ID */
  id: number;
}
declare interface IUpdateValidMembersReq {
  /**下注天数 */
  bettingDays: number;
  /**下注次数 */
  bettingNum: number;
  /**计算周期 */
  calculationPeriod: number;
  /**存款金额 */
  depositAmount: number;
  /**负盈利金额 */
  negativeProfitAmount: number;
  /**投注有效流水 */
  validAmount: number;
}
declare interface IUpdateVipReq {
  /**周期奖励彩金 */
  cycleLottery: number;
  /**降级存款值条件 */
  downDepositAmount: number;
  /**降级负盈利值条件 */
  downNegativeProfitAmount: number;
  /**降级有效流水值条件 */
  downValidAmount: number;
  /**降级有效会员数条件 */
  downValidMembers: number;
  /**升级存款值条件 */
  upDepositAmount: number;
  /**升级奖励彩金 */
  upLottery: number;
  /**升级负盈利值条件 */
  upNegativeProfitAmount: number;
  /**升级有效流水值条件 */
  upValidAmount: number;
  /**升级有效会员数条件 */
  upValidMembers: number;
  /**数据id */
  vipId: number;
  /**vip名称(中文) */
  vipName: string;
  /**vip名称(葡语-巴西) */
  vipNameBr: string;
  /**vip名称(菲律宾语) */
  vipNamePh: string;
  /**vip名称(泰语) */
  vipNameTh: string;
  /**vip名称(英文) */
  vipNameUs: string;
  /**vip名称(越南语) */
  vipNameVn: string;
}
declare interface IUploadResultResp {
  /**文件名称 */
  fileName: string;
  /**文件编号 */
  fileNo: string;
  /**文件大小 */
  fileSize: string;
  /**文件类型 2:图片 3:语音 4:视频 5:PDF文件 6:其他文件 */
  fileType: number;
  /**文件全路径,用于展示 */
  url: string;
}
declare interface IUserAccountBalanceResp {
  /**cny余额 */
  amountCNY: number;
  /**usdt余额 */
  amountUSDT: number;
}
declare interface IUserAccountResp {
  /**人民币总余额 */
  balance: number;
  /**渠道余额信息 */
  channelAccount: IChannelAccountResp[];
  /**游戏账户余额 */
  channelBalance: number;
}
declare interface IUserAchievingBo {
  /**存款值 */
  depositAmount: number;
  /**直属有效会员数 */
  directSum: number;
  /**总有效会员数 */
  effectiveSum: number;
  /**有效流水 */
  gameValidAmount: number;
  /**负盈利 */
  negativeProfitAmount: number;
  /**达成条件的vip用户数 */
  vipSum: number;
  /**提款值 */
  withdrawAmount: number;
}
declare interface IUserAchievingReq {
  /**用户Id */
  userId: number;
}
declare interface IUserActionStatisticsResp {
  /**活跃用户数 */
  activityCount: number;
  /**活跃用户折线数据 */
  activityData: IUserActivityDaily[];
  /**注册用户数 */
  registerCount: number;
  /**注册用户折线数据 */
  registerData: IUserActivityDaily[];
}
declare interface IUserActivityDaily {
  /**用户数 */
  count: number;
  /**日期 */
  period: string;
}
declare interface IUserBankCardDetailReq {
  /**业务卡号 */
  bizCardCode: string;
  /**用户ID */
  userId: number;
}
declare interface IUserBankCardQueryReq {
  /**用户ID */
  userId: number;
}
declare interface IUserBankCardQueryResp {
  /**银行账号 */
  bankAccount: string;
  /**银行名称 */
  bankName: string;
  /**业务卡号 */
  bizCardNo: string;
  /**币种编码 */
  currencyCode: string;
  /**币种名称 */
  currencyName: string;
  /**状态 1:开启 0:关闭 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IUserBankCardUpdateReq {
  /**银行名称 */
  bankName: string;
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
  /**法币，顿号（、）分割 */
  currencyCode: string;
  /**其他属性 */
  props: IBankCardUpdatePropReq[];
  /**状态：1 可用；0 不可用 */
  status: number;
  /**用户ID */
  userId: number;
}
declare interface IUserDataSummary {
  /**账户余额 */
  accountBalance: number;
  /**游戏账户余额 */
  channelBalance: number;
  /**充值累计 */
  deposit: number;
  /**充值提现流水倍数 */
  depositWithdrawFactor: number;
  /**有效流水 */
  effectiveBet: number;
  /**红包提现流水倍数 */
  redBagWithdrawFactor: number;
  /**剩余需要的有效流水 */
  remainNeedAmount: number;
  /**负盈利 */
  reverseProfit: number;
  /**返佣累计 */
  rewardAmount: number;
  /**用户编号 */
  userId: number;
  /**彩金累计 */
  winnings: number;
  /**提现累计 */
  withdraw: number;
}
declare interface IUserDetailResp {
  /**账号 */
  account: string;
  /**成为代理时间 */
  agentCreateTime: string;
  /**代理级别 */
  agentLevel: number;
  /**生日 */
  birthday: string;
  /**企业身份号码 */
  businessIdNumber: string;
  /**注册时间 */
  createTime: string;
  /**有效会员 1:是 0:否 */
  effective: number;
  /**邮箱 */
  email: string;
  /**经验值 */
  experience: number;
  /**封禁用户，true：封禁 */
  forbidden: boolean;
  /**邀请人账号(所属代理) */
  inviteAccount: string;
  /**邀请人编号 */
  inviteUid: number;
  /**邀请链接 */
  inviteUrl: string;
  /**是否在线 1:是 0:否 */
  isOnline: number;
  /**最后登录时间 */
  lastLogin: number;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**邀请码 */
  layerCode: string;
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobileNo: string;
  /**昵称 */
  nickName: string;
  /**个人身份号码 */
  personalIdNumber: string;
  /**注册端(h5/pc端) */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**备注 */
  reminder: string;
  /**奖励比例 */
  rewardRate: number;
  /**奖励类型 1:占成 2:返佣 */
  rewardType: number;
  /**用户状态 1:正常 0:锁定 */
  status: number;
  /**飞机账号 */
  telegram: string;
  /**用户编号 */
  userId: number;
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**用户标签文本，多个逗号隔开 */
  userLabelText: string;
  /**真实姓名 */
  userName: string;
  /**用户类型 1:普通 3:一级代理 4:代理用户 */
  userType: number;
  /**vip等级 */
  vipLevel: number;
  /**vip等级名称 */
  vipLevelName: string;
}
declare interface IUserGameRecordReq {
  /**结束时间 */
  end: number;
  /**游戏渠道 */
  factoryCode: string;
  /**拉取时间 - 结束时间 */
  fetchEnd: number;
  /**拉取时间 - 开始时间 */
  fetchStart: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**归属包网商 */
  proxyAccount: string;
  /**开始时间 */
  start: number;
  /**游戏类型id */
  typeId: number;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IUserGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号id */
  bureauId: string;
  /**渠道编号 */
  channelId: string;
  /**拉取时间 */
  createTime: string;
  /**游戏结束时间 */
  endTime: number;
  /**游戏渠道 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**自定义游戏名称 */
  gameNameCustomer: string;
  /**游戏类型id */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**上级代理编号 */
  parentUid: number;
  /**包网商名称 */
  proxyName: string;
  /**包网商编号 */
  proxyUid: number;
  /**结果 */
  result: number;
  /**输赢结果标志 1:赢 2:平 3:输 */
  resultFlag: number;
  /**游戏开始时间 */
  startTime: number;
  /**状态 1:已结算 2:进行中 3:系统撤单 4:拒绝 5:作废 6:玩家取消 */
  status: number;
  /**总投注 */
  totalBet: number;
  /**交易id */
  transactionId: string;
  /**游戏人数 */
  userCount: number;
  /**用户编号 */
  userId: number;
  /**用户名称 */
  userName: string;
  /**有效投注 */
  validBet: number;
}
declare interface IUserIdReq {
  /**用户编号 */
  userId: number;
}
declare interface IUserInfoReminderResp {
  /**创建时间 */
  createTime: string;
  /**备注 */
  reminder: string;
  /**修改人用户账号 */
  updateUserAccount: string;
  /**代理修改人ID级别 */
  updateUserId: number;
  /**用户账号 */
  userAccount: string;
  /**用户ID */
  userId: number;
}
declare interface IUserLabelResp {
  /**标签编码 */
  labelCode: string;
  /**标签名称 */
  labelName: string;
  /**排序权重 */
  weight: number;
}
declare interface IUserLabelUpdate {
  /**用户标签编码 */
  labelCode: string;
  /**用户编号 */
  userId: number;
}
declare interface IUserNoReq {
  /**用户编号 */
  userNo: number;
}
declare interface IUserOperationLogReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
}
declare interface IUserPasswordRequestProxyVo {
  /**新密码 */
  newPassword: string;
  /**没有提供描述 */
  notSame: boolean;
  /**原密码 */
  oldPassword: string;
}
declare interface IUserReferralsResp {
  /**账号 */
  account: string;
  /**注册时间 */
  createTime: string;
  /**累计存款 */
  depositAmount: number;
  /**是否首存（1:是；0否） */
  firstDeposit: string;
  /**首存金额 */
  firstDepositAmount: number;
  /**邀请人账号 */
  inviteAccount: string;
  /**邀请人编号 */
  inviteUid: number;
  /**邀请链接 */
  inviteUrl: string;
  /**邀请码 */
  layerCode: string;
  /**用户类型 1:普通 3:一级代理 4:代理用户 */
  strUserType: string;
  /**用户编号 */
  userId: number;
  /**用户类型 1:普通 3:一级代理 4:代理用户 */
  userType: number;
}
declare interface IUserRelationAccountResp {
  /**关联类型code */
  relationTypeCode: string;
  /**关联类型名字 */
  relationTypeName: string;
  /**关联value */
  relationValue: string;
  /**用户id */
  userId: number;
  /**用户名 */
  userName: string;
}
declare interface IUserRelationReq {
  /**用户名 */
  account: string;
  /**邀请码 */
  selfLayer: string;
  /**用户Id */
  userId: string;
}
declare interface IUserRelationResp {
  /**用户名 */
  account: string;
  /**代理等级 */
  agentLevel: number;
  /**存款值（分数） */
  depositAmount: string;
  /**输赢结果 */
  gameResult: string;
  /**有效流水（分数） */
  gameValidAmount: string;
  /**是否代理 */
  isAgent: boolean;
  /**层级信息 */
  layer: string;
  /**总输 */
  lose: string;
  /**邀请码 */
  selfLayer: string;
  /**返佣金额 */
  settleAmount: string;
  /**伞下数 */
  subCount: number;
  /**用户Id */
  userId: string;
  /**用户类型 */
  userType: number;
  /**总赢 */
  win: string;
  /**提款值（分数） */
  withdrawAmount: string;
}
declare interface IUserRelationSubReq {
  /**层级 */
  layer: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
declare interface IUserReminderUpdate {
  /**用户备注 */
  reminder: string;
  /**用户编号 */
  userId: number;
}
declare interface IUserResp {
  /**账号 */
  account: string;
  /**生日 */
  birthday: string;
  /**企业身份号码 */
  businessIdNumber: string;
  /**注册时间 */
  createTime: string;
  /**有效会员 1:是 0:否 */
  effective: number;
  /**邮箱 */
  email: string;
  /**经验值 */
  experience: number;
  /**封禁用户，true：封禁 */
  forbidden: boolean;
  /**邀请人账号(所属代理) */
  inviteAccount: string;
  /**邀请人编号 */
  inviteUid: number;
  /**是否在线 1:是 0:否 */
  isOnline: number;
  /**最后登录时间 */
  lastLogin: number;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobileNo: string;
  /**昵称 */
  nickName: string;
  /**个人身份号码 */
  personalIdNumber: string;
  /**注册端(h5/pc端) */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**备注 */
  reminder: string;
  /**用户状态 1:正常 0:锁定 */
  status: number;
  /**飞机账号 */
  telegram: string;
  /**用户编号 */
  userId: number;
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**用户标签文本，多个逗号隔开 */
  userLabelText: string;
  /**真实姓名 */
  userName: string;
  /**用户类型 1:普通 3:一级代理 4:代理用户 */
  userType: number;
  /**vip等级 */
  vipLevel: number;
  /**vip等级名称 */
  vipLevelName: string;
}
declare interface IUserRoleMenuVo {
  /**菜单信息 */
  menus: IMenuResponseVo[];
  /**角色信息 */
  roles: IJiaoSeXiangYingXinXi[];
}
declare interface IUserRoleRequestVo {
  /**角色编号集合 */
  roleIds: string[];
  /**用户编号 */
  userId: string;
}
declare interface IUserStatisticsInfoResp {
  /**总用户 */
  totalCount: number;
}
declare interface IUserStatisticsReq {
  /**结束时间 */
  end: string;
  /**统计纬度:1 按天；3 按月 */
  groupBy: number;
  /**开始时间 */
  start: string;
}
declare interface IUserStatisticsResp {
  /**注册用户数 */
  count: number;
  /**日期 */
  date: string;
}
declare interface IUserTurnoverHistoryResp {
  /**创建时间 */
  createTime: string;
  /**操作金额 */
  operationAmount: number;
  /**操作类型 0-减少 1-增加 */
  operationType: number;
  /**修改人账号 */
  updateUserAccount: string;
  /**修改人ID */
  updateUserId: number;
  /**用户账号 */
  userAccount: string;
  /**用户ID */
  userId: number;
}
declare interface IVipManagementResp {
  /**周期奖励彩金 */
  cycleLottery: number;
  /**降级条件 */
  downgradeConditions: string;
  /**包网商id */
  proxyId: number;
  /**结算周期：WEEK、MONTH */
  settlementType: string;
  /**升级奖励彩金 */
  upLottery: number;
  /**更新时间 */
  updateTime: string;
  /**升级条件 */
  upgradeConditions: string;
  /**编号 */
  vipId: number;
  /**vip等级 */
  vipLevel: number;
  /**vip名称 */
  vipName: string;
}
declare interface IVipManagementVo {
  /**周期奖励彩金 */
  cycleLottery: number;
  /**降级存款值条件 */
  downDepositAmount: number;
  /**降级负盈利值条件 */
  downNegativeProfitAmount: number;
  /**降级有效流水值条件 */
  downValidAmount: number;
  /**降级有效会员数条件 */
  downValidMembers: number;
  /**结算周期：WEEK、MONTH */
  settlementType: string;
  /**升级存款值条件 */
  upDepositAmount: number;
  /**升级奖励彩金 */
  upLottery: number;
  /**升级负盈利值条件 */
  upNegativeProfitAmount: number;
  /**升级有效流水值条件 */
  upValidAmount: number;
  /**升级有效会员数条件 */
  upValidMembers: number;
  /**编号 */
  vipId: number;
  /**vip等级 */
  vipLevel: number;
  /**vip名称(中文) */
  vipName: string;
  /**vip名称(葡语-巴西) */
  vipNameBr: string;
  /**vip名称(菲律宾语) */
  vipNamePh: string;
  /**vip名称(泰语) */
  vipNameTh: string;
  /**vip名称(英文) */
  vipNameUs: string;
  /**vip名称(越南语) */
  vipNameVn: string;
}
declare interface IWithdrawInfoResp {
  /**链:TRON,BSC,ETH；设置法币传对应法币 */
  chain: string;
  /**链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 */
  chainStatus: number;
  /**手续费 */
  fee: number;
  /**手续费类型：1 百分比；2 固定值 */
  feeType: number;
  /**总提币状态(1:开启 0:关闭) */
  status: number;
  /**限制次数 */
  times: number;
  /**最大提币金额 */
  withdrawMax: number;
  /**最小提币金额 */
  withdrawMin: number;
}
declare interface IWithdrawNoChannelTypeReq {
  /**通道类型 */
  channelType: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
declare interface IWithdrawNoReq {
  /**通道类型 */
  channelType: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
declare interface IWithdrawRefuseReq {
  /**通道类型 */
  channelType: string;
  /**拒绝理由 */
  refuseDesc: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
declare interface IWithdrawReq {
  /**提币地址 */
  address: string;
  /**第三方订单号 */
  channelOrderNo: string;
  /**渠道类型 */
  channelType: string;
  /**提款类型：1 数字货币；2 法币 */
  currencyType: number;
  /**交易时间结束 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**交易时间开始 */
  start: string;
  /**状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功 */
  status: number;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
  /**提现/币单号 */
  withdrawNo: string;
  /**提币类型 1:外部提币 2:内部提币 3：系统提现 */
  withdrawType: number;
  /**提现方式，1：线上，2：线下 */
  withdrawWay: number;
}
declare interface IWithdrawResp {
  /**提现/币分值 - 实际到账 */
  actualLegerAmount: number;
  /**1级代理账户 */
  agentAccount: string;
  /**1级代理ID */
  agentId: number;
  /**提币金额 */
  amount: number;
  /**链 */
  chain: string;
  /**第三方订单号 */
  channelOrderNo: string;
  /**渠道类型 */
  channelType: string;
  /**交易完成时间 */
  completeTime: string;
  /**下单时间 */
  createTime: string;
  /**币种 */
  currencyCode: string;
  /**币种类型 1数字货币 2法币 */
  currencyType: number;
  /**附加信息，比如提现用户卡信息 */
  extraData: string;
  /**手续费 */
  fee: number;
  /**手续费类型：1 固定值；2 比例 */
  feeType: number;
  /**没有提供描述 */
  feeValue: number;
  /**提现/币分值 */
  legerAmount: number;
  /**上级代理帐号 */
  parentAccount: string;
  /**上级代理ID */
  parentId: number;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**包网商ID */
  proxyUserId: number;
  /**汇率 */
  rate: number;
  /**拒绝理由 */
  refuseDesc: string;
  /**备注 */
  reminder: string;
  /**状态 0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 9:提币失败 */
  status: number;
  /**实际到账 */
  targetAmount: number;
  /**接收地址 */
  toAddress: string;
  /**交易hash */
  txHash: string;
  /**会员名 */
  userAccount: string;
  /**用户编号 */
  userId: number;
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**会员类型 */
  userType: number;
  /**提币单号 */
  withdrawNo: string;
  /**是否能拒绝 */
  withdrawRefuse: boolean;
  /**是否能重试发起提现支付 */
  withdrawRetry: boolean;
  /**提币类型 1:外部提币 2:内部提币 3：系统提现 */
  withdrawType: number;
  /**提现方式，1：线上，2：线下 */
  withdrawWay: number;
}
declare interface IWithdrawSummaryResp {
  /**总提款 */
  withdrawAmount: number;
  /**USDT提款 */
  withdrawDigitalAmount: number;
  /**法币提款 */
  withdrawLegalAmount: number;
}
declare interface IIpJiHeCanShuDuiXiang {
  /**账号 */
  account: string;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**注册端(h5/pc端) */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**用户编号 */
  userId: number;
}
declare interface IIpGuiZeVo {
  /**没有提供描述 */
  id: number;
  /**范围类型,REGION:地区,IP_PATTERN:ip模式,IP_RANGE:ip范围 */
  rangeType: string;
  /**结束规则 */
  ruleEnd: string;
  /**开始规则 */
  ruleStart: string;
}
declare interface IIpGuiZeTianJiaCanShu {
  /**范围类型,REGION:地区,IP_PATTERN:ip模式,IP_RANGE:ip范围 */
  rangeType: string;
  /**结束规则 */
  ruleEnd: string;
  /**开始规则 */
  ruleStart: string;
}
declare interface IDaiLiSanXiaYongHuChongZhiTongJiQingQiuDuiXiang {
  /**结束时期 */
  end: string;
  /**包网商id */
  proxyId: number;
  /**开始时期 */
  start: string;
  /**排名前N的数据 */
  topN: number;
}
declare interface IDaiLiSanXiaYongHuChongZhiTongJiFanHuiDuiXiang {
  /**代理 */
  agentAccount: string;
  /**代理ID */
  agentId: number;
  /**伞下充值总额 */
  depositAmount: number;
  /**包网商 */
  proxyAccount: string;
  /**排名 */
  serialNo: number;
  /**提款总额 */
  withdrawAmount: number;
}
declare interface IYiBiaoPanCanShuDuiXiang {
  /**结束日期 */
  end: string;
  /**统计纬度:1 按天 2 按周 3 按月 */
  groupBy: number;
  /**包网商id,查全部传0 */
  proxyUid: number;
  /**起始日期 */
  start: string;
}
declare interface IHuiYuanGuanLianZhangHao {
  /**会员关联账号,多个用英文逗号分隔,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联,bankCard:相同银行卡关联,parentAgent:相同上级代理关联 */
  userRelationAccount: string;
  /**关联会员处理方式，1：不处理，2:自动拉黑 */
  userRelationProcessMode: number;
  /**关联会员处理范围，1:全部关联会员，2:仅当前会员，3:仅当前及以后注册会员 */
  userRelationProcessRange: number;
}
declare interface IHuiYuanJiHeChaXunFanHuiDuiXiang {
  /**银行卡号 */
  bankCardNo: string;
  /**银行卡持有人 */
  bankCardOwner: string;
  /**银行名称 */
  bankName: string;
  /**绑卡时间 */
  boundCardTime: string;
  /**注册时间 */
  createTime: string;
  /**最新登录IP */
  lastLoginIp: string;
  /**最后登录时间 */
  lastLoginTime: number;
  /**上级代理 */
  parentAgent: string;
  /**注册来源 */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**用户状态，0:被拉黑，1:正常 */
  status: number;
  /**用户账号 */
  userAccount: string;
  /**用户ID */
  userId: number;
  /**用户姓名 */
  userName: string;
  /**用户类型 */
  userType: number;
}
declare interface IHuiYuanJiHeQingQiuDuiXiang {
  /**稽核条件模式,all:全部条件相同,anyone:任一条件相同 */
  examineConditionMode: string;
  /**稽核条件,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联, bankCard:相同银行卡关联,parentAgent:相同上级代理关联 */
  examineConditions: string[];
  /**稽核模式,relationUser:关联会员, custom:自定义 */
  examineMode: string;
  /**稽核范围,all:全部,userAccount:指定会员,registerIp:指定注册IP,loginIp:指定登录IP,bankCardNo:指定银行卡号,parentAgent:指定上级代理 */
  examineRange: string;
  /**稽核范围输入值 */
  examineRangeValue: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**是否显示已拉黑用户,true:显示，false:不显示 */
  showDisabledUser: boolean;
}
declare interface IXiuGaiYongHuFengJinZhuangTai {
  /**封锁：true，解封：false */
  forbidden: boolean;
  /**用户id */
  userId: number;
}
declare interface IXiuGaiYongHuYinHangKaBangDingShuLiang {
  /**最大数量 */
  amount: number;
  /**银行卡是否可编辑和删除：0否，1是 */
  bankCardEditAndDelete: number;
  /**同一银行卡仅绑定一次 */
  boundOnce: boolean;
}
declare interface IChongZhiLiuShuiYouXiaoBeiShu {
  /**倍数 */
  multiple: number;
}
declare interface IChongZhiFanYongZongJinETongJiXinXi {
  /**达成返佣总金额 */
  achievingAmount: number;
  /**待审核发放 */
  auditingAmount: number;
  /**充值返佣总发放 */
  passedAmount: number;
  /**审核拒绝发放 */
  rejectedAmount: number;
}
declare interface IChongZhiFanYongJiLu {
  /**达成金额 */
  bizAmount: number;
  /**订单id */
  bizNo: string;
  /**发放时间 */
  completeTime: string;
  /**充值时间 */
  createTime: string;
  /**主键id */
  id: number;
  /**是否是代理 true:是 false:否 */
  isAgent: boolean;
  /**返佣等级 */
  level: number;
  /**上级账户 */
  parentAccount: string;
  /**上级id */
  parentUid: number;
  /**返佣金额 */
  rakebackAmount: number;
  /**返佣编号 */
  rakebackNo: string;
  /**返佣比例 */
  rakebackRate: number;
  /**备注 */
  remarks: string;
  /**状态 0:待审核 1:已发放 2:拒绝发放 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**用户名 */
  userAccount: string;
  /**用户id */
  userId: number;
}
declare interface IGuanLianHuiYuanChaXunQingQiuDuiXiang {
  /**查询用户id */
  userId: number;
}
declare interface IGuanLianHuiYuanChaXunFanHuiDuiXiang {
  /**已拉黑数量 */
  disabledUserCount: number;
  /**关联会员数量 */
  relationUserCount: number;
}
declare interface IBaoWangShangKeFuPeiZhiXinXi {
  /**内容 */
  content: string;
  /**没有提供描述 */
  createTime: string;
  /**没有提供描述 */
  id: number;
  /**logo图片 */
  img: string;
  /**图片链接 */
  imgUrl: string;
  /**客服人员名称 */
  name: string;
  /**所属包网商 */
  proxyUid: number;
  /**状态 */
  status: boolean;
  /**客服类型 */
  type: string;
  /**没有提供描述 */
  updateTime: string;
  /**跳转链接 */
  url: string;
}
declare interface IBaoWangShangKeFuPeiZhiCanShuDuiXiang {
  /**内容 */
  content: string;
  /**没有提供描述 */
  id: number;
  /**logo图片 */
  img: string;
  /**客服人员名称 */
  name: string;
  /**状态 */
  status: boolean;
  /**客服类型 */
  type: string;
  /**跳转链接 */
  url: string;
}
declare interface IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang {
  /**活动类型 */
  activityType: string;
  /**代理id */
  agentUid: string;
  /**没有提供描述 */
  agentUidLong: number;
  /**到账时间 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**审核时间-结束 */
  reviewTimeEnd: string;
  /**审核时间-开始 */
  reviewTimeStart: string;
  /**到账时间 */
  start: string;
  /**状态 */
  statusList: number[];
  /**用户id */
  userId: number;
}
declare interface IHouTaiFaFangGuiZe {
  /**提现倍数 */
  withdrawFactor: number;
}
declare interface IDiQuMingZhiDuiXiang {
  /**没有提供描述 */
  id: number;
  /**地区名 */
  regionName: string;
}
declare interface IZiDuanMingShuXingQingQiu {
  /**字段编码 */
  propCode: string;
  /**说明文案 */
  propDesc: string;
  /**长度限制 */
  propLen: number;
  /**字段名 */
  propName: string;
  /**字段名葡语名称 */
  propNameBr: string;
  /**字段名英文名称 */
  propNameEn: string;
  /**字段名菲律宾名称 */
  propNamePh: string;
  /**字段名泰语名称 */
  propNameTh: string;
  /**字段名越南名称 */
  propNameVn: string;
  /**是否必填 1:是 0:否 */
  propRequired: number;
}
declare interface ICunKuanTongJi {
  /**盘内余额 */
  accountBalance: number;
  /**实际提款额（总提款额-手续费） */
  actualWithdrawAmount: number;
  /**银行存款额 */
  bankDepositAmount: number;
  /**渠道存款额（三方支付） */
  channelDepositAmount: number;
  /**渠道存款额（普通） */
  channelDepositNormalAmount: number;
  /**存款笔数 */
  depositCount: number;
  /**单笔最高存款 */
  depositMaxAmount: number;
  /**单笔最低存款 */
  depositMinAmount: number;
  /**存款人数 */
  depositUserAmount: number;
  /**存取差额（总存款额-实际提款额） */
  depositWithdrawDiff: number;
  /**首充 */
  firstDeposit: number;
  /**首次存款总额 */
  firstDepositTotalAmount: number;
  /**首次存款人数 */
  firstDepositUserAmount: number;
  /**首次提款总额 */
  firstWithdrawAmount: number;
  /**首次提款人数 */
  firstWithdrawUserCount: number;
  /**游戏笔数 */
  gameCount: number;
  /**有效流水统计 */
  journalAccountAmount: number;
  /**总输 */
  lossAmount: number;
  /**负盈利额（总输-总赢） */
  negativeProfitAmount: number;
  /**注册 */
  register: number;
  /**赠送彩金统计 */
  rewardAmount: number;
  /**签到 */
  signIn: number;
  /**总提款额 */
  sumWithdrawAmount: number;
  /**总存款额 */
  totalDeposit: number;
  /**USDT存款额 */
  usdtDepositAmount: number;
  /**会员反水统计 */
  userRebateAmount: number;
  /**会员反水人数 */
  userRebateCount: number;
  /**赠送彩金会员人数 */
  userRewardCount: number;
  /**总赢 */
  winAmount: number;
  /**提款笔数 */
  withdrawCount: number;
  /**提款手续费 */
  withdrawFee: number;
  /**提款人数 */
  withdrawUserCount: number;
}
declare interface IShenPiRenWuJiangLiQingQiu {
  /**审批结果 true:通过 false:拒绝 */
  pass: boolean;
  /**拒绝原因 */
  reason: string;
  /**发放编号 */
  rewardNo: string;
}
declare interface IBiZhongQiYongJinYongQingQiuXinXi {
  /**币种代码 */
  code: string;
  /**状态：1 可用；0 不可用 */
  status: number;
}
declare interface IBiZhongChaXunFanHuiXinXi {
  /**币种代码 */
  code: string;
  /**国家 */
  country: string;
  /**币种名称 */
  name: string;
  /**汇率 */
  rate: number;
  /**状态 1:可用 0:不可用 */
  status: number;
  /**币种类型 1数字货币 2法币 */
  type: number;
  /**更新时间 */
  updateTime: string;
}
declare interface IBiZhongHuiShuaiGengXinQingQiuXinXi {
  /**币种代码 */
  code: string;
  /**汇率 */
  rate: number;
}
declare interface ICaiJinTongJiShuJuBossZhiDuiXiang {
  /**任务彩金总发放数 */
  missionAmount: number;
  /**任务彩金总发放分 */
  missionScore: number;
  /**其他彩金总发放数 */
  otherAmount: number;
  /**其他彩金总发放分 */
  otherScore: number;
  /**审核拒绝金额 */
  refuseAmount: number;
  /**注册彩金总发放数 */
  registerAmount: number;
  /**签到彩金总发放数 */
  signInAmount: number;
  /**红包发放数量 */
  systemAllocateAmount: number;
  /**彩金总发放数 */
  totalAmount: number;
  /**待审核金额 */
  unreviewAmount: number;
  /**vip彩金总发放数 */
  vipAmount: number;
  /**vip彩金总发放分 */
  vipScore: number;
}
declare interface ICaiJinGuiZePeiZhiXinXi {
  /**客服分配规则，对应配置类型：SYSTEM_ALLOCATION */
  allocateRule: IHouTaiFaFangGuiZe[];
  /**没有提供描述 */
  createTime: string;
  /**首次存款规则，对应配置类型：FIRST_DEPOSIT */
  firstDepositRule: IShouChongLeiXingGuiZe[];
  /**没有提供描述 */
  id: number;
  /**是否需要审核：1 是；0 否；红包传0 */
  needReview: number;
  /**关联帐号是否只参加一次：1 是；0 否；红包传0 */
  oneAssAccountOneTime: number;
  /**包网商id */
  proxyUid: number;
  /**注册规则，对应配置类型：REGISTER */
  registerRule: IZhuCeLeiXingGuiZe[];
  /**签到规则，对应配置类型：SIGN_IN */
  signInRule: IQianDaoLeiXingGuiZe[];
  /**状态 */
  status: boolean;
  /**当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN */
  type: string;
  /**没有提供描述 */
  updateTime: string;
}
declare interface ICaiJinGuiZePeiZhiCanShuDuiXiang {
  /**客服分配规则，对应配置类型：SYSTEM_ALLOCATION, MISSION */
  allocateRule: IHouTaiFaFangGuiZe[];
  /**首次存款规则，对应配置类型：FIRST_DEPOSIT */
  firstDepositRule: IShouChongLeiXingGuiZe[];
  /**主键，新增是为空 */
  id: number;
  /**是否需要审核：1 是；0 否；红包传0 */
  needReview: number;
  /**关联帐号是否只参加一次：1 是；0 否；红包传0 */
  oneAssAccountOneTime: number;
  /**包网商id */
  proxyUid: number;
  /**注册规则，对应配置类型：REGISTER */
  registerRule: IZhuCeLeiXingGuiZe[];
  /**签到规则，对应配置类型：SIGN_IN */
  signInRule: IQianDaoLeiXingGuiZe[];
  /**状态 */
  status: boolean;
  /**当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN,MISSION */
  type: string;
}
declare interface ICaiJinPeiZhiChaXunDuiXiang {
  /**主键 */
  id: number;
  /**包网商id */
  proxyUid: number;
}
declare interface IPiLiangShenPiFanYongJiLuQingQiu {
  /**返佣编号 */
  rakeBackNoList: string[];
  /**备注（拒绝备注） */
  remarks: string;
  /**审批结果：1.通过 2.拒绝 */
  status: number;
  /**返佣类型 1:充值返佣 2:有效流水返佣 */
  type: number;
}
declare interface IPiLiangTongGuoRenWuJiangLiQingQiu {
  /**发放编号 */
  rewardNoList: string[];
}
declare interface IXinZengFanShuiFangAnMingXi {
  /**厂商 */
  factoryCode: string;
  /**游戏类型id */
  gameTypeId: number;
  /**等级 */
  level: number;
  /**返水比例 */
  rebateRatio: number;
  /**有效流水下限 */
  validAmountLower: number;
}
declare interface IXinZengFanShuiFangAnQingQiu {
  /**计算方式：1阶梯式，2平铺式 */
  calculationMethod: number;
  /**明细 */
  items: IXinZengFanShuiFangAnMingXi[];
  /**方案名称 */
  planName: string;
  /**返水流水上限 */
  rebateUpper: number;
  /**vip等级id集合(用,分隔) */
  vipLevels: string;
  /**提现倍数 */
  withdrawalMultiple: number;
}
declare interface IGengXinFanHuiFangAnMingXiQingQiu {
  /**厂商 */
  factoryCode: string;
  /**游戏类型id */
  gameTypeId: number;
  /**明细id */
  id: number;
  /**等级 */
  level: number;
  /**返水比例 */
  rebateRatio: number;
  /**有效流水下限 */
  validAmountLower: number;
}
declare interface IGengXinFanShuiFangAnQingQiu {
  /**方案id */
  id: number;
  /**明细 */
  items: IGengXinFanHuiFangAnMingXiQingQiu[];
  /**方案名称 */
  planName: string;
  /**返水流水上限 */
  rebateUpper: number;
  /**vip等级id集合(用,分隔) */
  vipLevels: string;
  /**提现倍数 */
  withdrawalMultiple: number;
}
declare interface IZhuZhuangTuYuanSu {
  /**x轴 */
  key: string;
  /**y轴 */
  val: number;
}
declare interface IZhuCeShuLiangXianZhi {
  /**最大注册数 */
  amount: number;
}
declare interface IZhuCeLeiXingGuiZe {
  /**彩金数量 */
  fixedVal: number;
  /**彩金数量 */
  withdrawFactor: number;
}
declare interface IYouXiPaiHangCanShuDuiXiang {
  /**结束日期 */
  end: string;
  /**包网商id,查全部传0 */
  proxyUid: number;
  /**起始日期 */
  start: string;
  /**没有提供描述 */
  xtype: string;
  /**没有提供描述 */
  ytype: string;
}
declare interface IYouXiPaiHangDuiXiang {
  /**图表元素 */
  elements: IZhuZhuangTuYuanSu[];
}
declare interface IYongHuChongZhiTongJiQingQiuDuiXiang {
  /**代理id */
  agentId: number;
  /**结束时期 */
  end: string;
  /**包网商id */
  proxyId: number;
  /**开始时期 */
  start: string;
  /**排名前N的数据 */
  topN: number;
}
declare interface IYongHuChongZhiTongJiFanHuiDuiXiang {
  /**充值总额 */
  depositAmount: number;
  /**包网商 */
  proxyAccount: string;
  /**排名 */
  serialNo: number;
  /**用户名 */
  userAccount: string;
  /**用户id */
  userId: number;
  /**提款总额 */
  withdrawAmount: number;
}
declare interface IYongHuCaiJinFaFangJiLu {
  /**上级代理 */
  agentName: string;
  /**代理商id */
  agentUid: number;
  /**创建时间 */
  createTime: string;
  /**说明(原因) */
  explainReview: string;
  /**没有提供描述 */
  id: number;
  /**归属包网商 */
  proxyName: string;
  /**包网商id */
  proxyUid: number;
  /**到账时间 */
  receivedTime: string;
  /**单号 */
  recordNo: string;
  /**备注 */
  remark: string;
  /**审核时间 */
  reviewTime: string;
  /**状态：1有效，0无效 */
  status: number;
  /**来源类型 */
  type: string;
  /**没有提供描述 */
  typeName: string;
  /**用户id */
  userId: number;
  /**会员名 */
  userName: string;
  /**会员类型,1:普通会员，4:代理会员 */
  userType: number;
  /**彩金发放数量 */
  winningsAmount: number;
}
declare interface IJiHeIpLieBiaoZhiDuiXiang {
  /**账号 */
  account: string;
  /**注册时间 */
  createTime: string;
  /**用户编号 */
  id: number;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**昵称 */
  nickName: string;
  /**注册端(h5/pc端) */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**真实姓名 */
  userName: string;
}
declare interface IQianDaoLeiXingGuiZe {
  /**是否连续签到 */
  continuous: boolean;
  /**连续签到天数 */
  continuousDayAmount: number;
  /**签到首日发放数量 */
  firstReleaseVal: number;
  /**递增数量 */
  incrementVal: number;
  /**连续签到天数及以上发放量 */
  maxVal: number;
  /**彩金数量/天 */
  winningsVal: number;
  /**提现倍数 */
  withdrawFactor: number;
}
declare interface IJiaoSeXiangYingXinXi {
  /**创建时间 */
  createTime: string;
  /**锁定标志 1锁定 0激活 */
  locked: string;
  /**备注(最长50) */
  remark: string;
  /**角色编号 */
  roleId: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
  /**修改时间 */
  updateTime: string;
}
declare interface IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang {
  /**用户id */
  userId: number;
}
declare interface ISheZhiCunKuanCanShuDuiXiang {
  /**链:TRON,BSC,ETH；设置法币传对应法币 */
  chain: string;
  /**链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 */
  chainStatus: number;
  /**手续费 */
  fee: number;
  /**手续费类型：1 百分比；2 固定值 */
  feeType: number;
  /**总提币状态(1:开启 0:关闭) */
  status: number;
  /**最大提币金额 */
  withdrawMax: number;
  /**最小提币金额 */
  withdrawMin: number;
}
declare interface IFangWenKongZhiLieBiaoCanShu {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
declare interface IFanYongGuiZePeiZhi {
  /**返佣达成金额 */
  achievingAmount: number;
  /**返佣发放方式：1:自动 0:手动 */
  autoRakeback: number;
  /**是否是代理 true:是 false:否 */
  isAgent: boolean;
  /**直属四级代理返佣比例 */
  levelFourRate: number;
  /**直属一级代理返佣比例 */
  levelOneRate: number;
  /**直属三级代理返佣比例 */
  levelThreeRate: number;
  /**直属二级代理返佣比例 */
  levelTwoRate: number;
  /**返佣开关 1:开启 0:关闭（默认） */
  status: number;
  /**返佣类型 1:充值返佣 2:有效流水返佣 */
  type: number;
}
declare interface IFanYongGuiZePeiZhiQingQiu {
  /**返佣达成金额 */
  achievingAmount: number;
  /**返佣发放方式：1:自动 0:手动 */
  autoRakeback: number;
  /**是否是代理 true:是 false:否 */
  isAgent: boolean;
  /**直属四级代理返佣比例 */
  levelFourRate: number;
  /**直属一级代理返佣比例 */
  levelOneRate: number;
  /**直属三级代理返佣比例 */
  levelThreeRate: number;
  /**直属二级代理返佣比例 */
  levelTwoRate: number;
  /**返佣开关 1:开启 0:关闭（默认） */
  status: number;
  /**返佣类型 1:充值返佣 2:有效流水返佣 */
  type: number;
}
declare interface IFanYongJiLuLieBiaoQingQiu {
  /**订单id */
  bizNo: string;
  /**结束日期 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**开始日期 */
  start: string;
  /**状态 0:待审核 1:已发放 2:拒绝发放 */
  status: number;
  /**返佣类型 1:充值返佣 2:有效流水返佣 */
  type: number;
  /**用户名 */
  userAccount: string;
  /**用户id */
  userId: number;
}
declare interface IFanShuiFangAnXinXi {
  /**计算方式：1阶梯式 */
  calculationMethod: number;
  /**币种 */
  currency: string;
  /**发放方式：1手动 */
  distributionMethod: number;
  /**方案编号 */
  id: number;
  /**方案名称 */
  planName: string;
  /**包网商编号 */
  proxyId: number;
  /**返水流水上限 */
  rebateUpper: number;
  /**状态：1可用，0禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**vip等级id集合(用,分隔) */
  vipLevels: string;
  /**提现倍数 */
  withdrawalMultiple: number;
}
declare interface IFanShuiFangAnMingXiXinXi {
  /**厂商 */
  factoryCode: string;
  /**游戏类型id */
  gameTypeId: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**明细编号 */
  id: number;
  /**等级 */
  level: number;
  /**返水比例 */
  rebateRatio: number;
  /**有效流水下限 */
  validAmountLower: number;
}
declare interface ITongGuoShangJiDaiLiChaXunShuJu {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**上级代理账号 */
  parentAccount: string;
}
declare interface IPeiZhiChaXunDuiXiang {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**需要查询的状态 */
  status: boolean;
}
declare interface IYinHangShuXingQingQiu {
  /**银行名称 */
  bankName: string;
  /**银行英文名称 */
  bankNameEn: string;
  /**银行菲律宾名称 */
  bankNamePh: string;
  /**银行泰语名称 */
  bankNameTh: string;
  /**银行越南名称 */
  bankNameVn: string;
  /**字段编码 */
  propCode: string;
  /**说明文案 */
  propDesc: string;
  /**长度限制 */
  propLen: number;
  /**字段名 */
  propName: string;
  /**字段名葡语名称 */
  propNameBr: string;
  /**字段名英文名称 */
  propNameEn: string;
  /**字段名菲律宾名称 */
  propNamePh: string;
  /**字段名泰语名称 */
  propNameTh: string;
  /**字段名越南名称 */
  propNameVn: string;
  /**是否必填 1:是 0:否 */
  propRequired: number;
  /**银行属性 */
  props: IZiDuanMingShuXingQingQiu[];
  /**更新时间 */
  updateTime: string;
}
declare interface IShouChongLeiXingGuiZe {
  /**存款额以上 */
  bottomLine: number;
  /**固定值 */
  fixedVal: number;
  /**发放比例 */
  ratio: number;
  /**发放上限 */
  releaseTopLimit: number;
  /**发放类型:1,固定值；2,比例 */
  type: number;
  /**提现倍数 */
  withdrawFactor: number;
}
declare interface IHeiMingDanYongHuLieBiao {
  /**账号 */
  account: string;
  /**注册时间 */
  createTime: string;
  /**封禁时间 */
  disableTime: string;
  /**用户编号 */
  id: number;
  /**最后一次登陆ip */
  lastLoginIp: string;
  /**昵称 */
  nickName: string;
  /**注册端(h5/pc端) */
  registerDevice: string;
  /**注册ip */
  registerIp: string;
  /**封禁理由 */
  remark: string;
  /**真实姓名 */
  userName: string;
}
declare interface IHeiMingDanGuanLiChaXunCanShu {
  /**账号 */
  account: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
}
declare interface IAssetChangeLogexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
  /**包网商编号 */
  proxyUid: number;
  /**类型 */
  type: string;
  /**交易时间开始 */
  start: string;
  /**交易时间结束 */
  end: string;
}
declare interface ICommonlogoperateexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
  /**用户账号 */
  userAccount: string;
  /**系统模块 */
  operationBiz: string;
  /**操作类型 */
  operationType: string;
  /**操作内容 */
  remark: string;
  /**开始时间 */
  start: string;
  /**结束时间 */
  end: string;
}
declare interface IDepositexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态：0:待审核 1:审核通过 2:审核拒绝 */
  status: number;
  /**用户编号 */
  userId: number;
  /**用户账号 */
  userAccount: string;
  /**订单编号 */
  depositNo: number;
  /**充值类型:1 数字货币；2 法币 */
  currencyType: number;
  /**充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值 */
  depositWay: number;
  /**充币地址 */
  fromAddress: string;
  /**交易时间开始 */
  start: string;
  /**交易时间结束 */
  end: string;
  /**第三方订单号 */
  channelOrderNo: string;
  /**渠道类型 */
  channelType: string;
}
declare interface IDepositstatisticsagentTopNexportExcelQueryParams {
  /**包网商id */
  proxyId: number;
  /**开始时期 */
  start: string;
  /**结束时期 */
  end: string;
  /**排名前N的数据 */
  topN: number;
}
declare interface IDepositstatisticsuserTopNexportExcelQueryParams {
  /**包网商id */
  proxyId: number;
  /**代理id */
  agentId: number;
  /**开始时期 */
  start: string;
  /**结束时期 */
  end: string;
  /**排名前N的数据 */
  topN: number;
}
declare interface IFiledownloadfileNoQueryParams {
  /**type */
  type: number;
}
declare interface IFiledownloadfileNoQueryParams {
  /**type */
  type: number;
}
declare interface IGamerecordchesscardExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordchickenExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordelectronExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordesportExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**渠道Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordfishExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordlivevideoExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordlotteryExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**渠道Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamerecordordinaryExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**渠道Id */
  channelId: string;
  /**厂商 */
  factoryCode: string;
  /**游戏类型 */
  gameType: number;
  /**游戏结果 */
  resultFlag: number;
  /**状态 */
  status: number;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**游戏主类型 */
  gameMainType: string;
}
declare interface IGamerecordsportExportQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名 */
  userName: string;
  /**用户Id */
  userId: number;
  /**用户Id */
  channelId: string;
  /**注单时间-开始 */
  betStartTime: string;
  /**注单时间-结束 */
  betEndTime: string;
  /**厂商 */
  factoryCode: string;
}
declare interface IGamestatisticschannelexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**游戏渠道编号 */
  channelId: string;
  /**代理编号 */
  parentId: number;
  /**用户编号 */
  userId: number;
  /**游戏渠道编号 */
  factoryCode: string;
  /**开始时间 */
  start: number;
  /**结束时间 */
  end: number;
}
declare interface IGamestatisticsproxyexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**开始日期 */
  start: number;
  /**结束日期 */
  end: number;
}
declare interface IOperateconfigachievinggetAchievingConditionsQueryParams {
  /**agentId */
  agentId: number;
}
declare interface IRebaterecordexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户id */
  userId: number;
  /**用户名称 */
  userName: string;
  /**状态 */
  status: number;
  /**周期 */
  period: string;
}
declare interface IReferralsuserexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
  /**账号 */
  account: string;
  /**邀请码 */
  layerCode: string;
  /**邀请人编号 */
  inviteUid: number;
  /**邀请人账号(所属代理) */
  inviteAccount: string;
  /**用户类型 1:普通 4:代理用户 */
  userType: number;
  /**是否首存（1:是；0否） */
  firstDeposit: number;
  /**注册时间开始 */
  start: string;
  /**注册时间结束 */
  end: string;
}
declare interface ISettleagentexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态  0:待审核 1：驳回 2：通过 */
  status: number;
  /**代理ID */
  agentId: number;
  /**结算单号 */
  settleNo: string;
  /**代理帐号 */
  agentAccount: string;
  /**代理类型 1:直营 2:招募 3:会员申请 */
  agentType: number;
  /**上级代理 */
  parentAccount: string;
  /**开始时间 */
  start: string;
  /**结束时间 */
  end: string;
}
declare interface ISettleplatformexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**0 待线下结算;1 已结算 */
  status: number;
}
declare interface ISettleproxyexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**0 待线下结算;1 已结算 */
  status: number;
}
declare interface ISitemessagemanualsyscompensateQueryParams {
  /**bizNo */
  bizNo: string;
  /**subType */
  subType: string;
}
declare interface ISystemmenudeleteQueryParams {
  /**菜单编号 */
  menuId: string;
}
declare interface ISystemmenudeleteQueryParams {
  /**菜单编号 */
  menuId: string;
}
declare interface ISystemroledeleteQueryParams {
  /**角色编号 */
  roleId: string;
}
declare interface ISystemroledeleteQueryParams {
  /**角色编号 */
  roleId: string;
}
declare interface ISystemrolequeryByIdQueryParams {
  /**角色编号 */
  roleId: string;
}
declare interface ISystemrolequeryDetailQueryParams {
  /**角色编号 */
  roleId: string;
}
declare interface ISystemusergetRoleQueryParams {
  /**用户编号 */
  userId: string;
}
declare interface IThirdPartyPaymentdeleteQueryParams {
  /**业务唯一编码 */
  bizNo: string;
}
declare interface IThirdPartyPaymentdetailQueryParams {
  /**业务唯一编码 */
  bizNo: string;
}
declare interface IUsergameexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**游戏渠道 */
  factoryCode: string;
  /**游戏类型id */
  typeId: number;
  /**开始时间 */
  start: number;
  /**结束时间 */
  end: number;
  /**拉取时间 - 开始时间 */
  fetchStart: number;
  /**拉取时间 - 结束时间 */
  fetchEnd: number;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
  /**归属包网商 */
  proxyAccount: string;
}
declare interface IUserstatisticsexportExcelQueryParams {
  /**统计纬度:1 按天；3 按月 */
  groupBy: number;
  /**开始时间 */
  start: number;
  /**结束时间 */
  end: number;
}
declare interface IUserRelationstatisticsexportSubExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**层级 */
  layer: string;
}
declare interface IUserRelationstatisticsexportTargetExcelQueryParams {
  /**用户Id */
  userId: string;
  /**用户名 */
  account: string;
  /**邀请码 */
  selfLayer: string;
}
declare interface IWinningsrecordexportExcelQueryParams {
  /**代理id */
  agentUid: number;
  /**用户id */
  userId: number;
  /**到账时间 */
  start: number;
  /**到账时间 */
  end: number;
  /**活动类型 */
  activityType: string;
}
declare interface IWithdrawdigitalexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**提现/币单号 */
  withdrawNo: string;
  /**用户编号 */
  userId: number;
  /**用户账号 */
  userAccount: string;
  /**提款类型：1 数字货币；2 法币 */
  currencyType: number;
  /**状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功 */
  status: number;
  /**提现方式，1：线上，2：线下 */
  withdrawWay: number;
  /**提币地址 */
  address: string;
  /**交易时间开始 */
  start: string;
  /**交易时间结束 */
  end: string;
  /**第三方订单号 */
  channelOrderNo: string;
  /**提币类型 1:外部提币 2:内部提币 3：系统提现 */
  withdrawType: number;
  /**渠道类型 */
  channelType: string;
}
