/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 活动相关-编辑
          req =>>
            IEditActivityReq {
              activityName: string //活动名称
              activityNo: string //活动编号
              endTime: string //结束时间
              lanList: IEditActivityLanguageReq[] //语言类型
              startTime: string //开始时间
              status: number //状态,1:上架;2:下架
              type: number //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
              weights: number //权重
            }
        
          res =>>
            IEditActivityResp {
              activityNo: string //活动编号
            }
          */
    ActivityEditActivityPOST: (data = {}, config = {}) => {
      return request({
        url: `/activity/editActivity`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 活动相关-上下架
          req =>>
            IEditActivityStatusReq {
              activityNo: string //活动No
              status: number //状态,1:上架;2:下架
            }
          */
    ActivityEditStatusPOST: (data = {}, config = {}) => {
      return request({
        url: `/activity/editStatus`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 活动相关-导出Excel  */
    ActivityExportGET: (config = {}) => {
      return request({
        url: `/activity/export`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 活动相关-导出Excel  */
    ActivityExportPOST: (config = {}) => {
      return request({
        url: `/activity/export`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 活动相关-查询-详情
          req =>>
            IQueryActivityDetailReq {
              activityNo: string //活动No
            }
        
          res =>>
            IQueryActivityDetailResp {
              activityName: string //活动名称
              activityNo: string //活动编号
              endTime: string //结束时间
              lanList: IQueryActivityLanDetailVo[] //活动语言版本
              startTime: string //开始时间
              status: number //状态,0:初始化;1:上架;2:下架
              type: number //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
              weights: number //权重
            }
          */
    ActivityFetchActivityDetailPOST: (data = {}, config = {}) => {
      return request({
        url: `/activity/fetchActivityDetail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 活动相关-查询
          res =>>
            IPageResultQueryActivityResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IQueryActivityResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IQueryActivityReq {
              activityName: string //活动名称
              activityNo: string //活动编号
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              startTime: string //开始时间
              status: number //状态,0:初始化;1:上架;2:下架
              type: number //分类,0:初始化;1:拉新;2:复购;3:留存;4:裂变
            }
          */
    ActivityQueryActivityPOST: (data = {}, config = {}) => {
      return request({
        url: `/activity/queryActivity`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
