// src/components/PageTitle.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function PageTitle({ title = "leeyounghyun-portfolio" }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageTitle;