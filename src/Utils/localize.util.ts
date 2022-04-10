import { Language } from "../Types";

export class Localizator {
	_language: Language

	constructor(language: Language) {
		this._language = language
	}

	localize = (any: { ru: string, en: string }) => any[this._language]
}