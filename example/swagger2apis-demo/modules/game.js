/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
     * @description: 游戏渠道相关-查询渠道  */
    GameChannelQueryAllPOST: (config = {}) => {
      return request({
        url: `/game/channel/queryAll`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 游戏渠道对账相关-查询游戏渠道对账数据
          req =>>
            IGameChannelStatementReq {
              channelId: string //渠道编号
              factoryCode: string //游戏厂商
              gameType: number //游戏类型
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              period: string //统计周期
              proxyId: number //包网商id
            }
        
          res =>>
            IPageResultGameChannelStatementResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IGameChannelStatementResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameChannelStatementQueryPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/channel/statement/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 游戏渠道相关-查询厂商信息  */
    GameFactoryQueryAllPOST: (config = {}) => {
      return request({
        url: `/game/factory/queryAll`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 游戏渠道相关-查询游戏类型信息  */
    GameGameTypeQueryAllPOST: (config = {}) => {
      return request({
        url: `/game/gameType/queryAll`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-获取精选游戏
          req =>>
            IProxyIdReq {
              proxyId: number //代理编号
            }
          */
    GameGetChoicePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/getChoice`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-下线游戏
          req =>>
            IProxyGameIdReq {
              proxyGameId: number //代理游戏编号
            }
          */
    GameOfflinePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/offline`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-上线游戏
          req =>>
            IProxyGameIdReq {
              proxyGameId: number //代理游戏编号
            }
          */
    GameOnlinePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/online`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-查询区域下的游戏信息
          req =>>
            IAreaIdReq {
              areaId: number //区域编号
            }
          */
    GameQueryAreaGamePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/queryAreaGame`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-游戏列表
          res =>>
            IPageResultProxyGameResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IProxyGameResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IQueryProxyGameReq {
              factoryCode: string //游戏厂商
              gameName: string //游戏名称
              gameTypeName: string //游戏类型
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              popular: boolean //是否热门：true是，false否
              status: number //状态 1:启用 0:禁用
            }
          */
    GameQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 代理游戏相关-查询代理下的游戏信息  */
    GameQueryProxyGamePOST: (config = {}) => {
      return request({
        url: `/game/queryProxyGame`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-棋牌游戏记录
          req =>>
            IChessCardGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultChessCardGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IChessCardGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordChesscardPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/chesscard`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-棋牌游戏记录导出
          req =>>
            IGamerecordchesscardExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordChesscardExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/chesscardExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-斗鸡游戏记录
          req =>>
            IChickenGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultChickenGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IChickenGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordChickenPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/chicken`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-斗鸡游戏记录导出
          req =>>
            IGamerecordchickenExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordChickenExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/chickenExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-电子游戏记录
          req =>>
            IElectronGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultElectronGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IElectronGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordElectronPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/electron`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-电子游戏记录导出
          req =>>
            IGamerecordelectronExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordElectronExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/electronExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-电竞游戏记录
          req =>>
            IEsportGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //渠道Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultEsportGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IEsportGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordEsportPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/esport`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-电竞游戏记录导出
          req =>>
            IGamerecordesportExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //渠道Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordEsportExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/esportExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-捕鱼游戏记录
          req =>>
            IFishGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultFishGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IFishGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordFishPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/fish`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-捕鱼游戏记录导出
          req =>>
            IGamerecordfishExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordFishExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/fishExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-真人视讯游戏记录
          req =>>
            ILiveVideoGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultLiveVideoGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: ILiveVideoGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordLivevideoPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/livevideo`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-真人视讯游戏记录导出
          req =>>
            IGamerecordlivevideoExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordLivevideoExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/livevideoExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-彩票游戏记录
          req =>>
            ILotteryGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //渠道Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultLotteryGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: ILotteryGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordLotteryPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/lottery`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-彩票游戏记录导出
          req =>>
            IGamerecordlotteryExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //渠道Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordLotteryExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/lotteryExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-游戏记录
          req =>>
            IOrdinaryGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //渠道Id
              factoryCode: string //厂商
              gameMainType: string //游戏主类型
              gameType: number //游戏类型
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              resultFlag: number //游戏结果
              status: number //状态
              userId: number //用户Id
              userName: string //用户名
            }
        
          res =>>
            IPageResultOrdinaryGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IOrdinaryGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameRecordOrdinaryPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/ordinary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-游戏记录导出
          req =>>
            IGamerecordordinaryExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //渠道Id
              factoryCode: string //厂商
              gameType: number //游戏类型
              resultFlag: number //游戏结果
              status: number //状态
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              gameMainType: string //游戏主类型
            }
          */
    GameRecordOrdinaryExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/ordinaryExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-体育游戏记录
          res =>>
            IPageResultSportGameRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: ISportGameRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            ISportGameRecordReq {
              betEndTime: string //注单时间-结束
              betStartTime: string //注单时间-开始
              channelId: string //用户Id
              factoryCode: string //厂商
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户Id
              userName: string //用户名
            }
          */
    GameRecordSportPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/record/sport`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 用户游戏记录-体育游戏记录导出
          req =>>
            IGamerecordsportExportQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userName: string //用户名
              userId: number //用户Id
              channelId: string //用户Id
              betStartTime: string //注单时间-开始
              betEndTime: string //注单时间-结束
              factoryCode: string //厂商
            }
          */
    GameRecordSportExportGET: (data = {}, config = {}) => {
      return request({
        url: `/game/record/sportExport`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 游戏统计-渠道导出excel
          req =>>
            IGamestatisticschannelexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              channelId: string //游戏渠道编号
              parentId: number //代理编号
              userId: number //用户编号
              factoryCode: string //游戏渠道编号
              start: number //开始时间
              end: number //结束时间
            }
          */
    GameStatisticsChannelExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/game/statistics/channel/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 游戏统计-渠道 - 按日统计记录
          req =>>
            IGameUserStatisticsReq {
              channelId: string //游戏渠道编号
              end: number //结束时间
              factoryCode: string //游戏渠道编号
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              parentId: number //代理编号
              start: number //开始时间
              userId: number //用户编号
            }
        
          res =>>
            IPageResultGameUserStatisticsResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IGameUserStatisticsResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    GameStatisticsChannelListPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/statistics/channel/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 游戏统计-导出excel
          req =>>
            IGamestatisticsproxyexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              start: number //开始日期
              end: number //结束日期
            }
          */
    GameStatisticsProxyExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/game/statistics/proxy/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 游戏统计-代理 - 按日统计记录
          res =>>
            IPageResultGameProxyStatisticsResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IGameProxyStatisticsResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IStatisticsReq {
              end: string //结束日期
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              start: string //开始日期
            }
          */
    GameStatisticsProxyListPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/statistics/proxy/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 游戏统计-代理 - 汇总
          res =>>
            IGameProxyStatisticsResp {
              betAmount: number //总投注
              count: number //总局数
              lose: number //总输
              proxyUid: number //代理用户编号
              result: number //总结果
              time: string //统计时间
              validAmount: number //有效投注
              win: number //总赢
            }
        
          req =>>
            ISummaryReq {
              end: string //结束日期
              start: string //开始日期
            }
          */
    GameStatisticsProxySummaryPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/statistics/proxy/summary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 游戏类型相关-主游戏类型列表  */
    GameTypeGameMainTypeListPOST: (config = {}) => {
      return request({
        url: `/game/type/gameMainTypeList`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 游戏类型相关-游戏类型列表  */
    GameTypeGameTypeListPOST: (config = {}) => {
      return request({
        url: `/game/type/gameTypeList`,
        method: "POST",
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-更改游戏区域
          req =>>
            IProxyGameUpdateAreaReq {
              areaId: number //区域编号
              proxyGameIds: number[] //代理游戏编号
              proxyId: number //代理编号
            }
          */
    GameUpdateAreaPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/updateArea`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-修改精选游戏信息
          req =>>
            IUpdateProxyChoiceGameReq {
              icon: string //游戏图标
              proxyGameId: number //代理游戏编号
            }
          */
    GameUpdateChoiceGamePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/updateChoiceGame`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-修改游戏信息
          req =>>
            IUpdateProxyGameReq {
              gameName: string //自定义游戏名称
              icon: string //游戏图标
              proxyGameId: number //代理游戏编号
            }
          */
    GameUpdateGamePOST: (data = {}, config = {}) => {
      return request({
        url: `/game/updateGame`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 代理游戏相关-更改游戏是否热门
          req =>>
            IProxyGameUpdatePopularReq {
              areaId: number //区域编号
              popular: boolean //是否热门：true是，false否
              proxyGameIds: number[] //代理游戏编号
              proxyId: number //代理编号
            }
          */
    GameUpdatePopularPOST: (data = {}, config = {}) => {
      return request({
        url: `/game/updatePopular`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
