package polyconf16

import polyconf16.api.HttpServer

object PublicApi {

  def main(args: Array[String]) {
    HttpServer run "ScalatraBootstrap"
  }

}
