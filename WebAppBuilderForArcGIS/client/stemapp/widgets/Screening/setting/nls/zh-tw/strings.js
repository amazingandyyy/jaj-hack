///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "standardUnit": "標準單位",
    "metricUnit": "公制單位"
  },
  "analysisTab": {
    "analysisTabLabel": "分析",
    "selectAnalysisLayerLabel": "選擇分析圖層",
    "addLayerLabel": "新增圖層",
    "noValidLayersForAnalysis": "在選擇的 Web 地圖中找不到有效的圖層。",
    "noValidFieldsForAnalysis": "在選擇的 Web 地圖中找不到有效的欄位。請移除選擇的圖層。",
    "addLayersHintText": "提示: 選擇要在報告中分析和顯示的圖層和欄位。",
    "addLayerNameTitle": "圖層名稱",
    "addFieldsLabel": "增加欄位",
    "addFieldsPopupTitle": "選擇欄位",
    "addFieldsNameTitle": "欄位名稱",
    "aoiToolsLegendLabel": "AOI 工具",
    "aoiToolsDescriptionLabel": "啟用工具以建立感興趣區域並指定其標籤",
    "placenameLabel": "地名",
    "drawToolsLabel": "繪製工具",
    "uploadShapeFileLabel": "上傳 Shapefile",
    "coordinatesLabel": "座標",
    "coordinatesDrpDwnHintText": "提示: 選擇單位以顯示輸入的行程",
    "coordinatesBearingDrpDwnHintText": "提示: 選擇方位以顯示輸入的行程",
    "allowShapefilesUploadLabel": "允許上傳 shapefile 進行分析",
    "areaUnitsLabel": "顯示面積/長度",
    "allowShapefilesUploadLabelHintText": "提示: 顯示「報告」頁籤中的「在分析中上傳 shapefile」",
    "maxFeatureForAnalysisLabel": "用於分析的圖徵數上限",
    "maxFeatureForAnalysisHintText": "提示: 設定用於分析的圖徵數上限",
    "searchToleranceLabelText": "搜尋容差 (英呎)",
    "searchToleranceHint": "提示 : 只有在分析點和線條輸入時才能使用搜尋容差"
  },
  "downloadTab": {
    "downloadLegend": "下載設定",
    "reportLegend": "報告設定",
    "downloadTabLabel": "下載",
    "syncEnableOptionLabel": "圖徵圖層",
    "syncEnableOptionHint": "提示: 用來下載與指定格式之感興趣區域相交的圖徵之圖徵資訊。",
    "syncEnableOptionNote": "備註:「檔案地理資料庫」選項需要啟用同步的圖徵服務。",
    "extractDataTaskOptionLabel": "擷取資料任務地理處理服務",
    "extractDataTaskOptionHint": "提示: 使用發佈的「擷取資料任務」地理處理服務，下載與檔案地理資料庫或 Shapefile 格式的感興趣區域相交的圖徵。",
    "cannotDownloadOptionLabel": "停用下載",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "圖層名稱",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "檔案地理資料庫",
      "allowDownloadLabel": "允許下載"
    },
    "setButtonLabel": "設定",
    "GPTaskLabel": "指定地理處理服務的 url",
    "printGPServiceLabel": "列印服務 URL",
    "setGPTaskTitle": "指定必要的地理處理服務 URL",
    "logoLabel": "標誌",
    "logoChooserHint": "提示: 按一下圖片圖示以變更圖片",
    "footnoteLabel": "註腳",
    "columnTitleColorPickerLabel": "欄標題的顏色",
    "reportTitleLabel": "報告標題",
    "errorMessages": {
      "invalidGPTaskURL": "地理處理服務無效。請選擇包含擷取資料任務的地理處理服務。",
      "noExtractDataTaskURL": "請選擇包含擷取資料任務的任何地理處理服務。"
    }
  },
  "generalTab": {
    "generalTabLabel": "一般",
    "tabLabelsLegend": "面板標籤",
    "tabLabelsHint": "提示: 指定標籤",
    "AOITabLabel": "感興趣區域面板",
    "ReportTabLabel": "報告面板",
    "bufferSettingsLegend": "緩衝區設定",
    "defaultBufferDistanceLabel": "預設緩衝區距離",
    "defaultBufferUnitsLabel": "緩衝區單位",
    "generalBufferSymbologyHint": "提示: 設定符號系統以顯示定義的感興趣區域周圍的緩衝區",
    "aoiGraphicsSymbologyLegend": "AOI 圖形符號系統",
    "aoiGraphicsSymbologyHint": "提示: 設定在定義點、線和多邊形的感興趣區域時所使用的符號系統",
    "pointSymbologyLabel": "點",
    "previewLabel": "預覽",
    "lineSymbologyLabel": "線",
    "polygonSymbologyLabel": "面",
    "aoiBufferSymbologyLabel": "緩衝區符號系統",
    "pointSymbolChooserPopupTitle": "地址或位置符號",
    "polygonSymbolChooserPopupTitle": "選擇符號以突顯多邊形",
    "lineSymbolChooserPopupTitle": "選擇符號以突顯線條",
    "aoiSymbolChooserPopupTitle": "設定緩衝區符號"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "搜尋來源設定",
    "searchSourceSettingTitle": "搜尋來源設定",
    "searchSourceSettingTitleHintText": "新增並配置地理編碼服務或圖徵圖層為搜尋來源。這些指定的來源決定了搜尋方塊中的可搜尋內容",
    "addSearchSourceLabel": "新增搜尋來源",
    "featureLayerLabel": "圖徵圖層",
    "geocoderLabel": "地理編碼器",
    "generalSettingLabel": "一般設定",
    "allPlaceholderLabel": "用於全部搜尋的占位符文字:",
    "allPlaceholderHintText": "提示: 輸入在搜尋所有圖層和地理編碼器時，要顯示成佔位符的文字",
    "generalSettingCheckboxLabel": "顯示發現的圖徵或位置的快顯視窗",
    "countryCode": "國碼或地區代碼",
    "countryCodeEg": "例如 ",
    "countryCodeHint": "留空此值會搜尋所有國家和地區",
    "questionMark": "?",
    "searchInCurrentMapExtent": "僅在目前的地圖範圍中搜尋",
    "zoomScale": "縮放比例",
    "locatorUrl": "地理編碼器 URL",
    "locatorName": "地理編碼器名稱",
    "locatorExample": "範例",
    "locatorWarning": "不支援此版本的地理編碼服務。該 widget支援 10.0 及更高版本的地理編碼服務。",
    "locatorTips": "由於地理編碼服務不支援建議功能，因此建議無法使用。",
    "layerSource": "圖層來源",
    "setLayerSource": "設定圖層來源",
    "setGeocoderURL": "設定地理編碼器 URL",
    "searchLayerTips": "由於圖徵服務不支援分頁功能，因此建議無法使用。",
    "placeholder": "佔位符文字",
    "searchFields": "搜尋欄位",
    "displayField": "顯示欄位",
    "exactMatch": "完全相符",
    "maxSuggestions": "最大建議數",
    "maxResults": "最大結果數",
    "enableLocalSearch": "啟用本機搜尋",
    "minScale": "最小比例",
    "minScaleHint": "當地圖比例大於此比例時，將套用本機搜尋",
    "radius": "半徑",
    "radiusHint": "指定目前地圖中心周圍的區域半徑，可用來提升地理編碼候選者的等級，以優先傳回離位置最近的候選者",
    "setSearchFields": "設定搜尋欄位",
    "set": "設定",
    "invalidUrlTip": "URL ${URL} 無效或不可存取。",
    "invalidSearchSources": "搜尋來源設定無效"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "請填入必要欄位",
    "bufferDistanceFieldsErrorMsg": "請輸入有效值",
    "invalidSearchToleranceErrorMsg": "請輸入搜尋容差的有效值",
    "atLeastOneCheckboxCheckedErrorMsg": "設定無效",
    "noLayerAvailableErrorMsg": "沒有可用的圖層",
    "layerNotSupportedErrorMsg": "不支援 ",
    "noFieldSelected": "請使用編輯動作以選擇欄位進行分析。",
    "duplicateFieldsLabels": "已經為 \"${itemNames}\" 新增重複的標籤 \"${labelText}\"",
    "noLayerSelected": "請至少選擇一個圖層進行分析",
    "errorInSelectingLayer": "無法完成選擇圖層操作。請再試一次。",
    "errorInMaxFeatureCount": "請輸入用於分析的有效圖徵計數上限。"
  }
});