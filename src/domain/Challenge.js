class Challenge {
  constructor({
    type,
    name,
    description,
    level,
    techs,
    background,
    images,
    github_url: githubUrl,
    brief,
    dev_id: devId
  }) {
    this.type = type;
    this.name = name;
    this.description = description;
    this.level = level;
    this.techs = techs.split(',').map(tech => tech.trim());
    this.background = background;
    this.images = images;
    this.github_url = githubUrl;
    this.brief = brief;
    this.dev_id = devId;
  }
}

module.exports = Challenge;
