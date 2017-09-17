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
    "standardUnit": "יחידה סטנדרטית",
    "metricUnit": "יחידה מטרית"
  },
  "analysisTab": {
    "analysisTabLabel": "ניתוח",
    "selectAnalysisLayerLabel": "בחר שכבות ניתוח",
    "addLayerLabel": "הוסף שכבות",
    "noValidLayersForAnalysis": "לא נמצאו שכבות חוקיות ב-Webmap שנבחר.",
    "noValidFieldsForAnalysis": "לא נמצאו שדות חוקיים ב-Webmap שנבחר. הסר את השכבה שנבחרה.",
    "addLayersHintText": "רמז: בחר שכבות ושדות כדי לניתוח והצגה בדוח",
    "addLayerNameTitle": "שם שכבה",
    "addFieldsLabel": "הוסף שדה",
    "addFieldsPopupTitle": "בחר שדות",
    "addFieldsNameTitle": "שמות השדות",
    "aoiToolsLegendLabel": "כלי AOI",
    "aoiToolsDescriptionLabel": "הפעל כלים כדי ליצור אזורי עניין ולציין את התוויות שלהם",
    "placenameLabel": "שם מקום",
    "drawToolsLabel": "כלי שרטוט",
    "uploadShapeFileLabel": "העלה Shapefile",
    "coordinatesLabel": "קואורדינטות",
    "coordinatesDrpDwnHintText": "רמז: בחר יחידה כדי להציג צלעונים שהוזנו",
    "coordinatesBearingDrpDwnHintText": "רמז: בחר כיוון כדי להציג צלעונים שהוזנו",
    "allowShapefilesUploadLabel": "אפשר העלאת קבצי shapefile לניתוח",
    "areaUnitsLabel": "הצג אזורים/אורכים ב",
    "allowShapefilesUploadLabelHintText": "רמז: הצג את 'העלה shapefile בניתוח' ב'כרטיסיית דוח'",
    "maxFeatureForAnalysisLabel": "מספר ישויות לניתוח",
    "maxFeatureForAnalysisHintText": "רמז: הגדר את מספר הישויות המרבי לניתוח",
    "searchToleranceLabelText": "טולרנס חיפוש (רגל)",
    "searchToleranceHint": "רמז: טולרנס החיפוש משמש רק בעת ניתוח קלט נקודה וקו"
  },
  "downloadTab": {
    "downloadLegend": "הורדת הגדרות",
    "reportLegend": "הגדרות דוח",
    "downloadTabLabel": "הורדה",
    "syncEnableOptionLabel": "שכבות ישויות",
    "syncEnableOptionHint": "רמז: משמש להורדת מידע ישות עבור ישויות שמצטלבות עם אזור העניין בתבניות המצוינות.",
    "syncEnableOptionNote": "הערה: שירותי ישויות המופעלים על-ידי סינכרון נדרשים עבור האפשרות File Geodatabase.",
    "extractDataTaskOptionLabel": "שירות geoprocessing של משימת חילוץ נתונים",
    "extractDataTaskOptionHint": "רמז: השתמש בשירות geoprocessing מפורסם של משימת חילוץ נתונים כדי להוריד ישויות שמצטלבות עם אזור העניין בתבניות File Geodatabase או Shapefile.",
    "cannotDownloadOptionLabel": "השבת הורדה",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "שם שכבה",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "allowDownloadLabel": "אפשר הורדה"
    },
    "setButtonLabel": "הגדר",
    "GPTaskLabel": "ציין url לשירות geoprocessing",
    "printGPServiceLabel": "URL של שירות הדפסה",
    "setGPTaskTitle": "ציין URL של שירות Geoprocessing נדרש",
    "logoLabel": "לוגו",
    "logoChooserHint": "רמז: לחץ על סמל תמונה כדי לשנות את התמונה",
    "footnoteLabel": "הערת שוליים",
    "columnTitleColorPickerLabel": "צבע עבור כותרות העמודות",
    "reportTitleLabel": "כותרת דוח",
    "errorMessages": {
      "invalidGPTaskURL": "שירות geoprocessing לא חוקי. בחר שירות geoprocessing המכיל משימת חילוץ נתונים.",
      "noExtractDataTaskURL": "בחר שירות geoprocessing כלשהו המכיל משימת חילוץ נתונים."
    }
  },
  "generalTab": {
    "generalTabLabel": "כללי",
    "tabLabelsLegend": "תווית של פאנל",
    "tabLabelsHint": "רמז: ציין תוויות",
    "AOITabLabel": "פאנל אזור עניין",
    "ReportTabLabel": "פאנל דוח",
    "bufferSettingsLegend": "הגדרות חיץ",
    "defaultBufferDistanceLabel": "מרחק ברירת מחדל לחיץ",
    "defaultBufferUnitsLabel": "יחידות חיץ",
    "generalBufferSymbologyHint": "רמז: הגדר סימבולוגיה שתשמש להצגת חייצים מסביב לאזור עניין מוגדר",
    "aoiGraphicsSymbologyLegend": "סימבולוגיית גרפיקת AOI",
    "aoiGraphicsSymbologyHint": "רמז: הגדר סימבולוגיה שתשמש בעת הגדרת אזורי נקודה, קו ופוליגון של עניין",
    "pointSymbologyLabel": "נקודה",
    "previewLabel": "תצוגה מקדימה",
    "lineSymbologyLabel": "קו",
    "polygonSymbologyLabel": "פוליגון",
    "aoiBufferSymbologyLabel": "סימבולוגיית חיץ",
    "pointSymbolChooserPopupTitle": "סמל כתובת או מיקום",
    "polygonSymbolChooserPopupTitle": "בחר סמל להדגשת פוליגון",
    "lineSymbolChooserPopupTitle": "בחר סמל להדגשת קו",
    "aoiSymbolChooserPopupTitle": "הגדר סמל חיץ"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "חפש הגדרות מקור",
    "searchSourceSettingTitle": "חפש הגדרות מקור",
    "searchSourceSettingTitleHintText": "הוסף והגדר שירותי עיגון כתובות או שכבות ישויות כמקורות חיפוש. מקורות אלה שמצוינים קובעים מה ניתן לחיפוש בתוך תיבת החיפוש",
    "addSearchSourceLabel": "הוסף מקור חיפוש",
    "featureLayerLabel": "שכבת ישויות",
    "geocoderLabel": "מעגן כתובות",
    "generalSettingLabel": "הגדרה כללית",
    "allPlaceholderLabel": "טקסט מציין מיקום לחיפוש מלא:",
    "allPlaceholderHintText": "רמז: הקלד טקסט שיוצג כממלא מקום בעת חיפוש בכל השכבות ומעגן הכתובות",
    "generalSettingCheckboxLabel": "הצג חלון קופץ עבור הישות או המיקום שנמצאו",
    "countryCode": "קוד/ים של ארצות או אזורים",
    "countryCodeEg": "לדוגמה ",
    "countryCodeHint": "השארת הערך הזה ריק תפעיל חיפוש בכל הארצות והאזורים",
    "questionMark": "?",
    "searchInCurrentMapExtent": "חפש רק בתיחום המפה הנוכחי",
    "zoomScale": "קנה מידה להתמקדות",
    "locatorUrl": "URL של מעגן הכתובות",
    "locatorName": "שם מעגן הכתובות",
    "locatorExample": "דוגמה",
    "locatorWarning": "גרסה זו של שירות עיגון הכתובות אינה נתמכת. הווידג'ט תומך בשירות עיגון הכתובות בגרסה 10.0 ואילך.",
    "locatorTips": "אין הצעות זמינות מפני ששירות עיגון הכתובות אינו תומך ביכולת הצעה.",
    "layerSource": "מקור שכבה",
    "setLayerSource": "הגדר מקור שכבה",
    "setGeocoderURL": "הגדר URL של מעגן הכתובות",
    "searchLayerTips": "אין הצעות זמינות מפני ששירות התמיכה אינו תומך ביכולת עימוד.",
    "placeholder": "טקסט מציין מיקום (Placeholder)",
    "searchFields": "שדות חיפוש",
    "displayField": "שדה תצוגה",
    "exactMatch": "התאמה מדויקת",
    "maxSuggestions": "מקסימום הצעות",
    "maxResults": "מקסימום תוצאות",
    "enableLocalSearch": "הפעל חיפוש מקומי",
    "minScale": "קנ\"מ מינימלי",
    "minScaleHint": "כאשר קנה המידה גדול יותר מקנה מידה זה, החיפוש המקומי יבוצע",
    "radius": "רדיוס",
    "radiusHint": "מציין את רדיוס האזור מסביב למרכז המפה הנוכחית שמשמש להגדלת הדירוג של מועמדים לעיגון כתובות, כך שהמועמדים הקרובים ביותר למיקום יוחזרו ראשונים.",
    "setSearchFields": "הגדר שדות חיפוש",
    "set": "הגדר",
    "invalidUrlTip": "ה-URL ‏${URL} שגוי או אינו נגיש.",
    "invalidSearchSources": "הגדרות חיפוש מקור לא חוקיות"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "מלא את השדות הדרושים",
    "bufferDistanceFieldsErrorMsg": "הזן ערכים חוקיים",
    "invalidSearchToleranceErrorMsg": "הזן ערך חוקי עבור טולרנס חיפוש",
    "atLeastOneCheckboxCheckedErrorMsg": "תצורה לא חוקית",
    "noLayerAvailableErrorMsg": "אין שכבות זמינות",
    "layerNotSupportedErrorMsg": "לא נתמך ",
    "noFieldSelected": "השתמש בפעולת העריכה כדי לבחור שדות לניתוח.",
    "duplicateFieldsLabels": "תווית כפולה \"${labelText}\" התווספה עבור : \"${itemNames}\"",
    "noLayerSelected": "בחר שכבה אחת לפחות לניתוח",
    "errorInSelectingLayer": "לא ניתן להשלים את הפעולה של בחירת השכבה. נסה שוב.",
    "errorInMaxFeatureCount": "הזן ספירת ישויות מקסימלית חוקית לניתוח."
  }
});