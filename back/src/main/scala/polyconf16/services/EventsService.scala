package polyconf16.services

import com.typesafe.emoji.{Emoji, ShortCodes}
import polyconf16.models.Event

import scala.collection.mutable

trait EventsService {

  val events = mutable.ArrayBuffer.empty ++ Event.default

  def all(): Seq[Event] = events

  def get(name: String): Option[Event] = {
    events.find(_.name == name)
  }

  def add(event: Event): Event = {
    events += event
    event
  }

  def update(name: String, event: Event): Option[Event] = {
    findIndex(name).map { i =>
      events.update(i, event)
      event
    }
  }

  def remove(name: String): Option[Event] = {
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