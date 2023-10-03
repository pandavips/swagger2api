/* eslint-disable */
// @ts-nocheck

/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */

import request from "./request";

export default {
  /**
  * @description: 账户相关-添加调账
    req =>>  IAdjustAddReq {
      accountType: number //出金账户类型 1:普通账户 4:借款账户 
      amount: number //入金数量 
      currency: string //币种 
      fromUid: number //出金用户编号 当出金账户类型为1时必须传值 
      toUid: number //入金用户编号 
    }
  */
  Boss_Account_AddAdjustPost: (data: IAdjustAddReq = {}): Promise<null> => {
    return request({
      url: `/boss/account/addAdjust`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 登入登出接口-检查踢出信息
   */
  Boss_Account_CheckKickOutGet: (): Promise<null> => {
    return request({
      url: `/boss/account/checkKickOut`,
      method: "GET",
    });
  },
  /**
   * @description: 登入登出接口-检查踢出信息
   */
  Boss_Account_CheckKickOutPost: (): Promise<null> => {
    return request({
      url: `/boss/account/checkKickOut`,
      method: "POST",
    });
  },
  /**
  * @description: 账户相关-平台账户（归集地址）
    res =>>  ICollectionAccountResp {
      bscUsdtAmount: number //usdt-bsc 
      trcUsdtAmount: number //usdt-trc 
    }
  */
  Boss_Account_CollectionAccountGet: (): Promise<ICollectionAccountResp> => {
    return request({
      url: `/boss/account/collectionAccount`,
      method: "GET",
    });
  },
  /**
  * @description: 账户相关-头寸余额
    res =>>  IHotAccountResp {
      bscAmount: number //头寸币安币余额 
      tronAmount: number //头寸波场币余额 
      usdtAmount: number //头寸USDT余额 
      usdtAmountBsc: number //币安USDT余额 
    }
  */
  Boss_Account_HotAccountGet: (): Promise<IHotAccountResp> => {
    return request({
      url: `/boss/account/hotAccount`,
      method: "GET",
    });
  },
  /**
  * @description: 登入登出接口-登入接口
    req =>>  ILoginRequestVo {
      accountId: string //账户编号 
      googleCode: string //谷歌验证码 
      password: string //账户密码 
    }
    res =>>  ILoginVo {
      token: string //登录令牌 
      userInfo: IUserInfo[] //用户信息 
    }
  */
  Boss_Account_LoginPost: (data: ILoginRequestVo = {}): Promise<ILoginVo> => {
    return request({
      url: `/boss/account/login`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 登入登出接口-登出接口
   */
  Boss_Account_LogoutGet: (): Promise<null> => {
    return request({
      url: `/boss/account/logout`,
      method: "GET",
    });
  },
  /**
   * @description: 登入登出接口-登出接口
   */
  Boss_Account_LogoutPost: (): Promise<null> => {
    return request({
      url: `/boss/account/logout`,
      method: "POST",
    });
  },
  /**
  * @description: 账户相关-平台账户 - 手续费余额
    res =>>  IPlatformAccountResp {
      feeCNY: number //手续费账户(CNY) 
      feeUSDT: number //手续费账户(USDT)，这是充U的手续费 
    }
  */
  Boss_Account_PlatformGet: (): Promise<IPlatformAccountResp> => {
    return request({
      url: `/boss/account/platform`,
      method: "GET",
    });
  },
  /**
  * @description: 账户相关-查询调账信息
    req =>>  IAdjustQueryReq {
      fromUid: number //出金账户 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      toUid: number //入金账户 
    }
    res =>>  IPageResultAdjustQueryResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IAdjustQueryResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Account_QueryAdjustPost: (data: IAdjustQueryReq = {}): Promise<IPageResultAdjustQueryResp> => {
    return request({
      url: `/boss/account/queryAdjust`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 账户相关-盘内实时余额
    res =>>  IAccountCurrentTotalResp {
      accountBalance: number //盘内余额(不包括游戏账户和冻结余额) 
      accountTotal: number //盘内总余额(包括冻结余额, 不包括游戏账户) 
      channelBalance: number //游戏账户余额 
    }
    req =>>  IQueryCurrentAccountTotalReq {
      userId: number //代理商/包网商编号，全部传0 
    }
  */
  Boss_Account_Statistics_Balance_CurrentPost: (data: IQueryCurrentAccountTotalReq = {}): Promise<IAccountCurrentTotalResp> => {
    return request({
      url: `/boss/account/statistics/balance/current`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 账户相关-盘内历史余额
    req =>>  IQueryAccountTotalReq {
      end: string //结束日期 
      start: string //起始日期 
      userId: number //代理商包网商编号,全部传0 
    }
  */
  Boss_Account_Statistics_Balance_HistoryPost: (data: IQueryAccountTotalReq = {}): Promise<IAccountDailyTotalResp[]> => {
    return request({
      url: `/boss/account/statistics/balance/history`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 账户相关-单个用户余额
    res =>>  IUserAccountBalanceResp {
      amountCNY: number //cny余额 
      amountUSDT: number //usdt余额 
    }
    req =>>  IUserNoReq {
      userNo: number //用户编号 
    }
  */
  Boss_Account_UserBalancePost: (data: IUserNoReq = {}): Promise<IUserAccountBalanceResp> => {
    return request({
      url: `/boss/account/userBalance`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 账户资金变动记录-资金变动记录 - 导出excel
    req =>>  IBossassetChangeLogexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户编号 
      proxyUid: number //包网商编号 
      type: string //类型 
      start: string //交易时间开始 
      end: string //交易时间结束 
    }
  */
  Boss_AssetChangeLog_ExportExcelGet: (data: IBossassetChangeLogexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/assetChangeLog/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 账户资金变动记录-资金变动记录
    req =>>  IAssetChangeLogReq {
      end: string //交易时间结束 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //包网商编号 
      start: string //交易时间开始 
      type: string //类型 
      userId: number //用户编号 
    }
    res =>>  IPageResultAssetChangeLogResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IAssetChangeLogResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_AssetChangeLog_ListPost: (data: IAssetChangeLogReq = {}): Promise<IPageResultAssetChangeLogResp> => {
    return request({
      url: `/boss/assetChangeLog/list`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 账户资金变动记录-下拉类型
   */
  Boss_AssetChangeLog_TypeGet: (): Promise<IAssetChangeLogType[]> => {
    return request({
      url: `/boss/assetChangeLog/type`,
      method: "GET",
    });
  },
  /**
  * @description: 银行卡管理-删除
    req =>>  IBankCardDeleteReq {
      bizCardCode: string //业务卡号，更新或查看时，必传 
    }
  */
  Boss_Bank_Card_DeletePost: (data: IBankCardDeleteReq = {}): Promise<null> => {
    return request({
      url: `/boss/bank/card/delete`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行卡管理-详情
    req =>>  IBankCardDetailReq {
      bizCardCode: string //业务卡号，更新或查看时，必传 
    }
    res =>>  IBankCardDetailResp {
      bankName: string //银行名称 
      bankNameEn: string //银行英文名称 
      bankNamePh: string //银行菲律宾名称 
      bankNameTh: string //银行泰语名称 
      bankNameVn: string //银行越南名称 
      currencyCode: string //法币，都好分割 
      props: IBankCardDetailPropResp[] //其他属性 
      status: number //状态：1 可用；0 不可用 
    }
  */
  Boss_Bank_Card_DetailPost: (data: IBankCardDetailReq = {}): Promise<IBankCardDetailResp> => {
    return request({
      url: `/boss/bank/card/detail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行卡管理-查询
    req =>>  IBankCardQueryReq {
      end: string //结束时间 
      start: string //开始时间 
      status: number //状态：1 可用；0 不可用 
    }
  */
  Boss_Bank_Card_QueryPost: (data: IBankCardQueryReq = {}): Promise<IBankCardQueryResp[]> => {
    return request({
      url: `/boss/bank/card/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行卡管理-添加或编辑
    req =>>  IBankCardUpdateReq {
      bankName: string //银行名称 
      bizCardCode: string //业务卡号，更新或查看时，必传 
      currencyCode: string //法币，顿号（、）分割 
      props: IBankCardUpdatePropReq[] //其他属性 
      status: number //状态：1 可用；0 不可用 
    }
  */
  Boss_Bank_Card_UpdatePost: (data: IBankCardUpdateReq = {}): Promise<null> => {
    return request({
      url: `/boss/bank/card/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行管理-详情
    res =>>  IBankDetailResp {
      bankName: string //银行名称 
      bankNameEn: string //银行英文名称 
      bankNamePh: string //银行菲律宾名称 
      bankNameTh: string //银行泰语名称 
      bankNameVn: string //银行越南名称 
      props: IYinHangShuXingQingQiu[] //其他属性 
    }
    req =>>  IBankQueryReq {
      bankName: string //银行名称 
    }
  */
  Boss_Bank_DetailPost: (data: IBankQueryReq = {}): Promise<IBankDetailResp> => {
    return request({
      url: `/boss/bank/detail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行管理-查询
    req =>>  IBankQueryReq {
      bankName: string //银行名称 
    }
  */
  Boss_Bank_QueryPost: (data: IBankQueryReq = {}): Promise<IBankQueryResp[]> => {
    return request({
      url: `/boss/bank/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 银行管理-添加或编辑
    req =>>  IYinHangShuXingQingQiu {
      bankName: string //银行名称 
      bankNameEn: string //银行英文名称 
      bankNamePh: string //银行菲律宾名称 
      bankNameTh: string //银行泰语名称 
      bankNameVn: string //银行越南名称 
      propCode: string //字段编码 
      propDesc: string //说明文案 
      propLen: number //长度限制 
      propName: string //字段名 
      propNameEn: string //字段名英文名称 
      propNamePh: string //字段名菲律宾名称 
      propNameTh: string //字段名泰语名称 
      propNameVn: string //字段名越南名称 
      propRequired: number //是否必填 1:是 0:否 
      props: IZiDuanMingShuXingQingQiu[] //银行属性 
      updateTime: string //更新时间 
    }
  */
  Boss_Bank_UpdatePost: (data: IYinHangShuXingQingQiu = {}): Promise<null> => {
    return request({
      url: `/boss/bank/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 包网商分红配置-获取分红配置信息
    res =>>  IFenHongPeiZhiXiangQing {
      bonusCnf: IFenHongPeiZhi[] //没有提供描述 
      items: IFenHongPeiZhiMingXi[] //没有提供描述 
    }
    req =>>  IHuoQuFenHongPeiZhiCanShuDuiXiang {
      proxyUid: number //包网商id 
    }
  */
  Boss_Bonus_Config_GetPost: (data: IHuoQuFenHongPeiZhiCanShuDuiXiang = {}): Promise<IFenHongPeiZhiXiangQing> => {
    return request({
      url: `/boss/bonus/config/get`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 包网商分红配置-通过userId获取分红配置明细
   */
  Boss_Bonus_Config_GetItems_$userId$Post: (code: string = ""): Promise<IFenHongPeiZhiMingXi[]> => {
    return request({
      url: `/boss/bonus/config/getItems/${code}`,
      method: "POST",
    });
  },
  /**
  * @description: 包网商分红配置-保存分红配置信息
    req =>>  IBianJiFenHongPeiZhiCanShuDuiXiang {
      bonusCnf: IFenHongPeiZhiXinXi[] //分红配置信息 
      items: IFenHongPeiZhiMingXi[] //分红配置明细 
    }
  */
  Boss_Bonus_Config_SavePost: (data: IBianJiFenHongPeiZhiCanShuDuiXiang = {}): Promise<null> => {
    return request({
      url: `/boss/bonus/config/save`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 渠道充提信息接口-汇总信息
    req =>>  IChannelDepostWithdrawSummaryReq {
      end: string //结束日期 
      proxyUserId: number //代理商包网商编号,全部传0 
      start: string //开始日期 
    }
    res =>>  IChannelDepostWithdrawSummaryResp {
      depositAmount: number //充值金额（原始币种） 
      depositBaseAmount: number //充值金额（基础币种，已扣手续费） 
      withdrawAmount: number //提现金额（原始币种） 
      withdrawBaseAmount: number //提现金额（基础币种，已扣手续费） 
    }
  */
  Boss_Channel_Deposit_Withdraw_SummaryPost: (data: IChannelDepostWithdrawSummaryReq = {}): Promise<IChannelDepostWithdrawSummaryResp> => {
    return request({
      url: `/boss/channel/deposit/withdraw/summary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 补偿渠道拉取游戏-拉取
    req =>>  IFetchGameRecordReq {
      channelId: string //渠道编号 
      end: number //结束时间 
      start: number //起始时间 
    }
  */
  Boss_Channel_Fetch_Game_ActionPost: (data: IFetchGameRecordReq = {}): Promise<null> => {
    return request({
      url: `/boss/channel/fetch/game/action`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 补偿渠道拉取游戏-拉取周期聚合
    req =>>  IFetchGameRecordReq {
      channelId: string //渠道编号 
      end: number //结束时间 
      start: number //起始时间 
    }
  */
  Boss_Channel_Fetch_Game_ActionPeriodPost: (data: IFetchGameRecordReq = {}): Promise<null> => {
    return request({
      url: `/boss/channel/fetch/game/actionPeriod`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 渠道汇率-删除
    req =>>  IChannelRateUpdateReq {
      currencyCode: string //币种 
      rate: number //汇率 
    }
  */
  Boss_Channel_Rate_DeletePost: (data: IChannelRateUpdateReq = {}): Promise<null> => {
    return request({
      url: `/boss/channel/rate/delete`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 渠道汇率-汇率列表
   */
  Boss_Channel_Rate_ListPost: (): Promise<IChannelRateResp[]> => {
    return request({
      url: `/boss/channel/rate/list`,
      method: "POST",
    });
  },
  /**
  * @description: 渠道汇率-新增或更新
    req =>>  IChannelRateUpdateReq {
      currencyCode: string //币种 
      rate: number //汇率 
    }
  */
  Boss_Channel_Rate_UpdatePost: (data: IChannelRateUpdateReq = {}): Promise<null> => {
    return request({
      url: `/boss/channel/rate/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-添加公告
    req =>>  IAddArticleReq {
      content: string //内容(最大不能超过2000) 
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      status: number //状态 1:启用 0:禁用 
      title: string //标题(最大不能超过64) 
    }
  */
  Boss_Cms_Article_AddPost: (data: IAddArticleReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/article/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-停用公告
    req =>>  IArticleIdReq {
      articleNo: string //公告编号 
    }
  */
  Boss_Cms_Article_DisablePost: (data: IArticleIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/article/disable`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-启用公告
    req =>>  IArticleIdReq {
      articleNo: string //公告编号 
    }
  */
  Boss_Cms_Article_PublishPost: (data: IArticleIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/article/publish`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-查询公告列表
    res =>>  IPageResultArticleResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IArticleResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryArticleReq {
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      status: number //状态 1:启用 0:禁用 
      title: string //标题 
    }
  */
  Boss_Cms_Article_QueryListPost: (data: IQueryArticleReq = {}): Promise<IPageResultArticleResp> => {
    return request({
      url: `/boss/cms/article/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-查询公告详情
    req =>>  IArticleIdReq {
      articleNo: string //公告编号 
    }
    res =>>  IArticleResp {
      articleNo: string //公告编号 
      content: string //内容 
      createTime: string //创建时间 
      lang: string //语言 
      status: number //状态 1:启用 0:禁用 
      title: string //标题 
      updateTime: string //更新时间 
    }
  */
  Boss_Cms_Article_QueryOnePost: (data: IArticleIdReq = {}): Promise<IArticleResp> => {
    return request({
      url: `/boss/cms/article/queryOne`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 公告管理-修改公告
    req =>>  IUpdateArticleReq {
      articleNo: string //公告编号 
      content: string //内容(最大不能超过2000) 
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      status: number //状态 1:启用 0:禁用 
      title: string //标题(最大不能超过64) 
    }
  */
  Boss_Cms_Article_UpdatePost: (data: IUpdateArticleReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/article/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-添加横幅
    req =>>  IAddBannerReq {
      fileNo: string //文件编号 
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      status: number //状态 1:启用 0:禁用 
      url: string //链接(最大不能超过256) 
    }
  */
  Boss_Cms_Banner_AddPost: (data: IAddBannerReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/banner/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-停用横幅
    req =>>  IBannerNoReq {
      bannerNo: string //横幅编号 
    }
  */
  Boss_Cms_Banner_DisablePost: (data: IBannerNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/banner/disable`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-启用横幅
    req =>>  IBannerNoReq {
      bannerNo: string //横幅编号 
    }
  */
  Boss_Cms_Banner_PublishPost: (data: IBannerNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/banner/publish`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-查询横幅列表
    res =>>  IPageResultBannerResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IBannerResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryBannerReq {
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      status: number //状态 1:启用 0:禁用 
    }
  */
  Boss_Cms_Banner_QueryListPost: (data: IQueryBannerReq = {}): Promise<IPageResultBannerResp> => {
    return request({
      url: `/boss/cms/banner/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-查询横幅详情
    req =>>  IBannerNoReq {
      bannerNo: string //横幅编号 
    }
    res =>>  IBannerResp {
      bannerNo: string //横幅编号 
      createTime: string //创建时间 
      fileNo: string //横幅文件 
      fileUrl: string //横幅文件地址 
      lang: string //语言 
      status: number //状态 1:启用 0:禁用 
      updateTime: string //更新时间 
      url: string //横幅点击跳转链接 
    }
  */
  Boss_Cms_Banner_QueryOnePost: (data: IBannerNoReq = {}): Promise<IBannerResp> => {
    return request({
      url: `/boss/cms/banner/queryOne`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: banner管理-修改横幅
    req =>>  IUpdateBannerReq {
      bannerNo: string //横幅编号 
      fileNo: string //文件编号 
      lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH 
      status: number //状态 1:启用 0:禁用 
      url: string //链接(最大不能超过256) 
    }
  */
  Boss_Cms_Banner_UpdatePost: (data: IUpdateBannerReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/banner/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 标签管理-新增用户标签
    req =>>  IUserLabelReq {
      labelName: string //标签名称 
      weight: number //排序权重 
    }
  */
  Boss_Cms_Label_AddPost: (data: IUserLabelReq = {}): Promise<null> => {
    return request({
      url: `/boss/cms/label/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 标签管理-删除用户标签
    req =>>  IBosscmslabeldeleteQueryParams {
      labelCode: string //标签编码 
    }
  */
  Boss_Cms_Label_DeleteGet: (data: IBosscmslabeldeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/cms/label/delete`,
      method: "GET",
      params: data,
    });
  },
  /**
   * @description: 标签管理-查询所有用户标签
   */
  Boss_Cms_Label_QueryAllGet: (): Promise<IUserLabelResp[]> => {
    return request({
      url: `/boss/cms/label/queryAll`,
      method: "GET",
    });
  },
  /**
  * @description: 标签管理-编辑用户标签
    req =>>  IUserLabelUpdate {
      labelCode: string //用户标签编码 
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_Cms_Label_UpdatePost: (data: IUserLabelUpdate = {}): Promise<null> => {
    return request({
      url: `/boss/cms/label/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 归集管理-获取归集配置信息
    res =>>  ICollectResp {
      collectAddress: string //波场归集地址 
      collectAddressBsc: string //币安归集地址 
      hotAddress: string //波场头寸地址 
      hotAddressBsc: string //币安头寸地址 
      minAmount: number //最小归集金额 
      period: number //归集周期(小时) 
    }
  */
  Boss_Collect_GetGet: (): Promise<ICollectResp> => {
    return request({
      url: `/boss/collect/get`,
      method: "GET",
    });
  },
  /**
  * @description: 归集管理-更新归集地址
    req =>>  IAddressReq {
      address: string //地址 
      chain: string //链 币安:BSC 波场:TRON 
    }
  */
  Boss_Collect_UpdateCollectPost: (data: IAddressReq = {}): Promise<null> => {
    return request({
      url: `/boss/collect/updateCollect`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 归集管理-更新归集配置
    req =>>  ICollectReq {
      minAmount: number //最小归集金额 
      period: number //归集周期(小时) 
    }
  */
  Boss_Collect_UpdateConfigPost: (data: ICollectReq = {}): Promise<null> => {
    return request({
      url: `/boss/collect/updateConfig`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 归集管理-更新头寸
    req =>>  IPrivateKeyReq {
      chain: string //链 币安:BSC 波场:TRON 
      privateKey: string //私钥 
    }
  */
  Boss_Collect_UpdateHotPost: (data: IPrivateKeyReq = {}): Promise<null> => {
    return request({
      url: `/boss/collect/updateHot`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 日志相关接口-日志记录 - 导出excel
    req =>>  IBosscommonlogoperateexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户编号 
      userAccount: string //用户账号 
      operationBiz: string //系统模块 
      operationType: string //操作类型 
      remark: string //操作内容 
      start: string //开始时间 
      end: string //结束时间 
    }
  */
  Boss_Common_Log_Operate_ExportExcelGet: (data: IBosscommonlogoperateexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/common/log/operate/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 日志相关接口-查询操作日志信息
    req =>>  IOperationLogReq {
      end: string //结束时间 
      operationBiz: string //系统模块 
      operationType: string //操作类型 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      remark: string //操作内容 
      start: string //开始时间 
      userAccount: string //用户账号 
      userId: number //用户编号 
    }
    res =>>  IPageResultOperationLogVo {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IOperationLogVo[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Common_Log_Operate_ListPost: (data: IOperationLogReq = {}): Promise<IPageResultOperationLogVo> => {
    return request({
      url: `/boss/common/log/operate/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 日志相关接口-查询审核日志信息
    req =>>  ICheckLogRequestVo {
      bizCode: string //业务代码 WITHDRAW_COIN 提币  USER_CERT_AUTH  实名认证 
      bizId: string //业务编号 
    }
  */
  Boss_Common_Log_QueryCheckLogPost: (data: ICheckLogRequestVo = {}): Promise<ICheckLogVo[]> => {
    return request({
      url: `/boss/common/log/queryCheckLog`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 系统币种-基础币种
   */
  Boss_Currency_GetPost: (): Promise<string> => {
    return request({
      url: `/boss/currency/get`,
      method: "POST",
    });
  },
  /**
  * @description: 币种管理-查询
    req =>>  ICurrencyQueryReq {
      end: string //结束时间 
      keyword: string //币种中文/代码 
      start: string //开始时间 
      status: number //状态：1 可用；0 不可用 
    }
  */
  Boss_Currency_QueryPost: (data: ICurrencyQueryReq = {}): Promise<IBiZhongChaXunFanHuiXinXi[]> => {
    return request({
      url: `/boss/currency/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 币种管理-添加或编辑
    req =>>  IBiZhongGengXinQingQiuXinXi {
      code: string //币种代码 
      country: string //汇率 
      name: string //币种名称 
      rate: number //汇率 
      status: number //状态：1 可用；0 不可用 
    }
  */
  Boss_Currency_UpdatePost: (data: IBiZhongGengXinQingQiuXinXi = {}): Promise<null> => {
    return request({
      url: `/boss/currency/update`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 币种管理-USDT汇率
   */
  Boss_Currency_Usdt_RatePost: (): Promise<number> => {
    return request({
      url: `/boss/currency/usdt/rate`,
      method: "POST",
    });
  },
  /**
  * @description: 币种管理-添加或编辑USDT汇率
    req =>>  IUSDTGengXinQingQiuXinXi {
      rate: number //汇率 
    }
  */
  Boss_Currency_Usdt_UpdatePost: (data: IUSDTGengXinQingQiuXinXi = {}): Promise<null> => {
    return request({
      url: `/boss/currency/usdt/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 日常数据-充/提数据统计
    req =>>  IDailyStatisticsReq {
      end: string //结束日期 
      start: string //起始日期 
      userId: number //代理商包网商编号,全部传0 
    }
    res =>>  IProxyDailyStatResp {
      depositCount: number //充值笔数 
      firstDeposit: number //首存人数 
      secondDeposit: number //二存人数 
      withdrawCount: number //提现笔数 
      withdrawUserCount: number //提现人数 
    }
  */
  Boss_Daily_Statistics_DepositWithdrawPost: (data: IDailyStatisticsReq = {}): Promise<IProxyDailyStatResp> => {
    return request({
      url: `/boss/daily/statistics/depositWithdraw`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 日常数据-充值/提现人数查询
    req =>>  IDailyStatisticsReq {
      end: string //结束日期 
      start: string //起始日期 
      userId: number //代理商包网商编号,全部传0 
    }
  */
  Boss_Daily_Statistics_DepositWithdrawUserCountPost: (data: IDailyStatisticsReq = {}): Promise<IDepositUserCountResp[]> => {
    return request({
      url: `/boss/daily/statistics/depositWithdrawUserCount`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 日常数据-注册和活跃数据
    req =>>  IDailyStatisticsReq {
      end: string //结束日期 
      start: string //起始日期 
      userId: number //代理商包网商编号,全部传0 
    }
    res =>>  IUserActionStatisticsResp {
      activityCount: number //活跃用户数 
      activityData: IUserActivityDaily[] //活跃用户折线数据 
      registerCount: number //注册用户数 
      registerData: IUserActivityDaily[] //注册用户折线数据 
    }
  */
  Boss_Daily_Statistics_UserActionPost: (data: IDailyStatisticsReq = {}): Promise<IUserActionStatisticsResp> => {
    return request({
      url: `/boss/daily/statistics/userAction`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币信息-审核通过
    req =>>  IDepositNoReq {
      depositNo: string //充值单号 
    }
  */
  Boss_Deposit_CheckPassPost: (data: IDepositNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/deposit/checkPass`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币信息-审核拒绝
    req =>>  IDepositRefuseReq {
      depositNo: string //充值单号 
      refuseDesc: string //拒绝理由 
    }
  */
  Boss_Deposit_CheckRefusePost: (data: IDepositRefuseReq = {}): Promise<null> => {
    return request({
      url: `/boss/deposit/checkRefuse`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币和充值配置-获取数字货币充币配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Deposit_Config_GetDigital_$chain$Post: (code: string = ""): Promise<IWithdrawInfoResp> => {
    return request({
      url: `/boss/deposit/config/getDigital/${code}`,
      method: "POST",
    });
  },
  /**
  * @description: 充币和充值配置-获取法币充值配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Deposit_Config_GetLeger_$currencyCode$Post: (code: string = ""): Promise<IWithdrawInfoResp> => {
    return request({
      url: `/boss/deposit/config/getLeger/${code}`,
      method: "POST",
    });
  },
  /**
  * @description: 充币和充值配置-设置数字货币充币配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Deposit_Config_SetDigitalPost: (data: IWithdrawInfoResp = {}): Promise<null> => {
    return request({
      url: `/boss/deposit/config/setDigital`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币和充值配置-设置提现配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Deposit_Config_SetLegerPost: (data: IWithdrawInfoResp = {}): Promise<null> => {
    return request({
      url: `/boss/deposit/config/setLeger`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币信息-充币记录 - 导出excel
    req =>>  IBossdepositexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      status: number //状态：0:待审核 1:审核通过 2:审核拒绝 
      userId: number //用户编号 
      userAccount: string //用户账号 
      depositNo: number //订单编号 
      currencyType: number //充值类型:1 数字货币；2 法币 
      fromAddress: string //充币地址 
      start: string //交易时间开始 
      end: string //交易时间结束 
      proxyUserId: number //代理ID 
      proxyUserAccount: string //包网商帐号 
      parentId: number //上级代理ID 
      parentAccount: string //上级代理帐号 
    }
  */
  Boss_Deposit_ExportExcelGet: (data: IBossdepositexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/deposit/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 充币信息-收款信息
    req =>>  IDepositNoReq {
      depositNo: string //充值单号 
    }
  */
  Boss_Deposit_GetCardPost: (data: IDepositNoReq = {}): Promise<IDepositBankCardResp[]> => {
    return request({
      url: `/boss/deposit/getCard`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币信息-充币记录
    req =>>  IDepositQueryReq {
      currencyType: number //充值类型:1 数字货币；2 法币 
      depositNo: number //订单编号 
      end: string //交易时间结束 
      fromAddress: string //充币地址 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      parentAccount: string //上级代理帐号 
      parentId: number //上级代理ID 
      proxyUserAccount: string //包网商帐号 
      proxyUserId: number //代理ID 
      start: string //交易时间开始 
      status: number //状态：0:待审核 1:审核通过 2:审核拒绝 
      userAccount: string //用户账号 
      userId: number //用户编号 
    }
    res =>>  IPageResultDepositQueryResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IDepositQueryResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Deposit_ListPost: (data: IDepositQueryReq = {}): Promise<IPageResultDepositQueryResp> => {
    return request({
      url: `/boss/deposit/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 充币信息-汇总信息
    req =>>  IDepositSummaryReq {
      end: string //结束日期 
      proxyUserId: number //代理商包网商编号,全部传0 
      start: string //开始日期 
    }
    res =>>  IDepositSummaryResp {
      depositAmount: number //总存款 
      depositDigitalAmount: number //USDT存款 
      depositLegalAmount: number //法币存款 
    }
  */
  Boss_Deposit_SummaryPost: (data: IDepositSummaryReq = {}): Promise<IDepositSummaryResp> => {
    return request({
      url: `/boss/deposit/summary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 手续费-手续费
    req =>>  IFeeStatisticsReq {
      end: string //结束日期 
      proxyUserId: number //代理商包网商编号,全部传null 
      start: string //起始日期 
    }
    res =>>  IFeeStatisticsResp {
      digitalFee: number //USDT手续费 
      fee: number //手续费 
      legalFee: number //法币手续费 
    }
  */
  Boss_Fee_Statistics_FeePost: (data: IFeeStatisticsReq = {}): Promise<IFeeStatisticsResp> => {
    return request({
      url: `/boss/fee/statistics/fee`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 文件上传下载-下载文件
   */
  Boss_File_Download_$fileNo$Get: (code: string = ""): Promise<null> => {
    return request({
      url: `/boss/file/download/${code}`,
      method: "GET",
      params: data,
    });
  },
  /**
   * @description: 文件上传下载-下载文件
   */
  Boss_File_Download_$fileNo$Post: (code: string = ""): Promise<null> => {
    return request({
      url: `/boss/file/download/${code}`,
      method: "POST",
      params: data,
    });
  },
  /**
  * @description: 文件上传下载-上传文件
    res =>>  IUploadResultResp {
      fileName: string //文件名称 
      fileNo: string //文件编号 
      fileSize: string //文件大小 
      fileType: number //文件类型 2:图片 3:语音 4:视频 5:PDF文件 6:其他文件 
      url: string //文件全路径,用于展示 
    }
  */
  Boss_File_UploadPost: (data: FormData = {}): Promise<IUploadResultResp> => {
    return request({
      url: `/boss/file/upload`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 基础游戏相关-查询所有可用的游戏
    req =>>  IBaseGameReq {
      channelName: string //游戏渠道名称 
      factoryCode: string //厂商 
      gameName: string //游戏名 
    }
  */
  Boss_Game_Base_QueryPost: (data: IBaseGameReq = {}): Promise<IBaseGameResp[]> => {
    return request({
      url: `/boss/game/base/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 基础游戏相关-分页查询游戏基础库
    req =>>  IBaseGameListReq {
      channelId: string //游戏渠道编号 
      factoryCode: string //厂商编码 
      gameName: string //游戏名称 
      gameType: number //所属类型 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
    }
    res =>>  IPageResultBaseGameListResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IBaseGameListResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Base_QueryListPost: (data: IBaseGameListReq = {}): Promise<IPageResultBaseGameListResp> => {
    return request({
      url: `/boss/game/base/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 基础游戏相关-修改游戏图标
    req =>>  IUpdateGameIconReq {
      gameId: number //游戏id 
      icon: string //游戏icon 
      icon2: string //游戏icon 
      icon3: string //游戏icon 
    }
  */
  Boss_Game_Base_UpdateIconPost: (data: IUpdateGameIconReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/base/updateIcon`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 基础游戏相关-设置游戏标签
    req =>>  IUpdateGameLabelReq {
      ids: number[] //游戏id 
      label: string //游戏类型 
    }
  */
  Boss_Game_Base_UpdateLabelPost: (data: IUpdateGameLabelReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/base/updateLabel`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 基础游戏相关-批量/修改游戏类型
    req =>>  IUpdateGameTypeReq {
      gameIds: number[] //游戏id集合 
      gameType: number //游戏类型 
    }
  */
  Boss_Game_Base_UpdateTypePost: (data: IUpdateGameTypeReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/base/updateType`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏渠道相关-修改渠道logo
    req =>>  IChangeLogoReq {
      factoryCode: string //厂商编号 
      icon: string //渠道logo 
    }
  */
  Boss_Game_Channel_ChangeLogoPost: (data: IChangeLogoReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/channel/changeLogo`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 游戏渠道相关-查询游戏类型信息
   */
  Boss_Game_Channel_GameType_QueryAllPost: (): Promise<IChannelTypeResp[]> => {
    return request({
      url: `/boss/game/channel/gameType/queryAll`,
      method: "POST",
    });
  },
  /**
   * @description: 游戏渠道相关-查询渠道
   */
  Boss_Game_Channel_QueryAllPost: (): Promise<IGameChannelSummary[]> => {
    return request({
      url: `/boss/game/channel/queryAll`,
      method: "POST",
    });
  },
  /**
  * @description: 游戏渠道相关-查询渠道详情
    req =>>  IChannelIdReq {
      channelId: string //渠道编号 
    }
    res =>>  IGameChannelResp {
      channelId: string //渠道编号 
      channelName: string //渠道名称 
      createTime: string //创建时间 
      gameCount: number //游戏个数 
      icon: string //渠道logo 
      iconUrl: string //icon链接 
      scoreRate: number //游戏积分比 
      typeCount: number //类型个数 
      updateTime: string //更新时间 
    }
  */
  Boss_Game_Channel_QueryDetailPost: (data: IChannelIdReq = {}): Promise<IGameChannelResp> => {
    return request({
      url: `/boss/game/channel/queryDetail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏渠道相关-查询渠道列表
    res =>>  IPageResultGameChannelResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IGameChannelResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryGameChannelReq {
      channelName: string //渠道名称 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
    }
  */
  Boss_Game_Channel_QueryListPost: (data: IQueryGameChannelReq = {}): Promise<IPageResultGameChannelResp> => {
    return request({
      url: `/boss/game/channel/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏记录相关-导出excel
    req =>>  IBossgameexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      factoryCode: string //游戏渠道 
      typeId: number //游戏类型id 
      start: number //开始时间 
      end: number //结束时间 
      userId: number //用户编号 
      userName: string //用户名 
    }
  */
  Boss_Game_ExportExcelGet: (data: IBossgameexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 游戏厂商相关-修改厂商logo
    req =>>  IChangeLogoReq {
      factoryCode: string //厂商编号 
      icon: string //渠道logo 
    }
  */
  Boss_Game_Factory_ChangeLogoPost: (data: IChangeLogoReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/factory/changeLogo`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 游戏厂商相关-查询所有厂商
   */
  Boss_Game_Factory_QueryAllPost: (): Promise<IGameFactorySummary[]> => {
    return request({
      url: `/boss/game/factory/queryAll`,
      method: "POST",
    });
  },
  /**
  * @description: 游戏厂商相关-查询厂商详情
    req =>>  IFactoryCodeReq {
      factoryCode: string //厂商编号 
    }
    res =>>  IGameFactoryResp {
      createTime: string //创建时间 
      factoryCode: string //厂商编码 
      factoryName: string //厂商名称 
      icon: string //厂商icon 
      iconUrl: string //厂商icon链接 
      typeCount: number //类型个数 
    }
  */
  Boss_Game_Factory_QueryDetailPost: (data: IFactoryCodeReq = {}): Promise<IGameFactoryResp> => {
    return request({
      url: `/boss/game/factory/queryDetail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏厂商相关-查询厂商列表
    res =>>  IPageResultGameFactoryResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IGameFactoryResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryGameFactoryReq {
      factoryCode: string //厂商编码 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
    }
  */
  Boss_Game_Factory_QueryListPost: (data: IQueryGameFactoryReq = {}): Promise<IPageResultGameFactoryResp> => {
    return request({
      url: `/boss/game/factory/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏记录相关-游戏记录
    res =>>  IPageResultUserGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IUserGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IUserGameRecordReq {
      end: number //结束时间 
      factoryCode: string //游戏渠道 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      start: number //开始时间 
      typeId: number //游戏类型id 
      userId: number //用户编号 
      userName: string //用户名 
    }
  */
  Boss_Game_GetRecordPost: (data: IUserGameRecordReq = {}): Promise<IPageResultUserGameRecordResp> => {
    return request({
      url: `/boss/game/getRecord`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-棋牌游戏记录
    req =>>  IChessCardGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultChessCardGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IChessCardGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_ChessCardPost: (data: IChessCardGameRecordReq = {}): Promise<IPageResultChessCardGameRecordResp> => {
    return request({
      url: `/boss/game/record/chessCard`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-棋牌游戏记录导出
    req =>>  IBossgamerecordchessCardExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_ChessCardExportGet: (data: IBossgamerecordchessCardExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/chessCardExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-斗鸡游戏记录
    req =>>  IChickenGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultChickenGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IChickenGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_ChickenPost: (data: IChickenGameRecordReq = {}): Promise<IPageResultChickenGameRecordResp> => {
    return request({
      url: `/boss/game/record/chicken`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-斗鸡游戏记录导出
    req =>>  IBossgamerecordchickenExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_ChickenExportGet: (data: IBossgamerecordchickenExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/chickenExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-电子游戏记录
    req =>>  IElectronGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultElectronGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IElectronGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_ElectronPost: (data: IElectronGameRecordReq = {}): Promise<IPageResultElectronGameRecordResp> => {
    return request({
      url: `/boss/game/record/electron`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-电子游戏记录导出
    req =>>  IBossgamerecordelectronExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_ElectronExportGet: (data: IBossgamerecordelectronExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/electronExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-电竞游戏记录
    req =>>  IEsportGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //渠道Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultEsportGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IEsportGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_EsportPost: (data: IEsportGameRecordReq = {}): Promise<IPageResultEsportGameRecordResp> => {
    return request({
      url: `/boss/game/record/esport`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-电竞游戏记录导出
    req =>>  IBossgamerecordesportExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //渠道Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_EsportExportGet: (data: IBossgamerecordesportExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/esportExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-捕鱼游戏记录
    req =>>  IFishGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultFishGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IFishGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_FishPost: (data: IFishGameRecordReq = {}): Promise<IPageResultFishGameRecordResp> => {
    return request({
      url: `/boss/game/record/fish`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-捕鱼游戏记录导出
    req =>>  IBossgamerecordfishExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_FishExportGet: (data: IBossgamerecordfishExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/fishExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-真人视讯游戏记录
    req =>>  ILiveVideoGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultLiveVideoGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: ILiveVideoGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_LiveVideoPost: (data: ILiveVideoGameRecordReq = {}): Promise<IPageResultLiveVideoGameRecordResp> => {
    return request({
      url: `/boss/game/record/liveVideo`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-真人视讯游戏记录导出
    req =>>  IBossgamerecordliveVideoExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_LiveVideoExportGet: (data: IBossgamerecordliveVideoExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/liveVideoExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-彩票游戏记录
    req =>>  ILotteryGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //渠道Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultLotteryGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: ILotteryGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_LotteryPost: (data: ILotteryGameRecordReq = {}): Promise<IPageResultLotteryGameRecordResp> => {
    return request({
      url: `/boss/game/record/lottery`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-彩票游戏记录导出
    req =>>  IBossgamerecordlotteryExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //渠道Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_LotteryExportGet: (data: IBossgamerecordlotteryExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/lotteryExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-游戏记录
    req =>>  IOrdinaryGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //渠道Id 
      factoryCode: string //厂商 
      gameMainType: string //游戏主类型 
      gameType: number //游戏类型 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      resultFlag: number //游戏结果 
      status: number //状态 
      userId: number //用户Id 
      userName: string //用户名 
    }
    res =>>  IPageResultOrdinaryGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IOrdinaryGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Record_OrdinaryPost: (data: IOrdinaryGameRecordReq = {}): Promise<IPageResultOrdinaryGameRecordResp> => {
    return request({
      url: `/boss/game/record/ordinary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-游戏记录导出
    req =>>  IBossgamerecordordinaryExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //渠道Id 
      factoryCode: string //厂商 
      gameType: number //游戏类型 
      resultFlag: number //游戏结果 
      status: number //状态 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      gameMainType: string //游戏主类型 
    }
  */
  Boss_Game_Record_OrdinaryExportGet: (data: IBossgamerecordordinaryExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/ordinaryExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户游戏记录-体育游戏记录
    res =>>  IPageResultSportGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: ISportGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  ISportGameRecordReq {
      betEndTime: string //注单时间-结束 
      betStartTime: string //注单时间-开始 
      channelId: string //用户Id 
      factoryCode: string //厂商 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户Id 
      userName: string //用户名 
    }
  */
  Boss_Game_Record_SportPost: (data: ISportGameRecordReq = {}): Promise<IPageResultSportGameRecordResp> => {
    return request({
      url: `/boss/game/record/sport`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户游戏记录-体育游戏记录导出
    req =>>  IBossgamerecordsportExportQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名 
      userId: number //用户Id 
      channelId: string //用户Id 
      betStartTime: string //注单时间-开始 
      betEndTime: string //注单时间-结束 
      factoryCode: string //厂商 
    }
  */
  Boss_Game_Record_SportExportGet: (data: IBossgamerecordsportExportQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/record/sportExport`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 游戏统计-导出渠道统计excel
    req =>>  IBossgamestatisticschannelexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      channelId: string //游戏渠道编号 
      proxyUid: number //包网商编号 
      factoryCode: string //游戏渠道编号 
      start: number //开始时间 
      end: number //结束时间 
    }
  */
  Boss_Game_Statistics_Channel_ExportExcelGet: (data: IBossgamestatisticschannelexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/statistics/channel/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 游戏统计-渠道 - 按日统计记录
    req =>>  IGameChannelStatisticsReq {
      channelId: string //游戏渠道编号 
      end: number //结束时间 
      factoryCode: string //游戏渠道编号 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //包网商编号 
      start: number //开始时间 
    }
    res =>>  IPageResultGameChannelStatisticsResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IGameChannelStatisticsResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Game_Statistics_Channel_ListPost: (data: IGameChannelStatisticsReq = {}): Promise<IPageResultGameChannelStatisticsResp> => {
    return request({
      url: `/boss/game/statistics/channel/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏统计-导出excel
    req =>>  IBossgamestatisticsproxyexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //代理ID 
      start: number //开始日期 
      end: number //结束日期 
    }
  */
  Boss_Game_Statistics_Proxy_ExportExcelGet: (data: IBossgamestatisticsproxyexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/game/statistics/proxy/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 游戏统计-代理 - 按日统计记录
    res =>>  IPageResultGameProxyStatisticsResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IGameProxyStatisticsResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IStatisticsReq {
      end: string //结束日期 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //代理ID 
      start: string //开始日期 
    }
  */
  Boss_Game_Statistics_Proxy_ListPost: (data: IStatisticsReq = {}): Promise<IPageResultGameProxyStatisticsResp> => {
    return request({
      url: `/boss/game/statistics/proxy/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏统计-代理 - 汇总
    res =>>  IGameProxyStatisticsResp {
      betAmount: number //总投注 
      count: number //总局数 
      lose: number //总输 
      proxyAccount: string //代理用户账号 
      proxyUid: number //代理用户编号 
      result: number //总结果 
      time: string //统计时间 
      validAmount: number //有效投注 
      win: number //总赢 
    }
    req =>>  ISummaryReq {
      end: string //结束日期 
      start: string //开始日期 
    }
  */
  Boss_Game_Statistics_Proxy_SummaryPost: (data: ISummaryReq = {}): Promise<IGameProxyStatisticsResp> => {
    return request({
      url: `/boss/game/statistics/proxy/summary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏记录相关-概况统计
    req =>>  IGameSummaryReq {
      end: number //结束时间 
      start: number //开始时间 
      userId: number //用户编号 
      userName: string //用户编号 
    }
    res =>>  IGameSummaryResp {
      gameValidAmount: number //总有效流水 
      negativeProfitAmount: number //总盘负盈利 
    }
  */
  Boss_Game_SummaryPost: (data: IGameSummaryReq = {}): Promise<IGameSummaryResp> => {
    return request({
      url: `/boss/game/summary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏类型相关-添加游戏类型
    req =>>  IAddTypeReq {
      factoryCode: string //厂商编码 
      gameMainTypeCode: string //游戏主分类Code 
      typeName: string //类型名称 
    }
  */
  Boss_Game_Type_AddPost: (data: IAddTypeReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/type/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏类型相关-删除游戏类型
    req =>>  IDeleteTypeReq {
      factoryCode: string //厂商编码 
      typeName: string //类型名称 
    }
  */
  Boss_Game_Type_DeletePost: (data: IDeleteTypeReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/type/delete`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 游戏类型相关-主游戏类型列表
   */
  Boss_Game_Type_GameMainTypeListPost: (): Promise<IGameMainTypeResp[]> => {
    return request({
      url: `/boss/game/type/gameMainTypeList`,
      method: "POST",
    });
  },
  /**
  * @description: 游戏类型相关-查询游戏类型
    req =>>  IGameTypeQueryReq {
      factoryCode: string //厂商编码 
    }
  */
  Boss_Game_Type_QueryPost: (data: IGameTypeQueryReq = {}): Promise<IGameTypeResp[]> => {
    return request({
      url: `/boss/game/type/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏类型相关-修改游戏类型名称
    req =>>  IUpdateTypeReq {
      factoryCode: string //厂商编码 
      gameMainTypeCode: string //游戏主分类Code 
      typeId: number //类型编号 
      typeName: string //类型名称 
    }
  */
  Boss_Game_Type_UpdatePost: (data: IUpdateTypeReq = {}): Promise<null> => {
    return request({
      url: `/boss/game/type/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户达成数据查询-获取结算达成情况
    res =>>  IUserAchievingBo {
      depositAmount: number //存款值 
      directSum: number //直属有效会员数 
      effectiveSum: number //总有效会员数 
      gameValidAmount: number //有效流水 
      negativeProfitAmount: number //负盈利 
      vipSum: number //达成条件的vip用户数 
      withdrawAmount: number //提款值 
    }
    req =>>  IUserAchievingReq {
      userId: number //用户Id 
    }
  */
  Boss_Operate_GetAchievingPost: (data: IUserAchievingReq = {}): Promise<IUserAchievingBo> => {
    return request({
      url: `/boss/operate/getAchieving`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 获取达成条件配置-获取达成条件配置
    res =>>  IProxyAchievingConditionsResp {
      calculationPeriod: string //结算周期:DAY,WEEK,HALF_MONTH,MONTH 
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
    req =>>  IProxyAchievingQueryReq {
      proxyId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_Operate_GetAchievingConditionsPost: (data: IProxyAchievingQueryReq = {}): Promise<IProxyAchievingConditionsResp> => {
    return request({
      url: `/boss/operate/getAchievingConditions`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 支付渠道管理-添加或编辑分配支付渠道
    req =>>  IAllocationPaymentChannelReq {
      paymentChannelList: string[] //支付渠道 
      proxyUid: number //包网商id 
    }
  */
  Boss_Payment_Channel_AllocationPost: (data: IAllocationPaymentChannelReq = {}): Promise<null> => {
    return request({
      url: `/boss/payment/channel/allocation`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 支付渠道管理-查询支付渠道列表
    req =>>  IQueryPaymentChannelReq {
      proxyUid: number //包网商id 
      status: number //状态 1:启用 0:禁用 
    }
  */
  Boss_Payment_Channel_QueryListPost: (data: IQueryPaymentChannelReq = {}): Promise<IPaymentChannelResq[]> => {
    return request({
      url: `/boss/payment/channel/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 支付渠道管理-查询三方渠道支付单信息
    res =>>  IQueryOrderBizResp {
      bizOrderNo: string //没有提供描述 
      merchantId: string //没有提供描述 
      msg: string //没有提供描述 
      paymentAmount: number //没有提供描述 
      paymentOrderNo: string //没有提供描述 
      status: string //没有提供描述 
    }
    req =>>  IBosspaymentchannelqueryPaymentChannelOrderQueryParams {
      paymentOrderNo: string //支付单号 
      bizType: string //业务类型 
    }
  */
  Boss_Payment_Channel_QueryPaymentChannelOrderPost: (data: IBosspaymentchannelqueryPaymentChannelOrderQueryParams = {}): Promise<IQueryOrderBizResp> => {
    return request({
      url: `/boss/payment/channel/queryPaymentChannelOrder`,
      method: "POST",
      params: data,
    });
  },
  /**
  * @description: 支付渠道管理-查询包网商支付渠道列表
    req =>>  IQueryPaymentChannelReq {
      proxyUid: number //包网商id 
      status: number //状态 1:启用 0:禁用 
    }
  */
  Boss_Payment_Channel_QueryProxyListPost: (data: IQueryPaymentChannelReq = {}): Promise<IProxyPaymentChannelRelation[]> => {
    return request({
      url: `/boss/payment/channel/queryProxyList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 支付渠道管理-修改支付渠道
    req =>>  IPaymentChannelReq {
      channelType: string //渠道类型 
      docNo: string //文件编号 
      status: number //状态 1:启用 0:禁用 
    }
  */
  Boss_Payment_Channel_UpdatePost: (data: IPaymentChannelReq = {}): Promise<null> => {
    return request({
      url: `/boss/payment/channel/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-添加区域
    req =>>  IAddGameAreaReq {
      areaName: string //区域名称 
      areaNameEn: string //区域英文名称 
      areaNamePh: string //区域菲律宾名称 
      areaNameTh: string //区域泰语名称 
      areaNameVn: string //区域越南名称 
      banner: string //banner 
      icon: string //logo 
      proxyUid: number //包网商id 
      sortNo: number //权重 
      style: string //风格 
    }
  */
  Boss_Proxy_Area_AddPost: (data: IAddGameAreaReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/area/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-下线
    req =>>  IAreaIdReq {
      areaId: number //区域编号 
      proxyUid: number //包网商id 
    }
  */
  Boss_Proxy_Area_OfflinePost: (data: IAreaIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/area/offline`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-上线
    req =>>  IAreaIdReq {
      areaId: number //区域编号 
      proxyUid: number //包网商id 
    }
  */
  Boss_Proxy_Area_OnlinePost: (data: IAreaIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/area/online`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-查询区域详情
    req =>>  IAreaIdReq {
      areaId: number //区域编号 
      proxyUid: number //包网商id 
    }
    res =>>  IGameAreaResp {
      areaId: number //区域编号 
      areaName: string //区域名称 
      areaNameEn: string //区域英文名称 
      areaNamePh: string //区域菲律宾名称 
      areaNameTh: string //区域泰语名称 
      areaNameVn: string //区域越南名称 
      banner: string //区域banner 
      bannerUrl: string //banner链接 
      channelCount: number //渠道数量 
      createTime: string //创建时间 
      gameCount: number //游戏数量 
      icon: string //区域icon 
      iconUrl: string //icon链接 
      sortNo: number //区域权重 
      status: number //状态 1:启用 0:禁用 
      style: string //风格 
      updateTime: string //更新时间 
    }
  */
  Boss_Proxy_Area_QueryDetailPost: (data: IAreaIdReq = {}): Promise<IGameAreaResp> => {
    return request({
      url: `/boss/proxy/area/queryDetail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-查询区域列表
    res =>>  IPageResultGameAreaResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IGameAreaResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryGameAreaReq {
      areaName: string //区域名称 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //包网商id 
    }
  */
  Boss_Proxy_Area_QueryListPost: (data: IQueryGameAreaReq = {}): Promise<IPageResultGameAreaResp> => {
    return request({
      url: `/boss/proxy/area/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 游戏区域相关-修改区域
    req =>>  IUpdateGameAreaReq {
      areaId: number //区域编号 
      areaName: string //区域名称 
      areaNameEn: string //区域英文名称 
      areaNamePh: string //区域菲律宾名称 
      areaNameTh: string //区域泰语名称 
      areaNameVn: string //区域越南名称 
      banner: string //banner 
      icon: string //logo 
      proxyUid: number //包网商id 
      sortNo: number //权重 
      style: string //风格 
    }
  */
  Boss_Proxy_Area_UpdatePost: (data: IUpdateGameAreaReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/area/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理币种-查询
    req =>>  IProxyCurrencyQueryReq {
      proxyId: number //代理编号 
    }
  */
  Boss_Proxy_Currency_ListPost: (data: IProxyCurrencyQueryReq = {}): Promise<IBiZhongChaXunFanHuiXinXi[]> => {
    return request({
      url: `/boss/proxy/currency/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 包网商厂商相关-禁用厂商
    req =>>  IProxyDisableFactoryReq {
      factoryCodes: string[] //厂商编码 
      proxyId: number //包网商编号 
    }
  */
  Boss_Proxy_Factory_DisablePost: (data: IProxyDisableFactoryReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/factory/disable`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 包网商厂商相关-禁用厂商列表
    req =>>  IProxyNoReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_Proxy_Factory_Disable_ListPost: (data: IProxyNoReq = {}): Promise<string[]> => {
    return request({
      url: `/boss/proxy/factory/disable/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 包网商厂商相关-包网商厂商列表
    req =>>  IProxyNoReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_Proxy_Factory_ListPost: (data: IProxyNoReq = {}): Promise<IGameFactorySimpleResp[]> => {
    return request({
      url: `/boss/proxy/factory/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-添加游戏
    req =>>  IAddProxyGameReq {
      gameIds: number[] //游戏编号 
      proxyId: number //代理编号 
    }
  */
  Boss_Proxy_Game_AddPost: (data: IAddProxyGameReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-添加精选游戏
    req =>>  IAddProxyChoiceReq {
      proxyGameIds: number[] //游戏编号 
      proxyId: number //代理编号 
    }
  */
  Boss_Proxy_Game_AddChoicePost: (data: IAddProxyChoiceReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/addChoice`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-获取精选游戏
    req =>>  IProxyIdReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_Proxy_Game_GetChoicePost: (data: IProxyIdReq = {}): Promise<IProxyChoiceGameResp[]> => {
    return request({
      url: `/boss/proxy/game/getChoice`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-下线游戏
    req =>>  IProxyGameIdReq {
      proxyGameId: number //代理游戏编号 
    }
  */
  Boss_Proxy_Game_OfflinePost: (data: IProxyGameIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/offline`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-上线游戏
    req =>>  IProxyGameIdReq {
      proxyGameId: number //代理游戏编号 
    }
  */
  Boss_Proxy_Game_OnlinePost: (data: IProxyGameIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/online`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-查询区域下的游戏信息
    req =>>  IAreaIdReq {
      areaId: number //区域编号 
      proxyUid: number //包网商id 
    }
  */
  Boss_Proxy_Game_QueryAreaGamePost: (data: IAreaIdReq = {}): Promise<IProxyGameResp[]> => {
    return request({
      url: `/boss/proxy/game/queryAreaGame`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-查询可用的游戏
    req =>>  IProxyGameReq {
      channelName: string //游戏渠道名称 
      factoryCode: string //厂商 
      gameName: string //游戏名 
      proxyUid: number //包网商id 
    }
  */
  Boss_Proxy_Game_QueryGameByCurrencyPost: (data: IProxyGameReq = {}): Promise<IBaseGameResp[]> => {
    return request({
      url: `/boss/proxy/game/queryGameByCurrency`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-游戏列表
    res =>>  IPageResultProxyGameResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IProxyGameResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryProxyGameReq {
      channelId: string //渠道编号 
      factoryCode: string //游戏厂商 
      gameName: string //游戏名称 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //代理编号 
    }
  */
  Boss_Proxy_Game_QueryListPost: (data: IQueryProxyGameReq = {}): Promise<IPageResultProxyGameResp> => {
    return request({
      url: `/boss/proxy/game/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-查询代理下的游戏信息
    req =>>  IProxyIdReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_Proxy_Game_QueryProxyGamePost: (data: IProxyIdReq = {}): Promise<IProxyGameResp[]> => {
    return request({
      url: `/boss/proxy/game/queryProxyGame`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-更改游戏区域
    req =>>  IProxyGameUpdateAreaReq {
      areaId: number //区域编号 
      proxyGameIds: number[] //代理游戏编号 
      proxyUid: number //代理编号 
    }
  */
  Boss_Proxy_Game_UpdateAreaPost: (data: IProxyGameUpdateAreaReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/updateArea`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-修改精选游戏信息
    req =>>  IUpdateProxyChoiceGameReq {
      icon: string //游戏图标 
      proxyGameId: number //代理游戏编号 
      proxyUid: number //代理编号 
    }
  */
  Boss_Proxy_Game_UpdateChoiceGamePost: (data: IUpdateProxyChoiceGameReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/updateChoiceGame`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-修改游戏信息
    req =>>  IUpdateProxyGameReq {
      gameName: string //游戏名称 
      icon: string //游戏图标 
      proxyGameId: number //代理游戏编号 
    }
  */
  Boss_Proxy_Game_UpdateGamePost: (data: IUpdateProxyGameReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/updateGame`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 代理游戏相关-更改游戏是否热门
    req =>>  IProxyGameUpdatePopularReq {
      popular: boolean //是否热门：true是，false否 
      proxyGameIds: number[] //代理游戏编号 
      proxyUid: number //代理编号 
    }
  */
  Boss_Proxy_Game_UpdatePopularPost: (data: IProxyGameUpdatePopularReq = {}): Promise<null> => {
    return request({
      url: `/boss/proxy/game/updatePopular`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 返水方案管理-查询方案明细信息
    req =>>  IPlanIdReq {
      planId: number //方案编号 
    }
  */
  Boss_Rebate_Plan_QueryItemsPost: (data: IPlanIdReq = {}): Promise<IFanShuiFangAnMingXiXinXi[]> => {
    return request({
      url: `/boss/rebate/plan/queryItems`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 返水方案管理-查询方案列表
    res =>>  IPageResultFanShuiFangAnXinXi {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IFanShuiFangAnXinXi[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IPlanQueryReq {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      planName: string //方案名称 
      status: number //方案状态 
    }
  */
  Boss_Rebate_Plan_QueryListPost: (data: IPlanQueryReq = {}): Promise<IPageResultFanShuiFangAnXinXi> => {
    return request({
      url: `/boss/rebate/plan/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 返水方案管理-查询vip列表
    req =>>  IProxyIdReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_Rebate_Plan_QueryVipListPost: (data: IProxyIdReq = {}): Promise<IVipManagementVo[]> => {
    return request({
      url: `/boss/rebate/plan/queryVipList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 返水记录管理-导出返水记录列表
    req =>>  IBossrebaterecordexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户id 
      userName: string //用户名称 
      proxyId: number //包网商id 
      proxyName: string //包网商名称 
      status: number //状态 
      period: string //周期s 
      id: number //记录id 
    }
  */
  Boss_Rebate_Record_ExportExcelGet: (data: IBossrebaterecordexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/rebate/record/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 返水记录管理-返水记录列表
    res =>>  IPageResultProxyRebateRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IProxyRebateRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IRecordQueryReq {
      id: number //记录id 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      period: string //周期s 
      proxyId: number //包网商id 
      proxyName: string //包网商名称 
      status: number //状态 
      userId: number //用户id 
      userName: string //用户名称 
    }
  */
  Boss_Rebate_Record_QueryListPost: (data: IRecordQueryReq = {}): Promise<IPageResultProxyRebateRecordResp> => {
    return request({
      url: `/boss/rebate/record/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 结算数据-代理返佣数据
    req =>>  IAgentSettleReq {
      agentId: number //代理ID 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      status: number //状态 3 待线下或自动结算 8 未达成条件 9 结算完成 
    }
    res =>>  IPageResultAgentSettleResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IAgentSettleResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_Settle_AgentPost: (data: IAgentSettleReq = {}): Promise<IPageResultAgentSettleResp> => {
    return request({
      url: `/boss/settle/agent`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 结算数据-代理结算数据 - 导出excel
    req =>>  IBosssettleagentexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      agentId: number //代理ID 
      status: number //状态 3 待线下或自动结算 8 未达成条件 9 结算完成 
    }
  */
  Boss_Settle_Agent_ExportExcelGet: (data: IBosssettleagentexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/settle/agent/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 结算数据-平台结算数据
    res =>>  IPageResultPlatformSettleResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IPlatformSettleResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IPlatformSettleReq {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      status: number //1 待线下结算;2 已结算 
    }
  */
  Boss_Settle_PlatformPost: (data: IPlatformSettleReq = {}): Promise<IPageResultPlatformSettleResp> => {
    return request({
      url: `/boss/settle/platform`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 结算数据-平台结算数据 - 导出excel
    req =>>  IBosssettleplatformexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      status: number //1 待线下结算;2 已结算 
    }
  */
  Boss_Settle_Platform_ExportExcelGet: (data: IBosssettleplatformexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/settle/platform/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 结算数据-包网商结算数据
    res =>>  IPageResultProxySettleResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IProxySettleResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IPlatformSettleReq {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      status: number //1 待线下结算;2 已结算 
    }
  */
  Boss_Settle_ProxyPost: (data: IPlatformSettleReq = {}): Promise<IPageResultProxySettleResp> => {
    return request({
      url: `/boss/settle/proxy`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 结算数据-包网商结算数据 - 导出excel
    req =>>  IBosssettleproxyexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyId: number //包网商ID 
      status: number //1 待线下结算;2 已结算 
    }
  */
  Boss_Settle_Proxy_ExportExcelGet: (data: IBosssettleproxyexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/settle/proxy/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 结算数据-平台结算
    req =>>  ISettleNoReq {
      settleNo: number //结算单号 
    }
  */
  Boss_Settle_SettledPost: (data: ISettleNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/settle/settled`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 字典接口-新增字典
    req =>>  IDictionaryBaseVo {
      code: string //对照码 
      codeDesc: string //代码描述 
      editMode: string //编辑模式 0:只读;1:可编辑 
      field: string //字典对照字段 
      fieldName: string //对照字段名称 
      remark: string //备注 
      sortNo: number //排序号(序号越小排序越靠前) 
    }
  */
  Boss_System_Dictionary_AddPost: (data: IDictionaryBaseVo = {}): Promise<string> => {
    return request({
      url: `/boss/system/dictionary/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 字典接口-删除字典
    req =>>  IBosssystemdictionarydeleteQueryParams {
      codeId: string //字典编号 
    }
    req =>>  IBosssystemdictionarydeleteQueryParams {
      codeId: string //字典编号 
    }
  */
  Boss_System_Dictionary_DeleteGet: (data: IBosssystemdictionarydeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/dictionary/delete`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 字典接口-删除字典
    req =>>  IBosssystemdictionarydeleteQueryParams {
      codeId: string //字典编号 
    }
    req =>>  IBosssystemdictionarydeleteQueryParams {
      codeId: string //字典编号 
    }
  */
  Boss_System_Dictionary_DeletePost: (data: IBosssystemdictionarydeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/dictionary/delete`,
      method: "POST",
      params: data,
    });
  },
  /**
   * @description: 字典接口-查询所有字典信息
   */
  Boss_System_Dictionary_GetAllGet: (): Promise<IDictionarySimpleVo[]> => {
    return request({
      url: `/boss/system/dictionary/getAll`,
      method: "GET",
    });
  },
  /**
  * @description: 字典接口-根据对照字段查询字典
    req =>>  IBosssystemdictionarygetByFieldQueryParams {
      field: string //对照字段 
    }
  */
  Boss_System_Dictionary_GetByFieldGet: (data: IBosssystemdictionarygetByFieldQueryParams = {}): Promise<IDictionarySimpleVo[]> => {
    return request({
      url: `/boss/system/dictionary/getByField`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 字典接口-根据字典编号查询字典信息
    res =>>  IDictionaryResponseVo {
      code: string //对照码 
      codeDesc: string //代码描述 
      codeId: string //字典编号 
      createTime: string //创建时间 
      editMode: string //编辑模式 0:只读;1:可编辑 
      field: string //字典对照字段 
      fieldName: string //对照字段名称 
      remark: string //备注 
      sortNo: number //排序号(序号越小排序越靠前) 
      updateTime: string //更新时间 
    }
    req =>>  IBosssystemdictionarygetByIdQueryParams {
      codeId: string //字典编号 
    }
  */
  Boss_System_Dictionary_GetByIdGet: (data: IBosssystemdictionarygetByIdQueryParams = {}): Promise<IDictionaryResponseVo> => {
    return request({
      url: `/boss/system/dictionary/getById`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 字典接口-分页查询字典信息
    req =>>  IDictionaryPagingRequestVo {
      field: string //对照字段 
      pageIndex: number //页码(从1开始) 
      pageSize: number //页容[1-200] 
    }
    res =>>  IPageResultDictionaryResponseVo {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IDictionaryResponseVo[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
  */
  Boss_System_Dictionary_QueryPagingPost: (data: IDictionaryPagingRequestVo = {}): Promise<IPageResultDictionaryResponseVo> => {
    return request({
      url: `/boss/system/dictionary/queryPaging`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 字典接口-修改字典
    req =>>  IDictionaryUpdateVo {
      code: string //对照码 
      codeDesc: string //代码描述 
      codeId: string //字典编号 
      editMode: string //编辑模式 0:只读;1:可编辑 
      field: string //字典对照字段 
      fieldName: string //对照字段名称 
      remark: string //备注 
      sortNo: number //排序号(序号越小排序越靠前) 
    }
  */
  Boss_System_Dictionary_UpdatePost: (data: IDictionaryUpdateVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/dictionary/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 菜单管理接口-新增菜单
    req =>>  IMenuBaseVo {
      expanded: string //展开状态(1:展开;0:收缩)  
      icon: string //节点图标 
      iconCls: string //节点图标CSS类名 
      menuCode: string //菜单编码，可作为按钮的显隐 
      menuLevel: string //菜单级别(0:树枝节点;1:叶子节点;2:按钮级别) 
      menuName: string //菜单名称(最长50) 
      menuType: string //菜单类型(1:系统菜单;0:业务菜单) 
      parentId: string //上级菜单编号 
      remark: string //备注(最长200) 
      request: string //请求地址(最长200) 
      sortNo: number //排序号 
    }
  */
  Boss_System_Menu_AddPost: (data: IMenuBaseVo = {}): Promise<string> => {
    return request({
      url: `/boss/system/menu/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 菜单管理接口-删除菜单
    req =>>  IBosssystemmenudeleteQueryParams {
      menuId: string //菜单编号 
    }
    req =>>  IBosssystemmenudeleteQueryParams {
      menuId: string //菜单编号 
    }
  */
  Boss_System_Menu_DeleteGet: (data: IBosssystemmenudeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/menu/delete`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 菜单管理接口-删除菜单
    req =>>  IBosssystemmenudeleteQueryParams {
      menuId: string //菜单编号 
    }
    req =>>  IBosssystemmenudeleteQueryParams {
      menuId: string //菜单编号 
    }
  */
  Boss_System_Menu_DeletePost: (data: IBosssystemmenudeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/menu/delete`,
      method: "POST",
      params: data,
    });
  },
  /**
   * @description: 菜单管理接口-查询所有菜单
   */
  Boss_System_Menu_QueryAllGet: (): Promise<IMenuResponseVo[]> => {
    return request({
      url: `/boss/system/menu/queryAll`,
      method: "GET",
    });
  },
  /**
  * @description: 菜单管理接口-修改菜单
    req =>>  IMenuUpdateVo {
      expanded: string //展开状态(1:展开;0:收缩)  
      icon: string //节点图标 
      iconCls: string //节点图标CSS类名 
      menuCode: string //菜单编码，可作为按钮的显隐 
      menuId: string //菜单编号 
      menuLevel: string //菜单级别(0:树枝节点;1:叶子节点;2:按钮级别) 
      menuName: string //菜单名称(最长50) 
      menuType: string //菜单类型(1:系统菜单;0:业务菜单) 
      parentId: string //上级菜单编号 
      remark: string //备注(最长200) 
      request: string //请求地址(最长200) 
      sortNo: number //排序号 
    }
  */
  Boss_System_Menu_UpdatePost: (data: IMenuUpdateVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/menu/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 角色管理接口-新增角色
    req =>>  IRoleBaseVo {
      remark: string //备注(最长50) 
      roleName: string //角色名称(最长50) 
      roleType: string //角色类型(1:业务角色;2:管理角色) 
    }
  */
  Boss_System_Role_AddPost: (data: IRoleBaseVo = {}): Promise<string> => {
    return request({
      url: `/boss/system/role/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 角色管理接口-授权角色菜单
    req =>>  IRoleMenuRequestVo {
      menuIds: string[] //菜单编号集合 
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_AuthorizeMenuPost: (data: IRoleMenuRequestVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/role/authorizeMenu`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 角色管理接口-锁定或解锁角色
    req =>>  IRoleLockRequestVo {
      lockFlag: string //锁定标志 1:锁定;0:激活 
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_ChangeLockPost: (data: IRoleLockRequestVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/role/changeLock`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 角色管理接口-删除角色
    req =>>  IBosssystemroledeleteQueryParams {
      roleId: string //角色编号 
    }
    req =>>  IBosssystemroledeleteQueryParams {
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_DeleteGet: (data: IBosssystemroledeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/role/delete`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 角色管理接口-删除角色
    req =>>  IBosssystemroledeleteQueryParams {
      roleId: string //角色编号 
    }
    req =>>  IBosssystemroledeleteQueryParams {
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_DeletePost: (data: IBosssystemroledeleteQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/system/role/delete`,
      method: "POST",
      params: data,
    });
  },
  /**
   * @description: 角色管理接口-查询所有角色
   */
  Boss_System_Role_QueryAllGet: (): Promise<IJiaoSeXiangYingXinXi[]> => {
    return request({
      url: `/boss/system/role/queryAll`,
      method: "GET",
    });
  },
  /**
  * @description: 角色管理接口-查询单个角色
    res =>>  IJiaoSeXiangYingXinXi {
      createTime: string //创建时间 
      locked: string //锁定标志 1锁定 0激活 
      remark: string //备注(最长50) 
      roleId: string //角色编号 
      roleName: string //角色名称(最长50) 
      roleType: string //角色类型(1:业务角色;2:管理角色) 
      updateTime: string //修改时间 
    }
    req =>>  IBosssystemrolequeryByIdQueryParams {
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_QueryByIdGet: (data: IBosssystemrolequeryByIdQueryParams = {}): Promise<IJiaoSeXiangYingXinXi> => {
    return request({
      url: `/boss/system/role/queryById`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 角色管理接口-查询角色以及对应的菜单信息
    res =>>  IRoleMenuResponseVo {
      createTime: string //创建时间 
      locked: string //锁定标志 1锁定 0激活 
      menus: IMenuResponseVo[] //权限信息 
      remark: string //备注(最长50) 
      roleId: string //角色编号 
      roleName: string //角色名称(最长50) 
      roleType: string //角色类型(1:业务角色;2:管理角色) 
      updateTime: string //修改时间 
    }
    req =>>  IBosssystemrolequeryDetailQueryParams {
      roleId: string //角色编号 
    }
  */
  Boss_System_Role_QueryDetailGet: (data: IBosssystemrolequeryDetailQueryParams = {}): Promise<IRoleMenuResponseVo> => {
    return request({
      url: `/boss/system/role/queryDetail`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 角色管理接口-分页查询角色信息
    res =>>  IPageResultJiaoSeXiangYingXinXi {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IJiaoSeXiangYingXinXi[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IRoleQueryRequestVo {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      remark: string //角色描述 
      roleName: string //角色名称 
    }
  */
  Boss_System_Role_QueryPagingPost: (data: IRoleQueryRequestVo = {}): Promise<IPageResultJiaoSeXiangYingXinXi> => {
    return request({
      url: `/boss/system/role/queryPaging`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 角色管理接口-修改角色
    req =>>  IRoleUpdateVo {
      remark: string //备注(最长50) 
      roleId: string //角色编号 
      roleName: string //角色名称(最长50) 
      roleType: string //角色类型(1:业务角色;2:管理角色) 
    }
  */
  Boss_System_Role_UpdatePost: (data: IRoleUpdateVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/role/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-添加用户
    req =>>  IUserAddVo {
      account: string //登录账户(最长30位) 
      locked: string //锁定标志(1:锁定;0:激活) 
      mobileArea: string //手机区号 
      mobilePhone: string //手机号 
      password: string //密码(长度在4-18位) 
      remark: string //备注(最长50) 
      sex: string //性别(0:未知;1:男;2:女) 
      userName: string //用户名(最长30位) 
      userType: string //人员类型(1:业务员;2:管理员;)  
    }
  */
  Boss_System_User_AddPost: (data: IUserAddVo = {}): Promise<string> => {
    return request({
      url: `/boss/system/user/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-授权用户角色
    req =>>  IUserRoleRequestVo {
      roleIds: string[] //角色编号集合 
      userId: string //用户编号 
    }
  */
  Boss_System_User_AuthorizeRolePost: (data: IUserRoleRequestVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/authorizeRole`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-绑定谷歌验证码
    req =>>  IGoogleCodeReq {
      code: string //谷歌验证码 
    }
  */
  Boss_System_User_BindGooglePost: (data: IGoogleCodeReq = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/bindGoogle`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-修改用户锁定状态
    req =>>  IUserLockRequestVo {
      lockFlag: string //锁定标志 1:锁定;0:激活 
      userId: string //用户编号 
    }
  */
  Boss_System_User_ChangeLockPost: (data: IUserLockRequestVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/changeLock`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-修改用户密码
    req =>>  IUserPasswordRequestVo {
      newPassword: string //新密码 
      notSame: boolean //没有提供描述 
      oldPassword: string //原密码 
    }
  */
  Boss_System_User_ChangePasswordPost: (data: IUserPasswordRequestVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/changePassword`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-删除用户
    req =>>  ISingleParamVostring {
      data: string //请求参数 
    }
  */
  Boss_System_User_DeletePost: (data: ISingleParamVostring = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/delete`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-获取谷歌验证信息
    res =>>  IGoogleSecretResp {
      googleSecret: string //密钥 
      otpURL: string //google验证二维码字符串,根据这个数据生成需要的被google验证扫描的二维码 
    }
  */
  Boss_System_User_GetGoogleSecretGet: (): Promise<IGoogleSecretResp> => {
    return request({
      url: `/boss/system/user/getGoogleSecret`,
      method: "GET",
    });
  },
  /**
  * @description: 用户相关接口-获取对应用户的角色信息
    req =>>  IBosssystemusergetRoleQueryParams {
      userId: string //用户编号 
    }
  */
  Boss_System_User_GetRoleGet: (data: IBosssystemusergetRoleQueryParams = {}): Promise<IJiaoSeXiangYingXinXi[]> => {
    return request({
      url: `/boss/system/user/getRole`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户相关接口-获取用户角色和菜单信息
    res =>>  IUserRoleMenuVo {
      menus: IMenuResponseVo[] //菜单信息 
      roles: IJiaoSeXiangYingXinXi[] //角色信息 
    }
  */
  Boss_System_User_GetRoleMenuGet: (): Promise<IUserRoleMenuVo> => {
    return request({
      url: `/boss/system/user/getRoleMenu`,
      method: "GET",
    });
  },
  /**
  * @description: 用户相关接口-查询用户信息
    res =>>  IUserInfoVo {
      account: string //登录账户(最长30位) 
      createTime: string //创建时间 
      locked: string //锁定标志(1:锁定;0:激活) 
      mobileArea: string //手机区号 
      mobilePhone: string //手机号 
      remark: string //备注(最长50) 
      sex: string //性别(0:未知;1:男;2:女) 
      updateTime: string //更新时间 
      userId: string //用户编号 
      userName: string //用户名(最长30位) 
      userType: string //人员类型(1:业务员;2:管理员;)  
    }
    req =>>  IBosssystemuserqueryByIdQueryParams {
      userId: string //用户编号 
    }
  */
  Boss_System_User_QueryByIdGet: (data: IBosssystemuserqueryByIdQueryParams = {}): Promise<IUserInfoVo> => {
    return request({
      url: `/boss/system/user/queryById`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户相关接口-分页查询用户信息
    res =>>  IPageResultUserInfoVo {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IUserInfoVo[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IUserQueryRequestVo {
      mobilePhone: string //手机号 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userName: string //用户名(支持模糊查询) 
    }
  */
  Boss_System_User_QueryPagingPost: (data: IUserQueryRequestVo = {}): Promise<IPageResultUserInfoVo> => {
    return request({
      url: `/boss/system/user/queryPaging`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-解绑谷歌验证码
    req =>>  IGoogleCodeReq {
      code: string //谷歌验证码 
    }
  */
  Boss_System_User_UnbindGooglePost: (data: IGoogleCodeReq = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/unbindGoogle`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户相关接口-修改用户
    req =>>  IUserUpdateVo {
      account: string //登录账户(最长30位) 
      locked: string //锁定标志(1:锁定;0:激活) 
      mobileArea: string //手机区号 
      mobilePhone: string //手机号 
      remark: string //备注(最长50) 
      sex: string //性别(0:未知;1:男;2:女) 
      userId: string //用户编号 
      userName: string //用户名(最长30位) 
      userType: string //人员类型(1:业务员;2:管理员;)  
    }
  */
  Boss_System_User_UpdatePost: (data: IUserUpdateVo = {}): Promise<null> => {
    return request({
      url: `/boss/system/user/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-银行卡 - 详情
    res =>>  IBankCardDetailResp {
      bankName: string //银行名称 
      bankNameEn: string //银行英文名称 
      bankNamePh: string //银行菲律宾名称 
      bankNameTh: string //银行泰语名称 
      bankNameVn: string //银行越南名称 
      currencyCode: string //法币，都好分割 
      props: IBankCardDetailPropResp[] //其他属性 
      status: number //状态：1 可用；0 不可用 
    }
    req =>>  IUserBankCardDetailReq {
      bizCardCode: string //业务卡号 
      userId: number //用户ID 
    }
  */
  Boss_User_BankCard_DetailPost: (data: IUserBankCardDetailReq = {}): Promise<IBankCardDetailResp> => {
    return request({
      url: `/boss/user/bankCard/detail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-编辑
    req =>>  IUserBankCardUpdateReq {
      bankName: string //银行名称 
      bizCardCode: string //业务卡号，更新或查看时，必传 
      currencyCode: string //法币，顿号（、）分割 
      props: IBankCardUpdatePropReq[] //其他属性 
      status: number //状态：1 可用；0 不可用 
      userId: number //用户ID 
    }
  */
  Boss_User_BankCard_UpdatePost: (data: IUserBankCardUpdateReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/bankCard/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-银行卡
    req =>>  IUserBankCardQueryReq {
      userId: number //用户ID 
    }
  */
  Boss_User_BankCardsPost: (data: IUserBankCardQueryReq = {}): Promise<IUserBankCardQueryResp[]> => {
    return request({
      url: `/boss/user/bankCards`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-禁用用户
    req =>>  IUpdateUserStatusReq {
      proxyUserId: number //包网商编号 
      remark: string //状态变更原因 
      userId: number //用户编号 
    }
  */
  Boss_User_DisableUserPost: (data: IUpdateUserStatusReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/disableUser`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 平台用户相关-批量禁用用户
   */
  Boss_User_DisableUser_BatchPost: (data: number[] = {}): Promise<null> => {
    return request({
      url: `/boss/user/disableUser/batch`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-启用用户
    req =>>  IUpdateUserStatusReq {
      proxyUserId: number //包网商编号 
      remark: string //状态变更原因 
      userId: number //用户编号 
    }
  */
  Boss_User_EnableUserPost: (data: IUpdateUserStatusReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/enableUser`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 平台用户相关-批量启用用户
   */
  Boss_User_EnableUser_BatchPost: (data: number[] = {}): Promise<null> => {
    return request({
      url: `/boss/user/enableUser/batch`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-封锁/解封用户
    req =>>  IXiuGaiYongHuFengJinZhuangTai {
      forbidden: boolean //封锁：true，解封：false 
      userId: number //用户id 
    }
  */
  Boss_User_ForbiddenUserPost: (data: IXiuGaiYongHuFengJinZhuangTai = {}): Promise<null> => {
    return request({
      url: `/boss/user/forbiddenUser`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-游戏记录
    res =>>  IPageResultUserGameRecordResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IUserGameRecordResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IUserGameRecordReq {
      end: number //结束时间 
      factoryCode: string //游戏渠道 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      start: number //开始时间 
      typeId: number //游戏类型id 
      userId: number //用户编号 
      userName: string //用户名 
    }
  */
  Boss_User_GameRecordPost: (data: IUserGameRecordReq = {}): Promise<IPageResultUserGameRecordResp> => {
    return request({
      url: `/boss/user/gameRecord`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-修改用户标签
    req =>>  IUserLabelUpdate {
      labelCode: string //用户标签编码 
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_Label_UpdatePost: (data: IUserLabelUpdate = {}): Promise<null> => {
    return request({
      url: `/boss/user/label/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-关联账号
    req =>>  IUserIdReq {
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_MatchPost: (data: IUserIdReq = {}): Promise<IUserRelationAccountResp[]> => {
    return request({
      url: `/boss/user/match`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-添加代理
    req =>>  IAddProxyReq {
      account: string //代理账号 
      currency: string //币种 
      password: string //密码 
      style: string //风格 
      timeZone: string //时区 如 +08:00 
      url: string //主地址 http(s)打头 
    }
  */
  Boss_User_Proxy_AddPost: (data: IAddProxyReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/add`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-添加代理域名
    req =>>  IAddProxyDomainReq {
      domain: string //域名(最长120) 
      proxyUid: number //代理编号 
    }
  */
  Boss_User_Proxy_AddDomainPost: (data: IAddProxyDomainReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/addDomain`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-币种配置
    req =>>  IProxyCurrencyReq {
      currencyCodes: string[] //币种编码 
      proxyId: number //代理编号 
    }
  */
  Boss_User_Proxy_Config_CurrencyPost: (data: IProxyCurrencyReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/config/currency`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-下线代理域名
    req =>>  IProxyDomainIdReq {
      proxyDomainId: number //域名编号 
    }
  */
  Boss_User_Proxy_OfflineDomainPost: (data: IProxyDomainIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/offlineDomain`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-上线代理域名
    req =>>  IProxyDomainIdReq {
      proxyDomainId: number //域名编号 
    }
  */
  Boss_User_Proxy_OnlineDomainPost: (data: IProxyDomainIdReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/onlineDomain`,
      method: "POST",
      data,
    });
  },
  /**
   * @description: 平台代理相关，实际是包网商管理-查询所有代理概要信息
   */
  Boss_User_Proxy_QueryAllPost: (): Promise<IProxySummaryResp[]> => {
    return request({
      url: `/boss/user/proxy/queryAll`,
      method: "POST",
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-查询代理信息
    res =>>  IPageResultProxyUserResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IProxyUserResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryProxyListReq {
      account: string //代理账号 
      end: string //注册时间结束 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      start: string //注册时间开始 
      userId: number //用户编号 
    }
  */
  Boss_User_Proxy_QueryProxyPost: (data: IQueryProxyListReq = {}): Promise<IPageResultProxyUserResp> => {
    return request({
      url: `/boss/user/proxy/queryProxy`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-查询代理域名信息
    req =>>  IProxyIdReq {
      proxyId: number //包网商编号 
    }
  */
  Boss_User_Proxy_QueryProxyDomainPost: (data: IProxyIdReq = {}): Promise<IProxyDomainResp[]> => {
    return request({
      url: `/boss/user/proxy/queryProxyDomain`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-修改代理域名
    req =>>  IUpdateProxyDomainReq {
      domain: string //域名(最长120) 
      proxyDomainId: number //域名编号 
      proxyUid: number //代理编号 
    }
  */
  Boss_User_Proxy_UpdateDomainPost: (data: IUpdateProxyDomainReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/updateDomain`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台代理相关，实际是包网商管理-修改代理信息
    req =>>  IUpdateProxyReq {
      proxyUid: number //代理编号 
      style: string //风格 
      url: string //主地址 http(s)打头 
    }
  */
  Boss_User_Proxy_UpdateProxyPost: (data: IUpdateProxyReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/proxy/updateProxy`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-查询用户账户
    res =>>  IUserAccountResp {
      balance: number //人民币总余额 
      channelAccount: IChannelAccountResp[] //渠道余额信息 
    }
    req =>>  IUserIdReq {
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_QueryPost: (data: IUserIdReq = {}): Promise<IUserAccountResp> => {
    return request({
      url: `/boss/user/query`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-个人数据概况
    res =>>  IUserDataSummary {
      accountBalance: number //账户余额 
      channelBalance: number //游戏账户余额 
      deposit: number //充值累计 
      effectiveBet: number //有效流水 
      reverseProfit: number //负盈利 
      rewardAmount: number //返佣累计 
      userId: number //用户编号 
      winnings: number //彩金累计 
      withdraw: number //提现累计 
    }
    req =>>  IUserIdReq {
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_QueryDataSummaryPost: (data: IUserIdReq = {}): Promise<IUserDataSummary> => {
    return request({
      url: `/boss/user/queryDataSummary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-查询用户详情
    res =>>  IUserDetailResp {
      account: string //账号 
      agentCreateTime: string //成为代理时间 
      agentLevel: number //代理级别 
      birthday: string //生日 
      createTime: string //注册时间 
      effective: number //有效会员 1:是 0:否 
      email: string //邮箱 
      experience: number //经验值 
      forbidden: boolean //封禁用户，true：封禁 
      inviteAccount: string //邀请人账号(所属代理) 
      inviteUid: number //邀请人编号 
      lastLogin: number //最后登录时间 
      lastLoginIp: string //最后一次登陆ip 
      layerCode: string //邀请码 
      mobileArea: string //手机区号 
      mobileNo: string //手机号 
      nickName: string //昵称 
      proxyAccount: string //包网商账号 
      proxyUserId: number //包网商编号 
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
      userType: number //用户类型 1:普通 4:代理 
      vipLevel: number //vip等级 
      vipLevelName: string //vip等级名称 
    }
    req =>>  IUserIdReq {
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_QueryDetailPost: (data: IUserIdReq = {}): Promise<IUserDetailResp> => {
    return request({
      url: `/boss/user/queryDetail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-查询用户列表
    res =>>  IPageResultUserResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IUserResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IQueryUserListReq {
      account: string //账号 
      end: string //注册时间结束 
      lastLoginIp: string //最后一次登陆ip 
      mobileNo: string //手机号 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //代理编号 
      registerIp: string //最后一次登陆ip 
      start: string //注册时间开始 
      userId: number //用户编号 
      userLabel: string //用户标签，多个逗号隔开 
      userName: string //用户名 
      userType: number //用户类型 1:普通 4:代理 
    }
  */
  Boss_User_QueryListPost: (data: IQueryUserListReq = {}): Promise<IPageResultUserResp> => {
    return request({
      url: `/boss/user/queryList`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-查询用户操作日志
    res =>>  IPageResultUserOperationLogResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IUserOperationLogResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IUserOperationLogReq {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      userId: number //用户编号 
    }
  */
  Boss_User_QueryLogPost: (data: IUserOperationLogReq = {}): Promise<IPageResultUserOperationLogResp> => {
    return request({
      url: `/boss/user/queryLog`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-修改备注
    req =>>  IUserReminderUpdate {
      proxyUserId: number //包网商编号 
      reminder: string //用户备注 
      userId: number //用户编号 
    }
  */
  Boss_User_Reminder_UpdatePost: (data: IUserReminderUpdate = {}): Promise<null> => {
    return request({
      url: `/boss/user/reminder/update`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-重置用户密码
    req =>>  IResetPasswordReq {
      password: string //密码 
      proxyUserId: number //包网商编号 
      userId: number //用户编号 
    }
  */
  Boss_User_ResetPasswordPost: (data: IResetPasswordReq = {}): Promise<null> => {
    return request({
      url: `/boss/user/resetPassword`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户统计-导出excel
    req =>>  IBossuserstatisticsexportExcelQueryParams {
      groupBy: number //统计纬度:1 按天；3 按月 
      start: number //开始时间 
      end: number //结束时间 
    }
  */
  Boss_User_Statistics_ExportExcelGet: (data: IBossuserstatisticsexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/user/statistics/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户统计-总用户信息
    res =>>  IUserStatisticsInfoResp {
      totalCount: number //总用户 
    }
  */
  Boss_User_Statistics_InfoPost: (): Promise<IUserStatisticsInfoResp> => {
    return request({
      url: `/boss/user/statistics/info`,
      method: "POST",
    });
  },
  /**
  * @description: 用户统计-记录
    req =>>  IUserStatisticsReq {
      end: string //结束时间 
      groupBy: number //统计纬度:1 按天；3 按月 
      start: string //开始时间 
    }
  */
  Boss_User_Statistics_ListPost: (data: IUserStatisticsReq = {}): Promise<IUserStatisticsResp[]> => {
    return request({
      url: `/boss/user/statistics/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 平台用户相关-团队数据
    req =>>  ITeamStatisticsReq {
      statDateType: number //统计日期类型:0 今日；7 近7天；30 近30天；9999 全部 
      userId: number //会员ID 
    }
    res =>>  ITeamStatisticsResp {
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
  Boss_User_TeamPost: (data: ITeamStatisticsReq = {}): Promise<ITeamStatisticsResp> => {
    return request({
      url: `/boss/user/team`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户彩金发放记录-导出excel
    req =>>  IBosswinningsrecordexportExcelQueryParams {
      proxyUid: number //包网商id 
      userId: number //用户id 
      start: number //到账时间 
      end: number //到账时间 
      activityType: string //活动类型 
    }
  */
  Boss_Winnings_Record_ExportExcelGet: (data: IBosswinningsrecordexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/winnings/record/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 用户彩金发放记录-彩金记录查询
    res =>>  IPageResultYongHuCaiJinFaFangJiLu {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IYongHuCaiJinFaFangJiLu[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IBossDuanChaXunYongHuCaiJinJiLuCanShuDuiXiang {
      activityType: string //活动类型 
      end: string //到账时间 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //包网商id 
      start: string //到账时间 
      userId: number //用户id 
    }
  */
  Boss_Winnings_Record_PagePost: (data: IBossDuanChaXunYongHuCaiJinJiLuCanShuDuiXiang = {}): Promise<IPageResultYongHuCaiJinFaFangJiLu> => {
    return request({
      url: `/boss/winnings/record/page`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 用户彩金发放记录-查询统计信息
    req =>>  IBossDuanChaXunYongHuCaiJinJiLuCanShuDuiXiang {
      activityType: string //活动类型 
      end: string //到账时间 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      proxyUid: number //包网商id 
      start: string //到账时间 
      userId: number //用户id 
    }
    res =>>  ICaiJinTongJiShuJuBossZhiDuiXiang {
      registerAmount: number //注册彩金总发放数 
      signInAmount: number //签到彩金总发放数 
      systemAllocateAmount: number //红包发放数量 
      totalAmount: number //彩金总发放数 
    }
  */
  Boss_Winnings_Record_StatisticPost: (data: IBossDuanChaXunYongHuCaiJinJiLuCanShuDuiXiang = {}): Promise<ICaiJinTongJiShuJuBossZhiDuiXiang> => {
    return request({
      url: `/boss/winnings/record/statistic`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币和提现配置-获取数字货币提币配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Withdraw_Config_GetDigital_$chain$Post: (code: string = ""): Promise<IWithdrawInfoResp> => {
    return request({
      url: `/boss/withdraw/config/getDigital/${code}`,
      method: "POST",
    });
  },
  /**
  * @description: 提币和提现配置-获取法币提现配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Withdraw_Config_GetLeger_$currencyCode$Post: (code: string = ""): Promise<IWithdrawInfoResp> => {
    return request({
      url: `/boss/withdraw/config/getLeger/${code}`,
      method: "POST",
    });
  },
  /**
  * @description: 提币和提现配置-设置数字货币提币配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Withdraw_Config_SetDigitalPost: (data: IWithdrawInfoResp = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/config/setDigital`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币和提现配置-设置提现配置
    req =>>  IWithdrawInfoResp {
      chain: string //链:TRON,BSC,ETH；设置法币传对应法币 
      chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用 
      fee: number //手续费 
      feeType: number //手续费类型：1 百分比；2 固定值 
      status: number //总提币状态(1:开启 0:关闭) 
      times: number //限制次数 
      withdrawMax: number //最大提币金额 
      withdrawMin: number //最小提币金额 
    }
  */
  Boss_Withdraw_Config_SetLegerPost: (data: IWithdrawInfoResp = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/config/setLeger`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-审核通过
    req =>>  IWithdrawNoReq {
      channelType: string //通道类型 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_CheckPassPost: (data: IWithdrawNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/checkPass`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-审核拒绝
    req =>>  IWithdrawRefuseReq {
      channelType: string //通道类型 
      refuseDesc: string //拒绝理由 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_CheckRefusePost: (data: IWithdrawRefuseReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/checkRefuse`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-提币记录 - 导出excel
    req =>>  IBosswithdrawdigitalexportExcelQueryParams {
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      status: number //状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 
      userId: number //用户编号 
      userAccount: string //用户账号 
      withdrawNo: number //订单编号 
      currencyType: number //充值类型:1 数字货币；2 法币 
      start: string //交易时间开始 
      end: string //交易时间结束 
      proxyUserId: number //归属包网商ID 
      parentId: number //上级代理ID 
      parentAccount: string //上级代理帐号 
    }
  */
  Boss_Withdraw_Digital_ExportExcelGet: (data: IBosswithdrawdigitalexportExcelQueryParams = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/exportExcel`,
      method: "GET",
      params: data,
    });
  },
  /**
  * @description: 提币信息-提现失败
    req =>>  IWithdrawRefuseReq {
      channelType: string //通道类型 
      refuseDesc: string //拒绝理由 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_FailPost: (data: IWithdrawRefuseReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/fail`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-收款信息
    req =>>  IDepositNoReq {
      depositNo: string //充值单号 
    }
  */
  Boss_Withdraw_Digital_GetCardPost: (data: IDepositNoReq = {}): Promise<IDepositBankCardResp[]> => {
    return request({
      url: `/boss/withdraw/digital/getCard`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-提币记录
    res =>>  IPageResultWithdrawResp {
      pageIndex: number //没有提供描述 
      pageSize: number //没有提供描述 
      rows: IWithdrawResp[] //没有提供描述 
      totalNum: number //没有提供描述 
      totalPages: number //没有提供描述 
    }
    req =>>  IWithdrawReq {
      currencyType: number //充值类型:1 数字货币；2 法币 
      end: string //交易时间结束 
      pageIndex: number //页码 从1开始计数 
      pageSize: number //页容 区间[1, 1000] 
      parentAccount: string //上级代理帐号 
      parentId: number //上级代理ID 
      proxyUserId: number //归属包网商ID 
      start: string //交易时间开始 
      status: number //状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 
      userAccount: string //用户账号 
      userId: number //用户编号 
      withdrawNo: number //订单编号 
    }
  */
  Boss_Withdraw_Digital_ListPost: (data: IWithdrawReq = {}): Promise<IPageResultWithdrawResp> => {
    return request({
      url: `/boss/withdraw/digital/list`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-手动发起提现支付重试
    req =>>  IWithdrawNoReq {
      channelType: string //通道类型 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_ManualReTryWithdrawPost: (data: IWithdrawNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/manualReTryWithdraw`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-提现成功
    req =>>  IWithdrawNoReq {
      channelType: string //通道类型 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_SuccessPost: (data: IWithdrawNoReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/success`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-汇总信息
    req =>>  IDepositSummaryReq {
      end: string //结束日期 
      proxyUserId: number //代理商包网商编号,全部传0 
      start: string //开始日期 
    }
    res =>>  IWithdrawSummaryResp {
      withdrawAmount: number //总提款 
      withdrawDigitalAmount: number //USDT提款 
      withdrawLegalAmount: number //法币提款 
    }
  */
  Boss_Withdraw_Digital_SummaryPost: (data: IDepositSummaryReq = {}): Promise<IWithdrawSummaryResp> => {
    return request({
      url: `/boss/withdraw/digital/summary`,
      method: "POST",
      data,
    });
  },
  /**
  * @description: 提币信息-确认提现
    req =>>  IWithdrawNoChannelTypeReq {
      channelType: string //通道类型 
      withdrawNo: string //提币/提现单号 
    }
  */
  Boss_Withdraw_Digital_WithdrawConfirmPost: (data: IWithdrawNoChannelTypeReq = {}): Promise<null> => {
    return request({
      url: `/boss/withdraw/digital/withdrawConfirm`,
      method: "POST",
      data,
    });
  },
};

interface IAccountCurrentTotalResp {
  /**盘内余额(不包括游戏账户和冻结余额) */
  accountBalance: number;
  /**盘内总余额(包括冻结余额, 不包括游戏账户) */
  accountTotal: number;
  /**游戏账户余额 */
  channelBalance: number;
}
interface IAccountDailyTotalResp {
  /**余额 */
  amount: number;
  /**日期 */
  period: string;
}
interface IAddArticleReq {
  /**内容(最大不能超过2000) */
  content: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**标题(最大不能超过64) */
  title: string;
}
interface IAddBannerReq {
  /**文件编号 */
  fileNo: string;
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**链接(最大不能超过256) */
  url: string;
}
interface IAddGameAreaReq {
  /**区域名称 */
  areaName: string;
  /**区域英文名称 */
  areaNameEn: string;
  /**区域菲律宾名称 */
  areaNamePh: string;
  /**区域泰语名称 */
  areaNameTh: string;
  /**区域越南名称 */
  areaNameVn: string;
  /**banner */
  banner: string;
  /**logo */
  icon: string;
  /**包网商id */
  proxyUid: number;
  /**权重 */
  sortNo: number;
  /**风格 */
  style: string;
}
interface IAddProxyChoiceReq {
  /**游戏编号 */
  proxyGameIds: number[];
  /**代理编号 */
  proxyId: number;
}
interface IAddProxyDomainReq {
  /**域名(最长120) */
  domain: string;
  /**代理编号 */
  proxyUid: number;
}
interface IAddProxyGameReq {
  /**游戏编号 */
  gameIds: number[];
  /**代理编号 */
  proxyId: number;
}
interface IAddProxyReq {
  /**代理账号 */
  account: string;
  /**币种 */
  currency: string;
  /**密码 */
  password: string;
  /**风格 */
  style: string;
  /**时区 如 +08:00 */
  timeZone: string;
  /**主地址 http(s)打头 */
  url: string;
}
interface IAddTypeReq {
  /**厂商编码 */
  factoryCode: string;
  /**游戏主分类Code */
  gameMainTypeCode: string;
  /**类型名称 */
  typeName: string;
}
interface IAddressReq {
  /**地址 */
  address: string;
  /**链 币安:BSC 波场:TRON */
  chain: string;
}
interface IAdjustAddReq {
  /**出金账户类型 1:普通账户 4:借款账户 */
  accountType: number;
  /**入金数量 */
  amount: number;
  /**币种 */
  currency: string;
  /**出金用户编号 当出金账户类型为1时必须传值 */
  fromUid: number;
  /**入金用户编号 */
  toUid: number;
}
interface IAdjustQueryReq {
  /**出金账户 */
  fromUid: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**入金账户 */
  toUid: number;
}
interface IAdjustQueryResp {
  /**账户类型 1:普通账户 4:借款账户 */
  accountType: number;
  /**调账编号 */
  adjustNo: string;
  /**调整金额 */
  amount: number;
  /**创建时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**出金用户 */
  fromUid: string;
  /**入金用户 */
  toUid: number;
}
interface IAgentSettleReq {
  /**代理ID */
  agentId: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商ID */
  proxyId: number;
  /**状态 3 待线下或自动结算 8 未达成条件 9 结算完成 */
  status: number;
}
interface IAgentSettleResp {
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
interface IAllocationPaymentChannelReq {
  /**支付渠道 */
  paymentChannelList: string[];
  /**包网商id */
  proxyUid: number;
}
interface IAreaIdReq {
  /**区域编号 */
  areaId: number;
  /**包网商id */
  proxyUid: number;
}
interface IArticleIdReq {
  /**公告编号 */
  articleNo: string;
}
interface IArticleResp {
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
interface IAssetChangeLogReq {
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
interface IAssetChangeLogResp {
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
interface IAssetChangeLogType {
  /**下拉编码 */
  code: string;
  /**下拉文本 */
  text: string;
}
interface IBankCardDeleteReq {
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
}
interface IBankCardDetailPropResp {
  /**属性编码 */
  propCode: string;
  /**没有提供描述 */
  propDesc: string;
  /**没有提供描述 */
  propLen: number;
  /**属性名 */
  propName: string;
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
interface IBankCardDetailReq {
  /**业务卡号，更新或查看时，必传 */
  bizCardCode: string;
}
interface IBankCardDetailResp {
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
  /**状态：1 可用；0 不可用 */
  status: number;
}
interface IBankCardQueryReq {
  /**结束时间 */
  end: string;
  /**开始时间 */
  start: string;
  /**状态：1 可用；0 不可用 */
  status: number;
}
interface IBankCardQueryResp {
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
interface IBankCardUpdatePropReq {
  /**属性编码 */
  propCode: string;
  /**属性名 */
  propName: string;
  /**值 */
  propValue: string;
}
interface IBankCardUpdateReq {
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
}
interface IBankDetailResp {
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
interface IBankQueryReq {
  /**银行名称 */
  bankName: string;
}
interface IBankQueryResp {
  /**银行信息数量 */
  bankCount: number;
  /**银行名称 */
  bankName: string;
  /**更新时间 */
  updateTime: string;
}
interface IBannerNoReq {
  /**横幅编号 */
  bannerNo: string;
}
interface IBannerResp {
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
interface IBaseGameListReq {
  /**游戏渠道编号 */
  channelId: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**所属类型 */
  gameType: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
interface IBaseGameListResp {
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**创建时间 */
  createTime: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏code */
  gameCode: string;
  /**游戏id */
  gameId: number;
  /**游戏名称 */
  gameName: string;
  /**游戏英文名称 */
  gameNameEn: string;
  /**游戏类型编号 */
  gameType: number;
  /**游戏类型名称 */
  gameTypeName: string;
  /**图片编号 */
  icon: string;
  /**图片编号 */
  icon2: string;
  /**icon链接 */
  icon2Url: string;
  /**图片编号 */
  icon3: string;
  /**icon链接 */
  icon3Url: string;
  /**icon链接 */
  iconUrl: string;
  /**标签 */
  label: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
}
interface IBaseGameReq {
  /**游戏渠道名称 */
  channelName: string;
  /**厂商 */
  factoryCode: string;
  /**游戏名 */
  gameName: string;
}
interface IBaseGameResp {
  /**渠道名称 */
  channelName: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏id */
  gameId: number;
  /**游戏名称 */
  gameName: string;
  /**游戏英文名称 */
  gameNameEn: string;
  /**游戏类型名称 */
  gameTypeName: string;
  /**图片编号 */
  icon: string;
  /**图片编号 */
  icon2: string;
  /**icon链接 */
  icon2Url: string;
  /**图片编号 */
  icon3: string;
  /**icon链接 */
  icon3Url: string;
  /**icon链接 */
  iconUrl: string;
  /**标签 */
  label: string;
  /**更新时间 */
  updateTime: string;
}
interface IChangeLogoReq {
  /**厂商编号 */
  factoryCode: string;
  /**渠道logo */
  icon: string;
}
interface IChannelAccountResp {
  /**余额 */
  balance: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
}
interface IChannelDepostWithdrawSummaryReq {
  /**结束日期 */
  end: string;
  /**代理商包网商编号,全部传0 */
  proxyUserId: number;
  /**开始日期 */
  start: string;
}
interface IChannelDepostWithdrawSummaryResp {
  /**充值金额（原始币种） */
  depositAmount: number;
  /**充值金额（基础币种，已扣手续费） */
  depositBaseAmount: number;
  /**提现金额（原始币种） */
  withdrawAmount: number;
  /**提现金额（基础币种，已扣手续费） */
  withdrawBaseAmount: number;
}
interface IChannelIdReq {
  /**渠道编号 */
  channelId: string;
}
interface IChannelRateResp {
  /**币种 */
  currencyCode: string;
  /**汇率 */
  rate: number;
  /**更新时间 */
  updateTime: string;
}
interface IChannelRateUpdateReq {
  /**币种 */
  currencyCode: string;
  /**汇率 */
  rate: number;
}
interface IChannelTypeResp {
  /**游戏渠道 */
  factoryCode: string;
  /**类型编号 */
  typeId: number;
  /**游戏类型名称 */
  typeName: string;
}
interface ICheckLogRequestVo {
  /**业务代码 WITHDRAW_COIN 提币  USER_CERT_AUTH  实名认证 */
  bizCode: string;
  /**业务编号 */
  bizId: string;
}
interface ICheckLogVo {
  /**业务编号 */
  bizId: string;
  /**审核结果 1通过 2不通过  */
  checkResult: number;
  /**审核类型 1初审 2复审 */
  checkType: number;
  /**审核人编号  */
  checkUserId: string;
  /**审核人姓名 */
  checkUserName: string;
  /**审核时间 */
  createTime: string;
  /**备注 */
  remark: string;
}
interface IChessCardGameRecordReq {
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
interface IChessCardGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface IChickenGameRecordReq {
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
interface IChickenGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**结束时间 */
  endTime: number;
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
interface ICollectReq {
  /**最小归集金额 */
  minAmount: number;
  /**归集周期(小时) */
  period: number;
}
interface ICollectResp {
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
interface ICollectionAccountResp {
  /**usdt-bsc */
  bscUsdtAmount: number;
  /**usdt-trc */
  trcUsdtAmount: number;
}
interface ICurrencyQueryReq {
  /**结束时间 */
  end: string;
  /**币种中文/代码 */
  keyword: string;
  /**开始时间 */
  start: string;
  /**状态：1 可用；0 不可用 */
  status: number;
}
interface IDailyStatisticsReq {
  /**结束日期 */
  end: string;
  /**起始日期 */
  start: string;
  /**代理商包网商编号,全部传0 */
  userId: number;
}
interface IDeleteTypeReq {
  /**厂商编码 */
  factoryCode: string;
  /**类型名称 */
  typeName: string;
}
interface IDepositBankCardResp {
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
interface IDepositNoReq {
  /**充值单号 */
  depositNo: string;
}
interface IDepositQueryReq {
  /**充值类型:1 数字货币；2 法币 */
  currencyType: number;
  /**订单编号 */
  depositNo: number;
  /**交易时间结束 */
  end: string;
  /**充币地址 */
  fromAddress: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**上级代理帐号 */
  parentAccount: string;
  /**上级代理ID */
  parentId: number;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**代理ID */
  proxyUserId: number;
  /**交易时间开始 */
  start: string;
  /**状态：0:待审核 1:审核通过 2:审核拒绝 */
  status: number;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
}
interface IDepositQueryResp {
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
  /**渠道类型 */
  channelType: string;
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
  /**归属包网商 */
  proxyUserAccount: string;
  /**代理ID */
  proxyUserId: number;
  /**汇率 */
  rate: number;
  /**拒绝理由 */
  refuseDesc: string;
  /**备注 */
  reminder: string;
  /**状态:0:待审核 1:审核通过 2:审核拒绝 */
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
interface IDepositRefuseReq {
  /**充值单号 */
  depositNo: string;
  /**拒绝理由 */
  refuseDesc: string;
}
interface IDepositSummaryReq {
  /**结束日期 */
  end: string;
  /**代理商包网商编号,全部传0 */
  proxyUserId: number;
  /**开始日期 */
  start: string;
}
interface IDepositSummaryResp {
  /**总存款 */
  depositAmount: number;
  /**USDT存款 */
  depositDigitalAmount: number;
  /**法币存款 */
  depositLegalAmount: number;
}
interface IDepositUserCountResp {
  /**充值人数 */
  depositUserCount: number;
  /**日期 */
  period: string;
  /**充值人数 */
  withdrawUserCount: number;
}
interface IDictionaryBaseVo {
  /**对照码 */
  code: string;
  /**代码描述 */
  codeDesc: string;
  /**编辑模式 0:只读;1:可编辑 */
  editMode: string;
  /**字典对照字段 */
  field: string;
  /**对照字段名称 */
  fieldName: string;
  /**备注 */
  remark: string;
  /**排序号(序号越小排序越靠前) */
  sortNo: number;
}
interface IDictionaryPagingRequestVo {
  /**对照字段 */
  field: string;
  /**页码(从1开始) */
  pageIndex: number;
  /**页容[1-200] */
  pageSize: number;
}
interface IDictionaryResponseVo {
  /**对照码 */
  code: string;
  /**代码描述 */
  codeDesc: string;
  /**字典编号 */
  codeId: string;
  /**创建时间 */
  createTime: string;
  /**编辑模式 0:只读;1:可编辑 */
  editMode: string;
  /**字典对照字段 */
  field: string;
  /**对照字段名称 */
  fieldName: string;
  /**备注 */
  remark: string;
  /**排序号(序号越小排序越靠前) */
  sortNo: number;
  /**更新时间 */
  updateTime: string;
}
interface IDictionarySimpleVo {
  /**对照码 */
  code: string;
  /**代码描述 */
  codeDesc: string;
  /**字典对照字段 */
  field: string;
  /**对照字段名称 */
  fieldName: string;
  /**排序号(序号越小排序越靠前) */
  sortNo: number;
}
interface IDictionaryUpdateVo {
  /**对照码 */
  code: string;
  /**代码描述 */
  codeDesc: string;
  /**字典编号 */
  codeId: string;
  /**编辑模式 0:只读;1:可编辑 */
  editMode: string;
  /**字典对照字段 */
  field: string;
  /**对照字段名称 */
  fieldName: string;
  /**备注 */
  remark: string;
  /**排序号(序号越小排序越靠前) */
  sortNo: number;
}
interface IElectronGameRecordReq {
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
interface IElectronGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface IEsportGameRecordReq {
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
interface IEsportGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**比赛时间 */
  competitionTime: string;
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
interface IFactoryCodeReq {
  /**厂商编号 */
  factoryCode: string;
}
interface IFeeStatisticsReq {
  /**结束日期 */
  end: string;
  /**代理商包网商编号,全部传null */
  proxyUserId: number;
  /**起始日期 */
  start: string;
}
interface IFeeStatisticsResp {
  /**USDT手续费 */
  digitalFee: number;
  /**手续费 */
  fee: number;
  /**法币手续费 */
  legalFee: number;
}
interface IFetchGameRecordReq {
  /**渠道编号 */
  channelId: string;
  /**结束时间 */
  end: number;
  /**起始时间 */
  start: number;
}
interface IFishGameRecordReq {
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
interface IFishGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface IGameAreaResp {
  /**区域编号 */
  areaId: number;
  /**区域名称 */
  areaName: string;
  /**区域英文名称 */
  areaNameEn: string;
  /**区域菲律宾名称 */
  areaNamePh: string;
  /**区域泰语名称 */
  areaNameTh: string;
  /**区域越南名称 */
  areaNameVn: string;
  /**区域banner */
  banner: string;
  /**banner链接 */
  bannerUrl: string;
  /**渠道数量 */
  channelCount: number;
  /**创建时间 */
  createTime: string;
  /**游戏数量 */
  gameCount: number;
  /**区域icon */
  icon: string;
  /**icon链接 */
  iconUrl: string;
  /**区域权重 */
  sortNo: number;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**风格 */
  style: string;
  /**更新时间 */
  updateTime: string;
}
interface IGameChannelResp {
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**创建时间 */
  createTime: string;
  /**游戏个数 */
  gameCount: number;
  /**渠道logo */
  icon: string;
  /**icon链接 */
  iconUrl: string;
  /**游戏积分比 */
  scoreRate: number;
  /**类型个数 */
  typeCount: number;
  /**更新时间 */
  updateTime: string;
}
interface IGameChannelStatisticsReq {
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
  /**包网商编号 */
  proxyUid: number;
  /**开始时间 */
  start: number;
}
interface IGameChannelStatisticsResp {
  /**总投注 */
  betAmount: number;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**游戏次数 */
  count: number;
  /**厂商类型 */
  factoryCode: string;
  /**游戏类型ID */
  gameType: number;
  /**游戏类型 */
  gameTypeName: string;
  /**总输 */
  lose: number;
  /**统计日期 */
  period: string;
  /**包网商名称 */
  proxyName: string;
  /**包网商id */
  proxyUid: number;
  /**总结果 */
  result: number;
  /**总抽水 */
  revenue: number;
  /**有效投注 */
  validAmount: number;
  /**总赢 */
  win: number;
}
interface IGameChannelSummary {
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
}
interface IGameFactoryResp {
  /**创建时间 */
  createTime: string;
  /**厂商编码 */
  factoryCode: string;
  /**厂商名称 */
  factoryName: string;
  /**厂商icon */
  icon: string;
  /**厂商icon链接 */
  iconUrl: string;
  /**类型个数 */
  typeCount: number;
}
interface IGameFactorySimpleResp {
  /**厂商编码 */
  factoryCode: string;
  /**厂商名称 */
  factoryName: string;
}
interface IGameFactorySummary {
  /**厂商编号 */
  factoryCode: string;
  /**厂商名称 */
  factoryName: string;
}
interface IGameMainTypeResp {
  /**主类型编号 */
  gameMainTypeCode: string;
  /**主类型名称 */
  gameMainTypeName: string;
}
interface IGameProxyStatisticsResp {
  /**总投注 */
  betAmount: number;
  /**总局数 */
  count: number;
  /**总输 */
  lose: number;
  /**代理用户账号 */
  proxyAccount: string;
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
interface IGameSummaryReq {
  /**结束时间 */
  end: number;
  /**开始时间 */
  start: number;
  /**用户编号 */
  userId: number;
  /**用户编号 */
  userName: string;
}
interface IGameSummaryResp {
  /**总有效流水 */
  gameValidAmount: number;
  /**总盘负盈利 */
  negativeProfitAmount: number;
}
interface IGameTypeQueryReq {
  /**厂商编码 */
  factoryCode: string;
}
interface IGameTypeResp {
  /**创建时间 */
  createTime: string;
  /**厂商编码 */
  factoryCode: string;
  /**游戏数量 */
  gameCount: number;
  /**主类型编号 */
  gameMainTypeCode: string;
  /**类型编号 */
  typeId: number;
  /**类型名称 */
  typeName: string;
  /**更新时间 */
  updateTime: string;
}
interface IGoogleCodeReq {
  /**谷歌验证码 */
  code: string;
}
interface IGoogleSecretResp {
  /**密钥 */
  googleSecret: string;
  /**google验证二维码字符串,根据这个数据生成需要的被google验证扫描的二维码 */
  otpURL: string;
}
interface IHotAccountResp {
  /**头寸币安币余额 */
  bscAmount: number;
  /**头寸波场币余额 */
  tronAmount: number;
  /**头寸USDT余额 */
  usdtAmount: number;
  /**币安USDT余额 */
  usdtAmountBsc: number;
}
interface ILiveVideoGameRecordReq {
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
interface ILiveVideoGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface ILoginRequestVo {
  /**账户编号 */
  accountId: string;
  /**谷歌验证码 */
  googleCode: string;
  /**账户密码 */
  password: string;
}
interface ILoginVo {
  /**登录令牌 */
  token: string;
  /**用户信息 */
  userInfo: IUserInfo[];
}
interface ILotteryGameRecordReq {
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
interface ILotteryGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**副单号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**结束时间 */
  endTime: number;
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
interface IMenuBaseVo {
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
interface IMenuResponseVo {
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
interface IMenuUpdateVo {
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
interface IOperationLogReq {
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
interface IOperationLogVo {
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
interface IOrdinaryGameRecordReq {
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
interface IOrdinaryGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface IPageResultAdjustQueryResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IAdjustQueryResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultAgentSettleResp {
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
interface IPageResultArticleResp {
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
interface IPageResultAssetChangeLogResp {
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
interface IPageResultBannerResp {
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
interface IPageResultBaseGameListResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IBaseGameListResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultChessCardGameRecordResp {
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
interface IPageResultChickenGameRecordResp {
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
interface IPageResultDepositQueryResp {
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
interface IPageResultDictionaryResponseVo {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IDictionaryResponseVo[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultElectronGameRecordResp {
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
interface IPageResultEsportGameRecordResp {
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
interface IPageResultFishGameRecordResp {
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
interface IPageResultGameAreaResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameAreaResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultGameChannelResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameChannelResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultGameChannelStatisticsResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameChannelStatisticsResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultGameFactoryResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IGameFactoryResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultGameProxyStatisticsResp {
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
interface IPageResultLiveVideoGameRecordResp {
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
interface IPageResultLotteryGameRecordResp {
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
interface IPageResultOperationLogVo {
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
interface IPageResultOrdinaryGameRecordResp {
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
interface IPageResultPlatformSettleResp {
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
interface IPageResultProxyGameResp {
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
interface IPageResultProxyRebateRecordResp {
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
interface IPageResultProxySettleResp {
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
interface IPageResultProxyUserResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IProxyUserResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultSportGameRecordResp {
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
interface IPageResultUserGameRecordResp {
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
interface IPageResultUserInfoVo {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserInfoVo[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultUserOperationLogResp {
  /**没有提供描述 */
  pageIndex: number;
  /**没有提供描述 */
  pageSize: number;
  /**没有提供描述 */
  rows: IUserOperationLogResp[];
  /**没有提供描述 */
  totalNum: number;
  /**没有提供描述 */
  totalPages: number;
}
interface IPageResultUserResp {
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
interface IPageResultWithdrawResp {
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
interface IPageResultYongHuCaiJinFaFangJiLu {
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
interface IPageResultJiaoSeXiangYingXinXi {
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
interface IPageResultFanShuiFangAnXinXi {
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
interface IPaymentChannelReq {
  /**渠道类型 */
  channelType: string;
  /**文件编号 */
  docNo: string;
  /**状态 1:启用 0:禁用 */
  status: number;
}
interface IPaymentChannelResq {
  /**回调ip白名单 */
  callbackIp: string;
  /**渠道名称 */
  channelName: string;
  /**渠道类型 */
  channelType: string;
  /**文档编号 */
  docNo: string;
  /**状态 1:启用 0:禁用 */
  status: number;
  /**更新时间 */
  updateTime: string;
  /**logoUrl */
  url: string;
}
interface IPlanIdReq {
  /**方案编号 */
  planId: number;
}
interface IPlanQueryReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**方案名称 */
  planName: string;
  /**方案状态 */
  status: number;
}
interface IPlatformAccountResp {
  /**手续费账户(CNY) */
  feeCNY: number;
  /**手续费账户(USDT)，这是充U的手续费 */
  feeUSDT: number;
}
interface IPlatformSettleReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商ID */
  proxyId: number;
  /**1 待线下结算;2 已结算 */
  status: number;
}
interface IPlatformSettleResp {
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
interface IPrivateKeyReq {
  /**链 币安:BSC 波场:TRON */
  chain: string;
  /**私钥 */
  privateKey: string;
}
interface IProxyAchievingConditionsResp {
  /**结算周期:DAY,WEEK,HALF_MONTH,MONTH */
  calculationPeriod: string;
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
interface IProxyAchievingQueryReq {
  /**包网商编号 */
  proxyId: number;
  /**用户编号 */
  userId: number;
}
interface IProxyChoiceGameResp {
  /**大图 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
  /**代理编号 */
  proxyId: number;
}
interface IProxyCurrencyQueryReq {
  /**代理编号 */
  proxyId: number;
}
interface IProxyCurrencyReq {
  /**币种编码 */
  currencyCodes: string[];
  /**代理编号 */
  proxyId: number;
}
interface IProxyDailyStatResp {
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
interface IProxyDisableFactoryReq {
  /**厂商编码 */
  factoryCodes: string[];
  /**包网商编号 */
  proxyId: number;
}
interface IProxyDomainIdReq {
  /**域名编号 */
  proxyDomainId: number;
}
interface IProxyDomainResp {
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
interface IProxyGameIdReq {
  /**代理游戏编号 */
  proxyGameId: number;
}
interface IProxyGameReq {
  /**游戏渠道名称 */
  channelName: string;
  /**厂商 */
  factoryCode: string;
  /**游戏名 */
  gameName: string;
  /**包网商id */
  proxyUid: number;
}
interface IProxyGameResp {
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
interface IProxyGameUpdateAreaReq {
  /**区域编号 */
  areaId: number;
  /**代理游戏编号 */
  proxyGameIds: number[];
  /**代理编号 */
  proxyUid: number;
}
interface IProxyGameUpdatePopularReq {
  /**是否热门：true是，false否 */
  popular: boolean;
  /**代理游戏编号 */
  proxyGameIds: number[];
  /**代理编号 */
  proxyUid: number;
}
interface IProxyIdReq {
  /**包网商编号 */
  proxyId: number;
}
interface IProxyNoReq {
  /**包网商编号 */
  proxyId: number;
}
interface IProxyPaymentChannelRelation {
  /**没有提供描述 */
  channelName: string;
  /**没有提供描述 */
  channelType: string;
  /**没有提供描述 */
  createTime: string;
  /**没有提供描述 */
  id: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**没有提供描述 */
  proxyUid: number;
  /**没有提供描述 */
  updateTime: string;
}
interface IProxyRebateRecordResp {
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
  /**包网商编号 */
  proxyId: number;
  /**包网商名称 */
  proxyName: string;
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
interface IProxySettleResp {
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
interface IProxySummaryResp {
  /**代理账号 */
  account: string;
  /**代理编号 */
  proxyUid: number;
}
interface IProxyUserResp {
  /**账号 */
  account: string;
  /**创建时间 */
  createTime: string;
  /**币种 */
  currency: string;
  /**手续费比例 */
  feeRate: number;
  /**最后登录时间 */
  lastLogin: number;
  /**用户状态变更原因 */
  remark: string;
  /**结算周期 DAY:每日 WEEK:每周 HALF_MONTH:半月 MONTH:每月 */
  settlementPeriod: string;
  /**用户状态 1:正常 0:锁定 */
  status: number;
  /**代理页面风格 */
  style: string;
  /**时区 如 +08:00 */
  timeZoneMe: string;
  /**主http(s)地址 */
  url: string;
  /**代理编号 */
  userId: number;
}
interface IQueryAccountTotalReq {
  /**结束日期 */
  end: string;
  /**起始日期 */
  start: string;
  /**代理商包网商编号,全部传0 */
  userId: number;
}
interface IQueryArticleReq {
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
interface IQueryBannerReq {
  /**语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH */
  lang: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
interface IQueryCurrentAccountTotalReq {
  /**代理商/包网商编号，全部传0 */
  userId: number;
}
interface IQueryGameAreaReq {
  /**区域名称 */
  areaName: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商id */
  proxyUid: number;
}
interface IQueryGameChannelReq {
  /**渠道名称 */
  channelName: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
interface IQueryGameFactoryReq {
  /**厂商编码 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
}
interface IQueryOrderBizResp {
  /**没有提供描述 */
  bizOrderNo: string;
  /**没有提供描述 */
  merchantId: string;
  /**没有提供描述 */
  msg: string;
  /**没有提供描述 */
  paymentAmount: number;
  /**没有提供描述 */
  paymentOrderNo: string;
  /**没有提供描述 */
  status: string;
}
interface IQueryPaymentChannelReq {
  /**包网商id */
  proxyUid: number;
  /**状态 1:启用 0:禁用 */
  status: number;
}
interface IQueryProxyGameReq {
  /**渠道编号 */
  channelId: string;
  /**游戏厂商 */
  factoryCode: string;
  /**游戏名称 */
  gameName: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**代理编号 */
  proxyId: number;
}
interface IQueryProxyListReq {
  /**代理账号 */
  account: string;
  /**注册时间结束 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**注册时间开始 */
  start: string;
  /**用户编号 */
  userId: number;
}
interface IQueryUserListReq {
  /**账号 */
  account: string;
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
  /**代理编号 */
  proxyUid: number;
  /**最后一次登陆ip */
  registerIp: string;
  /**注册时间开始 */
  start: string;
  /**用户编号 */
  userId: number;
  /**用户标签，多个逗号隔开 */
  userLabel: string;
  /**用户名 */
  userName: string;
  /**用户类型 1:普通 4:代理 */
  userType: number;
}
interface IRecordQueryReq {
  /**记录id */
  id: number;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**周期s */
  period: string;
  /**包网商id */
  proxyId: number;
  /**包网商名称 */
  proxyName: string;
  /**状态 */
  status: number;
  /**用户id */
  userId: number;
  /**用户名称 */
  userName: string;
}
interface IResetPasswordReq {
  /**密码 */
  password: string;
  /**包网商编号 */
  proxyUserId: number;
  /**用户编号 */
  userId: number;
}
interface IRoleBaseVo {
  /**备注(最长50) */
  remark: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
}
interface IRoleLockRequestVo {
  /**锁定标志 1:锁定;0:激活 */
  lockFlag: string;
  /**角色编号 */
  roleId: string;
}
interface IRoleMenuRequestVo {
  /**菜单编号集合 */
  menuIds: string[];
  /**角色编号 */
  roleId: string;
}
interface IRoleMenuResponseVo {
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
interface IRoleQueryRequestVo {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**角色描述 */
  remark: string;
  /**角色名称 */
  roleName: string;
}
interface IRoleUpdateVo {
  /**备注(最长50) */
  remark: string;
  /**角色编号 */
  roleId: string;
  /**角色名称(最长50) */
  roleName: string;
  /**角色类型(1:业务角色;2:管理角色) */
  roleType: string;
}
interface ISettleNoReq {
  /**结算单号 */
  settleNo: number;
}
interface ISingleParamVostring {
  /**请求参数 */
  data: string;
}
interface ISportGameRecordReq {
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
interface ISportGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**副单号 */
  bureauId: string;
  /**渠道Id */
  channelId: string;
  /**渠道名称 */
  channelName: string;
  /**结束时间 */
  endTime: number;
  /**详情 */
  extendInfo: string;
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
interface IStatisticsReq {
  /**结束日期 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**代理ID */
  proxyUid: number;
  /**开始日期 */
  start: string;
}
interface ISummaryReq {
  /**结束日期 */
  end: string;
  /**开始日期 */
  start: string;
}
interface ITeamStatisticsReq {
  /**统计日期类型:0 今日；7 近7天；30 近30天；9999 全部 */
  statDateType: number;
  /**会员ID */
  userId: number;
}
interface ITeamStatisticsResp {
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
interface IUSDTGengXinQingQiuXinXi {
  /**汇率 */
  rate: number;
}
interface IUpdateArticleReq {
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
interface IUpdateBannerReq {
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
interface IUpdateGameAreaReq {
  /**区域编号 */
  areaId: number;
  /**区域名称 */
  areaName: string;
  /**区域英文名称 */
  areaNameEn: string;
  /**区域菲律宾名称 */
  areaNamePh: string;
  /**区域泰语名称 */
  areaNameTh: string;
  /**区域越南名称 */
  areaNameVn: string;
  /**banner */
  banner: string;
  /**logo */
  icon: string;
  /**包网商id */
  proxyUid: number;
  /**权重 */
  sortNo: number;
  /**风格 */
  style: string;
}
interface IUpdateGameIconReq {
  /**游戏id */
  gameId: number;
  /**游戏icon */
  icon: string;
  /**游戏icon */
  icon2: string;
  /**游戏icon */
  icon3: string;
}
interface IUpdateGameLabelReq {
  /**游戏id */
  ids: number[];
  /**游戏类型 */
  label: string;
}
interface IUpdateGameTypeReq {
  /**游戏id集合 */
  gameIds: number[];
  /**游戏类型 */
  gameType: number;
}
interface IUpdateProxyChoiceGameReq {
  /**游戏图标 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
  /**代理编号 */
  proxyUid: number;
}
interface IUpdateProxyDomainReq {
  /**域名(最长120) */
  domain: string;
  /**域名编号 */
  proxyDomainId: number;
  /**代理编号 */
  proxyUid: number;
}
interface IUpdateProxyGameReq {
  /**游戏名称 */
  gameName: string;
  /**游戏图标 */
  icon: string;
  /**代理游戏编号 */
  proxyGameId: number;
}
interface IUpdateProxyReq {
  /**代理编号 */
  proxyUid: number;
  /**风格 */
  style: string;
  /**主地址 http(s)打头 */
  url: string;
}
interface IUpdateTypeReq {
  /**厂商编码 */
  factoryCode: string;
  /**游戏主分类Code */
  gameMainTypeCode: string;
  /**类型编号 */
  typeId: number;
  /**类型名称 */
  typeName: string;
}
interface IUpdateUserStatusReq {
  /**包网商编号 */
  proxyUserId: number;
  /**状态变更原因 */
  remark: string;
  /**用户编号 */
  userId: number;
}
interface IUploadResultResp {
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
interface IUserAccountBalanceResp {
  /**cny余额 */
  amountCNY: number;
  /**usdt余额 */
  amountUSDT: number;
}
interface IUserAccountResp {
  /**人民币总余额 */
  balance: number;
  /**渠道余额信息 */
  channelAccount: IChannelAccountResp[];
}
interface IUserAchievingBo {
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
interface IUserAchievingReq {
  /**用户Id */
  userId: number;
}
interface IUserActionStatisticsResp {
  /**活跃用户数 */
  activityCount: number;
  /**活跃用户折线数据 */
  activityData: IUserActivityDaily[];
  /**注册用户数 */
  registerCount: number;
  /**注册用户折线数据 */
  registerData: IUserActivityDaily[];
}
interface IUserActivityDaily {
  /**用户数 */
  count: number;
  /**日期 */
  period: string;
}
interface IUserAddVo {
  /**登录账户(最长30位) */
  account: string;
  /**锁定标志(1:锁定;0:激活) */
  locked: string;
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobilePhone: string;
  /**密码(长度在4-18位) */
  password: string;
  /**备注(最长50) */
  remark: string;
  /**性别(0:未知;1:男;2:女) */
  sex: string;
  /**用户名(最长30位) */
  userName: string;
  /**人员类型(1:业务员;2:管理员;)  */
  userType: string;
}
interface IUserBankCardDetailReq {
  /**业务卡号 */
  bizCardCode: string;
  /**用户ID */
  userId: number;
}
interface IUserBankCardQueryReq {
  /**用户ID */
  userId: number;
}
interface IUserBankCardQueryResp {
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
interface IUserBankCardUpdateReq {
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
interface IUserDataSummary {
  /**账户余额 */
  accountBalance: number;
  /**游戏账户余额 */
  channelBalance: number;
  /**充值累计 */
  deposit: number;
  /**有效流水 */
  effectiveBet: number;
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
interface IUserDetailResp {
  /**账号 */
  account: string;
  /**成为代理时间 */
  agentCreateTime: string;
  /**代理级别 */
  agentLevel: number;
  /**生日 */
  birthday: string;
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
  /**包网商账号 */
  proxyAccount: string;
  /**包网商编号 */
  proxyUserId: number;
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
  /**用户类型 1:普通 4:代理 */
  userType: number;
  /**vip等级 */
  vipLevel: number;
  /**vip等级名称 */
  vipLevelName: string;
}
interface IUserGameRecordReq {
  /**结束时间 */
  end: number;
  /**游戏渠道 */
  factoryCode: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**开始时间 */
  start: number;
  /**游戏类型id */
  typeId: number;
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
}
interface IUserGameRecordResp {
  /**上级代理 */
  agentAccount: string;
  /**局号id */
  bureauId: string;
  /**渠道编号 */
  channelId: string;
  /**渠道名称 */
  channelName: string;
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
interface IUserIdReq {
  /**包网商编号 */
  proxyUserId: number;
  /**用户编号 */
  userId: number;
}
interface IUserInfo {
  /**账户 */
  account: string;
  /**是否绑定了google验证码 true:已绑定 false:未绑定 */
  googleFlag: boolean;
  /**手机区号，没有加号 */
  mobileArea: string;
  /**手机号 */
  mobilePhone: string;
  /**性别 */
  sex: string;
  /**用户编号 */
  userId: string;
  /**用户名 */
  userName: string;
}
interface IUserInfoVo {
  /**登录账户(最长30位) */
  account: string;
  /**创建时间 */
  createTime: string;
  /**锁定标志(1:锁定;0:激活) */
  locked: string;
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobilePhone: string;
  /**备注(最长50) */
  remark: string;
  /**性别(0:未知;1:男;2:女) */
  sex: string;
  /**更新时间 */
  updateTime: string;
  /**用户编号 */
  userId: string;
  /**用户名(最长30位) */
  userName: string;
  /**人员类型(1:业务员;2:管理员;)  */
  userType: string;
}
interface IUserLabelReq {
  /**标签名称 */
  labelName: string;
  /**排序权重 */
  weight: number;
}
interface IUserLabelResp {
  /**标签编码 */
  labelCode: string;
  /**标签名称 */
  labelName: string;
  /**排序权重 */
  weight: number;
}
interface IUserLabelUpdate {
  /**用户标签编码 */
  labelCode: string;
  /**包网商编号 */
  proxyUserId: number;
  /**用户编号 */
  userId: number;
}
interface IUserLockRequestVo {
  /**锁定标志 1:锁定;0:激活 */
  lockFlag: string;
  /**用户编号 */
  userId: string;
}
interface IUserNoReq {
  /**用户编号 */
  userNo: number;
}
interface IUserOperationLogReq {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户编号 */
  userId: number;
}
interface IUserOperationLogResp {
  /**业务编号 如用户编号 */
  bizId: string;
  /**操作时间 */
  operationTime: string;
  /**操作类型 ADD:增 DELETE:删 UPDATE:改 */
  operationType: string;
  /**操作说明 */
  remark: string;
  /**操作人编号 */
  userId: string;
  /**操作人姓名 */
  userName: string;
}
interface IUserPasswordRequestVo {
  /**新密码 */
  newPassword: string;
  /**没有提供描述 */
  notSame: boolean;
  /**原密码 */
  oldPassword: string;
}
interface IUserQueryRequestVo {
  /**手机号 */
  mobilePhone: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户名(支持模糊查询) */
  userName: string;
}
interface IUserRelationAccountResp {
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
interface IUserReminderUpdate {
  /**包网商编号 */
  proxyUserId: number;
  /**用户备注 */
  reminder: string;
  /**用户编号 */
  userId: number;
}
interface IUserResp {
  /**账号 */
  account: string;
  /**代理级别 */
  agentLevel: number;
  /**生日 */
  birthday: string;
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
  /**包网商账号 */
  proxyAccount: string;
  /**包网商编号 */
  proxyUserId: number;
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
  /**用户类型 1:普通 4:代理 */
  userType: number;
  /**vip等级 */
  vipLevel: number;
  /**vip等级名称 */
  vipLevelName: string;
}
interface IUserRoleMenuVo {
  /**菜单信息 */
  menus: IMenuResponseVo[];
  /**角色信息 */
  roles: IJiaoSeXiangYingXinXi[];
}
interface IUserRoleRequestVo {
  /**角色编号集合 */
  roleIds: string[];
  /**用户编号 */
  userId: string;
}
interface IUserStatisticsInfoResp {
  /**总用户 */
  totalCount: number;
}
interface IUserStatisticsReq {
  /**结束时间 */
  end: string;
  /**统计纬度:1 按天；3 按月 */
  groupBy: number;
  /**开始时间 */
  start: string;
}
interface IUserStatisticsResp {
  /**注册用户数 */
  count: number;
  /**日期 */
  date: string;
}
interface IUserUpdateVo {
  /**登录账户(最长30位) */
  account: string;
  /**锁定标志(1:锁定;0:激活) */
  locked: string;
  /**手机区号 */
  mobileArea: string;
  /**手机号 */
  mobilePhone: string;
  /**备注(最长50) */
  remark: string;
  /**性别(0:未知;1:男;2:女) */
  sex: string;
  /**用户编号 */
  userId: string;
  /**用户名(最长30位) */
  userName: string;
  /**人员类型(1:业务员;2:管理员;)  */
  userType: string;
}
interface IVipManagementVo {
  /**vip等级 */
  vipLevel: number;
  /**vip名称 */
  vipName: string;
}
interface IWithdrawInfoResp {
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
interface IWithdrawNoChannelTypeReq {
  /**通道类型 */
  channelType: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
interface IWithdrawNoReq {
  /**通道类型 */
  channelType: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
interface IWithdrawRefuseReq {
  /**通道类型 */
  channelType: string;
  /**拒绝理由 */
  refuseDesc: string;
  /**提币/提现单号 */
  withdrawNo: string;
}
interface IWithdrawReq {
  /**充值类型:1 数字货币；2 法币 */
  currencyType: number;
  /**交易时间结束 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**上级代理帐号 */
  parentAccount: string;
  /**上级代理ID */
  parentId: number;
  /**归属包网商ID */
  proxyUserId: number;
  /**交易时间开始 */
  start: string;
  /**状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 */
  status: number;
  /**用户账号 */
  userAccount: string;
  /**用户编号 */
  userId: number;
  /**订单编号 */
  withdrawNo: number;
}
interface IWithdrawResp {
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
  /**是否能重试发起提现支付 */
  withdrawRetry: boolean;
  /**提币类型 1:外部提币 2:内部提币 3：系统提现 */
  withdrawType: number;
  /**提现方式，1：线上，2：线下 */
  withdrawWay: number;
}
interface IWithdrawSummaryResp {
  /**总提款 */
  withdrawAmount: number;
  /**USDT提款 */
  withdrawDigitalAmount: number;
  /**法币提款 */
  withdrawLegalAmount: number;
}
interface IBossDuanChaXunYongHuCaiJinJiLuCanShuDuiXiang {
  /**活动类型 */
  activityType: string;
  /**到账时间 */
  end: string;
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商id */
  proxyUid: number;
  /**到账时间 */
  start: string;
  /**用户id */
  userId: number;
}
interface IXiuGaiYongHuFengJinZhuangTai {
  /**封锁：true，解封：false */
  forbidden: boolean;
  /**用户id */
  userId: number;
}
interface IFenHongPeiZhi {
  /**占成模式比例上限 */
  commissionLimit: number;
  /**没有提供描述 */
  createTime: string;
  /**没有提供描述 */
  id: number;
  /**包网商id */
  proxyUid: number;
  /**返佣模式比例上限 */
  rebateLimit: number;
  /**结算周期,REAL_TIME,DAY,WEEK,HALF_MONTH,MONTH */
  settlementType: string;
  /**没有提供描述 */
  updateTime: string;
}
interface IFenHongPeiZhiXinXi {
  /**占成模式比例上限 */
  commissionLimit: number;
  /**分红配置id;新增时为空 */
  id: number;
  /**包网商id */
  proxyUid: number;
  /**返佣模式比例上限 */
  rebateLimit: number;
  /**结算周期,REAL_TIME,DAY,WEEK,HALF_MONTH,MONTH */
  settlementType: string;
}
interface IFenHongPeiZhiMingXi {
  /**分成上线 */
  commissionLimit: number;
  /**没有提供描述 */
  createTIme: string;
  /**游戏渠道 */
  factoryName: string;
  /**渠道类型id */
  gameChannelTypeId: number;
  /**没有提供描述 */
  id: number;
  /**包网商id */
  proxyUid: number;
  /**返佣上线 */
  rebateLimit: number;
  /**类型 */
  typeName: string;
  /**没有提供描述 */
  updateTime: string;
}
interface IFenHongPeiZhiXiangQing {
  /**没有提供描述 */
  bonusCnf: IFenHongPeiZhi[];
  /**没有提供描述 */
  items: IFenHongPeiZhiMingXi[];
}
interface IZiDuanMingShuXingQingQiu {
  /**字段编码 */
  propCode: string;
  /**说明文案 */
  propDesc: string;
  /**长度限制 */
  propLen: number;
  /**字段名 */
  propName: string;
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
interface IBiZhongGengXinQingQiuXinXi {
  /**币种代码 */
  code: string;
  /**汇率 */
  country: string;
  /**币种名称 */
  name: string;
  /**汇率 */
  rate: number;
  /**状态：1 可用；0 不可用 */
  status: number;
}
interface IBiZhongChaXunFanHuiXinXi {
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
interface ICaiJinTongJiShuJuBossZhiDuiXiang {
  /**注册彩金总发放数 */
  registerAmount: number;
  /**签到彩金总发放数 */
  signInAmount: number;
  /**红包发放数量 */
  systemAllocateAmount: number;
  /**彩金总发放数 */
  totalAmount: number;
}
interface IYongHuCaiJinFaFangJiLu {
  /**上级代理 */
  agentName: string;
  /**代理商id */
  agentUid: number;
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
  /**分数 */
  score: number;
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
  /**会员类型，1:普通会元,4:代理会员 */
  userType: number;
  /**彩金发放数量 */
  winningsAmount: number;
}
interface IBianJiFenHongPeiZhiCanShuDuiXiang {
  /**分红配置信息 */
  bonusCnf: IFenHongPeiZhiXinXi[];
  /**分红配置明细 */
  items: IFenHongPeiZhiMingXi[];
}
interface IHuoQuFenHongPeiZhiCanShuDuiXiang {
  /**包网商id */
  proxyUid: number;
}
interface IJiaoSeXiangYingXinXi {
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
interface IFanShuiFangAnXinXi {
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
  /**包网商名称 */
  proxyName: string;
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
interface IFanShuiFangAnMingXiXinXi {
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
interface IYinHangShuXingQingQiu {
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
interface IBossassetChangeLogexportExcelQueryParams {
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
interface IBosscmslabeldeleteQueryParams {
  /**标签编码 */
  labelCode: string;
}
interface IBosscommonlogoperateexportExcelQueryParams {
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
interface IBossdepositexportExcelQueryParams {
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
  /**充币地址 */
  fromAddress: string;
  /**交易时间开始 */
  start: string;
  /**交易时间结束 */
  end: string;
  /**代理ID */
  proxyUserId: number;
  /**包网商帐号 */
  proxyUserAccount: string;
  /**上级代理ID */
  parentId: number;
  /**上级代理帐号 */
  parentAccount: string;
}
interface IBossfiledownloadfileNoQueryParams {
  /**type */
  type: number;
}
interface IBossfiledownloadfileNoQueryParams {
  /**type */
  type: number;
}
interface IBossgameexportExcelQueryParams {
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
  /**用户编号 */
  userId: number;
  /**用户名 */
  userName: string;
}
interface IBossgamerecordchessCardExportQueryParams {
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
interface IBossgamerecordchickenExportQueryParams {
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
interface IBossgamerecordelectronExportQueryParams {
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
interface IBossgamerecordesportExportQueryParams {
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
interface IBossgamerecordfishExportQueryParams {
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
interface IBossgamerecordliveVideoExportQueryParams {
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
interface IBossgamerecordlotteryExportQueryParams {
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
interface IBossgamerecordordinaryExportQueryParams {
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
interface IBossgamerecordsportExportQueryParams {
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
interface IBossgamestatisticschannelexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**游戏渠道编号 */
  channelId: string;
  /**包网商编号 */
  proxyUid: number;
  /**游戏渠道编号 */
  factoryCode: string;
  /**开始时间 */
  start: number;
  /**结束时间 */
  end: number;
}
interface IBossgamestatisticsproxyexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**代理ID */
  proxyUid: number;
  /**开始日期 */
  start: number;
  /**结束日期 */
  end: number;
}
interface IBosspaymentchannelqueryPaymentChannelOrderQueryParams {
  /**支付单号 */
  paymentOrderNo: string;
  /**业务类型 */
  bizType: string;
}
interface IBossrebaterecordexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**用户id */
  userId: number;
  /**用户名称 */
  userName: string;
  /**包网商id */
  proxyId: number;
  /**包网商名称 */
  proxyName: string;
  /**状态 */
  status: number;
  /**周期s */
  period: string;
  /**记录id */
  id: number;
}
interface IBosssettleagentexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商ID */
  proxyId: number;
  /**代理ID */
  agentId: number;
  /**状态 3 待线下或自动结算 8 未达成条件 9 结算完成 */
  status: number;
}
interface IBosssettleplatformexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商ID */
  proxyId: number;
  /**1 待线下结算;2 已结算 */
  status: number;
}
interface IBosssettleproxyexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**包网商ID */
  proxyId: number;
  /**1 待线下结算;2 已结算 */
  status: number;
}
interface IBosssystemdictionarydeleteQueryParams {
  /**字典编号 */
  codeId: string;
}
interface IBosssystemdictionarydeleteQueryParams {
  /**字典编号 */
  codeId: string;
}
interface IBosssystemdictionarygetByFieldQueryParams {
  /**对照字段 */
  field: string;
}
interface IBosssystemdictionarygetByIdQueryParams {
  /**字典编号 */
  codeId: string;
}
interface IBosssystemmenudeleteQueryParams {
  /**菜单编号 */
  menuId: string;
}
interface IBosssystemmenudeleteQueryParams {
  /**菜单编号 */
  menuId: string;
}
interface IBosssystemroledeleteQueryParams {
  /**角色编号 */
  roleId: string;
}
interface IBosssystemroledeleteQueryParams {
  /**角色编号 */
  roleId: string;
}
interface IBosssystemrolequeryByIdQueryParams {
  /**角色编号 */
  roleId: string;
}
interface IBosssystemrolequeryDetailQueryParams {
  /**角色编号 */
  roleId: string;
}
interface IBosssystemusergetRoleQueryParams {
  /**用户编号 */
  userId: string;
}
interface IBosssystemuserqueryByIdQueryParams {
  /**用户编号 */
  userId: string;
}
interface IBossuserstatisticsexportExcelQueryParams {
  /**统计纬度:1 按天；3 按月 */
  groupBy: number;
  /**开始时间 */
  start: number;
  /**结束时间 */
  end: number;
}
interface IBosswinningsrecordexportExcelQueryParams {
  /**包网商id */
  proxyUid: number;
  /**用户id */
  userId: number;
  /**到账时间 */
  start: number;
  /**到账时间 */
  end: number;
  /**活动类型 */
  activityType: string;
}
interface IBosswithdrawdigitalexportExcelQueryParams {
  /**页码 从1开始计数 */
  pageIndex: number;
  /**页容 区间[1, 1000] */
  pageSize: number;
  /**状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 */
  status: number;
  /**用户编号 */
  userId: number;
  /**用户账号 */
  userAccount: string;
  /**订单编号 */
  withdrawNo: number;
  /**充值类型:1 数字货币；2 法币 */
  currencyType: number;
  /**交易时间开始 */
  start: string;
  /**交易时间结束 */
  end: string;
  /**归属包网商ID */
  proxyUserId: number;
  /**上级代理ID */
  parentId: number;
  /**上级代理帐号 */
  parentAccount: string;
}
