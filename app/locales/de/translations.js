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

    "modals": {
      "general": {
        "close": "schließen"
      },
      "feature": {
        "headline": "Bald verfügbar",
        "message": "Diese Funktion ist derzeit noch nicht verfügbar. Mit der nächsten Version wird diese Funktion wahrscheinlich freigeschaltet."
      }
    },

    "model": {
      "attribute": {
        "title": {
          "tenant": {
            "id": "Id",
            "gender": "Anrede",
            "active": "Status",
            "firstname": "Vorname",
            "lastname": "Nachname",
            "birthday": "Geburtstag",
            "street": "Straße Hausnummer",
            "postcode": "Postleitzahl",
            "country": "Land"
          },
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

    "reservation": {
      "list": {
        "headline": "Übersicht Reservierungen"
      }
    },
    "invoice": {
      "list": {
        "headline": "Übersicht Rechnungen"
      }
    }
};
