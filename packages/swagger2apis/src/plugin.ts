/**
 * 生命周期
 * created:流程执行前,主要可以对配置以及原始json数据进行一些修改
 * transformed:这个时候转换层数据已经处理完成,你可以对数据继续进行修改
 * befofeRender:对数据进行渲染前,你可以对渲染数据进行修改,如果更改了数据结构，那么你应该对模板也进行配套的修改
 * beforeWriteFile:文件写入前,此时你可以对输出的字符进行修改，比如格式化一些东西
 */

// 创建一个插件容器
export const createPlugins = (plugins: any = {}) => {
  // 应该使用数组,而不是set,因为可能会遇到需要执行两次相同逻辑的情况
  return {
    created: [...(plugins.created ? plugins.created : [])],
    transformed: [...(plugins.transformed ? plugins.transformed : [])],
    befofeRender: [...(plugins.befofeRender ? plugins.befofeRender : [])],
    beforeWriteFile: [...(plugins.beforeWriteFile ? plugins.beforeWriteFile : [])]
  };
};
