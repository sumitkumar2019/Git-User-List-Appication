const GitService = require("../service/GitService");
class GitController {
  constructor(router) {
    this.router = router;
    this.gitService = new GitService();
    this.registerPath();
  }

  registerPath() {
    this.router.get(
      "/getusers/:city/page/:pageNumber",
      this.getGitUserByCity.bind(this)
    );
  }

  async getGitUserByCity(req, res) {
    const city = req.params.city;
    const pageNumber = req.params.pageNumber;
    if (!pageNumber) {
      pageNumber = 1;
    }
    try {
      const data = await this.gitService.getGitUser(city, pageNumber);
      console.log("inside get git user" + data);
      res.status(200).send({ succes: true, result: data });
    } catch (error) {
      res.status(500).send({ success: false });
    }
  }
}
module.exports = GitController;
