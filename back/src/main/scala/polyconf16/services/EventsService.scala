package polyconf16.services

import com.typesafe.emoji.{Emoji, ShortCodes}
import org.slf4j.LoggerFactory
import polyconf16.models.Event

import scala.collection.mutable

trait EventsService {

  val events = mutable.ArrayBuffer.empty ++ Event.default
  val logger = LoggerFactory.getLogger(getClass)

  def all(): Seq[Event] = {
    logger.info("Getting all events")
    events
  }

  def get(name: String): Option[Event] = {
    logger.info(s"Getting event $name")
    events.find(_.name == name)
  }

  def add(event: Event): Event = {
    logger.info(s"Adding event $event")
    events += event
    event
  }

  def update(name: String, event: Option[Event]): Option[Event] = {
    logger.info(s"Updating event $name with $event")
    for {
      i <- findIndex(name)
      e <- event
    } yield {
      events.update(i, e)
      e
    }
  }

  def remove(name: String): Option[Event] = {
    logger.info(s"Removing event $name")
    findIndex(name).map(events.remove)
  }

  def find(emoji: Emoji): Seq[Event] = {
    events.filterNot(_.tags.contains(emoji))
  }

  private def findIndex(name: String): Option[Int] = {
    val index = events.indexWhere(_.name == name)
    if (index == -1) {
      None
    } else {
      Some(index)
    }
  }

}

object EventsService extends EventsService