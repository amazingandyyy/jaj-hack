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
    "standardUnit": "標準単位",
    "metricUnit": "メートル法の単位"
  },
  "analysisTab": {
    "analysisTabLabel": "解析",
    "selectAnalysisLayerLabel": "解析レイヤーの選択",
    "addLayerLabel": "レイヤーの追加",
    "noValidLayersForAnalysis": "選択した Web マップに有効なレイヤーが見つかりませんでした。",
    "noValidFieldsForAnalysis": "選択した Web マップに有効なフィールドが見つかりませんでした。 選択したレイヤーを削除してください。",
    "addLayersHintText": "ヒント: 解析してレポートに表示するレイヤーとフィールドを選択します",
    "addLayerNameTitle": "レイヤー名",
    "addFieldsLabel": "フィールドの追加",
    "addFieldsPopupTitle": "フィールド選択",
    "addFieldsNameTitle": "フィールド名",
    "aoiToolsLegendLabel": "AOI ツール",
    "aoiToolsDescriptionLabel": "対象地域を作成して、そのラベルを指定するツールを有効化します",
    "placenameLabel": "地名",
    "drawToolsLabel": "図形描画ツール",
    "uploadShapeFileLabel": "シェープファイルのアップロード",
    "coordinatesLabel": "座標",
    "coordinatesDrpDwnHintText": "ヒント: 入力されたトラバースを表示する単位を選択します",
    "coordinatesBearingDrpDwnHintText": "ヒント: 入力されたトラバースを表示する方位を選択します",
    "allowShapefilesUploadLabel": "解析でシェープファイルのアップロードを許可",
    "areaUnitsLabel": "面積/長さを表示",
    "allowShapefilesUploadLabelHintText": "ヒント: [レポート] タブに [解析のシェープファイルのアップロード] を表示します",
    "maxFeatureForAnalysisLabel": "解析用の最大フィーチャ",
    "maxFeatureForAnalysisHintText": "ヒント: 解析用のフィーチャの最大数を設定します",
    "searchToleranceLabelText": "検索許容値 (フィート)",
    "searchToleranceHint": "ヒント: 検索許容値は、ポイントおよびライン入力を解析する場合のみ使用されます"
  },
  "downloadTab": {
    "downloadLegend": "ダウンロード設定",
    "reportLegend": "レポート設定",
    "downloadTabLabel": "ダウンロード",
    "syncEnableOptionLabel": "フィーチャ レイヤー",
    "syncEnableOptionHint": "ヒント: 対象地域と交差するフィーチャのフィーチャ情報を指定された形式でダウンロードするために使用されます。",
    "syncEnableOptionNote": "注意: ファイル ジオデータベース オプションには、同期が有効なフィーチャ サービスが必要です。",
    "extractDataTaskOptionLabel": "[データの抽出タスク (Extract Data Task)] ジオプロセシング サービス",
    "extractDataTaskOptionHint": "ヒント: 公開されている [データの抽出タスク (Extract Data Task)] ジオプロセシング サービスを使用して、対象地域と交差するフィーチャを、ファイル ジオデータベースまたはシェープファイルの形式でダウンロードします。",
    "cannotDownloadOptionLabel": "ダウンロードの無効化",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "レイヤー名",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "ファイル ジオデータベース",
      "allowDownloadLabel": "ダウンロードの許可"
    },
    "setButtonLabel": "設定",
    "GPTaskLabel": "ジオプロセシング サービスの URL を指定します",
    "printGPServiceLabel": "印刷サービスの URL",
    "setGPTaskTitle": "必要なジオプロセシング サービスの URL を指定します",
    "logoLabel": "ロゴ",
    "logoChooserHint": "ヒント: 画像アイコンをクリックして画像を変更",
    "footnoteLabel": "脚注",
    "columnTitleColorPickerLabel": "列のタイトルの色",
    "reportTitleLabel": "レポート タイトル",
    "errorMessages": {
      "invalidGPTaskURL": "無効なジオプロセシング サービスです。 [データの抽出タスク (Extract Data Task)] を含むジオプロセシング サービスを選択してください。",
      "noExtractDataTaskURL": "[データの抽出タスク (Extract Data Task)] を含むジオプロセシング サービスを選択してください。"
    }
  },
  "generalTab": {
    "generalTabLabel": "一般",
    "tabLabelsLegend": "パーセル ラベル",
    "tabLabelsHint": "ヒント: ラベルの指定",
    "AOITabLabel": "対象地域パーセル",
    "ReportTabLabel": "レポート パネル",
    "bufferSettingsLegend": "バッファー設定",
    "defaultBufferDistanceLabel": "デフォルトのバッファー距離",
    "defaultBufferUnitsLabel": "バッファー単位",
    "generalBufferSymbologyHint": "ヒント: 定義された対象地域の周囲のバッファーを表示するために使用されるシンボルを設定します",
    "aoiGraphicsSymbologyLegend": "AOI グラフィックス シンボル",
    "aoiGraphicsSymbologyHint": "ヒント: ポイント、ライン、ポリゴンの対象地域を定義するときに使用されるシンボルを設定します",
    "pointSymbologyLabel": "ポイント",
    "previewLabel": "プレビュー",
    "lineSymbologyLabel": "ライン",
    "polygonSymbologyLabel": "ポリゴン",
    "aoiBufferSymbologyLabel": "バッファー シンボル",
    "pointSymbolChooserPopupTitle": "住所または位置のシンボル",
    "polygonSymbolChooserPopupTitle": "シンボルを選択してポリゴンをハイライト表示します",
    "lineSymbolChooserPopupTitle": "シンボルを選択してラインをハイライト表示します",
    "aoiSymbolChooserPopupTitle": "バッファー シンボルの設定"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "検索ソースの設定",
    "searchSourceSettingTitle": "検索ソースの設定",
    "searchSourceSettingTitleHintText": "ジオコード サービスまたはフィーチャ レイヤーを検索ソースとして追加および構成します。指定されたこれらのソースは、検索ボックス内で検索可能な対象を決定します。",
    "addSearchSourceLabel": "検索ソースの追加",
    "featureLayerLabel": "フィーチャ レイヤー",
    "geocoderLabel": "ジオコーダー",
    "generalSettingLabel": "一般設定",
    "allPlaceholderLabel": "標準のプレースホルダー テキスト:",
    "allPlaceholderHintText": "ヒント: すべてのレイヤーとジオコーダーを検索するときに、プレースホルダーとして表示されるテキストを入力します",
    "generalSettingCheckboxLabel": "検出されたフィーチャまたは位置のポップアップを表示",
    "countryCode": "国コードまたは地域コード",
    "countryCodeEg": "例: ",
    "countryCodeHint": "この値を空白のままにすると、すべての国および地域を検索します",
    "questionMark": "？",
    "searchInCurrentMapExtent": "現在のマップ範囲内のみを検索",
    "zoomScale": "ズーム縮尺",
    "locatorUrl": "ジオコーダーの URL",
    "locatorName": "ジオコーダー名",
    "locatorExample": "例",
    "locatorWarning": "このジオコーディング サービスのバージョンはサポートされていません。ウィジェットは、10.0 以上のジオコーディング サービスをサポートしています。",
    "locatorTips": "ジオコーディング サービスがヒント機能をサポートしていないため、ヒントは使用できません。",
    "layerSource": "レイヤー ソース",
    "setLayerSource": "レイヤー ソースの設定",
    "setGeocoderURL": "ジオコーダーの URL の設定",
    "searchLayerTips": "フィーチャ サービスがページネーション機能をサポートしていないため、ヒントは使用できません。",
    "placeholder": "プレースホルダー テキスト",
    "searchFields": "検索フィールド",
    "displayField": "表示フィールド",
    "exactMatch": "完全一致",
    "maxSuggestions": "最大候補数",
    "maxResults": "結果の最大数",
    "enableLocalSearch": "ローカル検索の有効化",
    "minScale": "最小縮尺",
    "minScaleHint": "マップ縮尺がこの縮尺より大きい場合は、ローカル検索が適用されます。",
    "radius": "半径",
    "radiusHint": "現在のマップの中心を起点としたエリアの半径を指定します。この半径は、検索位置に最も近い候補が最初に返されるようにジオコーディング候補のランクを高めるために使用されます。",
    "setSearchFields": "検索フィールドの設定",
    "set": "設定",
    "invalidUrlTip": "URL ${URL} は無効であるか、アクセスできません。",
    "invalidSearchSources": "検索ソースの設定が無効です"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "必須フィールドを入力してください",
    "bufferDistanceFieldsErrorMsg": "有効な値を入力してください",
    "invalidSearchToleranceErrorMsg": "検索許容値の有効な値を入力してください。",
    "atLeastOneCheckboxCheckedErrorMsg": "無効な構成",
    "noLayerAvailableErrorMsg": "利用可能なレイヤーがありません",
    "layerNotSupportedErrorMsg": "サポートされていません ",
    "noFieldSelected": "解析用のフィールドを選択するには、編集アクションを使用してください。",
    "duplicateFieldsLabels": "\"${itemNames}\" に追加された重複ラベル \"${labelText}\"",
    "noLayerSelected": "解析用のレイヤーを少なくとも 1 つ選択してください",
    "errorInSelectingLayer": "レイヤーの選択操作を完了できません。 もう一度お試しください。",
    "errorInMaxFeatureCount": "解析用の有効な最大フィーチャ数を入力してください。"
  }
});