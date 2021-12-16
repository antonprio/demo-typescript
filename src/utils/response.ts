export default class Response {
  #_status: number = 0;
  #_message: string = '';
  #_data: any;
  #_error: boolean = false;

  constructor(status: number, message: string, data: any, error: boolean = false) {
    this.#_status = status;
    this.#_message = message;
    this.#_data = data;
    this.#_error = error;
  }

  setStatus(value: number) {
    this.#_status = value;
  }

  getStatus() {
    return this.#_status;
  }

  setMessage(value: string) {
    this.#_message = value;
  }

  getMessage() {
    return this.#_message;
  }

  setData(value: any) {
    this.#_data = value;
  }

  getData() {
    return this.#_data;
  }

  setError(value: boolean) {
    this.#_error = value;
  }

  getError() {
    return this.#_error;
  }

  value() {
    return {
      status: this.#_status,
      message: this.#_message,
      error: this.#_error,
      data: this.#_data
    };
  }
}