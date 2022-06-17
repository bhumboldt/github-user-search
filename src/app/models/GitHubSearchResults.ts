import { GitHubUser } from './GitHubUser';
export interface GitHubSearchResults {
  incomplete_results: boolean;
  total_count: number;
  items: Array<GitHubUser>;
}