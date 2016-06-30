import algoliasearch from 'algoliasearch';

const credentials = {
  applicationID: 'TF0WPJCANT',
  key: '2d4d7ab0f3e897740abe17e65907fb91'
};

class AlgoliaClient {
  static index(indexName) {
    const client = algoliasearch(credentials.applicationID, credentials.key);
    return client.initIndex(indexName);
  }
}

export default AlgoliaClient;
