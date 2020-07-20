const articles = {
    1: {
        title: "Young people behind spike in COVID-19 numbers, says OPH",
        imageURL: "src/img/covid2.jpg",
        content: "For the second day in a row, Ottawa's number of new confirmed COVID-19 cases has hit double digits — part of a recent surge health officials say is linked to young people.",
        postedTime: "Thursday, July 16 10:30 am",
        place: "Ottawa"
    },
    2: {
        title: "Getting Lost in Canada",
        imageURL: "src/img/car.jpg",
        content: "I live in California, and politically, I’m not happy with what’s happening in the United States. I’m really not happy with the social discourse. So it felt good to get away from all the tension, at least for a bit.",
        postedTime: "Friday, July 17 9:00 am",
        place: "Toronto"
    },
    3: {
        title: "Severe thunderstorm warning, watches issued for areas surrounding Calgary",
        imageURL: "src/img/storm.jpg",
        content: "For the second day in a row, Ottawa's number of new confirmed COVID-19 cases has hit double digits — part of a recent surge health officials say is linked to young people.",
        postedTime: "Saturday, July 18 12:50 pm",
        place: "Calgary"
    },
    4: {
        title: "'It's still surreal': Authorities look for cause of deadly glacier bus crash",
        imageURL: "src/img/crash.jpg",
        content: "COLUMBIA ICEFIELD, Alta. - Angela Bye couldn't believe her eyes when she used her camera's telephoto lens to get a closer look at what appeared to be one of the massive glacier sightseeing buses overturned on the approach to the Columbia Icefield, one of the prime tourist spots in the Canadian Rockies.",
        postedTime: "Friday, July 17 10:50 am",
        place: "Delhi"
    }
}

const getArticleByID = id => articles[id];

export default getArticleByID;