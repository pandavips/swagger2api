/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 包网商代理管理-添加代理      
      req =>>
        IAddAgentReq {
          account: string //代理账号
          agentType: number //代理类型 1:直营 2:招募
          password: string //密码
          proxyDomainId: number //代理域名
          rewardRate: number //奖励比例 0-1之间
          rewardType: number //奖励类型 1:占成 2:返佣
          status: number //状态 1:启用 0:禁用
        }
      */
    AgentAddPOST: (data: IAddAgentReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 代理申请管理-审核通过      
      req =>>
        IAgentApplyPassReq {
          applyId: string //申请编号
          parentUid: number //上级代理编号
          remark: string //拒绝或通过原因
          rewardRate: number //占成比例或返佣比例(当申请单奖励标志为1时必填)
          rewardType: number //奖励类型(当申请单奖励标志为1时必填) 1:占成 2:返佣
        }
      */
    AgentApplyPassPOST: (data: IAgentApplyPassReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/apply/pass`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 代理申请管理-查询申请列表      
      res =>>
        IPageResultAgentApplyResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IAgentApplyResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQueryAgentApplyReq {
          account: string //申请人账号
          end: string //查询结束时间
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          parentAccount: string //归属
          start: string //查询开始时间
          status: number //状态 0:待审核 1:通过 2:拒绝
          userId: string //ID
        }
      */
    AgentApplyQueryListPOST: (data: IQueryAgentApplyReq = {}, config = {}): Promise<IPageResultAgentApplyResp> => {
      return request({
        url: `/agent/apply/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 代理申请管理-审核拒绝      
      req =>>
        IAgentApplyRefuseReq {
          applyId: string //申请编号
          remark: string //拒绝或通过原因
        }
      */
    AgentApplyRefusePOST: (data: IAgentApplyRefuseReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/apply/refuse`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-冻结代理      
      req =>>
        IAgentIdReq {
          agentId: number //代理编号
        }
      */
    AgentLockPOST: (data: IAgentIdReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/lock`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-通过上级代理账号查询代理信息      
      res =>>
        IPageResultAgentInfoByParentResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IAgentInfoByParentResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        ITongGuoShangJiDaiLiChaXunShuJu {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          parentAccount: string //上级代理账号
        }
      */
    AgentQueryAgentByParentPOST: (data: ITongGuoShangJiDaiLiChaXunShuJu = {}, config = {}): Promise<IPageResultAgentInfoByParentResp> => {
      return request({
        url: `/agent/queryAgentByParent`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-查询单个代理信息      
      req =>>
        IAgentIdReq {
          agentId: number //代理编号
        }
    
      res =>>
        IAgentInfoResp {
          account: string //账号
          agentId: number //代理编号
          agentLevel: number //代理级别
          agentType: number //代理类型 1:直营 2:招募 3:会员申请
          createTime: string //创建时间
          inviteUrl: string //邀请链接
          layerCode: string //邀请码
          parentAccount: string //上级代理账号
          parentUid: number //上级代理编号
          proxyAccount: string //包网商账号
          proxyDomainId: number //代理域名ID
          proxyUid: number //包网商编号
          rewardRate: number //奖励比例
          rewardType: number //奖励类型 1:占成 2:返佣
          status: number //代理状态 1:正常 0:锁定
        }
      */
    AgentQueryByIdPOST: (data: IAgentIdReq = {}, config = {}): Promise<IAgentInfoResp> => {
      return request({
        url: `/agent/queryById`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 包网商代理管理-查询一级代理列表  */
    AgentQueryLevelOneListGET: (config = {}): Promise<IAgentInfoResp[]> => {
      return request({
        url: `/agent/queryLevelOneList`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-查询代理列表      
      res =>>
        IPageResultAgentInfoResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IAgentInfoResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQueryAgentListReq {
          account: string //账号
          agentId: number //代理编号
          agentLevel: number //代理级别
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    AgentQueryListPOST: (data: IQueryAgentListReq = {}, config = {}): Promise<IPageResultAgentInfoResp> => {
      return request({
        url: `/agent/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-查询代理域名信息      
      req =>>
        IProxyIdReq {
          proxyId: number //代理编号
        }
      */
    AgentQueryProxyDomainPOST: (data: IProxyIdReq = {}, config = {}): Promise<IProxyDomainResp[]> => {
      return request({
        url: `/agent/queryProxyDomain`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-重置密码      
      req =>>
        IResetPasswordReq {
          password: string //密码
          userId: number //用户编号
        }
      */
    AgentResetPasswordPOST: (data: IResetPasswordReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/resetPassword`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-解冻代理      
      req =>>
        IAgentIdReq {
          agentId: number //代理编号
        }
      */
    AgentUnlockPOST: (data: IAgentIdReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/unlock`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商代理管理-修改代理信息      
      req =>>
        IAgentUpdateReq {
          agentId: number //代理编号
          proxyDomainId: number //代理域名
          rewardRate: number //奖励比例 0-1之间
          status: number //状态 1:启用 0:禁用
        }
      */
    AgentUpdatePOST: (data: IAgentUpdateReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/agent/update`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
