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
    //TODO
  }

  get("/:name") {
   //TODO
  }

  post("/") {
    //TODO
  }

  put("/:name") {
    //TODO
  }

  delete("/:name") {
    //TODO
  }

  get("/:emoji") {
    //TODO
  }

}
