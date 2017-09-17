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
    "standardUnit": "Unité standard",
    "metricUnit": "Unité métrique"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyse",
    "selectAnalysisLayerLabel": "Sélectionner des couches d'analyse",
    "addLayerLabel": "Ajouter des couches",
    "noValidLayersForAnalysis": "Couches valides introuvables sur la carte web sélectionnée.",
    "noValidFieldsForAnalysis": "Champs valides introuvables sur la carte web sélectionnée. Supprimez la couche sélectionnée.",
    "addLayersHintText": "Astuce : sélectionnez les couches et les champs à analyser et afficher dans le rapport",
    "addLayerNameTitle": "Nom de la couche",
    "addFieldsLabel": "Ajouter un champ",
    "addFieldsPopupTitle": "Sélectionner des champs",
    "addFieldsNameTitle": "Noms de champs",
    "aoiToolsLegendLabel": "Outils AOI",
    "aoiToolsDescriptionLabel": "Activer les outils pour créer des zones d'intérêt et spécifier leurs étiquettes",
    "placenameLabel": "Nom de lieu",
    "drawToolsLabel": "Outils de dessin",
    "uploadShapeFileLabel": "Charger un fichier de formes",
    "coordinatesLabel": "Coordonnées",
    "coordinatesDrpDwnHintText": "Astuce : sélectionnez une unité pour afficher les parcours entrés",
    "coordinatesBearingDrpDwnHintText": "Astuce : sélectionnez une orientation pour afficher les parcours entrés",
    "allowShapefilesUploadLabel": "Autoriser le chargement des fichiers de formes pour l'analyse",
    "areaUnitsLabel": "Afficher les surfaces et longueurs dans",
    "allowShapefilesUploadLabelHintText": "Astuce : affichez \"Charger un fichier de formes dans Analyse\" dans l'onglet Rapport",
    "maxFeatureForAnalysisLabel": "Nombre d'entités maximal pour l'analyse",
    "maxFeatureForAnalysisHintText": "Astuce : définissez le nombre d'entités maximal pour l'analyse",
    "searchToleranceLabelText": "Tolérance de recherche (pieds)",
    "searchToleranceHint": "Astuce : la tolérance de recherche est utilisée uniquement lors de l'analyse d'entrées de point et de ligne"
  },
  "downloadTab": {
    "downloadLegend": "Paramètres de téléchargement",
    "reportLegend": "Paramètres du rapport",
    "downloadTabLabel": "Télécharger",
    "syncEnableOptionLabel": "Couches d'entités",
    "syncEnableOptionHint": "Astuce : à utiliser pour télécharger les informations des entités croisant la zone d'intérêt dans les formats indiqués.",
    "syncEnableOptionNote": "Remarque : les services d'entités à synchronisation activée sont requis pour l'option Géodatabase fichier.",
    "extractDataTaskOptionLabel": "Tâche Exporter les données du service de géotraitement",
    "extractDataTaskOptionHint": "Astuce : utilisez une tâche publiée Exporter les données du service de géotraitement pour télécharger les entités qui croisent la zone d'intérêt dans les formats Géodatabase fichier et Fichier de formes.",
    "cannotDownloadOptionLabel": "Désactiver le téléchargement",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nom de la couche",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Géodatabase fichier",
      "allowDownloadLabel": "Autoriser le téléchargement"
    },
    "setButtonLabel": "Définir",
    "GPTaskLabel": "Spécifier l'URL du service de géotraitement",
    "printGPServiceLabel": "URL du service d'impression",
    "setGPTaskTitle": "Spécifier l'URL du service de géotraitement requise",
    "logoLabel": "Logo",
    "logoChooserHint": "Astuce : cliquez sur une icône d'image pour modifier l'image",
    "footnoteLabel": "Note de bas de page",
    "columnTitleColorPickerLabel": "Couleur des titres de colonnes",
    "reportTitleLabel": "Titre du rapport",
    "errorMessages": {
      "invalidGPTaskURL": "Service de géotraitement non valide. Sélectionnez un service de géotraitement contenant la tâche Exporter les données.",
      "noExtractDataTaskURL": "Sélectionnez un service de géotraitement contenant la tâche Exporter les données."
    }
  },
  "generalTab": {
    "generalTabLabel": "Général",
    "tabLabelsLegend": "Etiquettes de volets",
    "tabLabelsHint": "Astuce : spécifiez des étiquettes",
    "AOITabLabel": "Volet Zone d'intérêt",
    "ReportTabLabel": "Volet Rapport",
    "bufferSettingsLegend": "Paramètres de la zone tampon",
    "defaultBufferDistanceLabel": "Distance de la zone tampon par défaut",
    "defaultBufferUnitsLabel": "Unités de zone tampon",
    "generalBufferSymbologyHint": "Astuce : définissez la symbologie à utiliser pour l'affichage des zones tampons autour des zones d'intérêt définies",
    "aoiGraphicsSymbologyLegend": "Symbologie des graphiques AOI",
    "aoiGraphicsSymbologyHint": "Astuce : définissez la symbologie à utiliser lors de la définition des zones d'intérêt (point, ligne et polygone)",
    "pointSymbologyLabel": "Point",
    "previewLabel": "Aperçu",
    "lineSymbologyLabel": "Ligne",
    "polygonSymbologyLabel": "Polygone",
    "aoiBufferSymbologyLabel": "Symbologie de zone tampon",
    "pointSymbolChooserPopupTitle": "Symbole d’adresse ou d’emplacement",
    "polygonSymbolChooserPopupTitle": "Sélectionner le symbole pour mettre le polygone en surbrillance",
    "lineSymbolChooserPopupTitle": "Sélectionner le symbole pour mettre en surbrillance la ligne",
    "aoiSymbolChooserPopupTitle": "Définir le symbole de la zone tampon"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Paramètres de la source de recherche",
    "searchSourceSettingTitle": "Paramètres de la source de recherche",
    "searchSourceSettingTitleHintText": "Ajoutez et configurez des services de géocodage ou des couches d’entités en tant que sources de recherche. Ces sources déterminent les éléments pouvant faire l’objet d’une recherche dans la zone de recherche",
    "addSearchSourceLabel": "Ajouter une source de recherche",
    "featureLayerLabel": "Couche d'entités",
    "geocoderLabel": "Géocodeur",
    "generalSettingLabel": "Paramètre général",
    "allPlaceholderLabel": "Texte d'espace réservé pour tout parcourir :",
    "allPlaceholderHintText": "Conseil : saisissez le texte à afficher en tant qu'espace réservé pendant la recherche dans toutes les couches et le géocodeur.",
    "generalSettingCheckboxLabel": "Afficher la fenêtre contextuelle de l'entité ou de l'emplacement trouvé",
    "countryCode": "Codes de pays ou de régions",
    "countryCodeEg": "par ex. ",
    "countryCodeHint": "Si cette valeur n'est pas renseignée, la recherche s'effectue dans tous les pays et toutes les régions",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Rechercher uniquement dans l'étendue de la carte actuelle",
    "zoomScale": "Echelle de zoom",
    "locatorUrl": "URL du géocodeur",
    "locatorName": "Nom du géocodeur",
    "locatorExample": "Exemple",
    "locatorWarning": "Cette version du service de géocodage n'est pas prise en charge. Le widget prend en charge le service de géocodage versions 10.0 et ultérieures.",
    "locatorTips": "Les suggestions ne sont pas disponibles, car le service de géocodage ne prend pas en charge la fonction de suggestion.",
    "layerSource": "Source de la couche",
    "setLayerSource": "Définir une source de couche",
    "setGeocoderURL": "Définir l'URL du géocodeur",
    "searchLayerTips": "Les suggestions ne sont pas disponibles, car le service d'entités ne prend pas en charge la fonction de pagination.",
    "placeholder": "Texte de l'espace réservé",
    "searchFields": "Champs de recherche",
    "displayField": "Champ d'affichage",
    "exactMatch": "Correspondance parfaite",
    "maxSuggestions": "Nombre maximal de suggestions",
    "maxResults": "Nombre maximum de résultats",
    "enableLocalSearch": "Activer la recherche locale",
    "minScale": "Echelle. min.",
    "minScaleHint": "Lorsque l'échelle de la carte est supérieure à cette échelle, la recherche locale est appliquée",
    "radius": "Rayon",
    "radiusHint": "Indique le rayon d'une surface autour du centre de la carte qui permet d'optimiser le classement des candidats de géocodage, afin que les plus proches de l'emplacement soient renvoyés en premier",
    "setSearchFields": "Définir les champs de recherche",
    "set": "Définir",
    "invalidUrlTip": "L’URL ${URL} est incorrecte ou inaccessible.",
    "invalidSearchSources": "Paramètres de source de recherche non valides"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Renseignez les champs obligatoires",
    "bufferDistanceFieldsErrorMsg": "Entrez des valeurs valides",
    "invalidSearchToleranceErrorMsg": "Entrez une valeur valide pour la tolérance de recherche",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuration non valide",
    "noLayerAvailableErrorMsg": "Aucune couche disponible",
    "layerNotSupportedErrorMsg": "Pas de prise en charge ",
    "noFieldSelected": "Utilisez l'action de mise à jour pour sélectionner les champs pour l'analyse.",
    "duplicateFieldsLabels": "Etiquette en double \"${labelText}\" ajoutée pour : \"${itemNames}\"",
    "noLayerSelected": "Sélectionnez au moins une couche pour l'analyse",
    "errorInSelectingLayer": "Impossible de terminer la sélection de la couche. Veuillez réessayer.",
    "errorInMaxFeatureCount": "Entrez un nombre d'entités maximal valide pour l'analyse."
  }
});