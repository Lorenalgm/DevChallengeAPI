const { Container: ErrorEnum } = require('../enums/ErrorEnum');

class Container {
  constructor() {
    this.registrations = new Map();
  }

  clearRegistrations() {
    this.registrations.clear();
  }

  registerSingleton(token, Provider) {
    Container.isTokenValid(token);
    this.isTokenUnique(token);
    Container.isClassValid(Provider);

    this.registrations.set(token, new Provider());
  }

  registerInstance(token, providerInstance) {
    Container.isTokenValid(token);
    this.isTokenUnique(token);
    Container.isClassInstanceValid(providerInstance);

    this.registrations.set(token, providerInstance);
  }

  resolve(tokens, Provider) {
    Container.isClassValid(Provider);

    const tokensArray = Container.normalizeTokens(tokens);

    const dependencies = tokensArray.map(token => {
      Container.isTokenValid(token);

      if (!this.registrations.has(token)) {
        throw Error(ErrorEnum.INEXISTENT_ENTRY);
      }

      const constructorDependency = this.registrations.get(token);
      return constructorDependency;
    });

    const ProviderInstance = new Provider(...dependencies);

    return ProviderInstance;
  }

  /*
  In this class whenever a method receives the tokens parameter,
  that tokens can be a string or an array of strings.
  So this method normalizes token when it is a string by converting
  it into an array to guarantee that tokens is always compatible with
  Array methods.
  */
  static normalizeTokens(tokens) {
    if (tokens.constructor === Array) {
      return tokens;
    }
    return [tokens];
  }

  isTokenUnique(token) {
    if (this.registrations.has(token)) {
      throw Error(ErrorEnum.ENTRY_ALREADY_EXISTS);
    }
  }

  static isTokenValid(token) {
    if (!token) {
      throw Error(ErrorEnum.TOKEN_NOT_PROVIDED);
    }

    if (typeof token !== 'string') {
      throw Error(ErrorEnum.TOKEN_INVALID_TYPE);
    }
  }

  static isClassValid(Class) {
    if (!Class) {
      throw Error(ErrorEnum.CLASS_NOT_PROVIDED);
    }

    if (typeof Class !== 'function') {
      throw Error(ErrorEnum.CLASS_INVALID_TYPE);
    }
  }

  static isClassInstanceValid(classInstance) {
    if (!classInstance) {
      throw Error(ErrorEnum.INSTANCE_NOT_PROVIDED);
    }

    if (typeof classInstance !== 'object' || classInstance === null) {
      throw Error(ErrorEnum.INSTANCE_INVALID_TYPE);
    }
  }
}

module.exports = Container;
