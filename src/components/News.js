import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loader from './loader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component   {

    static defaultProps = {
      country : 'in',
      pageSize : 8,
      category : 'general'
    }

    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
    }
  
    // articles = [{
    //   "source": {
    //     "id": "usa-today",
    //     "name": "USA Today"
    //   },
    //   "author": "Jeff Zillgitt",
    //   "title": "Nikola Jokic named NBA Finals MVP after leading Denver Nuggets to first championship - USA TODAY",
    //   "description": "Already a two-time league MVP, Nikola Jokic added an NBA championship and Finals MVP award to his impressive resume.",
    //   "url": "https://www.usatoday.com/story/sports/nba/2023/06/12/nikola-jokic-is-nba-finals-mvp-after-nuggets-win-first-championship/70314309007/",
    //   "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/13/USAT/7e113d26-946d-42fb-9f56-2bbf778a74a2-USATSI_20881603.jpg?crop=4799,2700,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    //   "publishedAt": "2023-06-13T06:00:00Z",
    //   "content": "DENVER Nikola Jokic claimed he didnt care about winning a third consecutive regular-season MVP in 2022-23.\r\nAll throughout the playoffs when he posted a statistical line in the box score that had nev… [+4764 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "CNBC"
    //   },
    //   "author": "Lim Hui Jie",
    //   "title": "Toyota shares surge 5% after announcing plans for next-gen battery EVs - CNBC",
    //   "description": "This unit, named BEV Factory, aims to roll out its \"next generation battery EVs in 2026\"",
    //   "url": "https://www.cnbc.com/2023/06/13/toyota-shares-surge-after-announcing-plans-for-next-gen-battery-evs.html",
    //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107129340-1664920711002-IMG_1525.jpg?v=1686633000&w=1920&h=1080",
    //   "publishedAt": "2023-06-13T05:10:00Z",
    //   "content": "A display of Toyota electrified vehicles at the 2022 New York Auto Show, April 13, 2022.\r\nShares of Japanese automaker Toyota spiked 5% Tuesday after the company announced it will introduce a full li… [+3071 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "YouTube"
    //   },
    //   "author": null,
    //   "title": "Climate change lawsuit: Montana youth file climate case | WION World DNA - WION",
    //   "description": "In one of its kind bids to counter climate change, activists have filed a climate lawsuit in the Court. They are demanding that the government takes urgent s...",
    //   "url": "https://www.youtube.com/watch?v=Mf8KA0FaNDQ",
    //   "urlToImage": "https://i.ytimg.com/vi/Mf8KA0FaNDQ/maxresdefault.jpg",
    //   "publishedAt": "2023-06-13T03:57:40Z",
    //   "content": null
    // },
    // {
    //   "source": {
    //     "id": "associated-press",
    //     "name": "Associated Press"
    //   },
    //   "author": "Adam Beam",
    //   "title": "California Gov. Newsom spars with Fox News host Hannity over Biden, immigration and the economy - The Associated Press",
    //   "description": "SACRAMENTO, Calif. (AP) — California Gov. Gavin Newsom sparred with Fox News host Sean Hannity on Monday night, insisting President Joe Biden is physically fit for a second term as president while refusing to say whether supporters have urged him to run again…",
    //   "url": "https://apnews.com/article/california-gavin-newsom-sean-hannity-fox-news-4b2dcfe3f13cf8ff8295740aaf544afb",
    //   "urlToImage": "https://storage.googleapis.com/afs-prod/media/64a1085ab2f84a309334cb00951a90ab/3000.webp",
    //   "publishedAt": "2023-06-13T03:44:25Z",
    //   "content": "SACRAMENTO, Calif. (AP) California Gov. Gavin Newsom sparred with Fox News host Sean Hannity on Monday night, insisting President Joe Biden is physically fit for a second term as president while refu… [+4306 chars]"
    // },
    // {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //   },
    //   "author": "",
    //   "title": "Fact checking Chris Christie’s CNN town hall - CNN",
    //   "description": "Former New Jersey Gov. Chris Christie has anchored his 2024 presidential campaign to calling out former President Donald Trump – specifically his falsehoods about the 2020 presidential election.",
    //   "url": "https://www.cnn.com/2023/06/12/politics/fact-check-chris-christie-cnn-town-hall/index.html",
    //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230612172034-05-chris-christie-cnn-town-hall-0612.jpg?c=16x9&q=w_800,c_fill",
    //   "publishedAt": "2023-06-13T03:30:00Z",
    //   "content": "Former New Jersey Gov. Chris Christie has anchored his 2024 presidential campaign to calling out former President Donald Trump specifically his falsehoods about the 2020 presidential election. \r\nDuri… [+6378 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "SciTechDaily"
    //   },
    //   "author": null,
    //   "title": "Astronomers Discover BEBOP-1c: Tatooine-Like Exoplanet Orbits Twin Stars in a Multiplanetary System - SciTechDaily",
    //   "description": "An international team of astronomers has announced the second-ever discovery of a multiplanetary circumbinary system. Astronomers at the University of Birmingham have discovered a second planet, named BEBOP-1c, in the rare multiplanetary circumbinary system B…",
    //   "url": "https://scitechdaily.com/?p=285657",
    //   "urlToImage": "https://scitechdaily.com/images/Planet-With-Two-Suns-Illustration.jpg",
    //   "publishedAt": "2023-06-13T03:03:38Z",
    //   "content": "ByUniversity of BirminghamJune 12, 2023\r\nAn international team of astronomers has announced the discovery of a second planet in a rare multiplanetary circumbinary system, known as BEBOP-1 or TOI-1338… [+8442 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Hoops Hype"
    //   },
    //   "author": "HoopsHype staff",
    //   "title": "Ranking: The easiest paths to the title in NBA history - Hoops Hype",
    //   "description": "HoopsHype ranks the easiest paths to an NBA title in history based on opponent winning percentage, where the 2023 Nuggets check in fifth.",
    //   "url": "https://hoopshype.com/lists/ranking-the-easiest-paths-to-the-title-in-nba-history/",
    //   "urlToImage": "https://hoopshype.com/wp-content/uploads/sites/92/2023/06/20862666.jpg?w=1024&h=576&crop=1",
    //   "publishedAt": "2023-06-13T03:02:58Z",
    //   "content": "Nathaniel S. Butler/NBAE via Getty Images\r\n26. Detroit Pistons (1989) – Opponents: Celtics, Bucks, Bulls and Lakers. Combined regular season winning percentage: 59.45%\r\n26. Washington Bullets (1978) … [+6383 chars]"
    // },
    // {
    //   "source": {
    //     "id": "al-jazeera-english",
    //     "name": "Al Jazeera English"
    //   },
    //   "author": "Al Jazeera",
    //   "title": "NATO’s largest air force drill prepares for ‘crisis situation’ - Al Jazeera English",
    //   "description": "Some 250 aircraft from 25 NATO and partner countries with 10,000 military personnel participating in ‘Air Defender 23’.",
    //   "url": "https://www.aljazeera.com/news/2023/6/13/natos-largest-air-force-drill-prepares-for-crisis-situation",
    //   "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/06/image-46.jpg?resize=1920%2C1080",
    //   "publishedAt": "2023-06-13T02:48:07Z",
    //   "content": "NATO has started the largest-ever air force deployment exercise in the Western military alliances history, a drill being presented as a display of unity among members and partners of the bloc as tens… [+4321 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "CBS Sports"
    //   },
    //   "author": null,
    //   "title": "2023 U.S. Open odds, golf picks: Scottie Scheffler, Jon Rahm predictions by model that hit the Masters - CBS Sports",
    //   "description": "U.S. Open 2023 picks for Scottie Scheffler, Jon Rahm, and Max Homa with Tiger Woods sidelined",
    //   "url": "https://www.cbssports.com/golf/news/2023-u-s-open-odds-golf-picks-scottie-scheffler-jon-rahm-predictions-by-model-that-hit-the-masters/",
    //   "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/05/17/c332c420-37f5-404a-8132-5ca42e9f3429/thumbnail/1200x675/c381ec60e88a38af0a8bd0b32b3409a9/jon-rahm-usatsi-2.jpg",
    //   "publishedAt": "2023-06-13T02:21:39Z",
    //   "content": "Rory McIlroy will seek his first major championship title in almost a decade at the 2023 U.S. Open, which begins on Thursday from Los Angeles Country Club. McIlroy missed the cut at the Masters in Ap… [+6218 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Deadline"
    //   },
    //   "author": "Tom Tapp",
    //   "title": "Treat Williams Dies: ‘Everwood’ Star Was 71 - Deadline",
    //   "description": "UPDATED with family statement: Treat Williams, the actor best known for playing Dr. Andy Brown on the Greg Berlanti-produced Everwood, has died, Deadline has confirmed. The actor was killed in a mo…",
    //   "url": "https://deadline.com/2023/06/treat-williams-dies-actor-everwood-hair-1235415225/",
    //   "urlToImage": "https://deadline.com/wp-content/uploads/2023/06/treat-williams-death.jpg?w=1024",
    //   "publishedAt": "2023-06-13T02:05:00Z",
    //   "content": "UPDATED with family statement:Treat Williams, the actor best known for playing Dr. Andy Brown on the Greg Berlanti-produced Everwood, has died, Deadline has confirmed. The actor was killed in a motor… [+3023 chars]"
    // },
    // {
    //   "source": {
    //     "id": "al-jazeera-english",
    //     "name": "Al Jazeera English"
    //   },
    //   "author": "Al Jazeera",
    //   "title": "Kylian Mbappe informs PSG he will not extend contract: Media - Al Jazeera English",
    //   "description": "Reports suggested that Paris Saint-Germain were hopeful Mbappe would trigger a contract extension.",
    //   "url": "https://www.aljazeera.com/news/2023/6/13/kylian-mbappe-informs-psg-he-will-not-extend-contract-media",
    //   "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/06/2023-05-07T185853Z_1699328763_UP1EJ571GQ3RA_RTRMADP_3_SOCCER-FRANCE-TRO-PSG-REPORT-1686617274.jpg?resize=1920%2C1440",
    //   "publishedAt": "2023-06-13T01:10:31Z",
    //   "content": "French football star Kylian Mbappe has told Paris Saint-Germain (PSG) he will leave the Ligue 1 champions when his contract ends next year, French sports newspaper LEquipe and international media org… [+1691 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "BBC News"
    //   },
    //   "author": "https://www.facebook.com/bbcnews",
    //   "title": "'Dead' woman found breathing in coffin at own funeral - BBC",
    //   "description": "Mourners realise the 76-year-old is still alive hours after she is placed in a cofifn.",
    //   "url": "https://www.bbc.com/news/world-latin-america-65886245",
    //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AFE3/production/_130072054_gettyimages-538235416.jpg",
    //   "publishedAt": "2023-06-13T00:28:33Z",
    //   "content": "Mourners at the funeral of an elderly Ecuadorian woman were startled to discover she was still alive.\r\nBella Montoya, 76, was declared dead last week following a suspected stroke.\r\nFive hours into he… [+1260 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Fox Business"
    //   },
    //   "author": "Louis Casiano",
    //   "title": "Twitter CEO Linda Yaccarino says site's goal is to be ‘world’s most accurate real-time information source’ - Fox Business",
    //   "description": "Twitter CEO Linda Yaccarino sent a memo to employees outlining her visions for the social media platform. She vowed it will be the \"world’s most accurate real-time information source.\"",
    //   "url": "https://www.foxbusiness.com/technology/twitter-ceo-linda-yaccarino-sites-goal-worlds-most-accurate-real-time-information-source",
    //   "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/05/0/0/Linda-Y.jpg?ve=1&tl=1",
    //   "publishedAt": "2023-06-13T00:26:56Z",
    //   "content": "New Twitter CEO Linda Yaccarino told employees on Monday that she shares her bosses' passion for unfiltered free speech on the social media platform. \r\nIn a memo titled \"Building Twitter 2.0 Together… [+1568 chars]"
    // },
    // {
    //   "source": {
    //     "id": "cbs-news",
    //     "name": "CBS News"
    //   },
    //   "author": null,
    //   "title": "Children from Amazon plane crash helped by Colombia commandos - CBS News",
    //   "description": "For Colombia's commandos, the rescue of four children who were lost in the Amazon after surviving a plane crash \"was a different mission\" from fighting armed groups.",
    //   "url": "https://www.cbsnews.com/news/children-amazon-plane-crash-colombia-commandos/",
    //   "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/06/01/62bc39d8-f498-4eb1-8954-8e3ea5458325/thumbnail/1200x630/3ada202429b842473b2bd5fb1d0682e0/gettyimages-1256207933.jpg",
    //   "publishedAt": "2023-06-12T23:42:00Z",
    //   "content": "Indigenous volunteers working alongside Colombia's army were a winning combination in the rescue of four children who were lost in the jungle for 40 days, but Colombian commandos, among the most seas… [+4496 chars]"
    // },
    // {
    //   "source": {
    //     "id": "associated-press",
    //     "name": "Associated Press"
    //   },
    //   "author": "Carolyn Thompson",
    //   "title": "1 dead after tour boat capsizes inside Erie Canal water tunnel cave in western New York - The Associated Press",
    //   "description": "A boat carrying hospitality workers capsized Monday during a tour of a historic underground cavern system built to carry water from the Erie Canal beneath the western New York city of Lockport, killing one person who became trapped beneath the overturned vess…",
    //   "url": "https://apnews.com/article/boat-capsizes-lockport-cave-4f7cf60f33ed04f9dbdd512cac18b00a",
    //   "urlToImage": "https://storage.googleapis.com/afs-prod/media/50a49548a3a54b76980fd3bc22bee690/2048.webp",
    //   "publishedAt": "2023-06-12T23:41:37Z",
    //   "content": "A boat carrying hospitality workers capsized Monday during a tour of a historic underground cavern system built to carry water from the Erie Canal beneath the western New York city of Lockport, killi… [+2678 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "The Guardian"
    //   },
    //   "author": "Guardian staff reporter",
    //   "title": "Russia-Ukraine war at a glance: what we know on day 475 of the invasion - The Guardian",
    //   "description": "Ukraine says it has retaken seven villages in counteroffensive; 41 people still missing after collapse of Kakhovka dam",
    //   "url": "https://www.theguardian.com/world/2023/jun/13/russia-ukraine-war-at-a-glance-what-we-know-on-day-475-of-the-invasion",
    //   "urlToImage": "https://i.guim.co.uk/img/media/f4916a011a793cbc8ca78e3e3646a06f3f09c8ce/0_231_5108_3064/master/5108.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aee91383331b3af31e7706af0f730451",
    //   "publishedAt": "2023-06-12T23:38:00Z",
    //   "content": "<li>Ukraine accused Russian forces of destroying another dam with the aim of slowing Kyivs counteroffensive. Valeriy Shershen, a Ukrainian military spokesperson, said the Russian military blew up a d… [+4788 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Billboard"
    //   },
    //   "author": "Starr Bowenbank",
    //   "title": "RM, Jimin & J-Hope Share Heartfelt Messages With ARMY Ahead of BTS’ 10th Anniversary - Billboard",
    //   "description": "“It’s not easy to support and love someone and give them strength for no particular reason,” Jimin’s message reads. “That is why I am able to understand how happy we a…",
    //   "url": "https://www.billboard.com/music/music-news/bts-10th-anniversary-rm-jimin-j-hope-messages-army-1235352125/",
    //   "urlToImage": "https://www.billboard.com/wp-content/uploads/2023/06/BTS-FESTA-press-photo-2023-billboard-1548.jpg?w=1024",
    //   "publishedAt": "2023-06-12T23:25:09Z",
    //   "content": "BTS‘ 10th anniversary is just one day away, and to celebrate — in addition to the series of activities and events taking place in Seoul for the occasion — RM, Jimin and J-Hope posted heartfelt messag… [+2006 chars]"
    // },
    // {
    //   "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //   },
    //   "author": "Ann E. Marimow",
    //   "title": "The impact Judge Aileen Cannon could have on the Trump classified case - The Washington Post",
    //   "description": "Trump-nominated Judge Aileen M. Cannon, who has less than three years on the bench, will make crucial decisions in the first federal prosecution of a former president.",
    //   "url": "https://www.washingtonpost.com/national-security/2023/06/12/judge-aileen-cannon-trump-case/",
    //   "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YHDY3VSSXUAHOQB27WX5YKNTWE.JPG&w=1440",
    //   "publishedAt": "2023-06-12T22:57:37Z",
    //   "content": "Comment on this story\r\nComment\r\nAileen M. Cannon, the federaljudge assigned to the Justice Departmentscriminal case against former president Donald Trump, will set the pace and rules for how the unpr… [+9235 chars]"
    // },
    // {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //   },
    //   "author": "Isabel Yip,Nicole Chavez",
    //   "title": "Illinois outlaws book bans in schools and public libraries - CNN",
    //   "description": "Illinois became the first state in the nation to prohibit book bans Monday, Gov. J.B. Pritzker announced, as states across the country continue to challenge and axe literature from public schools and libraries.",
    //   "url": "https://www.cnn.com/2023/06/12/us/illinois-public-libraries-schools-book-bans/index.html",
    //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230612172305-01-jb-pritzker-022323-file-restricted.jpg?c=16x9&q=w_800,c_fill",
    //   "publishedAt": "2023-06-12T22:26:00Z",
    //   "content": "Illinois became the first state in the nation to prohibit book bans Monday, Gov. J.B. Pritzker announced, as states across the country continue to challenge and axe literature from public schools and… [+2539 chars]"
    // },
    // {
    //   "source": {
    //     "id": "the-hill",
    //     "name": "The Hill"
    //   },
    //   "author": "The Hill",
    //   "title": "GOP rep accuses DOJ of setting trap to imprison Trump supporters: ‘They want J6 again’ - The Hill",
    //   "description": null,
    //   "url": "https://thehill.com/homenews/house/4046250-gop-rep-accuses-doj-of-setting-trap-to-imprison-trump-supporters-they-want-j6-again/",
    //   "urlToImage": null,
    //   "publishedAt": "2023-06-12T22:17:00Z",
    //   "content": null
    // }];

    capitalizedFirstLetter = (string) =>
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props)
    {
      super(props);
      this.state = {
        articles : [],
        // articles: this.articles,
        loading : false,
        page : 1,
        totalArticles : 0
      }
      document.title = ` ${this.capitalizedFirstLetter(this.props.category)} - NewsTown`;
    }

    async updateNews(){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.setState({ loading : true }); 
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          totalArticles: parsedData.totalResults,
          loading : false        
        });
        this.props.setProgress(100);
    }

    async componentDidMount()
    {
      this.updateNews();
    } 

    fetchMoreData = async () =>
    {
      this.setState({page : this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}` 
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         articles: this.state.articles.concat(parsedData.articles) ,
         totalArticles: parsedData.totalResults,      
        });
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' styles= {{ margin: '35px 0px', marginTop: '90px' }}>NewTown - Top Headlines from {this.capitalizedFirstLetter(this.props.category)} category</h1>
          {this.state.loading && <Loader /> } 
          <InfiniteScroll 
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loader />}
          >
          <div className='container'>
            <div className='row'>
            {
              this.state.articles.map((element) =>
              {
                return <div className='col-md-4' key = {element.url}>
                <NewsItems title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} />
            </div>
              }
            )}
          </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News