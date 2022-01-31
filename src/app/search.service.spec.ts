import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let httpController: HttpTestingController;
  const mockResponse = {
    "total_count": 2,
    "incomplete_results": false,
    "items": [
      {
        "login": "mrgoats",
        "id": 5826862,
        "node_id": "MDQ6VXNlcjU4MjY4NjI=",
        "avatar_url": "https://avatars.githubusercontent.com/u/5826862?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mrgoats",
        "html_url": "https://github.com/mrgoats",
        "followers_url": "https://api.github.com/users/mrgoats/followers",
        "following_url": "https://api.github.com/users/mrgoats/following{/other_user}",
        "gists_url": "https://api.github.com/users/mrgoats/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mrgoats/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mrgoats/subscriptions",
        "organizations_url": "https://api.github.com/users/mrgoats/orgs",
        "repos_url": "https://api.github.com/users/mrgoats/repos",
        "events_url": "https://api.github.com/users/mrgoats/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mrgoats/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "MrGoatsy",
        "id": 9994607,
        "node_id": "MDQ6VXNlcjk5OTQ2MDc=",
        "avatar_url": "https://avatars.githubusercontent.com/u/9994607?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/MrGoatsy",
        "html_url": "https://github.com/MrGoatsy",
        "followers_url": "https://api.github.com/users/MrGoatsy/followers",
        "following_url": "https://api.github.com/users/MrGoatsy/following{/other_user}",
        "gists_url": "https://api.github.com/users/MrGoatsy/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/MrGoatsy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/MrGoatsy/subscriptions",
        "organizations_url": "https://api.github.com/users/MrGoatsy/orgs",
        "repos_url": "https://api.github.com/users/MrGoatsy/repos",
        "events_url": "https://api.github.com/users/MrGoatsy/events{/privacy}",
        "received_events_url": "https://api.github.com/users/MrGoatsy/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SearchService);
    httpController = TestBed.inject(HttpTestingController);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get results', () => {
    let login = 'mrgoats';
    service.getSearchResults(login).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `https://api.github.com/search/users?q=${login} in:login`,
    });

    req.flush(mockResponse);
  });

});
