/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../hahaha";
export default {
  
  /**
   * @description: 账户相关 - 平台账户（归集地址）
   */

  AccountCollectionAccountGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICollectionAccountResp>> => {
    return request({
      url: `/account/collectionAccount`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 头寸余额
   */

  AccountHotAccountGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IHotAccountResp>> => {
    return request({
      url: `/account/hotAccount`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 平台账户 - 手续费余额
   */

  AccountPlatformGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPlatformAccountResp>> => {
    return request({
      url: `/account/platform`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 账户相关 - 盘内实时余额
   */

  AccountStatisticsBalanceCurrentPOST: (
    data: IQueryCurrentAccountTotalReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAccountCurrentTotalResp>> => {
    return request({
      url: `/account/statistics/balance/current`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户相关 - 盘内历史余额
   */

  AccountStatisticsBalanceHistoryPOST: (
    data: IQueryAccountTotalReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAccountDailyTotalResp>[]> => {
    return request({
      url: `/account/statistics/balance/history`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户相关 - 单个用户余额
   */

  AccountUserBalancePOST: (
    data: IUserNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserAccountBalanceResp>> => {
    return request({
      url: `/account/userBalance`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 活动相关 - 编辑
   */

  ActivityEditActivityPOST: (
    data: IEditActivityReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IEditActivityResp>> => {
    return request({
      url: `/activity/editActivity`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 活动相关 - 上下架
   */

  ActivityEditStatusPOST: (
    data: IEditActivityStatusReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/activity/editStatus`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 活动相关 - 导出Excel
   */

  ActivityExportGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/activity/export`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 活动相关 - 导出Excel
   */

  ActivityExportPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/activity/export`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 活动相关 - 查询-详情
   */

  ActivityFetchActivityDetailPOST: (
    data: IQueryActivityDetailReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IQueryActivityDetailResp>> => {
    return request({
      url: `/activity/fetchActivityDetail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 活动相关 - 查询
   */

  ActivityQueryActivityPOST: (
    data: IQueryActivityReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultQueryActivityResp>> => {
    return request({
      url: `/activity/queryActivity`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 添加代理
   */

  AgentAddPOST: (
    data: IAddAgentReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理申请管理 - 审核通过
   */

  AgentApplyPassPOST: (
    data: IAgentApplyPassReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/apply/pass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理申请管理 - 查询申请列表
   */

  AgentApplyQueryListPOST: (
    data: IQueryAgentApplyReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentApplyResp>> => {
    return request({
      url: `/agent/apply/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理申请管理 - 审核拒绝
   */

  AgentApplyRefusePOST: (
    data: IAgentApplyRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/apply/refuse`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 冻结代理
   */

  AgentLockPOST: (
    data: IAgentIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/lock`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 查询单个代理信息
   */

  AgentQueryByIdPOST: (
    data: IAgentIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAgentInfoResp>> => {
    return request({
      url: `/agent/queryById`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 查询一级代理列表
   */

  AgentQueryLevelOneListGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAgentInfoResp>[]> => {
    return request({
      url: `/agent/queryLevelOneList`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 查询代理列表
   */

  AgentQueryListPOST: (
    data: IQueryAgentListReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentInfoResp>> => {
    return request({
      url: `/agent/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 重置密码
   */

  AgentResetPasswordPOST: (
    data: IResetPasswordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/resetPassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 解冻代理
   */

  AgentUnlockPOST: (
    data: IAgentIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/unlock`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商代理管理 - 修改代理信息
   */

  AgentUpdatePOST: (
    data: IAgentUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/agent/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户资金变动记录 - 资金变动记录 - 导出excel
   */

  AssetChangeLogExportExcelGET: (
    data: IAssetChangeLogExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/assetChangeLog/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 账户资金变动记录 - 资金变动记录
   */

  AssetChangeLogListPOST: (
    data: IAssetChangeLogReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAssetChangeLogResp>> => {
    return request({
      url: `/assetChangeLog/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户资金变动记录 - 下拉类型
   */

  AssetChangeLogTypeGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAssetChangeLogType>[]> => {
    return request({
      url: `/assetChangeLog/type`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 银行卡管理 - 删除
   */

  BankCardDeletePOST: (
    data: IBankCardDeleteReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/bank/card/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行卡管理 - 详情
   */

  BankCardDetailPOST: (
    data: IBankCardDetailReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankCardDetailResp>> => {
    return request({
      url: `/bank/card/detail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行卡管理 - 查询
   */

  BankCardQueryPOST: (
    data: IBankCardQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankCardQueryResp>[]> => {
    return request({
      url: `/bank/card/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行卡管理 - 添加或编辑
   */

  BankCardUpdatePOST: (
    data: IBankCardUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/bank/card/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行信息 - 详情
   */

  BankDetailPOST: (
    data: IBankQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankDetailResp>> => {
    return request({
      url: `/bank/detail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行信息 - 查询
   */

  BankQueryPOST: (
    data: IBankQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankQueryResp>[]> => {
    return request({
      url: `/bank/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 银行信息 - 添加或编辑
   */

  BankUpdatePOST: (
    data: IYinHangShuXingQingQiu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/bank/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 渠道充提信息接口 - 汇总信息
   */

  ChannelDepositWithdrawSummaryPOST: (
    data: IChannelDepostWithdrawSummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IChannelDepostWithdrawSummaryResp>> => {
    return request({
      url: `/channel/deposit/withdraw/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 添加公告
   */

  CmsArticleAddPOST: (
    data: IAddArticleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 停用公告
   */

  CmsArticleDisablePOST: (
    data: IArticleIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/disable`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 启用公告
   */

  CmsArticlePublishPOST: (
    data: IArticleIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/publish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 查询公告列表
   */

  CmsArticleQueryListPOST: (
    data: IQueryArticleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultArticleResp>> => {
    return request({
      url: `/cms/article/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 查询公告详情
   */

  CmsArticleQueryOnePOST: (
    data: IArticleIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IArticleResp>> => {
    return request({
      url: `/cms/article/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 公告管理 - 修改公告
   */

  CmsArticleUpdatePOST: (
    data: IUpdateArticleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 添加横幅
   */

  CmsBannerAddPOST: (
    data: IAddBannerReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 停用横幅
   */

  CmsBannerDisablePOST: (
    data: IBannerNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/disable`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 启用横幅
   */

  CmsBannerPublishPOST: (
    data: IBannerNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/publish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 查询横幅列表
   */

  CmsBannerQueryListPOST: (
    data: IQueryBannerReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultBannerResp>> => {
    return request({
      url: `/cms/banner/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 查询横幅详情
   */

  CmsBannerQueryOnePOST: (
    data: IBannerNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBannerResp>> => {
    return request({
      url: `/cms/banner/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: banner管理 - 修改横幅
   */

  CmsBannerUpdatePOST: (
    data: IUpdateBannerReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 标签管理 - 查询所有用户标签
   */

  CmsLabelQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserLabelResp>[]> => {
    return request({
      url: `/cms/label/queryAll`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 归集管理 - 获取归集配置信息
   */

  CollectGetGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICollectResp>> => {
    return request({
      url: `/collect/get`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 归集管理 - 更新归集地址
   */

  CollectUpdateCollectPOST: (
    data: IAddressReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/collect/updateCollect`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 归集管理 - 更新头寸
   */

  CollectUpdateHotPOST: (
    data: IPrivateKeyReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/collect/updateHot`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 日志相关接口 - 日志记录 - 导出excel
   */

  CommonLogOperateExportExcelGET: (
    data: ICommonLogOperateExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/common/log/operate/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 日志相关接口 - 查询操作日志信息
   */

  CommonLogOperateListPOST: (
    data: IOperationLogReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOperationLogVo>> => {
    return request({
      url: `/common/log/operate/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 币种管理 - 启用/禁用
   */

  CurrencyEnablePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/currency/enable`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 系统币种 - 基础币种
   */

  CurrencyGetPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/currency/get`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 币种管理 - 查询
   */

  CurrencyQueryPOST: (
    data: ICurrencyQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBiZhongChaXunFanHuiXinXi>[]> => {
    return request({
      url: `/currency/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 币种管理 - 更新汇率
   */

  CurrencyRateUpdatePOST: (
    data: IBiZhongHuiShuaiGengXinQingQiuXinXi={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/currency/rate/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 币种管理 - USDT汇率
   */

  CurrencyUsdtRatePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/currency/usdt/rate`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 币种管理 - 添加或编辑USDT汇率
   */

  CurrencyUsdtUpdatePOST: (
    data: IUSDTGengXinQingQiuXinXi={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/currency/usdt/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 日常数据 - 充/提数据统计
   */

  DailyStatisticsDepositWithdrawPOST: (
    data: IDailyStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyDailyStatResp>> => {
    return request({
      url: `/daily/statistics/depositWithdraw`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 日常数据 - 充值/提现人数查询
   */

  DailyStatisticsDepositWithdrawUserCountPOST: (
    data: IDailyStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositUserCountResp>[]> => {
    return request({
      url: `/daily/statistics/depositWithdrawUserCount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 日常数据 - 注册和活跃数据
   */

  DailyStatisticsUserActionPOST: (
    data: IDailyStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserActionStatisticsResp>> => {
    return request({
      url: `/daily/statistics/userAction`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 渠道充值回调
   */

  DepositCallbackPOST: (
    data: IWithdrawCallbackReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/callback`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 审核通过
   */

  DepositCheckPassPOST: (
    data: IDepositNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/checkPass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 审核拒绝
   */

  DepositCheckRefusePOST: (
    data: IDepositRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/checkRefuse`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币和充值配置 - 获取数字货币充币配置
   */

  DepositConfigGetDigitalByCodeChainPOST: (
    chain:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/deposit/config/getDigital/${chain}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 充币和充值配置 - 获取法币充值配置
   */

  DepositConfigGetLegerByCodeCurrencyCodePOST: (
    currencyCode:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/deposit/config/getLeger/${currencyCode}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 充币和充值配置 - 设置数字货币充币配置
   */

  DepositConfigSetDigitalPOST: (
    data: IWithdrawInfoResp={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/config/setDigital`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币和充值配置 - 设置提现配置
   */

  DepositConfigSetLegerPOST: (
    data: ISheZhiCunKuanCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/config/setLeger`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 充币记录 - 导出excel
   */

  DepositExportExcelGET: (
    data: IDepositExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 充币信息 - 收款信息
   */

  DepositGetCardPOST: (
    data: IDepositNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositBankCardResp>[]> => {
    return request({
      url: `/deposit/getCard`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 充币记录
   */

  DepositListPOST: (
    data: IDepositQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultDepositQueryResp>> => {
    return request({
      url: `/deposit/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 充币信息 - 待理处理订单数量
   */

  DepositPendingCountPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/deposit/pendingCount`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 充币信息 - 汇总信息
   */

  DepositSummaryPOST: (
    data: IDepositSummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositSummaryResp>> => {
    return request({
      url: `/deposit/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 新增文档
   */

  DocManagementAddDocPOST: (
    data: IAddDocReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/doc/management/addDoc`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 下架文档
   */

  DocManagementOfflineDocPOST: (
    data: IOperationDocReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/doc/management/offlineDoc`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 发布文档
   */

  DocManagementOnlineDocPOST: (
    data: IOperationDocReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/doc/management/onlineDoc`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 查询文档列表
   */

  DocManagementQueryListPOST: (
    data: IQueryDocListReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyDocManagementResp>> => {
    return request({
      url: `/doc/management/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 查询单条文档信息
   */

  DocManagementQueryOnePOST: (
    data: IQueryDocReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyDocManagementResp>> => {
    return request({
      url: `/doc/management/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文档中心管理 - 更新文档
   */

  DocManagementUpdateDocPOST: (
    data: IUpdateDocReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/doc/management/updateDoc`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理登录 - 检查踢出信息
   */

  EntranceCheckKickOutGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/checkKickOut`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 代理登录 - 检查踢出信息
   */

  EntranceCheckKickOutPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/checkKickOut`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 代理登录 - 登录
   */

  EntranceLoginPOST: (
    data: ILoginReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ILoginResp>> => {
    return request({
      url: `/entrance/login`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理登录 - 登出接口
   */

  EntranceLogoutGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/logout`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 代理登录 - 登出接口
   */

  EntranceLogoutPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/logout`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 经验值管理 - 查询经验值列表
   */

  ExperienceValueQueryListPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyExperienceValueResp>> => {
    return request({
      url: `/experience/value/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 经验值管理 - 查询单条经验值信息
   */

  ExperienceValueQueryOnePOST: (
    data: IQueryExperienceValueReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyExperienceValueResp>> => {
    return request({
      url: `/experience/value/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 经验值管理 - 查询有效流水值信息
   */

  ExperienceValueQueryValidAmountGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyValidAmountResp>[]> => {
    return request({
      url: `/experience/value/queryValidAmount`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 经验值管理 - 编辑经验值
   */

  ExperienceValueUpdateExperienceValuePOST: (
    data: IUpdateExperienceValueReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/experience/value/updateExperienceValue`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 经验值管理 - 编辑有效流水值
   */

  ExperienceValueUpdateValidAmountPOST: (
    data: IUpdateValidAmountReq[]={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/experience/value/updateValidAmount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 手续费 - 手续费
   */

  FeeStatisticsFeePOST: (
    data: IFeeStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IFeeStatisticsResp>> => {
    return request({
      url: `/fee/statistics/fee`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 文件上传下载 - 下载文件
   */

  FileDownloadByCodeFileNoGET: (
    fileNo:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/file/download/${fileNo}`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 文件上传下载 - 下载文件
   */

  FileDownloadByCodeFileNoPOST: (
    fileNo:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/file/download/${fileNo}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 文件上传下载 - 上传文件
   */

  FileUploadPOST: (
    data: IFileUploadPOSTFromData={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUploadResultResp>> => {
    return request({
      url: `/file/upload`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏渠道相关 - 查询渠道
   */

  GameChannelQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameChannelSummary>[]> => {
    return request({
      url: `/game/channel/queryAll`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-VSC专用
   */

  GameChannelQueryGamePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/channel/queryGame`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-GF专用
   */

  GameChannelQueryGameGfPOST: (
    data: ICurrencyReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/channel/queryGame/gf`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏渠道相关 - 查询厂商信息
   */

  GameFactoryQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/factory/queryAll`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 游戏渠道相关 - 查询游戏类型信息
   */

  GameGameTypeQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IChannelTypeResp>[]> => {
    return request({
      url: `/game/gameType/queryAll`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 获取精选游戏
   */

  GameGetChoicePOST: (
    data: IProxyIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyChoiceGameResp>[]> => {
    return request({
      url: `/game/getChoice`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 下线游戏
   */

  GameOfflinePOST: (
    data: IProxyGameIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/offline`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 上线游戏
   */

  GameOnlinePOST: (
    data: IProxyGameIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/online`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 查询区域下的游戏信息
   */

  GameQueryAreaGamePOST: (
    data: IAreaIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyGameResp>[]> => {
    return request({
      url: `/game/queryAreaGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 游戏列表
   */

  GameQueryListPOST: (
    data: IQueryProxyGameReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyGameResp>> => {
    return request({
      url: `/game/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 查询代理下的游戏信息
   */

  GameQueryProxyGamePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyGameResp>[]> => {
    return request({
      url: `/game/queryProxyGame`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 棋牌游戏记录
   */

  GameRecordChesscardPOST: (
    data: IChessCardGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultChessCardGameRecordResp>> => {
    return request({
      url: `/game/record/chesscard`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 棋牌游戏记录导出
   */

  GameRecordChesscardExportGET: (
    data: IGameRecordChesscardExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/chesscardExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 斗鸡游戏记录
   */

  GameRecordChickenPOST: (
    data: IGameRecordChickenPOSTReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultChickenGameRecordResp>> => {
    return request({
      url: `/game/record/chicken`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 斗鸡游戏记录导出
   */

  GameRecordChickenExportGET: (
    data: IGameRecordChickenExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/chickenExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 电子游戏记录
   */

  GameRecordElectronPOST: (
    data: IElectronGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultElectronGameRecordResp>> => {
    return request({
      url: `/game/record/electron`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 电子游戏记录导出
   */

  GameRecordElectronExportGET: (
    data: IGameRecordElectronExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/electronExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 电竞游戏记录
   */

  GameRecordEsportPOST: (
    data: IEsportGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultEsportGameRecordResp>> => {
    return request({
      url: `/game/record/esport`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 电竞游戏记录导出
   */

  GameRecordEsportExportGET: (
    data: IGameRecordEsportExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/esportExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 捕鱼游戏记录
   */

  GameRecordFishPOST: (
    data: IFishGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultFishGameRecordResp>> => {
    return request({
      url: `/game/record/fish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 捕鱼游戏记录导出
   */

  GameRecordFishExportGET: (
    data: IGameRecordFishExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/fishExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 真人视讯游戏记录
   */

  GameRecordLivevideoPOST: (
    data: ILiveVideoGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultLiveVideoGameRecordResp>> => {
    return request({
      url: `/game/record/livevideo`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 真人视讯游戏记录导出
   */

  GameRecordLivevideoExportGET: (
    data: IGameRecordLivevideoExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/livevideoExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 彩票游戏记录
   */

  GameRecordLotteryPOST: (
    data: ILotteryGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultLotteryGameRecordResp>> => {
    return request({
      url: `/game/record/lottery`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 彩票游戏记录导出
   */

  GameRecordLotteryExportGET: (
    data: IGameRecordLotteryExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/lotteryExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 游戏记录
   */

  GameRecordOrdinaryPOST: (
    data: IOrdinaryGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOrdinaryGameRecordResp>> => {
    return request({
      url: `/game/record/ordinary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 游戏记录导出
   */

  GameRecordOrdinaryExportGET: (
    data: IGameRecordOrdinaryExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/ordinaryExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 体育游戏记录
   */

  GameRecordSportPOST: (
    data: ISportGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultSportGameRecordResp>> => {
    return request({
      url: `/game/record/sport`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户游戏记录 - 体育游戏记录导出
   */

  GameRecordSportExportGET: (
    data: IGameRecordSportExportGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/sportExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 游戏统计 - 渠道导出excel
   */

  GameStatisticsChannelExportExcelGET: (
    data: IGameStatisticsChannelExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/statistics/channel/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 游戏统计 - 渠道 - 按日统计记录
   */

  GameStatisticsChannelListPOST: (
    data: IGameUserStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultGameUserStatisticsResp>> => {
    return request({
      url: `/game/statistics/channel/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏统计 - 导出excel
   */

  GameStatisticsProxyExportExcelGET: (
    data: IGameStatisticsProxyExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/statistics/proxy/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 游戏统计 - 代理 - 按日统计记录
   */

  GameStatisticsProxyListPOST: (
    data: IStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultGameProxyStatisticsResp>> => {
    return request({
      url: `/game/statistics/proxy/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏统计 - 代理 - 汇总
   */

  GameStatisticsProxySummaryPOST: (
    data: ISummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameProxyStatisticsResp>> => {
    return request({
      url: `/game/statistics/proxy/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏类型相关 - 主游戏类型列表
   */

  GameTypeGameMainTypeListPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameMainTypeResp>[]> => {
    return request({
      url: `/game/type/gameMainTypeList`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 更改游戏区域
   */

  GameUpdateAreaPOST: (
    data: IProxyGameUpdateAreaReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateArea`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 修改精选游戏信息
   */

  GameUpdateChoiceGamePOST: (
    data: IUpdateProxyChoiceGameReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateChoiceGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 修改游戏信息
   */

  GameUpdateGamePOST: (
    data: IUpdateProxyGameReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理游戏相关 - 更改游戏是否热门
   */

  GameUpdatePopularPOST: (
    data: IProxyGameUpdatePopularReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updatePopular`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 新增邀请海报
   */

  InvitationPosterAddPosterPOST: (
    data: IAddPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/addPoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 下架邀请海报
   */

  InvitationPosterOfflinePosterPOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/offlinePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 发布邀请海报
   */

  InvitationPosterOnlinePosterPOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/onlinePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 查询邀请海报列表
   */

  InvitationPosterQueryListPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyInvitationPosterResp>> => {
    return request({
      url: `/invitation/poster/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 查询单条邀请海报信息
   */

  InvitationPosterQueryOnePOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyInvitationPosterResp>> => {
    return request({
      url: `/invitation/poster/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 更新邀请海报
   */

  InvitationPosterUpdatePosterPOST: (
    data: IUpdatePosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/updatePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商达成条件配置 - 获取达成条件配置
   */

  OperateConfigAchievingGetAchievingConditionsGET: (
    data: IOperateConfigAchievingGetAchievingConditionsGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyAchievingConditionsResp>> => {
    return request({
      url: `/operate/config/achieving/getAchievingConditions`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 包网商达成条件配置 - 更新达成条件配置
   */

  OperateConfigAchievingUpdateAchievingConditionsPOST: (
    data: IUpdateAchievingConditionsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/achieving/updateAchievingConditions`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 配置中心获取包网商配置
   */

  OperateConfigCenterGetProxyConfigGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyRelationConfigResp>> => {
    return request({
      url: `/operate/config/center/getProxyConfig`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 更新佣金提现流水倍数设置
   */

  OperateConfigCenterUpdateCommissionMultiplePOST: (
    data: IUpdateCommissionMultipleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateCommissionMultiple`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 更新充值有效流水倍数
   */

  OperateConfigCenterUpdateDepositMultiplePOST: (
    data: IChongZhiLiuShuiYouXiaoBeiShu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateDepositMultiple`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 更新邀请码必填设置
   */

  OperateConfigCenterUpdateInvitationCodeSetPOST: (
    data: IUpdateInvitationCodeSetReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateInvitationCodeSet`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 更新提现条件阈值
   */

  OperateConfigCenterUpdateMinimumBalancePOST: (
    data: IUpdateMinimumBalanceReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateMinimumBalance`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 修改ip最大注册个数限制
   */

  OperateConfigCenterUpdateRegisterAmountPOST: (
    data: IZhuCeShuLiangXianZhi={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateRegisterAmount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 用户绑定银行卡限制
   */

  OperateConfigCenterUpdateUserBankCardAmountPOST: (
    data: IXiuGaiYongHuYinHangKaBangDingShuLiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateUserBankCardAmount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心 - 更新会员关联账号
   */

  OperateConfigCenterUpdateUserRelationAccountPOST: (
    data: IHuiYuanGuanLianZhangHao={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/center/updateUserRelationAccount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商配置中心游戏比例配置 - 获取游戏比例配置
   */

  OperateConfigGameScaleGetGameScaleGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyGameScaleResp>[]> => {
    return request({
      url: `/operate/config/gameScale/getGameScale`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 包网商配置中心游戏比例配置 - 更新游戏比例配置
   */

  OperateConfigGameScaleUpdateGameScalePOST: (
    data: IUpdateGameScaleReq[]={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/gameScale/updateGameScale`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: ip访问限制 - 添加
   */

  OperateConfigIpControlAddPOST: (
    data: IIpGuiZeTianJiaCanShu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/ipControl/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: ip访问限制 - 删除
   */

  OperateConfigIpControlDelByCodeIdPOST: (
    id:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/config/ipControl/del/${id}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: ip访问限制 - 规则列表
   */

  OperateConfigIpControlListPOST: (
    data: IFangWenKongZhiLieBiaoCanShu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultipGuiZeVo>> => {
    return request({
      url: `/operate/config/ipControl/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: ip访问限制 - 获取地区基础配置
   */

  OperateConfigIpControlRegionListPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDiQuMingZhiDuiXiang>[]> => {
    return request({
      url: `/operate/config/ipControl/regionList`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 客服配置 - 获取配置列表
   */

  OperateCustomerServicePagePOST: (
    data: IPeiZhiChaXunDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultBaoWangShangKeFuPeiZhiXinXi>> => {
    return request({
      url: `/operate/customer/service/page`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 客服配置 - 保存配置
   */

  OperateCustomerServiceSavePOST: (
    data: IBaoWangShangKeFuPeiZhiCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/customer/service/save`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 客服配置 - 修改状态
   */

  OperateCustomerServiceStatusByCodeIdStatusPOST: (
    id:string,status:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/customer/service/status/${id}/${status}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 客服配置 - getById
   */

  OperateCustomerServiceByCodeIdPOST: (
    id:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBaoWangShangKeFuPeiZhiXinXi>> => {
    return request({
      url: `/operate/customer/service/${id}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 用户达成数据查询 - 获取结算达成情况
   */

  OperateGetAchievingPOST: (
    data: IUserAchievingReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserAchievingBo>> => {
    return request({
      url: `/operate/getAchieving`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 包网商有效会员标准设置 - 获取有效会员标准配置
   */

  OperateValidMembersGetProxyValidMembersGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyValidMembersResp>> => {
    return request({
      url: `/operate/validMembers/getProxyValidMembers`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 包网商有效会员标准设置 - 更新有效会员设置
   */

  OperateValidMembersUpdateValidMembersPOST: (
    data: IUpdateValidMembersReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/operate/validMembers/updateValidMembers`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 支付渠道管理 - 查询支付渠道帐号列表
   */

  PaymentChannelAccountQueryListPOST: (
    data: IQueryPaymentChannelReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPaymentChannelResq>[]> => {
    return request({
      url: `/payment/channel/account/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 支付渠道管理 - 新增或修改支付渠道
   */

  PaymentChannelAccountUpdatePOST: (
    data: IPaymentChannelReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/payment/channel/account/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 支付渠道管理 - 查询支付渠道列表（boss分配给包网商的）
   */

  PaymentChannelQueryListPOST: (
    data: IQueryPaymentChannelReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/payment/channel/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 新增方案
   */

  RebatePlanAddPlanPOST: (
    data: IXinZengFanShuiFangAnQingQiu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/addPlan`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 查询厂商类型列表
   */

  RebatePlanAllTypeGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IChannelTypeResp>[]> => {
    return request({
      url: `/rebate/plan/allType`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 删除明细信息
   */

  RebatePlanDeleteItemsPOST: (
    data: IDeleteItemsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/deleteItems`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 删除方案信息
   */

  RebatePlanDeletePlanPOST: (
    data: IPlanIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/deletePlan`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 禁用方案
   */

  RebatePlanDisablePlanPOST: (
    data: IPlanIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/disablePlan`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 启用方案
   */

  RebatePlanEnablePlanPOST: (
    data: IPlanIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/enablePlan`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 查询方案明细信息
   */

  RebatePlanQueryItemsPOST: (
    data: IPlanIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IFanShuiFangAnMingXiXinXi>[]> => {
    return request({
      url: `/rebate/plan/queryItems`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 查询方案列表
   */

  RebatePlanQueryListPOST: (
    data: IPlanQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultFanShuiFangAnXinXi>> => {
    return request({
      url: `/rebate/plan/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水方案管理 - 更新方案
   */

  RebatePlanUpdatePlanPOST: (
    data: IGengXinFanShuiFangAnQingQiu={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/plan/updatePlan`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水记录管理 - 一键发放
   */

  RebateRecordAllGrantPOST: (
    data: IRecordQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/record/allGrant`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水记录管理 - 批量发放
   */

  RebateRecordBatchGrantPOST: (
    data: IRecordIdsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/record/batchGrant`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水记录管理 - 批量拒绝
   */

  RebateRecordBatchRefusePOST: (
    data: IRecordIdsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/record/batchRefuse`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 返水记录管理 - 导出返水记录列表
   */

  RebateRecordExportExcelGET: (
    data: IRebateRecordExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/rebate/record/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 返水记录管理 - 返水记录列表
   */

  RebateRecordQueryListPOST: (
    data: IRecordQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyRebateRecordResp>> => {
    return request({
      url: `/rebate/record/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 代理返佣数据
   */

  SettleAgentPOST: (
    data: IAgentSettleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentSettleResp>> => {
    return request({
      url: `/settle/agent`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 代理结算数据 - 导出excel
   */

  SettleAgentExportExcelGET: (
    data: ISettleAgentExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/agent/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 结算数据 - 审核
   */

  SettleApplyCheckPassPOST: (
    data: ICheckPassReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/apply/checkPass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 代理返佣提出申请列表
   */

  SettleApplyListPOST: (
    data: IAgentSettleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentSettleApplyResp>> => {
    return request({
      url: `/settle/apply/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 平台结算数据
   */

  SettlePlatformPOST: (
    data: IPlatformSettleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultPlatformSettleResp>> => {
    return request({
      url: `/settle/platform`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 平台结算数据 - 导出excel
   */

  SettlePlatformExportExcelGET: (
    data: ISettlePlatformExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/platform/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 结算数据 - 包网商结算数据
   */

  SettleProxyPOST: (
    data: IPlatformSettleReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxySettleResp>> => {
    return request({
      url: `/settle/proxy`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 结算数据 - 包网商结算数据 - 导出excel
   */

  SettleProxyExportExcelGET: (
    data: ISettleProxyExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/proxy/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 系统调账 - 调账
   */

  SystemAdjustmentAddPOST: (
    data: IAdjustmentReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/adjustment/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 系统调账 - 查询包网商总调账金额
   */

  SystemAdjustmentGetProxyAdjustSumGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxySumResp>> => {
    return request({
      url: `/system/adjustment/getProxyAdjustSum`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 系统调账 - 调账记录列表查询
   */

  SystemAdjustmentQueryPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultSystemDepositWithdrawBo>> => {
    return request({
      url: `/system/adjustment/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理系统管理 - 获取占成和返佣上限
   */

  SystemGetRewardRatePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyRewardRateResp>> => {
    return request({
      url: `/system/getRewardRate`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 代理系统管理 - 代理基础信息
   */

  SystemGetSummaryPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxySummerResp>> => {
    return request({
      url: `/system/getSummary`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 菜单管理接口 - 新增菜单
   */

  SystemMenuAddPOST: (
    data: IMenuBaseVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 菜单管理接口 - 删除菜单
   */

  SystemMenuDeleteGET: (
    data: ISystemMenuDeleteGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 菜单管理接口 - 删除菜单
   */

  SystemMenuDeletePOST: (
    data: ISystemMenuDeletePOSTReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 菜单管理接口 - 查询所有菜单
   */

  SystemMenuQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IMenuResponseVo>[]> => {
    return request({
      url: `/system/menu/queryAll`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 菜单管理接口 - 修改菜单
   */

  SystemMenuUpdatePOST: (
    data: IMenuUpdateVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 新增角色
   */

  SystemRoleAddPOST: (
    data: IRoleBaseVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 授权角色菜单
   */

  SystemRoleAuthorizeMenuPOST: (
    data: IRoleMenuRequestVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/authorizeMenu`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 锁定或解锁角色
   */

  SystemRoleChangeLockPOST: (
    data: IRoleLockRequestVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/changeLock`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 删除角色
   */

  SystemRoleDeleteGET: (
    data: ISystemRoleDeleteGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 删除角色
   */

  SystemRoleDeletePOST: (
    data: ISystemRoleDeletePOSTReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 查询所有角色
   */

  SystemRoleQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>[]> => {
    return request({
      url: `/system/role/queryAll`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 查询单个角色
   */

  SystemRoleQueryByIdGET: (
    data: ISystemRoleQueryByIdGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>> => {
    return request({
      url: `/system/role/queryById`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 查询角色以及对应的菜单信息
   */

  SystemRoleQueryDetailGET: (
    data: ISystemRoleQueryDetailGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IRoleMenuResponseVo>> => {
    return request({
      url: `/system/role/queryDetail`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 分页查询角色信息
   */

  SystemRoleQueryPagingPOST: (
    data: IRoleQueryRequestVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultJiaoSeXiangYingXinXi>> => {
    return request({
      url: `/system/role/queryPaging`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 角色管理接口 - 修改角色
   */

  SystemRoleUpdatePOST: (
    data: IRoleUpdateVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 代理系统管理 - 修改代理基础信息
   */

  SystemUpdateSummaryPOST: (
    data: IProxyBaseUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/updateSummary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户相关接口 - 修改用户密码
   */

  SystemUserChangePasswordPOST: (
    data: IUserPasswordRequestProxyVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/user/changePassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户相关接口 - 获取对应用户的角色信息
   */

  SystemUserGetRoleGET: (
    data: ISystemUserGetRoleGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>[]> => {
    return request({
      url: `/system/user/getRole`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户相关接口 - 获取用户角色和菜单信息
   */

  SystemUserGetRoleMenuGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserRoleMenuVo>> => {
    return request({
      url: `/system/user/getRoleMenu`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 添加或编辑
   */

  ThirdPartyPaymentAddOrUpdatePOST: (
    data: IThirdPayUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/thirdPartyPayment/addOrUpdate`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 删除
   */

  ThirdPartyPaymentDeleteGET: (
    data: IThirdPartyPaymentDeleteGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/thirdPartyPayment/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 详情
   */

  ThirdPartyPaymentDetailGET: (
    data: IThirdPartyPaymentDetailGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IThirdPayDetailResp>> => {
    return request({
      url: `/thirdPartyPayment/detail`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 三方支付管理 - 列表查询
   */

  ThirdPartyPaymentListPOST: (
    data: IThirdPayListReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IThirdPayListResp>[]> => {
    return request({
      url: `/thirdPartyPayment/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 新增会员
   */

  UserAddUserPOST: (
    data: IAddUserReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/addUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 银行卡 - 详情
   */

  UserBankCardDetailPOST: (
    data: IUserBankCardDetailReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankCardDetailResp>> => {
    return request({
      url: `/user/bankCard/detail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 编辑
   */

  UserBankCardUpdatePOST: (
    data: IUserBankCardUpdateReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/bankCard/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 银行卡
   */

  UserBankCardsPOST: (
    data: IUserBankCardQueryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserBankCardQueryResp>[]> => {
    return request({
      url: `/user/bankCards`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 子账号管理 - 添加子账号
   */

  UserChildAddPOST: (
    data: IAddChildReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/child/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 子账号管理 - 授权用户角色
   */

  UserChildAuthorizeRolePOST: (
    data: IUserRoleRequestVo={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/child/authorizeRole`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 子账号管理 - 查询子账号
   */

  UserChildQueryListPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyChildResp>> => {
    return request({
      url: `/user/child/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 禁用用户
   */

  UserDisableUserPOST: (
    data: IUpdateUserStatusReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/disableUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 批量禁用用户
   */

  UserDisableUserBatchPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/disableUser/batch`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 用户管理 - 启用用户
   */

  UserEnableUserPOST: (
    data: IUpdateUserStatusReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/enableUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 批量启用用户
   */

  UserEnableUserBatchPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/enableUser/batch`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 用户管理 - 封锁/解封用户
   */

  UserForbiddenUserPOST: (
    data: IXiuGaiYongHuFengJinZhuangTai={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/forbiddenUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏记录相关 - 导出excel
   */

  UserGameExportExcelGET: (
    data: IUserGameExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/game/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 游戏记录相关 - 游戏记录
   */

  UserGameGetRecordPOST: (
    data: IUserGameRecordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultUserGameRecordResp>> => {
    return request({
      url: `/user/game/getRecord`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 游戏记录相关 - 概况统计
   */

  UserGameSummaryPOST: (
    data: IGameSummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameSummaryResp>> => {
    return request({
      url: `/user/game/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 踢下线
   */

  UserKickUserPOST: (
    data: IUserIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/kickUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 修改用户标签
   */

  UserLabelUpdatePOST: (
    data: IUserLabelUpdate={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/label/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 关联账号
   */

  UserMatchPOST: (
    data: IUserIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserRelationAccountResp>[]> => {
    return request({
      url: `/user/match`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 查询用户账户
   */

  UserQueryPOST: (
    data: IUserIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserAccountResp>> => {
    return request({
      url: `/user/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 个人数据概况
   */

  UserQueryDataSummaryPOST: (
    data: IUserIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserDataSummary>> => {
    return request({
      url: `/user/queryDataSummary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 查询用户详情
   */

  UserQueryDetailPOST: (
    data: IUserIdReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserDetailResp>> => {
    return request({
      url: `/user/queryDetail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 查询用户列表
   */

  UserQueryListPOST: (
    data: IQueryUserListReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultUserResp>> => {
    return request({
      url: `/user/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 查询用户操作日志
   */

  UserQueryLogPOST: (
    data: IUserOperationLogReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOperationLogResp>> => {
    return request({
      url: `/user/queryLog`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 修改备注
   */

  UserReminderUpdatePOST: (
    data: IUserReminderUpdate={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/reminder/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 解锁密码错误限制
   */

  UserRemoveUserPwdErrCountPOST: (
    data: IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/removeUserPwdErrCount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 重置手机号
   */

  UserResetMobileNoPOST: (
    data: IResetMobileNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetMobileNo`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 重置登录密码
   */

  UserResetPasswordPOST: (
    data: IResetPasswordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetPassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 重置资金密码
   */

  UserResetSecretPasswordPOST: (
    data: IResetPasswordReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetSecretPassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户统计 - 导出excel
   */

  UserStatisticsExportExcelGET: (
    data: IUserStatisticsExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/statistics/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户统计 - 总用户信息
   */

  UserStatisticsInfoPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserStatisticsInfoResp>> => {
    return request({
      url: `/user/statistics/info`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 用户统计 - 记录
   */

  UserStatisticsListPOST: (
    data: IUserStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserStatisticsResp>[]> => {
    return request({
      url: `/user/statistics/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户管理 - 团队数据
   */

  UserTeamPOST: (
    data: ITeamStatisticsReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ITeamStatisticsResp>> => {
    return request({
      url: `/user/team`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: VIP管理 - 新增vip
   */

  VipManagementAddVipPOST: (
    data: IAddVipReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/vip/management/addVip`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: VIP管理 - 获取vip降级周期
   */

  VipManagementGetPeriodGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/vip/management/getPeriod`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: VIP管理 - 查询vip信息下拉
   */

  VipManagementQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/vip/management/queryAll`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: VIP管理 - 查询vip信息列表
   */

  VipManagementQueryListPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultVipManagementResp>> => {
    return request({
      url: `/vip/management/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: VIP管理 - 查询单条vip信息
   */

  VipManagementQueryOnePOST: (
    data: IQueryVipManagementReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IVipManagementVo>> => {
    return request({
      url: `/vip/management/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: VIP管理 - 更新vip降级周期
   */

  VipManagementUpdatePeriodPOST: (
    data: IUpdatePeriodReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/vip/management/updatePeriod`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: VIP管理 - 更新vip
   */

  VipManagementUpdateVipPOST: (
    data: IUpdateVipReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/vip/management/updateVip`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户彩金发放记录 - 导出excel
   */

  WinningsRecordExportExcelGET: (
    data: IWinningsRecordExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/record/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 用户彩金发放记录 - 彩金记录查询
   */

  WinningsRecordPagePOST: (
    data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultYongHuCaiJinFaFangJiLu>> => {
    return request({
      url: `/winnings/record/page`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户彩金发放记录 - 彩金审核
   */

  WinningsRecordReviewPOST: (
    data: IReviewUserWinningsRecordProxyReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/record/review`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 用户彩金发放记录 - 查询统计信息
   */

  WinningsRecordStatisticPOST: (
    data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICaiJinTongJiShuJuBossZhiDuiXiang>> => {
    return request({
      url: `/winnings/record/statistic`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 彩金规则配置控制器 - 删除配置
   */

  WinningsRuleDeletePOST: (
    data: ICaiJinPeiZhiChaXunDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/rule/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 彩金规则配置控制器 - 通过id获取配置
   */

  WinningsRuleGetPOST: (
    data: ICaiJinPeiZhiChaXunDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICaiJinGuiZePeiZhiXinXi>> => {
    return request({
      url: `/winnings/rule/get`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 彩金规则配置控制器 - 列表
   */

  WinningsRulePagePOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultCaiJinGuiZePeiZhiXinXi>> => {
    return request({
      url: `/winnings/rule/page`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 彩金规则配置控制器 - 保存配置
   */

  WinningsRuleSavePOST: (
    data: ICaiJinGuiZePeiZhiCanShuDuiXiang={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/rule/save`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 获取数字货币提币配置
   */

  WithdrawConfigGetDigitalByCodeChainPOST: (
    chain:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/withdraw/config/getDigital/${chain}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 获取法币提现配置
   */

  WithdrawConfigGetLegerByCodeCurrencyCodePOST: (
    currencyCode:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/withdraw/config/getLeger/${currencyCode}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 设置数字货币提币配置
   */

  WithdrawConfigSetDigitalPOST: (
    data: IWithdrawInfoResp={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/config/setDigital`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 设置提现配置
   */

  WithdrawConfigSetLegerPOST: (
    data: IWithdrawInfoResp={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/config/setLeger`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现成功回调
   */

  WithdrawDigitalCallbackPOST: (
    data: IWithdrawCallbackReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/callback`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 审核通过
   */

  WithdrawDigitalCheckPassPOST: (
    data: IWithdrawNoChannelTypeReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/checkPass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 审核拒绝
   */

  WithdrawDigitalCheckRefusePOST: (
    data: IWithdrawRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/checkRefuse`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提币记录 - 导出excel
   */

  WithdrawDigitalExportExcelGET: (
    data: IWithdrawDigitalExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现失败
   */

  WithdrawDigitalFailPOST: (
    data: IWithdrawRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/fail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 收款信息
   */

  WithdrawDigitalGetCardPOST: (
    data: IDepositNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositBankCardResp>[]> => {
    return request({
      url: `/withdraw/digital/getCard`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提币记录
   */

  WithdrawDigitalListPOST: (
    data: IWithdrawReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultWithdrawResp>> => {
    return request({
      url: `/withdraw/digital/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 手动发起提现支付重试
   */

  WithdrawDigitalManualReTryWithdrawPOST: (
    data: IWithdrawNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/manualReTryWithdraw`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 代理处理订单数量
   */

  WithdrawDigitalPendingCountPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/pendingCount`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现成功（仅线下转账方式）
   */

  WithdrawDigitalSuccessPOST: (
    data: IWithdrawNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/success`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 汇总信息
   */

  WithdrawDigitalSummaryPOST: (
    data: IDepositSummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawSummaryResp>> => {
    return request({
      url: `/withdraw/digital/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 确认提现
   */

  WithdrawDigitalWithdrawConfirmPOST: (
    data: IWithdrawNoChannelTypeReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/withdrawConfirm`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提现/币限制 - 调整
   */

  WithdrawLimitAdjustPOST: (
    data: IAdjustWithdrawLimitReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/limit/adjust`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 工单 - 待理处理订单数量
   */

  WorkOrderPendingCountPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPendingCountResp>> => {
    return request({
      url: `/work/order/pendingCount`,
      method: "POST",
            ...config
    });
  }  };
