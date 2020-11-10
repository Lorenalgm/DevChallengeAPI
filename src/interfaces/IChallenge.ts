/* eslint-disable camelcase */
type challengeCategory =
  | 'backend'
  | 'frontend'
  | 'mobile'

export interface IChallenge {
  type?: challengeCategory;
  name?: string;
  description?: string;
  level?: string;
  techs?: [string];
  background?: string;
  images?: [string];
  github_url?: string;
  brief?: string;
  dev_id?: any;
}
