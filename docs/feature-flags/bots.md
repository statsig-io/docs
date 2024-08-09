---
title: Bots
sidebar_label: Bots
slug: /feature-flags/bots
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

## Bots & Filtering

One common source of frustration when monitoring gate traffic is online bot traffic from sources like search engines and AI scrapers. These can make it harder to see how many "real" users are seeing your changes. Statsig has bot filtering in place to remove known bots from your exposures data, meaning the exposure counts you see and any analytics you do will be clean. You won't have to worry if the data you're looking at is influenced by bots or real users.

Bot filtering is done on all types of exposures data, not just feature flags. You can be sure that anytime you're looking at analysis results for feature flags, holdouts, layers, and experiments bots have been filtered out. This ensures that you're looking at results for real users and not web scrapers in your rollouts. For more on on Bot Filtering rollout, see the [Statsig Blog](https://www.statsig.com/blog/guide-online-bot-filtering).

Once bot data is filtered from your exposures data, it will not be viewable in the Statsig console. We're exploring how to better surface this information in the future. Please reach out via slack support if you have additional questions.

### Controlling Gates and Experiments for Bots

By design, Statsig doesn't block bots from getting your feature flags and experiments. We simply filter out their exposures from any analysis data and the count of exposures that you see in Pulse. There are no changes in the API or SDK results for bots, and they will be served configs and variants following your setup.

You might, however, want to purposefully restrict what features bots see. For example, you're testing a new homepage variant but you don't want search engines to index it yet. In this case, there is an easy way to do so via Segments:

1. Create a "Known Bots" Segment for your project:

    Create a new segment, ensuring that it will be a **conditional** segment.

    ![Screenshot 2024-08-09 at 1 21 05 PM](https://github.com/user-attachments/assets/5bc62f62-7613-41d2-bcca-6f89f13baa3a)

    Once created, add a new rule to the segment. Set Criteria to "Browser Name". Leave Operator as "Any Of". In the Values field, copy + paste the following string in its entirety. (There is a copy button to the right.) When pasting, Statsig console will take care of splitting the bots up into individual names.

    ```
    TSMbot, Googlebot, FacebookBot, TwitterBot, AdsBot-Google, ImagesiftBot, Dragonbot, bingbot, YandexRenderResourcesBot, startmebot, SeznamBot, Better Uptime Bot, SeekportBot, Slackbot-LinkExpanding, googlebot, harsilbot, AhrefsBot, Applebot, PetalBot, Pokey_Bot, Preview Service; bot, Googlebot-Image, WRTNBot, GPTBot, MJ12bot, YandexBot, Slackbot, trendictionbot0, SmarshBot, Amazonbot, VirusTotalBot, GooglePlusBot, com/bot, DuckDuckBot, Discordbot, ; bot, TermlyBot, YandexAccessibilityBot, UptimeRobot, CCBot, BitSightBot, AwarioSmartBot, SiteAuditBot, pingbot, ; Bot, Pinterestbot, idealo-bot, net/bot, AwarioBot, BLEXBot, adsbot, Linkbot, AcademicBotRTU, MojeekBot, LinkedInBot, BeeperBot, robot, PopeTech-ScanBot, FullStoryBot, Storebot, Zoombot, coccocbot, Mattermost-Bot, Nigooutbot, EzoicBot, com/bots, FreshpingBot, Mail.RU_Bot, Mediumbot, tkbot, triptease-bot, KlaxoonBot, CriteoBot, SMTBot, JobboerseBot, Mediatoolkitbot, iCjobs Stellenangebote, StatusCakeBot, AppleNewsBot, ClaudeBot, AmazonAdBot, GoogleBot, SemrushBot, SynologyChatBot, YandexMobileBot, bitlybot, ) Bot, redditbot, Radius Compliance Bot, Twitterbot, PingdomBot, DotBot, amazonproductbot, iASD_SpiderBot, XBot, WallabyupBot, XBot_Senior, HatenaBlog-bot, Exabot, AASA-Bot, DuckAssistBot, StractBot, wpbot, YextBot, chatbot, Pharosbot, ClarityBot, Monsidobot, AndersPinkBot, DataForSeoBot, Robot, Quora-Bot, notebot, HyperMegaBotGettingOnlyHTMLsFromYourWebsite, bountybot, WincherBot, Leikibot, ExtendedStayBot, Caliperbot, keys-so-bot, aixnew_aibot, SeobilityBot, Synapse (bot, UOrgTestingBot, serpstatbot, Diffbot, SummalyBot, rogerbot, bidswitchbot, PiBot, aka-bot, node CCBot, seesawbot, SearchAtlas Bot, MetaJobBot, archive.org_bot, 48_safeAreaBottom, ZoominfoBot, TurnitinBot, Googlebot-Video, fixbot, taboolabot, yacybot, Plesk screenshot bot, traq-ogp-fetcher-curl-bot, Space Unfurl Bot, Gensparkbot, by fynd.bot, adbeat_bot, SurdotlyBot, Spider_Bot, DiffeoBot, Rhobot, Cookiebot, online-webceo-bot, dataforseobot, Google-Display-Ads-Bot, Timpibot, msnbot, AnytypeBot, com feedbot, Morningscore Bot, Magus Bot, Snap-URL-Preview (bot, BublupBot, DiscourseBot, policy adbeat_bot, htc_botdugls, RyteBot, SaberBot, fr_bot, node FullStoryBot, bot, turbotime, OtherwebBot, TypetalkBot, clever tech bot, compatible; botify, Rankabot, AspiegelBot, Wire LinkPreview Bot, oBot, Amazon-Advertising-ad-standards-bot, es_bot, Ocarinabot, dbot, tyseobot, WebExplorerSearchBot, DF Bot, WebwikiBot, DropboxPreviewBot, NetpeakCheckerBot, Sidetrade indexer bot, Dubbotbot, Senutobot, Veoozbot, Fedicabot, Nextdoorbot, ZumBot, Streamline3Bot, vebidoobot, cXensebot, YodaoBot, Scrapbox Bot, 47_safeAreaBottom, SemanticScholarBot, SiteCheckerBotCrawler, WalluBot, iAskBot, Scomplerbot, ViberBot, GnowitNewsbot, Letianpai_Robot, WellKnownBot, am a bot, OcelotBot, //boteden, TimeTreeBot, seo-audit-check-bot, SEBot, LoomlyBot, StrapBot, QualifiedBot, Swiftbot, uk_ldfc_renderbot, Jones Searchbot, tyseobotmobile, ahrefsbot, ChannelBot, emulate-seobots, twitterbot, SpeechifyBot, PhaverBot, Xbot, node DuckAssistBot, semaltbot, Bawaab_bot, net-Robot, SuperBot, KStandBot, Facebot, node AppleNewsBot, robots, com bot, siteauditbot, co Bot, SerendeputyBot, PartnerOptimizer-bot, http-spiders-bot, telegrambot, RepoLookoutBot, slackbot, LivelapBot, uk_ldfc_bot, Your robot, eu bot, nerdybot, TiggeritoBot, GraphiteBot, BLP_bbot, domainsbot, node ZoominfoBot, LinkArchiver twitter bot, 2ip bot, COIBotParser, exabot, Googlebot-Mobile, DuckDuckGo-Favicons-Bot, PerplexityBot, yoozBot, BadooBot, discobot, web-bot, SEMrushBot, Open Graph Bot, PaperLiBot, Blog Rssbot, MotoMinerBot, eventseekerBot, ResearchBot, MixrankBot, node bitlybot, SpringserveBot, Firefox superpagesbot2, DingTalkBot, MoodleBot, Brightbot, reurl-bot, osapon ) bot, foundeebot, petalbot, //botsin, SeoCherryBot, SemjiBot, TZUnfurlBot, TesseractBotAgent, yandexbot, 5) bot, PubMatic Crawler Bot, archiver/3.1.1 +http://www.archive.org/details/archive.org_bot, msnbot-media, bountybotttt, Googlebot-News, semrushbot, Gulper Web Bot, Google-bot, Superfeedr bot, node AwarioSmartBot, GG PeekBot, playwright-bot, Clickagy Intelligence Bot, x28-job-bot, Catrobatbot, VelaBot, pinterestbot, hstspreload-bot, FandomOpenGraphBot, spbot, Paqlebot, Summalybot, //botim, aiHitBot, JobBot, InsytfulBot, Taboolabot, gptbot, edansbot, KeybaseBot, GroupMeBot, macox bot, Xing Bot, uipbot, Dcard-link-preview-bot, ezoicbot, like Gecko) bot, mj12bot, applebot, jbot, LineBotWebhook, HearsayPDFBot, DatoCmsSearchBot, Quantcastbot, ActiveComplyBot, Parser Robot, amazon-product-discovery-bot, AppsFlyerBot, TwitterCommerceBot, obot, ID bot, GetLocalBot, CapterraBot, BugBountyBot, PlurkBot, preview service; bot, BacklinksExtendedBot, Testomatobot,
    ```
  
    ![Screenshot 2024-08-09 at 1 08 50 PM](https://github.com/user-attachments/assets/97c1cdfe-9d65-42ae-acc7-ed47b583fce6)

    This common segment can then be used for all your launches.


3. Apply the Segment to your Gates and Experiments:

    For Gates, create a new rule that controls the bot experience.

    ![Screenshot 2024-08-05 at 11 25 35 AM](https://github.com/user-attachments/assets/d6b51af0-ecfc-49c4-9e48-73bd276836ef)

    For experiments, create a Conditional Override that forces units in this segment to receive whatever version you want.

    ![Screenshot 2024-08-05 at 11 17 32 AM](https://github.com/user-attachments/assets/97ec1bcd-6f03-4b51-b0fe-9859f11559b1)

### Opting Out of Bot Filtering

Bot filtering is done at the project level. Admins can opt out of filtering through their console settings.

![image](https://github.com/user-attachments/assets/4c171000-6733-4136-a383-4cfd2b738ccb)
