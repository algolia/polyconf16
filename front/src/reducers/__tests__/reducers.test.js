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
        end: '12:30',
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
        end: '16:30',
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
        end: '14:00',
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
        end: '13:00',
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
          end: '12:30',
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
          end: '16:30',
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
          end: '14:00',
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
          end: '13:00',
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
