package polyconf16

import org.json4s.{DefaultFormats, Formats}
import org.scalamock.scalatest.MockFactory
import org.scalatest._
import org.scalatest.concurrent.ScalaFutures
import org.scalatest.time.{Millis, Seconds, Span}

import scala.language.implicitConversions

trait PolyconfTest
  extends FunSpecLike
    with BeforeAndAfterAll
    with BeforeAndAfter
    with BeforeAndAfterEach
    with Matchers
    with MockFactory
    with Inside
    with Inspectors
    with EitherValues
    with ScalaFutures {

  implicit val formats: Formats = DefaultFormats

  implicit val patience = PatienceConfig(timeout = Span(10, Seconds), interval = Span(500, Millis))


}
