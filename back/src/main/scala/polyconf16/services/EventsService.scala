package polyconf16.services

import com.typesafe.emoji.{Emoji, ShortCodes}
import org.slf4j.LoggerFactory
import polyconf16.models.Event

import scala.collection.mutable

trait EventsService {

  val events = mutable.ArrayBuffer.empty ++ Event.default
  val logger = LoggerFactory.getLogger(getClass)

  def all(): Seq[Event] = {
    //TODO
  }

  def get(name: String): Option[Event] = {
    //TODO
  }

  def add(event: Event): Event = {
    //TODO
  }

  def update(name: String, event: Option[Event]): Option[Event] = {
    //TODO
  }

  def remove(name: String): Option[Event] = {
    //TODO
  }

  def find(emoji: Emoji): Seq[Event] = {
    //TODO
  }

}

object EventsService extends EventsService