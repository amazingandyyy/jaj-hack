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
    "standardUnit": "Unità standard",
    "metricUnit": "Sistema metrico"
  },
  "analysisTab": {
    "analysisTabLabel": "Analisi",
    "selectAnalysisLayerLabel": "Seleziona il layer di analisi",
    "addLayerLabel": "Aggiungi layer",
    "noValidLayersForAnalysis": "Nessun layer valido trovato nella mappa Web selezionata.",
    "noValidFieldsForAnalysis": "Nessun campo valido trovato nella mappa Web selezionata. Rimuovere il layer selezionato.",
    "addLayersHintText": "Suggerimento: selezionare layer e campi da analizzare e visualizzare nel report",
    "addLayerNameTitle": "Nome layer",
    "addFieldsLabel": "Aggiungi campo",
    "addFieldsPopupTitle": "Seleziona campi",
    "addFieldsNameTitle": "Nomi campi",
    "aoiToolsLegendLabel": "Strumenti AOI",
    "aoiToolsDescriptionLabel": "Abilita gli strumenti per creare aree di interesse e specificarne le etichette",
    "placenameLabel": "Toponimo",
    "drawToolsLabel": "Strumenti di disegno",
    "uploadShapeFileLabel": "Carica uno shapefile",
    "coordinatesLabel": "Coordinate",
    "coordinatesDrpDwnHintText": "Suggerimento: selezionare l'unità per visualizzare le traverse inserite",
    "coordinatesBearingDrpDwnHintText": "Suggerimento: selezionare il rilevamento per visualizzare le traverse inserite",
    "allowShapefilesUploadLabel": "Consenti il caricamento degli shapefile per l'analisi",
    "areaUnitsLabel": "Mostra aree/lunghezze in",
    "allowShapefilesUploadLabelHintText": "Suggerimento: mostra 'Carica shapefile in analisi' nella scheda Report",
    "maxFeatureForAnalysisLabel": "Feature max per analisi",
    "maxFeatureForAnalysisHintText": "Suggerimento: impostare il numero massimo di feature per l'analisi",
    "searchToleranceLabelText": "Tolleranza di ricerca (piedi)",
    "searchToleranceHint": "Suggerimento: impiegata solo per l'analisi di input di punti e linee"
  },
  "downloadTab": {
    "downloadLegend": "Impostazioni di download",
    "reportLegend": "Impostazioni report",
    "downloadTabLabel": "Scarica",
    "syncEnableOptionLabel": "Feature layer",
    "syncEnableOptionHint": "Suggerimento: impiegati per scaricare informazioni su feature che intersecano l'aera di interesse nei formati indicati.",
    "syncEnableOptionNote": "Nota: per l'opzione Geodatabase file sono richiesti i feature service abilitati per la sincronizzazione.",
    "extractDataTaskOptionLabel": "Servizio di geoprocessing Estrai attività dati",
    "extractDataTaskOptionHint": "Suggerimento: impiegare un servizio di geoprocessing Estrai attività dati per scaricare feature che intersecano l'area di interesse in formati Geodatabase file o Shapefile.",
    "cannotDownloadOptionLabel": "Disabilita download",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nome layer",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File geodatabase",
      "allowDownloadLabel": "Consenti download"
    },
    "setButtonLabel": "Imposta",
    "GPTaskLabel": "Specificare l'url che rimanda al servizio di geoprocessing",
    "printGPServiceLabel": "URL servizio di stampa",
    "setGPTaskTitle": "Specificare l'URL richiesto al servizio di geoprocessing",
    "logoLabel": "Logo",
    "logoChooserHint": "Suggerimento: fare clic sull'icona dell'immagine per modificare l'immagine",
    "footnoteLabel": "Nota a piè di pagina",
    "columnTitleColorPickerLabel": "Colore per titoli colonne",
    "reportTitleLabel": "Titolo report",
    "errorMessages": {
      "invalidGPTaskURL": "Servizio di geoprocessing non valido. Selezionare il servizio di geoprocessing contenente Estrai attività dati.",
      "noExtractDataTaskURL": "Selezionare un servizio di geoprocessing qualsiasi contenente Estrai attività dati."
    }
  },
  "generalTab": {
    "generalTabLabel": "Generale",
    "tabLabelsLegend": "Etichette pannello",
    "tabLabelsHint": "Suggerimento: specificare le etichette",
    "AOITabLabel": "Pannello area di interesse",
    "ReportTabLabel": "Pannello report",
    "bufferSettingsLegend": "Impostazioni buffer",
    "defaultBufferDistanceLabel": "Distanza predefinita del buffer",
    "defaultBufferUnitsLabel": "Unità buffer",
    "generalBufferSymbologyHint": "Suggerimento: impostare la simbologia da impiegare per mostrare i buffer sulle aree di interesse definite",
    "aoiGraphicsSymbologyLegend": "Simbologia grafici AOI",
    "aoiGraphicsSymbologyHint": "Suggerimento: impostare la simbologia da impiegare per definire aree di interesse di punti, linee e poligoni",
    "pointSymbologyLabel": "Punto",
    "previewLabel": "Anteprima",
    "lineSymbologyLabel": "Linea",
    "polygonSymbologyLabel": "Poligono",
    "aoiBufferSymbologyLabel": "Simbologia buffer",
    "pointSymbolChooserPopupTitle": "Simbolo indirizzo o posizione",
    "polygonSymbolChooserPopupTitle": "Seleziona simbolo per evidenziare poligono",
    "lineSymbolChooserPopupTitle": "Seleziona simbolo per evidenziare linea",
    "aoiSymbolChooserPopupTitle": "Imposta simbolo buffer"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Cerca impostazioni origine",
    "searchSourceSettingTitle": "Cerca impostazioni origine",
    "searchSourceSettingTitleHintText": "Aggiungere e configurare servizi di geocodifica o feature layer come fonti di ricerca. Queste fonti specificate determinano ciò che è possibile cercare nella casella di ricerca",
    "addSearchSourceLabel": "Aggiungi fonte di ricerca",
    "featureLayerLabel": "Feature layer",
    "geocoderLabel": "Geocodificatore",
    "generalSettingLabel": "Impostazioni generali",
    "allPlaceholderLabel": "Testo segnaposto per la ricerca in tutti:",
    "allPlaceholderHintText": "Suggerimento: immettere il testo da visualizzare come segnaposto durante la ricerca di tutti i layer e geocodificatore",
    "generalSettingCheckboxLabel": "Mostra popup per la feature o la posizione trovata",
    "countryCode": "Codici paesi o regioni",
    "countryCodeEg": "es. ",
    "countryCodeHint": "Se si lascia vuoto questo campo, la ricerca verrà effettuata in tutti i paesi e le regioni",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Esegui la ricerca nell'estensione mappa corrente",
    "zoomScale": "Scala zoom",
    "locatorUrl": "URL geocodificatore",
    "locatorName": "Nome geocodificatore",
    "locatorExample": "Esempio",
    "locatorWarning": "Questa versione del servizio di geocodifica non è supportata. Il widget supporta il servizio di geocodifica 10.0 e versioni successive.",
    "locatorTips": "I suggerimenti non sono disponibili perché il servizio di geocodifica non supporta tale funzionalità.",
    "layerSource": "Origine del layer",
    "setLayerSource": "Imposta layer di origine",
    "setGeocoderURL": "Imposta URL geocodificatore",
    "searchLayerTips": "I suggerimenti non sono disponibili perché il feature service non supporta la funzionalità di paginazione.",
    "placeholder": "Testo segnaposto",
    "searchFields": "Campi di ricerca",
    "displayField": "Campo visualizzazione",
    "exactMatch": "Corrispondenza esatta",
    "maxSuggestions": "Suggerimenti massimi",
    "maxResults": "Risultati massimi",
    "enableLocalSearch": "Abilita ricerca locale",
    "minScale": "Scala Minima",
    "minScaleHint": "Quando la scala della mappa è più grande di questa scala, verrà applicata la ricerca locale",
    "radius": "Raggio",
    "radiusHint": "Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorità alla classificazione dei candidati di geocodifica in modo che i canditati più vicini alla posizione vengano restituiti per primi",
    "setSearchFields": "Imposta campi di ricerca",
    "set": "Imposta",
    "invalidUrlTip": "URL ${URL} non valido o non accessibile.",
    "invalidSearchSources": "Impostazioni fonte di ricerca non valide"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Compilare i campi obbligatori",
    "bufferDistanceFieldsErrorMsg": "Immettere dei valori validi",
    "invalidSearchToleranceErrorMsg": "Immettere un valore valido per la tolleranza di ricerca",
    "atLeastOneCheckboxCheckedErrorMsg": "Configurazione non valida",
    "noLayerAvailableErrorMsg": "Layer non disponibili",
    "layerNotSupportedErrorMsg": "Non supportato ",
    "noFieldSelected": "Impiegare l'azione Modifica per selezionare i campi per l'analisi.",
    "duplicateFieldsLabels": "Etichetta duplicata \"${labelText}\" aggiunta per: \"${itemNames}\"",
    "noLayerSelected": "Selezionare almeno un layer per l'analisi",
    "errorInSelectingLayer": "Disabilitare completare l'operazione di selezione del layer. Riprovare.",
    "errorInMaxFeatureCount": "Inserire il numero valido max di feature per l'analisi."
  }
});