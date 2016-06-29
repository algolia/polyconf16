package polyconf16.models

import com.typesafe.emoji.Emoji
import org.json4s.Formats
import org.json4s.jackson.JsonMethods._
import org.slf4j.LoggerFactory
import polyconf16.api.BaseController

import scala.io.{Codec, Source}

case class Event(name: String,
                 address: Option[String],
                 people: Seq[String],
                 start: String,
                 lat: Option[Float],
                 lng: Option[Float],
                 tags: Seq[Emoji]) {

  override def toString: String = {
    s"Event $name at $address starting at $start, on tags ${tags.mkString(", ")}"
  }
}

object Event {

  val logger = LoggerFactory.getLogger(getClass)
  val eventsFile = "events.json"
  val json = Source.fromInputStream(getClass.getResourceAsStream(s"/$eventsFile"))(Codec.UTF8).mkString

  implicit val formats: Formats = BaseController.jsonFormats
  logger.info("Loading events from file \"{}\"", eventsFile)
  val default = parse(json).camelizeKeys.extract[Seq[Event]]

}