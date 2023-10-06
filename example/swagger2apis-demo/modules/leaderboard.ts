/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 排行榜管理-高返奖游戏删除      
      req =>>
        ISettingsReturnGameReq {
          baseTotalReturnAmount: number //基础总返奖额
          baseTotalReturnUser: number //基础总返奖人数
          bizNo: string //编码(新增的时候不传，修改时必传)
          factoryCode: string //厂商编码
          gameName: string //游戏名称
          proxyGameId: number //代理游戏编号
        }
      */
    LeaderboardReturnGameDeletePOST: (data: ISettingsReturnGameReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/leaderboard/returnGame/delete`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 排行榜管理-查询高返奖游戏列表      
      res =>>
        IPageResultSettingsReturnGameResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: ISettingsReturnGameResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IPaging {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    LeaderboardReturnGameQueryListPOST: (data: IPaging = {}, config = {}): Promise<IPageResultSettingsReturnGameResp> => {
      return request({
        url: `/leaderboard/returnGame/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 排行榜管理-保存高返奖游戏      
      req =>>
        ISettingsReturnGameReq {
          baseTotalReturnAmount: number //基础总返奖额
          baseTotalReturnUser: number //基础总返奖人数
          bizNo: string //编码(新增的时候不传，修改时必传)
          factoryCode: string //厂商编码
          gameName: string //游戏名称
          proxyGameId: number //代理游戏编号
        }
      */
    LeaderboardReturnGameSavePOST: (data: ISettingsReturnGameReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/leaderboard/returnGame/save`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 排行榜管理-查询高倍返奖/高返奖额删除      
      req =>>
        ISettingsReturnGameRecordReq {
          bizNo: string //编码(新增的时候不传，修改时必传)
          factoryCode: string //厂商编码
          gameName: string //游戏名称
          proxyGameId: number //代理游戏编号
          recordType: number //记录类型  1:高倍返奖 2:高返奖额
          result: number //返奖金额
          userName: string //用户名
          validBet: number //投注金额
        }
      */
    LeaderboardReturnGameRecordDeletePOST: (data: ISettingsReturnGameRecordReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/leaderboard/returnGameRecord/delete`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 排行榜管理-查询高倍返奖/高返奖额列表      
      res =>>
        IPageResultSettingsReturnGameRecordResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: ISettingsReturnGameRecordResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQuerySettingsReturnGameRecordReqReq {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          recordType: number //记录类型  1:高倍返奖 2:高返奖额
        }
      */
    LeaderboardReturnGameRecordQueryListPOST: (
      data: IQuerySettingsReturnGameRecordReqReq = {},
      config = {}
    ): Promise<IPageResultSettingsReturnGameRecordResp> => {
      return request({
        url: `/leaderboard/returnGameRecord/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 排行榜管理-保存高倍返奖/高返奖额数据      
      req =>>
        ISettingsReturnGameRecordReq {
          bizNo: string //编码(新增的时候不传，修改时必传)
          factoryCode: string //厂商编码
          gameName: string //游戏名称
          proxyGameId: number //代理游戏编号
          recordType: number //记录类型  1:高倍返奖 2:高返奖额
          result: number //返奖金额
          userName: string //用户名
          validBet: number //投注金额
        }
      */
    LeaderboardReturnGameRecordSavePOST: (data: ISettingsReturnGameRecordReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/leaderboard/returnGameRecord/save`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
