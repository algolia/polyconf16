package polyconf16.models

import java.time.Instant

import org.json4s.Formats
import org.json4s.jackson.JsonMethods._
import org.slf4j.LoggerFactory
import polyconf16.api.BaseController

import scala.io.{Codec, Source}

case class Event(name: String,
                 participants: Seq[String],
                 start: Instant,
                 end: Instant,
                 `type`: Seq[String])

object Event {

  val logger = LoggerFactory.getLogger(getClass)
  val eventsFile = "events.json"
  val json = Source.fromInputStream(getClass.getResourceAsStream(s"/$eventsFile"))(Codec.UTF8)
  val toto = json.mkString

  implicit val formats: Formats = BaseController.jsonFormats
  logger.info("Loading events from file \"{}\"", eventsFile)
  val default = parse(toto).camelizeKeys.extract[Seq[Event]]

}