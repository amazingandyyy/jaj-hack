define({
  "layersPage": {
    "title": "Selezionare un modello per creare le feature",
    "generalSettings": "Impostazioni generali",
    "layerSettings": "Impostazioni layer",
    "editDescription": "Fornire testo di visualizzazione per il pannello di modifica",
    "editDescriptionTip": "Questo testo viene visualizzato sopra il selettore dei modelli, lasciare vuoto in assenza di testo.",
    "promptOnSave": "Richiedere di salvare modifiche non salvate quando il modulo viene chiuso o passato al record successivo.",
    "promptOnSaveTip": "Visualizzare un prompt quando l'utente fa clic su Chiudi o passare al successivo record modificabile quando la feature corrente contiene modifiche non salvate.",
    "promptOnDelete": "Richiedere la conferma durante la cancellazione di un record.",
    "promptOnDeleteTip": "Visualizzare un prompt quando l'utente fa clic su Cancella per confermare l'azione.",
    "removeOnSave": "Rimuove la feature dalla selezione al salvataggio.",
    "removeOnSaveTip": "Opzione per rimuovere la feature dalla selezione impostata quando il record viene salvato. Se è il solo record selezionato, il pannello viene riportato alla pagina del modello.",
    "useFilterEditor": "Utilizza filtro modello di feature",
    "useFilterEditorTip": "Opzione per utilizzare il selettore Filtra modello che offre la possibilità di visualizzare un modello layer o ricercare modelli in base al nome.",
    "listenToGroupFilter": "Applica valori ai filtri dal widget Filtro gruppo ai campi preimpostati",
    "listenToGroupFilterTip": "Quando un filtro viene applicato nel widget Filtro gruppo, applicare il valore a un campo corrispondente nell'elenco dei valori preimpostati.",
    "keepTemplateActive": "Mantieni attivo il modello selezionato",
    "keepTemplateActiveTip": "Quando viene visualizzato il selettore dei modelli, se un modello è stato selezionato in precedenza, selezionarlo nuovamente.",
    "geometryEditDefault": "Abilita la modifica della geometria per impostazione predefinita",
    "autoSaveEdits": "Consente di salvare la modifica automaticamente",
    "layerSettingsTable": {
      "allowDelete": "Consenti cancellazione",
      "allowDeleteTip": "Opzione per consentire all'utente di cancellare una feature; disabilitata se il layer non supporta la cancellazione",
      "edit": "Modificabile",
      "editTip": "Opzione per includere il layer nel widget",
      "label": "Layer",
      "labelTip": "Nome del layer come definito nella mappa",
      "update": "Disabilita modifica geometria",
      "updateTip": "Opzione per disabilitare la possibilità di spostare la geometria dopo che è stata posizionata o spostare la geometria su una feature esistente",
      "allowUpdateOnly": "Solo aggiornamento",
      "allowUpdateOnlyTip": "Opzione per consentire solo la modifica delle feature, selezionata per impostazione predefinita e disabilitata se il layer non supporta la creazione di nuove feature",
      "fields": "Campi",
      "fieldsTip": "Modificare i campi da modificare e definire attributi Smart",
      "description": "Descrizione",
      "descriptionTip": "Opzione per immettere testo da visualizzare sopra la pagina dell'attributo."
    },
    "editFieldError": "Modifiche campo e attributi Smart non sono disponibili per layer non modificabili",
    "noConfigedLayersError": "Smart Editor richiede uno o più layer modificabili"
  },
  "editDescriptionPage": {
    "title": "Definire il testo panoramica attributo per <b>${layername}</b> "
  },
  "fieldsPage": {
    "title": "Configurare i campi per <b>${layername}</b>",
    "description": "Utilizzare la colonna Preimpostato per consentire all'utente di immettere un valore prima della creazione di una nuova feature. Utilizzare il pulsante Modifica azioni per attivare attributi Smart su un layer. Gli attributi Smart possono richiedere, nascondere o disabilitare un campo in base ai valori di altri campi.",
    "fieldsNotes": "* è un campo obbligatorio. Se si deseleziona Visualizza per questo campo, e il modello di modifica non compila il valore del campo, non sarà possibile salvare un nuovo record.",
    "fieldsSettingsTable": {
      "display": "Visualizza",
      "displayTip": "Determinare se il campo è non visibile",
      "edit": "Modificabile",
      "editTip": "Verificar se il campo è presente nel modulo attributo",
      "fieldName": "Nome",
      "fieldNameTip": "Nome del campo definito nel database",
      "fieldAlias": "Alias",
      "fieldAliasTip": "Nome del campo definito nella mappa",
      "canPresetValue": "Preimpostato",
      "canPresetValueTip": "Opzione per visualizzare il campo nell'elenco dei campi preimpostati e consentire all'utente di impostare il valore prima della modifica",
      "actions": "Azioni",
      "actionsTip": "Modificare l'ordine dei campi o impostare attributi Smart"
    },
    "smartAttSupport": "Gli attributi Smart non sono supportati su campi di database obbligatori"
  },
  "actionPage": {
    "title": "Configurare le azioni attributo Smart per <b>${fieldname}</b>",
    "description": "Le azioni sono sempre disattivate a meno che non venga specificato il criterio in base al quale vengono attivate. Le azioni vengono elaborate in ordine e verrà attivata una sola azione per campo. Utilizzare il pulsante Modifica criterio per definire il criterio.",
    "actionsSettingsTable": {
      "rule": "Azione",
      "ruleTip": "Azione eseguita quando il criterio è soddisfatto",
      "expression": "Espressione",
      "expressionTip": "L'espressione risultante in formato SQL dei criteri definiti",
      "actions": "Criteri",
      "actionsTip": "Modificare l'ordine della regola e definire i criteri quando viene attivata"
    },
    "actions": {
      "hide": "Nascondi",
      "required": "Richiesto",
      "disabled": "Disabilitato"
    }
  },
  "filterPage": {
    "submitHidden": "Inviare dati attributo per questo campo anche quando è nascosto?",
    "title": "Configura espressione per la regola ${action}",
    "filterBuilder": "Impostare azione su campo quando il record corrisponde a ${any_or_all} delle seguenti espressioni",
    "noFilterTip": "Utilizzando gli strumenti sottostanti, definire l'istruzione per quando l'azione è attiva."
  }
});