package polyconf16.api

import polyconf16.models.Event

import scala.collection.mutable

class EventsController extends BaseController {

  val events = mutable.ArrayBuffer.empty ++ Event.default

  def getEvent(name: String): Option[Event] = {
    events.find(_.name == name)
  }

  def findIndex(name: String): Option[Int] = {
    val index = events.indexWhere(_.name == name)
    if (index == -1) {
      None
    } else {
      Some(index)
    }
  }

  get("/") {
    events
  }

  get("/:name") {
    getEvent(params("name")).fold(halt(404))(e => e)
  }

  post("/") {
    events += parsedBody.extract[Event]
  }

  put("/:name") {
    val index = findIndex(params("name")).getOrElse(halt(404))
    events.update(index, parsedBody.extract[Event])
  }

  delete("/:name") {
    val index = findIndex(params("name")).getOrElse(halt(404))
    events.remove(index)
  }

}
