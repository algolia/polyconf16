import expect from 'expect';
import reducers from '../../reducers';

describe('reducers', () => {
  const state = {
    events: [
      {
        name: 'Tokyo Beaubourg',
        tags: [
          '🇯🇵',
          '🍣'
        ],
        start: '12:00',
        people: [
          'a',
          'b',
          'c'
        ],
      },
      {
        name: 'MacDonald',
        tags: [
          '🍔',
          '🇺🇸'
        ],
        start: '14:00',
        people: [
          'd',
          'e',
          'f'
        ],
      },
      {
        name: 'Luigi\'s Traditional Fish & Chips',
        tags: [
          '🐟',
          '🍟',
          '🇬🇧'
        ],
        start: '13:30',
        people: [
          'a'
        ],
      },
    ],
    query: '',
    addEventModal: {
      visible: true
    },
    addVenueForm: {}
  };

  describe('Add Event', () => {
    const action = {
      type: 'ADD_EVENT',
      event: {
        name: 'My Venue',
        tags: [{label: 'pizza', value: '🍕'}],
        start: '12:00',
        people: []
      }
    };

    const expectedState = {
      addEventModal: {
        visible: true
      },
      addVenueForm: {},
      events: [
        {
          name: 'Tokyo Beaubourg',
          people: [
            'a',
            'b',
            'c'
          ],
          start: '12:00',
          tags: [
            '🇯🇵',
            '🍣'
          ]
        },
        {
          name: 'MacDonald',
          people: [
            'd',
            'e',
            'f'
          ],
          start: '14:00',
          tags: [
            '🍔',
            '🇺🇸'
          ]
        },
        {
          name: 'Luigi\'s Traditional Fish & Chips',
          people: [
            'a'
          ],
          start: '13:30',
          tags: [
            '🐟',
            '🍟',
            '🇬🇧'
          ]
        },
        {
          name: 'My Venue',
          people: [],
          start: '12:00',
          tags: [
            {
              label: 'pizza',
              value: '🍕'
            }
          ]
        }
      ],
      query: ''
    };

    it('should add a venue', () => {
      expect(reducers(state, action)).toEqual(expectedState);
    });
  });
});
