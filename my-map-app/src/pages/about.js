import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  const { companyName, companyUrl, authorName, authorUrl, siteDescription } = useSiteMetadata();

  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content">
        <h1>Acerca de:</h1>
        Este proyecto no se hubiera podido llevar a cabo sin las colaboraciones Open Source de la Comunidad

        <h2>Gracias al creador del starter de Gatsby</h2>
        <p>
          <a href={authorUrl}>{ authorName }</a>
        </p>
        <p>
        <a href={companyUrl}>View on Github</a>
        </p>

        <h2> Gracias a Umap y a umap.openstreetmap.fr por alojar los mapas</h2>

        Créditos del fondo del mapa
        OpenStreetMap map data © OpenStreetMap contributors under ODbL

        Impulsado por Leaflet y Django, pegado por proyecto uMap.
      </Container>

    </Layout>
  );
};

export default SecondPage;
