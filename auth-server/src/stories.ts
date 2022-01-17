export interface Stories{
    created_at: string;
    title: string;
    url: string;
    author: string;
    points?: number;
    story_text: string;
    comment_text: string;
    num_comments?: number;
    story_id?: number;
    story_title?: string;
    story_url?: string;
    parent_id?: number;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: HighlightResult;
    relevancy_score?: number;
}
export interface HighlightResult {
    title?: Title;
    url?: Url;
    author: Author;
    story_text?: StoryText;
    comment_text?: CommentText;
    story_title?: StoryTitle;
    story_url?: StoryUrl;
}
export interface Title {
    value?: string;
    matchLevel?: string;
    fullyHighlighted?: boolean;
    matchedWords?: string[];
}

export interface Url {
    value?: string;
    matchLevel?: string;
    matchedWords?: string[];
    fullyHighlighted?: boolean;
}

export interface Author {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface StoryText {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface CommentText {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface StoryTitle {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface StoryUrl {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

const stories : Stories[] =[
    {
        "created_at": "2021-06-22T16:42:57.000Z",
        "title": "Micro Frontend for Huge Application",
        "url": "https://present.do/decks/60d20b8dffff3c06649f7a18",
        "author": "kciter",
        "points": 4,
        "story_text": null,
        "comment_text": null,
        "num_comments": 1,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1624380177,
        "_tags": [
            "story",
            "author_kciter",
            "story_27593954"
        ],
        "objectID": "27593954",
        "_highlightResult": {
            "title": {
                "value": "\u003cem\u003eMicro Frontend\u003c/em\u003e for Huge Application",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "url": {
                "value": "https://present.do/decks/60d20b8dffff3c06649f7a18",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "kciter",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-01-21T06:54:18.000Z",
        "title": "Show HN: Microfrontend Using ReactJs and AngularJs+ GitHub Cron",
        "url": "https://github.com/sirshikher/microfront-end-news",
        "author": "sirshikher",
        "points": 2,
        "story_text": null,
        "comment_text": null,
        "num_comments": 0,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1579589658,
        "_tags": [
            "story",
            "author_sirshikher",
            "story_22104821",
            "show_hn"
        ],
        "objectID": "22104821",
        "_highlightResult": {
            "title": {
                "value": "Show HN: \u003cem\u003eMicrofrontend\u003c/em\u003e Using ReactJs and AngularJs+ GitHub Cron",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "url": {
                "value": "https://github.com/sirshikher/microfront-end-news",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "sirshikher",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2019-06-17T15:54:31.000Z",
        "title": "Microfrontends: the good, the bad, and the ugly",
        "url": "https://zendev.com/2019/06/17/microfrontends-good-bad-ugly.html",
        "author": "kbal11",
        "points": 1,
        "story_text": null,
        "comment_text": null,
        "num_comments": 0,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1560786871,
        "relevancy_score": 8895,
        "_tags": [
            "story",
            "author_kbal11",
            "story_20204225"
        ],
        "objectID": "20204225",
        "_highlightResult": {
            "title": {
                "value": "\u003cem\u003eMicrofrontend\u003c/em\u003es: the good, the bad, and the ugly",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "url": {
                "value": "https://zendev.com/2019/06/17/\u003cem\u003emicrofrontend\u003c/em\u003es-good-bad-ugly.html",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "author": {
                "value": "kbal11",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2018-10-21T14:35:40.000Z",
        "title": "The Micro Frontend Manifesto",
        "url": "https://medium.com/@patrick.winters/the-micro-front-end-manifesto-fd65f5984d20",
        "author": "pcwinters",
        "points": 1,
        "story_text": null,
        "comment_text": null,
        "num_comments": 0,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1540132540,
        "relevancy_score": 8425,
        "_tags": [
            "story",
            "author_pcwinters",
            "story_18268137"
        ],
        "objectID": "18268137",
        "_highlightResult": {
            "title": {
                "value": "The \u003cem\u003eMicro Frontend\u003c/em\u003e Manifesto",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "url": {
                "value": "https://medium.com/@patrick.winters/the-micro-front-end-manifesto-fd65f5984d20",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "pcwinters",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-12-14T05:36:13.000Z",
        "title": "Ask HN: Monorepo vs. Multi-Repo",
        "url": null,
        "author": "johnnypangs",
        "points": 18,
        "story_text": "I’m working at a medium size organization inside a large company with about 30 developers in it and we’re considering moving to a microfrontend implementation. We are debating between a using a monorepo or multi-repo strategy and I wanted some advice (and maybe some anecdotes) on people that have gone through this. Thanks!",
        "comment_text": null,
        "num_comments": 17,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1639460173,
        "_tags": [
            "story",
            "author_johnnypangs",
            "story_29548592",
            "ask_hn"
        ],
        "objectID": "29548592",
        "_highlightResult": {
            "title": {
                "value": "Ask HN: Monorepo vs. Multi-Repo",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "johnnypangs",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_text": {
                "value": "I’m working at a medium size organization inside a large company with about 30 developers in it and we’re considering moving to a \u003cem\u003emicrofrontend\u003c/em\u003e implementation. We are debating between a using a monorepo or multi-repo strategy and I wanted some advice (and maybe some anecdotes) on people that have gone through this. Thanks!",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            }
        }
    },
    {
        "created_at": "2021-08-22T16:34:59.000Z",
        "title": "Ask HN: Why is it so hard to get a good job as a junior developer?",
        "url": null,
        "author": "wayoverthecloud",
        "points": 7,
        "story_text": "I don\u0026#x27;t understand this industry. There are very few junior developer jobs and even they ask for 2 years of experience. How is one supposed to enter the higher paying market?\u003cp\u003eI work as a Node\u0026#x2F;Angular developer in a South Asian country and over the past 8 months have gained domain specific skills comparable to my own team lead who came from a different background. I write tests, APIs, UI features, deploy to QA, fix issues in QA, fix the build pipeline, architectured microservices and micro-frontend pattern,  etc. I am not bragging, every of my team member does this and they should be paid more too. I am sure there are developers more competent than me but I really think I should be paid a lot more than $500\u0026#x2F;mo especially reading developers salary in American and European countries.\u003cp\u003eHow do I as a South Asian junior developer land a better paying job? Remote is almost impossible considering they don\u0026#x27;t let Junior developers work remote and looks like only option is to move abroad but hardly anyone sponsors VISA especially for a South Asian junior developer.\u003cp\u003eAm I stuck here forever?",
        "comment_text": null,
        "num_comments": 8,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1629650099,
        "_tags": [
            "story",
            "author_wayoverthecloud",
            "story_28266885",
            "ask_hn"
        ],
        "objectID": "28266885",
        "_highlightResult": {
            "title": {
                "value": "Ask HN: Why is it so hard to get a good job as a junior developer?",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "wayoverthecloud",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_text": {
                "value": "I don't understand this industry. There are very few junior developer jobs and even they ask for 2 years of experience. How is one supposed to enter the higher paying market?\u003cp\u003eI work as a Node/Angular developer in a South Asian country and over the past 8 months have gained domain specific skills comparable to my own team lead who came from a different background. I write tests, APIs, UI features, deploy to QA, fix issues in QA, fix the build pipeline, architectured microservices and \u003cem\u003emicro-frontend\u003c/em\u003e pattern,  etc. I am not bragging, every of my team member does this and they should be paid more too. I am sure there are developers more competent than me but I really think I should be paid a lot more than $500/mo especially reading developers salary in American and European countries.\u003cp\u003eHow do I as a South Asian junior developer land a better paying job? Remote is almost impossible considering they don't let Junior developers work remote and looks like only option is to move abroad but hardly anyone sponsors VISA especially for a South Asian junior developer.\u003cp\u003eAm I stuck here forever?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            }
        }
    },
    {
        "created_at": "2021-07-11T08:03:21.000Z",
        "title": "Ask HN: Angular Microfront End",
        "url": null,
        "author": "earpwald",
        "points": 2,
        "story_text": "Hi folks,\u003cp\u003eI\u0026#x27;ve been looking into several options for how to build out a micro frontend architecture in Angular. There seems to be quite a lot of interest in this right now, between Angular elements, Webpack 5 with Module Federation, single-spa etc.\u003cp\u003eIm just curious if anyone has actually implemented it, what you learned from building out, what approach you took and would you do it the same way again?\u003cp\u003eAlso any great articles out there for it?\u003cp\u003eThanks!",
        "comment_text": null,
        "num_comments": 0,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1625990601,
        "_tags": [
            "story",
            "author_earpwald",
            "story_27799174",
            "ask_hn"
        ],
        "objectID": "27799174",
        "_highlightResult": {
            "title": {
                "value": "Ask HN: Angular \u003cem\u003eMicrofront End\u003c/em\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "author": {
                "value": "earpwald",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_text": {
                "value": "Hi folks,\u003cp\u003eI've been looking into several options for how to build out a \u003cem\u003emicro frontend\u003c/em\u003e architecture in Angular. There seems to be quite a lot of interest in this right now, between Angular elements, Webpack 5 with Module Federation, single-spa etc.\u003cp\u003eIm just curious if anyone has actually implemented it, what you learned from building out, what approach you took and would you do it the same way again?\u003cp\u003eAlso any great articles out there for it?\u003cp\u003eThanks!",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            }
        }
    },
    {
        "created_at": "2021-04-12T22:14:44.000Z",
        "title": "Ask HN: Is this a thing? Config-driven monolithic front ends?",
        "url": null,
        "author": "flanket",
        "points": 1,
        "story_text": "I\u0026#x27;m trying to research different approaches to very complex frontends, but I can\u0026#x27;t seem to find the right search terms for one in particular. I\u0026#x27;ll do my best to describe it here in the hopes that someone can point me in the right direction, and as a bonus anyone who has experience with this type of architecture can share tips\u0026#x2F;warnings.\u003cp\u003eI\u0026#x27;m designing a web application that sits on top of disparate workflows as a cohesion layer, making them feel more like a single product. Think aggregation functionality like notification center, search, dashboarding, help, etc.\u003cp\u003eThe problem I\u0026#x27;m trying to solve is how to build something flexible enough to support the different teams\u0026#x27; workflows while protecting a consistent user experience. I\u0026#x27;m hesitant to invest in a micro-frontend approach like single-spa or web components, but I don\u0026#x27;t think a monolithic approach has any hope of scaling (e.g. a single frontend team that has to understand and interact with dozens of different domains \u0026#x2F; services \u0026#x2F; workflows will become a painful bottleneck). One possible middle ground would be (for lack of a better term) a \u0026#x27;config-driven monilith\u0026#x27;: where a single team owns a few core experiences (landing page, dashboards, search, etc) and teams integrate by \u0026#x27;configuring\u0026#x27; them through the use of control\u0026#x2F;data-plane APIs.\u003cp\u003eTo give an example: for a dashboard, each team configures the expected data shape and e.g. importance (constrained by the control plane APIs), and then pushes data for users following that schema. The core team would own rendering the dashboard based on the config and pushed data. We could discuss the trade-offs of push\u0026#x2F;pull, but the point is each team isn\u0026#x27;t left to its own devices on UX, and the core team doesn\u0026#x27;t have to become experts in each domain. This is the simplest example I could think of, things obviously get more complex for data capture\u0026#x2F;forms.\u003cp\u003eIs there a name for this approach to building a complex frontend? Any examples out there?",
        "comment_text": null,
        "num_comments": 2,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1618265684,
        "_tags": [
            "story",
            "author_flanket",
            "story_26785838",
            "ask_hn"
        ],
        "objectID": "26785838",
        "_highlightResult": {
            "title": {
                "value": "Ask HN: Is this a thing? Config-driven monolithic front ends?",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "flanket",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_text": {
                "value": "I'm trying to research different approaches to very complex frontends, but I can't seem to find the right search terms for one in particular. I'll do my best to describe it here in the hopes that someone can point me in the right direction, and as a bonus anyone who has experience with this type of architecture can share tips/warnings.\u003cp\u003eI'm designing a web application that sits on top of disparate workflows as a cohesion layer, making them feel more like a single product. Think aggregation functionality like notification center, search, dashboarding, help, etc.\u003cp\u003eThe problem I'm trying to solve is how to build something flexible enough to support the different teams' workflows while protecting a consistent user experience. I'm hesitant to invest in a \u003cem\u003emicro-frontend\u003c/em\u003e approach like single-spa or web components, but I don't think a monolithic approach has any hope of scaling (e.g. a single frontend team that has to understand and interact with dozens of different domains / services / workflows will become a painful bottleneck). One possible middle ground would be (for lack of a better term) a 'config-driven monilith': where a single team owns a few core experiences (landing page, dashboards, search, etc) and teams integrate by 'configuring' them through the use of control/data-plane APIs.\u003cp\u003eTo give an example: for a dashboard, each team configures the expected data shape and e.g. importance (constrained by the control plane APIs), and then pushes data for users following that schema. The core team would own rendering the dashboard based on the config and pushed data. We could discuss the trade-offs of push/pull, but the point is each team isn't left to its own devices on UX, and the core team doesn't have to become experts in each domain. This is the simplest example I could think of, things obviously get more complex for data capture/forms.\u003cp\u003eIs there a name for this approach to building a complex frontend? Any examples out there?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            }
        }
    },
    {
        "created_at": "2022-01-09T15:21:18.000Z",
        "title": null,
        "url": null,
        "author": "yesimahuman",
        "points": null,
        "story_text": null,
        "comment_text": "You mention Ionic at the end, so I have to comment as the co-founder :)\u003cp\u003eThe first thought is on maintenance and support from Google\u0026#x2F;Facebook compared to someone like Ionic. One of the things people don\u0026#x27;t think about before it\u0026#x27;s too late is support, and Ionic is unique in mobile in that we actually make money from supporting our technology directly for customers. We have direct support available for our auth\u0026#x2F;security\u0026#x2F;data storage plugins, cloud services, and open source projects. We literally will respond to customer support tickets and make fixes\u0026#x2F;patches on a weekend if we have to.\u003cp\u003eIs there any other company out there doing what Ionic is in mobile? You mention having issues with the Web View component, is Google or Facebook ever going to prioritize your issues? It\u0026#x27;s not likely, they don\u0026#x27;t have that kind of business model around their technology like Ionic does. Facebook builds RN for itself, and who knows what Google\u0026#x27;s end-goal is with Flutter (drive GCP adoption? push its ad network?) but it\u0026#x27;s certainly not to monetize it through dedicated support for the most significant users of it. I\u0026#x27;m proud that the Ionic stack is the most user-aligned offering out there because we\u0026#x27;re literally in the business of supporting and extending users of our OSS stack.\u003cp\u003eOn the Web View side, we\u0026#x27;ve recently shipped one of the first mobile micro-frontend projects in the ecosystem called Ionic Portals which is basically an awesome Web View component powered by our tech and expertise building web view experiences on mobile. Right now it doesn\u0026#x27;t have RN or Flutter bindings but we are working on them this year. This has been a pretty interesting shift for us and we\u0026#x27;re now working with traditional native teams not using the traditional Ionic stack:\u003cp\u003e\u003ca href=\"https:\u0026#x2F;\u0026#x2F;ionic.io\u0026#x2F;portals\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;ionic.io\u0026#x2F;portals\u003c/a\u003e",
        "num_comments": null,
        "story_id": 29857409,
        "story_title": "Lessons learned from migrating a native iOS app to Flutter",
        "story_url": "https://betterprogramming.pub/flutter-failed-to-solve-the-biggest-challenge-for-our-cross-platform-app-c551afa0ef18?gi=87b1ac51ba0b",
        "parent_id": 29857409,
        "created_at_i": 1641741678,
        "_tags": [
            "comment",
            "author_yesimahuman",
            "story_29857409"
        ],
        "objectID": "29863980",
        "_highlightResult": {
            "author": {
                "value": "yesimahuman",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "You mention Ionic at the end, so I have to comment as the co-founder :)\u003cp\u003eThe first thought is on maintenance and support from Google/Facebook compared to someone like Ionic. One of the things people don't think about before it's too late is support, and Ionic is unique in mobile in that we actually make money from supporting our technology directly for customers. We have direct support available for our auth/security/data storage plugins, cloud services, and open source projects. We literally will respond to customer support tickets and make fixes/patches on a weekend if we have to.\u003cp\u003eIs there any other company out there doing what Ionic is in mobile? You mention having issues with the Web View component, is Google or Facebook ever going to prioritize your issues? It's not likely, they don't have that kind of business model around their technology like Ionic does. Facebook builds RN for itself, and who knows what Google's end-goal is with Flutter (drive GCP adoption? push its ad network?) but it's certainly not to monetize it through dedicated support for the most significant users of it. I'm proud that the Ionic stack is the most user-aligned offering out there because we're literally in the business of supporting and extending users of our OSS stack.\u003cp\u003eOn the Web View side, we've recently shipped one of the first mobile \u003cem\u003emicro-frontend\u003c/em\u003e projects in the ecosystem called Ionic Portals which is basically an awesome Web View component powered by our tech and expertise building web view experiences on mobile. Right now it doesn't have RN or Flutter bindings but we are working on them this year. This has been a pretty interesting shift for us and we're now working with traditional native teams not using the traditional Ionic stack:\u003cp\u003e\u003ca href=\"https://ionic.io/portals\" rel=\"nofollow\"\u003ehttps://ionic.io/portals\u003c/a\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Lessons learned from migrating a native iOS app to Flutter",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://betterprogramming.pub/flutter-failed-to-solve-the-biggest-challenge-for-our-cross-platform-app-c551afa0ef18?gi=87b1ac51ba0b",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2022-01-09T14:59:28.000Z",
        "title": null,
        "url": null,
        "author": "yesimahuman",
        "points": null,
        "story_text": null,
        "comment_text": "Glad to hear Ionic and Capacitor worked great for you!\u003cp\u003eOn the Web View side, one other thing we’ve been working on is a mobile micro-frontend product called Portals that is focused on enabling teams to bring in web experiences into their native apps. We’ve seen some really interesting adoption of it from traditional native teams. We will be supporting Flutter and RN this year. It’s probably the best web view experience out there at the moment: \u003ca href=\"https:\u0026#x2F;\u0026#x2F;ionic.io\u0026#x2F;portals\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;ionic.io\u0026#x2F;portals\u003c/a\u003e",
        "num_comments": null,
        "story_id": 29857409,
        "story_title": "Lessons learned from migrating a native iOS app to Flutter",
        "story_url": "https://betterprogramming.pub/flutter-failed-to-solve-the-biggest-challenge-for-our-cross-platform-app-c551afa0ef18?gi=87b1ac51ba0b",
        "parent_id": 29862424,
        "created_at_i": 1641740368,
        "_tags": [
            "comment",
            "author_yesimahuman",
            "story_29857409"
        ],
        "objectID": "29863751",
        "_highlightResult": {
            "author": {
                "value": "yesimahuman",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Glad to hear Ionic and Capacitor worked great for you!\u003cp\u003eOn the Web View side, one other thing we’ve been working on is a mobile \u003cem\u003emicro-frontend\u003c/em\u003e product called Portals that is focused on enabling teams to bring in web experiences into their native apps. We’ve seen some really interesting adoption of it from traditional native teams. We will be supporting Flutter and RN this year. It’s probably the best web view experience out there at the moment: \u003ca href=\"https://ionic.io/portals\" rel=\"nofollow\"\u003ehttps://ionic.io/portals\u003c/a\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Lessons learned from migrating a native iOS app to Flutter",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://betterprogramming.pub/flutter-failed-to-solve-the-biggest-challenge-for-our-cross-platform-app-c551afa0ef18?gi=87b1ac51ba0b",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-12-14T16:28:19.000Z",
        "title": null,
        "url": null,
        "author": "johnnypangs",
        "points": null,
        "story_text": null,
        "comment_text": "I\u0026#x27;m the original poster. So Microfrontends are basically splitting up a frontend into individually deployable parts much like microservices. We\u0026#x27;ve decided to do this because of the number and size of our teams working on our frontend.\u003cp\u003eFor a little more on microfrontend this is a good description on the idea:\n\u003ca href=\"https:\u0026#x2F;\u0026#x2F;micro-frontends.org\u0026#x2F;\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;micro-frontends.org\u0026#x2F;\u003c/a\u003e\u003cp\u003eAs for the debate, we have a monorepo\u0026#x2F;microfrontend now and it is quite a bit of work to maintain it and certain parts of it are starting to show the lack of resources put into it. We can\u0026#x27;t deploy easily individually, our tests are very slow, and crucially our organization thinks there is significant risk in a deployment so they have set a very complicated and long QA process for us to get deployments to production.\u003cp\u003eRealistically I think it is an organizational issue and I\u0026#x27;ve been leaning towards multirepo due to the restricted resources and it would be easier to put some of this work on the teams making the individual parts themselves.",
        "num_comments": null,
        "story_id": 29548592,
        "story_title": "Ask HN: Monorepo vs. Multi-Repo",
        "story_url": null,
        "parent_id": 29552321,
        "created_at_i": 1639499299,
        "_tags": [
            "comment",
            "author_johnnypangs",
            "story_29548592"
        ],
        "objectID": "29553423",
        "_highlightResult": {
            "author": {
                "value": "johnnypangs",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "I'm the original poster. So \u003cem\u003eMicrofrontend\u003c/em\u003es are basically splitting up a frontend into individually deployable parts much like microservices. We've decided to do this because of the number and size of our teams working on our frontend.\u003cp\u003eFor a little more on \u003cem\u003emicrofrontend\u003c/em\u003e this is a good description on the idea:\n\u003ca href=\"https://micro-frontends.org/\" rel=\"nofollow\"\u003ehttps://micro-frontends.org/\u003c/a\u003e\u003cp\u003eAs for the debate, we have a monorepo/\u003cem\u003emicrofrontend\u003c/em\u003e now and it is quite a bit of work to maintain it and certain parts of it are starting to show the lack of resources put into it. We can't deploy easily individually, our tests are very slow, and crucially our organization thinks there is significant risk in a deployment so they have set a very complicated and long QA process for us to get deployments to production.\u003cp\u003eRealistically I think it is an organizational issue and I've been leaning towards multirepo due to the restricted resources and it would be easier to put some of this work on the teams making the individual parts themselves.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Ask HN: Monorepo vs. Multi-Repo",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-12-14T15:07:50.000Z",
        "title": null,
        "url": null,
        "author": "Jugurtha",
        "points": null,
        "story_text": null,
        "comment_text": "\u0026gt;\u003ci\u003emicrofrontend implementation\u003c/i\u003e\u003cp\u003eWhat does this mean?\u003cp\u003e\u0026gt;* We are debating between a using a monorepo or multi-repo strategy*\u003cp\u003eWhy? What\u0026#x27;s the debate like?",
        "num_comments": null,
        "story_id": 29548592,
        "story_title": "Ask HN: Monorepo vs. Multi-Repo",
        "story_url": null,
        "parent_id": 29548592,
        "created_at_i": 1639494470,
        "_tags": [
            "comment",
            "author_Jugurtha",
            "story_29548592"
        ],
        "objectID": "29552321",
        "_highlightResult": {
            "author": {
                "value": "Jugurtha",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "\u0026gt;\u003ci\u003e\u003cem\u003emicrofrontend\u003c/em\u003e implementation\u003c/i\u003e\u003cp\u003eWhat does this mean?\u003cp\u003e\u0026gt;* We are debating between a using a monorepo or multi-repo strategy*\u003cp\u003eWhy? What's the debate like?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Ask HN: Monorepo vs. Multi-Repo",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-10-20T14:32:55.000Z",
        "title": null,
        "url": null,
        "author": "sdevonoes",
        "points": null,
        "story_text": null,
        "comment_text": "\u0026gt; I have seen many examples where developers thought they were improving code quality by implementing some pattern or architecture but actually made it worse.\u003cp\u003e\u0026gt; - Code quality is quite subjective and the field is driven by opinions and fads.\u003cp\u003eAgree. In almost every team I have been part of, when discussing code quality there was almost never consensus regarding what\u0026#x27;s good and bad.\u003cp\u003eBesides, in almost every company I have worked for, modules (or products) were usually refactored after 3 years or so (as in: the code that deals with retrieving data from the DB remains almost intact, but everything else is moved out to its own repository: the frontend as microfrontend and a new in-between layer (call it a proxy or \u0026quot;backend for frontend\u0026quot;))... so there was never a huge motivation to write quality code, just to write \u0026quot;good enough\u0026quot; code.",
        "num_comments": null,
        "story_id": 28926825,
        "story_title": "Code quality: a concern for businesses, bottom lines, and empathetic programmers",
        "story_url": "https://stackoverflow.blog/2021/10/18/code-quality-a-concern-for-businesses-bottom-lines-and-empathetic-programmers/",
        "parent_id": 28927457,
        "created_at_i": 1634740375,
        "_tags": [
            "comment",
            "author_sdevonoes",
            "story_28926825"
        ],
        "objectID": "28931090",
        "_highlightResult": {
            "author": {
                "value": "sdevonoes",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "\u0026gt; I have seen many examples where developers thought they were improving code quality by implementing some pattern or architecture but actually made it worse.\u003cp\u003e\u0026gt; - Code quality is quite subjective and the field is driven by opinions and fads.\u003cp\u003eAgree. In almost every team I have been part of, when discussing code quality there was almost never consensus regarding what's good and bad.\u003cp\u003eBesides, in almost every company I have worked for, modules (or products) were usually refactored after 3 years or so (as in: the code that deals with retrieving data from the DB remains almost intact, but everything else is moved out to its own repository: the frontend as \u003cem\u003emicrofrontend\u003c/em\u003e and a new in-between layer (call it a proxy or \u0026quot;backend for frontend\u0026quot;))... so there was never a huge motivation to write quality code, just to write \u0026quot;good enough\u0026quot; code.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Code quality: a concern for businesses, bottom lines, and empathetic programmers",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://stackoverflow.blog/2021/10/18/code-quality-a-concern-for-businesses-bottom-lines-and-empathetic-programmers/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-10-13T09:47:30.000Z",
        "title": null,
        "url": null,
        "author": "risratorn",
        "points": null,
        "story_text": null,
        "comment_text": "DataCamp | On-site \u0026amp; Remote (within 2h of CET timezone) | Senior\u0026#x2F;Staff engineering roles | Full-time + equity | \u003ca href=\"https:\u0026#x2F;\u0026#x2F;www.datacamp.com\u0026#x2F;jobs\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;www.datacamp.com\u0026#x2F;jobs\u003c/a\u003e\u003cp\u003eDataCamp is looking for multiple Full Stack software engineers proficient with Typescript \u0026amp; React, Ruby on Rails is a big plus.\u003cp\u003eTech: NodeJS\u0026#x2F;Typescript, Express\u0026#x2F;Koa\u0026#x2F;Next\u0026#x2F;Nest, React, Apollo, VueJS, Microfrontend Architecture, Microservices Architecture, Ruby on Rails, VueJS, Terraform, AWS (EC2, S3, SNS\u0026#x2F;SQS, Athena), CI\u0026#x2F;CD, CircleCI, DataDog, Sentry, Docker\u0026#x2F;Kubernetes\u003cp\u003e---\u003cp\u003eFull Stack Software Engineer - Commercial (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3271616\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3271616\u003c/a\u003e)\u003cp\u003eSenior Full Stack Software Engineer (TypeScript\u0026#x2F;Ruby) - Enterprise (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3085562\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3085562\u003c/a\u003e)\u003cp\u003eSenior Mobile Engineer (React Native) (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2982175\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2982175\u003c/a\u003e)\u003cp\u003eSenior Software Engineer (JS\u0026#x2F;TypeScript) - Learn (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;1402346\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;1402346\u003c/a\u003e)\u003cp\u003eSenior Full Stack Software Engineer (TypeScript\u0026#x2F;Python) - Workspace (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2582866\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2582866\u003c/a\u003e)\u003cp\u003eSenior Growth Engineer - Workspace (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3361225\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;3361225\u003c/a\u003e)\u003cp\u003eEngineering Manager (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2356366\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2356366\u003c/a\u003e)\u003cp\u003eInfrastructure Engineer (\u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2540920\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;jobs\u0026#x2F;2540920\u003c/a\u003e)\u003cp\u003e---\u003cp\u003eCheck \u003ca href=\"https:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;\" rel=\"nofollow\"\u003ehttps:\u0026#x2F;\u0026#x2F;boards.greenhouse.io\u0026#x2F;datacamp\u0026#x2F;\u003c/a\u003e for even more open positions!",
        "num_comments": null,
        "story_id": 28719320,
        "story_title": "Ask HN: Who is hiring? (October 2021)",
        "story_url": null,
        "parent_id": 28719320,
        "created_at_i": 1634118450,
        "_tags": [
            "comment",
            "author_risratorn",
            "story_28719320"
        ],
        "objectID": "28850182",
        "_highlightResult": {
            "author": {
                "value": "risratorn",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "DataCamp | On-site \u0026amp; Remote (within 2h of CET timezone) | Senior/Staff engineering roles | Full-time + equity | \u003ca href=\"https://www.datacamp.com/jobs\" rel=\"nofollow\"\u003ehttps://www.datacamp.com/jobs\u003c/a\u003e\u003cp\u003eDataCamp is looking for multiple Full Stack software engineers proficient with Typescript \u0026amp; React, Ruby on Rails is a big plus.\u003cp\u003eTech: NodeJS/Typescript, Express/Koa/Next/Nest, React, Apollo, VueJS, \u003cem\u003eMicrofrontend\u003c/em\u003e Architecture, Microservices Architecture, Ruby on Rails, VueJS, Terraform, AWS (EC2, S3, SNS/SQS, Athena), CI/CD, CircleCI, DataDog, Sentry, Docker/Kubernetes\u003cp\u003e---\u003cp\u003eFull Stack Software Engineer - Commercial (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/3271616\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/3271616\u003c/a\u003e)\u003cp\u003eSenior Full Stack Software Engineer (TypeScript/Ruby) - Enterprise (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/3085562\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/3085562\u003c/a\u003e)\u003cp\u003eSenior Mobile Engineer (React Native) (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/2982175\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/2982175\u003c/a\u003e)\u003cp\u003eSenior Software Engineer (JS/TypeScript) - Learn (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/1402346\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/1402346\u003c/a\u003e)\u003cp\u003eSenior Full Stack Software Engineer (TypeScript/Python) - Workspace (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/2582866\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/2582866\u003c/a\u003e)\u003cp\u003eSenior Growth Engineer - Workspace (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/3361225\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/3361225\u003c/a\u003e)\u003cp\u003eEngineering Manager (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/2356366\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/2356366\u003c/a\u003e)\u003cp\u003eInfrastructure Engineer (\u003ca href=\"https://boards.greenhouse.io/datacamp/jobs/2540920\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/jobs/2540920\u003c/a\u003e)\u003cp\u003e---\u003cp\u003eCheck \u003ca href=\"https://boards.greenhouse.io/datacamp/\" rel=\"nofollow\"\u003ehttps://boards.greenhouse.io/datacamp/\u003c/a\u003e for even more open positions!",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Ask HN: Who is hiring? (October 2021)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-10-01T08:53:44.000Z",
        "title": null,
        "url": null,
        "author": "renke1",
        "points": null,
        "story_text": null,
        "comment_text": "The microfrontend hype kind of revived SSI a bit, but I would say it\u0026#x27;s still very much niche.",
        "num_comments": null,
        "story_id": 28703680,
        "story_title": "Injecting environment variables into static websites using Nginx",
        "story_url": "https://www.innoq.com/de/blog/nginx-ssi-env/",
        "parent_id": 28710887,
        "created_at_i": 1633078424,
        "_tags": [
            "comment",
            "author_renke1",
            "story_28703680"
        ],
        "objectID": "28716113",
        "_highlightResult": {
            "author": {
                "value": "renke1",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "The \u003cem\u003emicrofrontend\u003c/em\u003e hype kind of revived SSI a bit, but I would say it's still very much niche.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Injecting environment variables into static websites using Nginx",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://www.innoq.com/de/blog/nginx-ssi-env/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-09-30T14:34:31.000Z",
        "title": null,
        "url": null,
        "author": "stillbourne",
        "points": null,
        "story_text": null,
        "comment_text": "Right now I am working on converting a front end application written in angualar\u0026#x2F;typescript using a monorepo technology called nx.dev into a micro-frontend architecture. All the teams that have been contributing code to the project never bothered to use nx in the way that it was intended and disabled linting for the entire project. The thing is if people had followed the linting rules it would have made my life 1000x times easier because now I have to take a scalpel to the monolith they\u0026#x27;ve made and break it down into smaller parts. Linting rules would have told them to respect module boundaries and warned about circular dependencies. Now I have to clean up the mess.",
        "num_comments": null,
        "story_id": 28706393,
        "story_title": "Are Software Engineering “best practices” just developer preferences?",
        "story_url": "https://floverfelt.org/posts/software-best-practices.html",
        "parent_id": 28706393,
        "created_at_i": 1633012471,
        "_tags": [
            "comment",
            "author_stillbourne",
            "story_28706393"
        ],
        "objectID": "28706813",
        "_highlightResult": {
            "author": {
                "value": "stillbourne",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Right now I am working on converting a front end application written in angualar/typescript using a monorepo technology called nx.dev into a \u003cem\u003emicro-frontend\u003c/em\u003e architecture. All the teams that have been contributing code to the project never bothered to use nx in the way that it was intended and disabled linting for the entire project. The thing is if people had followed the linting rules it would have made my life 1000x times easier because now I have to take a scalpel to the monolith they've made and break it down into smaller parts. Linting rules would have told them to respect module boundaries and warned about circular dependencies. Now I have to clean up the mess.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Are Software Engineering “best practices” just developer preferences?",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://floverfelt.org/posts/software-best-practices.html",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-09-25T21:51:23.000Z",
        "title": null,
        "url": null,
        "author": "Chyzwar",
        "points": null,
        "story_text": null,
        "comment_text": "With webpack you can use module federation to share code and reduce bundle size for micro-frontend applications. There are other ways to make your application bundle smaller.\u003cp\u003eI spend a lot of time optimizing performance at work, both for UX and DX. It is common on HN to bash on large bundle sizes of SPAs, but in reality this not a problem unless users are on IE. At work, I often work tirelessly to reduce the amount of dependencies and bundle size, but I know that this would not make things faster, just more maintainable.\u003cp\u003eFor UX perf killers are IMO:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  - rendering large number of deeply nested dom nodes and doing repaints and reflows.\n  - large data fetches and storing huge number of objects in memory.\n  - slow\u0026#x2F;flaky APIs, in many cases slow backend is main bottleneck, JS is plenty fast\n  - silly animations, bad design that force clicking and multi stage workflows. \n\n\u003c/code\u003e\u003c/pre\u003e\nFor DX perf killers\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  - micro-something. Micro services\u0026#x2F;frontend in organistions without deep pockets.    \n  - special snowflakes internal abandoned framework that only two people in company know\n  - lack of dedicated people for tooling and dev infrastructure\n  - lava layer design pattern, multiple competing technologies used within same codebase\u0026#x2F;product.\u003c/code\u003e\u003c/pre\u003e",
        "num_comments": null,
        "story_id": 28654776,
        "story_title": "The Case for ‘Developer Experience’",
        "story_url": "https://future.a16z.com/the-case-for-developer-experience/",
        "parent_id": 28655697,
        "created_at_i": 1632606683,
        "_tags": [
            "comment",
            "author_Chyzwar",
            "story_28654776"
        ],
        "objectID": "28656514",
        "_highlightResult": {
            "author": {
                "value": "Chyzwar",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "With webpack you can use module federation to share code and reduce bundle size for \u003cem\u003emicro-frontend\u003c/em\u003e applications. There are other ways to make your application bundle smaller.\u003cp\u003eI spend a lot of time optimizing performance at work, both for UX and DX. It is common on HN to bash on large bundle sizes of SPAs, but in reality this not a problem unless users are on IE. At work, I often work tirelessly to reduce the amount of dependencies and bundle size, but I know that this would not make things faster, just more maintainable.\u003cp\u003eFor UX perf killers are IMO:\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  - rendering large number of deeply nested dom nodes and doing repaints and reflows.\n  - large data fetches and storing huge number of objects in memory.\n  - slow/flaky APIs, in many cases slow backend is main bottleneck, JS is plenty fast\n  - silly animations, bad design that force clicking and multi stage workflows. \n\n\u003c/code\u003e\u003c/pre\u003e\nFor DX perf killers\u003cp\u003e\u003cpre\u003e\u003ccode\u003e  - micro-something. Micro services/frontend in organistions without deep pockets.    \n  - special snowflakes internal abandoned framework that only two people in company know\n  - lack of dedicated people for tooling and dev infrastructure\n  - lava layer design pattern, multiple competing technologies used within same codebase/product.\u003c/code\u003e\u003c/pre\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "The Case for ‘Developer Experience’",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://future.a16z.com/the-case-for-developer-experience/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-09-13T13:34:35.000Z",
        "title": null,
        "url": null,
        "author": "ashishbharadwaj",
        "points": null,
        "story_text": null,
        "comment_text": "Ivanti Hiring | Staff Engineer (Python) | Senior Engineer (Javascript, React) | India | Fulltime\u003cp\u003eStaff Engineer (Python) JD : (3 Openings)\u003cp\u003e- 7-10 years of experience.\u003cp\u003e- Wizard of Python, Django or similar web api framework.\u003cp\u003e- Experience with Kafka or similar messaging queuing service.\u003cp\u003e- Experience with Elastic Search.\u003cp\u003e- Experience with micro services.\u003cp\u003e- Solid understanding of Containers and Container Orchestration frameworks like kubernetes.\u003cp\u003e- Solid understanding of design patterns and principles.\u003cp\u003e- Solid Architectural understanding.\u003cp\u003e- Ability to write clean, production ready, highly scalable, modular and well tested code.\u003cp\u003e- Dedicated smart worker.\u003cp\u003eSenior Engineer (Javascript, React) : (3 Openings)\u003cp\u003e- 2 to 5 Years of experience\u003cp\u003e- Extensive and solid understand of javascript\u003cp\u003e- Solid understanding or React or similar UI frameworks\u003cp\u003e- Well versed with module bundlers like webpack, Rollup etc..\u003cp\u003e- Understanding of micro frontend architecture.\u003cp\u003eEmail your resume at \nreffermenow@gmail.com",
        "num_comments": null,
        "story_id": 28380661,
        "story_title": "Ask HN: Who is hiring? (September 2021)",
        "story_url": null,
        "parent_id": 28380661,
        "created_at_i": 1631540075,
        "_tags": [
            "comment",
            "author_ashishbharadwaj",
            "story_28380661"
        ],
        "objectID": "28511263",
        "_highlightResult": {
            "author": {
                "value": "ashishbharadwaj",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Ivanti Hiring | Staff Engineer (Python) | Senior Engineer (Javascript, React) | India | Fulltime\u003cp\u003eStaff Engineer (Python) JD : (3 Openings)\u003cp\u003e- 7-10 years of experience.\u003cp\u003e- Wizard of Python, Django or similar web api framework.\u003cp\u003e- Experience with Kafka or similar messaging queuing service.\u003cp\u003e- Experience with Elastic Search.\u003cp\u003e- Experience with micro services.\u003cp\u003e- Solid understanding of Containers and Container Orchestration frameworks like kubernetes.\u003cp\u003e- Solid understanding of design patterns and principles.\u003cp\u003e- Solid Architectural understanding.\u003cp\u003e- Ability to write clean, production ready, highly scalable, modular and well tested code.\u003cp\u003e- Dedicated smart worker.\u003cp\u003eSenior Engineer (Javascript, React) : (3 Openings)\u003cp\u003e- 2 to 5 Years of experience\u003cp\u003e- Extensive and solid understand of javascript\u003cp\u003e- Solid understanding or React or similar UI frameworks\u003cp\u003e- Well versed with module bundlers like webpack, Rollup etc..\u003cp\u003e- Understanding of \u003cem\u003emicro frontend\u003c/em\u003e architecture.\u003cp\u003eEmail your resume at \nreffermenow@gmail.com",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Ask HN: Who is hiring? (September 2021)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-08-21T11:46:55.000Z",
        "title": null,
        "url": null,
        "author": "midrus",
        "points": null,
        "story_text": null,
        "comment_text": "THIS. Server side templates and something like Unpoly is what 90% of projects need.\u003cp\u003eBut here I am at work, doing CRUD forms with rxjs, epics, redux, websockets and a shitton of home made packages for doing validation, lazy translations, mixing microfrontends, etc, etc.",
        "num_comments": null,
        "story_id": 28239692,
        "story_title": "A Visual Guide to React Rendering",
        "story_url": "https://alexsidorenko.com/blog/react-render-always-rerenders/",
        "parent_id": 28244403,
        "created_at_i": 1629546415,
        "_tags": [
            "comment",
            "author_midrus",
            "story_28239692"
        ],
        "objectID": "28256190",
        "_highlightResult": {
            "author": {
                "value": "midrus",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "THIS. Server side templates and something like Unpoly is what 90% of projects need.\u003cp\u003eBut here I am at work, doing CRUD forms with rxjs, epics, redux, websockets and a shitton of home made packages for doing validation, lazy translations, mixing \u003cem\u003emicrofrontend\u003c/em\u003es, etc, etc.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "A Visual Guide to React Rendering",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://alexsidorenko.com/blog/react-render-always-rerenders/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2021-07-23T09:38:41.000Z",
        "title": null,
        "url": null,
        "author": "jeetsim",
        "points": null,
        "story_text": null,
        "comment_text": "Monorepo vs polyrepo is increasingly becoming an ongoing debate among frontend teams. In this article, we take you through the pros and cons of both these approaches. You\u0026#x27;ll get to know about the use cases suitable for each of these approaches and have a better idea as to which one you should employ.\u003cp\u003eComponent-driven development and micro frontend architecture are the two most sought after ways to build scalable frontend during web app development. The crux behind both these approaches is to break down the frontend into smaller entities. One method enables you to achieve this through smaller components while the other has the provision for building micro frontends.\u003cp\u003eWhile both these approaches offer a great deal of flexibility and scalability to your frontend, they also leave you with a lot more moving parts compared to what you’d have on a conventional frontend monolith. With a lot more on the plate, companies start feeling the need of a system that offers them better visibility over the disparate components, makes it easier to manage dependencies, and facilitates product reusability at the same time.\u003cp\u003eCheck out the original article to read more about Ending Monorepo Vs Polyrepo Debate.",
        "num_comments": null,
        "story_id": 27928886,
        "story_title": "Ending Monorepo vs Polyrepo Debate",
        "story_url": "https://www.simform.com/monorepo-vs-polyrepo/",
        "parent_id": 27928886,
        "created_at_i": 1627033121,
        "_tags": [
            "comment",
            "author_jeetsim",
            "story_27928886"
        ],
        "objectID": "27928887",
        "_highlightResult": {
            "author": {
                "value": "jeetsim",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Monorepo vs polyrepo is increasingly becoming an ongoing debate among frontend teams. In this article, we take you through the pros and cons of both these approaches. You'll get to know about the use cases suitable for each of these approaches and have a better idea as to which one you should employ.\u003cp\u003eComponent-driven development and \u003cem\u003emicro frontend\u003c/em\u003e architecture are the two most sought after ways to build scalable frontend during web app development. The crux behind both these approaches is to break down the frontend into smaller entities. One method enables you to achieve this through smaller components while the other has the provision for building micro frontends.\u003cp\u003eWhile both these approaches offer a great deal of flexibility and scalability to your frontend, they also leave you with a lot more moving parts compared to what you’d have on a conventional frontend monolith. With a lot more on the plate, companies start feeling the need of a system that offers them better visibility over the disparate components, makes it easier to manage dependencies, and facilitates product reusability at the same time.\u003cp\u003eCheck out the original article to read more about Ending Monorepo Vs Polyrepo Debate.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "microfrontend"
                ]
            },
            "story_title": {
                "value": "Ending Monorepo vs Polyrepo Debate",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://www.simform.com/monorepo-vs-polyrepo/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }
]

export default stories;