export default {
    "test": "Test",
    "navigation": {
      "inventories" : {
        "list": "Leihartikel anzeigens"
      },
      "reservations" : {
        "list": "Reservierungen anzeigen"
      },
      "invoices" : {
        "list": "Rechnungen anzeigen"
      },
      "data": {
        "head": "Daten"
      },
      "tenants" : {
        "list": "Kunden anzeigen"
      }
    },

    "validation": {
      "tenant": {
        "name.not.empty": "Der Name darf nicht leer sein.",
        "street.not.empty": "Die Straße darf nicht leer sein.",
        "postcode.not.empty": "Die Postleitzahl darf nicht leer sein.",
        "country.not.empty": "Das Land darf nicht leer sein.",
      }
    },

    "modals": {
      "error": {
        "save": {
          "default": {
            "title": "Speichern nicht erfolgreich",
            "message": "Der Vorgang konnte nicht erfolgreich abgeschlossen werden. Bitte versuchen sie es erneut oder wenden Sie sich an den Administrator."
          }
        }
      },
      "success": {
        "save": {
          "default": {
            "title": "Speichern erfolgreich",
            "message": "Der Speichervorgang wurde erfolgreich abgeschlossen."
          }
        }
      },
      "general": {
        "close": "schließen",
        "create.or.edit.headline": "Anlegen / Bearbeiten"
      },
      "model": {
        "tenant": {
          "save": "Kunde speichern"
        }
      },
      "feature": {
        "headline": "Bald verfügbar",
        "message": "Diese Funktion ist derzeit noch nicht verfügbar. Mit der nächsten Version wird diese Funktion wahrscheinlich freigeschaltet."
      }
    },

    "popover": {
      "optional": {
        "true": "Optionales Feld",
        "false": "Pflichtfeld"
      }
    },

    "model": {
      "attribute": {
        "tenant": {
          "id": {
            "title": "Id",
            "popover": "Bitte geben Sie eine Id an."
          },
          "active": {
            "title": "Status",
            "popover": "Bitte geben Sie einen Status an."
          },
          "name": {
            "title": "Name",
            "popover": "Bitte geben Sie einen Namen an."
          },
          "street": {
            "title": "Straße Hausnummer",
            "popover": "Bitte geben Sie eine Hausnummer an."
          },
          "postcode": {
            "title": "Postleitzahl",
            "popover": "Bitte geben Sie eine Postleitzahl an."
          },
          "country": {
            "title": "Land",
            "popover": "Bitte geben Sie ein Land an."
          }
        },
        "title": {
          "inventory": {
            "id": "Id",
            "name": "Name",
            "type": "Typ",
            "description": "Beschreibung",
            "price": "Preis",
            "color": "Farbe"
          },
          "reservation": {
            "id": "Id",
            "status": "Status",
            "start": "Start",
            "end": "Ende"
          },
          "invoice": {
            "id": "Id",
            "date": "Rechnungsdatum",
            "brutto": "Brutto",
            "netto": "Netto"
          },
        }
      }
    },

    "tenant": {
      "list": {
        "headline": "Übersicht Kunden"
      },
      "create": {
        "headline": "Kontakt anlegen"
      },
      "import": {
        "headline": "Kontakte imporieren"
      }
    },

    "inventory": {
      "list": {
        "headline": "Übersicht Leihartikel"
      }
    },

    "labels": {
      "active": "Aktiv",
      "deactive": "Deaktiv"
    }
};
