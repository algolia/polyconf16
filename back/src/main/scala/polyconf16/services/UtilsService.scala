package polyconf16.services

import java.io.File
import java.time._
import java.time.temporal.{ChronoUnit, TemporalUnit}

import scala.collection.AbstractIterator
import scala.io.Source
import scala.util.Random

class UtilsService {

  val randomGenerator = new Random(Instant.now().toEpochMilli)

  def now(): Instant = Instant.now()

  def shuffle[E](seq: Seq[E]): Seq[E] = randomGenerator.shuffle(seq)

  def readFile(file: File): String = Source.fromFile(file).getLines.mkString("\n")

  def random(n: Int): Int = randomGenerator.nextInt(n)

  /**
    *
    * @param start exclusive in UTC
    * @param end   inclusive in UTC
    * @param step  step to iterate
    * @return
    */
  def range(start: LocalDateTime, end: LocalDateTime, step: TemporalUnit = ChronoUnit.HOURS): Iterator[Instant] = {
    new AbstractIterator[Instant] {
      private var i: LocalDateTime = start.plus(1, step)

      def hasNext: Boolean = i.compareTo(end) <= 0

      def next(): Instant = {
        if (hasNext) {
          val result = i
          i = i.plus(1, step)
          result.toInstant(ZoneOffset.UTC)
        } else {
          Iterator.empty.next()
        }
      }
    }
  }
}

object UtilsService extends UtilsService
