/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
// 账户相关
import account from "./modules/account";
// 活动相关
import activity from "./modules/activity";
// 包网商代理管理+代理申请管理
import agent from "./modules/agent";
// 账户资金变动记录
import assetChangeLog from "./modules/assetChangeLog";
// 银行卡管理+银行信息
import bank from "./modules/bank";
// 渠道充提信息接口
import channel from "./modules/channel";
// 公告管理+banner管理+标签管理
import cms from "./modules/cms";
// 归集管理
import collect from "./modules/collect";
// 日志相关接口
import common from "./modules/common";
// 币种管理+系统币种
import currency from "./modules/currency";
// 日常数据
import daily from "./modules/daily";
// 仪表盘
import dashboard from "./modules/dashboard";
// 充币信息+充币和充值配置+充值统计
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
// 游戏渠道相关+游戏渠道对账相关+代理游戏相关+用户游戏记录+游戏统计+游戏类型相关
import game from "./modules/game";
// 邀请海报管理
import invitation from "./modules/invitation";
// 排行榜管理
import leaderboard from "./modules/leaderboard";
// 主任务+任务总配置+主任务描述+任务项+用户任务奖励
import mission from "./modules/mission";
// 包网商达成条件配置+包网商配置中心+包网商配置中心游戏比例配置+ip访问限制+客服配置+用户达成数据查询+包网商有效会员标准设置
import operate from "./modules/operate";
// 支付渠道管理
import payment from "./modules/payment";
// 包网商返佣
import rakeback from "./modules/rakeback";
// 返水方案管理+返水记录管理
import rebate from "./modules/rebate";
// 好友推荐管理
import referrals from "./modules/referrals";
// 用户风控管理+会员稽核
import risk from "./modules/risk";
// 结算数据
import settle from "./modules/settle";
// 站内信管理
import site from "./modules/site";
// 短信通道管理
import sms from "./modules/sms";
// 系统调账+代理系统管理+菜单管理接口+角色管理接口+用户相关接口
import system from "./modules/system";
// 三方支付管理
import thirdPartyPayment from "./modules/thirdPartyPayment";
// 用户管理+子账号管理+游戏记录相关+用户统计
import user from "./modules/user";
// 用户关系统计
import userRelation from "./modules/userRelation";
// VIP管理
import vip from "./modules/vip";
// 用户彩金发放记录+彩金规则配置控制器
import winnings from "./modules/winnings";
// 提币和提现配置+提币信息+提现/币限制
import withdraw from "./modules/withdraw";
// 工单
import work from "./modules/work";
export default (request) => ({
  ...account(request),
  ...activity(request),
  ...agent(request),
  ...assetChangeLog(request),
  ...bank(request),
  ...channel(request),
  ...cms(request),
  ...collect(request),
  ...common(request),
  ...currency(request),
  ...daily(request),
  ...dashboard(request),
  ...deposit(request),
  ...doc(request),
  ...entrance(request),
  ...experience(request),
  ...fee(request),
  ...file(request),
  ...game(request),
  ...invitation(request),
  ...leaderboard(request),
  ...mission(request),
  ...operate(request),
  ...payment(request),
  ...rakeback(request),
  ...rebate(request),
  ...referrals(request),
  ...risk(request),
  ...settle(request),
  ...site(request),
  ...sms(request),
  ...system(request),
  ...thirdPartyPayment(request),
  ...user(request),
  ...userRelation(request),
  ...vip(request),
  ...winnings(request),
  ...withdraw(request),
  ...work(request)
});
