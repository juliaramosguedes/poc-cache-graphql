class SchemaCRUDResolvers {
  constructor(domain) {
    this.domain = domain;
    this.domainPlural =
      domain.slice(-1) === 'y' ? `${domain.slice(0, -1)}ies` : `${domain}s`;
  }

  Mutation(schema, hasPublication = false) {
    const mutation = {
      [`create${this.domain}`](parent, data, { dataSources }) {
        return dataSources[schema].create(data);
      },
      [`update${this.domain}`](parent, data, { dataSources }) {
        return dataSources[schema].update(data);
      },
      [`delete${this.domain}`](parent, data, { dataSources }) {
        return dataSources[schema].delete(data).then(() => data.id);
      },
    };

    if (hasPublication) {
      mutation[`publish${this.domain}`] = (parent, data, { dataSources }) => {
        return dataSources[schema].publish(data);
      };

      mutation[`suspend${this.domain}`] = (parent, data, { dataSources }) => {
        return dataSources[schema].suspend(data);
      };
    }

    return mutation;
  }

  Query(schema) {
    return {
      [`get${this.domain}`](parent, data, { dataSources }) {
        return dataSources[schema].get(data);
      },
      [`getMany${this.domainPlural}`](parent, data, { dataSources }) {
        return dataSources[schema].getMany(data).then((result) => result.data);
      },
      [`list${this.domain}`](parent, data, { dataSources }) {
        return dataSources[schema].list(data);
      },
    };
  }
}

module.exports = SchemaCRUDResolvers;
