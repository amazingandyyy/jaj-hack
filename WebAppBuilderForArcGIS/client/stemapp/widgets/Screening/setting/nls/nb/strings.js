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
    "standardUnit": "Standardenheter",
    "metricUnit": "Metriske enheter"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyse",
    "selectAnalysisLayerLabel": "Velg analyselag",
    "addLayerLabel": "Legg til lag",
    "noValidLayersForAnalysis": "Finner ingen gyldige lag i valgt webkart.",
    "noValidFieldsForAnalysis": "Finner ingen gyldige felt i valgt webkart. Fjern det valgte laget.",
    "addLayersHintText": "Tips: Velg lag og felt som skal analyseres og vises i rapporten",
    "addLayerNameTitle": "Lagnavn",
    "addFieldsLabel": "Legg til felt",
    "addFieldsPopupTitle": "Velg felter",
    "addFieldsNameTitle": "Feltnavn",
    "aoiToolsLegendLabel": "Verktøy for interesseområde",
    "aoiToolsDescriptionLabel": "Aktiver verktøy for å opprette interesseområder og angi etiketter for disse",
    "placenameLabel": "Stedsnavn",
    "drawToolsLabel": "Tegneverktøy",
    "uploadShapeFileLabel": "Last opp en shapefil",
    "coordinatesLabel": "Koordinater",
    "coordinatesDrpDwnHintText": "Tips: Velg enhet for visning av angitte polygondrag",
    "coordinatesBearingDrpDwnHintText": "Tips: Velg peiling for visning av angitte polygondrag",
    "allowShapefilesUploadLabel": "Tillat opplasting av shapefiler for analysering",
    "areaUnitsLabel": "Vis områder/lengder i",
    "allowShapefilesUploadLabelHintText": "Tips: Vis alternativet for opplasting av shapefiler til analyse i rapportfanen",
    "maxFeatureForAnalysisLabel": "Høyeste antall geoobjekter for analyser",
    "maxFeatureForAnalysisHintText": "Tips: Angi høyeste antall geoobjekter for analyser",
    "searchToleranceLabelText": "Søketoleranse (fot)",
    "searchToleranceHint": "Tips: Søketoleransen brukes bare til analysering av punkt- og linjeinndata"
  },
  "downloadTab": {
    "downloadLegend": "Nedlastingsinnstillinger",
    "reportLegend": "Rapportinnstillinger",
    "downloadTabLabel": "Last ned",
    "syncEnableOptionLabel": "Geoobjektslag",
    "syncEnableOptionHint": "Tips: Brukes til å laste ned geoobjektinformasjon for geoobjekter som krysser interesseområdet i de angitte formatene.",
    "syncEnableOptionNote": "Merk: Filgeodatabase-alternativet krever geoobjektstjenester med aktivert synkroniseringsfunksjon.",
    "extractDataTaskOptionLabel": "Geoprosesseringstjeneste for ekstrahering av data",
    "extractDataTaskOptionHint": "Tips: Bruk en publisert geoprosesseringstjeneste for ekstrahering av data til å laste ned geoobjekter som krysser interesseområdet i filgeodatabase- eller shapefilformater.",
    "cannotDownloadOptionLabel": "Deaktiver nedlasting",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Lagnavn",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Filgeodatabase",
      "allowDownloadLabel": "Tillat nedlasting"
    },
    "setButtonLabel": "Angi",
    "GPTaskLabel": "Angi URL til geoprosesseringstjeneste",
    "printGPServiceLabel": "URL for utskriftstjeneste",
    "setGPTaskTitle": "Angi nødvendig URL til geoprosesseringstjeneste",
    "logoLabel": "Logo",
    "logoChooserHint": "Tips: Klikk på bildeikonet for å endre bildet",
    "footnoteLabel": "Fotnote",
    "columnTitleColorPickerLabel": "Farge for kolonnetitler",
    "reportTitleLabel": "Rapporttittel",
    "errorMessages": {
      "invalidGPTaskURL": "Ugyldig geoprosesseringstjeneste. Velg en geoprosesseringstjeneste som inneholder oppgave for ekstrahering av data.",
      "noExtractDataTaskURL": "Velg en geoprosesseringstjeneste som inneholder oppgave for ekstrahering av data."
    }
  },
  "generalTab": {
    "generalTabLabel": "Generelt",
    "tabLabelsLegend": "Paneletiketter",
    "tabLabelsHint": "Tips: Angi etiketter",
    "AOITabLabel": "Interesseområdepanel",
    "ReportTabLabel": "Rapportpanel",
    "bufferSettingsLegend": "Bufferinnstillinger",
    "defaultBufferDistanceLabel": "Standard bufferavstand",
    "defaultBufferUnitsLabel": "Bufferenheter",
    "generalBufferSymbologyHint": "Tips: Angi symboler som skal brukes til å vise buffere rundt definerte interesseområde",
    "aoiGraphicsSymbologyLegend": "Symboler for interesseområdegrafikk",
    "aoiGraphicsSymbologyHint": "Tips: Angi symboler som skal brukes ved definering av punkt- linje- og polygonbaserte interesseområder",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Forhåndsvisning",
    "lineSymbologyLabel": "Linje",
    "polygonSymbologyLabel": "Polygon",
    "aoiBufferSymbologyLabel": "Buffersymboler",
    "pointSymbolChooserPopupTitle": "Adresse- eller lokasjonssymbol",
    "polygonSymbolChooserPopupTitle": "Velg symbol for å utheve polygon",
    "lineSymbolChooserPopupTitle": "Velg symbol for å utheve linje",
    "aoiSymbolChooserPopupTitle": "Angi buffersymbol"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Søkekildeinnstillinger",
    "searchSourceSettingTitle": "Søkekildeinnstillinger",
    "searchSourceSettingTitleHintText": "Legg til og konfigurer geokodingstjenester eller geoobjektslag som søkekilder. Disse angitte kildene avgjør hva som er søkbart i søkeboksen.",
    "addSearchSourceLabel": "Legg til søkekilde",
    "featureLayerLabel": "Geoobjektlag",
    "geocoderLabel": "Geokoder",
    "generalSettingLabel": "Generell innstilling",
    "allPlaceholderLabel": "Plassholdertekst for søk i alt:",
    "allPlaceholderHintText": "Hint: Skriv inn teksten som skal vises som plassholder når du søker i alle lag og geokoder.",
    "generalSettingCheckboxLabel": "Vis popuptekst for funnet geoobjekt eller lokasjon",
    "countryCode": "Lands- eller regionskode(r)",
    "countryCodeEg": "f.eks. ",
    "countryCodeHint": "Hvis du lar dette feltet stå tomt, søkes det i alle land og regioner",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Søk kun i gjeldende kartutstrekning",
    "zoomScale": "Zoomskala",
    "locatorUrl": "Geokoder-URL",
    "locatorName": "Geokodernavn",
    "locatorExample": "Eksempel",
    "locatorWarning": "Denne versjonen av geokodingstjenesten støttes ikke. Widgeten støtter versjon 10.0 og nyere av geokodingstjenesten.",
    "locatorTips": "Forslag er ikke tilgjengelige fordi geokodingstjenesten ikke har støtte for forslag.",
    "layerSource": "Lagkilde",
    "setLayerSource": "Angi lagkilde",
    "setGeocoderURL": "Angi geokoder-URL",
    "searchLayerTips": "Forslag er ikke tilgjengelige, fordi featuretjenesten ikke har støtte for paginering.",
    "placeholder": "Plassholdertekst",
    "searchFields": "Søkefelter",
    "displayField": "Visningsfelt",
    "exactMatch": "Nøyaktig treff",
    "maxSuggestions": "Maks. antall forslag",
    "maxResults": "Maks. antall resultater",
    "enableLocalSearch": "Aktiver lokalt søk",
    "minScale": "Minste målestokk",
    "minScaleHint": "Når kartmålestokken er større enn denne målestokken, brukes lokalt søk",
    "radius": "Radius",
    "radiusHint": "Angir radiusen for et område rundt det gjeldende midtpunktet i kartet som brukes til å styrke rangeringen til geokodingskandidater, slik at kandidater nærmest lokasjonen returneres først",
    "setSearchFields": "Angi søkefelter",
    "set": "Angi",
    "invalidUrlTip": "URL-en ${URL} er ugyldig eller ikke tilgjengelig.",
    "invalidSearchSources": "Ugyldige søkekildeinnstillinger"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Fyll inn nødvendige felter",
    "bufferDistanceFieldsErrorMsg": "Angi gyldige verdier",
    "invalidSearchToleranceErrorMsg": "Angi en gyldig verdi for søketoleranse",
    "atLeastOneCheckboxCheckedErrorMsg": "Ugyldig konfigurasjon",
    "noLayerAvailableErrorMsg": "Ingen lag tilgjengelig",
    "layerNotSupportedErrorMsg": "Ikke støttet ",
    "noFieldSelected": "Bruk redigeringsfunksjonen til å velge felt til analyser.",
    "duplicateFieldsLabels": "Duplikat etikett \"${labelText}\" lagt til for: \"${itemNames}\"",
    "noLayerSelected": "Velg minst ett lag til analyser",
    "errorInSelectingLayer": "Kan ikke fullføre operasjonen med å velge lag. Prøv på nytt.",
    "errorInMaxFeatureCount": "Angi en gyldig maksimumsverdi for antall geoobjekter til analyser."
  }
});