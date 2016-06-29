package polyconf16.api

import algolia.AlgoliaClient
import algolia.AlgoliaDsl._
import com.typesafe.emoji.Emoji
import polyconf16.models.Event
import polyconf16.services.EventsService

import scala.util.Try

class EventsController extends BaseController {

  val events = EventsService
  val client = new AlgoliaClient("YourApplicationID", "YourAPIKey")

  get("/") {
    events.all()
  }

  get("/:name") {
    events.get(params("name")).fold(halt(404))(e => e)
  }

  post("/") {
    val event = Try(parsedBody.extract[Event]).getOrElse(halt(400))
//    client.execute {
//      index into "events" `object` event objectId event.name
//    }
    events add event
  }

  put("/:name") {
    events
      .update(params("name"), Try(parsedBody.extract[Event]).toOption)
      .map { event =>
//        client.execute {
//          index into "events" `object` event objectId event.name
//        }
        event
      }
      .getOrElse(halt(404))
  }

  delete("/:name") {
    events
      .remove(params("name"))
      .map { event =>
//        client.execute {
//          algolia.AlgoliaDsl.delete from "events" objectId event.name
//        }
        event
      }
      .getOrElse(halt(404))
  }

  get("/:emoji") {
    val emoji = Try(Emoji.apply(params(":emoji")))
    emoji.map(events.find).getOrElse(halt(400))
  }

}
