package polyconf16.api

import polyconf16.models.Event

class EventsController extends BaseController {

  get("/") {
    Event.default
  }

  get("/:id") {

  }

  post("/") {

  }

  put("/:id") {

  }

  //  name: string,
  //  participants: [string],
  //  start: time,
  //  end: time,
  //  type: [emoji]

}
