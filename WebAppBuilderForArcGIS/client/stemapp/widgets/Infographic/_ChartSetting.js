///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/html',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./_ChartSetting.html'
], function(declare, html, _WidgetBase, _TemplatedMixin, template){
  var clazz = declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'ig-chart-setting-dlg',

    postCreate: function(){
      var chartType = this.chartJson.config.type;
      if(chartType === 'pie'){
        html.setStyle(this.verticalAxisSection, 'display', 'none');
        html.setStyle(this.horizontalAxisSection, 'display', 'none');
      }else{
        html.setStyle(this.dataLabelsSection, 'display', 'none');
      }

      if(this.chartJson.config.showLegend){
        this._toggle(this.legendToggle);
      }

      if(this.chartJson.config.showDataLabel){
        this._toggle(this.dataLabelsToggle);
      }

      if(this.chartJson.config.showHorizontalAxis){
        this._toggle(this.horizontalAxisToggle);
      }

      if(this.chartJson.config.showVerticalAxis){
        this._toggle(this.verticalAxisToggle);
      }
    },

    _toggle: function(target){
      if(html.hasClass(target, 'toggle-on')){
        html.removeClass(target, 'toggle-on');
        html.addClass(target, 'toggle-off');
      }else{
        html.removeClass(target, 'toggle-off');
        html.addClass(target, 'toggle-on');
      }
    },

    _onToggleClick: function(evt){
      var target = evt.target, isShow;

      this._toggle(target);
      if(html.hasClass(target, 'toggle-on')){
        isShow = true;
      }else{
        isShow = false;
      }

      var dataId = html.attr(target, 'data-id');
      if(dataId === 'legend'){
        this.chartJson.config.showLegend = isShow;
      }else if(dataId === 'dataLabels'){
        this.chartJson.config.showDataLabel = isShow;
      }else if(dataId === 'horizontalAxis'){
        this.chartJson.config.showHorizontalAxis = isShow;
      }else if(dataId === 'verticalAxis'){
        this.chartJson.config.showVerticalAxis = isShow;
      }

      this.chartDijit.setConfig(this.chartJson.config);
    }

  });
  return clazz;
});