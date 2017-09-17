// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/app-list/CardPageWithSmallThumbnail.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"app-card-page-content" id\x3d"app-card-page-content" data-dojo-attach-point\x3d"appCardPageContent"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/array dojo/_base/lang dojo/on dojo/dom ./AppOperMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./CardPageWithSmallThumbnail.html dojox/form/Uploader dojo/NodeList-dom".split(" "),function(m,b,h,k,l,n,p,q,r,t,u){return m([q,r,t],{baseClass:"card-page-with-small-thumbnail",templateString:u,loading:null,folderUrl:null,appListWidget:null,_eventHandles:null,_appOperMenus:null,postMixInProperties:function(){this.inherited(arguments);
this.nls=this.appListWidget.nls;this.loading=this.appListWidget.loading;this.folderUrl=this.appListWidget.folderUrl},constructor:function(){this._eventHandles=[];this._appOperMenus=[]},startup:function(){this.inherited(arguments);b.setSelectable(this.domNode,!1)},refresh:function(a){this.createAppList(a)},cleanAppList:function(){b.empty(this.appCardPageContent);h.forEach(this._appOperMenus,function(a){a.destroy()});this._appOperMenus=[];h.forEach(this._eventHandles,function(a){a.remove()});this._eventHandles=
[]},createAppList:function(a){this.cleanAppList();h.forEach(a,function(a){this.createAppCard(a)},this)},createAppCard:function(a){var f=a.isTemplate?this.nls.preview:this.nls.launch,d=b.create("div",{"class":"app-card-box jimu-float-leading"},this.appCardPageContent),d=b.create("div",{"class":"card app-info-card"},d),c=b.create("div",{"class":"app-title-part"},d);b.create("div",{"class":"app-type-div "+("HTML"===a.appType?"app-type-2d":"app-type-3d")},c);var c=b.create("table",{"class":"app-title-table"},
c),c=b.create("tbody",{"class":"app-title-table-body"},c),c=b.create("tr",{"class":"app-title-table-tr"},c),m=b.create("td",{"class":"app-thumbnail-td"},c);b.create("a",{"class":"app-thumbnail",style:"background-image: url("+a.thumbnail+"?date\x3d"+this.appListWidget.getRefreshImageFlag()+")",href:a.appUrl,target:"_blank",title:f},m);c=b.create("td",{"class":"app-title-td"},c);b.create("div",{"class":"app-title-div",innerHTML:a.name},c);b.create("div",{"class":"app-time-div",innerHTML:this.appListWidget._getLocaleDateTime(a.lastUpdated)},
c);b.create("div",{"class":"app-creator-div",innerHTML:a.creator},c);c=b.create("div",{"class":"app-desc-box"},d);b.create("div",{"class":"app-desc-part "+(a.description?"":"place-holder-class"),innerHTML:a.description?a.description:this.nls.defaultDesc,title:a.description},c);d=b.create("div",{"class":"app-operation-part"},d);b.create("div",{innerHTML:'\x3ca href\x3d"'+a.appUrl+'" target\x3d"_blank"\x3e\x3c/a\x3e',"class":"app-operation launch-operation jimu-float-leading",title:f},d);a.isTemplate||
b.create("div",{innerHTML:'\x3ca href\x3d"'+a.downloadUrl+'" target\x3d"downloadTargetFrame"\x3e\x3c/a\x3e',"class":"app-operation download-operation jimu-float-leading",title:this.nls.download},d);var f=b.create("div",{"class":"app-operation edit-operation jimu-float-leading "+(a.isPredefined?"disable":""),title:a.isTemplate?this.nls.configTemplate:this.nls.configApp},d),g=b.create("div",{"class":"app-operation more-operation jimu-float-trailing "+(a.isPredefined?"disable":"")},d),e=(new p({app:a,
posNode:g,appListWidget:this.appListWidget,nls:this.nls,isTemplate:a.isTemplate,appContentNode:this.appCardPageContent,height:a.isTemplate?a.isPredefined?45:162:122,offset:{top:44,left:-10,right:-10}})).placeAt(g);this._appOperMenus.push(e);c=l(g,"click",k.hitch(this,function(c){e.isShow?(e.hide(),b.removeClass(g,"item-more-selected")):(h.forEach(this._appOperMenus,function(a){a.isShow&&(a.hide(),b.removeClass(a.posNode,"item-more-selected"))}),e.show(),b.addClass(g,"item-more-selected"));c.itemId=
a.id}));this._eventHandles.push(c);c=l(f,"click",k.hitch(this,function(){this.appListWidget.pluginManager.getPluginByName("startup").switchToAppConfig(a)}));this._eventHandles.push(c);a.isTemplate&&(f=b.create("div",{"class":"app-operation create-app-from-item-operation jimu-float-leading",title:this.nls.createApp},d),c=l(f,"click",k.hitch(this,function(){e._onCreateAppFromTempalteClick()})),this._eventHandles.push(c));c=l(n.byId("content-box"),"click",k.hitch(this,function(c){c.itemId!==a.id&&(b.removeClass(e.posNode,
"item-more-selected"),e.hide())}));this._eventHandles.push(c)}})});