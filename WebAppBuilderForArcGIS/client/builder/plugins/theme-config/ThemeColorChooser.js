// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/sniff dojo/_base/Color builder/dijit/SharedThemeChooserPopup jimu/dijit/ColorPickerPopup jimu/utils".split(" "),function(f,g,h,k,b,d,c,l,m,n,p,q){return g([h,k,f],{baseClass:"jimu-theme-color-chooser",declaredClass:"jimu.dijit.ThemeColorChooser",templateString:'\x3cdiv class\x3d"jimu-color-picker"\x3e\x3c/div\x3e',color:null,showLabel:!1,recordUID:"",isPortalSupport:!1,postCreate:function(){this.inherited(arguments)},
startup:function(){this._createTooltipDialog();this.own(c(this.domNode,"click",b.hitch(this,function(a){a.stopPropagation();a.preventDefault();this.emit("clickContainer",this.getColor())})));this.own(c(this.domNode,"mouseenter",b.hitch(this,function(){this.popup.showPopup()})));this.own(c(this.domNode,"mouseleave",b.hitch(this,function(){this.popup.hidePopup()})))},destroy:function(){this.customColorPicker.picker.destroy();this.popup.destroy();this.inherited(arguments)},showSharedThemeColor:function(a){this.popup.setChecked(this.popup.ACTION.SHARED);
this.emitSharedThemeChangedEvent(!0,a)},showCustomColor:function(a){a&&(a.stopPropagation(),a.preventDefault());a=this.customColorPicker.domNode;if(l("safari")){var e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0);a.dispatchEvent(e)}else a.click()},emitSharedThemeChangedEvent:function(a,e){!1!==e&&(this._useHeader=a,this.emit("sharedThemeChanged",this.getColor(),{useHeader:this._useHeader}));this.popup.hideTooltipDialog()},_createTooltipDialog:function(){this.popup=new n({isPortalSupport:this.isPortalSupport,
placeAt:this.getParent(),around:this.domNode});this.own(c(this.popup,"btnClick",b.hitch(this,function(a,b){a===this.popup.ACTION.SHARED?this.showSharedThemeColor():a===this.popup.ACTION.CUSTOM&&this.showCustomColor(b)})));this.own(c(this.popup,"showPopup",b.hitch(this,function(){this._isNoChooseState()?this.popup.setChecked("clean"):this.popup.setChecked(this._useHeader?this.popup.ACTION.SHARED:this.popup.ACTION.CUSTOM)})));var a=new p({showColorPickerOK:!0,showLabel:!1,recordUID:this.recordUID});
a.placeAt(this.popup.domNode);a.startup();this.own(c(a,"change",b.hitch(this,function(a){this.setColor(a);this.emitSharedThemeChangedEvent(!1);this.popup.setChecked(this.popup.ACTION.CUSTOM);this.customColorPicker.hideTooltipDialog()})));this.customColorPicker=a;a=this.customColorPicker.getTooltipDialog();this.own(c(a.domNode,"mouseover",b.hitch(this,function(){this.popup.showPopup()})));this.own(c(a.domNode,"mouseleave",b.hitch(this,function(){!1===this.customColorPicker.isJimuColorPickerTooltipDialogOpened()&&
(this.popup.hidePopup(),this.customColorPicker.hideTooltipDialog())})))},setSharedThemeConfig:function(a){a&&"undefined"!==typeof a.useHeader&&(this._useHeader=a.useHeader,this.popup.setIsPortalSupport(a.isPortalSupport),this._isNoChooseState()||!0===a.useHeader&&this.showSharedThemeColor(!1))},_isNoChooseState:function(){return!1===this._useHeader&&!0===this._isNoChecked?!0:!1},setNoChecked:function(a){this._isNoChecked=!0===a?!0:!1},setColor:function(a){if(a instanceof m){null===this.color&&!0===
this.showLabel&&this._changeLabel(a);var b=a.toHex();this.color=a;this.customColorPicker&&(d.setStyle(this.customColorPicker.domNode,"backgroundColor",b),this.customColorPicker.picker.refreshRecords(),this.customColorPicker.picker.setColor(b,!1,!0));this.showLabel&&this._changeLabel(this.color);d.setStyle(this.domNode,"backgroundColor",b)}},getColor:function(){return this.color},_changeLabel:function(a){d.empty(this.domNode);d.create("span",{innerHTML:a.toHex(),className:"color-label",style:{color:q.invertColor(a.toHex())}},
this.domNode)},onChange:function(a){a&&this.showLabel&&this._changeLabel(a)},changeColor:function(){this.customColorPicker&&this.customColorPicker.picker.changeColor();this.showLabel&&this._changeLabel(this.color)},setTitle:function(a){this.domNode.title=a}})});