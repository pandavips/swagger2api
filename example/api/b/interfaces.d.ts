/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
declare interface ICollectionAccountResp {
  //usdt-bsc
  bscUsdtAmount?: number;
  //usdt-trc
  trcUsdtAmount?: number;
  }
declare interface IHotAccountResp {
  //头寸币安币余额
  bscAmount?: number;
  //头寸波场币余额
  tronAmount?: number;
  //头寸USDT余额
  usdtAmount?: number;
  //币安USDT余额
  usdtAmountBsc?: number;
  }
declare interface IPlatformAccountResp {
  //手续费账户(CNY)
  feeCNY?: number;
  //手续费账户(USDT)，这是充U的手续费
  feeUSDT?: number;
  }
declare interface IQueryCurrentAccountTotalReq {
  //代理商编号
  agentUid?: number;
  }
declare interface IAccountCurrentTotalResp {
  //盘内余额(不包括游戏账户和冻结余额)
  accountBalance?: number;
  //盘内总余额(包括冻结余额, 不包括游戏账户)
  accountTotal?: number;
  //游戏账户余额
  channelBalance?: number;
  }
declare interface IQueryAccountTotalReq {
  //代理商编号
  agentUid?: number;
  //结束日期
  end: string;
  //起始日期
  start: string;
  }
declare interface IAccountDailyTotalResp {
  //余额
  amount?: number;
  //日期
  period?: string;
  }
declare interface IUserNoReq {
  //用户编号
  userNo: number;
  }
declare interface IUserAccountBalanceResp {
  //cny余额
  amountCNY?: number;
  //usdt余额
  amountUSDT?: number;
  }
declare interface IEditActivityLanguageReq {
  //Banner
  banner: string;
  //活动详情
  detail: string;
  //活动入口图
  entrancePic: string;
  //语言
  language: string;
  //语言编号
  languageNo?: string;
  //活动标题
  title: string;
  }
declare interface IEditActivityReq {
  //活动名称
  activityName: string;
  //活动编号
  activityNo?: string;
  //结束时间
  endTime?: string;
  //语言类型
  lanList: IEditActivityLanguageReq[];
  //开始时间
  startTime?: string;
  //状态,1:上架;2:下架
  status: number;
  //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
  type: number;
  //权重
  weights: number;
  }
declare interface IEditActivityResp {
  //活动编号
  activityNo?: string;
  }
declare interface IEditActivityStatusReq {
  //活动No
  activityNo: string;
  //状态,1:上架;2:下架
  status: number;
  }
declare interface IQueryActivityDetailReq {
  //活动No
  activityNo: string;
  }
declare interface IQueryActivityLanDetailVo {
  activityNo?: string;
  banner?: string;
  detail?: string;
  entrancePic?: string;
  language?: string;
  languageNo?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  title?: string;
  }
declare interface IQueryActivityDetailResp {
  //活动名称
  activityName?: string;
  //活动编号
  activityNo?: string;
  //结束时间
  endTime?: string;
  //活动语言版本
  lanList?: IQueryActivityLanDetailVo[];
  //开始时间
  startTime?: string;
  //状态,0:初始化;1:上架;2:下架
  status?: number;
  //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
  type?: number;
  //权重
  weights?: number;
  }
declare interface IQueryActivityReq {
  //活动名称
  activityName?: string;
  //活动编号
  activityNo?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //开始时间
  startTime?: string;
  //状态,0:初始化;1:上架;2:下架
  status?: number;
  //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
  type?: number;
  }
declare interface IQueryActivityResp {
  //活动名称
  activityName?: string;
  //活动编号
  activityNo?: string;
  //结束时间
  endTime?: string;
  //开始时间
  startTime?: string;
  //状态,0:初始化;1:上架;2:下架
  status?: number;
  //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
  type?: number;
  //权重
  weights?: number;
  }
declare interface IPageResultQueryActivityResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IQueryActivityResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IAddAgentReq {
  //代理账号
  account: string;
  //代理类型 1:直营 2:招募
  agentType: number;
  //密码
  password: string;
  //奖励比例 0-1之间
  rewardRate: number;
  //奖励类型 1:占成 2:返佣
  rewardType: number;
  //状态 1:启用 0:禁用
  status: number;
  }
declare interface IAgentApplyPassReq {
  //申请编号
  applyId: string;
  //上级代理编号
  parentUid?: number;
  //拒绝或通过原因
  remark?: string;
  //占成比例或返佣比例(当申请单奖励标志为1时必填)
  rewardRate?: number;
  //奖励类型(当申请单奖励标志为1时必填) 1:占成 2:返佣
  rewardType?: number;
  }
declare interface IQueryAgentApplyReq {
  //申请人账号
  account?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态 0:待审核 1:通过 2:拒绝
  status?: number;
  }
declare interface IAgentApplyResp {
  //申请用户账号
  account?: string;
  //代理级别
  agentLevel?: number;
  //申请编号
  applyId?: string;
  //申请时间
  createTime?: string;
  //邀请链接
  inviteUrl?: string;
  //邀请码
  layerCode?: string;
  //上级代理账号
  parentAccount?: string;
  //上级代理编号
  parentUid?: number;
  //所属包网商
  proxyUid?: number;
  //通过或拒绝原因
  remark?: string;
  //是否需要指定分成或返佣及其比例 1:需要设置 0:不需要设置
  rewardFlag?: number;
  //状态 0:待审核 1:通过 2:拒绝
  status?: number;
  //更新时间
  updateTime?: string;
  //申请用户编号
  userId?: number;
  }
declare interface IPageResultAgentApplyResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IAgentApplyResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IAgentApplyRefuseReq {
  //申请编号
  applyId: string;
  //拒绝或通过原因
  remark?: string;
  }
declare interface IAgentIdReq {
  //代理编号
  agentId: number;
  }
declare interface IAgentInfoResp {
  //账号
  account?: string;
  //代理编号
  agentId?: number;
  //代理级别
  agentLevel?: number;
  //代理类型 1:直营 2:招募 3:会员申请
  agentType?: number;
  //创建时间
  createTime?: string;
  //邀请链接
  inviteUrl?: string;
  //邀请码
  layerCode?: string;
  //上级代理账号
  parentAccount?: string;
  //上级代理编号
  parentUid?: number;
  //包网商账号
  proxyAccount?: string;
  //包网商编号
  proxyUid?: number;
  //奖励比例
  rewardRate?: number;
  //奖励类型 1:占成 2:返佣
  rewardType?: number;
  //代理状态 1:正常 0:锁定
  status?: number;
  }
declare interface IQueryAgentListReq {
  //账号
  account?: string;
  //代理编号
  agentId?: number;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  }
declare interface IPageResultAgentInfoResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IAgentInfoResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IResetPasswordReq {
  //密码
  password: string;
  //用户编号
  userId: number;
  }
declare interface IAgentUpdateReq {
  //代理编号
  agentId: number;
  //奖励比例 0-1之间
  rewardRate: number;
  //状态 1:启用 0:禁用
  status: number;
  }
declare interface IAssetChangeLogExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户编号
  userId?: number;
  //包网商编号
  proxyUid?: number;
  //类型
  type?: string;
  //交易时间开始
  start?: string;
  //交易时间结束
  end?: string;
  }
declare interface IAssetChangeLogReq {
  //交易时间结束
  end?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //包网商编号
  proxyUid?: number;
  //交易时间开始
  start?: string;
  //类型
  type?: string;
  //用户编号
  userId?: number;
  }
declare interface IAssetChangeLogResp {
  //上级代理名称
  agentName?: string;
  //上级代理id
  agentUid?: number;
  //发生额
  amount?: number;
  //创建时间
  createTime?: string;
  //币种
  currency?: string;
  //方向 in:入金 out:出金
  direct?: string;
  //流水倍数
  multiple?: number;
  //所属包网商
  proxyName?: string;
  //所属包网商id
  proxyUid?: number;
  //变动类型
  transactionType?: string;
  //变动类型文本
  transactionTypeText?: string;
  //用户编号
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IPageResultAssetChangeLogResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IAssetChangeLogResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IAssetChangeLogType {
  //下拉编码
  code?: string;
  //下拉文本
  text?: string;
  }
declare interface IBankCardDeleteReq {
  //业务卡号，更新或查看时，必传
  bizCardCode?: string;
  }
declare interface IBankCardDetailReq {
  //业务卡号，更新或查看时，必传
  bizCardCode?: string;
  }
declare interface IBankCardDetailPropResp {
  //属性编码
  propCode?: string;
  propDesc?: string;
  propLen?: number;
  //属性名
  propName?: string;
  //属性英文名
  propNameEn?: string;
  //属性菲律宾名
  propNamePh?: string;
  //属性泰语名
  propNameTh?: string;
  //属性越南名
  propNameVn?: string;
  //是否必填
  propRequired?: number;
  //值
  propValue?: string;
  //更新时间
  updateTime?: string;
  }
declare interface IBankCardDetailResp {
  //银行名称
  bankName?: string;
  //银行英文名称
  bankNameEn: string;
  //银行菲律宾名称
  bankNamePh: string;
  //银行泰语名称
  bankNameTh: string;
  //银行越南名称
  bankNameVn: string;
  //法币，都好分割
  currencyCode: string;
  //其他属性
  props?: IBankCardDetailPropResp[];
  //单日收款上限
  receivingDayLimit?: number;
  //收款结束时间
  receivingEnd?: string;
  //单笔收款最大金额
  receivingSingleMax?: number;
  //单笔收款最小金额
  receivingSingleMin?: number;
  //收款开始时间
  receivingStart?: string;
  //状态：1 可用；0 不可用
  status: number;
  //用户标签，多个用逗号隔开
  userLabel?: string;
  //用户标签文本，多个用逗号隔开
  userLabelText?: string;
  //vip等级，多个用逗号隔开
  vipLevel?: string;
  //vip等级文本，多个用逗号隔开
  vipLevelText?: string;
  }
declare interface IBankCardQueryReq {
  //结束时间
  end?: string;
  //开始时间
  start?: string;
  //状态：1 可用；0 不可用
  status?: number;
  }
declare interface IBankCardQueryResp {
  //银行账号
  bankAccount?: string;
  //银行名称
  bankName?: string;
  //银行英文名称
  bankNameEn: string;
  //银行菲律宾名称
  bankNamePh: string;
  //银行泰语名称
  bankNameTh: string;
  //银行越南名称
  bankNameVn: string;
  //业务卡号
  bizCardNo?: string;
  //币种编码
  currencyCode?: string;
  //币种名称
  currencyName?: string;
  //状态 1:开启 0:关闭
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IBankCardUpdatePropReq {
  //属性编码
  propCode: string;
  //属性名
  propName: string;
  //值
  propValue: string;
  }
declare interface IBankCardUpdateReq {
  //银行名称
  bankName?: string;
  //业务卡号，更新或查看时，必传
  bizCardCode?: string;
  //法币，顿号（、）分割
  currencyCode: string;
  //其他属性
  props?: IBankCardUpdatePropReq[];
  //单日收款上限
  receivingDayLimit?: number;
  //收款结束时间
  receivingEnd?: string;
  //单笔收款最大金额
  receivingSingleMax?: number;
  //单笔收款最小金额
  receivingSingleMin?: number;
  //收款开始时间
  receivingStart?: string;
  //状态：1 可用；0 不可用
  status: number;
  //用户标签，多个用逗号隔开，为空表示全部
  userLabel?: string;
  //vip等级，多个用逗号隔开，为空表示全部
  vipLevel?: string;
  }
declare interface IBankQueryReq {
  //银行名称
  bankName?: string;
  }
declare interface IZiDuanMingShuXingQingQiu {
  //字段编码
  propCode: string;
  //说明文案
  propDesc: string;
  //长度限制
  propLen: number;
  //字段名
  propName: string;
  //字段名英文名称
  propNameEn: string;
  //字段名菲律宾名称
  propNamePh: string;
  //字段名泰语名称
  propNameTh: string;
  //字段名越南名称
  propNameVn: string;
  //是否必填 1:是 0:否
  propRequired: number;
  }
declare interface IYinHangShuXingQingQiu {
  //银行名称
  bankName: string;
  //银行英文名称
  bankNameEn: string;
  //银行菲律宾名称
  bankNamePh: string;
  //银行泰语名称
  bankNameTh: string;
  //银行越南名称
  bankNameVn: string;
  //字段编码
  propCode: string;
  //说明文案
  propDesc: string;
  //长度限制
  propLen: number;
  //字段名
  propName: string;
  //字段名英文名称
  propNameEn: string;
  //字段名菲律宾名称
  propNamePh: string;
  //字段名泰语名称
  propNameTh: string;
  //字段名越南名称
  propNameVn: string;
  //是否必填 1:是 0:否
  propRequired: number;
  //银行属性
  props: IZiDuanMingShuXingQingQiu[];
  //更新时间
  updateTime?: string;
  }
declare interface IBankDetailResp {
  //银行名称
  bankName?: string;
  //银行英文名称
  bankNameEn: string;
  //银行菲律宾名称
  bankNamePh: string;
  //银行泰语名称
  bankNameTh: string;
  //银行越南名称
  bankNameVn: string;
  //其他属性
  props?: IYinHangShuXingQingQiu[];
  }
declare interface IBankQueryResp {
  //银行信息数量
  bankCount?: number;
  //银行名称
  bankName?: string;
  //更新时间
  updateTime?: string;
  }
declare interface IChannelDepostWithdrawSummaryReq {
  //结束日期
  end?: string;
  //开始日期
  start?: string;
  }
declare interface IChannelDepostWithdrawSummaryResp {
  //充值金额（原始币种）
  depositAmount?: number;
  //充值金额（基础币种，已扣手续费）
  depositBaseAmount?: number;
  //提现金额（原始币种）
  withdrawAmount?: number;
  //提现金额（基础币种，已扣手续费）
  withdrawBaseAmount?: number;
  }
declare interface IAddArticleReq {
  //内容(最大不能超过2000)
  content: string;
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //状态 1:启用 0:禁用
  status: number;
  //标题(最大不能超过64)
  title: string;
  }
declare interface IArticleIdReq {
  //公告编号
  articleNo: string;
  }
declare interface IQueryArticleReq {
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态 1:启用 0:禁用
  status?: number;
  //标题
  title?: string;
  }
declare interface IArticleResp {
  //公告编号
  articleNo?: string;
  //内容
  content?: string;
  //创建时间
  createTime?: string;
  //语言
  lang?: string;
  //状态 1:启用 0:禁用
  status?: number;
  //标题
  title?: string;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultArticleResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IArticleResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUpdateArticleReq {
  //公告编号
  articleNo: string;
  //内容(最大不能超过2000)
  content: string;
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //状态 1:启用 0:禁用
  status: number;
  //标题(最大不能超过64)
  title: string;
  }
declare interface IAddBannerReq {
  //文件编号
  fileNo: string;
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //状态 1:启用 0:禁用
  status: number;
  //链接(最大不能超过256)
  url: string;
  }
declare interface IBannerNoReq {
  //横幅编号
  bannerNo: string;
  }
declare interface IQueryBannerReq {
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态 1:启用 0:禁用
  status?: number;
  }
declare interface IBannerResp {
  //横幅编号
  bannerNo?: string;
  //创建时间
  createTime?: string;
  //横幅文件
  fileNo?: string;
  //横幅文件地址
  fileUrl?: string;
  //语言
  lang?: string;
  //状态 1:启用 0:禁用
  status?: number;
  //更新时间
  updateTime?: string;
  //横幅点击跳转链接
  url?: string;
  }
declare interface IPageResultBannerResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IBannerResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUpdateBannerReq {
  //横幅编号
  bannerNo: string;
  //文件编号
  fileNo: string;
  //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //状态 1:启用 0:禁用
  status: number;
  //链接(最大不能超过256)
  url: string;
  }
declare interface IUserLabelResp {
  //标签编码
  labelCode?: string;
  //标签名称
  labelName?: string;
  //排序权重
  weight?: number;
  }
declare interface ICollectResp {
  //波场归集地址
  collectAddress: string;
  //币安归集地址
  collectAddressBsc?: string;
  //波场头寸地址
  hotAddress: string;
  //币安头寸地址
  hotAddressBsc?: string;
  //最小归集金额
  minAmount: number;
  //归集周期(小时)
  period: number;
  }
declare interface IAddressReq {
  //地址
  address: string;
  //链 币安:BSC 波场:TRON
  chain: string;
  }
declare interface IPrivateKeyReq {
  //链 币安:BSC 波场:TRON
  chain: string;
  //私钥
  privateKey: string;
  }
declare interface ICommonLogOperateExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户编号
  userId?: number;
  //用户账号
  userAccount?: string;
  //系统模块
  operationBiz?: string;
  //操作类型
  operationType?: string;
  //操作内容
  remark?: string;
  //开始时间
  start?: string;
  //结束时间
  end?: string;
  }
declare interface IOperationLogReq {
  //结束时间
  end?: string;
  //系统模块
  operationBiz?: string;
  //操作类型
  operationType?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //操作内容
  remark?: string;
  //开始时间
  start?: string;
  //用户账号
  userAccount?: string;
  //用户编号
  userId?: number;
  }
declare interface IOperationLogVo {
  //日志编号
  id?: number;
  //操作业务
  operationBiz?: string;
  //操作时间
  operationTime?: string;
  //操作类型
  operationType?: string;
  //操作说明
  remark?: string;
  //操作人编号
  userId?: string;
  //操作人姓名
  userName?: string;
  }
declare interface IPageResultOperationLogVo {
  pageIndex?: number;
  pageSize?: number;
  rows?: IOperationLogVo[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ICurrencyQueryReq {
  //结束时间
  end?: string;
  //币种代码
  keyword?: string;
  //开始时间
  start?: string;
  //状态：1 可用；0 不可用
  status?: number;
  }
declare interface IBiZhongChaXunFanHuiXinXi {
  //币种代码
  code?: string;
  //国家
  country?: string;
  //币种名称
  name?: string;
  //汇率
  rate?: number;
  //状态 1:可用 0:不可用
  status?: number;
  //币种类型 1数字货币 2法币
  type?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IBiZhongHuiShuaiGengXinQingQiuXinXi {
  //币种代码
  code: string;
  //汇率
  rate: number;
  }
declare interface IUSDTGengXinQingQiuXinXi {
  //汇率
  rate: number;
  }
declare interface IDailyStatisticsReq {
  //代理编号
  agentId?: number;
  //结束日期
  end?: string;
  //起始日期
  start?: string;
  }
declare interface IProxyDailyStatResp {
  //充值笔数
  depositCount?: number;
  //首存人数
  firstDeposit?: number;
  //二存人数
  secondDeposit?: number;
  //提现笔数
  withdrawCount?: number;
  //提现人数
  withdrawUserCount?: number;
  }
declare interface IDepositUserCountResp {
  //充值人数
  depositUserCount?: number;
  //日期
  period?: string;
  //充值人数
  withdrawUserCount?: number;
  }
declare interface IUserActivityDaily {
  //用户数
  count?: number;
  //日期
  period?: string;
  }
declare interface IUserActionStatisticsResp {
  //活跃用户数
  activityCount?: number;
  //活跃用户折线数据
  activityData?: IUserActivityDaily[];
  //注册用户数
  registerCount?: number;
  //注册用户折线数据
  registerData?: IUserActivityDaily[];
  }
declare interface IWithdrawCallbackReq {
  amount?: string;
  bizOrderNo?: string;
  orderNo?: string;
  payAmount?: string;
  sign?: string;
  status?: number;
  tradeStatus?: number;
  tradeTime?: string;
  }
declare interface IDepositNoReq {
  //充值单号
  depositNo: string;
  }
declare interface IDepositRefuseReq {
  //充值单号
  depositNo: string;
  //拒绝理由
  refuseDesc?: string;
  }
declare interface IWithdrawInfoResp {
  //链:TRON,BSC,ETH；设置法币传对应法币
  chain?: string;
  //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
  chainStatus?: number;
  //手续费
  fee: number;
  //手续费类型：1 百分比；2 固定值
  feeType?: number;
  //总提币状态(1:开启 0:关闭)
  status?: number;
  //限制次数
  times: number;
  //最大提币金额
  withdrawMax?: number;
  //最小提币金额
  withdrawMin?: number;
  }
declare interface ISheZhiCunKuanCanShuDuiXiang {
  //链:TRON,BSC,ETH；设置法币传对应法币
  chain?: string;
  //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
  chainStatus?: number;
  //手续费
  fee: number;
  //手续费类型：1 百分比；2 固定值
  feeType?: number;
  //总提币状态(1:开启 0:关闭)
  status?: number;
  //最大提币金额
  withdrawMax?: number;
  //最小提币金额
  withdrawMin?: number;
  }
declare interface IDepositExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态：0:待审核 1:审核通过 2:审核拒绝
  status?: number;
  //用户编号
  userId?: number;
  //用户账号
  userAccount?: string;
  //订单编号
  depositNo?: number;
  //充值类型:1 数字货币；2 法币
  currencyType?: number;
  //充币地址
  fromAddress?: string;
  //交易时间开始
  start?: string;
  //交易时间结束
  end?: string;
  }
declare interface IDepositBankCardResp {
  bankName?: string;
  bizCardNo?: string;
  currencyCode?: string;
  propName?: string;
  propValue?: string;
  }
declare interface IDepositQueryReq {
  //充值类型:1 数字货币；2 法币
  currencyType?: number;
  //订单编号
  depositNo?: number;
  //交易时间结束
  end?: string;
  //充币地址
  fromAddress?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //交易时间开始
  start?: string;
  //状态：0:待审核 1:审核通过 2:审核拒绝
  status?: number;
  //用户账号
  userAccount?: string;
  //用户编号
  userId?: number;
  }
declare interface IDepositQueryResp {
  //实际总分值
  actualAmount?: number;
  //1级代理账户
  agentAccount?: string;
  //1级代理ID
  agentId?: number;
  //充值金额
  amount?: number;
  //链
  chain?: string;
  //渠道类型
  channelType?: string;
  //到账时间
  createTime?: string;
  //币种代码
  currencyCode?: string;
  //充值类型：1 数字货币；2 法币
  currencyType?: number;
  //充币单号
  depositNo?: string;
  //充币类型 1:外部充币 2:内部充币 3：系统充值
  depositType?: number;
  //充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值
  depositWay?: number;
  //手续费
  fee?: number;
  //手续费类型:1 百分比；2 固定值
  feeType?: number;
  feeValue?: number;
  //充值地址
  fromAddress?: string;
  //上级代理帐号
  parentAccount?: string;
  //上级代理ID
  parentId?: number;
  //转账截图
  photo?: string;
  //包网商帐号
  proxyUserAccount?: string;
  //代理ID
  proxyUserId?: number;
  //汇率
  rate?: number;
  //拒绝理由
  refuseDesc?: string;
  //备注
  reminder?: string;
  //状态:0:待审核 1:审核通过 2:审核拒绝
  status?: number;
  //接收地址
  toAddress?: string;
  //总分值
  totalAmount?: number;
  //交易hash
  txHash?: string;
  //用户账号
  userAccount?: string;
  //用户编号
  userId?: number;
  //用户标签，多个逗号隔开
  userLabel?: string;
  //会员类型
  userType?: number;
  }
declare interface IPageResultDepositQueryResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IDepositQueryResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IDepositSummaryReq {
  //代理layer
  agentLayerCode?: string;
  //结束日期
  end?: string;
  //开始日期
  start?: string;
  //代理ID
  userId?: string;
  }
declare interface IDepositSummaryResp {
  //总存款
  depositAmount?: number;
  //USDT存款
  depositDigitalAmount?: number;
  //法币存款
  depositLegalAmount?: number;
  }
declare interface IAddDocReq {
  //内容
  context: string;
  //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //名称
  name: string;
  }
declare interface IOperationDocReq {
  //文档id
  docId: number;
  }
declare interface IQueryDocListReq {
  //结束时间
  endTime?: string;
  //语言
  lang?: string;
  //文档名称，支持模糊查询
  name?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //起始时间
  startTime?: string;
  }
declare interface IProxyDocManagementResp {
  //文档内容
  context?: string;
  //创建时间
  createTime?: string;
  //序号
  docId?: number;
  //语言
  lang?: string;
  //文档名称
  name?: string;
  //文档状态：false已下架，true已上架
  status?: boolean;
  }
declare interface IPageResultProxyDocManagementResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyDocManagementResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IQueryDocReq {
  //文档序号
  docId?: number;
  }
declare interface IUpdateDocReq {
  //内容
  context: string;
  //编号
  docId: number;
  //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //名称
  name: string;
  }
declare interface ILoginReq {
  //账户
  account: string;
  //密码
  password: string;
  }
declare interface ILoginResp {
  //账号
  account?: string;
  //添加时间
  createTime?: string;
  //币种
  currency?: string;
  //包网商账号
  proxyAccount?: string;
  //包网商编号
  proxyUid?: number;
  //角色
  role?: string;
  //app token信息
  token?: string;
  //token header头
  tokenName?: string;
  //用户编号
  userNo?: number;
  }
declare interface IPaging {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  }
declare interface IProxyExperienceValueResp {
  //每日上限
  dailyCeiling?: number;
  //经验值汇率
  exchangeRate?: number;
  //包网商ID
  proxyId?: number;
  //类型
  type?: string;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultProxyExperienceValueResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyExperienceValueResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IQueryExperienceValueReq {
  //类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS
  type: string;
  }
declare interface IProxyValidAmountResp {
  //每日上限
  dailyCeiling?: number;
  //汇率
  exchangeRate?: number;
  //游戏渠道
  factoryCode?: string;
  //ID
  id?: number;
  //包网商ID
  proxyId?: number;
  }
declare interface IUpdateExperienceValueReq {
  //每日上限
  dailyCeiling: number;
  //经验值汇率
  exchangeRate: number;
  //类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS
  type: string;
  }
declare interface IUpdateValidAmountReq {
  //每日上限
  dailyCeiling: number;
  //经验值汇率
  exchangeRate: number;
  //游戏渠道
  factoryCode: string;
  //ID
  id: number;
  }
declare interface IFeeStatisticsReq {
  //结束日期
  end?: string;
  //起始日期
  start?: string;
  }
declare interface IFeeStatisticsResp {
  //USDT手续费
  digitalFee?: number;
  //手续费
  fee: number;
  //法币手续费
  legalFee?: number;
  }
declare interface IFileDownloadByCodeFileNoGETReqQuery {
  //type
  type?: number;
  }
declare interface IFileDownloadByCodeFileNoPOSTReqQuery {
  //type
  type?: number;
  }
declare interface IFileUploadPOSTFromData {
  }
declare interface IUploadResultResp {
  //文件名称
  fileName?: string;
  //文件编号
  fileNo?: string;
  //文件大小
  fileSize?: string;
  //文件类型 2:图片 3:语音 4:视频 5:PDF文件 6:其他文件
  fileType?: number;
  //文件全路径,用于展示
  url?: string;
  }
declare interface IGameChannelSummary {
  //渠道编号
  channelId?: string;
  //渠道名称
  channelName?: string;
  }
declare interface ICurrencyReq {
  //代理编号
  currency?: string;
  //代理编号
  lang?: string;
  }
declare interface IChannelTypeResp {
  //游戏渠道
  factoryCode?: string;
  //类型编号
  typeId?: number;
  //游戏类型名称
  typeName?: string;
  }
declare interface IProxyIdReq {
  //代理编号
  proxyId?: number;
  }
declare interface IProxyChoiceGameResp {
  //大图
  icon?: string;
  //代理游戏编号
  proxyGameId?: number;
  //代理编号
  proxyId?: number;
  }
declare interface IProxyGameIdReq {
  //代理游戏编号
  proxyGameId: number;
  }
declare interface IAreaIdReq {
  //区域编号
  areaId: number;
  }
declare interface IProxyGameResp {
  //渠道编号
  channelId?: string;
  //渠道名称
  channelName?: string;
  //创建时间
  createTime?: string;
  //游戏厂商
  factoryCode?: string;
  //游戏区域编号
  gameArea?: number;
  //游戏区域名称
  gameAreaName?: string;
  //基础游戏编号
  gameId?: number;
  //游戏名称
  gameName?: string;
  //自定义游戏名称
  gameNameCustomer?: string;
  //游戏英文名称
  gameNameEn?: string;
  //游戏类型
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //游戏icon
  icon?: string;
  //游戏icon2
  icon2?: string;
  //icon2链接
  icon2Url?: string;
  //游戏icon3
  icon3?: string;
  //icon3链接
  icon3Url?: string;
  //icon链接
  iconUrl?: string;
  //是否热门游戏：true:是，false:否
  popular?: boolean;
  //渠道游戏编号
  proxyGameId?: number;
  //代理编号
  proxyId?: number;
  //状态 1:启用 0:禁用
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IQueryProxyGameReq {
  //游戏厂商
  factoryCode?: string;
  //游戏名称
  gameName?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //是否热门：true是，false否
  popular?: boolean;
  }
declare interface IPageResultProxyGameResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyGameResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IChessCardGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //用户Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IChessCardGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //抽水
  revenue?: number;
  //投注时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //投注额
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultChessCardGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IChessCardGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordChesscardExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IGameRecordChickenPOSTReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IChickenGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //结束时间
  endTime?: number;
  //游戏账户
  gameAccount?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //投注额
  totalBet?: number;
  //用户Id
  userId?: number;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultChickenGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IChickenGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordChickenExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IElectronGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //用户Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IElectronGameRecordResp {
  //上级代理
  agentAccount?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //投注时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //投注额
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultElectronGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IElectronGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordElectronExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IEsportGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //渠道Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IEsportGameRecordResp {
  //上级代理
  agentAccount?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //比赛时间
  competitionTime?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //单局总投注
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultEsportGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IEsportGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordEsportExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //渠道Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IFishGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //用户Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IFishGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //单局总投注
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  //彩金
  winningsAmount?: number;
  }
declare interface IPageResultFishGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IFishGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordFishExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface ILiveVideoGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //用户Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface ILiveVideoGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //厂商Code
  factoryCode?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //投注时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //投注额
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultLiveVideoGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: ILiveVideoGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordLivevideoExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface ILotteryGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //渠道Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface ILotteryGameRecordResp {
  //上级代理
  agentAccount?: string;
  //副单号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //结束时间
  endTime?: number;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //单局总投注
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  //开奖号码
  winningNo?: string;
  }
declare interface IPageResultLotteryGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: ILotteryGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordLotteryExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //渠道Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IOrdinaryGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //渠道Id
  channelId?: string;
  //厂商
  factoryCode?: string;
  //游戏主类型
  gameMainType?: string;
  //游戏类型
  gameType?: number;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //游戏结果
  resultFlag?: number;
  //状态
  status?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IOrdinaryGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //结束时间
  endTime?: number;
  //厂商Code
  factoryCode?: string;
  //游戏账户
  gameAccount?: string;
  //游戏Code
  gameCode?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //单局总投注
  totalBet?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultOrdinaryGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IOrdinaryGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordOrdinaryExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //渠道Id
  channelId?: string;
  //厂商
  factoryCode?: string;
  //游戏类型
  gameType?: number;
  //游戏结果
  resultFlag?: number;
  //状态
  status?: number;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  //游戏主类型
  gameMainType?: string;
  }
declare interface ISportGameRecordReq {
  //注单时间-结束
  betEndTime?: string;
  //注单时间-开始
  betStartTime?: string;
  //用户Id
  channelId?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface ISportGameRecordResp {
  //上级代理
  agentAccount?: string;
  //副单号
  bureauId?: string;
  //渠道Id
  channelId?: string;
  //渠道名称
  channelName?: string;
  //结束时间
  endTime?: number;
  //详情
  extendInfo?: string;
  //游戏账户
  gameAccount?: string;
  //游戏名称
  gameName?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //输赢金额
  result?: number;
  //游戏结果
  resultFlagName?: string;
  //开始时间
  startTime?: number;
  //结算状态
  statusName?: string;
  //单局总投注
  totalBet?: number;
  //注单流水号
  transactionId?: string;
  //用户Id
  userId?: number;
  //用户名
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultSportGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: ISportGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameRecordSportExportGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户名
  userName?: string;
  //用户Id
  userId?: number;
  //用户Id
  channelId?: string;
  //注单时间-开始
  betStartTime?: string;
  //注单时间-结束
  betEndTime?: string;
  }
declare interface IGameStatisticsChannelExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //游戏渠道编号
  channelId?: string;
  //代理编号
  parentId?: number;
  //用户编号
  userId?: number;
  //游戏渠道编号
  factoryCode?: string;
  //开始时间
  start?: number;
  //结束时间
  end?: number;
  }
declare interface IGameUserStatisticsReq {
  //游戏渠道编号
  channelId?: string;
  //结束时间
  end?: number;
  //游戏渠道编号
  factoryCode?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //代理编号
  parentId?: number;
  //开始时间
  start?: number;
  //用户编号
  userId?: number;
  }
declare interface IGameUserStatisticsResp {
  //总投注
  betAmount?: number;
  //渠道编号
  channelId?: string;
  //渠道名称
  channelName?: string;
  //总局数
  count?: number;
  //厂商名称
  factoryCode?: string;
  //游戏类型ID
  gameType?: number;
  //游戏类型
  gameTypeName?: string;
  //总输
  lose?: number;
  //上级编号
  parentId?: number;
  //统计时间
  period?: string;
  //总结果
  result?: number;
  //用户编号
  userId?: number;
  //有效投注
  validAmount?: number;
  //总赢
  win?: number;
  }
declare interface IPageResultGameUserStatisticsResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IGameUserStatisticsResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameStatisticsProxyExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //开始日期
  start?: number;
  //结束日期
  end?: number;
  }
declare interface IStatisticsReq {
  //结束日期
  end?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //开始日期
  start?: string;
  }
declare interface IGameProxyStatisticsResp {
  //总投注
  betAmount?: number;
  //总局数
  count?: number;
  //总输
  lose?: number;
  //代理用户编号
  proxyUid?: number;
  //总结果
  result?: number;
  //统计时间
  time?: string;
  //有效投注
  validAmount?: number;
  //总赢
  win?: number;
  }
declare interface IPageResultGameProxyStatisticsResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IGameProxyStatisticsResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ISummaryReq {
  //结束日期
  end?: string;
  //开始日期
  start?: string;
  }
declare interface IGameMainTypeResp {
  //类型编号
  gameMainTypeCode?: string;
  //厂商编码
  gameMainTypeName?: string;
  }
declare interface IProxyGameUpdateAreaReq {
  //区域编号
  areaId: number;
  //代理游戏编号
  proxyGameIds: number[];
  //代理编号
  proxyId?: number;
  }
declare interface IUpdateProxyChoiceGameReq {
  //游戏图标
  icon?: string;
  //代理游戏编号
  proxyGameId: number;
  }
declare interface IUpdateProxyGameReq {
  //自定义游戏名称
  gameName?: string;
  //游戏图标
  icon?: string;
  //代理游戏编号
  proxyGameId: number;
  }
declare interface IProxyGameUpdatePopularReq {
  //是否热门：true是，false否
  popular: boolean;
  //代理游戏编号
  proxyGameIds: number[];
  //代理编号
  proxyId?: number;
  }
declare interface IAddPosterReq {
  //图片
  img: string;
  //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
  lang: string;
  //状态: false:待发布、true:发布中
  status: boolean;
  }
declare interface IOperationPosterReq {
  //海报编号
  posterId: number;
  }
declare interface IProxyInvitationPosterResp {
  //图片
  img?: string;
  //图片链接
  imgUrl?: string;
  //语言
  lang?: string;
  //序号
  posterId?: number;
  //发布状态：false:待发布、true:发布中
  status?: boolean;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultProxyInvitationPosterResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyInvitationPosterResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUpdatePosterReq {
  //图片
  img: string;
  //编号
  posterId: number;
  //状态: false:待发布、true:发布中
  status: boolean;
  }
declare interface IOperateConfigAchievingGetAchievingConditionsGETReqQuery {
  //agentId
  agentId?: number;
  }
declare interface IAchievingConditionsChildReq {
  //流水下限
  lowerLimit?: number;
  //返佣比例
  proportion?: number;
  //有效流水最大值
  validAmountMax?: number;
  }
declare interface IProxyAchievingConditionsResp {
  //结算周期:DAY,WEEK,HALF_MONTH,MONTH
  calculationPeriod?: string;
  //周期内有效流水
  conditionsChildList?: IAchievingConditionsChildReq[];
  //周期直属有效会员数
  directlyUnderMembers?: number;
  //负盈利是否累计
  negativeProfitIsAccumulated?: boolean;
  //结算方式: false自动、true手动
  settlementMethod?: boolean;
  //周期内下级VIP用户数
  subordinateMembers?: number;
  //周期总有效会员数
  totalMembers?: number;
  //周期内有效流水
  validAmount?: number;
  //周期内存款值
  validDepositAmount?: number;
  //周期内负盈利值
  validNegativeProfit?: number;
  //vip等级
  vipLevel?: number;
  }
declare interface IUpdateAchievingConditionsReq {
  //代理id
  agentId: number;
  //结算周期：DAY,WEEK,HALF_MONTH,MONTH
  calculationPeriod: string;
  //周期内有效流水
  conditionsChildList?: IAchievingConditionsChildReq[];
  //周期直属有效会员数
  directlyUnderMembers?: number;
  //负盈利是否累计
  negativeProfitIsAccumulated: boolean;
  //结算方式: false自动、true手动
  settlementMethod: boolean;
  //周期内下级VIP用户数
  subordinateMembers?: number;
  //周期总有效会员数
  totalMembers?: number;
  //周期内有效流水
  validAmount?: number;
  //周期内存款值
  validDepositAmount?: number;
  //周期内负盈利值
  validNegativeProfit?: number;
  //vip等级
  vipLevel?: number;
  }
declare interface IProxyRelationConfigResp {
  //佣金提现流水倍数
  commissionMultiple?: number;
  //充值流水有效倍数
  depositMultiple?: number;
  //数据id
  id?: number;
  //邀请码是否必填：false:否，true:是
  invitationCodeSet?: boolean;
  //提现条件阈值
  minimumBalance?: number;
  //包网商ID
  proxyId?: number;
  //ip注册数量限制
  registerAmountLimit?: number;
  //用户绑定银行卡数量限制
  userBankCardAmount?: number;
  //会员关联账号
  userRelationAccount?: string;
  }
declare interface IUpdateCommissionMultipleReq {
  //佣金提现流水倍数
  multiple: number;
  }
declare interface IChongZhiLiuShuiYouXiaoBeiShu {
  //倍数
  multiple?: number;
  }
declare interface IUpdateInvitationCodeSetReq {
  //邀请码是否必填
  invitationCodeSet: boolean;
  }
declare interface IUpdateMinimumBalanceReq {
  //提现条件阈值
  minimumBalance: number;
  }
declare interface IZhuCeShuLiangXianZhi {
  //最大注册数
  amount?: number;
  }
declare interface IXiuGaiYongHuYinHangKaBangDingShuLiang {
  //最大数量
  amount?: number;
  }
declare interface IHuiYuanGuanLianZhangHao {
  //会员关联账号
  userRelationAccount?: string;
  }
declare interface IProxyGameScaleResp {
  //流水返佣上限
  amountRebatesCeiling?: number;
  //游戏渠道
  channelName?: string;
  //类型
  channelType?: string;
  //游戏渠道类型id
  channelTypeId?: number;
  //ID
  id?: number;
  //负盈利分成上限
  negativeProfitRebatesCeiling?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IUpdateGameScaleReq {
  //流水返佣上限
  amountRebatesCeiling: number;
  //游戏渠道类型id
  channelTypeId?: number;
  //ID
  id: number;
  //负盈利分成上限
  negativeProfitRebatesCeiling: number;
  }
declare interface IIpGuiZeTianJiaCanShu {
  //范围类型,REGION:地区,IP_PATTERN:ip模式,IP_RANGE:ip范围
  rangeType?: string;
  //结束规则
  ruleEnd?: string;
  //开始规则
  ruleStart?: string;
  }
declare interface IFangWenKongZhiLieBiaoCanShu {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  }
declare interface IIpGuiZeVo {
  id?: number;
  //范围类型,REGION:地区,IP_PATTERN:ip模式,IP_RANGE:ip范围
  rangeType?: string;
  //结束规则
  ruleEnd?: string;
  //开始规则
  ruleStart?: string;
  }
declare interface IPageResultipGuiZeVo {
  pageIndex?: number;
  pageSize?: number;
  rows?: IIpGuiZeVo[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IDiQuMingZhiDuiXiang {
  id?: number;
  //地区名
  regionName?: string;
  }
declare interface IPeiZhiChaXunDuiXiang {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //需要查询的状态
  status?: boolean;
  }
declare interface IBaoWangShangKeFuPeiZhiXinXi {
  //内容
  content?: string;
  createTime?: string;
  id?: number;
  //客服人员名称
  name?: string;
  //所属包网商
  proxyUid?: number;
  //状态
  status?: boolean;
  //客服类型
  type?: string;
  updateTime?: string;
  //跳转链接
  url?: string;
  }
declare interface IPageResultBaoWangShangKeFuPeiZhiXinXi {
  pageIndex?: number;
  pageSize?: number;
  rows?: IBaoWangShangKeFuPeiZhiXinXi[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IBaoWangShangKeFuPeiZhiCanShuDuiXiang {
  //内容
  content?: string;
  id?: number;
  //客服人员名称
  name?: string;
  //状态
  status?: boolean;
  //客服类型
  type?: string;
  //跳转链接
  url?: string;
  }
declare interface IUserAchievingReq {
  //用户Id
  userId?: number;
  }
declare interface IUserAchievingBo {
  //存款值
  depositAmount?: number;
  //直属有效会员数
  directSum?: number;
  //总有效会员数
  effectiveSum?: number;
  //有效流水
  gameValidAmount?: number;
  //负盈利
  negativeProfitAmount?: number;
  //达成条件的vip用户数
  vipSum?: number;
  //提款值
  withdrawAmount?: number;
  }
declare interface IProxyValidMembersResp {
  //下注天数
  bettingDays?: number;
  //下注次数
  bettingNum?: number;
  //计算周期(天)
  calculationPeriod?: number;
  //数据id
  id?: number;
  //包网商ID
  proxyId?: number;
  //投注有效流水
  validAmount?: number;
  //存款金额
  validDepositAmount?: number;
  //负盈利金额
  validNegativeProfit?: number;
  }
declare interface IUpdateValidMembersReq {
  //下注天数
  bettingDays?: number;
  //下注次数
  bettingNum?: number;
  //计算周期
  calculationPeriod: number;
  //存款金额
  depositAmount?: number;
  //负盈利金额
  negativeProfitAmount?: number;
  //投注有效流水
  validAmount?: number;
  }
declare interface IQueryPaymentChannelReq {
  //币种代码
  currencyCode?: string;
  //状态 1:启用 0:禁用
  status?: number;
  }
declare interface IPaymentChannelResq {
  //编号
  bizNo?: string;
  //boss支付渠道管理id
  boosPcId?: number;
  //渠道编号
  channelId?: string;
  //渠道名称
  channelName?: string;
  //币种代码
  currencyCode?: string;
  //其它扩展条件等
  ext?: string;
  //商户key
  merchantKey?: string;
  //商户号
  merchantNo?: string;
  //proxyUid
  proxyUid?: number;
  //状态 1:启用 0:禁用
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IPaymentChannelReq {
  //渠道类型
  channelType: string;
  //币种代码
  currencyCode: string;
  //其它扩展条件等
  ext?: string;
  //商户key
  merchantKey: string;
  //商户号
  merchantNo: string;
  //状态 1:启用 0:禁用
  status: number;
  }
declare interface IXinZengFanShuiFangAnMingXi {
  //厂商
  factoryCode: string;
  //游戏类型id
  gameTypeId: number;
  //等级
  level: number;
  //返水比例
  rebateRatio: number;
  //有效流水下限
  validAmountLower: number;
  }
declare interface IXinZengFanShuiFangAnQingQiu {
  //计算方式：1阶梯式，2平铺式
  calculationMethod?: number;
  //明细
  items: IXinZengFanShuiFangAnMingXi[];
  //方案名称
  planName: string;
  //返水流水上限
  rebateUpper: number;
  //vip等级id集合(用,分隔)
  vipLevels: string;
  //提现倍数
  withdrawalMultiple: number;
  }
declare interface IDeleteItemsReq {
  //明细编号
  itemsId: number[];
  //方案编号
  planId?: number;
  }
declare interface IPlanIdReq {
  //方案编号
  planId: number;
  }
declare interface IFanShuiFangAnMingXiXinXi {
  //厂商
  factoryCode?: string;
  //游戏类型id
  gameTypeId?: number;
  //游戏类型名称
  gameTypeName?: string;
  //明细编号
  id?: number;
  //等级
  level?: number;
  //返水比例
  rebateRatio?: number;
  //有效流水下限
  validAmountLower?: number;
  }
declare interface IPlanQueryReq {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //方案名称
  planName?: string;
  //方案状态
  status?: number;
  }
declare interface IFanShuiFangAnXinXi {
  //计算方式：1阶梯式
  calculationMethod?: number;
  //币种
  currency?: string;
  //发放方式：1手动
  distributionMethod?: number;
  //方案编号
  id?: number;
  //方案名称
  planName?: string;
  //包网商编号
  proxyId?: number;
  //返水流水上限
  rebateUpper?: number;
  //状态：1可用，0禁用
  status?: number;
  //更新时间
  updateTime?: string;
  //vip等级id集合(用,分隔)
  vipLevels?: string;
  //提现倍数
  withdrawalMultiple?: number;
  }
declare interface IPageResultFanShuiFangAnXinXi {
  pageIndex?: number;
  pageSize?: number;
  rows?: IFanShuiFangAnXinXi[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGengXinFanHuiFangAnMingXiQingQiu {
  //厂商
  factoryCode: string;
  //游戏类型id
  gameTypeId: number;
  //明细id
  id?: number;
  //等级
  level: number;
  //返水比例
  rebateRatio: number;
  //有效流水下限
  validAmountLower: number;
  }
declare interface IGengXinFanShuiFangAnQingQiu {
  //方案id
  id: number;
  //明细
  items: IGengXinFanHuiFangAnMingXiQingQiu[];
  //方案名称
  planName: string;
  //返水流水上限
  rebateUpper: number;
  //vip等级id集合(用,分隔)
  vipLevels: string;
  //提现倍数
  withdrawalMultiple: number;
  }
declare interface IRecordQueryReq {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //周期
  period?: string;
  //状态
  status?: number;
  //用户id
  userId?: number;
  //用户名称
  userName?: string;
  }
declare interface IRecordIdsReq {
  //编号集合
  ids: number[];
  }
declare interface IRebateRecordExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户id
  userId?: number;
  //用户名称
  userName?: string;
  //状态
  status?: number;
  //周期
  period?: string;
  }
declare interface IProxyRebateRecordResp {
  //创建时间
  createTime?: string;
  //币种
  currency?: string;
  //返水编号
  id?: number;
  //周期
  period?: string;
  //方案名称
  planName?: string;
  //返水金额
  rebateAmount?: number;
  //方案id
  rebateItemId?: number;
  //状态：0待发放，1已发放，2已拒绝
  status?: number;
  //状态：0待发放，1已发放，2已拒绝
  statusName?: string;
  //更新时间
  updateTime?: string;
  //用户id
  userId?: number;
  //用户名称
  userName?: string;
  }
declare interface IPageResultProxyRebateRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyRebateRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IAgentSettleReq {
  //代理ID
  agentId?: number;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态 3 待线下或自动结算 8 未达成条件 9 结算完成
  status?: number;
  }
declare interface IAgentSettleResp {
  //代理帐号
  agentAccount?: string;
  //代理级别
  agentLevel?: number;
  //代理类型 1:直营 2:招募 3:会员申请
  agentType?: number;
  agentTypeDesc?: string;
  //代理编号
  agentUserId?: number;
  //结算额
  amount?: number;
  //创建时间
  createTime?: string;
  //结算周期编号
  cycleNo?: string;
  //周期结束日期
  endPeriod?: string;
  //结算周期类型
  periodType?: string;
  //包网商帐号
  proxyUserAccount?: string;
  //包网商编号
  proxyUserId?: number;
  //奖励类型 1:占成 2:返佣
  rewardType?: number;
  rewardTypeDesc?: string;
  //结算单号
  settleNo?: string;
  //周期开始日期
  startPeriod?: string;
  //状态：2：下层代理统计完成（只有这个状态可以提出申请）3:用户提出申请 8:未满足条件 9：线下或自动结算完成
  status?: number;
  statusDesc?: string;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultAgentSettleResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IAgentSettleResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ISettleAgentExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //状态 3 待线下或自动结算 8 未达成条件 9 结算完成
  status?: number;
  //代理ID
  agentId?: number;
  }
declare interface ICheckPassReq {
  //申请单号
  applyNo?: number;
  //是否通过
  pass?: boolean;
  }
declare interface IAgentSettleApplyResp {
  //代理帐号
  agentAccount?: string;
  //代理级别
  agentLevel?: number;
  //代理类型 1:直营 2:招募 3:会员申请
  agentType?: number;
  //代理编号
  agentUserId?: string;
  //结算额
  amount?: number;
  //申请单号
  applyNo?: string;
  //创建时间
  createTime?: string;
  //周期结束日期
  endPeriod?: string;
  //上级代理
  parentAccount?: string;
  //上级代理ID
  parentId?: number;
  //结算周期类型
  periodType?: string;
  //奖励类型 1:占成 2:返佣
  rewardType?: number;
  //结算单号
  settleNo?: string;
  //周期开始日期
  startPeriod?: string;
  //状态 0:用户提出（待审核）1：驳回 2：通过
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultAgentSettleApplyResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IAgentSettleApplyResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IPlatformSettleReq {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //0 待线下结算;1 已结算
  status?: number;
  }
declare interface IPlatformSettleResp {
  //结算额
  amount?: number;
  //创建时间
  createTime?: string;
  //结算周期编号
  cycleNo?: string;
  //周期结束日期
  endPeriod?: string;
  //结算周期类型
  periodType?: string;
  //包网商帐号
  proxyUserAccount?: string;
  //包网商编号
  proxyUserId?: number;
  //占成结算额
  ratioAmount?: number;
  //返佣结算额
  rebateAmount?: number;
  //结算单号
  settleNo?: string;
  //周期开始日期
  startPeriod?: string;
  //状态 -1:进行中 0：统计完成，待线下结算 1:已结算
  status?: number;
  //状态 -1:进行中 0：统计完成，待线下结算 1:已结算
  statusDesc?: string;
  //sum(输赢)
  totalResultAmount?: number;
  //sum(有效)
  totalValidAmount?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultPlatformSettleResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IPlatformSettleResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ISettlePlatformExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //0 待线下结算;1 已结算
  status?: number;
  }
declare interface IProxySettleResp {
  //结算额
  amount?: number;
  //创建时间
  createTime?: string;
  //结算周期编号
  cycleNo?: string;
  //周期结束日期
  endPeriod?: string;
  //结算周期类型
  periodType?: string;
  //包网商帐号
  proxyUserAccount?: string;
  //包网商编号
  proxyUserId?: number;
  //占成结算额
  ratioAmount?: number;
  //返佣结算额
  rebateAmount?: number;
  //结算单号
  settleNo?: number;
  //周期开始日期
  startPeriod?: string;
  //状态 -1:进行中 0：统计完成，待线下结算 1:已结算
  status?: number;
  //状态 -1:进行中 0：统计完成，待线下结算 1:已结算
  statusDesc?: string;
  //sum(输赢)
  totalResultAmount?: number;
  //sum(有效)
  totalValidAmount?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IPageResultProxySettleResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxySettleResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ISettleProxyExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //0 待线下结算;1 已结算
  status?: number;
  }
declare interface IAdjustmentReq {
  //金额
  amount: number;
  //红包备注
  remark?: string;
  //类型：0：减少余额，1：增加余额，2：发红包
  type: number;
  //用户id
  userId: number;
  //提现流水倍数
  withdrawFactor?: number;
  }
declare interface IProxySumResp {
  //包网商id
  proxyId?: number;
  //调账总增加金额
  sumDeposit?: number;
  //调账总减少金额
  sumWithdraw?: number;
  }
declare interface ISystemDepositWithdrawBo {
  //调账类型 1:增加余额 0:减少余额
  adjustType?: number;
  //调整金额
  amount?: number;
  //创建时间
  createTime?: string;
  //数据ID
  id?: number;
  //包网商id
  proxyId?: number;
  //备注
  remark?: string;
  //用户id
  userId?: number;
  }
declare interface IPageResultSystemDepositWithdrawBo {
  pageIndex?: number;
  pageSize?: number;
  rows?: ISystemDepositWithdrawBo[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IProxyRewardRateResp {
  ratioRate?: number;
  rebateRate?: number;
  }
declare interface IProxySummerResp {
  //logo编号
  logo?: string;
  //logo链接
  logoUrl?: string;
  //页签ico编号
  pageIco?: string;
  //页签ico链接
  pageIcoUrl?: string;
  //页签名称
  pageName?: string;
  //代理编号
  proxyId?: number;
  }
declare interface IMenuBaseVo {
  //展开状态(1:展开;0:收缩) 
  expanded?: string;
  //节点图标
  icon?: string;
  //节点图标CSS类名
  iconCls?: string;
  //菜单编码，可作为按钮的显隐
  menuCode?: string;
  //菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)
  menuLevel?: string;
  //菜单名称(最长50)
  menuName?: string;
  //菜单类型(1:系统菜单;0:业务菜单)
  menuType?: string;
  //上级菜单编号
  parentId?: string;
  //备注(最长200)
  remark?: string;
  //请求地址(最长200)
  request?: string;
  //排序号
  sortNo?: number;
  }
declare interface ISystemMenuDeleteGETReqQuery {
  //菜单编号
  menuId?: string;
  }
declare interface ISystemMenuDeletePOSTReqQuery {
  //菜单编号
  menuId?: string;
  }
declare interface IMenuResponseVo {
  //展开状态(1:展开;0:收缩) 
  expanded?: string;
  //节点图标
  icon?: string;
  //节点图标CSS类名
  iconCls?: string;
  //菜单编码，可作为按钮的显隐
  menuCode?: string;
  //菜单编号
  menuId?: string;
  //菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)
  menuLevel?: string;
  //菜单名称(最长50)
  menuName?: string;
  //菜单类型(1:系统菜单;0:业务菜单)
  menuType?: string;
  //上级菜单编号
  parentId?: string;
  //备注(最长200)
  remark?: string;
  //请求地址(最长200)
  request?: string;
  //排序号
  sortNo?: number;
  }
declare interface IMenuUpdateVo {
  //展开状态(1:展开;0:收缩) 
  expanded?: string;
  //节点图标
  icon?: string;
  //节点图标CSS类名
  iconCls?: string;
  //菜单编码，可作为按钮的显隐
  menuCode?: string;
  //菜单编号
  menuId?: string;
  //菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)
  menuLevel?: string;
  //菜单名称(最长50)
  menuName?: string;
  //菜单类型(1:系统菜单;0:业务菜单)
  menuType?: string;
  //上级菜单编号
  parentId?: string;
  //备注(最长200)
  remark?: string;
  //请求地址(最长200)
  request?: string;
  //排序号
  sortNo?: number;
  }
declare interface IRoleBaseVo {
  //备注(最长50)
  remark?: string;
  //角色名称(最长50)
  roleName?: string;
  //角色类型(1:业务角色;2:管理角色)
  roleType?: string;
  }
declare interface IRoleMenuRequestVo {
  //菜单编号集合
  menuIds?: string[];
  //角色编号
  roleId?: string;
  }
declare interface IRoleLockRequestVo {
  //锁定标志 1:锁定;0:激活
  lockFlag?: string;
  //角色编号
  roleId?: string;
  }
declare interface ISystemRoleDeleteGETReqQuery {
  //角色编号
  roleId?: string;
  }
declare interface ISystemRoleDeletePOSTReqQuery {
  //角色编号
  roleId?: string;
  }
declare interface IJiaoSeXiangYingXinXi {
  //创建时间
  createTime?: string;
  //锁定标志 1锁定 0激活
  locked?: string;
  //备注(最长50)
  remark?: string;
  //角色编号
  roleId?: string;
  //角色名称(最长50)
  roleName?: string;
  //角色类型(1:业务角色;2:管理角色)
  roleType?: string;
  //修改时间
  updateTime?: string;
  }
declare interface ISystemRoleQueryByIdGETReqQuery {
  //角色编号
  roleId?: string;
  }
declare interface ISystemRoleQueryDetailGETReqQuery {
  //角色编号
  roleId?: string;
  }
declare interface IRoleMenuResponseVo {
  //创建时间
  createTime?: string;
  //锁定标志 1锁定 0激活
  locked?: string;
  //权限信息
  menus?: IMenuResponseVo[];
  //备注(最长50)
  remark?: string;
  //角色编号
  roleId?: string;
  //角色名称(最长50)
  roleName?: string;
  //角色类型(1:业务角色;2:管理角色)
  roleType?: string;
  //修改时间
  updateTime?: string;
  }
declare interface IRoleQueryRequestVo {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //角色描述
  remark?: string;
  //角色名称
  roleName?: string;
  }
declare interface IPageResultJiaoSeXiangYingXinXi {
  pageIndex?: number;
  pageSize?: number;
  rows?: IJiaoSeXiangYingXinXi[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IRoleUpdateVo {
  //备注(最长50)
  remark?: string;
  //角色编号
  roleId?: string;
  //角色名称(最长50)
  roleName?: string;
  //角色类型(1:业务角色;2:管理角色)
  roleType?: string;
  }
declare interface IProxyBaseUpdateReq {
  //logo编号
  logo: string;
  //页签ico编号
  pageIco: string;
  //页签名称
  pageName: string;
  }
declare interface IUserPasswordRequestProxyVo {
  //新密码
  newPassword?: string;
  notSame?: boolean;
  //原密码
  oldPassword?: string;
  }
declare interface ISystemUserGetRoleGETReqQuery {
  //用户编号
  userId?: string;
  }
declare interface IUserRoleMenuVo {
  //菜单信息
  menus?: IMenuResponseVo[];
  //角色信息
  roles?: IJiaoSeXiangYingXinXi[];
  }
declare interface IThirdPayUpdateReq {
  //三方支付账号
  account?: string;
  //业务唯一编码,编辑必传
  bizNo?: string;
  //币种，多个用逗号隔开
  currency?: string;
  //支付工具名称
  name?: string;
  //单日收款上限
  receivingDayLimit?: number;
  //收款结束时间
  receivingEnd?: string;
  //三方支付收款名称
  receivingName?: string;
  //单笔收款最大金额
  receivingSingleMax?: number;
  //单笔收款最小金额
  receivingSingleMin?: number;
  //收款开始时间
  receivingStart?: string;
  //状态 1:可用 0:不可用
  status?: string;
  //用户标签，多个用逗号隔开，为空表示全部
  userLabel?: string;
  //vip等级，多个用逗号隔开，为空表示全部
  vipLevel?: string;
  }
declare interface IThirdPartyPaymentDeleteGETReqQuery {
  //业务唯一编码
  bizNo?: string;
  }
declare interface IThirdPartyPaymentDetailGETReqQuery {
  //业务唯一编码
  bizNo?: string;
  }
declare interface IThirdPayDetailResp {
  //三方支付账号
  account?: string;
  //业务唯一编码
  bizNo?: string;
  //创建时间
  createTime?: string;
  //币种，多个用逗号隔开
  currency?: string;
  //支付工具名称
  name?: string;
  //包网商id
  proxyUserId?: number;
  //单日收款上限
  receivingDayLimit?: number;
  //收款结束时间
  receivingEnd?: string;
  //三方支付收款名称
  receivingName?: string;
  //单笔收款最大金额
  receivingSingleMax?: number;
  //单笔收款最小金额
  receivingSingleMin?: number;
  //收款开始时间
  receivingStart?: string;
  //状态 1:可用 0:不可用
  status?: number;
  //更新时间
  updateTime?: string;
  //用户标签，多个用逗号隔开
  userLabel?: string;
  //用户标签文本，多个用逗号隔开
  userLabelText?: string;
  //vip等级，多个用逗号隔开
  vipLevel?: string;
  //vip等级文本，多个用逗号隔开
  vipLevelText?: string;
  }
declare interface IThirdPayListReq {
  //更新结束时间
  end?: string;
  //支付工具名称
  name?: string;
  //更新开始时间
  start?: string;
  //状态 1:可用 0:不可用
  status?: string;
  }
declare interface IThirdPayListResp {
  //三方支付账号
  account?: string;
  //业务唯一编码
  bizNo?: string;
  //创建时间
  createTime?: string;
  //币种，多个用逗号隔开
  currency?: string;
  //币种文本，多个用逗号隔开
  currencyText?: string;
  //支付工具名称
  name?: string;
  //包网商id
  proxyUserId?: number;
  //三方支付收款名称
  receivingName?: string;
  //状态 1:可用 0:不可用
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IAddUserReq {
  //账号
  account: string;
  //邀请码
  inviteCode?: string;
  //密码
  password: string;
  }
declare interface IUserBankCardDetailReq {
  //业务卡号
  bizCardCode?: string;
  //用户ID
  userId?: number;
  }
declare interface IUserBankCardUpdateReq {
  //银行名称
  bankName?: string;
  //业务卡号，更新或查看时，必传
  bizCardCode?: string;
  //法币，顿号（、）分割
  currencyCode: string;
  //其他属性
  props?: IBankCardUpdatePropReq[];
  //状态：1 可用；0 不可用
  status: number;
  //用户ID
  userId?: number;
  }
declare interface IUserBankCardQueryReq {
  //用户ID
  userId?: number;
  }
declare interface IUserBankCardQueryResp {
  //银行账号
  bankAccount?: string;
  //银行名称
  bankName?: string;
  //业务卡号
  bizCardNo?: string;
  //币种编码
  currencyCode?: string;
  //币种名称
  currencyName?: string;
  //状态 1:开启 0:关闭
  status?: number;
  //更新时间
  updateTime?: string;
  }
declare interface IAddChildReq {
  //子账号
  account: string;
  //密码
  password: string;
  //角色
  role: string;
  //状态 1:启用 0:禁用
  status: number;
  }
declare interface IUserRoleRequestVo {
  //角色编号集合
  roleIds?: string[];
  //用户编号
  userId?: string;
  }
declare interface IProxyChildResp {
  //账号
  account?: string;
  //创建时间
  createTime?: string;
  //最后登录时间
  lastLogin?: number;
  //角色
  role?: string;
  //用户状态 1:正常 0:锁定
  status?: number;
  //更新时间
  updateTime?: string;
  //用户编号
  userId?: number;
  }
declare interface IPageResultProxyChildResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IProxyChildResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUpdateUserStatusReq {
  //状态变更原因
  remark?: string;
  //用户编号
  userId: number;
  }
declare interface IXiuGaiYongHuFengJinZhuangTai {
  //封锁：true，解封：false
  forbidden?: boolean;
  //用户id
  userId?: number;
  }
declare interface IUserGameExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //游戏渠道
  factoryCode?: string;
  //游戏类型id
  typeId?: number;
  //开始时间
  start?: number;
  //结束时间
  end?: number;
  //用户编号
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IUserGameRecordReq {
  //结束时间
  end?: number;
  //游戏渠道
  factoryCode?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //开始时间
  start?: number;
  //游戏类型id
  typeId?: number;
  //用户编号
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IUserGameRecordResp {
  //上级代理
  agentAccount?: string;
  //局号id
  bureauId?: string;
  //渠道编号
  channelId?: string;
  //游戏结束时间
  endTime?: number;
  //游戏渠道
  factoryCode?: string;
  //游戏名称
  gameName?: string;
  //自定义游戏名称
  gameNameCustomer?: string;
  //游戏类型id
  gameType?: number;
  //游戏类型名称
  gameTypeName?: string;
  //上级代理编号
  parentUid?: number;
  //包网商名称
  proxyName?: string;
  //包网商编号
  proxyUid?: number;
  //结果
  result?: number;
  //输赢结果标志 1:赢 2:平 3:输
  resultFlag?: number;
  //游戏开始时间
  startTime?: number;
  //状态 1:已结算 2:进行中 3:系统撤单 4:拒绝 5:作废 6:玩家取消
  status?: number;
  //总投注
  totalBet?: number;
  //交易id
  transactionId?: string;
  //游戏人数
  userCount?: number;
  //用户编号
  userId?: number;
  //用户名称
  userName?: string;
  //有效投注
  validBet?: number;
  }
declare interface IPageResultUserGameRecordResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IUserGameRecordResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IGameSummaryReq {
  //结束时间
  end?: number;
  //开始时间
  start?: number;
  //用户编号
  userId?: number;
  //用户编号
  userName?: string;
  }
declare interface IGameSummaryResp {
  //总有效流水
  gameValidAmount?: number;
  //总盘负盈利
  negativeProfitAmount?: number;
  }
declare interface IUserIdReq {
  //用户编号
  userId: number;
  }
declare interface IUserLabelUpdate {
  //用户标签编码
  labelCode?: string;
  //用户编号
  userId: number;
  }
declare interface IUserRelationAccountResp {
  //关联类型code
  relationTypeCode?: string;
  //关联类型名字
  relationTypeName?: string;
  //关联value
  relationValue?: string;
  //用户id
  userId?: number;
  //用户名
  userName?: string;
  }
declare interface IChannelAccountResp {
  //余额
  balance?: number;
  //渠道编号
  channelId?: string;
  //渠道名称
  channelName?: string;
  }
declare interface IUserAccountResp {
  //人民币总余额
  balance?: number;
  //渠道余额信息
  channelAccount?: IChannelAccountResp[];
  }
declare interface IUserDataSummary {
  //账户余额
  accountBalance?: number;
  //游戏账户余额
  channelBalance?: number;
  //充值累计
  deposit?: number;
  //充值提现流水倍数
  depositWithdrawFactor?: number;
  //有效流水
  effectiveBet?: number;
  //红包提现流水倍数
  redBagWithdrawFactor?: number;
  //剩余需要的有效流水
  remainNeedAmount?: number;
  //负盈利
  reverseProfit?: number;
  //返佣累计
  rewardAmount?: number;
  //用户编号
  userId?: number;
  //彩金累计
  winnings?: number;
  //提现累计
  withdraw?: number;
  }
declare interface IUserDetailResp {
  //账号
  account?: string;
  //成为代理时间
  agentCreateTime?: string;
  //代理级别
  agentLevel?: number;
  //生日
  birthday?: string;
  //注册时间
  createTime?: string;
  //有效会员 1:是 0:否
  effective?: number;
  //邮箱
  email?: string;
  //经验值
  experience?: number;
  //封禁用户，true：封禁
  forbidden?: boolean;
  //邀请人账号(所属代理)
  inviteAccount?: string;
  //邀请人编号
  inviteUid?: number;
  //邀请链接
  inviteUrl?: string;
  //最后登录时间
  lastLogin?: number;
  //最后一次登陆ip
  lastLoginIp?: string;
  //邀请码
  layerCode?: string;
  //手机区号
  mobileArea?: string;
  //手机号
  mobileNo?: string;
  //昵称
  nickName?: string;
  //注册端(h5/pc端)
  registerDevice?: string;
  //注册ip
  registerIp?: string;
  //备注
  reminder?: string;
  //奖励比例
  rewardRate?: number;
  //奖励类型 1:占成 2:返佣
  rewardType?: number;
  //用户状态 1:正常 0:锁定
  status?: number;
  //飞机账号
  telegram?: string;
  //用户编号
  userId?: number;
  //用户标签，多个逗号隔开
  userLabel?: string;
  //用户标签文本，多个逗号隔开
  userLabelText?: string;
  //真实姓名
  userName?: string;
  //用户类型 1:普通 3:一级代理 4:代理用户
  userType?: number;
  //vip等级
  vipLevel?: number;
  //vip等级名称
  vipLevelName?: string;
  }
declare interface IQueryUserListReq {
  //账号
  account?: string;
  //代理编号
  agentUid?: number;
  //注册时间结束
  end?: string;
  //最后一次登陆ip
  lastLoginIp?: string;
  //手机号
  mobileNo?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //注册ip
  registerIp?: string;
  //注册时间开始
  start?: string;
  //用户编号
  userId?: number;
  //用户标签，多个逗号隔开
  userLabel?: string;
  //用户名
  userName?: string;
  //用户类型 1:普通 4:代理用户
  userType?: number;
  //vip等级
  vipLevel?: number;
  }
declare interface IUserResp {
  //账号
  account?: string;
  //生日
  birthday?: string;
  //注册时间
  createTime?: string;
  //有效会员 1:是 0:否
  effective?: number;
  //邮箱
  email?: string;
  //经验值
  experience?: number;
  //封禁用户，true：封禁
  forbidden?: boolean;
  //邀请人账号(所属代理)
  inviteAccount?: string;
  //邀请人编号
  inviteUid?: number;
  //最后登录时间
  lastLogin?: number;
  //最后一次登陆ip
  lastLoginIp?: string;
  //手机区号
  mobileArea?: string;
  //手机号
  mobileNo?: string;
  //昵称
  nickName?: string;
  //注册端(h5/pc端)
  registerDevice?: string;
  //注册ip
  registerIp?: string;
  //备注
  reminder?: string;
  //用户状态 1:正常 0:锁定
  status?: number;
  //飞机账号
  telegram?: string;
  //用户编号
  userId?: number;
  //用户标签，多个逗号隔开
  userLabel?: string;
  //用户标签文本，多个逗号隔开
  userLabelText?: string;
  //真实姓名
  userName?: string;
  //用户类型 1:普通 3:一级代理 4:代理用户
  userType?: number;
  //vip等级
  vipLevel?: number;
  //vip等级名称
  vipLevelName?: string;
  }
declare interface IPageResultUserResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IUserResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUserOperationLogReq {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //用户编号
  userId: number;
  }
declare interface IOperationLogResp {
  //子类型
  bizChild?: string;
  //业务编号
  bizId?: string;
  //业务类型
  bizType?: string;
  //操作用户账号
  operationAccount?: string;
  //操作时间
  operationTime?: string;
  //操作用户编号
  operationUid?: number;
  //操作说明
  remark?: string;
  }
declare interface IPageResultOperationLogResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IOperationLogResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IUserReminderUpdate {
  //用户备注
  reminder?: string;
  //用户编号
  userId: number;
  }
declare interface IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang {
  //用户id
  userId?: number;
  }
declare interface IResetMobileNoReq {
  //手机区号
  mobileArea: string;
  //手机号
  mobileNo: string;
  //用户编号
  userId: number;
  }
declare interface IUserStatisticsExportExcelGETReqQuery {
  //统计纬度:1 按天；3 按月
  groupBy?: number;
  //开始时间
  start?: number;
  //结束时间
  end?: number;
  }
declare interface IUserStatisticsInfoResp {
  //总用户
  totalCount?: number;
  }
declare interface IUserStatisticsReq {
  //结束时间
  end?: string;
  //统计纬度:1 按天；3 按月
  groupBy?: number;
  //开始时间
  start?: string;
  }
declare interface IUserStatisticsResp {
  //注册用户数
  count?: number;
  //日期
  date?: string;
  }
declare interface ITeamStatisticsReq {
  //统计日期类型:0 今日；7 近7天；30 近30天；9999 全部
  statDateType: number;
  //会员ID
  userId?: number;
  }
declare interface ITeamStatisticsResp {
  //代理数
  agentCount?: number;
  //存款值
  depositAmount?: number;
  //直属有效会员数
  directSum?: number;
  //总有效会员数
  effectiveSum?: number;
  //有效流水
  gameValidAmount?: number;
  //负盈利
  negativeProfitAmount?: number;
  //彩金
  rewardAmount?: number;
  //返佣金额
  settleAmount?: number;
  //总会员数
  userCount?: number;
  //达成条件的vip用户数
  vipSum?: number;
  //提款值
  withdrawAmount?: number;
  }
declare interface IAddVipReq {
  //降级存款值条件
  downDepositAmount: number;
  //降级负盈利值条件
  downNegativeProfitAmount: number;
  //降级有效流水值条件
  downValidAmount: number;
  //降级有效会员数条件
  downValidMembers: number;
  //升级存款值条件
  upDepositAmount: number;
  //升级负盈利值条件
  upNegativeProfitAmount: number;
  //升级有效流水值条件
  upValidAmount: number;
  //升级有效会员数条件
  upValidMembers: number;
  //vip名称
  vipName: string;
  }
declare interface IVipManagementResp {
  //降级条件
  downgradeConditions?: string;
  //包网商id
  proxyId?: number;
  //结算周期：WEEK、MONTH
  settlementType?: string;
  //更新时间
  updateTime?: string;
  //升级条件
  upgradeConditions?: string;
  //编号
  vipId?: number;
  //vip等级
  vipLevel?: number;
  //vip名称
  vipName?: string;
  }
declare interface IPageResultVipManagementResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IVipManagementResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IQueryVipManagementReq {
  //数据id
  vipId: number;
  }
declare interface IVipManagementVo {
  //降级存款值条件
  downDepositAmount?: number;
  //降级负盈利值条件
  downNegativeProfitAmount?: number;
  //降级有效流水值条件
  downValidAmount?: number;
  //降级有效会员数条件
  downValidMembers?: number;
  //结算周期：WEEK、MONTH
  settlementType?: string;
  //升级存款值条件
  upDepositAmount?: number;
  //升级负盈利值条件
  upNegativeProfitAmount?: number;
  //升级有效流水值条件
  upValidAmount?: number;
  //升级有效会员数条件
  upValidMembers?: number;
  //编号
  vipId?: number;
  //vip等级
  vipLevel?: number;
  //vip名称
  vipName?: string;
  }
declare interface IUpdatePeriodReq {
  //结算周期：WEEK、MONTH
  settlementType: string;
  }
declare interface IUpdateVipReq {
  //降级存款值条件
  downDepositAmount: number;
  //降级负盈利值条件
  downNegativeProfitAmount: number;
  //降级有效流水值条件
  downValidAmount: number;
  //降级有效会员数条件
  downValidMembers: number;
  //升级存款值条件
  upDepositAmount: number;
  //升级负盈利值条件
  upNegativeProfitAmount: number;
  //升级有效流水值条件
  upValidAmount: number;
  //升级有效会员数条件
  upValidMembers: number;
  //数据id
  vipId: number;
  //vip名称
  vipName: string;
  }
declare interface IWinningsRecordExportExcelGETReqQuery {
  //代理id
  agentUid?: number;
  //用户id
  userId?: number;
  //到账时间
  start?: number;
  //到账时间
  end?: number;
  //活动类型
  activityType?: string;
  }
declare interface IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang {
  //活动类型
  activityType?: string;
  //代理id
  agentUid?: string;
  agentUidLong?: number;
  //到账时间
  end?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //到账时间
  start?: string;
  //状态
  statusList?: number[];
  //用户id
  userId?: number;
  }
declare interface IYongHuCaiJinFaFangJiLu {
  //上级代理
  agentName?: string;
  //代理商id
  agentUid?: number;
  //说明(原因)
  explainReview?: string;
  id?: number;
  //归属包网商
  proxyName?: string;
  //包网商id
  proxyUid?: number;
  //到账时间
  receivedTime?: string;
  //单号
  recordNo?: string;
  //备注
  remark?: string;
  //状态：1有效，0无效
  status?: number;
  //来源类型
  type?: string;
  typeName?: string;
  //用户id
  userId?: number;
  //会员名
  userName?: string;
  //会员类型,1:普通会员，4:代理会员
  userType?: number;
  //彩金发放数量
  winningsAmount?: number;
  }
declare interface IPageResultYongHuCaiJinFaFangJiLu {
  pageIndex?: number;
  pageSize?: number;
  rows?: IYongHuCaiJinFaFangJiLu[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IReviewUserWinningsRecordProxyReq {
  //代理id
  agentUid: number;
  //说明(原因)
  explainReview?: string;
  //状态(1:通过；2:拒绝)
  status: number;
  //用户id
  userId: number;
  }
declare interface ICaiJinTongJiShuJuBossZhiDuiXiang {
  //审核拒绝金额
  refuseAmount?: number;
  //注册彩金总发放数
  registerAmount?: number;
  //签到彩金总发放数
  signInAmount?: number;
  //红包发放数量
  systemAllocateAmount?: number;
  //彩金总发放数
  totalAmount?: number;
  //待审核金额
  unreviewAmount?: number;
  }
declare interface ICaiJinPeiZhiChaXunDuiXiang {
  //主键
  id?: number;
  //包网商id
  proxyUid?: number;
  }
declare interface IHouTaiFaFangGuiZe {
  //提现倍数
  withdrawFactor?: number;
  }
declare interface IShouChongLeiXingGuiZe {
  //存款额以上
  bottomLine?: number;
  //固定值
  fixedVal?: number;
  //发放比例
  ratio?: number;
  //发放上限
  releaseTopLimit?: number;
  //发放类型:1,固定值；2,比例
  type?: number;
  //提现倍数
  withdrawFactor?: number;
  }
declare interface IZhuCeLeiXingGuiZe {
  //彩金数量
  fixedVal?: number;
  //彩金数量
  withdrawFactor?: number;
  }
declare interface IQianDaoLeiXingGuiZe {
  //是否连续签到
  continuous?: boolean;
  //连续签到天数
  continuousDayAmount?: number;
  //签到首日发放数量
  firstReleaseVal?: number;
  //递增数量
  incrementVal?: number;
  //连续签到天数及以上发放量
  maxVal?: number;
  //彩金数量/天
  winningsVal?: number;
  //提现倍数
  withdrawFactor?: number;
  }
declare interface ICaiJinGuiZePeiZhiXinXi {
  //客服分配规则，对应配置类型：SYSTEM_ALLOCATION
  allocateRule?: IHouTaiFaFangGuiZe;
  createTime?: string;
  //首次存款规则，对应配置类型：FIRST_DEPOSIT
  firstDepositRule?: IShouChongLeiXingGuiZe;
  id?: number;
  //是否需要审核：1 是；0 否；红包传0
  needReview?: number;
  //关联帐号是否只参加一次：1 是；0 否；红包传0
  oneAssAccountOneTime?: number;
  //包网商id
  proxyUid?: number;
  //注册规则，对应配置类型：REGISTER
  registerRule?: IZhuCeLeiXingGuiZe;
  //签到规则，对应配置类型：SIGN_IN
  signInRule?: IQianDaoLeiXingGuiZe;
  //状态
  status?: boolean;
  //当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN
  type?: string;
  updateTime?: string;
  }
declare interface IPageResultCaiJinGuiZePeiZhiXinXi {
  pageIndex?: number;
  pageSize?: number;
  rows?: ICaiJinGuiZePeiZhiXinXi[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface ICaiJinGuiZePeiZhiCanShuDuiXiang {
  //客服分配规则，对应配置类型：SYSTEM_ALLOCATION
  allocateRule?: IHouTaiFaFangGuiZe;
  //首次存款规则，对应配置类型：FIRST_DEPOSIT
  firstDepositRule?: IShouChongLeiXingGuiZe;
  //主键，新增是为空
  id?: number;
  //是否需要审核：1 是；0 否；红包传0
  needReview?: number;
  //关联帐号是否只参加一次：1 是；0 否；红包传0
  oneAssAccountOneTime?: number;
  //包网商id
  proxyUid?: number;
  //注册规则，对应配置类型：REGISTER
  registerRule?: IZhuCeLeiXingGuiZe;
  //签到规则，对应配置类型：SIGN_IN
  signInRule?: IQianDaoLeiXingGuiZe;
  //状态
  status?: boolean;
  //当前配置类型，FIRST_DEPOSIT,REGISTER,SIGN_IN
  type?: string;
  }
declare interface IWithdrawNoChannelTypeReq {
  //通道类型
  channelType?: string;
  //提币/提现单号
  withdrawNo: string;
  }
declare interface IWithdrawRefuseReq {
  //通道类型
  channelType?: string;
  //拒绝理由
  refuseDesc?: string;
  //提币/提现单号
  withdrawNo: string;
  }
declare interface IWithdrawDigitalExportExcelGETReqQuery {
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //提现/币单号
  withdrawNo?: string;
  //用户编号
  userId?: number;
  //用户账号
  userAccount?: string;
  //提款类型：1 数字货币；2 法币
  currencyType?: number;
  //状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功
  status?: number;
  //提币地址
  address?: string;
  //交易时间开始
  start?: string;
  //交易时间结束
  end?: string;
  }
declare interface IWithdrawReq {
  //提币地址
  address?: string;
  //提款类型：1 数字货币；2 法币
  currencyType?: number;
  //交易时间结束
  end?: string;
  //页码 从1开始计数
  pageIndex?: number;
  //页容 区间[1, 1000]
  pageSize?: number;
  //交易时间开始
  start?: string;
  //状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功
  status?: number;
  //用户账号
  userAccount?: string;
  //用户编号
  userId?: number;
  //提现/币单号
  withdrawNo?: string;
  }
declare interface IWithdrawResp {
  //提现/币分值 - 实际到账
  actualLegerAmount?: number;
  //1级代理账户
  agentAccount?: string;
  //1级代理ID
  agentId?: number;
  //提币金额
  amount?: number;
  //链
  chain?: string;
  //渠道类型
  channelType?: string;
  //交易完成时间
  completeTime?: string;
  //下单时间
  createTime?: string;
  //币种
  currencyCode?: string;
  //币种类型 1数字货币 2法币
  currencyType?: number;
  //附加信息，比如提现用户卡信息
  extraData?: string;
  //手续费
  fee?: number;
  //手续费类型：1 固定值；2 比例
  feeType?: number;
  feeValue?: number;
  //提现/币分值
  legerAmount?: number;
  //上级代理帐号
  parentAccount?: string;
  //上级代理ID
  parentId?: number;
  //包网商帐号
  proxyUserAccount?: string;
  //包网商ID
  proxyUserId?: number;
  //汇率
  rate?: number;
  //拒绝理由
  refuseDesc?: string;
  //备注
  reminder?: string;
  //状态 0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 9:提币失败
  status?: number;
  //实际到账
  targetAmount?: number;
  //接收地址
  toAddress?: string;
  //交易hash
  txHash?: string;
  //会员名
  userAccount?: string;
  //用户编号
  userId?: number;
  //用户标签，多个逗号隔开
  userLabel?: string;
  //会员类型
  userType?: number;
  //提币单号
  withdrawNo?: string;
  //是否能重试发起提现支付
  withdrawRetry?: boolean;
  //提币类型 1:外部提币 2:内部提币 3：系统提现
  withdrawType?: number;
  //提现方式，1：线上，2：线下
  withdrawWay?: number;
  }
declare interface IPageResultWithdrawResp {
  pageIndex?: number;
  pageSize?: number;
  rows?: IWithdrawResp[];
  totalNum?: number;
  totalPages?: number;
  }
declare interface IWithdrawNoReq {
  //通道类型
  channelType?: string;
  //提币/提现单号
  withdrawNo: string;
  }
declare interface IWithdrawSummaryResp {
  //总提款
  withdrawAmount?: number;
  //USDT提款
  withdrawDigitalAmount?: number;
  //法币提款
  withdrawLegalAmount?: number;
  }
declare interface IAdjustWithdrawLimitReq {
  //金额
  amount: number;
  //类型：0：减少，1：增加
  type: number;
  //用户id
  userId: number;
  }
declare interface IPendingCountResp {
  //代理申请数量
  agentApplyCount?: number;
  //充值单数量
  depositCount?: number;
  //提现/币单数量
  withdrawCount?: number;
  }
