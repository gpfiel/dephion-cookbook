import Mixin from '@ember/object/mixin'
import { typeOf, isNone } from '@ember/utils'
import { get } from '@ember/object'

export default Mixin.create({
  normalize(modelClass, resourceHash, prop) {
    modelClass.eachRelationship((key, relationshipMeta) => {
      let relationshipKey = this.keyForRelationship(key, relationshipMeta.kind, 'deserialize');
      if (resourceHash[relationshipKey] != null) {
        let data = null
        let relationshipHash = resourceHash[relationshipKey]
        if (relationshipMeta.kind === 'belongsTo') {
          if (typeOf(relationshipHash) === 'object') {
            this.get('store').pushPayload(relationshipMeta.type, {
              [relationshipMeta.type]: relationshipHash
            })
            data = get(relationshipHash, 'id')
          } else {
            data = relationshipHash
          }
        } else if (relationshipMeta.kind === 'hasMany') {
          if (!isNone(relationshipHash)) {
            data = []
            for (const item of relationshipHash) {
              if (typeOf(item) === 'object') {
                this.get('store').pushPayload(relationshipMeta.type, {
                  [relationshipMeta.type]: item
                })
                data.push(get(item, 'id'))
              } else {
                data.push(item)
              }
            }
          }
        }
        resourceHash[relationshipKey] = data
      }
    })
    return this._super(modelClass, resourceHash, prop);
  },
});