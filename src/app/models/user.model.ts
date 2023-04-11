export interface User {
    id : number,
    login : string,
    node_id : string,
    avatar_url : string,
    gravatar_id : string,
    url : string,
    html_url : string,
    followers_url : string,
    following_url : string,
    gists_url : string,
    starred_url : string,
    subscriptions_url : string,
    organizations_url : string,
    repos_url : string,
    events_url : string,
    received_events_url : string,
    type : string,
    site_admin : boolean,
    followers : number,
    following : number,
    public_repos : number,
    location : string,
    company : string
}

export interface userDepot {
    login : string,
    nameRepo : string
}