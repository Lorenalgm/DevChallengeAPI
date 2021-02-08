class Filtering {
  static getFilters(queryString, allowedFilters) {
    const properties = Object.keys(queryString);

    const filters = properties.reduce((filtersAcc, property) => {
      const isFilterAllowed = allowedFilters.includes(property);
      const isPropertyValueValid = !!queryString[property];

      if (isFilterAllowed && isPropertyValueValid) {
        return { ...filtersAcc, [property]: queryString[property] };
      }

      return { ...filtersAcc };
    }, {});

    return filters;
  }
}

module.exports = Filtering;
