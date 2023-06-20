// 账户相关
import account from "./modules/account";
// 活动相关
import activity from "./modules/activity";
// 包网商代理管理
import agent from "./modules/agent";
// 账户资金变动记录
import assetChangeLog from "./modules/assetChangeLog";
// 银行卡管理
import bank from "./modules/bank";
// 渠道充提信息接口
import channel from "./modules/channel";
// 公告管理
import cms from "./modules/cms";
// 归集管理
import collect from "./modules/collect";
// 日志相关接口
import common from "./modules/common";
// 币种管理
import currency from "./modules/currency";
// 日常数据
import daily from "./modules/daily";
// 充币信息
import deposit from "./modules/deposit";
// 文档中心管理
import doc from "./modules/doc";
// 代理登录
import entrance from "./modules/entrance";
// 经验值管理
import experience from "./modules/experience";
// 手续费
import fee from "./modules/fee";
// 文件上传下载
import file from "./modules/file";
// 游戏渠道相关
import game from "./modules/game";
// 邀请海报管理
import invitation from "./modules/invitation";
// 包网商达成条件配置
import operate from "./modules/operate";
// 支付渠道管理
import payment from "./modules/payment";
// 返水方案管理
import rebate from "./modules/rebate";
// 结算数据
import settle from "./modules/settle";
// 系统调账
import system from "./modules/system";
// 三方支付管理
import thirdPartyPayment from "./modules/thirdPartyPayment";
// 用户管理
import user from "./modules/user";
// VIP管理
import vip from "./modules/vip";
// 用户彩金发放记录
import winnings from "./modules/winnings";
// 提币和提现配置
import withdraw from "./modules/withdraw";
// 工单
import work from "./modules/work";
export default{
      ...account,...activity,...agent,...assetChangeLog,...bank,...channel,...cms,...collect,...common,...currency,...daily,...deposit,...doc,...entrance,...experience,...fee,...file,...game,...invitation,...operate,...payment,...rebate,...settle,...system,...thirdPartyPayment,...user,...vip,...winnings,...withdraw,...work
    }