var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable */
// @ts-nocheck
import request from "./index";
import qs from "qs";
export default {
    /**
     * @description: 账户相关 - 平台账户（归集地址）
     */
    AccountCollectionAccountGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/collectionAccount", method: "GET" }, config));
    },
    /**
     * @description: 账户相关 - 头寸余额
     */
    AccountHotAccountGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/hotAccount", method: "GET" }, config));
    },
    /**
     * @description: 账户相关 - 平台账户 - 手续费余额
     */
    AccountPlatformGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/platform", method: "GET" }, config));
    },
    /**
     * @description: 账户相关 - 盘内实时余额
     */
    AccountStatisticsBalanceCurrentPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/statistics/balance/current", method: "POST", data: data }, config));
    },
    /**
     * @description: 账户相关 - 盘内历史余额
     */
    AccountStatisticsBalanceHistoryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/statistics/balance/history", method: "POST", data: data }, config));
    },
    /**
     * @description: 账户相关 - 单个用户余额
     */
    AccountUserBalancePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/account/userBalance", method: "POST", data: data }, config));
    },
    /**
     * @description: 活动相关 - 编辑
     */
    ActivityEditActivityPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/activity/editActivity", method: "POST", data: data }, config));
    },
    /**
     * @description: 活动相关 - 上下架
     */
    ActivityEditStatusPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/activity/editStatus", method: "POST", data: data }, config));
    },
    /**
     * @description: 活动相关 - 查询-详情
     */
    ActivityFetchActivityDetailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/activity/fetchActivityDetail", method: "POST", data: data }, config));
    },
    /**
     * @description: 活动相关 - 查询
     */
    ActivityQueryActivityPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/activity/queryActivity", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 添加代理
     */
    AgentAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/add", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理申请管理 - 审核通过
     */
    AgentApplyPassPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/apply/pass", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理申请管理 - 查询申请列表
     */
    AgentApplyQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/apply/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理申请管理 - 审核拒绝
     */
    AgentApplyRefusePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/apply/refuse", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 冻结代理
     */
    AgentLockPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/lock", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 查询单个代理信息
     */
    AgentQueryByIdPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/queryById", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 查询一级代理列表
     */
    AgentQueryLevelOneListGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/queryLevelOneList", method: "GET" }, config));
    },
    /**
     * @description: 包网商代理管理 - 查询代理列表
     */
    AgentQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 重置密码
     */
    AgentResetPasswordPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/resetPassword", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 解冻代理
     */
    AgentUnlockPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/unlock", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商代理管理 - 修改代理信息
     */
    AgentUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/agent/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 账户资金变动记录 - 资金变动记录 - 导出excel
     */
    AssetChangeLogExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/assetChangeLog/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 账户资金变动记录 - 资金变动记录
     */
    AssetChangeLogListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/assetChangeLog/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 账户资金变动记录 - 下拉类型
     */
    AssetChangeLogTypeGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/assetChangeLog/type", method: "GET" }, config));
    },
    /**
     * @description: 银行卡管理 - 删除
     */
    BankCardDeletePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/card/delete", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行卡管理 - 详情
     */
    BankCardDetailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/card/detail", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行卡管理 - 查询
     */
    BankCardQueryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/card/query", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行卡管理 - 添加或编辑
     */
    BankCardUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/card/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行信息 - 详情
     */
    BankDetailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/detail", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行信息 - 查询
     */
    BankQueryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/query", method: "POST", data: data }, config));
    },
    /**
     * @description: 银行信息 - 添加或编辑
     */
    BankUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/bank/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 渠道充提信息接口 - 汇总信息
     */
    ChannelDepositWithdrawSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/channel/deposit/withdraw/summary", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 添加公告
     */
    CmsArticleAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/add", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 停用公告
     */
    CmsArticleDisablePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/disable", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 启用公告
     */
    CmsArticlePublishPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/publish", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 查询公告列表
     */
    CmsArticleQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 查询公告详情
     */
    CmsArticleQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: 公告管理 - 修改公告
     */
    CmsArticleUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/article/update", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 添加横幅
     */
    CmsBannerAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/add", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 停用横幅
     */
    CmsBannerDisablePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/disable", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 启用横幅
     */
    CmsBannerPublishPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/publish", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 查询横幅列表
     */
    CmsBannerQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 查询横幅详情
     */
    CmsBannerQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: banner管理 - 修改横幅
     */
    CmsBannerUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/banner/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 标签管理 - 查询所有用户标签
     */
    CmsLabelQueryAllGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/cms/label/queryAll", method: "GET" }, config));
    },
    /**
     * @description: 归集管理 - 获取归集配置信息
     */
    CollectGetGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/collect/get", method: "GET" }, config));
    },
    /**
     * @description: 归集管理 - 更新归集地址
     */
    CollectUpdateCollectPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/collect/updateCollect", method: "POST", data: data }, config));
    },
    /**
     * @description: 归集管理 - 更新头寸
     */
    CollectUpdateHotPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/collect/updateHot", method: "POST", data: data }, config));
    },
    /**
     * @description: 币种管理 - 启用/禁用
     */
    CurrencyEnablePOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/currency/enable", method: "POST" }, config));
    },
    /**
     * @description: 币种管理 - 查询
     */
    CurrencyQueryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/currency/query", method: "POST", data: data }, config));
    },
    /**
     * @description: 币种管理 - 更新汇率
     */
    CurrencyRateUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/currency/rate/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 币种管理 - USDT汇率
     */
    CurrencyUsdtRatePOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/currency/usdt/rate", method: "POST" }, config));
    },
    /**
     * @description: 币种管理 - 添加或编辑USDT汇率
     */
    CurrencyUsdtUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/currency/usdt/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 日常数据 - 充/提数据统计
     */
    DailyStatisticsDepositWithdrawPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/daily/statistics/depositWithdraw", method: "POST", data: data }, config));
    },
    /**
     * @description: 日常数据 - 充值/提现人数查询
     */
    DailyStatisticsDepositWithdrawUserCountPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/daily/statistics/depositWithdrawUserCount", method: "POST", data: data }, config));
    },
    /**
     * @description: 日常数据 - 注册和活跃数据
     */
    DailyStatisticsUserActionPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/daily/statistics/userAction", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 渠道充值回调
     */
    DepositCallbackPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/callback", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 审核通过
     */
    DepositCheckPassPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/checkPass", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 审核拒绝
     */
    DepositCheckRefusePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/checkRefuse", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币和充值配置 - 获取数字货币充币配置
     */
    DepositConfigGetDigitalByCodeChainPOST: function (chain, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/config/getDigital/".concat(chain), method: "POST" }, config));
    },
    /**
     * @description: 充币和充值配置 - 获取法币充值配置
     */
    DepositConfigGetLegerByCodeCurrencyCodePOST: function (currencyCode, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/config/getLeger/".concat(currencyCode), method: "POST" }, config));
    },
    /**
     * @description: 充币和充值配置 - 设置数字货币充币配置
     */
    DepositConfigSetDigitalPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/config/setDigital", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币和充值配置 - 设置提现配置
     */
    DepositConfigSetLegerPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/config/setLeger", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 充币记录 - 导出excel
     */
    DepositExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 充币信息 - 收款信息
     */
    DepositGetCardPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/getCard", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 充币记录
     */
    DepositListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 充币信息 - 待理处理订单数量
     */
    DepositPendingCountPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/pendingCount", method: "POST" }, config));
    },
    /**
     * @description: 充币信息 - 汇总信息
     */
    DepositSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/deposit/summary", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 新增文档
     */
    DocManagementAddDocPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/addDoc", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 下架文档
     */
    DocManagementOfflineDocPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/offlineDoc", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 发布文档
     */
    DocManagementOnlineDocPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/onlineDoc", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 查询文档列表
     */
    DocManagementQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 查询单条文档信息
     */
    DocManagementQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: 文档中心管理 - 更新文档
     */
    DocManagementUpdateDocPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/doc/management/updateDoc", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理登录 - 检查踢出信息
     */
    EntranceCheckKickOutGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/entrance/checkKickOut", method: "GET" }, config));
    },
    /**
     * @description: 代理登录 - 检查踢出信息
     */
    EntranceCheckKickOutPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/entrance/checkKickOut", method: "POST" }, config));
    },
    /**
     * @description: 代理登录 - 登录
     */
    EntranceLoginPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/entrance/login", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理登录 - 登出接口
     */
    EntranceLogoutGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/entrance/logout", method: "GET" }, config));
    },
    /**
     * @description: 代理登录 - 登出接口
     */
    EntranceLogoutPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/entrance/logout", method: "POST" }, config));
    },
    /**
     * @description: 经验值管理 - 查询经验值列表
     */
    ExperienceValueQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/experience/value/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 经验值管理 - 查询单条经验值信息
     */
    ExperienceValueQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/experience/value/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: 经验值管理 - 查询有效流水值信息
     */
    ExperienceValueQueryValidAmountGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/experience/value/queryValidAmount", method: "GET" }, config));
    },
    /**
     * @description: 经验值管理 - 编辑经验值
     */
    ExperienceValueUpdateExperienceValuePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/experience/value/updateExperienceValue", method: "POST", data: data }, config));
    },
    /**
     * @description: 经验值管理 - 编辑有效流水值
     */
    ExperienceValueUpdateValidAmountPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/experience/value/updateValidAmount", method: "POST", data: data }, config));
    },
    /**
     * @description: 手续费 - 手续费
     */
    FeeStatisticsFeePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/fee/statistics/fee", method: "POST", data: data }, config));
    },
    /**
     * @description: 文件上传下载 - 下载文件
     */
    FileDownloadByCodeFileNoGET: function (fileNo, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/file/download/".concat(fileNo), method: "GET" }, config));
    },
    /**
     * @description: 文件上传下载 - 下载文件
     */
    FileDownloadByCodeFileNoPOST: function (fileNo, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/file/download/".concat(fileNo), method: "POST" }, config));
    },
    /**
     * @description: 文件上传下载 - 上传文件
     */
    FileUploadPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/file/upload", method: "POST" }, config));
    },
    /**
     * @description: 游戏渠道相关 - 查询渠道
     */
    GameChannelQueryAllPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/channel/queryAll", method: "POST" }, config));
    },
    /**
     * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-VSC专用
     */
    GameChannelQueryGamePOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/channel/queryGame", method: "POST" }, config));
    },
    /**
     * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-GF专用
     */
    GameChannelQueryGameGfPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/channel/queryGame/gf", method: "POST", data: data }, config));
    },
    /**
     * @description: 游戏渠道相关 - 查询厂商信息
     */
    GameFactoryQueryAllPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/factory/queryAll", method: "POST" }, config));
    },
    /**
     * @description: 游戏渠道相关 - 查询游戏类型信息
     */
    GameGameTypeQueryAllPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/gameType/queryAll", method: "POST" }, config));
    },
    /**
     * @description: 代理游戏相关 - 获取精选游戏
     */
    GameGetChoicePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/getChoice", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 下线游戏
     */
    GameOfflinePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/offline", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 上线游戏
     */
    GameOnlinePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/online", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 查询区域下的游戏信息
     */
    GameQueryAreaGamePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/queryAreaGame", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 游戏列表
     */
    GameQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 查询代理下的游戏信息
     */
    GameQueryProxyGamePOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/queryProxyGame", method: "POST" }, config));
    },
    /**
     * @description: 游戏统计 - 渠道导出excel
     */
    GameStatisticsChannelExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/statistics/channel/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 游戏统计 - 渠道 - 按日统计记录
     */
    GameStatisticsChannelListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/statistics/channel/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 游戏统计 - 导出excel
     */
    GameStatisticsProxyExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/statistics/proxy/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 游戏统计 - 代理 - 按日统计记录
     */
    GameStatisticsProxyListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/statistics/proxy/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 游戏统计 - 代理 - 汇总
     */
    GameStatisticsProxySummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/statistics/proxy/summary", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 更改游戏区域
     */
    GameUpdateAreaPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/updateArea", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 修改精选游戏信息
     */
    GameUpdateChoiceGamePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/updateChoiceGame", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 修改游戏信息
     */
    GameUpdateGamePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/updateGame", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理游戏相关 - 更改游戏是否热门
     */
    GameUpdatePopularPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/game/updatePopular", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 新增邀请海报
     */
    InvitationPosterAddPosterPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/addPoster", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 下架邀请海报
     */
    InvitationPosterOfflinePosterPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/offlinePoster", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 发布邀请海报
     */
    InvitationPosterOnlinePosterPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/onlinePoster", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 查询邀请海报列表
     */
    InvitationPosterQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 查询单条邀请海报信息
     */
    InvitationPosterQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: 邀请海报管理 - 更新邀请海报
     */
    InvitationPosterUpdatePosterPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/invitation/poster/updatePoster", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商达成条件配置 - 获取达成条件配置
     */
    OperateConfigAchievingGetAchievingConditionsGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/achieving/getAchievingConditions?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 包网商达成条件配置 - 更新达成条件配置
     */
    OperateConfigAchievingUpdateAchievingConditionsPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/achieving/updateAchievingConditions", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心 - 配置中心获取包网商配置
     */
    OperateConfigCenterGetProxyConfigGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/getProxyConfig", method: "GET" }, config));
    },
    /**
     * @description: 包网商配置中心 - 更新佣金提现流水倍数设置
     */
    OperateConfigCenterUpdateCommissionMultiplePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/updateCommissionMultiple", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心 - 更新充值有效流水倍数
     */
    OperateConfigCenterUpdateDepositMultiplePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/updateDepositMultiple", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心 - 更新邀请码必填设置
     */
    OperateConfigCenterUpdateInvitationCodeSetPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/updateInvitationCodeSet", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心 - 更新提现条件阈值
     */
    OperateConfigCenterUpdateMinimumBalancePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/updateMinimumBalance", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心 - 修改ip最大注册个数限制
     */
    OperateConfigCenterUpdateRegisterAmountPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/center/updateRegisterAmount", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商配置中心游戏比例配置 - 获取游戏比例配置
     */
    OperateConfigGameScaleGetGameScaleGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/gameScale/getGameScale", method: "GET" }, config));
    },
    /**
     * @description: 包网商配置中心游戏比例配置 - 更新游戏比例配置
     */
    OperateConfigGameScaleUpdateGameScalePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/gameScale/updateGameScale", method: "POST", data: data }, config));
    },
    /**
     * @description: user-ip-access-control-controller - 添加
     */
    OperateConfigIpControlAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/ipControl/add", method: "POST", data: data }, config));
    },
    /**
     * @description: user-ip-access-control-controller - 删除
     */
    OperateConfigIpControlDelByCodeIdPOST: function (id, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/ipControl/del/".concat(id), method: "POST" }, config));
    },
    /**
     * @description: user-ip-access-control-controller - 规则列表
     */
    OperateConfigIpControlListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/ipControl/list", method: "POST", data: data }, config));
    },
    /**
     * @description: user-ip-access-control-controller - 获取地区基础配置
     */
    OperateConfigIpControlRegionListPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/config/ipControl/regionList", method: "POST" }, config));
    },
    /**
     * @description: 客服配置 - 获取配置列表
     */
    OperateCustomerServicePagePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/customer/service/page", method: "POST", data: data }, config));
    },
    /**
     * @description: 客服配置 - 保存配置
     */
    OperateCustomerServiceSavePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/customer/service/save", method: "POST", data: data }, config));
    },
    /**
     * @description: 客服配置 - 修改状态
     */
    OperateCustomerServiceStatusByCodeIdStatusPOST: function (id, status, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/customer/service/status/".concat(id, "/").concat(status), method: "POST" }, config));
    },
    /**
     * @description: 客服配置 - getById
     */
    OperateCustomerServiceByCodeIdPOST: function (id, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/customer/service/".concat(id), method: "POST" }, config));
    },
    /**
     * @description: 用户达成数据查询 - 获取结算达成情况
     */
    OperateGetAchievingPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/getAchieving", method: "POST", data: data }, config));
    },
    /**
     * @description: 包网商有效会员标准设置 - 获取有效会员标准配置
     */
    OperateValidMembersGetProxyValidMembersGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/validMembers/getProxyValidMembers", method: "GET" }, config));
    },
    /**
     * @description: 包网商有效会员标准设置 - 更新有效会员设置
     */
    OperateValidMembersUpdateValidMembersPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/operate/validMembers/updateValidMembers", method: "POST", data: data }, config));
    },
    /**
     * @description: 支付渠道管理 - 查询支付渠道帐号列表
     */
    PaymentChannelAccountQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/payment/channel/account/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 支付渠道管理 - 新增或修改支付渠道
     */
    PaymentChannelAccountUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/payment/channel/account/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 支付渠道管理 - 查询支付渠道列表（boss分配给包网商的）
     */
    PaymentChannelQueryListPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/payment/channel/queryList", method: "POST" }, config));
    },
    /**
     * @description: 返水方案管理 - 新增方案
     */
    RebatePlanAddPlanPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/addPlan", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 查询厂商类型列表
     */
    RebatePlanAllTypeGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/allType", method: "GET" }, config));
    },
    /**
     * @description: 返水方案管理 - 删除明细信息
     */
    RebatePlanDeleteItemsPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/deleteItems", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 删除方案信息
     */
    RebatePlanDeletePlanPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/deletePlan", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 禁用方案
     */
    RebatePlanDisablePlanPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/disablePlan", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 启用方案
     */
    RebatePlanEnablePlanPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/enablePlan", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 查询方案明细信息
     */
    RebatePlanQueryItemsPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/queryItems", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 查询方案列表
     */
    RebatePlanQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水方案管理 - 更新方案
     */
    RebatePlanUpdatePlanPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/plan/updatePlan", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水记录管理 - 一键发放
     */
    RebateRecordAllGrantPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/record/allGrant", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水记录管理 - 批量发放
     */
    RebateRecordBatchGrantPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/record/batchGrant", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水记录管理 - 批量拒绝
     */
    RebateRecordBatchRefusePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/record/batchRefuse", method: "POST", data: data }, config));
    },
    /**
     * @description: 返水记录管理 - 导出返水记录列表
     */
    RebateRecordExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/record/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 返水记录管理 - 返水记录列表
     */
    RebateRecordQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/rebate/record/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 代理返佣数据
     */
    SettleAgentPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/agent", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 代理结算数据 - 导出excel
     */
    SettleAgentExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/agent/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 结算数据 - 审核
     */
    SettleApplyCheckPassPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/apply/checkPass", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 代理返佣提出申请列表
     */
    SettleApplyListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/apply/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 平台结算数据
     */
    SettlePlatformPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/platform", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 平台结算数据 - 导出excel
     */
    SettlePlatformExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/platform/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 结算数据 - 包网商结算数据
     */
    SettleProxyPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/proxy", method: "POST", data: data }, config));
    },
    /**
     * @description: 结算数据 - 包网商结算数据 - 导出excel
     */
    SettleProxyExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/settle/proxy/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 系统调账 - 调账
     */
    SystemAdjustmentAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/adjustment/add", method: "POST", data: data }, config));
    },
    /**
     * @description: 系统调账 - 查询包网商总调账金额
     */
    SystemAdjustmentGetProxyAdjustSumGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/adjustment/getProxyAdjustSum", method: "GET" }, config));
    },
    /**
     * @description: 系统调账 - 调账记录列表查询
     */
    SystemAdjustmentQueryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/adjustment/query", method: "POST", data: data }, config));
    },
    /**
     * @description: 代理系统管理 - 获取占成和返佣上限
     */
    SystemGetRewardRatePOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/getRewardRate", method: "POST" }, config));
    },
    /**
     * @description: 代理系统管理 - 代理基础信息
     */
    SystemGetSummaryPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/getSummary", method: "POST" }, config));
    },
    /**
     * @description: 代理系统管理 - 修改代理基础信息
     */
    SystemUpdateSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/updateSummary", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户相关接口 - 修改用户密码
     */
    SystemUserChangePasswordPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/system/user/changePassword", method: "POST", data: data }, config));
    },
    /**
     * @description: 三方支付管理 - 添加或编辑
     */
    ThirdPartyPaymentAddOrUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/thirdPartyPayment/addOrUpdate", method: "POST", data: data }, config));
    },
    /**
     * @description: 三方支付管理 - 删除
     */
    ThirdPartyPaymentDeleteGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/thirdPartyPayment/delete?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 三方支付管理 - 详情
     */
    ThirdPartyPaymentDetailGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/thirdPartyPayment/detail?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 三方支付管理 - 列表查询
     */
    ThirdPartyPaymentListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/thirdPartyPayment/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 新增会员
     */
    UserAddUserPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/addUser", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 银行卡 - 详情
     */
    UserBankCardDetailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/bankCard/detail", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 编辑
     */
    UserBankCardUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/bankCard/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 银行卡
     */
    UserBankCardsPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/bankCards", method: "POST", data: data }, config));
    },
    /**
     * @description: 子账号管理 - 添加子账号
     */
    UserChildAddPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/child/add", method: "POST", data: data }, config));
    },
    /**
     * @description: 子账号管理 - 查询子账号
     */
    UserChildQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/child/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 子账号管理 - 修改子账号角色
     */
    UserChildUpdateRolePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/child/updateRole", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 禁用用户
     */
    UserDisableUserPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/disableUser", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 批量禁用用户
     */
    UserDisableUserBatchPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/disableUser/batch", method: "POST" }, config));
    },
    /**
     * @description: 用户管理 - 启用用户
     */
    UserEnableUserPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/enableUser", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 批量启用用户
     */
    UserEnableUserBatchPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/enableUser/batch", method: "POST" }, config));
    },
    /**
     * @description: 游戏记录相关 - 导出excel
     */
    UserGameExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/game/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 游戏记录相关 - 游戏记录
     */
    UserGameGetRecordPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/game/getRecord", method: "POST", data: data }, config));
    },
    /**
     * @description: 游戏记录相关 - 概况统计
     */
    UserGameSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/game/summary", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 踢下线
     */
    UserKickUserPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/kickUser", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 修改用户标签
     */
    UserLabelUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/label/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 查询用户账户
     */
    UserQueryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/query", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 个人数据概况
     */
    UserQueryDataSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/queryDataSummary", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 查询用户详情
     */
    UserQueryDetailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/queryDetail", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 查询用户列表
     */
    UserQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 查询用户操作日志
     */
    UserQueryLogPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/queryLog", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 修改备注
     */
    UserReminderUpdatePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/reminder/update", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 重置手机号
     */
    UserResetMobileNoPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/resetMobileNo", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 重置登录密码
     */
    UserResetPasswordPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/resetPassword", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 重置资金密码
     */
    UserResetSecretPasswordPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/resetSecretPassword", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户统计 - 导出excel
     */
    UserStatisticsExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/statistics/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 用户统计 - 总用户信息
     */
    UserStatisticsInfoPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/statistics/info", method: "POST" }, config));
    },
    /**
     * @description: 用户统计 - 记录
     */
    UserStatisticsListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/statistics/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户管理 - 团队数据
     */
    UserTeamPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/user/team", method: "POST", data: data }, config));
    },
    /**
     * @description: VIP管理 - 新增vip
     */
    VipManagementAddVipPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/addVip", method: "POST", data: data }, config));
    },
    /**
     * @description: VIP管理 - 获取vip降级周期
     */
    VipManagementGetPeriodGET: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/getPeriod", method: "GET" }, config));
    },
    /**
     * @description: VIP管理 - 查询vip信息下拉
     */
    VipManagementQueryAllPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/queryAll", method: "POST" }, config));
    },
    /**
     * @description: VIP管理 - 查询vip信息列表
     */
    VipManagementQueryListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/queryList", method: "POST", data: data }, config));
    },
    /**
     * @description: VIP管理 - 查询单条vip信息
     */
    VipManagementQueryOnePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/queryOne", method: "POST", data: data }, config));
    },
    /**
     * @description: VIP管理 - 更新vip降级周期
     */
    VipManagementUpdatePeriodPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/updatePeriod", method: "POST", data: data }, config));
    },
    /**
     * @description: VIP管理 - 更新vip
     */
    VipManagementUpdateVipPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/vip/management/updateVip", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户彩金发放记录 - 导出excel
     */
    WinningsRecordExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/record/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 用户彩金发放记录 - 彩金记录查询
     */
    WinningsRecordPagePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/record/page", method: "POST", data: data }, config));
    },
    /**
     * @description: 用户彩金发放记录 - 查询统计信息
     */
    WinningsRecordStatisticPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/record/statistic", method: "POST", data: data }, config));
    },
    /**
     * @description: 彩金规则配置控制器 - 删除配置
     */
    WinningsRuleDeletePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/rule/delete", method: "POST", data: data }, config));
    },
    /**
     * @description: 彩金规则配置控制器 - 通过id获取配置
     */
    WinningsRuleGetPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/rule/get", method: "POST", data: data }, config));
    },
    /**
     * @description: 彩金规则配置控制器 - 列表
     */
    WinningsRulePagePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/rule/page", method: "POST", data: data }, config));
    },
    /**
     * @description: 彩金规则配置控制器 - 保存配置
     */
    WinningsRuleSavePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/winnings/rule/save", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币和提现配置 - 获取数字货币提币配置
     */
    WithdrawConfigGetDigitalByCodeChainPOST: function (chain, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/config/getDigital/".concat(chain), method: "POST" }, config));
    },
    /**
     * @description: 提币和提现配置 - 获取法币提现配置
     */
    WithdrawConfigGetLegerByCodeCurrencyCodePOST: function (currencyCode, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/config/getLeger/".concat(currencyCode), method: "POST" }, config));
    },
    /**
     * @description: 提币和提现配置 - 设置数字货币提币配置
     */
    WithdrawConfigSetDigitalPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/config/setDigital", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币和提现配置 - 设置提现配置
     */
    WithdrawConfigSetLegerPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/config/setLeger", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 提现成功回调
     */
    WithdrawDigitalCallbackPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/callback", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 审核通过
     */
    WithdrawDigitalCheckPassPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/checkPass", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 审核拒绝
     */
    WithdrawDigitalCheckRefusePOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/checkRefuse", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 提币记录 - 导出excel
     */
    WithdrawDigitalExportExcelGET: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/exportExcel?".concat(qs.stringify(data)), method: "GET" }, config));
    },
    /**
     * @description: 提币信息 - 提现失败
     */
    WithdrawDigitalFailPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/fail", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 收款信息
     */
    WithdrawDigitalGetCardPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/getCard", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 提币记录
     */
    WithdrawDigitalListPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/list", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 手动发起提现支付重试
     */
    WithdrawDigitalManualReTryWithdrawPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/manualReTryWithdraw", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 代理处理订单数量
     */
    WithdrawDigitalPendingCountPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/pendingCount", method: "POST" }, config));
    },
    /**
     * @description: 提币信息 - 提现成功（仅线下转账方式）
     */
    WithdrawDigitalSuccessPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/success", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 汇总信息
     */
    WithdrawDigitalSummaryPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/summary", method: "POST", data: data }, config));
    },
    /**
     * @description: 提币信息 - 确认提现
     */
    WithdrawDigitalWithdrawConfirmPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/digital/withdrawConfirm", method: "POST", data: data }, config));
    },
    /**
     * @description: 提现/币限制 - 调整
     */
    WithdrawLimitAdjustPOST: function (data, config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/withdraw/limit/adjust", method: "POST", data: data }, config));
    },
    /**
     * @description: 工单 - 待理处理订单数量
     */
    WorkOrderPendingCountPOST: function (config) {
        if (config === void 0) { config = {}; }
        return request(__assign({ url: "/work/order/pendingCount", method: "POST" }, config));
    }
};
