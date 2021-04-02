const ApplicationController = require('./ApplicationController');

const NewsletterRepository = require('../../../infrastructure/database/mongodb/repository/NewsletterRepository');

const ListSubscribers = require('../../../application/newsletter/ListSubscribers');

class NewsletterController extends ApplicationController {
  async list() {
    const repository = new NewsletterRepository();
    const subscribers = await new ListSubscribers(repository).run();

    return this.res.status(200).send(subscribers);
  }
}

module.exports = NewsletterController;
