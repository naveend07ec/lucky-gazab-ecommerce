import React from 'react';
import { GROUND_TRUTH_DATA, ORGANIZATION_SCHEMA_JSONLD } from '@lucky-gazab/shared-types';

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA_JSONLD) }}
    />
  );
}
