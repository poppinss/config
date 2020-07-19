/*
 * @adonisjs/config
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { requireAll } from '@poppinss/utils'
import { IocContract } from '@adonisjs/fold'

export default class ConfigProvider {
	constructor(protected container: IocContract) {}

	public register() {
		this.container.singleton('Adonis/Core/Config', () => {
			const app = this.container.use('Adonis/Core/Application')

			const { Config } = require('../src/Config')
			return new Config(requireAll(app.configPath()))
		})
	}
}
