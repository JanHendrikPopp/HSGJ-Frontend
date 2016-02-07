import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	primaryKey: "id",
	attrs: {
		admins: { embedded: 'always' }
	},
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		var model = payload.modelType;
		if (model) {
			var test = {};
			test[model] = payload;
			payload = test;
		}
		if (payload._embedded) {
			if (payload._embedded.tenants) {
				payload.tenants = payload._embedded.tenants;
				delete payload._embedded;
				delete payload._links;
			} else if (payload._embedded.inventories) {
				payload.inventories = payload._embedded.inventories;
				delete payload._embedded;
				delete payload._links;
			} else if (payload._embedded.reservations) {
				payload.reservations = payload._embedded.reservations;
				delete payload._embedded;
				delete payload._links;
			} else if (payload._embedded.invoices) {
				payload.invoices = payload._embedded.invoices;
				delete payload._embedded;
				delete payload._links;
			}
		}

		return this._super(store, primaryModelClass, payload, id, requestType);
	},
	serialize: function(snapshot) {
		var options = options || {};
    options.includeId = true;
		var json = this._super(snapshot, options);
    return json;
  },
	serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  },
	/*
  keyForAttribute: function(attr, method) {
    return Ember.String.camelize(attr);
  },
	modelNameFromPayloadKey: function(payloadKey) {
		if (payloadKey === 'tenantAdmin') {
      //return this._super(payloadKey.replace('tenantAdmin', 'user'));
			return this._super(payloadKey);
    } else {
     return this._super(payloadKey);
    }
  },
	payloadKeyFromModelName: function(modelName) {
    if(modelName === 'tenant-admin') {
			return 'user';
		} else if(modelName === 'reseller-admin') {
			return 'user';
		}	else {
			return modelName;
		}
  },
	normalizePayload: function(type, payload) {
    if (type.hasOwnProperty("tenant")) {
			var uuid = type.tenant.uuid;
			type.tenant.links = { "users": "/serviceportal/api/tenants/"+uuid+"/users" };
    }
		return this._super(type, payload);
	},
	serialize: function(snapshot) {
		var options = options || {};
    options.includeId = true;
		var json = this._super(snapshot, options);
    return json;
  },
	serializeBelongsTo: function(snapshot, json, relationship) {
		if(snapshot.modelName === 'tenant-admin') {
			if(relationship.key != 'tenant') {
				return this._super(snapshot, json, relationship);
			}
		} else if(snapshot.modelName === 'user') {
			if(relationship.key != 'tenant') {
				return this._super(snapshot, json, relationship);
			}
		} else {
			return this._super(snapshot, json, relationship);
		}
  },
	extractSingle: function(store, type, payload) {
		var typeKey = type.typeKey;
		if (typeKey === "tenantAdmin" && payload['user']) {
			payload[typeKey] = payload['user'];
			delete payload['user'];
		}
		if (typeKey === "resellerAdmin" && payload['user']) {
			payload[typeKey] = payload['user'];
			delete payload['user'];
		}
		return this._super(store, type, payload);
	}
	*/
});
