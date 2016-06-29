import algoliasearch from 'algoliasearch';

const credentials = {
  applicationID: 'TF0WPJCANT',
  key: 'd42a7c65e942f878fe96d25b840672d4'
};

class AlgoliaClient {
  static index(indexName) {
    const client = algoliasearch(credentials.applicationID, credentials.key);
    return client.initIndex(indexName);
  }
}

export default AlgoliaClient;
