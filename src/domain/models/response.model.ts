export default class AppResponse<T> {
  message: string;
  data: T;
  ok: boolean = true;
  readonly errors: string[];

  constructor() {}

  addInternalError(errorMessage: string) {
    this._addError({ message: 'Data Input Error', errorMessage });
  }

  addDataInputError(errorMessage: string) {
    this._addError({ message: 'Data Input Error', errorMessage });
  }

  private _addError({ errorMessage, message }) {
    this.errors.push(errorMessage);
    this.ok = false;
    this.message = message;
  }
}
