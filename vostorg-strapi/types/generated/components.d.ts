import type { Schema, Attribute } from '@strapi/strapi';

export interface ExhibitionExhibition extends Schema.Component {
  collectionName: 'components_exhibition_exhibitions';
  info: {
    displayName: 'Exhibition';
    icon: 'chartBubble';
  };
  attributes: {
    Year: Attribute.String;
    Title: Attribute.String;
    Place: Attribute.String;
    City: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'exhibition.exhibition': ExhibitionExhibition;
    }
  }
}
