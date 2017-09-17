///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
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
  'dijit/_WidgetsInTemplateMixin',
  'jimu/dijit/TabContainer3',
  'jimu/BaseWidgetSetting',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/query',
  'dojo/_base/array',
  'jimu/utils',
  'esri/symbols/jsonUtils',
  'dojo/dom-construct',
  'jimu/symbolUtils',
  'jimu/utils',
  'jimu/dijit/LoadingIndicator',
  './SymbolChooserPopup',
  './DownloadSettings',
  'dojo/query',
  'dijit/registry',
  'jimu/dijit/Message',
  'jimu/dijit/Popup',
  'dijit/form/ValidationTextBox',
  'jimu/dijit/SimpleTable',
  'dojo/dom-class',
  'jimu/dijit/LayerChooserFromMap',
  'jimu/dijit/LayerChooserFromMapWithDropbox',
  './FieldPicker',
  './SearchSourceSettings',
  '../conversionUtils',
  'dojo/string',
  'dojo/Deferred',
  'dojo/promise/all',
  'dojo/dom-style',
  'dijit/form/Select'
], function (
  declare,
  _WidgetsInTemplateMixin,
  TabContainer3,
  BaseWidgetSetting,
  lang,
  on,
  query,
  array,
  utils,
  jsonUtils,
  domConstruct,
  symbolUtils,
  jimuUtils,
  LoadingIndicator,
  SymbolChooserPopup,
  Download,
  dojoQuery,
  registry,
  Message,
  Popup,
  ValidationTextBox,
  SimpleTable,
  domClass,
  LayerChooserFromMap,
  LayerChooserFromMapWithDropbox,
  FieldPicker,
  SearchSourceSettings,
  ConversionUtils,
  string,
  Deferred,
  all,
  domStyle
) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-widget-screening-setting',
    _configurationTabsContainer: null,  // to store tab object
    _symbolParams: {},//to store selected symbol
    _addLayerTable: null,//to store add layer grid object
    _curRow: null,//selected add layer grid row object

    _totalLayers: [], // Array to hold all valid filtered layers from map
    _idsOfSelectedLayers: [], // Array to hold ids of only selected layers out of all Layers

    postMixInProperties: function () {
      //mixin common nls with widget nls
      this.nls.common = {};
      lang.mixin(this.nls.common, window.jimuNls.common);
      //mixin the units form jimu nls
      lang.mixin(this.nls.units, window.jimuNls.units);
    },

    postCreate: function () {
      //initialize loading indicator
      this._initLoading();
      this._initConfiguration();
      this._initDownloadTab();
      this._initLayerSelector();
    },

    /**
     * Gets the config updates by user, validates and returns the config object
     * @memberOf Screening/setting/Setting
     */
    getConfig: function () {
      var searchSourceSettings, extractDataTaskUrl;
      extractDataTaskUrl = this._downloadTab.getExtractDataTaskURL();
      //If valid config then return the object else return false.
      if (this._validateConfigForCheckBoxes() &&
        this._validateConfigForInputFields(this.aoiToolsSection,
          this.nls.errorMsg.textboxFieldsEmptyErrorMsg, "analysis") &&
        this._validateConfigForInputFields(this.toleranceSection,
          this.nls.errorMsg.invalidSearchToleranceErrorMsg, "analysis") &&
        this._validateConfigForInputFields(this.tabLabelsSection,
          this.nls.errorMsg.textboxFieldsEmptyErrorMsg, "general") &&
        this._validateConfigForBufferDistanceFields(this.bufferSettingsSection,
          this.nls.errorMsg.bufferDistanceFieldsErrorMsg) &&
        this._validateGPTaskDownloadOption(extractDataTaskUrl) &&
        this._validateLayers() && this._validateMaxFeatureCount()) {
        //get configured search sources
        searchSourceSettings = this._searchSourceSettings.getConfig();
        //check if valid sources are configured for search
        if (!searchSourceSettings || searchSourceSettings.sources.length === 0) {
          this._errorMessage(this.nls.searchSourceSetting.invalidSearchSources,
            this.nls.searchSourceSetting.searchSourceSettingTabTitle);
          return false;
        }
        var placenameButtonText = this.placeNameTextBox.get("value");
        this.config.placenameButtonText =
          jimuUtils.sanitizeHTML(placenameButtonText ? placenameButtonText : '');
        this.config.showPlacenameWidget = this.placeNameCheckBox.checked;
        this.config.showDrawToolsWidget = this.drawToolCheckBox.checked;
        this.config.showShapefileWidget = this.uploadShapefileCheckBox.checked;
        this.config.showCoordinatesWidget = this.coordinatesCheckBox.checked;
        this.config.allowShapefilesUpload = this.allowUploadShapefileCheckBox.checked;
        var aoiTabText = this.aoiTabTextBox.get("value");
        this.config.aoiTabText = jimuUtils.sanitizeHTML(aoiTabText ? aoiTabText : '');
        var reportTabText = this.reportsTabTextBox.get("value");
        this.config.reportTabText = jimuUtils.sanitizeHTML(reportTabText ? reportTabText : '');
        var drawToolsButtonText = this.drawToolTextBox.get("value");
        this.config.drawToolsButtonText =
          jimuUtils.sanitizeHTML(drawToolsButtonText ? drawToolsButtonText : '');
        var shapefileButtonText = this.uploadShapeFileTextBox.get("value");
        this.config.shapefileButtonText =
          jimuUtils.sanitizeHTML(shapefileButtonText ? shapefileButtonText : '');
        var coordinatesButtonText = this.coordinatesTextBox.get("value");
        this.config.coordinatesButtonText =
          jimuUtils.sanitizeHTML(coordinatesButtonText ? coordinatesButtonText : '');
        this.config.traverseUnit = this.traverseUnitsNode.get("value");
        this.config.traverseDirectionUnit = this.traverseDirectionUnitsNode.get("value");
        this.config.maxFeaturesForAnalysis = this.maxFeatureCountTextBox.get("value");
        this.config.areaUnits = this.areaUnitsDropDown.get("value");
        this.config.defaultBufferDistance = this.defaultBufferDistanceTextBox.get("value");
        this.config.defaultBufferUnit = this.defaultBufferUnitsNode.get("value");
        this.config.searchTolerance = this.searchToleranceTextBox.get('value');
        this.config.placenameSymbology = this._symbolParams;
        this.config.coordinatesSymbology = this._symbolParams;
        this.config.shapefileSymbology = this._symbolParams;
        this.config.drawToolSymbology = this._symbolParams;
        this.config.aoiSymbol = this._symbolParams.aoiSymbol;
        this.config.layers = this._getSelectedLayers(false);
        this.config.searchSourceSettings = searchSourceSettings;
        this.config.downloadSettings = {
          type: dojoQuery('input[type=radio]:checked', this.downloadTabNode)[0].value,
          layers: this._downloadTab.getLayers(),
          extractDataTaskURL: extractDataTaskUrl,
          downloadingFileOptions: this._downloadTab.getDownloadingFileOptions()
        };
        this.config.reportSettings = {
          printTaskURL: this._downloadTab.getPrintReportGPServiceURL(),
          footnote: this._downloadTab.getFootnoteForReport(),
          logo: this._downloadTab.getLogo(),
          columnTitleColor: this._downloadTab.getTableHeaderColor(),
          reportTitle: this._downloadTab.getReportTitle()
        };
        return this.config;
      } else {
        return false;
      }
    },

    /**
     * This function validates if atleast one layer is selected.
     * @memberOf Screening/setting/Setting
     */
    _validateLayers: function () {
      var isValid = true, layersArray = this._getSelectedLayers(false);
      if (layersArray.length === 0) {
        isValid = false;
        this._errorMessage(this.nls.errorMsg.noLayerSelected,
          this.nls.analysisTab.analysisTabLabel);
      }
      return isValid;
    },

    /**
     * This function checks if fields has duplicate labels entered
     * @param {object} tempLabelsObj: temporary object having label as key
     * @memberOf Screening/setting/Setting
     */
    _validateDuplicateLabelsForFields: function (tempLabelsObj) {
      var isValid = true, duplicateLabels = [];
      //Loop all the labels for layers/fields items
      for (var key in tempLabelsObj) {
        duplicateLabels = [];
        for (var currentKey in tempLabelsObj) {
          if (tempLabelsObj[key] === tempLabelsObj[currentKey]) {
            duplicateLabels.push({
              "label": currentKey,
              "item": tempLabelsObj[key]
            });
          }
        }
        if (duplicateLabels.length > 1) {
          break;
        }
      }
      //Check for duplicate labels
      if (!this._showDuplicateLabelsErrorMessage(duplicateLabels)) {
        isValid = false;
      }
      return isValid;
    },

    /**
     * functions displays error message for duplicate fields label
     * @param{array} duplicateLabels : duplicate labels array
     * @memberOf Screening/setting/Settings.js
     */
    _showDuplicateLabelsErrorMessage: function (duplicateLabels) {
      var msgString;
      //Check for more than one duplicate labels in layers/fields
      if (duplicateLabels.length > 1) {
        msgString = "";
        array.forEach(duplicateLabels, lang.hitch(this, function (currentObj, index) {
          msgString = msgString + currentObj.label;
          if (index < duplicateLabels.length - 1) {
            msgString += ",";
          }
        }));
        this._errorMessage(string.substitute(this.nls.errorMsg.duplicateFieldsLabels, {
          "labelText": duplicateLabels[0].item,
          "itemNames": msgString
        }), this.nls.analysisTab.analysisTabLabel);
        return false;
      }
      return true;
    },

    /**
     * This function initializes all the configuration objects.
     * @memberOf Screening/setting/Setting
     */
    _initConfiguration: function () {
      var symbology;
      this._symbolParams = {};
      this.defaultBufferDistanceTextBox.constraints = { min: 0 };
      this.defaultBufferDistanceTextBox.validator = lang.hitch(this, function () {
        return this._numberValidator(this.defaultBufferDistanceTextBox);
      });
      this.maxFeatureCountTextBox.constraints = { min: 1, places: 0 };
      //Allow user's to see the conversion changes on each key press
      this.searchToleranceTextBox.constraints = { min: 0 };
      this.searchToleranceTextBox.intermediateChanges = true;
      symbology = [
        {
          "node": this.pointSymbolNode,
          "symbolType": "point",
          "geometryType": "esriGeometryPoint",
          "title": this.nls.generalTab.pointSymbolChooserPopupTitle
        },
        {
          "node": this.lineSymbolNode,
          "symbolType": "polyline",
          "geometryType": "esriGeometryLine",
          "title": this.nls.generalTab.lineSymbolChooserPopupTitle
        },
        {
          "node": this.polygonSymbolNode,
          "symbolType": "polygon",
          "geometryType": "esriGeometryPolygon",
          "title": this.nls.generalTab.polygonSymbolChooserPopupTitle
        },
        {
          "node": this.aoiSymbolNode,
          "symbolType": "aoiSymbol",
          "geometryType": "esriGeometryPolygon",
          "title": this.nls.generalTab.aoiSymbolChooserPopupTitle
        }
      ];
      //Initialize the tabs
      this._initTabs();
      this._enableDisableAOIToolsTextBox();
      //Create symbologies for point, polyline, polygon and aoi buffer symbol
      array.forEach(symbology, lang.hitch(this, function (symbolParam) {
        this._createSymbolPicker(symbolParam.node, symbolParam.symbolType,
          symbolParam.geometryType, symbolParam.title);
      }));
      //Bind change event of search tolerance text box
      on(this.searchToleranceTextBox, "change", lang.hitch(this, function (value) {
        this._convertTolerance(value);
      }));
      this.searchToleranceTextBox.validator = lang.hitch(this, function () {
        return this._numberValidator(this.searchToleranceTextBox);
      });
    },

    /**
     * This function validates search tolerance text box
     * @memberOf Screening/setting/Setting
     */
    _numberValidator: function (numberBox) {
      var value = numberBox.get("value");
      if (isNaN(value)) {
        return false;
      } else {
        return true;
      }
    },

    /**
     * This function initializes jimu tab for Analysis, Download and General.
     * @memberOf Screening/setting/Setting
     */
    _initTabs: function () {
      var analysisTab, configurationTabs, downloadTab, generalTab, searchSourceSettingTab;
      analysisTab = {
        title: this.nls.analysisTab.analysisTabLabel,
        content: this.analysisTabNode
      };
      downloadTab = {
        title: this.nls.downloadTab.downloadTabLabel,
        content: this.downloadTabNode
      };
      generalTab = {
        title: this.nls.generalTab.generalTabLabel,
        content: this.generalTabNode
      };
      searchSourceSettingTab = {
        title: this.nls.searchSourceSetting.searchSourceSettingTabTitle,
        content: this.searchSourceTabNode
      };
      configurationTabs = [analysisTab, downloadTab, generalTab, searchSourceSettingTab];
      this._configurationTabsContainer = new TabContainer3({
        tabs: configurationTabs
      }, this.tabContainer);
      this.own(on(this._configurationTabsContainer, "tabChanged", lang.hitch(this, function () {
        this._configurationTabsContainer.containerNode.scrollTop = 0;
      })));
      this._configurationTabsContainer.startup();
    },

    /**
    * This function used for loading indicator
    * @memberOf Screening/setting/Setting
    */
    _initLoading: function () {
      var popupContainer;
      this.loading = new LoadingIndicator({
        hidden: true
      });
      popupContainer = query(".widget-setting-popup")[0];
      this.loading.placeAt(popupContainer);
      this.loading.startup();
    },

    /**
    * This function the initializes search source setting tab container
    * @memberOf Screening/setting/Setting
    */
    _createSearchSourceSettings: function () {
      var searchSourceConfig = {};
      //if has valid sources set that as prev config
      if (this.config && this.config.hasOwnProperty('searchSourceSettings')) {
        searchSourceConfig = this.config.searchSourceSettings;
      }
      this._searchSourceSettings = new SearchSourceSettings({
        nls: this.nls,
        map: this.map,
        appConfig: this.appConfig,
        shelter: this.loading,
        config: searchSourceConfig
      }, domConstruct.create("div", {}, this.searchSourceTabNode));
      this.own(on(this._searchSourceSettings, "invalid-source-setting",
        lang.hitch(this, function () {
          this._errorMessage(this.nls.errorStrings.invalidSearchSources,
            this.nls.searchSourceSetting.searchSourceSettingTabTitle);
        })));
    },

    /**
     * Sets the config UI from previously/Default configured values.
     * @memberOf Screening/setting/Settings
     */
    setConfig: function () {
      if (this.config) {
        if (this.config.aoiTabText) {
          this.aoiTabTextBox.set('value', this.config.aoiTabText);
        }
        if (this.config.reportTabText) {
          this.reportsTabTextBox.set('value', this.config.reportTabText);
        }
        if (this.config.placenameButtonText) {
          this.placeNameTextBox.set('value', this.config.placenameButtonText);
        }
        if (this.config.drawToolsButtonText) {
          this.drawToolTextBox.set('value', this.config.drawToolsButtonText);
        }
        if (this.config.shapefileButtonText) {
          this.uploadShapeFileTextBox.set('value', this.config.shapefileButtonText);
        }
        if (this.config.coordinatesButtonText) {
          this.coordinatesTextBox.set('value', this.config.coordinatesButtonText);
        }
        if (this.config.defaultBufferDistance || this.config.defaultBufferDistance === 0) {
          this.defaultBufferDistanceTextBox.set('value', this.config.defaultBufferDistance);
        }
        if (this.config.traverseUnit) {
          this._setDropDownSavedOptionSelected(this.traverseUnitsNode, this.config.traverseUnit);
        }
        if (this.config.traverseDirectionUnit) {
          this._setDropDownSavedOptionSelected(this.traverseDirectionUnitsNode,
            this.config.traverseDirectionUnit);
        }
        if (this.config.areaUnits) {
          this._setDropDownSavedOptionSelected(this.areaUnitsDropDown, this.config.areaUnits);
        }
        if (this.config.maxFeaturesForAnalysis) {
          this.maxFeatureCountTextBox.set('value', this.config.maxFeaturesForAnalysis);
        }
        if (this.config.defaultBufferUnit) {
          this._setDropDownSavedOptionSelected(this.defaultBufferUnitsNode,
            this.config.defaultBufferUnit);
        }
        if (this.config.searchTolerance || this.config.searchTolerance === 0) {
          this.searchToleranceTextBox.set('value', this.config.searchTolerance);
          this._convertTolerance(this.config.searchTolerance);
        }
        this.placeNameCheckBox.setValue(this.config.showPlacenameWidget);
        this.drawToolCheckBox.setValue(this.config.showDrawToolsWidget);
        this.uploadShapefileCheckBox.setValue(this.config.showShapefileWidget);
        this.coordinatesCheckBox.setValue(this.config.showCoordinatesWidget);
        this.allowUploadShapefileCheckBox.setValue(this.config.allowShapefilesUpload);
        //populate configured values in add layer grid
        if (this._addLayerTable && this.config.layers) {
          this._addLayerTable.clear();
          for (var i = 0; i < this.config.layers.length; i++) {
            var layerInfo = this.config.layers[i];
            this._populateLayerTableRow(layerInfo, false);
          }
        }
        //create search source settings tab content
        this._createSearchSourceSettings();
      }
    },

    /**
     * This function converts tolerance form feets to meters and display's it in div
     * @param {number} value: value of search tolerance text box
     * @memberOf Screening/setting/Setting
     */
    _convertTolerance: function (value) {
      //Calculate meter units only if entered value is valid
      if (this.searchToleranceTextBox.isValid()) {
        this.convertedTolerance.innerHTML = "(" +
          ConversionUtils.usSurveyFeetToMeters(value).toFixed(1) + " " +
          this.nls.units.meters + ")";
      } else {
        //In case of invalid value don't show anything
        this.convertedTolerance.innerHTML = "";
      }
    },

    /**
     * This function initializes Field picker object and creates Field picker popup
     * @param {object} tr: selected row for add layer table
     * @memberOf Screening/setting/Setting
     */
    _onEditLayerClicked: function (tr) {
      var layerGridInfo = tr.layerInfo, args;
      this._curRow = tr;
      if (tr.layerSelector) {
        tr.layerSelector.hideLayerChooser();
      }
      // create empty layer details objects if layerGridInfo not present
      if (!layerGridInfo) {
        layerGridInfo = {};
        layerGridInfo.selectedFields = null;
        tr.layerInfo = layerGridInfo;
      }
      layerGridInfo.layerLabel = tr.labelText.value;
      // set layer name and layer object if selected layer is present in dropdown
      if (tr.layerSelector.getSelectedItem()) {
        if (tr.layerSelector.getSelectedItem().name) {
          layerGridInfo.layerName = tr.layerSelector.getSelectedItem().name;
        }
        if (tr.layerSelector.getSelectedItem().layerInfo) {
          layerGridInfo.layer = tr.layerSelector.getSelectedItem().layerInfo;
        }
      }
      args = {
        nls: this.nls,
        featureLayer: layerGridInfo.layer.layerObject,
        selectedFields: tr.selectedFields,
        layerGridInfo: layerGridInfo
      };
      this._createFieldSelectorPopup(args, tr);
    },

    /**
     * create popup to display layer chooser
     * @param {object} fieldPickerArgs: arguments for field picker popup
     * @param {object} tr: selected row for add layer table
     * @memberOf NearMe/setting/layerChooserPopup
     */
    _createFieldSelectorPopup: function (fieldPickerArgs, tr) {
      var popup, okButton, cancelButton, isValid = true, lastSelectedFields;
      lastSelectedFields = fieldPickerArgs.layerGridInfo.selectedFields;
      //creating ok button
      var sourceDijit = new FieldPicker(fieldPickerArgs);
      okButton = domConstruct.create("button", {
        title: this.nls.common.ok
      });
      okButton.label = this.nls.common.ok;
      //creating cancel button
      cancelButton = domConstruct.create("button", {
        title: this.nls.common.cancel
      });
      cancelButton.label = this.nls.common.cancel;
      //initializing popup with default configuration
      popup = new Popup({
        titleLabel: this.nls.analysisTab.addFieldsPopupTitle + ": " +
        tr.layerSelector.getSelectedItem().name,
        content: sourceDijit,
        width: 830,
        height: 500,
        autoHeight: true,
        buttons: [okButton, cancelButton]
      });
      okButton.onClick = lang.hitch(this, function () {
        var tempLabelsObj = {};
        isValid = true;
        this._curRow.selectedFields = sourceDijit.okButtonClicked();
        this._validateFields(this._curRow.selectedFields, this._curRow);
        for (var key in this._curRow.selectedFields) {
          if (this._curRow.selectedFields[key].label.trim() !== "") {
            tempLabelsObj[this._curRow.selectedFields[key].alias] =
              this._curRow.selectedFields[key].label.trim();
          }
        }
        isValid = this._validateDuplicateLabelsForFields(tempLabelsObj);
        if (isValid) {
          this._curRow = null;
          sourceDijit.destroy();
          sourceDijit = null;
          popup.close();
        } else {
          this._curRow.selectedFields =
            fieldPickerArgs.layerGridInfo.selectedFields = lastSelectedFields;
        }
      });
      cancelButton.onClick = lang.hitch(this, function () {
        this._curRow = null;
        sourceDijit.destroy();
        sourceDijit = null;
        popup.close();
      });
    },

    /**
     * This function enable/disable AOI Tools textbox by checking the state of checkbox.
     * @memberOf Screening/setting/Setting
     */
    _enableDisableAOIToolsTextBox: function () {
      this.own(on(this.placeNameCheckBox, 'change',
        lang.hitch(this, function (placenameCheckboxChecked) {
          if (!placenameCheckboxChecked) {
            this.placeNameTextBox.set("disabled", true);
          }
          else {
            this.placeNameTextBox.set("disabled", false);
          }
        })));
      this.own(on(this.drawToolCheckBox, 'change',
        lang.hitch(this, function (drawToolCheckboxChecked) {
          if (!drawToolCheckboxChecked) {
            this.drawToolTextBox.set("disabled", true);
          }
          else {
            this.drawToolTextBox.set("disabled", false);
          }
        })));
      this.own(on(this.uploadShapefileCheckBox, 'change',
        lang.hitch(this, function (uploadShapefileCheckboxChecked) {
          if (!uploadShapefileCheckboxChecked) {
            this.uploadShapeFileTextBox.set("disabled", true);
          }
          else {
            this.uploadShapeFileTextBox.set("disabled", false);
          }
        })));
      this.own(on(this.coordinatesCheckBox, 'change',
        lang.hitch(this, function (coordinatesCheckboxChecked) {
          if (!coordinatesCheckboxChecked) {
            this.coordinatesTextBox.set("disabled", true);
            this.traverseUnitsNode.set("disabled", true);
            this.traverseDirectionUnitsNode.set("disabled", true);
          }
          else {
            this.coordinatesTextBox.set("disabled", false);
            this.traverseUnitsNode.set("disabled", false);
            this.traverseDirectionUnitsNode.set("disabled", false);
          }
        })));
    },

    /**
     * Sets the last saved changes by user to the dropdowns
     * @memberOf Screening/setting/Setting
     */
    _setDropDownSavedOptionSelected: function (dropDownNode, configValue) {
      dropDownNode.setValue(configValue);
      array.forEach(dropDownNode.options, lang.hitch(this, function (
        currentField) {
        if (currentField.value === configValue) {
          currentField.selected = "selected";
        }
        else {
          currentField.selected = false;
        }
      }));
    },

    /**
     * This validates all the parameters and their configured values for Validation text boxes.
     * @param {object} scope
     * @param {string} errorMessage
     * @memberOf Screening/setting/Setting
     */
    _validateConfigForInputFields: function (scope, errorMessage, currentTab) {
      var isValid = true;
      array.some(dojoQuery(".esriCTTextBox", scope),
        lang.hitch(this, function (currentInput) {
          if (registry.byNode(currentInput) &&
            (!registry.byNode(currentInput).disabled) &&
            (!registry.byNode(currentInput).isValid())) {
            if (currentTab === "analysis") {
              this._errorMessage(errorMessage, this.nls.analysisTab.analysisTabLabel);
            }
            else {
              this._errorMessage(errorMessage, this.nls.generalTab.generalTabLabel);
            }
            isValid = false;
            return true;
          }
        }));
      return isValid;
    },

    /**
     * This validates all the parameters and their configured values for Number text boxes.
     * @param {object} scope
     * @param {string} errorMessage
     * @memberOf Screening/setting/Setting
     */
    _validateConfigForBufferDistanceFields: function (
      scope, errorMessage) {
      var isValid = true;
      array.some(dojoQuery(".esriCTTextBox", scope),
        lang.hitch(this, function (currentInput) {
          if (registry.byNode(currentInput) && (!registry.byNode(currentInput).isValid() ||
            isNaN(registry.byNode(currentInput).get("value")))) {
            this._errorMessage(errorMessage, this.nls.generalTab.generalTabLabel);
            isValid = false;
            return true;
          }
        }));
      return isValid;
    },

    /**
     * This validates if at least one checkbox is checked.
     * @memberOf Screening/setting/Setting
     */
    _validateConfigForCheckBoxes: function () {
      var isValid = false;
      array.some(dojoQuery(".esriCTCheckBox", this.aoiToolsSection),
        lang.hitch(this, function (currentInput) {
          if (registry.byNode(currentInput).checked) {
            isValid = true;
            return true;
          }
        }));
      if (!isValid) {
        this._errorMessage(this.nls.errorMsg.atLeastOneCheckboxCheckedErrorMsg,
          this.nls.analysisTab.analysisTabLabel);
      }
      return isValid;
    },

    /**
     * This function creates error alert.
     * @param {string} err
     * @memberOf Screening/setting/Settings.js
     */
    _errorMessage: function (err, selectTab) {
      var errorMessage = new Message({
        message: err,
        buttons: [{
          "label": this.nls.common.ok
        }]
      });
      errorMessage.message = err;
      //Select the tab if exist
      if (this._configurationTabsContainer && selectTab) {
        this._configurationTabsContainer.selectTab(selectTab);
      }
    },

    /**
     * This function creates symbol picker in config UI
     * @param {object} symbolNode: contains a symbol chooser node
     * @param {string} symbolType: contains symbol type
     * @param {string} geometryType: contains symbol geometry type
     * @param {string} symbolChooserTitle: contains a symbol chooser popup title
     * @memberOf Screening/setting/Setting
     */
    _createSymbolPicker: function (symbolNode, symbolType, geometryType, symbolChooserTitle) {
      var objSymbol = {}, symbolChooserNode, params;
      //if symbol geometry exist
      if (geometryType) {
        objSymbol.type = utils.getSymbolTypeByGeometryType(geometryType);
        //Create symbol chooser based on symbol type.
        //ie. if symbol is for connection, boundary, parcel point
        if (this.config && this.config.placenameSymbology[symbolType]) {
          objSymbol.symbol = jsonUtils.fromJson(this.config.placenameSymbology[symbolType]);
          symbolChooserNode = this._createPreviewContainer(symbolNode, false);
        }
        else {
          objSymbol.symbol = jsonUtils.fromJson(this.config.aoiSymbol);
          symbolChooserNode = this._createPreviewContainer(symbolNode, false);
        }
        //create params to initialize symbolChooserPopup widget
        params = {
          symbolChooserTitle: symbolChooserTitle,
          symbolParams: objSymbol,
          symbolType: symbolType,
          nls: this.nls
        };
        //display configured symbol in symbol chooser node
        this._showSelectedSymbol(symbolChooserNode, objSymbol.symbol, symbolType);
        //attach 'click' event on node to display symbol chooser popup
        this.own(on(symbolChooserNode, 'click', lang.hitch(this, function () {
          //set recently selected symbol in symbol chooser popup
          objSymbol.symbol = jsonUtils.fromJson(this._symbolParams[symbolType]);
          this._initSymbolChooserPopup(params, symbolChooserNode);
        })));
      }
      return symbolChooserNode;
    },

    /**
     * Create preview container to display selected symbol
     * @param {object} symbolNode: contains node to display selected graphic symbol
     * @memberOf Screening/setting/Setting
     */
    _createPreviewContainer: function (symbolNode, showPreviewText) {
      var tablePreviewText, trPreviewText, tdPreviewText, tdSymbolNode,
        symbolChooserNode;
      //in case of preview text create table else directly create symbol node
      if (showPreviewText) {
        tablePreviewText = domConstruct.create("table", {
          "cellspacing": "0",
          "cellpadding": "0"
        }, symbolNode);
        trPreviewText = domConstruct.create("tr", { "class": "esriCTTRPreviewText" },
          tablePreviewText);
        tdPreviewText = domConstruct.create("td", {}, trPreviewText);
        //preview text node
        domConstruct.create("div", {
          "innerHTML": this.nls.generalTab.previewLabel,
          "class": "esriCTSymbolPreviewText"
        }, tdPreviewText);
        tdSymbolNode = domConstruct.create("td", {}, trPreviewText);
        //create content div for symbol chooser node
        symbolChooserNode = domConstruct.create("div", {
          "class": "esriCTSymbolChooserNode"
        }, tdSymbolNode);
      } else {
        //create content div for symbol chooser node
        symbolChooserNode = domConstruct.create("div", {
          "class": "esriCTSymbolChooserNode"
        }, symbolNode);
      }
      return symbolChooserNode;
    },

    /**
     * Initialize symbol chooser popup widget
     * @param {object} params: contains params to initialize widget
     * @param {object} symbolChooserNode: contains node to display selected graphic symbol
     * @memberOf Screening/setting/Setting
     */
    _initSymbolChooserPopup: function (params, symbolChooserNode) {
      var symbolChooserObj = new SymbolChooserPopup(params);
      //handler for poopUp 'OK' button 'click' event
      symbolChooserObj.onOkClick = lang.hitch(this, function () {
        //get selected symbol
        var symbolJson = symbolChooserObj.symbolChooser.getSymbol();
        this._showSelectedSymbol(symbolChooserNode, symbolJson, params.symbolType);
        symbolChooserObj.popup.close();
      });
    },

    /**
     * show selected graphic symbol in symbol chooser node
     * @param {object} symbolChooserNode: contains a symbol chooser node
     * @param {object} symbolJson: contains a json structure for symbol
     * @param {string} symbolType: contains symbol type
     * @member of widgets/Screening/setting/setting
     */
    _showSelectedSymbol: function (symbolChooserNode, symbolJson, symbolType) {
      domConstruct.empty(symbolChooserNode);
      if (symbolJson) {
        var symbolNode = symbolUtils.createSymbolNode(symbolJson);
        // if symbol node is not created
        if (!symbolNode) {
          symbolNode = domConstruct.create('div');
        }
        domConstruct.place(symbolNode, symbolChooserNode);
        //store selected symbol in 'symbolParams' object
        this._symbolParams[symbolType] = symbolJson.toJson();
      }
    },

    /**
     * initializing Download tab
     * @member of widgets/Screening/setting/setting
     */
    _initDownloadTab: function () {
      // initializing Download Tab
      this._downloadTab = new Download({
        map: this.map,
        downloadOptions: this.config.downloadSettings,
        reportSettings: this.config.reportSettings,
        loadingIndicator: this.loading,
        nls: this.nls,
        appConfig: this.appConfig,
        folderUrl: this.folderUrl
      });
      this._downloadTab.placeAt(this.downloadTabNode);
    },

    /**
     * Set download info of the selected layer in download tab
     * @param {object} tr table row containing layer details
     * @member of widgets/Screening/setting/setting
     */
    _setDownloadInfo: function (tr) {
      var selectedLayerInfo;
      // Change layer download information according to the selected layer of selected index
      if (this._downloadTab) {
        selectedLayerInfo = this._getLayerInfo(tr, true);
        if (selectedLayerInfo) {
          this._downloadTab.checkLayerForDownloadOptions(selectedLayerInfo, tr.rowIndex);
        }
      }
    },

    /**
     * Remove download info of the deleted row from download tab
     * @param {number} deletedRowIndex index of the deleted row
     * @member of widgets/Screening/setting/setting
     */
    _removeDownloadInfo: function (deletedRowIndex) {
      if (this._downloadTab) {
        this._downloadTab.deleteRow(deletedRowIndex);
      }
    },

    /**
     * This function is to validate extract data task download option
     * @param {string} contains extract data task url
     * @member of widgets/Screening/setting/setting
     */
    _validateGPTaskDownloadOption: function (extractDataTaskUrl) {
      if (dojoQuery('input[type=radio]:checked', this.downloadTabNode)[0].value ===
        "extractDataTask" && extractDataTaskUrl === "") {
        this._errorMessage(this.nls.downloadTab.errorMessages.noExtractDataTaskURL,
          this.nls.downloadTab.downloadTabLabel);
        return false;
      } else {
        return true;
      }
    },

    /*Layer Selector*/

    /**
     * This function get selected layer and create map server URL
     * @memberOf NearMe/setting/layerChooserPopup
     */
    _getSelectedLayers: function (getCapabilities) {
      var layerItem, selectedLayersArr = [], trs;
      trs = this._addLayerTable.getRows();
      //get selected items from chooser
      array.forEach(trs, lang.hitch(this, function (tr) {
        if (tr.layerSelector) {
          layerItem = this._getLayerInfo(tr, getCapabilities);
          layerItem.selectedFields = tr.selectedFields;
          selectedLayersArr.push(layerItem);
        }
      }));
      return selectedLayersArr;
    },

    _getLayerInfo: function (tr, getCapabilities) {
      var baseURL, layerItem, selectedLayerItem;
      selectedLayerItem = tr.layerSelector.getSelectedItem();
      if (selectedLayerItem) {
        layerItem = {
          "url": selectedLayerItem.layerInfo.layerObject.url,
          "geometryType": selectedLayerItem.layerInfo.layerObject.geometryType,
          "id": selectedLayerItem.layerInfo.id,
          "label":
          jimuUtils.sanitizeHTML(tr.labelText &&
            tr.labelText.value ? tr.labelText.value.trim() : ""),
          "layerName": selectedLayerItem.layerInfo.title,
          "layerVersion": selectedLayerItem.layerInfo.layerObject.version
        };
        if (getCapabilities) {
          layerItem.capabilities = selectedLayerItem.layerInfo.layerObject.capabilities;
        }
        if (tr.layerInfo && tr.layerInfo.selectedFields) {
          layerItem.selectedFields = tr.layerInfo.selectedFields;
        }
        if (selectedLayerItem.layerId) {
          layerItem.layerId = selectedLayerItem.layerId;
        } else {
          layerItem.layerId = layerItem.url.substr(layerItem.url.lastIndexOf(
            '/') + 1, layerItem.url
              .length);
        }
        //create map server URL
        baseURL = layerItem.url.substr(0, layerItem.url.lastIndexOf(
          '/') + 1);
        layerItem.baseURL = baseURL;
      }
      return layerItem;
    },

    /**
     * This function creates arguments for layerChooserMap.
     * @memberOf Screening/setting/Setting
     */
    _createLayerChooserMapArgs: function () {
      var layerChooserFromMapArgs;
      layerChooserFromMapArgs = {
        multiple: false,
        createMapResponse: this.map.webMapResponse,
        filter: LayerChooserFromMap.createFeaturelayerFilter([], false, false)
      };
      return layerChooserFromMapArgs;
    },

    /**
     * Function displays all filtered layers in add layer grid
     * @memberOf Screening/setting/Setting
     */
    _initLayerSelector: function () {
      var layerChooserFromMapArgs, layerInfosArray;
      //empty the array to hold all/selected layers
      this.loading.show();
      this._idsOfSelectedLayers = [];
      this._totalLayers = [];
      //create layerChooser and get its layerInfo so that all the filter required will be applied
      layerChooserFromMapArgs = this._createLayerChooserMapArgs();
      this._layerChooserFromMap = new LayerChooserFromMap(layerChooserFromMapArgs);
      this._layerChooserFromMap.startup();
      layerInfosArray = this._layerChooserFromMap.layerInfosObj.getLayerInfoArray();

      var defList = [];
      //Create total layers array
      this._getAllFilteredLayers(layerInfosArray, defList);

      all(defList).then(lang.hitch(this, function () {
        this.loading.hide();
        //Enable or disable add layer button based on layers available on map
        if (this._totalLayers.length > 0) {
          domClass.remove(this.btnAddLayer, "esriCTDisabled");
        }
        else {
          domClass.add(this.btnAddLayer, "esriCTDisabled");
          domClass.remove(this.lblNoValidLayers, "esriCTHidden");
        }
        //Init the layer table
        this._createAddLayerGrid();
        this.setConfig(this.config);
        //handle click event for the button
        this.own(on(this.btnAddLayer, 'click', lang.hitch(this, this._addLayerButtonClicked)));
      }));
    },


    /**
     * Function filters layers array by checking if it contains sub layers or not
     * Also it pushes all valid layers in totalLayers array
     * @param {array} layerInfosArray: operational layers array
     * @memberOf Screening/setting/Setting
     */
    _getAllFilteredLayers: function (layerInfosArray, defList) {
      array.forEach(layerInfosArray, lang.hitch(this, function (currentLayer) {
        var layerDef;
        if (!currentLayer.isLeaf()) {
          this._getAllFilteredLayers(currentLayer.newSubLayers, defList);
        }
        else {
          layerDef = new Deferred();
          this._layerChooserFromMap.filter(currentLayer).then(
            lang.hitch(this, function (isValid) {
              if (isValid) {
                this._totalLayers.push(currentLayer);
              }
              layerDef.resolve();
            }));
          defList.push(layerDef);
        }
      }));
    },

    /**
     * Attaching layer for analysis table events
     * @member of widgets/Screening/setting/setting
     */
    _captureAddLayerTableEvents: function () {
      var prevRowValue, currentRowValue, nextRowValue;
      // Handle edit row event of add layer table
      this.own(on(this._addLayerTable, 'actions-edit',
        lang.hitch(this, this._onEditLayerClicked)));
      // Handle row up event of add layer table
      this.own(on(this._addLayerTable, 'row-up', lang.hitch(this, function (tr) {
        //Update _idsOfSelectedLayers
        prevRowValue = this._idsOfSelectedLayers[tr.rowIndex];
        currentRowValue = this._idsOfSelectedLayers[tr.rowIndex + 1];
        this._idsOfSelectedLayers.splice(tr.rowIndex, 2, currentRowValue, prevRowValue);
        if (this._downloadTab) {
          this._downloadTab.rowUp(tr.rowIndex);
        }
      })));
      // Handle row down event of add layer table
      this.own(on(this._addLayerTable, 'row-down', lang.hitch(this, function (tr) {
        //Update _idsOfSelectedLayers
        nextRowValue = this._idsOfSelectedLayers[tr.rowIndex];
        currentRowValue = this._idsOfSelectedLayers[tr.rowIndex - 1];
        this._idsOfSelectedLayers.splice(tr.rowIndex - 1, 2, nextRowValue, currentRowValue);
        if (this._downloadTab) {
          this._downloadTab.rowDown(tr.rowIndex);
        }
      })));
      // Handle onBeforeRowDelete event of addLayerTable,
      // so that we get the row index of row to be deleted
      this._addLayerTable.onBeforeRowDelete = lang.hitch(this, this._deleteLayer);
    },

    /**
     * This function is used to create table for add Layer section
     * @memberOf Screening/setting/Setting
     */
    _createAddLayerGrid: function () {
      var args, fields = [{
        name: 'field',
        title: this.nls.analysisTab.addLayerNameTitle,
        type: 'empty',
        editable: 'true',
        width: '200px'
      }, {
        name: 'field',
        title: this.nls.common.label,
        type: 'empty',
        editable: 'true',
        width: '200px'
      }, {
        name: 'actions',
        title: this.nls.common.actions,
        width: '80px',
        type: 'actions',
        actions: ['up', 'down', 'edit', 'delete']
      }];
      args = {
        fields: fields,
        selectable: false
      };
      this._addLayerTable = new SimpleTable(args);
      this._addLayerTable.placeAt(this.addLayerTableNode);
      this._captureAddLayerTableEvents();
      this._addLayerTable.startup();
    },


    /**
     * This function creates layer label textbox.
     * @param {object} tr: selected row for add layer table
     * @param {object} selectedLabel: selected label node for add layer table
     * @memberOf Screening/setting/Setting
     */
    _addLayerLabel: function (tr, selectedLabel) {
      var td, labelTextBox;
      td = dojoQuery('.simple-table-cell', tr)[1];
      domClass.add(td, "esriCTLayerInputCell");
      labelTextBox = new ValidationTextBox({
        "class": "esriCTLayerLabelTextBox"
      });
      labelTextBox.placeAt(td);
      labelTextBox.startup();
      tr.labelText = labelTextBox;
      if (selectedLabel) {
        tr.labelText.set("value", selectedLabel);
      }
    },

    /**
     * Populates selected rows in addLayer table
     * @param {object} layerInfo: contains selected layer details
     * @memberOf Screening/setting/Setting
     */
    _populateLayerTableRow: function (layerInfo, addFromButtonClick) {
      var result, rowIndex;
      result = this._addLayerTable.addRow({});
      rowIndex = this._idsOfSelectedLayers.length;
      if (result.success && result.tr) {
        var tr = result.tr;
        this._validateFields(layerInfo.selectedFields, tr);
        tr.layerInfo = layerInfo;
        tr.selectedFields = layerInfo.selectedFields;
        this._addLayerDropDown(tr, layerInfo, addFromButtonClick);
        this._addLayerLabel(tr, layerInfo.label);
      }
    },

    /**
     * Validates if atleast one field selected for layer
     * @param {object} selectedFields: selected fields for layer
     ** @param {object} tr: current selected layer row
      * @memberOf Screening/setting/Setting
      */
    _validateFields: function (selectedFields, tr) {
      var td;
      //if selected layer is valid then update the selected layer in layer dropdown
      td = dojoQuery('.simple-table-cell', tr)[2];
      //if no field selected for current layer then show error icon and disable ok button
      if (td && !selectedFields) {
        if (!tr.errorDiv) {
          tr.errorDiv = domConstruct.create("div", {
            'class': "esriCTFieldError"
          }, td);
          tr.errorSpan = domConstruct.create("span", {
            'class': "jimu-icon jimu-icon-error",
            title: this.nls.errorMsg.noFieldSelected
          }, tr.errorDiv);
        }
        this._disableOk(tr);
      }
      //enable ok button
      else {
        this._enableOk(tr);
      }
    },

    /**
     * function disables ok button if no field selected for a layer
     * @memberOf Screening/setting/Setting
     */
    _disableOk: function (tr) {
      domClass.remove(tr.errorSpan, "esriCTHidden");
      var s = query(".button-container")[0];
      domStyle.set(s.children[2], "display", "none");
      domStyle.set(s.children[3], "display", "inline-block");
    },

    /**
     * function enables ok button
     * @memberOf Screening/setting/Setting
     */
    _enableOk: function (tr) {
      if (tr && tr.errorSpan) {
        domClass.add(tr.errorSpan, "esriCTHidden");
        if (dojoQuery(".esriCTFieldError", this.addLayerTableNode).length ===
          dojoQuery(".esriCTFieldError > .esriCTHidden", this.addLayerTableNode).length) {
          var s = query(".button-container")[0];
          domStyle.set(s.children[2], "display", "inline-block");
          domStyle.set(s.children[3], "display", "none");
        }
      }
    },

    /**
     * This function creates row in add layers table.
     * @memberOf Screening/setting/Setting
     */
    _addLayerButtonClicked: function () {
      var unUsedLayer;
      //if add layer button is enabled
      if (!domClass.contains(this.btnAddLayer, "esriCTDisabled")) {
        //get all unUsed layers from map to select the first out of it
        unUsedLayer = this._pickUnusedLayer();
        this._populateLayerTableRow(unUsedLayer[0], true);
      }
    },

    /**
     * This function returns the array of unUsed layers out of all layers from map
     * @memberOf Screening/setting/Setting
     */
    _pickUnusedLayer: function () {
      var unUsedLayers;
      if (this._idsOfSelectedLayers.length <
        this._totalLayers.length) {
        unUsedLayers = array.filter(this._totalLayers,
          lang.hitch(this, function (layer) {
            return this._idsOfSelectedLayers.indexOf
              (layer.id) < 0;
          }));
      }
      else {
        unUsedLayers = this._totalLayers;
      }
      return unUsedLayers;
    },

    /**
    * This function adds layer dropdown.
    * @param {object} tr: selected row for add layer table
    * @param {object} selectedLayer: selected layer details for add layer table
    * @memberOf Screening/setting/Setting
    */
    _addLayerDropDown: function (tr, selectedLayer, addFromButtonClick) {
      var td, layerChooserFromMapArgs, layerSelector, layerChooserFromMap;
      if (tr.layerSelector) {
        tr.layerSelector.destroy();
      }
      //create layerChooser args
      layerChooserFromMapArgs = this._createLayerChooserMapArgs();
      layerChooserFromMap = new LayerChooserFromMap(layerChooserFromMapArgs);
      layerChooserFromMap.startup();

      td = dojoQuery('.simple-table-cell', tr)[0];
      domClass.add(td, "esriCTLayerInputCell");

      layerSelector =
        new LayerChooserFromMapWithDropbox({ layerChooser: layerChooserFromMap });
      layerSelector.placeAt(td);
      layerSelector.startup();

      tr.layerSelector = layerSelector;

      if (selectedLayer) {
        //setSelectedLayer in rows layerSelector
        layerSelector.setSelectedLayer(selectedLayer);
        this._addLayer(tr, selectedLayer, addFromButtonClick);
      }
      this.own(on(layerSelector, 'selection-change',
        lang.hitch(this, function (updatedLayer) {
          //if selected layer is valid then update the selected layer in layer dropdown
          if (updatedLayer && updatedLayer.length > 0 && updatedLayer[0] &&
            updatedLayer[0].hasOwnProperty('id')) {
            if (tr.layerInfo && updatedLayer[0].id !== tr.layerInfo.id) {
              this._updateLayer(tr, updatedLayer);
            }
          }
          //if selected layer is not valid remove it form the row and show error message
          else {
            this._errorMessage(this.nls.errorMsg.errorInSelectingLayer);
            this._deleteLayer(tr);
            this._addLayerTable.deleteRow(tr);
          }
        })));
    },

    /**
     * Function called on adding new layer.
     * This function adds the selected layer in array and refresh the other layer selectors
     * @memberOf Screening/setting/Setting
     */
    _addLayer: function (tr, selectedLayer, addFromButtonClick) {
      if (selectedLayer && selectedLayer.hasOwnProperty('id')) {
        //add it in selected layer array
        this._idsOfSelectedLayers.push(selectedLayer.id);
        //set download info of the selected layer
        if (addFromButtonClick) {
          this._setDownloadInfo(tr);
        }
      }
    },

    /**
     * Callback function called on selection-change of LayerChooserFromMapWithDropbox.
     * This function updates the selected layer in array and refresh the other layer selectors
     * @memberOf Screening/setting/Setting
     */
    _updateLayer: function (tr, selectedLayers) {
      this.loading.show();
      this._idsOfSelectedLayers[tr.rowIndex] = selectedLayers[0].id;
      this._setDownloadInfo(tr);
      //as layer is changed update the selected fields
      tr.selectedFields = null;
      this._validateFields(tr.selectedFields, tr);
      this.loading.hide();
    },

    /**
     * Callback function called on layer row is deleted.
     * This function removes the selected layer for array and refresh the other layer selectors
     * @memberOf Screening/setting/Setting
     */
    _deleteLayer: function (tr) {
      this.loading.show();
      //destroy layer selector so that if it is open it will be closed
      if (tr.layerSelector) {
        tr.layerSelector.destroy();
      }
      this._removeDownloadInfo(tr.rowIndex);
      this._idsOfSelectedLayers.splice(tr.rowIndex, 1);
      domClass.remove(this.btnAddLayer, "esriCTDisabled");
      this._enableOk(tr);
      this.loading.hide();
      return true;
    },

    /**
     * This function validates max feature count for analysis text box value
     * @memberOf Screening/setting/Setting
     */
    _validateMaxFeatureCount: function () {
      if (this.maxFeatureCountTextBox.get("value") > 0 && this.maxFeatureCountTextBox.isValid()) {
        return true;
      } else {
        this._errorMessage(this.nls.errorMsg.errorInMaxFeatureCount,
          this.nls.analysisTab.analysisTabLabel);
        return false;
      }
    }
  });
});