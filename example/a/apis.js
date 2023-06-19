// 账户相关
import * as account from "./modules/account";
// 活动相关
import * as activity from "./modules/activity";
// 包网商代理管理
import * as agent from "./modules/agent";
// 账户资金变动记录
import * as assetChangeLog from "./modules/assetChangeLog";
// 银行卡管理
import * as bank from "./modules/bank";
// 渠道充提信息接口
import * as channel from "./modules/channel";
// 公告管理
import * as cms from "./modules/cms";
// 归集管理
import * as collect from "./modules/collect";
// 日志相关接口
import * as common from "./modules/common";
// 币种管理
import * as currency from "./modules/currency";
// 日常数据
import * as daily from "./modules/daily";
// 充币信息
import * as deposit from "./modules/deposit";
// 文档中心管理
import * as doc from "./modules/doc";
// 代理登录
import * as entrance from "./modules/entrance";
// 经验值管理
import * as experience from "./modules/experience";
// 手续费
import * as fee from "./modules/fee";
// 文件上传下载
import * as file from "./modules/file";
// 游戏渠道相关
import * as game from "./modules/game";
// 邀请海报管理
import * as invitation from "./modules/invitation";
// 包网商达成条件配置
import * as operate from "./modules/operate";
// 支付渠道管理
import * as payment from "./modules/payment";
// 返水方案管理
import * as rebate from "./modules/rebate";
// 结算数据
import * as settle from "./modules/settle";
// 系统调账
import * as system from "./modules/system";
// 三方支付管理
import * as thirdPartyPayment from "./modules/thirdPartyPayment";
// 用户管理
import * as user from "./modules/user";
// VIP管理
import * as vip from "./modules/vip";
// 用户彩金发放记录
import * as winnings from "./modules/winnings";
// 提币和提现配置
import * as withdraw from "./modules/withdraw";
// 工单
import * as work from "./modules/work";
export default {
    ...account, ...activity, ...agent, ...assetChangeLog, ...bank, ...channel, ...cms, ...collect, ...common, ...currency, ...daily, ...deposit, ...doc, ...entrance, ...experience, ...fee, ...file, ...game, ...invitation, ...operate, ...payment, ...rebate, ...settle, ...system, ...thirdPartyPayment, ...user, ...vip, ...winnings, ...withdraw, ...work
};
