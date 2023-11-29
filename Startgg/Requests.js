const startggurl = "https://api.start.gg/gql/alpha"

const headers = {
    "content-type": "application/json",
    "Accept": "application/json",
    Authorization: "Bearer 6d0d769a0294cc2068c96080115056f5" //cybersecurity go brrrr
}

const getRecentTournamentsQuery =
    `query TournamentsByState ($perPage:Int!, $currentDate:Timestamp!) {
            tournaments(query: {
                perPage: $perPage
            filter: {
                addrState: "MA"
                afterDate: $currentDate
                countryCode: "US"
                videogameIds: [
                                1386
                            ]
                    }
                }) {
            nodes {
                id
                name
                city
                startAt
                venueAddress
                events {
                    name
                }
                images {
                    type
                    url
                }
                shortSlug
                events {
                    videogame {
                                    id
                                }
                            }
                        }
                    }
                }`

const getRecent = async (vars) => {

    const tosend = {
        query: getRecentTournamentsQuery,
        variables: vars
    }
    const data = await fetch(startggurl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(tosend),
    }).then(r => r.json())
    return data
}

export { getRecent }