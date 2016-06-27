package polyconf16.api

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.DefaultServlet
import org.eclipse.jetty.webapp.WebAppContext
import org.scalatra.servlet.ScalatraListener

trait HttpServer {

  def run(bootstrapClass: String): Unit = {
    val server = new Server(8081)
    val context = new WebAppContext()
    context setContextPath "/"
    context setResourceBase "src/main/webapp"
    context setThrowUnavailableOnStartupException true
    context setInitParameter(ScalatraListener.LifeCycleKey, s"polyconf16.api.$bootstrapClass")
    context addEventListener new ScalatraListener
    context addServlet(classOf[DefaultServlet], "/")

    server setHandler context

    try {
      server.start()
    } catch {
      case e: ExceptionInInitializerError => System exit 1
    }

    server.join()
  }

}

object HttpServer extends HttpServer

