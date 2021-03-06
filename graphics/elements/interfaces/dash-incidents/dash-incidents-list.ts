import {Incident} from '../../../../src/types/schemas/victorOps%3Aincidents';

const {customElement, property} = Polymer.decorators;

/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
@customElement('dash-incidents-list')
export default class DashIncidentsListElement extends Polymer.MutableData(Polymer.Element) {
	@property({type: Array})
	incidents: Incident[];
}
