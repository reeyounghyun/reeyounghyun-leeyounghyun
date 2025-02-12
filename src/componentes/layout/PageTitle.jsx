// src/components/PageTitle.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function PageTitle({ title = "이영현 | 포트폴리오" }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageTitle;