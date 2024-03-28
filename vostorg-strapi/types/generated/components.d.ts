import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.category': CategoryCategory;
    }
  }
}
