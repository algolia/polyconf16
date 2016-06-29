package polyconf16.api

import polyconf16.models.EmojiData

class EmojisController extends BaseController {

  val data = EmojiData.default

  get("/find/:s") {
    data.filter(_.keywords.contains(params("s")))
  }

}
