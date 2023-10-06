/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 主任务-修改排序
          req =>>
            IMissionInfoOrderReq {
              missionId: number //任务ID
              sortOrder: number //排序，越小优先级越高
            }
          */
    MissionChangeOrderPUT: (data = {}, config = {}) => {
      return request({
        url: `/mission/changeOrder`,
        method: "PUT",
        data,
        ...config
      });
    },
    /**
          * @description: 主任务-上线/下线
          req =>>
            IMissionInfoStatusReq {
              missionId: number //任务ID
              status: number //状态 0:下线 1:上线
            }
          */
    MissionChangeStatusPUT: (data = {}, config = {}) => {
      return request({
        url: `/mission/changeStatus`,
        method: "PUT",
        data,
        ...config
      });
    },
    /**
          * @description: 任务总配置-查询配置
          res =>>
            IMissionConfigResp {
              autoShowMissionCenter: number //登陆后自动弹出任务中心 0:否 1:是
              createTime: string //创建时间
              missionFloatIcon: string //任务悬浮入口icon
              showMissionFloatIcon: number //显示任务中心悬浮入口 0:否 1:是
              updateTime: string //更新时间
            }
          */
    MissionConfigQueryGET: (config = {}) => {
      return request({
        url: `/mission/config/query`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 任务总配置-保存或更新
          req =>>
            IMissionConfigReq {
              autoShowMissionCenter: number //登陆后自动弹出任务中心 0:否 1:是
              missionFloatIcon: string //任务悬浮入口icon
              showMissionFloatIcon: number //显示任务中心悬浮入口 0:否 1:是
            }
          */
    MissionConfigSavePOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/config/save`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 主任务-删除主任务  */
    MissionDelete$missionId$DELETE: (code = "", config = {}) => {
      return request({
        url: `/mission/delete/${code}`,
        method: "DELETE",
        ...config
      });
    },
    /**
     * @description: 主任务-删除主任务  */
    MissionDeleteByCodeDELETE: (code = "", config = {}) => {
      return request({
        url: `/mission/delete/${code}`,
        method: "DELETE",
        ...config
      });
    },
    /**
     * @description: 主任务-删除主任务  */
    MissionDeleteByCodeMissionIdDELETE: (code = "", config = {}) => {
      return request({
        url: `/mission/delete/${code}`,
        method: "DELETE",
        ...config
      });
    },
    /**
          * @description: 主任务描述-查询任务名称是否在该包网对应语言中存在
          req =>>
            IMissionNameReq {
              lang: string //语言
              missionName: string //任务名称
            }
          */
    MissionDescriptionExistMissionNamePOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/description/existMissionName`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 主任务-预删除主任务  */
    MissionPreDelete$missionId$GET: (code = "", config = {}) => {
      return request({
        url: `/mission/preDelete/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 主任务-预删除主任务  */
    MissionPreDeleteByCodeGET: (code = "", config = {}) => {
      return request({
        url: `/mission/preDelete/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 主任务-预删除主任务  */
    MissionPreDeleteByCodeMissionIdGET: (code = "", config = {}) => {
      return request({
        url: `/mission/preDelete/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 主任务-查询主任务详情，可用于点击编辑后的回显
          res =>>
            IMissionInfoQueryOneResp {
              auditGameItem: IGameItem[] //流水稽核游戏详情
              auditGameType: number //流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏
              auditGameValue: string[] //流水稽核游戏
              auditMode: number //审核模式 0:无需审核自动发放 1:审核后发放
              cyclingPeriod: number //循环周期，单位：天
              cyclingType: number //循环方式，1:每天 2:每周 3:每月 4:自定义
              daysAfterRegister: number //结束时间：注册后n天
              endTime: string //结束时间
              endTimeType: number //结束类型 0:长期有效 1:指定时间 2:注册后n天
              missionDesc: IMissionDesc[] //多语言任务描述
              missionId: number //主任务id，唯一
              receiveLimit: number[] //第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制
              startTime: string //开始时间
              targetUserType: number //参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户
              type: number //任务类型 1:限时 2:循环
              validAmountMultiplier: number //有效流水倍数
            }
          */
    MissionQueryDetail$missionId$GET: (code = "", config = {}) => {
      return request({
        url: `/mission/queryDetail/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 主任务-查询主任务详情，可用于点击编辑后的回显
          res =>>
            IMissionInfoQueryOneResp {
              auditGameItem: IGameItem[] //流水稽核游戏详情
              auditGameType: number //流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏
              auditGameValue: string[] //流水稽核游戏
              auditMode: number //审核模式 0:无需审核自动发放 1:审核后发放
              cyclingPeriod: number //循环周期，单位：天
              cyclingType: number //循环方式，1:每天 2:每周 3:每月 4:自定义
              daysAfterRegister: number //结束时间：注册后n天
              endTime: string //结束时间
              endTimeType: number //结束类型 0:长期有效 1:指定时间 2:注册后n天
              missionDesc: IMissionDesc[] //多语言任务描述
              missionId: number //主任务id，唯一
              receiveLimit: number[] //第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制
              startTime: string //开始时间
              targetUserType: number //参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户
              type: number //任务类型 1:限时 2:循环
              validAmountMultiplier: number //有效流水倍数
            }
          */
    MissionQueryDetailByCodeGET: (code = "", config = {}) => {
      return request({
        url: `/mission/queryDetail/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 主任务-查询主任务详情，可用于点击编辑后的回显
          res =>>
            IMissionInfoQueryOneResp {
              auditGameItem: IGameItem[] //流水稽核游戏详情
              auditGameType: number //流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏
              auditGameValue: string[] //流水稽核游戏
              auditMode: number //审核模式 0:无需审核自动发放 1:审核后发放
              cyclingPeriod: number //循环周期，单位：天
              cyclingType: number //循环方式，1:每天 2:每周 3:每月 4:自定义
              daysAfterRegister: number //结束时间：注册后n天
              endTime: string //结束时间
              endTimeType: number //结束类型 0:长期有效 1:指定时间 2:注册后n天
              missionDesc: IMissionDesc[] //多语言任务描述
              missionId: number //主任务id，唯一
              receiveLimit: number[] //第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制
              startTime: string //开始时间
              targetUserType: number //参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户
              type: number //任务类型 1:限时 2:循环
              validAmountMultiplier: number //有效流水倍数
            }
          */
    MissionQueryDetailByCodeMissionIdGET: (code = "", config = {}) => {
      return request({
        url: `/mission/queryDetail/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 主任务-主任务列表
          req =>>
            IMissionInfoListReq {
              missionName: string //任务名称
              order: number //0:升序 1:降序
              orderField: number //排序字段 0:序号 1:新增时间
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //任务状态 0:下线 1:上线
              type: number //任务类型 1:限时 2:循环
            }
        
          res =>>
            IPageResultMissionInfoListResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IMissionInfoListResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    MissionQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 任务项-存款方式列表  */
    MissionQuestDepositWayListGET: (config = {}) => {
      return request({
        url: `/mission/quest/depositWay/list`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 任务项-任务项列表  */
    MissionQuestList$missionId$GET: (code = "", config = {}) => {
      return request({
        url: `/mission/quest/list/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 任务项-任务项列表  */
    MissionQuestListByCodeGET: (code = "", config = {}) => {
      return request({
        url: `/mission/quest/list/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 任务项-任务项列表  */
    MissionQuestListByCodeMissionIdGET: (code = "", config = {}) => {
      return request({
        url: `/mission/quest/list/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 任务项-保存任务项
          req =>>
            IMissionQuestCreateOrUpdateReq {
              missionId: number //主任务Id
              questInfo: IQuestInfo[] //没有提供描述
            }
          */
    MissionQuestSavePOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/quest/save`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 任务项-任务项名称列表  */
    MissionQuestTypeListGET: (config = {}) => {
      return request({
        url: `/mission/quest/type/list`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 用户任务奖励-通过/拒绝审核
          req =>>
            IShenPiRenWuJiangLiQingQiu {
              pass: boolean //审批结果 true:通过 false:拒绝
              reason: string //拒绝原因
              rewardNo: string //发放编号
            }
          */
    MissionRewardAuditPOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/reward/audit`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户任务奖励-批量通过
          req =>>
            IPiLiangTongGuoRenWuJiangLiQingQiu {
              rewardNoList: string[] //发放编号
            }
          */
    MissionRewardBatchPassPOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/reward/batchPass`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户任务奖励-列表查询
          req =>>
            IMissionUserQuestRewardListReq {
              missionName: string //任务名称
              missionType: number //任务类型 1:限时 2:循环
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              receiveEndTime: string //领取时间（结束时间）
              receiveStartTime: string //领取时间（开始时间）
              rewardNo: string //发放ID
              status: number //发放状态 0:待审核 1:已通过 2:已拒绝 3:自动发放
              typeCode: number //任务项
              userName: string //用户名
            }
        
          res =>>
            IPageResultMissionUserQuestRewardListResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IMissionUserQuestRewardListResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    MissionRewardQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/reward/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 主任务-新建或编辑主任务
          req =>>
            IMissionCreateOrUpdateReq {
              auditGameType: number //流水稽核游戏类型：0-不限 1-厂商 2-类型 3-游戏
              auditGameValue: string[] //流水稽核游戏
              auditMode: number //审核模式 0:无需审核自动发放 1:审核后发放
              cyclingPeriod: number //循环周期，单位：天
              cyclingType: number //循环方式，1:每天 2:每周 3:每月 4:自定义
              daysAfterRegister: number //结束时间：注册后n天
              endTime: string //结束时间
              endTimeType: number //结束类型 0:长期有效 1:指定时间 2:注册后n天
              missionDesc: IMissionDesc[] //多语言任务描述
              missionId: number //主任务id，唯一
              questInfo: IQuestInfo[] //任务项信息
              receiveLimit: number[] //第一个值：需绑定提款资料, 第二个值：关联账号领取一次限制
              startTime: string //开始时间
              targetUserType: number //参与对象 0:全部 1:任务期间注册的新用户 2:任务开始前的老用户
              type: number //任务类型 1:限时 2:循环
              validAmountMultiplier: number //有效流水倍数
            }
          */
    MissionSavePOST: (data = {}, config = {}) => {
      return request({
        url: `/mission/save`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
