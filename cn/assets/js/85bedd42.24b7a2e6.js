"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1006],{3905:function(n,e,o){o.d(e,{Zo:function(){return s},kt:function(){return m}});var t=o(7294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function c(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},c=Object.keys(n);for(t=0;t<c.length;t++)o=c[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(t=0;t<c.length;t++)o=c[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var l=t.createContext({}),u=function(n){var e=t.useContext(l),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},s=function(n){var e=u(n.components);return t.createElement(l.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,c=n.originalType,l=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),p=u(o),m=r,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||c;return o?t.createElement(f,a(a({ref:e},s),{},{components:o})):t.createElement(f,a({ref:e},s))}));function m(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=o.length,a=new Array(c);a[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:r,a[1]=i;for(var u=2;u<c;u++)a[u]=o[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5480:function(n,e,o){o.r(e),o.d(e,{default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var t=o(7462),r=o(3366),c=(o(7294),o(3905)),a=["components"],i={title:"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",authors:"kevwan"},l={unversionedId:"blog/showcase/go-queue",id:"blog/showcase/go-queue",isDocsHomePage:!1,title:"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",description:"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/showcase/go-queue.md",sourceDirName:"blog/showcase",slug:"/blog/showcase/go-queue",permalink:"/cn/docs/blog/showcase/go-queue",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/showcase/go-queue.md",version:"current",lastUpdatedAt:1684493178,formattedLastUpdatedAt:"5/19/2023",frontMatter:{title:"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",authors:"kevwan"},sidebar:"blog",previous:{title:"\u6211\u662f\u5982\u4f55\u7528 go-zero \u5b9e\u73b0\u4e00\u4e2a\u4e2d\u53f0\u7cfb\u7edf",permalink:"/cn/docs/blog/showcase/datacenter"},next:{title:"\u4f7f\u7528go-zero\u5f00\u53d1\u4e00\u4e2a\u65c5\u6e38\u7cfb\u7edfgo-zero-looklook",permalink:"/cn/docs/blog/showcase/go-zero-looklook"}},u=[{value:"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",id:"go-zero-\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",children:[]}],s={toc:u};function g(n){var e=n.components,o=(0,r.Z)(n,a);return(0,c.kt)("wrapper",(0,t.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"go-zero-\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1"},"go-zero \u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1"),(0,c.kt)("p",null,"  \u65e5\u5e38\u4efb\u52a1\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4f1a\u6709\u5f88\u591a\u5f02\u6b65\u3001\u6279\u91cf\u3001\u5b9a\u65f6\u3001\u5ef6\u8fdf\u4efb\u52a1\u8981\u5904\u7406\uff0cgo-zero\u4e2d\u6709go-queue\uff0c\u63a8\u8350\u4f7f\u7528go-queue\u53bb\u5904\u7406\uff0cgo-queue\u672c\u8eab\u4e5f\u662f\u57fa\u4e8ego-zero\u5f00\u53d1\u7684\uff0c\u5176\u672c\u8eab\u662f\u6709\u4e24\u79cd\u6a21\u5f0f"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"dq : \u4f9d\u8d56\u4e8ebeanstalkd\uff0c\u5206\u5e03\u5f0f\uff0c\u53ef\u5b58\u50a8\uff0c\u5ef6\u8fdf\u3001\u5b9a\u65f6\u8bbe\u7f6e\uff0c\u5173\u673a\u91cd\u542f\u53ef\u4ee5\u91cd\u65b0\u6267\u884c\uff0c\u6d88\u606f\u4e0d\u4f1a\u4e22\u5931\uff0c\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0cgo-queue\u4e2d\u4f7f\u7528\u4e86redis setnx\u4fdd\u8bc1\u4e86\u6bcf\u6761\u6d88\u606f\u53ea\u88ab\u6d88\u8d39\u4e00\u6b21\uff0c\u4f7f\u7528\u573a\u666f\u4e3b\u8981\u662f\u7528\u6765\u505a\u65e5\u5e38\u4efb\u52a1\u4f7f\u7528")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"kq\uff1a\u4f9d\u8d56\u4e8ekafka\uff0c\u8fd9\u4e2a\u5c31\u4e0d\u591a\u4ecb\u7ecd\u5566\uff0c\u5927\u540d\u9f0e\u9f0e\u7684kafka\uff0c\u4f7f\u7528\u573a\u666f\u4e3b\u8981\u662f\u505a\u6d88\u606f\u961f\u5217"),(0,c.kt)("p",{parentName:"li"},"\u6211\u4eec\u4e3b\u8981\u8bf4\u4e00\u4e0bdq\uff0ckq\u4f7f\u7528\u4e5f\u4e00\u6837\u7684\uff0c\u53ea\u662f\u4f9d\u8d56\u5e95\u5c42\u4e0d\u540c\uff0c\u5982\u679c\u6ca1\u4f7f\u7528\u8fc7beanstalkd\uff0c\u6ca1\u63a5\u89e6\u8fc7beanstalkd\u7684\u53ef\u4ee5\u5148google\u4e00\u4e0b\uff0c\u4f7f\u7528\u8d77\u6765\u8fd8\u662f\u633a\u5bb9\u6613\u7684\u3002"))),(0,c.kt)("p",null,"  etc/job.yaml : \u914d\u7f6e\u6587\u4ef6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: job\n\nLog:\n  ServiceName: job\n  Level: info\n\n#dq\u4f9d\u8d56Beanstalks\u3001redis \uff0cBeanstalks\u914d\u7f6e\u3001redis\u914d\u7f6e\nDqConf:\n  Beanstalks:\n    - Endpoint: 127.0.0.1:7771\n      Tube: tube1\n    - Endpoint: 127.0.0.1:7772\n      Tube: tube2\n  Redis:\n    Host: 127.0.0.1:6379\n    Type: node\n")),(0,c.kt)("p",null,"  Internal/config/config.go \uff1a\u89e3\u6790dq\u5bf9\u5e94etc/*.yaml\u914d\u7f6e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u914d\u7f6e\u6587\u4ef6\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\n\npackage config\n\nimport (\n    "github.com/zeromicro/go-queue/dq"\n    "github.com/zeromicro/go-zero/core/service"\n\n)\n\ntype Config struct {\n    service.ServiceConf\n    DqConf dq.DqConf\n}\n\n')),(0,c.kt)("p",null,"  Handler/router.go : \u8d1f\u8d23\u6ce8\u518c\u591a\u4efb\u52a1"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u6ce8\u518cjob\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\npackage handler\n\nimport (\n    "context"\n    "github.com/zeromicro/go-zero/core/service"\n    "job/internal/logic"\n    "job/internal/svc"\n)\n\nfunc RegisterJob(serverCtx *svc.ServiceContext,group *service.ServiceGroup)  {\n\n    group.Add(logic.NewProducerLogic(context.Background(),serverCtx))\n    group.Add(logic.NewConsumerLogic(context.Background(),serverCtx))\n\n}\n')),(0,c.kt)("p",null,"  ProducerLogic: \u5176\u4e2d\u4e00\u4e2ajob\u4e1a\u52a1\u903b\u8f91"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u751f\u4ea7\u8005\u4efb\u52a1\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\npackage logic\n\nimport (\n    "context"\n    "github.com/zeromicro/go-queue/dq"\n    "github.com/zeromicro/go-zero/core/logx"\n    "github.com/zeromicro/go-zero/core/threading"\n    "job/internal/svc"\n    "strconv"\n    "time"\n)\n\n\n\ntype Producer struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewProducerLogic(ctx context.Context, svcCtx *svc.ServiceContext) *Producer {\n    return &Producer{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *Producer)Start()  {\n\n    logx.Infof("start  Producer \\n")\n    threading.GoSafe(func() {\n        producer := dq.NewProducer([]dq.Beanstalk{\n            {\n                Endpoint: "localhost:7771",\n                Tube:     "tube1",\n            },\n            {\n                Endpoint: "localhost:7772",\n                Tube:     "tube2",\n            },\n        })\n        for i := 1000; i < 1005; i++ {\n            _, err := producer.Delay([]byte(strconv.Itoa(i)), time.Second * 1)\n            if err != nil {\n                logx.Error(err)\n            }\n        }\n    })\n}\n\nfunc (l *Producer)Stop()  {\n    logx.Infof("stop Producer \\n")\n}\n\n\n')),(0,c.kt)("p",null,"  \u53e6\u5916\u4e00\u4e2aJob\u4e1a\u52a1\u903b\u8f91"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u6d88\u8d39\u8005\u4efb\u52a1\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\npackage logic\n\nimport (\n    "context"\n    "github.com/zeromicro/go-zero/core/logx"\n    "github.com/zeromicro/go-zero/core/threading"\n    "job/internal/svc"\n)\n\ntype Consumer struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewConsumerLogic(ctx context.Context, svcCtx *svc.ServiceContext) *Consumer {\n    return &Consumer{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *Consumer)Start()  {\n    logx.Infof("start consumer \\n")\n\n    threading.GoSafe(func() {\n        l.svcCtx.Consumer.Consume(func(body []byte) {\n            logx.Infof("consumer job  %s \\n" ,string(body))\n        })\n    })\n}\n\nfunc (l *Consumer)Stop()  {\n    logx.Infof("stop consumer \\n")\n}\n')),(0,c.kt)("p",null,"  svc/servicecontext.go"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u914d\u7f6e\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\npackage svc\n\nimport (\n    "job/internal/config"\n    "github.com/zeromicro/go-queue/dq"\n)\n\ntype ServiceContext struct {\n    Config config.Config\n    Consumer      dq.Consumer\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config: c,\n        Consumer: dq.NewConsumer(c.DqConf),\n    }\n}\n\n')),(0,c.kt)("p",null,"  main.go\u542f\u52a8\u6587\u4ef6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'/**\n* @Description \u542f\u52a8\u6587\u4ef6\n* @Author Mikael\n* @Email 13247629622@163.com\n* @Date 2021/1/18 12:05\n* @Version 1.0\n**/\npackage main\n\nimport (\n    "flag"\n    "fmt"\n    "github.com/zeromicro/go-zero/core/conf"\n    "github.com/zeromicro/go-zero/core/logx"\n    "github.com/zeromicro/go-zero/core/service"\n    "job/internal/config"\n    "job/internal/handler"\n    "job/internal/svc"\n    "os"\n    "os/signal"\n    "syscall"\n    "time"\n)\n\n\nvar configFile = flag.String("f", "etc/job.yaml", "the config file")\n\nfunc main() {\n    flag.Parse()\n\n    //\u914d\u7f6e\n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n    ctx := svc.NewServiceContext(c)\n\n    //\u6ce8\u518cjob\n    group := service.NewServiceGroup()\n    handler.RegisterJob(ctx,group)\n\n    //\u6355\u6349\u4fe1\u53f7\n    ch := make(chan os.Signal)\n    signal.Notify(ch, syscall.SIGHUP, syscall.SIGQUIT, syscall.SIGTERM, syscall.SIGINT)\n    go func() {\n        for {\n            s := <-ch\n            logx.Infof("get a signal %s", s.String())\n            switch s {\n            case syscall.SIGQUIT, syscall.SIGTERM, syscall.SIGINT:\n                fmt.Printf("stop group")\n                group.Stop()\n                logx.Info("job exit")\n                time.Sleep(time.Second)\n                return\n            case syscall.SIGHUP:\n            default:\n                return\n            }\n        }\n    }\n    \n    group.Start()\n}\n')),(0,c.kt)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898\uff1a"),(0,c.kt)("p",null,"  \u4e3a\u4ec0\u4e48\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"dq"),"\uff0c\u9700\u8981\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"redis"),"\uff1f"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u56e0\u4e3a",(0,c.kt)("inlineCode",{parentName:"li"},"beanstalk"),"\u662f\u5355\u70b9\u670d\u52a1\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u9ad8\u53ef\u7528\u3002",(0,c.kt)("inlineCode",{parentName:"li"},"dq"),"\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u5355\u70b9",(0,c.kt)("inlineCode",{parentName:"li"},"beanstalk"),"\u670d\u52a1\uff0c\u4e92\u76f8\u5907\u4efd & \u4fdd\u8bc1\u9ad8\u53ef\u7528\u3002\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"li"},"redis"),"\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898\u3002")))}g.isMDXComponent=!0}}]);