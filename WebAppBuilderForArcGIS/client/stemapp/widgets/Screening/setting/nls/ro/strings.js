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
    "standardUnit": "Unitate standard",
    "metricUnit": "Unitate sistem metric"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiză",
    "selectAnalysisLayerLabel": "Selectare straturi tematice de analiză",
    "addLayerLabel": "Adăugare straturi tematice",
    "noValidLayersForAnalysis": "În harta web selectată nu a fost găsit niciun strat tematic valid.",
    "noValidFieldsForAnalysis": "În harta web selectată nu a fost găsit niciun câmp valid. Eliminaţi stratul tematic selectat.",
    "addLayersHintText": "Sugestie: Selectaţi straturi tematice şi câmpuri pentru a le analiza şi a le afişa în raport",
    "addLayerNameTitle": "Nume strat tematic",
    "addFieldsLabel": "Adăugare câmp",
    "addFieldsPopupTitle": "Selectare câmpuri",
    "addFieldsNameTitle": "Nume câmpuri",
    "aoiToolsLegendLabel": "Instrumente AOI",
    "aoiToolsDescriptionLabel": "Activaţi instrumente pentru a crea zone de interes şi pentru a le specifica etichetele",
    "placenameLabel": "Nume loc",
    "drawToolsLabel": "Instrumente de trasare",
    "uploadShapeFileLabel": "Încărcare fişier shapefile",
    "coordinatesLabel": "Coordonate",
    "coordinatesDrpDwnHintText": "Sugestie: Selectaţi unitatea pentru a afişa transversalele introduse",
    "coordinatesBearingDrpDwnHintText": "Sugestie: Selectaţi azimutul pentru a afişa transversalele introduse",
    "allowShapefilesUploadLabel": "Se permite încărcarea de fişiere shapefile pentru analiză",
    "areaUnitsLabel": "Afişare suprafeţe/lungimi în",
    "allowShapefilesUploadLabelHintText": "Sugestie: Afişaţi „Încărcare fişier shapefile în analiză” în fila Raport",
    "maxFeatureForAnalysisLabel": "Număr maxim obiecte spaţiale pentru analiză",
    "maxFeatureForAnalysisHintText": "Sugestie: Setaţi numărul maxim de obiecte spaţiale pentru analiză",
    "searchToleranceLabelText": "Toleranţă căutare (picioare)",
    "searchToleranceHint": "Sugestie: Toleranţa de căutare este utilizată doar la analizarea introducerilor de linii şi puncte"
  },
  "downloadTab": {
    "downloadLegend": "Setări descărcare",
    "reportLegend": "Setări raport",
    "downloadTabLabel": "Descărcare",
    "syncEnableOptionLabel": "Straturi tematice de obiecte spaţiale",
    "syncEnableOptionHint": "Sugestie: Utilizat pentru a descărca informaţii despre obiectele spaţiale care se intersectează cu zona de interes în formatele indicate.",
    "syncEnableOptionNote": "Notă: Sunt necesare servicii de obiecte spaţiale cu sincronizare pentru opţiunea Bază de date geografică cu fişiere.",
    "extractDataTaskOptionLabel": "Serviciul de geoprocesare Activitate de extragere a datelor",
    "extractDataTaskOptionHint": "Sugestie: Folosiţi un serviciu publicat de geoprocesare Activitate de extragere a datelor pentru a descărca obiecte spaţiale care se intersectează cu zona de interes în formatele Bază de date geografică cu fişiere sau fişier shapefile.",
    "cannotDownloadOptionLabel": "Dezactivare descărcare",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nume strat tematic",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "FGDB",
      "allowDownloadLabel": "Se permite descărcarea"
    },
    "setButtonLabel": "Setare",
    "GPTaskLabel": "Specificare URL către serviciul de geoprocesare",
    "printGPServiceLabel": "URL serviciu de imprimare",
    "setGPTaskTitle": "Specificare URL serviciu de geoprocesare necesar",
    "logoLabel": "Siglă",
    "logoChooserHint": "Sugestie: Faceţi clic pe pictograma imaginii pentru a modifica imaginea",
    "footnoteLabel": "Notă de subsol",
    "columnTitleColorPickerLabel": "Culoare pentru titlurile de coloană",
    "reportTitleLabel": "Titlu raport",
    "errorMessages": {
      "invalidGPTaskURL": "Serviciu de geoprocesare nevalid. Selectaţi un serviciu de geoprocesare care conţine Activitate de extragere a datelor.",
      "noExtractDataTaskURL": "Selectaţi orice serviciu de geoprocesare care conţine Activitate de extragere a datelor."
    }
  },
  "generalTab": {
    "generalTabLabel": "Generalităţi",
    "tabLabelsLegend": "Etichete panou",
    "tabLabelsHint": "Sugestie: Specificaţi etichete",
    "AOITabLabel": "Panou Zonă de interes",
    "ReportTabLabel": "Panou Raport",
    "bufferSettingsLegend": "Setări buffer",
    "defaultBufferDistanceLabel": "Distanţă implicită buffer",
    "defaultBufferUnitsLabel": "Unităţi buffer",
    "generalBufferSymbologyHint": "Sugestie: Setaţi simbolurile care să fie utilizate pentru afişarea de buffere în jurul zonelor de interes definite",
    "aoiGraphicsSymbologyLegend": "Simboluri grafice AOI",
    "aoiGraphicsSymbologyHint": "Sugestie: Setaţi simbolurile care să fie utilizate la definirea zonelor de interes cu puncte, linii şi poligoane",
    "pointSymbologyLabel": "Punct",
    "previewLabel": "Previzualizare",
    "lineSymbologyLabel": "Linie",
    "polygonSymbologyLabel": "Poligon",
    "aoiBufferSymbologyLabel": "Simboluri buffer",
    "pointSymbolChooserPopupTitle": "Simbol adresă sau locaţie",
    "polygonSymbolChooserPopupTitle": "Selectare simbol pentru evidenţierea poligonului",
    "lineSymbolChooserPopupTitle": "Selectare simbol pentru evidenţierea liniei",
    "aoiSymbolChooserPopupTitle": "Setaţi simbolul bufferului"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Setări sursă căutare",
    "searchSourceSettingTitle": "Setări sursă căutare",
    "searchSourceSettingTitleHintText": "Adăugaţi şi configuraţi servicii de geocodificare sau straturi tematice de obiecte spaţiale ca surse de căutare. Aceste surse specificate stabilesc ce este căutabil în cadrul casetei de căutare",
    "addSearchSourceLabel": "Adăugare sursă căutare",
    "featureLayerLabel": "Strat tematic de obiecte spațiale",
    "geocoderLabel": "Geocodificator",
    "generalSettingLabel": "Setare generală",
    "allPlaceholderLabel": "Text substituent pentru căutarea tuturor:",
    "allPlaceholderHintText": "Sugestie: Introduceţi textul care va fi afişat ca substituent în timp ce căutaţi în toate straturile tematice şi în geocodificator",
    "generalSettingCheckboxLabel": "Afişaţi fereastra pop-up pentru obiectul spaţial sau locul găsit",
    "countryCode": "Cod(uri) ţară sau regiune",
    "countryCodeEg": "de ex. ",
    "countryCodeHint": "Dacă lăsaţi această valoare necompletată, vor fi căutate toate ţările şi regiunile",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Căutaţi doar în extinderea de hartă curentă",
    "zoomScale": "Scară de transfocare",
    "locatorUrl": "URL geocodificator",
    "locatorName": "Nume geocodificator",
    "locatorExample": "Exemplu",
    "locatorWarning": "Această versiune de serviciu de geocodificare nu este acceptată. Widgetul acceptă serviciul de geocodificare versiunea 10.0 sau ulterioară.",
    "locatorTips": "Sugestiile nu sunt disponibile, deoarece serviciul de geocodificare nu acceptă capacitatea de sugestie.",
    "layerSource": "Sursă straturi tematice",
    "setLayerSource": "Setare sursă straturi tematice",
    "setGeocoderURL": "Setare URL geocodificator",
    "searchLayerTips": "Sugestiile nu sunt disponibile, deoarece serviciul de obiecte spaţiale nu acceptă capacitatea de paginare.",
    "placeholder": "Text substituent",
    "searchFields": "Câmpuri de căutare",
    "displayField": "Câmp de afişare",
    "exactMatch": "Potrivire exactă",
    "maxSuggestions": "Sugestii de maxime",
    "maxResults": "Număr maxim de rezultate",
    "enableLocalSearch": "Activare căutare locală",
    "minScale": "Scară minimă",
    "minScaleHint": "Dacă scara hărţii este mai mare decât această scară, va fi aplicată căutarea locală",
    "radius": "Rază",
    "radiusHint": "Specifică raza unei suprafeţe din jurul centrului actual al hărţii, utilizată pentru a creşte clasificarea candidaţilor de geocodificare, astfel încât candidaţii cei mai apropiaţi de locaţie să fie returnaţi primii",
    "setSearchFields": "Setare câmpuri de căutare",
    "set": "Setare",
    "invalidUrlTip": "Adresa URL ${URL} este nevalidă sau inaccesibilă.",
    "invalidSearchSources": "Setări nevalide sursă căutare"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Completaţi câmpurile obligatorii",
    "bufferDistanceFieldsErrorMsg": "Introduceţi valori valide",
    "invalidSearchToleranceErrorMsg": "Introduceţi o valoare validă pentru toleranţa de căutare",
    "atLeastOneCheckboxCheckedErrorMsg": "Configurare incorectă",
    "noLayerAvailableErrorMsg": "Niciun strat tematic disponibil",
    "layerNotSupportedErrorMsg": "Neacceptat ",
    "noFieldSelected": "Utilizaţi acţiunea de editare pentru a selecta câmpurile pentru analiză.",
    "duplicateFieldsLabels": "Etichetă dublată \"${labelText}\" adăugată pentru: \"${itemNames}\"",
    "noLayerSelected": "Selectaţi cel puţin un strat tematic pentru analiză",
    "errorInSelectingLayer": "Imposibil de finalizat operaţia de selectare a stratului tematic. Încercaţi din nou.",
    "errorInMaxFeatureCount": "Introduceţi un număr maxim valid pentru obiectele spaţiale pentru analiză."
  }
});