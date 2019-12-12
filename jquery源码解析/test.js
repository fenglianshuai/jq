(function(window, undefined) {
    // 传undefined 是为了内部使用防止被外部修改
    /**
     * 21 - 94 定义了变量与函数 jQuery=function(){};
     * 96 - 283 给jq对象添加方法与属性
     * 285 - 347 extend jq的继承方法 更容易进行扩展
     * 349 - 817 扩展工具方法(扩展静态属性/方法) eg：$.trim() $.proxy() 既可以个jq对象使用也可以给原生使用
     * 877 - 2856 Sizzle :复杂选择器的实现
     * 2880 - 3042 Callbacks 回调对象 函数的统一管理方法
     * 3043 - 3183 Deferred 延迟对象 对异步的统一管理
     * 3184 - 3295 support 功能检测
     * 3308 - 3652 data() 数据缓存
     * 3653 - 3797 queue 队列管理 queue入队 dequeue 出队
     * 3803 - 4299 attr prop val addClass等 对元素属性的操作
     * 4300 - 5128 on trigger 事件操作的相关方法
     * 5140 - 6057 DOM操作 添加 删除 获取 包装 DOM的筛选
     * 6058 - 6620 css() 样式的操作
     * 6621 - 7854 提交的数据和ajax()的操作 ajax load getJson
     * 7855 - 8584 animate() 运动的方法
     * 8585 - 8792 offset scrolltop 位置和尺寸的方法
     * 8804 - 8821 JQ支持模块化的模式
     * 8826 window.jQuery = window.$ = jQuery;
     */
})(window);
/**
 * 传window的原因是为了提高查找速度 与 压缩
 */