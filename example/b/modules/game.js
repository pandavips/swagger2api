/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 游戏渠道相关 - 查询渠道
     */
    GameChannelQueryAllPOST: (config = {}) => {
        return request({
            url: `/game/channel/queryAll`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-VSC专用
     */
    GameChannelQueryGamePOST: (config = {}) => {
        return request({
            url: `/game/channel/queryGame`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 游戏渠道相关 - 查询并更新渠道游戏列表-GF专用
     */
    GameChannelQueryGameGfPOST: (data, config = {}) => {
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
    GameFactoryQueryAllPOST: (config = {}) => {
        return request({
            url: `/game/factory/queryAll`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 游戏渠道相关 - 查询游戏类型信息
     */
    GameGameTypeQueryAllPOST: (config = {}) => {
        return request({
            url: `/game/gameType/queryAll`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 代理游戏相关 - 获取精选游戏
     */
    GameGetChoicePOST: (data, config = {}) => {
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
    GameOfflinePOST: (data, config = {}) => {
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
    GameOnlinePOST: (data, config = {}) => {
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
    GameQueryAreaGamePOST: (data, config = {}) => {
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
    GameQueryListPOST: (data, config = {}) => {
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
    GameQueryProxyGamePOST: (config = {}) => {
        return request({
            url: `/game/queryProxyGame`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 用户游戏记录 - 棋牌游戏记录
     */
    GameRecordChesscardPOST: (data, config = {}) => {
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
    GameRecordChesscardExportGET: (data, config = {}) => {
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
    GameRecordChickenPOST: (data, config = {}) => {
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
    GameRecordChickenExportGET: (data, config = {}) => {
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
    GameRecordElectronPOST: (data, config = {}) => {
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
    GameRecordElectronExportGET: (data, config = {}) => {
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
    GameRecordEsportPOST: (data, config = {}) => {
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
    GameRecordEsportExportGET: (data, config = {}) => {
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
    GameRecordFishPOST: (data, config = {}) => {
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
    GameRecordFishExportGET: (data, config = {}) => {
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
    GameRecordLivevideoPOST: (data, config = {}) => {
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
    GameRecordLivevideoExportGET: (data, config = {}) => {
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
    GameRecordLotteryPOST: (data, config = {}) => {
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
    GameRecordLotteryExportGET: (data, config = {}) => {
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
    GameRecordOrdinaryPOST: (data, config = {}) => {
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
    GameRecordOrdinaryExportGET: (data, config = {}) => {
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
    GameRecordSportPOST: (data, config = {}) => {
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
    GameRecordSportExportGET: (data, config = {}) => {
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
    GameStatisticsChannelExportExcelGET: (data, config = {}) => {
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
    GameStatisticsChannelListPOST: (data, config = {}) => {
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
    GameStatisticsProxyExportExcelGET: (data, config = {}) => {
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
    GameStatisticsProxyListPOST: (data, config = {}) => {
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
    GameStatisticsProxySummaryPOST: (data, config = {}) => {
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
    GameTypeGameMainTypeListPOST: (config = {}) => {
        return request({
            url: `/game/type/gameMainTypeList`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 代理游戏相关 - 更改游戏区域
     */
    GameUpdateAreaPOST: (data, config = {}) => {
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
    GameUpdateChoiceGamePOST: (data, config = {}) => {
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
    GameUpdateGamePOST: (data, config = {}) => {
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
    GameUpdatePopularPOST: (data, config = {}) => {
        return request({
            url: `/game/updatePopular`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
