import Random from '../../../../shared/lib/vendor/random';

window.addEventListener('load', () => {
	const {customElement, property} = Polymer.decorators;

	/**
	 * @customElement
	 * @polymer
	 */
	@customElement('atom-text-greeble')
	class AtomTextGreeble extends Polymer.Element {
		/**
		 * The number of characters this greeble should be in length.
		 */
		@property({type: Number})
		length: number = 15;

		/**
		 * How many times per second to update the text.
		 */
		@property({type: Number, observer: AtomTextGreeble.prototype._tickRateChanged})
		tickRate: number = 5;

		/**
		 * The set of characters from which to create the random strings.
		 */
		@property({type: String})
		characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		/**
		 * The text currently being shown.
		 */
		@property({type: String})
		text: string;

		@property({type: Array, computed: '_computeCharactersArray(characters)'})
		_charactersArray: string[];

		_tickInterval?: number;

		update() {
			let str = '';
			for (let i = 0; i < this.length; i++) { // tslint:disable-line:prefer-for-of
				str += Random.pick(Random.engines.browserCrypto, this._charactersArray);
			}

			if ((window as any).__SCREENSHOT_TESTING__) {
				str = new Array(this.length).fill('0').join('');
			}

			this.text = str;
		}

		_tickRateChanged(newVal: number) {
			if (this._tickInterval) {
				clearInterval(this._tickInterval);
			}

			this._tickInterval = window.setInterval(() => {
				this.update();
			}, 1000 / newVal);
		}

		_computeCharactersArray(characters: string) {
			return characters.split('');
		}
	}

	// This assignment to window is unnecessary, but tsc complains that the class is unused without it.
	(window as any).AtomTextGreeble = AtomTextGreeble;
});