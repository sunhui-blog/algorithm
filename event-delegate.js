    /**
     * @method hui.delegate
     * @description 事件代理
     * @public
     * @param {String} parentSelector 外层容器
     * @param {String} eventType 事件类型
     * @param {String} selector 目标元素
     * @param {Function} fn 事件处理函数
     * @example 
     * var index = hui.delegate('body', 'click', 'button', function(){alert('click');});
     * hui.undelegate('body', 'click', index);
     */
    hui.delegate = function(parentSelector, eventType, selector, fn) {
    }