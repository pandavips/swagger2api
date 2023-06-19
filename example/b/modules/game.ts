/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 游戏渠道相关 - 查询渠道
   */
  GameChannelQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameChannelSummary>[]> => {
    return request({
      url: `/game/channel/queryAll`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-VSC专用
   */
  GameChannelQueryGamePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/channel/queryGame`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-GF专用
   */
  GameChannelQueryGameGfPOST: (
    data: ICurrencyReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/channel/queryGame/gf`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏渠道相关 - 查询厂商信息
   */
  GameFactoryQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/factory/queryAll`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 游戏渠道相关 - 查询游戏类型信息
   */
  GameGameTypeQueryAllPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IChannelTypeResp>[]> => {
    return request({
      url: `/game/gameType/queryAll`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 获取精选游戏
   */
  GameGetChoicePOST: (
    data: IProxyIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyChoiceGameResp>[]> => {
    return request({
      url: `/game/getChoice`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 下线游戏
   */
  GameOfflinePOST: (
    data: IProxyGameIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/offline`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 上线游戏
   */
  GameOnlinePOST: (
    data: IProxyGameIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/online`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 查询区域下的游戏信息
   */
  GameQueryAreaGamePOST: (
    data: IAreaIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyGameResp>[]> => {
    return request({
      url: `/game/queryAreaGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 游戏列表
   */
  GameQueryListPOST: (
    data: IQueryProxyGameReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyGameResp>> => {
    return request({
      url: `/game/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 查询代理下的游戏信息
   */
  GameQueryProxyGamePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyGameResp>[]> => {
    return request({
      url: `/game/queryProxyGame`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 棋牌游戏记录
   */
  GameRecordChesscardPOST: (
    data: IChessCardGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultChessCardGameRecordResp>> => {
    return request({
      url: `/game/record/chesscard`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 棋牌游戏记录导出
   */
  GameRecordChesscardExportGET: (
    data: IGameRecordChesscardExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/chesscardExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 斗鸡游戏记录
   */
  GameRecordChickenPOST: (
    data: IGameRecordChickenPOSTReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultChickenGameRecordResp>> => {
    return request({
      url: `/game/record/chicken`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 斗鸡游戏记录导出
   */
  GameRecordChickenExportGET: (
    data: IGameRecordChickenExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/chickenExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 电子游戏记录
   */
  GameRecordElectronPOST: (
    data: IElectronGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultElectronGameRecordResp>> => {
    return request({
      url: `/game/record/electron`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 电子游戏记录导出
   */
  GameRecordElectronExportGET: (
    data: IGameRecordElectronExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/electronExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 电竞游戏记录
   */
  GameRecordEsportPOST: (
    data: IEsportGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultEsportGameRecordResp>> => {
    return request({
      url: `/game/record/esport`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 电竞游戏记录导出
   */
  GameRecordEsportExportGET: (
    data: IGameRecordEsportExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/esportExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 捕鱼游戏记录
   */
  GameRecordFishPOST: (
    data: IFishGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultFishGameRecordResp>> => {
    return request({
      url: `/game/record/fish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 捕鱼游戏记录导出
   */
  GameRecordFishExportGET: (
    data: IGameRecordFishExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/fishExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 真人视讯游戏记录
   */
  GameRecordLivevideoPOST: (
    data: ILiveVideoGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultLiveVideoGameRecordResp>> => {
    return request({
      url: `/game/record/livevideo`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 真人视讯游戏记录导出
   */
  GameRecordLivevideoExportGET: (
    data: IGameRecordLivevideoExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/livevideoExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 彩票游戏记录
   */
  GameRecordLotteryPOST: (
    data: ILotteryGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultLotteryGameRecordResp>> => {
    return request({
      url: `/game/record/lottery`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 彩票游戏记录导出
   */
  GameRecordLotteryExportGET: (
    data: IGameRecordLotteryExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/lotteryExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 游戏记录
   */
  GameRecordOrdinaryPOST: (
    data: IOrdinaryGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOrdinaryGameRecordResp>> => {
    return request({
      url: `/game/record/ordinary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 游戏记录导出
   */
  GameRecordOrdinaryExportGET: (
    data: IGameRecordOrdinaryExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/ordinaryExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 体育游戏记录
   */
  GameRecordSportPOST: (
    data: ISportGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultSportGameRecordResp>> => {
    return request({
      url: `/game/record/sport`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户游戏记录 - 体育游戏记录导出
   */
  GameRecordSportExportGET: (
    data: IGameRecordSportExportGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/record/sportExport`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 游戏统计 - 渠道导出excel
   */
  GameStatisticsChannelExportExcelGET: (
    data: IGameStatisticsChannelExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/statistics/channel/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 游戏统计 - 渠道 - 按日统计记录
   */
  GameStatisticsChannelListPOST: (
    data: IGameUserStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultGameUserStatisticsResp>> => {
    return request({
      url: `/game/statistics/channel/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏统计 - 导出excel
   */
  GameStatisticsProxyExportExcelGET: (
    data: IGameStatisticsProxyExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/statistics/proxy/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 游戏统计 - 代理 - 按日统计记录
   */
  GameStatisticsProxyListPOST: (
    data: IStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultGameProxyStatisticsResp>> => {
    return request({
      url: `/game/statistics/proxy/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏统计 - 代理 - 汇总
   */
  GameStatisticsProxySummaryPOST: (
    data: ISummaryReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameProxyStatisticsResp>> => {
    return request({
      url: `/game/statistics/proxy/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏类型相关 - 主游戏类型列表
   */
  GameTypeGameMainTypeListPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameMainTypeResp>[]> => {
    return request({
      url: `/game/type/gameMainTypeList`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 更改游戏区域
   */
  GameUpdateAreaPOST: (
    data: IProxyGameUpdateAreaReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateArea`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 修改精选游戏信息
   */
  GameUpdateChoiceGamePOST: (
    data: IUpdateProxyChoiceGameReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateChoiceGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 修改游戏信息
   */
  GameUpdateGamePOST: (
    data: IUpdateProxyGameReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updateGame`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理游戏相关 - 更改游戏是否热门
   */
  GameUpdatePopularPOST: (
    data: IProxyGameUpdatePopularReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/game/updatePopular`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
