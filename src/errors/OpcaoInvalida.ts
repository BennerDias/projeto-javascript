export class InvalidOptionError extends Error {
  constructor(message: string = "Opção inválida!") {
    super(message);
    this.name = "InvalidOptionError";
  }
}