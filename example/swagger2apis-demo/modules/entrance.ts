/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
     * @description: 代理登录-检查踢出信息  */
    EntranceCheckKickOutGET: (config = {}): Promise<null> => {
      return request({
        url: `/entrance/checkKickOut`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 代理登录-检查踢出信息  */
    EntranceCheckKickOutPOST: (config = {}): Promise<null> => {
      return request({
        url: `/entrance/checkKickOut`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 代理登录-登录      
      req =>>
        ILoginReq {
          account: string //账户
          password: string //密码
        }
    
      res =>>
        ILoginResp {
          account: string //账号
          createTime: string //添加时间
          currency: string //币种
          proxyAccount: string //包网商账号
          proxyUid: number //包网商编号
          role: string //角色
          token: string //app token信息
          tokenName: string //token header头
          userNo: number //用户编号
        }
      */
    EntranceLoginPOST: (data: ILoginReq = {}, config = {}): Promise<ILoginResp> => {
      return request({
        url: `/entrance/login`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 代理登录-登出接口  */
    EntranceLogoutGET: (config = {}): Promise<null> => {
      return request({
        url: `/entrance/logout`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 代理登录-登出接口  */
    EntranceLogoutPOST: (config = {}): Promise<null> => {
      return request({
        url: `/entrance/logout`,
        method: "POST",
        ...config
      });
    }
  };
};
