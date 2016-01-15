import DS from 'ember-data';

var API = 'api/1';
var HOST = 'http://localhost:8080';
var SERVICE = '/admin/api';
var sep = '/';

export default DS.RESTAdapter.extend({
  host: HOST,
  needs: ['application'],
  namespace: API,

  buildURL: function (type, id, snapshot, requestType) {
    var resolvedType = this.pathForType(type);

    if (resolvedType === 'test' && requestType === 'findAll') {
      return SERVICE + sep + 'tenants';
    } else if (resolvedType === 'tenants' && requestType === 'updateRecord') {
      return SERVICE + sep + 'tenants';
    } else {
      return this._super(type, id);
    }
  }
});
/*
export default DS.ActiveModelAdapter.extend({
    needs: ['application'],
    namespace: API,

  	buildURL: function (type, id, snapshot, requestType) {
  		var resolvedType = this.pathForType(type);

      if (resolvedType === 'tenants' && requestType === 'createRecord') {
        return SERVICE + sep + 'tenants';
      } else if (resolvedType === 'tenants' && requestType === 'updateRecord') {
        return SERVICE + sep + 'tenants';
      } else if (resolvedType === 'tenants' && requestType === 'findAll') {
        return SERVICE + sep + 'tenants';
      } else if (resolvedType === 'tenants' && requestType === 'deleteRecord') {
        return SERVICE + sep + 'tenants' + sep + snapshot.id;
      } else if (resolvedType === 'tenant_admins' && requestType === 'find') {
        return SERVICE + sep + "tenants" + sep + snapshot.belongsTo('tenant', { id: true }) + sep + "admins" + sep  + snapshot.id;
      } else {
  			return this._super(type, id);
  		}
  	}
});
*/
