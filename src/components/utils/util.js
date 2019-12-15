const customElements = ['bpmn:Task', 'bpmn:StartEvent'] // 自定义元素的类型
const customConfig = { // 自定义元素的配置
    'bpmn:Task': {
        'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    },
    'bpmn:StartEvent': {
        'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/start.png',
        'attr': { x: 0, y: 0, width: 40, height: 40 }
    }
}

export { customElements, customConfig }