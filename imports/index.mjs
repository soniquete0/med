
import Ajv from 'ajv';
import gql from 'graphql-tag';
import http from 'apollo-link-http';
import ca from 'apollo-cache-inmemory';
import doctors from './doctors';
import fetch from 'node-fetch';
import urli from  'urlize';

import apollo from 'apollo-client';
import * as context from 'apollo-link-context';

const { ApolloClient } = apollo;
const { HttpLink } = http;
const { InMemoryCache } = ca;
const { urlize } = urli;

const cache = new InMemoryCache();

// console.log(ApolloClient);
const date = new Date();
console.log(date);
const httpLink = new HttpLink({ uri: 'https://visionary.mediconas.cz/api/graphql', fetch: fetch });

const GET_OUTDATED = gql`
  query datasourceItems($date: DateTime) {
    datasourceItems(where:{updatedAt_lt: $date}) {
      id
      slug
      createdAt
      updatedAt
    }
  }
`;

const authLink = context.default.setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UQTVRVVJDTlVWRk1ERXdPRE5HTlRBd1FqSTRORGd4TlRRMlFqTkJOMFF4TWtFM056YzNNUSJ9.eyJpc3MiOiJodHRwczovL2ZveGVyMzYwLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YzgxMTU0NTZkM2Q3MzJlNmFhOWQ2YjgiLCJhdWQiOlsiZm94ZXIzNjAtc2VydmVyIiwiaHR0cHM6Ly9mb3hlcjM2MC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTU5ODE2MTIyLCJleHAiOjE1NTk5MDI1MjIsImF6cCI6IkFEMjZwUzFyVG42ZEhjNkRPbVVoeFE5MDRPM2xHN2JzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.s4mxsB2VypN6WeRRvO8LU_TEfP05FEnK950t0Rc0jeHqaDOta091Lq3GYTQ54KfIapbGV71nCM-ukd5pVJ3EYscDF0o_yR-epETooRRwuTdMiEWxPKM-uTFLqnKWfpChWyMnpnnpacqmdWk-VK3b04pGWYYt_sloiWLPUbIWtlnYSfOtg2b4e7_bTRWGawB5oj7BsAJvwKZqB_M6YNUxmsfzg_H4nxosqiVN0DesvNxsH2omFky6cPuJdUa1uh9Z3vRU6AyWL402zO6qKTY1k0cOh69lc5RNYIPXg-tegRqQk9bcIW59cBG2_6pIn3xOqRPEc8xuuEBZtg0IJPdC0A'
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

// tslint:disable-next-line:typedef
const createNewItem =  function (datasource, data) {
  const slug = urlize(datasource.slug
    .map(p => 
      p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
    )
    .join('-').toLowerCase());

  return client.mutate({
    mutation: CREATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug: slug,
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

  return client.mutate({
    mutation: UPDATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug,
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
const deleteItem = function (id) {
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
            doctor.expertises = [doctor.expertises.reduce(
              (acc, v) =>  {
                if (!acc) {
                  return v;
                }

                return ({
                  id: [acc.id, v.id].join(', '),
                  code: [acc.code, v.code].join(', '),
                  name: [acc.name, v.name].join(', ')
                });
              },                                      
              null)];

            const transformedDoctor = { doctorPersonalInformation: {
              ...doctor,
              order: `${doctor.profession.id === 16 ? 'A' : 'N'} ${doctor.lastName} ${doctor.firstName}`,
            }, nurses };
            
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
            console.log(`Updating ${transformedDoctor.doctorPersonalInformation.order}`);
            if (!existingDoctorItem) {
              return createNewItem(datasource, transformedDoctor)
                .then(() => setTimeout(() => Promise.resolve(), 2000));
            }
            return updateItem(datasource, existingDoctorItem.id, transformedDoctor)
              .then(() => setTimeout(() => Promise.resolve(), 2000));

          }).catch((err) => { console.log(err); process.exit(); });
        // tslint:disable-next-line:align
        }, Promise.resolve())
        .then(() => {
          return client.query({
            query: GET_OUTDATED,
            variables: {
              date,
            }
          });
        })
        .then((outdated) => {
          if (outdated && outdated.data && outdated.data.datasourceItems) {

            return outdated.data.datasourceItems.reduce((result, item) => {
              return result.then(
                (r) => {
                  console.log(`Deleting ${item.slug}`);
                  return deleteItem(item.id)
                    .then(() => setTimeout(() => Promise.resolve(), 2000));
                }).catch((err) => { console.log(err); });
              // tslint:disable-next-line:align
              }, Promise.resolve());
          }
        }).catch((err) => console.error(err.result.errors));
        
    } catch (e) {
      console.log('insertion error', e);
    }
  })();
