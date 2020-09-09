import DS from 'ember-data';
import NormalizeEmbeddedData from 'cookbook/mixins/normalize-embedded-data'

export default DS.RESTSerializer.extend(NormalizeEmbeddedData, {
});