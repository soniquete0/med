
import Ajv from 'ajv';
import gql from 'graphql-tag';
import http from 'apollo-link-http';
import ca from 'apollo-cache-inmemory';
import doctors from './doctors';
import fetch from 'node-fetch';
import urli from  'urlize';

import apollo from 'apollo-client';

const { ApolloClient } = apollo;
const { HttpLink } = http;
const { InMemoryCache } = ca;
const { urlize } = urli;

const cache = new InMemoryCache();

console.log(ApolloClient);

const httpLink = new HttpLink({ uri: 'https://visionary.mediconas.cz/api/graphql', fetch: fetch });

const client = new ApolloClient({
  link: httpLink,
  cache
}); 

const ajv = new Ajv();

const DATASOURCE_ID = "cjrkew3eu02gp0d71xoi0i5em";

const DATASOURCE = gql`
  query datasource($id: ID!) {
    datasource(where: { id: $id }) {
      id
      type
      schema
      slug
      datasourceItems {
        id
        slug
        content
      }
    }
  }
`;

const CREATE_DATASOURCE_ITEM = gql`
  mutation createDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
    createDatasourceItem(
      data: {
        content: $content,
        slug: $slug,
        datasource: {
          connect: {
            id: $id
          }
        },
      }
    ) {
      id
      slug
      content
    }
  }
`;

const UPDATE_DATASOURCE_ITEM = gql`
  mutation updateDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
    updateDatasourceItem(
      data: {
        content: $content,
        slug: $slug
      },
      where: {
        id: $id
      }
    ) {
      id
      slug
      content
    }
  }
`;

const DELETE_DATASOURCE_ITEM = gql`
  mutation deleteDatasourceItem($id: ID!) {
    deleteDatasourceItem(where: { id: $id }) {
      id
    }
  }
`;

const getUniqueSlug = (datasource, slug, index, datasourceItemId) => {
  // tslint:disable-next-line:max-line-length
  if (datasource.datasourceItems.some(item => item.slug === `${slug}${(index > 0 ? `-${index}` : '')}` && datasourceItemId !== item.id)) {
    index++;
    return getUniqueSlug(datasource, slug, index);
  } else {
    return `${slug}${(index > 0 ? `-${index}` : '')}`;
  }
};

// tslint:disable-next-line:typedef
const createNewItem =  function (datasource, data) {
  const slug = urlize(datasource.slug
    .map(p => 
      p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
    )
    .join('-').toLowerCase());

  const uniqueSlug = getUniqueSlug(datasource, slug, 0);
  return client.mutate({
    mutation: CREATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug: uniqueSlug,
      id: datasource.id,
    },
    // tslint:disable-next-line:no-shadowed-variable
    update: (cache, { data: { createDatasourceItem } }) => {
      datasource = { 
        ...datasource,
        datasourceItems: [
          ...datasource.datasourceItems,
          createDatasourceItem
        ]
      };
    }
  });
};

// tslint:disable-next-line:typedef
const updateItem = function (datasource, id, data) {
  const slug = urlize(datasource.slug
    .map(p => 
      p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
    )
    .join('-').toLowerCase());

  const uniqueSlug = getUniqueSlug(datasource, slug, 0);
  return client.mutate({
    mutation: UPDATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug: uniqueSlug,
      id,
    },
    // tslint:disable-next-line:no-shadowed-variable
    update: (cache, { data: { updateDatasourceItem } }) => {
      datasource = { 
        ...datasource,
        datasourceItems: [
          ...datasource.datasourceItems.map((datasourceItem) => {
            if (datasourceItem.id === updateDatasourceItem.id) { return updateDatasourceItem; }
            return datasourceItem;
          }),
        ]
      };
    }
  });
};

// tslint:disable-next-line:typedef
const deleteItem = function (datasource, id) {
  return client.mutate({
    mutation: DELETE_DATASOURCE_ITEM,
    variables: {
      id,
    }
  });
};

  // tslint:disable-next-line:align
  const removeEmpty = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        removeEmpty(obj[key]);
      } else if (obj[key] == null) {
        delete obj[key];
      }
    });
  };
  // tslint:disable-next-line:align
  (async () => {

    const { data: { datasource }} = await client.query({ 
      query: DATASOURCE,
      variables: {
        id: DATASOURCE_ID
      }
    });

    try {
      return doctors.reduce((result, doctor) => {
        return result.then(
          (r) => {
            // const validate = ajv.compile(datasource.schema);
            const { nurses } = doctor;
            delete doctor.nurses;
            const transformedDoctor = { doctorPersonalInformation: { ...doctor }, nurses };
            // const valid = validate(transformedDoctor);
            const existingDoctorItem = datasource.datasourceItems
              .find(item => item.content.doctorPersonalInformation.id === doctor.id);

            // if (!valid) {
            //   console.log(doctor.firstName, doctor.lastName, doctor.mobilePhone, JSON.stringify(validate.errors));
            //   if (existingDoctorItem) {
            //     console.log('Dropping from database - not valid item');
            //     return deleteItem(datasource, existingDoctorItem.id);
            //   }
              
            //   return Promise.resolve();
            // }

            // tslint:disable-next-line:max-line-length
            console.log(`Updating ${doctor.firstName} ${doctor.lastName}`);
            if (!existingDoctorItem) {
              return createNewItem(datasource, transformedDoctor)
                .then(() => setTimeout(() => Promise.resolve(), 2000));
            }
            return updateItem(datasource, existingDoctorItem.id, transformedDoctor)
              .then(() => setTimeout(() => Promise.resolve(), 2000));

          }).catch((err) => { console.log(err); process.exit(); });
        // tslint:disable-next-line:align
        }, Promise.resolve());
    } catch (e) {
      console.log('insertion error', e);
    }
  })();
