package polyconf16.api

import com.typesafe.emoji.Emoji
import polyconf16.models.Event
import polyconf16.services.EventsService

import scala.util.Try

class EventsController extends BaseController {

  val events = EventsService

  get("/") {
    events.all()
  }

  get("/:name") {
    events.get(params("name")).fold(halt(404))(e => e)
  }

  post("/") {
    events.add(parsedBody.extract[Event])
  }

  put("/:name") {
    events.update(params("name"), parsedBody.extract[Event]).getOrElse(halt(404))
  }

  delete("/:name") {
    events.remove(params("name")).getOrElse(halt(404))
  }

  get("/:emoji") {
    val emoji = Try(Emoji.apply(params(":emoji")))
    emoji.map(events.find).getOrElse(halt(400))
  }

}
