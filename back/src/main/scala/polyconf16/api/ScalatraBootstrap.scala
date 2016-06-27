package polyconf16.api

import javax.servlet.ServletContext

import org.scalatra.{CorsSupport, LifeCycle}

class ScalatraBootstrap extends LifeCycle {

  override def init(context: ServletContext) {
    context setInitParameter(CorsSupport.AllowedMethodsKey, "GET")
    context setInitParameter(CorsSupport.AllowCredentialsKey, "false")
    context setInitParameter(CorsSupport.PreflightMaxAgeKey, "0")

    context mount(new EventsController, "/1/events")
  }


}

