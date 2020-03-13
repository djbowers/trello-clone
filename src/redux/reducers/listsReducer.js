const initialState = [
  {
    id: 0,
    title: 'List 1',
    cards: [
      {
        id: 0,
        text: 'Sit elit cupidatat sunt eiusmod aliqua.'
      },
      {
        id: 1,
        text:
          'Quis id incididunt dolor esse ullamco ipsum excepteur aute enim officia ut duis magna.'
      }
    ]
  },
  {
    id: 1,
    title: 'List 2',
    cards: [
      {
        id: 0,
        text:
          'Ullamco tempor dolore sunt dolore irure sit magna irure ea occaecat id.'
      },
      {
        id: 1,
        text:
          'Ut sit in amet pariatur in dolore eiusmod minim commodo ad dolore.'
      }
    ]
  }
];

const listsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default listsReducer;
