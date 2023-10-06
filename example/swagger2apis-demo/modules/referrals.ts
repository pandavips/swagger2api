/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 好友推荐管理-好友推荐 - 导出excel      
      req =>>
        IReferralsuserexportExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          userId: number //用户编号
          userName: string //用户名
          account: string //账号
          layerCode: string //邀请码
          inviteUid: number //邀请人编号
          inviteAccount: string //邀请人账号(所属代理)
          userType: number //用户类型 1:普通 4:代理用户
          firstDeposit: number //是否首存（1:是；0否）
          start: string //注册时间开始
          end: string //注册时间结束
        }
      */
    ReferralsUserExportExcelGET: (data: IReferralsuserexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/referrals/user/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 好友推荐管理-查询用户列表      
      res =>>
        IPageResultUserReferralsResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IUserReferralsResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQueryUserReferralsReq {
          account: string //账号
          end: string //注册时间结束
          firstDeposit: number //是否首存（1:是；0否）
          inviteAccount: string //邀请人账号(所属代理)
          inviteUid: number //邀请人编号
          layerCode: string //邀请码
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          start: string //注册时间开始
          userId: number //用户编号
          userName: string //用户名
          userType: number //用户类型 1:普通 4:代理用户
        }
      */
    ReferralsUserQueryListPOST: (data: IQueryUserReferralsReq = {}, config = {}): Promise<IPageResultUserReferralsResp> => {
      return request({
        url: `/referrals/user/queryList`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
