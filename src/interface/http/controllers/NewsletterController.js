const ApplicationController = require('./ApplicationController');

const NewsletterRepository = require('../../../infrastructure/database/mongodb/repository/NewsletterRepository');

const ListSubscribers = require('../../../application/newsletter/ListSubscribers');
const CreateSubscription = require('../../../application/newsletter/CreateSubscription');

class NewsletterController extends ApplicationController {
  async list() {
    const repository = new NewsletterRepository();
    const subscribers = await new ListSubscribers(repository).run();

    return this.res.status(200).send(subscribers);
  }

  async create() {
    const repository = new NewsletterRepository();
    const subscriber = await new CreateSubscription(repository).run();

    return this.res.status(201).send(subscriber);
  }
}

module.exports = NewsletterController;
