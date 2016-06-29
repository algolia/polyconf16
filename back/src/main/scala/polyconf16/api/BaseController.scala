package polyconf16.api

import java.time.Instant

import com.typesafe.emoji.Emoji
import org.json4s.JsonAST.JField
import org.json4s._
import org.scalatra._
import org.scalatra.json.JacksonJsonSupport
import org.slf4j.LoggerFactory

import scala.concurrent.ExecutionContext
import scala.util.Try

object BaseController {

  val jsonFormats: Formats =
    DefaultFormats +
      InstantKeySerializer +
      InstantValueSerializer +
      EmojiValueSerializer
}

trait BaseController
  extends ScalatraServlet
    with JacksonJsonSupport
    with FutureSupport
    with CorsSupport {

  override implicit val jsonFormats: Formats = BaseController.jsonFormats
  val logger = LoggerFactory.getLogger(getClass)

  protected override implicit def executor: ExecutionContext = scala.concurrent.ExecutionContext.global

  protected override def transformRequestBody(body: JValue): JValue = body.camelizeKeys

  protected override def transformResponseBody(body: JValue): JValue = new PolyconfMonadicJValue(body).underscoreButKeepDashKeys

  /**
    * The method we need to override are private, so we need to copy/paste them :(
    */
  private final class PolyconfMonadicJValue(jv: JValue) extends MonadicJValue(jv: JValue) {

    def underscoreButKeepDashKeys = {
      transformField {
        case JField(name, x) if !name.startsWith("_") => JField(underscoreButKeepDash(name), x)
      }
    }

    def underscoreButKeepDash(word: String): String = {
      val spacesPattern = "[\\s]".r
      val firstPattern = "([A-Z]+)([A-Z][a-z])".r
      val secondPattern = "([a-z\\d])([A-Z])".r
      val replacementPattern = "$1_$2"

      spacesPattern.replaceAllIn(
        secondPattern.replaceAllIn(
          firstPattern.replaceAllIn(word, replacementPattern),
          replacementPattern
        ),
        "_"
      ).toLowerCase
    }
  }

  before() {
    contentType = formats("json")
  }

  error {
    case e: Exception =>
      logger.error("500", e)
      halt(500, body = InternalServerError("Sorry :(. Something went bad, we will fix it."))
  }

  notFound {
    halt(404, body = NotFound("The URL you requested was not found. Maybe try something else?"))
  }

}

private case object InstantKeySerializer extends CustomKeySerializer[Instant](format => ( {
  case i: String => Instant.ofEpochMilli(i.toLong)
}, {
  case i: Instant => i.toEpochMilli.toString
}))

private case object InstantValueSerializer extends CustomSerializer[Instant](format => ( {
  case JInt(i) => Instant.ofEpochMilli(i.longValue)
  case JNothing | JNull => null
}, {
  case i: Instant => JInt(i.toEpochMilli)
}))

private case object EmojiValueSerializer extends CustomSerializer[Emoji](format => ( {
  case JString(string) => Try(Emoji.apply(string)).getOrElse(throw new MappingException(s"Can't convert $string to emoji"))
}, {
  case e: Emoji => JString(e.toString())
}))

