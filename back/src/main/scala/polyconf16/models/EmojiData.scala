package polyconf16.models

import org.json4s.Formats
import org.json4s.jackson.JsonMethods._
import org.slf4j.LoggerFactory
import polyconf16.api.BaseController

import scala.io.{Codec, Source}

case class EmojiData(keywords: Seq[String],
                     char: String,
                     category: String,
                     name: String)

object EmojiData {

  val logger = LoggerFactory.getLogger(getClass)
  val eventsFile = "emojis.json"
  val json = Source.fromInputStream(getClass.getResourceAsStream(s"/$eventsFile"))(Codec.UTF8).mkString

  implicit val formats: Formats = BaseController.jsonFormats
  logger.info("Loading emojis from file \"{}\"", eventsFile)
  val default = parse(json).camelizeKeys.extract[Seq[EmojiData]]

}