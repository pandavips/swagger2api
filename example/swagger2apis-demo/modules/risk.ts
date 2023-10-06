/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 用户风控管理-黑名单列表      
      res =>>
        IPageResultHeiMingDanYongHuLieBiao {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IHeiMingDanYongHuLieBiao[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IHeiMingDanGuanLiChaXunCanShu {
          account: string //账号
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          userId: number //用户编号
        }
      */
    RiskUserBlackUserQueryListPOST: (data: IHeiMingDanGuanLiChaXunCanShu = {}, config = {}): Promise<IPageResultHeiMingDanYongHuLieBiao> => {
      return request({
        url: `/risk/user/blackUser/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户风控管理-ip稽核列表      
      res =>>
        IPageResultJiHeIpLieBiaoZhiDuiXiang {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IJiHeIpLieBiaoZhiDuiXiang[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IIpJiHeCanShuDuiXiang {
          account: string //账号
          lastLoginIp: string //最后一次登陆ip
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          registerDevice: string //注册端(h5/pc端)
          registerIp: string //注册ip
          userId: number //用户编号
        }
      */
    RiskUserExamineQueryListPOST: (data: IIpJiHeCanShuDuiXiang = {}, config = {}): Promise<IPageResultJiHeIpLieBiaoZhiDuiXiang> => {
      return request({
        url: `/risk/user/examine/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 会员稽核-列表查询      
      res =>>
        IPageResultHuiYuanJiHeChaXunFanHuiDuiXiang {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IHuiYuanJiHeChaXunFanHuiDuiXiang[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IHuiYuanJiHeQingQiuDuiXiang {
          examineConditionMode: string //稽核条件模式,all:全部条件相同,anyone:任一条件相同
          examineConditions: string[] //稽核条件,registerIp:相同注册IP账号关联,loginIp:相同登录IP账号关联, bankCard:相同银行卡关联,parentAgent:相同上级代理关联
          examineMode: string //稽核模式,relationUser:关联会员, custom:自定义
          examineRange: string //稽核范围,all:全部,userAccount:指定会员,registerIp:指定注册IP,loginIp:指定登录IP,bankCardNo:指定银行卡号,parentAgent:指定上级代理
          examineRangeValue: string //稽核范围输入值
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          showDisabledUser: boolean //是否显示已拉黑用户,true:显示，false:不显示
        }
      */
    Risk_UserExamine_QueryListPOST: (data: IHuiYuanJiHeQingQiuDuiXiang = {}, config = {}): Promise<IPageResultHuiYuanJiHeChaXunFanHuiDuiXiang> => {
      return request({
        url: `/risk/userExamine/queryList`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
