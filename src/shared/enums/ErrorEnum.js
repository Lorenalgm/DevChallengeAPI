const ErrorEnum = {
  Container: {
    TOKEN_NOT_PROVIDED:
      'A token must be provided when registering a singleton or a class instance.',
    TOKEN_INVALID_TYPE: 'The provided token must be of the string type',
    CLASS_NOT_PROVIDED:
      'A class must be provided to register a new instance of it as a singleton.',
    CLASS_INVALID_TYPE:
      'The provider must be a class that has a constructor that can be instantiated',
    INSTANCE_NOT_PROVIDED:
      'A class instance must be provided to register it as an instance.',
    INSTANCE_INVALID_TYPE:
      'The provider must a class that is already instantiated.',
    ENTRY_ALREADY_EXISTS: 'An entry for the provided token already exists.',
    INEXISTENT_ENTRY: 'An entry with the provided token does not exist.'
  }
};

module.exports = ErrorEnum;
