export default {
  name: 'workSortCategories',
  title: 'WorkSortCategories',
  type: 'document',
  fields: [
    {
      title: 'Cetegories', // for human read
      name: 'categories', // for data key
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};