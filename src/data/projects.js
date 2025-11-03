export const projects = {
  workflowAutomations: [
    {
      title: "Long Form Video Generator",
      description:
        "Automatically generate high-quality long-form videos from scripts or ideas using AI-powered tools and open-source models.",
      content: `Context: Creating engaging long-form video content for YouTube or other platforms often requires script writing, video generation, voiceovers, subtitles, and post-production. This process is highly manual, time-consuming, and difficult to scale for multiple channels or frequent uploads.
    
      Problem: Producing consistent, high-quality long-form video content involves multiple tools and steps—video generation, image upscaling, subtitle burning, and voiceover creation. Managing all these manually is slow, error-prone, and limits content output.
    
      What I Built: An end-to-end automation workflow that transforms scripts or content ideas into fully produced long-form videos. The system uses open-source AI models such as Wan 2.2 and Hauyan for video generation, ComfyUI workflows for image creation, Real-Esrgan for upscaling, and VibeVoice for automated voiceovers. It dynamically creates subtitles, integrates assets, and outputs ready-to-publish videos.
    
      Outcome: Streamlined long-form video production, enabling rapid, high-quality content creation without manual intervention. This workflow allows multiple YouTube channels or projects to scale efficiently, saving significant production time while maintaining professional video quality.`,
      tools: ["ComfyUI", "Wan 2.2", "Hauyan", "Real-Esrgan", "Qwen Image", "VibeVoice", "n8n"],
      image: "/long-form-video.png"
    },    
    {
      title: "AI Video Reels Generator",
      description:
        "Automatically generate 1-minute AI-powered video shorts optimized for YouTube, TikTok, and Instagram Reels.",
      content: `Context: Creating short-form video content for platforms like YouTube Shorts, TikTok, or Instagram Reels requires ideation, video production, voiceovers, captions, and platform-specific formatting. Doing this manually for every short is time-consuming and limits content output.
    
      Problem: Producing consistent, engaging 1-minute videos involves multiple steps—AI video generation, dynamic subtitles, automated voiceovers, and platform-ready formatting. Handling this manually slows down content production and prevents scaling across multiple platforms.
    
      What I Built: An end-to-end automation workflow that transforms scripts, captions, or ideas into ready-to-publish 1-minute videos. The workflow uses AI models for video generation (Wan 2.2, Hauyan), image creation and upscaling (ComfyUI, Qwen Image, Real-Esrgan), automated voiceovers via VibeVoice, and dynamic subtitle generation. The system automatically formats outputs for YouTube Shorts, TikTok, and Instagram Reels.
    
      Outcome: Streamlined short-form video production, enabling fast, consistent, and high-quality content creation across multiple platforms. This workflow drastically reduces manual effort while increasing engagement and reach for social media channels.`,
      tools: ["ComfyUI", "Wan 2.2", "Hauyan", "Real-Esrgan", "Qwen Image", "VibeVoice", "n8n", "TikTok API", "YouTube API"],
      image: "/video-reels.png"
    },
    {
      title: "YouTube Clips Generator",
      description:
        "Automatically generate short clips from long YouTube videos with dynamic subtitles, ready for social media sharing.",
      content: `Context: Extracting engaging clips from long-form YouTube videos typically involves manually trimming footage, creating subtitles, and reformatting for social media platforms. This process is tedious, time-consuming, and limits how often clips can be shared.
    
      Problem: Manually creating shorts from long videos is inefficient—requiring timestamp selection, video trimming, subtitle generation, and final formatting. This slows down content repurposing and reduces engagement opportunities.
    
      What I Built: An automated workflow that generates clips from long YouTube videos by simply providing start and end timestamps. The system trims the video using FFmpeg, generates accurate subtitles with Whisper, burns them directly into the video, and outputs social-media-ready clips. Additional automations handle formatting for YouTube Shorts, TikTok, and Instagram Reels.
    
      Outcome: Significantly reduced time and effort for creating video highlights, enabling frequent and consistent sharing of content from existing videos. The workflow ensures precise clipping, accurate subtitles, and ready-to-publish outputs, boosting engagement across platforms.`,
      tools: ["FFmpeg", "Whisper", "n8n", "YouTube API"],
      image: "/youtube-clips.png"
    },        
    {
      title: "Social Media Post Generator",
      description:
        "Automatically generate LinkedIn & X posts from blog or feed articles using AI + n8n.",
      content: `Context: Creating engaging social media content often involves ideation, drafting, getting approvals, and scheduling across multiple platforms. This manual process can be slow and challenging to scale.

      Problem: Generating consistent, high-quality social media posts, obtaining internal approvals, and publishing them efficiently across various platforms is a time-consuming manual effort prone to bottlenecks and delays.

      What I Built: A comprehensive automation workflow that drafts, refines, obtains approval for, and publishes social media posts. The workflow is triggered by a new idea, generates post options using AI, allows for human review and selection, and then publishes to platforms like X (Twitter) and Slack. It also includes notification features for various stages of the process.

      Outcome: Revolutionized social media content creation, enabling faster ideation, streamlined approval processes, and efficient multi-platform publishing. This leads to more consistent brand messaging and increased social media presence with significantly reduced manual effort.`,
      tools: ["n8n", "OpenAI API", "Telegram", "Linkedin", "X"],
      image: "/social-media.png",
    },
    {
      title: "Client Meeting Prep",
      description:
        "Automatically gathers and AI-summarizes all past client engagements from multiple platforms for informed meeting preparation.",
      content: `
      Context: Preparing for client meetings requires manually gathering past communications from various platforms, a time-consuming and error-prone process.

      Problem: Manual aggregation of client engagement history from disparate sources delays meeting prep and often leads to missing critical context.

      What I Built: An automated workflow that triggers from Airtable when a meeting status changes. An AI Agent then gathers and summarizes all relevant past engagements from Gmail, Basecamp, and HubSpot. The summary is emailed to attendees, and Airtable is updated.

      Outcome: Significantly streamlined meeting preparation, ensuring teams are better informed with comprehensive, automatically generated summaries, leading to more productive meetings and reduced manual effort.`,
      tools: ["n8n", "OpenAI API", "Airtable", "Gmail", "Basecamp", "HubSpot"],
      image: "/client-meeting-prep.png",
    },
    {
      title: "Focus Group",
      description:
        "Automatically gathers and AI-summarizes all past focus group feedback from Zoom calls for informed meeting preparation.",
      content: `
      Context: Gathering, analyzing, and reporting on focus group feedback involved manual transcription, data entry, and report compilation.

      Problem: Time-consuming and inconsistent manual processing of Zoom call transcripts, extraction of insights, data entry into Airtable, and generation of structured reports.

      What I Built: A two-part automation: one processes Zoom call transcripts using AI for summarization and updates Airtable; the second triggers from a chat message, uses an AI agent to compile reports based on guidelines, updates Google Docs, and sends the final report via Gmail.

      Outcome: Expedited insights from focus group calls, improved data consistency, automated report generation, and reduced manual effort for market research and product development teams. This workflow is estimated to cut report generation time by 50%.`,
      tools: ["n8n", "OpenAI API", "Airtable", "Google Docs", "Gmail"],
      image: "/focus-group.png",
    },
    {
      title: "Investment Research & Calculation",
      description:
        "Automatically calculates and reports on individual client investment performance, including rebalancing.",
      content: `
      Context: Manually tracking and reporting on individual client investment performance, including rebalancing, was complex and slow for an investment firm.

      Problem: Delays and errors in analyzing portfolios, calculating rebalances, and generating personalized performance reports due to manual processes.

      What I Built: An AI-powered workflow automating client investment portfolio analysis, rebalancing calculations, and personalized report generation. It uses AI to draft reports, integrates with Google Sheets/Docs for data and document management, and sends final reports via Gmail.

      Outcome: Streamlined investment management with reduced manual effort, improved accuracy, faster client communication, and enhanced personalization in reporting. This automation is estimated to save the firm approximately 10 hours per week in report generation and rebalancing tasks, or reduce operational costs by 35% annually.`,
      tools: ["n8n", "OpenAI API", "Google Sheets", "Google Docs", "Gmail"],
      image: "/investment-research.png",
    },
    {
      title: "Product Marketing campaigns for newly released features",
      description:
        "Automatically announces new product features to the marketing team.",
      content: `
      Context: Marketing teams manually announced new product features, leading to delays and inconsistent messaging.

      Problem: Feature releases, tracked in Google Sheets, lacked an automated system to trigger announcements upon status changes, causing lost time in communicating updates.

      What I Built: An n8n automation monitoring a Google Sheet. When a feature's status changes to "Released," it triggers a workflow: a Google Sheets Trigger detects the change, a Filter processes only "Released" items, a Limit controls flow, and an OpenAI model drafts a marketing message.

      Outcome: Streamlined feature announcements, enabling real-time communication with minimal manual input, improving awareness, speeding up feedback, and boosting product momentum.`,
      tools: ["n8n", "OpenAI API", "Google Sheets", "Gmail"],
      image: "/product-marketing.png",
    },
    {
      title: "Trending YouTube Content Scraper",
      description:
        "Automatically discover trending YouTube videos with high virality potential and get recommendations for relevant channels.",
      content: `Context: Keeping up with trending content on YouTube and identifying opportunities for viral videos is time-consuming. Manually tracking trends, analyzing engagement, and finding similar channels is inefficient and difficult to scale.
    
      Problem: Content creators and marketers struggle to consistently identify trending videos and channels with high engagement potential. Manual research is slow and often misses opportunities.
    
      What I Built: A fully automated content discovery workflow that scrapes trending YouTube videos, evaluates their virality potential based on views, likes, comments, and engagement metrics, and recommends relevant channels for inspiration or collaboration. The workflow stores all data in Baserow for easy querying and tracking, and uses Apify and the YouTube API for data collection. Additional automations notify the user of high-potential videos and channel recommendations.
    
      Outcome: Streamlined trend monitoring and content research, enabling creators to quickly identify viral video opportunities and relevant channels. This automation increases efficiency, reduces manual research time, and supports data-driven content strategy.`,
      tools: ["Baserow", "Apify", "YouTube API", "n8n"],
      image: "/trending-youtube.png"
    },    
    {
      title: "Zoom Meeting to Hubspot",
      description:
        "Automatically extracts meeting details from Zoom transcripts and updates HubSpot.",
      content: `
     Context: Virtual meeting insights are crucial for CRM, but manually extracting details from Zoom transcripts for HubSpot is inefficient.

    Problem: Manually moving Zoom meeting participant and detail information into HubSpot for contact management and note-taking is time-consuming and error-prone, leading to follow-up delays and incomplete CRM data.

    What I Built: An automated "Zoom Meeting Transcript to HubSpot" workflow. Triggered by a webhook, it retrieves transcripts, extracts participants, uses an OpenAI model to summarize key points, checks for existing contacts in HubSpot, and either updates an existing contact or creates a new one, then adds the meeting notes.

    Outcome: Significantly streamlined meeting follow-ups and enriched CRM data with improved accuracy, faster follow-ups, reduced manual effort, enhanced CRM utilization, and seamless integration between Zoom and HubSpot.`,
      tools: ["n8n", "OpenAI API", "HubSpot", "Zoom"],
      image: "/zoom-meeting.png",
    },
    {
      title: "Intelligent Cold Call Nurturing",
      description:
        "Automatically transcribes cold calls, extracts key lead information, formats and stores it in the CRM, then automatically qualifies leads (hot/warm) and triggers targeted emails and Slack alerts.",
      content: `
     Context: Manually managing post-cold-call insights, lead categorization, and follow-ups is slow and inefficient for businesses.

      Problem: Inefficient extraction of call insights, delayed lead qualification, inconsistent follow-ups, and poor CRM integration hinder effective lead nurturing.

      What I Built: An automated workflow that transcribes cold calls, extracts key lead information, formats and stores it in the CRM, then automatically qualifies leads (hot/warm) and triggers targeted emails and Slack alerts.

      Outcome: Transformed lead management by accelerating qualification by over 80%, boosting sales efficiency with a 15% increase in follow-up conversions, ensuring 95% data accuracy in CRM, and increasing lead engagement by 20%.`,
      tools: ["n8n", "OpenAI API", "HubSpot", "Slack"],
      image: "/cold-call.png",
    },
    {
      title: "Browser Agent",
      description:
        "Automates complex web interactions (e.g., Browse apps, making purchases).",
      content: `
     Context: Businesses frequently perform repetitive web tasks like data entry or purchases, which are inefficient to do manually.

      Problem: Automating web interactions is hard due to fragile code and constant UI changes, requiring an intelligent system to mimic human Browse dynamically.

      What I Built: An "Browser Agent" workflow that automates complex web interactions (e.g., Browse apps, making purchases). Triggered by chat, it uses AI and specialized browser tools (Start Browser, Click, Type, Query, Load URL, End Session) for dynamic web control. A backup workflow ensures robust session initiation, including Slack notifications.

      Outcome: Significantly enhanced web-based operational efficiency by automating repetitive tasks, reducing manual effort and errors, increasing scalability and speed, and improving reliability through intelligent, dynamic web interaction.`,
      tools: ["n8n", "OpenAI API", "Airtop", "Telegram"],
      image: "/browser-agent.png",
    },
  ],
  aiChatbots: [
    {
      title: "AI Customer Service Bot",
      description: "Intelligent chatbot for handling customer inquiries",
      content: `
      Context: A customer service chatbot was needed to handle customer inquiries and improve response time.

      Problem: Manual handling of customer inquiries is time-consuming and inconsistent, leading to delayed responses and reduced customer satisfaction.

      What I Built: An AI-powered customer service chatbot built with Nodejs and OpenAI. It understands and responds to customer inquiries intelligently, reducing support workload and improving response time. Features include context-aware conversations, intent recognition, and integration-ready API endpoints for web or app support systems.

      Outcome: Significantly improved customer service by automating responses, reducing support workload, and improving response time.`,
      tools: ["Typescript", "OpenAI", "Express", "Node.js"],
      image: "/chatbot-themes.webp",
    },
    {
      title: "Sales Assistant Bot",
      description: "AI-powered bot for qualifying leads and scheduling demos",
      content: `
      Context: A sales assistant bot was needed to qualify leads and schedule demos.

      Problem: Manual handling of lead qualification and demo scheduling is time-consuming and inconsistent, leading to delayed responses and reduced sales opportunities.

      What I Built: An AI-powered sales assistant bot built with Nodejs and OpenAI. It understands and responds to customer inquiries intelligently, reducing support workload and improving response time. Features include context-aware conversations, intent recognition, and integration-ready API endpoints for web or app support systems.
      `,
      tools: ["n8n", "OpenAI", "VectorStore", "Pinecone"],
      image: "/sales-assistant.webp",
      // demoUrl: "https://demo.example.com/sales-bot",
    },
  ],
  fullstackProjects: [
    {
      title: "Curator Video",
      description: "Live-streaming platform",
      content: `
     Context / Situation:
      Curator Video is a live-streaming company based in the United States, operating a web platform that delivers video content. The existing platform was built on Angular.js, an older framework, which presented limitations in terms of performance, maintainability, and scalability for modern live-streaming features.


      The Problem:
      The legacy Angular.js codebase was hindering Curator Video's ability to innovate, scale, and provide a cutting-edge user experience. Specific challenges included:
        1. Outdated Technology: Angular.js made development slower and maintenance more complex.
        2. Performance Limitations: Older frameworks struggled with the demands of real-time features like live chat and smooth video delivery.
        3. Scalability: Difficulty in scaling the platform to accommodate a growing user base and increasing live-streaming volume.
        4. Modern Feature Implementation: Integrating advanced features like real-time chat and leveraging specialized live-streaming services was challenging.


      What I Built:
      As the Senior Frontend Developer for Curator Video, my primary responsibility was to lead and execute the complete migration and modernization of the web platform from Angular.js to a modern React and Next.js stack. This involved not just a re-platforming but also the implementation of key real-time functionalities.
      My core contributions included:
        • Full Migration to React and Next.js: Led the architectural design and hands-on development for migrating the entire frontend from Angular.js to a more performant and maintainable React/Next.js framework, significantly improving development velocity and application efficiency.
        • Real-time Chat Implementation (WebSockets): Designed and integrated robust real-time chat features into the live-streaming experience using WebSockets, enabling instant communication between broadcasters and viewers.
        • AWS IVS Integration for Live Streaming: Seamlessly integrated AWS Interactive Video Service (IVS) into the frontend, optimizing the delivery and playback of live video streams for a high-quality, low-latency viewing experience.


      Result / Outcome:
      My work as Senior Frontend Developer fundamentally transformed Curator Video's web platform, leading to significant improvements in performance, scalability, and feature capabilities.
      The key outcomes include:
        • Modernized Tech Stack: A robust and scalable React/Next.js frontend that is easier to maintain and faster to develop new features on.
        • Enhanced User Experience: Seamless, real-time interactive experiences through integrated chat and high-quality live video delivery via AWS IVS.
        • Improved Performance and Scalability: The new architecture is better equipped to handle higher user loads and deliver smoother live streams.
        • Accelerated Feature Development: The modern framework allows for quicker iteration and implementation of future live-streaming functionalities, positioning Curator Video for continued growth and innovation.
      `,
      tools: [
        "React",
        "Next.js",
        "AWS",
        "WebSockets",
        "Redux Toolkit",
        "Typescript",
      ],
      image: "/curator.png",
      demoUrl: "https://thecurator.com",
      // githubUrl: "https://github.com/emmanuelvictor/curator-video",
    },
    {
      title: "Avocado",
      description: "Multi-sided e-commerce platform",
      content: ` 
      Context / Situation:
      AvocadoNG is a growing e-commerce startup based in Nigeria, building a multi-sided platform that connects vendors and customers while streamlining internal operations through an intuitive admin system. To support their ambitious product roadmap, the company needed fast, responsive, and scalable web interfaces for customers, vendors, and internal staff.

      The Problem:
      AvocadoNG faced the challenge of developing and maintaining three different web applications simultaneously:
          • A customer-facing store with a seamless shopping experience.
          • A vendor portal for managing product listings, orders, and inventory.
          • An admin dashboard for overseeing platform operations, user activity, and reporting.

      The team also needed:
          • A unified design system to maintain consistency across the three interfaces.
          • Rapid development workflows without sacrificing quality or maintainability.
          • Robust testing and performance to handle growing traffic and data.


      What I Built:
      As the Lead Frontend Developer, I was responsible for architecting and implementing the frontend across all three platforms:
          • Customer Platform: Built with Next.js and TypeScript, delivering a fast, responsive shopping experience with modern UI components and optimized routing.
          • Vendor Dashboard: Developed tools for vendors to manage listings, orders, and finances, using GraphQL    and component-driven design.
          • Admin Panel: Created internal interfaces for staff to manage operations, approve vendors/products, and monitor performance metrics.

      Other core contributions:
        • Reusable Component System: Created a shared component library using StorybookJS, which improved design consistency and developer velocity.
        • API Integration: Worked closely with backend teams to integrate both REST and GraphQL APIs efficiently and securely.
        • Testing & QA: Implemented unit testing with Jest and integration testing using React Testing Library, ensuring reliability across workflows.
          • Responsive Design: Prioritized mobile-first development to ensure accessibility for all user roles across devices.


      Result / Outcome:
      The successful delivery of these three platforms helped AvocadoNG scale faster and serve customers more efficiently.
          • Improved Time-to-Market: Reusable components and optimized architecture reduced dev time across multiple projects.
          • Better User Experience: Clean, consistent interfaces for customers, vendors, and admins contributed to increased engagement and satisfaction.
          • Scalability: The platforms were well-structured to handle traffic growth and feature expansion without major rewrites.
          • Cross-team Collaboration: Clear separation of concerns and documentation made it easier for other developers to onboard and contribute quickly.`,
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "GraphQL",
        "StorybookJS",
        "Jest",
      ],
      image: "/avocado.png",
      demoUrl: "http://avocadoapp.ng/",
    },
    {
      title: "Bedspace",
      description: "Student housing and rental platform",
      content: ` 
      Context / Situation:
      Bedspace was a startup I co-founded to solve a real pain point for students seeking accommodation. The goal was to create a centralized, student-friendly platform that connects students with verified landlords and agents, streamlining the housing search and rental process in Nigerian universities.
    
      The Problem:
      Many students struggled with:
          • Lack of verified listings and secure channels to find accommodation.
          • Fragmented communication between landlords, agents, and students.
          • No centralized platform to compare options, make bookings, or report issues.
    
      The platform needed to:
          • Provide a responsive, easy-to-use UI for both students and property listers.
          • Support features like search, filtering, reviews, chat, and booking management.
          • Allow landlords to list and manage properties with transparency and control.
    
      What I Built:
      As a Fullstack Developer and technical co-founder, I designed and developed the entire platform architecture:
          • Student Platform: Built with Next.js and TypeScript, delivering a smooth housing search and booking experience.
          • Landlord Portal: Enabled property listings, availability management, tenant interaction, and booking controls.
          • Backend System: Developed RESTful APIs using Node.js and MongoDB for authentication, data storage, and secure communication.
    
      Other core contributions:
          • Real-time Chat: Implemented WebSocket-based chat between students and landlords.
          • API Documentation: Structured and documented the backend API to enable future scaling and easy onboarding.
          • UI/UX Design: Focused on a clean, intuitive layout that made the experience simple for non-technical users.
          • Deployment: Handled deployment using cloud services, ensuring performance and reliability for live usage.
          • User Feedback Loop: Integrated tools to collect user feedback and analytics for continuous improvement.
    
      Result / Outcome:
      Bedspace became a go-to platform in its niche, successfully helping students secure housing more efficiently.
          • Reduced Search Time: Students could easily browse verified listings and communicate directly with landlords.
          • Increased Listing Trust: Verified property management and review systems built credibility.
          • Platform Growth: The system was designed with future scaling in mind, with reusable components and modular backend.
          • Product-Market Fit: The solution resonated with students and universities looking to streamline off-campus housing.
      `,
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "SCSS",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      image: "/bedspace.png",
      // demoUrl: "https://bedspace.ng/" (if available),
    },
    {
      title: "Nectar App",
      description: "Grocery delivery mobile app",
      content: `
      Context / Situation:
      Nectar App was a personal practice project I undertook to improve my skills in mobile development, particularly using React Native and Expo. The goal was to build a functional and visually appealing grocery delivery app, simulating real-world features such as product browsing, cart management, user authentication, and checkout.
    
      The Problem:
      I wanted to recreate the experience of a typical grocery delivery application, with a focus on:
          • Designing and building a user-friendly shopping experience on mobile.
          • Implementing smooth navigation and state management.
          • Practicing integrations with mocked APIs and handling asynchronous operations.
          • Optimizing for responsiveness and performance across Android and iOS.
    
      What I Built:
      As the sole developer, I built the full mobile application using:
          • React Native with Expo for cross-platform development.
          • A modern UI design with reusable components and intuitive layouts.
          • Core features like product listing, cart functionality, search, and filters.
          • Authentication screens (sign up, login, forgot password).
          • State management using Context API and local storage for cart persistence.
    
      Other core contributions:
          • Clean and responsive UI for seamless user experience.
          • Navigation using React Navigation for tabbed and stacked screens.
          • Custom components for buttons, cards, inputs, and loaders.
          • Mocked product data and API responses to simulate a live backend.
          • Emphasis on code readability and modularity for future scalability.
    
      Result / Outcome:
      While this was a practice project, it served as a comprehensive learning experience and portfolio piece:
          • Improved my confidence and experience building production-like mobile apps.
          • Strengthened my understanding of React Native, Expo, and mobile UX patterns.
          • Reinforced skills in cross-platform performance and debugging.
          • Provided a showcase-ready project that mimics real-world app workflows.
      `,
      tools: [
        "React Native",
        "Expo",
        "Context API",
        "Zustand",
        "Typescript",
        "Rest API",
      ],
      image: "/nectar-app.png",
      githubUrl: "https://github.com/EmmanuelVictor62/nectar-app",
    },
  ],
};
