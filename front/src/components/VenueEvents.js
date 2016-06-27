import React from 'react';

class VenueEvents extends React.Component {
  render() {
    return (
      <section className="events">
        <strong className="day-label">Monday, June 27</strong>
        <div className="box">
          <article>
            <div>
              <div className="columns">
                <div className="column is-narrow">
                  <h2>12:00 PM</h2>
                </div>
                <div className="column">
                  <div className="emoji-tags">
                    <span>🍔</span>
                    <span>🌮</span>
                    <span>🍟</span>
                  </div>
                  <h2 className="title">McDonald's</h2>
                  <h3 className="subtitle">Fast Food Burgers</h3>
                  <a href="">88 Rue De Rivoli, Paris</a>
                  <div className="people-going">
                    <div className="partecipants">
                      4 partecipants
                    </div>
                    <div className="user-avatar">
                      <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                    </div>
                    <div className="user-avatar">
                      <img src="https://randomuser.me/api/portraits/women/56.jpg" />
                    </div>
                    <div className="user-avatar">
                      <img src="https://randomuser.me/api/portraits/women/22.jpg" />
                    </div>
                    <div className="user-avatar">
                      <img src="https://randomuser.me/api/portraits/men/70.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default VenueEvents;
