"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6571],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,s=new Array(c);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6775:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),s=["components"],i={},o={unversionedId:"advance/rpc-call",id:"advance/rpc-call",isDocsHomePage:!1,title:"RPC Implement & Call",description:"In a large system, there must be data transfer between multiple subsystems (services). If there is data transfer, you need a communication method. You can choose the simplest http for communication or rpc service for communication.",source:"@site/docs/advance/rpc-call.md",sourceDirName:"advance",slug:"/advance/rpc-call",permalink:"/docs/advance/rpc-call",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/rpc-call.md",version:"current",lastUpdatedAt:1664532344,formattedLastUpdatedAt:"9/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Middleware",permalink:"/docs/advance/middleware"},next:{title:"Error Handling",permalink:"/docs/advance/error-handle"}},l=[{value:"Scenes",id:"scenes",children:[]},{value:"rpc service writing",id:"rpc-service-writing",children:[]},{value:"Use rpc",id:"use-rpc",children:[]},{value:"Start and verify the service",id:"start-and-verify-the-service",children:[]}],p={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"In a large system, there must be data transfer between multiple subsystems (services). If there is data transfer, you need a communication method. You can choose the simplest http for communication or rpc service for communication.\nIn go-zero, we use zrpc to communicate between services, which is based on grpc."),(0,c.kt)("h2",{id:"scenes"},"Scenes"),(0,c.kt)("p",null,"In the front, we have improved the interface protocol for user login, user query of books, etc., but the user did not do any user verification when querying the book. If the current user is a non-existent user, we do not allow him to view book information.\nFrom the above information, we can know that the user service needs to provide a method to obtain user information for use by the search service, so we need to create a user rpc service and provide a getUser method."),(0,c.kt)("h2",{id:"rpc-service-writing"},"rpc service writing"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Compile the proto file")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"  $ vim service/user/rpc/user.proto\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\n\noption go_package = "./user";\n\nmessage IdReq{\n  int64 id = 1;\n}\n\nmessage UserInfoReply{\n  int64 id = 1;\n  string name = 2;\n  string number = 3;\n  string gender = 4;\n}\n\nservice user {\n  rpc getUser(IdReq) returns(UserInfoReply);\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Generate rpc service code")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/rpc\n$ goctl rpc protoc user.proto --go_out=./types --go-grpc_out=./types --zrpc_out=.\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"If the installed version of ",(0,c.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")," is larger than 1.4.0, it is recommended to add ",(0,c.kt)("inlineCode",{parentName:"p"},"go_package")," to the proto file"))),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Add configuration and improve yaml configuration items")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/rpc/internal/config/config.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    zrpc.RpcServerConf\n    Mysql struct {\n        DataSource string\n    }\n    CacheRedis cache.CacheConf\n}\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/user/rpc/etc/user.yaml\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user.rpc\nListenOn: 127.0.0.1:8080\nEtcd:\n  Hosts:\n    - $etcdHost\n  Key: user.rpc\nMysql:\n  DataSource: $user:$password@tcp($url)/$db?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai\nCacheRedis:\n  - Host: $host\n    Pass: $pass\n    Type: node  \n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"$user: mysql database user"),(0,c.kt)("p",{parentName:"div"},"$password: mysql database password"),(0,c.kt)("p",{parentName:"div"},"$url: mysql database connection address"),(0,c.kt)("p",{parentName:"div"},"$db: mysql database db name, that is, the database where the user table is located"),(0,c.kt)("p",{parentName:"div"},"$host: Redis connection address Format: ip:port, such as: 127.0.0.1:6379"),(0,c.kt)("p",{parentName:"div"},"$pass: redis password"),(0,c.kt)("p",{parentName:"div"},"$etcdHost: etcd connection address, format: ip:port, such as: 127.0.0.1:2379"))),(0,c.kt)("p",null,"For more configuration information, please refer to ",(0,c.kt)("a",{parentName:"p",href:"../configuration/rpc"},"rpc configuration introduction")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Add resource dependency")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/rpc/internal/svc/servicecontext.go  \n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config    config.Config\n    UserModel model.UserModel\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    conn := sqlx.NewMysql(c.Mysql.DataSource)\n    return &ServiceContext{\n        Config: c,\n        UserModel: model.NewUserModel(conn, c.CacheRedis),\n    }\n}\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Add rpc logic")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ service/user/rpc/internal/logic/getuserlogic.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"func (l *GetUserLogic) GetUser(in *user.IdReq) (*user.UserInfoReply, error) {\n    one, err := l.svcCtx.UserModel.FindOne(in.Id)\n    if err != nil {\n        return nil, err\n    }\n    \n    return &user.UserInfoReply{\n        Id:     one.Id,\n        Name:   one.Name,\n        Number: one.Number,\n        Gender: one.Gender,\n    }, nil\n}\n")),(0,c.kt)("h2",{id:"use-rpc"},"Use rpc"),(0,c.kt)("p",null,"Next we call user rpc in the search service"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Add UserRpc configuration and yaml configuration items")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/config/config.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    rest.RestConf\n    Auth struct {\n        AccessSecret string\n        AccessExpire int64\n    }\n    UserRpc zrpc.RpcClientConf\n}\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/etc/search-api.yaml\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: search-api\nHost: 0.0.0.0\nPort: 8889\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\nUserRpc:\n  Etcd:\n    Hosts:\n      - $etcdHost\n    Key: user.rpc\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"$AccessSecret: This value must be consistent with the one declared in the user api."),(0,c.kt)("p",{parentName:"div"},"$AccessExpire: Valid period"),(0,c.kt)("p",{parentName:"div"},"$etcdHost\uff1a etcd connection address"))),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"Key")," in etcd must be consistent with the Key in the user rpc service configuration"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Add dependency")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/svc/servicecontext.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config  config.Config\n    Example rest.Middleware\n    UserRpc user.User\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config:  c,\n        Example: middleware.NewExampleMiddleware().Handle,\n        UserRpc: user.NewUser(zrpc.MustNewClient(c.UserRpc)),\n    }\n}\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Supplementary logic")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/search/api/internal/logic/searchlogic.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'func (l *SearchLogic) Search(req types.SearchReq) (*types.SearchReply, error) {\n    userIdNumber := json.Number(fmt.Sprintf("%v", l.ctx.Value("userId")))\n    logx.Infof("userId: %s", userIdNumber)\n    userId, err := userIdNumber.Int64()\n    if err != nil {\n        return nil, err\n    }\n    \n    // use user rpc\n    _, err = l.svcCtx.UserRpc.GetUser(l.ctx, &user.IdReq{\n        Id: userId,\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.SearchReply{\n        Name:  req.Name,\n        Count: 100,\n    }, nil\n}\n')),(0,c.kt)("h2",{id:"start-and-verify-the-service"},"Start and verify the service"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Start etcd, redis, mysql"),(0,c.kt)("li",{parentName:"ul"},"Start user rpc")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/rpc\n$ go run user.go -f etc/user.yaml\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"Starting rpc server at 127.0.0.1:8080...\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Start search api")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/search/api\n$ go run search.go -f etc/search-api.yaml\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Verification Service",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0' \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80'\n")),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent\n-Type: application/json\nDate: Tue, 09 Feb 2021 06:05:52 GMT\nContent-Length: 32\n\n{"name":"xiyouji","count":100}\n')))))}u.isMDXComponent=!0}}]);