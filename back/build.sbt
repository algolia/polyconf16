name := "polyconf-api"

version := "1.0"

scalaVersion := "2.11.8"

val scalatraVersion = "2.4.0"
val json4sVersion = "3.4.0"

resolvers += Resolver.typesafeIvyRepo("releases")

//Logging
libraryDependencies += "org.slf4j" % "slf4j-api" % "1.7.21"
libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.1.7"

//Http server
libraryDependencies += "org.eclipse.jetty" % "jetty-webapp" % "9.3.8.v20160314"
libraryDependencies += "org.scalatra" %% "scalatra" % scalatraVersion
libraryDependencies += "org.scalatra" %% "scalatra-json" % scalatraVersion

//Parsing
libraryDependencies += "org.json4s" %% "json4s-core" % json4sVersion
libraryDependencies += "org.json4s" %% "json4s-jackson" % json4sVersion

//Emojis
libraryDependencies += "com.typesafe" %% "emoji" % "1.0.0"

assemblyJarName in assembly := "polyconf.jar"
mainClass in assembly := Some("polyconf16.PublicApi")

assemblyMergeStrategy in assembly := {
  case PathList("META-INF", "io.netty.versions.properties") => MergeStrategy.concat
  case PathList("mime.types") => MergeStrategy.first
  case x =>
    val oldStrategy = (assemblyMergeStrategy in assembly).value
    oldStrategy(x)
}

test in assembly := {}
