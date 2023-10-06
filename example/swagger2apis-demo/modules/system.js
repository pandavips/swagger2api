/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 系统调账-调账
          req =>>
            IAdjustmentReq {
              amount: number //金额
              remark: string //备注
              type: number //类型：0：减少余额，1：增加余额，2：发红包，3:其它
              userId: number //用户id
              withdrawFactor: number //提现流水倍数
            }
          */
    SystemAdjustmentAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/adjustment/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 系统调账-查询包网商总调账金额
          res =>>
            IProxySumResp {
              proxyId: number //包网商id
              sumDeposit: number //调账总增加金额
              sumWithdraw: number //调账总减少金额
            }
          */
    SystemAdjustmentGetProxyAdjustSumGET: (config = {}) => {
      return request({
        url: `/system/adjustment/getProxyAdjustSum`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 系统调账-调账记录列表查询
          res =>>
            IPageResultSystemDepositWithdrawBo {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: ISystemDepositWithdrawBo[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPaging {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
            }
          */
    SystemAdjustmentQueryPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/adjustment/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理系统管理-获取占成和返佣上限
          res =>>
            IProxyRewardRateResp {
              ratioRate: number //没有提供描述
              rebateRate: number //没有提供描述
            }
          */
    SystemGetRewardRatePOST: (config = {}) => {
      return request({
        url: `/system/getRewardRate`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 代理系统管理-代理基础信息
          res =>>
            IProxySummerResp {
              logo: string //logo编号
              logoUrl: string //logo链接
              pageIco: string //页签ico编号
              pageIcoUrl: string //页签ico链接
              pageName: string //页签名称(中文)
              pageNamePh: string //页签名称(菲律宾语)
              pageNameTh: string //页签名称(泰语)
              pageNameUs: string //页签名称(英文)
              pageNameVn: string //页签名称(越南语)
              proxyId: number //代理编号
            }
          */
    SystemGetSummaryPOST: (config = {}) => {
      return request({
        url: `/system/getSummary`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 菜单管理接口-新增菜单
          req =>>
            IMenuBaseVo {
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
    SystemMenuAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/menu/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 菜单管理接口-删除菜单
          req =>>
            ISystemmenudeleteQueryParams {
              menuId: string //菜单编号
            }
        
          req =>>
            ISystemmenudeleteQueryParams {
              menuId: string //菜单编号
            }
          */
    SystemMenuDeleteGET: (data = {}, config = {}) => {
      return request({
        url: `/system/menu/delete`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 菜单管理接口-删除菜单
          req =>>
            ISystemmenudeleteQueryParams {
              menuId: string //菜单编号
            }
        
          req =>>
            ISystemmenudeleteQueryParams {
              menuId: string //菜单编号
            }
          */
    SystemMenuDeletePOST: (data = {}, config = {}) => {
      return request({
        url: `/system/menu/delete`,
        method: "POST",
        params: data,
        ...config
      });
    },
    /**
     * @description: 菜单管理接口-查询所有菜单  */
    SystemMenuQueryAllGET: (config = {}) => {
      return request({
        url: `/system/menu/queryAll`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 菜单管理接口-修改菜单
          req =>>
            IMenuUpdateVo {
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
    SystemMenuUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/system/menu/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-新增角色
          req =>>
            IRoleBaseVo {
              remark: string //备注(最长50)
              roleName: string //角色名称(最长50)
              roleType: string //角色类型(1:业务角色;2:管理角色)
            }
          */
    SystemRoleAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-授权角色菜单
          req =>>
            IRoleMenuRequestVo {
              menuIds: string[] //菜单编号集合
              roleId: string //角色编号
            }
          */
    SystemRoleAuthorizeMenuPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/authorizeMenu`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-锁定或解锁角色
          req =>>
            IRoleLockRequestVo {
              lockFlag: string //锁定标志 1:锁定;0:激活
              roleId: string //角色编号
            }
          */
    SystemRoleChangeLockPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/changeLock`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-删除角色
          req =>>
            ISystemroledeleteQueryParams {
              roleId: string //角色编号
            }
        
          req =>>
            ISystemroledeleteQueryParams {
              roleId: string //角色编号
            }
          */
    SystemRoleDeleteGET: (data = {}, config = {}) => {
      return request({
        url: `/system/role/delete`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-删除角色
          req =>>
            ISystemroledeleteQueryParams {
              roleId: string //角色编号
            }
        
          req =>>
            ISystemroledeleteQueryParams {
              roleId: string //角色编号
            }
          */
    SystemRoleDeletePOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/delete`,
        method: "POST",
        params: data,
        ...config
      });
    },
    /**
     * @description: 角色管理接口-查询所有角色  */
    SystemRoleQueryAllGET: (config = {}) => {
      return request({
        url: `/system/role/queryAll`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 角色管理接口-查询单个角色
          res =>>
            IJiaoSeXiangYingXinXi {
              createTime: string //创建时间
              locked: string //锁定标志 1锁定 0激活
              remark: string //备注(最长50)
              roleId: string //角色编号
              roleName: string //角色名称(最长50)
              roleType: string //角色类型(1:业务角色;2:管理角色)
              updateTime: string //修改时间
            }
        
          req =>>
            ISystemrolequeryByIdQueryParams {
              roleId: string //角色编号
            }
          */
    SystemRoleQueryByIdGET: (data = {}, config = {}) => {
      return request({
        url: `/system/role/queryById`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-查询角色以及对应的菜单信息
          res =>>
            IRoleMenuResponseVo {
              createTime: string //创建时间
              locked: string //锁定标志 1锁定 0激活
              menus: IMenuResponseVo[] //权限信息
              remark: string //备注(最长50)
              roleId: string //角色编号
              roleName: string //角色名称(最长50)
              roleType: string //角色类型(1:业务角色;2:管理角色)
              updateTime: string //修改时间
            }
        
          req =>>
            ISystemrolequeryDetailQueryParams {
              roleId: string //角色编号
            }
          */
    SystemRoleQueryDetailGET: (data = {}, config = {}) => {
      return request({
        url: `/system/role/queryDetail`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-分页查询角色信息
          res =>>
            IPageResultJiaoSeXiangYingXinXi {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IJiaoSeXiangYingXinXi[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IRoleQueryRequestVo {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              remark: string //角色描述
              roleName: string //角色名称
            }
          */
    SystemRoleQueryPagingPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/queryPaging`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 角色管理接口-修改角色
          req =>>
            IRoleUpdateVo {
              remark: string //备注(最长50)
              roleId: string //角色编号
              roleName: string //角色名称(最长50)
              roleType: string //角色类型(1:业务角色;2:管理角色)
            }
          */
    SystemRoleUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/system/role/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理系统管理-修改代理基础信息
          req =>>
            IProxyBaseUpdateReq {
              logo: string //logo编号
              pageIco: string //页签ico编号
              pageName: string //页签名称(中文)
              pageNamePh: string //页签名称(菲律宾语)
              pageNameTh: string //页签名称(泰语)
              pageNameUs: string //页签名称(英文)
              pageNameVn: string //页签名称(越南语)
            }
          */
    SystemUpdateSummaryPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/updateSummary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户相关接口-修改用户密码
          req =>>
            IUserPasswordRequestProxyVo {
              newPassword: string //新密码
              notSame: boolean //没有提供描述
              oldPassword: string //原密码
            }
          */
    SystemUserChangePasswordPOST: (data = {}, config = {}) => {
      return request({
        url: `/system/user/changePassword`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户相关接口-获取对应用户的角色信息
          req =>>
            ISystemusergetRoleQueryParams {
              userId: string //用户编号
            }
          */
    SystemUserGetRoleGET: (data = {}, config = {}) => {
      return request({
        url: `/system/user/getRole`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户相关接口-获取用户角色和菜单信息
          res =>>
            IUserRoleMenuVo {
              menus: IMenuResponseVo[] //菜单信息
              roles: IJiaoSeXiangYingXinXi[] //角色信息
            }
          */
    SystemUserGetRoleMenuGET: (config = {}) => {
      return request({
        url: `/system/user/getRoleMenu`,
        method: "GET",
        ...config
      });
    }
  };
};
