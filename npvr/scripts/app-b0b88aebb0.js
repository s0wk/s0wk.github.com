/******/!function(e){function n(i){if(t[i])return t[i].exports;var a=t[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";var i=t(1),a=t(2),o=t(3),r=t(4),s=t(5),c=t(6),u=t(7),l=t(8),d=t(9),h=t(10),g=t(11);angular.module("npvr",["ngAnimate","ngSanitize","ngMessages","ui.router","toastr"]).constant("appConfig",c.appConfig).config(i.config).config(a.routerConfig).run(o.runBlock).factory("theMovieDB",u.theMovieDB).factory("channelService",l.channelService).directive("windowHeight",d.windowHeight).directive("bodyBackground",h.bodyBackground).directive("daysWeek",g.daysWeek).controller("MainController",r.MainController).controller("ChannelController",s.ChannelController)},function(e,n){"use strict";function t(e,n){"ngInject";e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=t},function(e,n){"use strict";function t(e,n){"ngInject";e.state("home",{url:"","abstract":!0,templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("home.channel",{url:"/channel/:id",views:{contentView:{templateUrl:"app/channel/channel.html",controller:"ChannelController",controllerAs:"channel"}}}).state("home.record",{url:"/record",views:{contentView:{template:"<h1>RECORD<h1>"}}}).state("home.vod",{url:"/vod",views:{contentView:{template:"<h1>VOD<h1>"}}}).state("home.custom",{url:"/custom",views:{contentView:{template:"<h1>PARA TI<h1>"}}}).state("home.search",{url:"/search",views:{contentView:{template:"<h1>Buscar<h1>"}}}),n.otherwise("/channel/64")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e,n,t){"ngInject";n._=t._,e.debug("runBlock end",n._)}t.$inject=["$log","$rootScope","$window"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function a(e,n,i,o,r,s){"ngInject";function c(){return l().then(function(){e.debug("LOAD => list of shows in base channel:id")}).then(function(){return u().then(function(){e.debug("LOAD => the movie DB init config"),e.debug(v.apiParams)})}).then(function(){return d().then(function(){e.debug("LOAD => get the active live program info")})})}function u(){return r.getConfig(0).then(function(e){v.apiParams=e})}function l(){return r.getSeries(0).then(function(e){for(var n=1,t=[],i=e.results.length,a={now:new Date,date_stamp:h(new Date),day:864e5,lapsus:[54e5,36e5,18e5]};a.day>0;){var o=_.random(0,i-1),r=_.random(0,2),c={id:n,imdb_id:e.results[o].id,catchup:r>0?!0:!1,time_line:g(a.now,a.date_stamp,a.lapsus[r]),name:e.results[o].name,path:e.results[o].poster_path,overview:e.results[o].overview};c.time_line.is_live===!0&&(p=c.imdb_id),t.push(c),n++,a.day-=a.lapsus[r],a.date_stamp+=a.lapsus[r]}s.setShows(t)},function(n){e.debug(n)})}function d(){return r.getShow(p,0).then(function(e){v.show=e})}function h(e){var n=new Date(e-432e5);return n.getMinutes()>0&&n.getMinutes()<16?n.setMinutes(0):n.getMinutes()>15&&n.getMinutes()<46?n.setMinutes(30):(n.setMinutes(0),n.setHours(n.getHours()+1)),Date.parse(n)}function g(e,n,t){var i=Date.parse(e),a={hour_start:n,hour_end:n+t};return a.is_live=a.hour_start<i&&a.hour_end>i?!0:!1,a}t(this,a);var p=void 0,v=this,m=o();v.show={},v.apiParams={},v.menus=m.menus,r.setParams({api_key:m.key,language:"es",with_networks:n.params.id}),c(),e.debug("Main Controller loadded")};i.$inject=["$log","$state","$scope","appConfig","theMovieDB","channelService"],n.MainController=i},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function a(e,n,i,o,r){"ngInject";function s(){return c().then(function(){e.debug("load shows")})}function c(){return o.getShows(_.random(1e4,2e4)).then(function(n){e.debug("shows from channelService get",n),u.shows=n})["finally"](function(){u.loading=!1})}t(this,a);var u=this;r();u.shows=[],u.loading=!0,u.currentDay=new Date,u.currentDay=u.currentDay.getUTCDate(),s(),e.debug("Channel Controller loadded")};i.$inject=["$log","$stateParams","theMovieDB","channelService","appConfig"],n.ChannelController=i},function(e,n){"use strict";function t(){"ngInject";var e={channel:"discovery",key:"25a2fd3a417ec4ca1d05c83fdb354704",menus:[{channel:"Discovery Channel",route:"channel"},{channel:"Mis grabaciones",route:"record"},{channel:"Vod",route:"vod"},{channel:"Para ti",route:"custom"}]};return e}Object.defineProperty(n,"__esModule",{value:!0}),n.appConfig=t},function(e,n){"use strict";function t(e,n,t,i){"ngInject";function a(e){return u(e,g.series)}function o(e,n){return u(n,g.show+e)}function r(e){return u(e,g.config)}function s(e){return d=e}function c(e){return l=h+e}function u(a,o){c(o);var r=n.defer();return e({url:l,method:"GET",params:d}).success(function(e){t.debug("Respond from service",e),i(function(){r.resolve(e)},a)}).error(function(){r.reject("fail")}),r.promise}var l=void 0,d=void 0,h="https://api.themoviedb.org/3",g={series:"/discover/tv",show:"/tv/",config:"/configuration"},p={setParams:s,getSeries:a,getShow:o,getConfig:r};return p}t.$inject=["$http","$q","$log","$timeout"],Object.defineProperty(n,"__esModule",{value:!0}),n.theMovieDB=t},function(e,n){"use strict";function t(e,n,t){"ngInject";function i(e){var i=n.defer();return t(function(){i.resolve(o)},e),i.promise}function a(e){return o=e}var o=[],r={setShows:a,getShows:i};return r}t.$inject=["$log","$q","$timeout"],Object.defineProperty(n,"__esModule",{value:!0}),n.channelService=t},function(e,n){"use strict";function t(e){"ngInject";return function(n,t){function i(){var n=e.innerHeight;t.css("height",n+"px")}var a=angular.element(e);i(),a.on("resize",_.debounce(i,250)),a.on("$destroy",i())}}t.$inject=["$window"],Object.defineProperty(n,"__esModule",{value:!0}),n.windowHeight=t},function(e,n){"use strict";function t(e,n){"ngInject";return function(e,n,t){e.$watch(t.path,function(e){n.addClass("animated fadeIn zoomIn"),n.css({"background-image":"url("+e+")"})})}}t.$inject=["$log","$timeout"],Object.defineProperty(n,"__esModule",{value:!0}),n.bodyBackground=t},function(e,n){"use strict";function t(e,n){"ngInject";return{restrict:"E",scope:{current:"=",date:"="},template:"{{ text | uppercase}}",link:function(e){var t=n("date")(e.date,"d");e.current>t?e.text="ayer":e.current==t?e.text="hoy":e.text="mañana"}}}t.$inject=["$log","$filter"],Object.defineProperty(n,"__esModule",{value:!0}),n.daysWeek=t}]),angular.module("npvr").run(["$templateCache",function(e){e.put("app/channel/channel.html",'<div ng-hide="!channel.loading" ng-class=""><span class="glyphicon glyphicon-repeat animated rotateIn infinite"></span><h1>Cargando</h1></div><div id="carrousel" class=""><div class="overflow-div"><div class="slider" ng-repeat="show in channel.shows track by show.id"><div class="detail" ng-if="show.time_line.is_live"><div class="tumb"><h3>AHORA</h3><h3>{{ show.time_line.hour_start | date : \'h:mm\'}} A {{ show.time_line.hour_end | date : \'h:mm\'}} hrs</h3><img class="poster" ng-src="{{ main.apiParams.images.base_url }}{{ main.apiParams.images.poster_sizes[3] }}{{show.path}}"></div><div class="content"><h2>{{ show.name }}</h2><h2>Temp 01 eps 02</h2></div></div><div class="poster" ng-if="!show.time_line.is_live"><days-week current="channel.currentDay" date="show.time_line.hour_start"></days-week><h3>{{ show.time_line.hour_start | date : \'h:mm\'}} A {{ show.time_line.hour_end | date : \'h:mm\'}} hrs</h3><img class="poster" ng-src="{{ main.apiParams.images.base_url }}{{ main.apiParams.images.poster_sizes[2] }}{{show.path}}"></div></div></div></div>'),e.put("app/main/main.html",'<div id="page-content" window-height=""><section class="header"><div class="container"><div class="row"><div class="col-lg-12"><h2>Ahora: {{ main.show.name }} <span class="glyphicon glyphicon-repeat"></span></h2><img class="logo pull-right" ng-src="assets/channels/{{ main.appConfig.channel }}.png"></div></div></div></section><section class="content-view"><div class="container"><div class="row"><div class="col-lg-12"><ul class="top-level-menu list-inline"><li ui-sref-active="active" class="search"><a ui-sref="home.search"><span class="glyphicon glyphicon-search"></span></a></li><li ng-repeat="menu in main.menus" ui-sref-active="active"><a ui-sref="home.{{ menu.route }}">{{ menu.channel | uppercase }}</a></li></ul><img class="tip navigation pull-right" src="../../assets/images/navigation.png"></div></div><div class="row"><div class="col-lg-12"><div ui-view="contentView"></div></div></div></div><div class="background-gradient"></div></section></div><div id="background-image" window-height="" body-background="" path="main.apiParams.images.base_url + main.apiParams.images.backdrop_sizes[2] + main.show.backdrop_path"></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b0b88aebb0.js.map