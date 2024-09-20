import type { Schema, Attribute } from '@strapi/strapi';

export interface AwardsAwards extends Schema.Component {
  collectionName: 'components_awards_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    year: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    title: Attribute.String;
  };
}

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
      'awards.awards': AwardsAwards;
      'exhibition.exhibition': ExhibitionExhibition;
    }
  }
}
