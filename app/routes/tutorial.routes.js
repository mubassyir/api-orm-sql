//Routing url 

module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js"); 

  var router = require("express").Router();

  // create new tutorial (http://localhost/api/tutorials)
  router.post("/", tutorials.create);

  // retrive all tutorials (http://localhost/api/tutorials)
  router.get("/", tutorials.findAll);

  // retrive all published tutorials (http://localhost/api/tutorials/published)
  router.get("/published", tutorials.findAllPublished);

  // retrive a single tutorial with id (http://localhost/api/tutorials/:id)
  router.get("/:id", tutorials.findOne);

  // update a tutorial with id (http://localhost/api/tutorials/:id)
  router.put("/:id", tutorials.update);

  // delete a tutorial with id (http://localhost/api/tutorials/:id)
  router.delete("/:id", tutorials.delete);

  // delete all (http://localhost/api/tutorials)
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
