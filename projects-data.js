/* ============================================================
   PROJECT DATA
   ------------------------------------------------------------
   This is the ONLY file you need to touch to add, remove or
   reorder work on the site. Nothing else needs to change.

   HOW TO ADD A NEW PROJECT
   1. Copy one of the objects below (the { ... } block).
   2. Paste it into the `projects` array, wherever you want it
      to sit in the running order.
   3. Fill in the fields you actually have information for.
   4. Delete any field you don't have — don't leave it empty.
      (e.g. no results yet? delete the whole `results` line.)
   5. Drop your images in /assets/projects/ and point `cover`
      and `gallery` at the filenames.
   6. Save the file. That's it — no other code changes needed.

   FIELDS
   id          - short unique code, no spaces (used internally)
   title       - project name
   category    - one of: "Design", "Content", "SEO", "Email", "Brand"
                 (controls which filter button shows the project —
                 add a new category string here and a matching
                 button in index.html if you need a new one)
   tag         - short label shown on the card, e.g. "Graphic design"
   summary     - one or two sentences for the project card
   cover       - path to the main image, e.g. "assets/projects/crocs-1.jpg"
   gallery     - [array of extra image paths] — optional
   brief       - what you were asked to do — optional
   approach    - your process/thinking — optional
   tools       - [array of tools used] — optional
   results     - documented results/metrics only — optional
   featured    - true = shown near the top of Selected Work

   Leave a field out entirely rather than writing "N/A" or "TBD".
   ============================================================ */

const projects = [

  /* ----------------------------------------------------------
     ADD NEW PROJECTS HERE
     Paste new project objects above the Sips & Bites entry
     so your newest work leads the section.
  ---------------------------------------------------------- */

  {
    id: "crocs",
    title: "Crocs — Footwear Campaign Poster",
    category: "Design",
    tag: "Brand identity practice",
    summary: "A campaign poster built entirely on Crocs' real brand identity — their logo, palette and tone.",
    cover: "assets/projects/crocs-1.jpg",
    brief: "Recreate a Crocs campaign poster using the brand's real identity, not a generic template — proof I can design convincingly on-brand for an established company.",
    approach: "Studied Crocs' actual logo, colour palette and typography, then built a campaign poster ('Find Your Fit') that looks like it could sit inside their real marketing.",
    tools: ["Canva"],
    featured: true,
  },

  {
    id: "kivo",
    title: "Kivo — Product Campaign Flyer",
    category: "Design",
    tag: "Brand identity practice",
    summary: "A product-led promotional flyer using Kivo's own logo, colours and packaging as the brand reference.",
    cover: "assets/projects/kivo-1.jpg",
    brief: "Design a bold, product-forward promotional flyer for Kivo, staying true to their existing brand identity.",
    approach: "Used Kivo's real logo, palette and product packaging as reference to design a flyer that matches how the brand already presents itself.",
    tools: ["Canva"],
    featured: true,
  },

  {
    id: "ikea-brochure",
    title: "IKEA — Brochure Design",
    category: "Design",
    tag: "Brand identity practice",
    summary: "A multi-page catalogue brochure built on IKEA's real brand system — layout, colour and typography.",
    cover: "assets/projects/ikea-1.jpg",
    gallery: ["assets/projects/ikea-2.jpg", "assets/projects/ikea-3.jpg", "assets/projects/ikea-4.jpg"],
    brief: "Design a multi-page IKEA brochure that reads as a real on-brand catalogue, not a single graphic.",
    approach: "Structured it as a real catalogue would be — cover, featured product, favourites round-up and a closing page — using IKEA's blue/yellow system and layout conventions throughout.",
    tools: ["Canva"],
    featured: true,
  },

  {
    id: "corporate-campaigns",
    title: "Corporate Brand Campaigns — KPMG, Deloitte & PwC",
    category: "Design",
    tag: "Brand identity practice",
    summary: "Three brand-accurate campaign pieces, each built strictly on that firm's own fonts, colours and logo.",
    cover: "assets/projects/kpmg.jpg",
    gallery: ["assets/projects/deloitte.jpg", "assets/projects/pwc.jpg"],
    brief: "Design professional campaign visuals for three major firms — KPMG, Deloitte and PwC — using each one's real, current brand identity rather than a generic corporate look.",
    approach: "Referenced each firm's actual colour system and typography (KPMG blue, Deloitte green/black, PwC orange) to design a social flyer and posters that could believably sit inside their own marketing.",
    tools: ["Canva"],
    featured: false,
  },

  {
    id: "sips-bites",
    title: "Building a Brand from Scratch",
    category: "Brand",
    tag: "Entrepreneurship",
    summary: "Sips & Bites by Tems — product, branding, marketing, service and operations managed end to end.",
    cover: "assets/sips-bites-logo.jpg",
    gallery: [
      "assets/apple-pine-label.jpg",
      "assets/projects/sips-peanut-smoothie.jpg",
      "assets/projects/sips-mango-juice.jpg",
      "assets/projects/sips-icekenkey-pour.jpg",
      "assets/projects/sips-icekenkey-bottles.jpg",
    ],
    brief: "Build a food and beverage brand from the ground up — not just the visuals, but the whole business.",
    approach: "I handle this end to end, solo: naming and logo, packaging design for each product, product photography, pricing, customer experience and day-to-day production. I only bring someone in to help sell when I'm out selling physically.",
    tools: ["Canva"],
    results: "Live logo, a growing product line (juices, smoothies, the Ice Kenkey Smoothie range) with its own packaging, and an operating small business.",
    featured: true,
  },

  {
    id: "mkopa-seo",
    title: "M-KOPA Full SEO Audit",
    category: "SEO",
    tag: "SEO research",
    summary: "A complete audit covering usability, structure, content, authority and search performance.",
    cover: "assets/projects/seo-moz-da.jpg",
    gallery: ["assets/projects/seo-moz-linkingdomains.jpg", "assets/projects/seo-majestic-trustflow.jpg"],
    brief: "Assess M-KOPA's Ghana site for SEO health across technical, content and authority factors.",
    approach: "Reviewed usability and site structure, content quality, backlink authority and on-page search performance using tools including Moz and Majestic, then compiled findings into actionable recommendations.",
    results: "Via Moz: Domain Authority 53, 2.9K linking root domains, 1.1K ranking keywords, 17% spam score. Via Majestic: Trust Flow 16, Citation Flow 42.",
    tools: ["Moz", "Majestic"],
    featured: false,
  },

  {
    id: "email-campaign",
    title: "20% Off Email Campaign",
    category: "Email",
    tag: "Email marketing",
    summary: "A focused Mailchimp promotion for Sips & Bites, with personalisation, social proof and a WhatsApp CTA.",
    cover: "assets/projects/email-flyer.jpg",
    brief: "Design a promotional email campaign for Sips & Bites that actually converts.",
    approach: "Built in Mailchimp with a personalised greeting, a genuine customer testimonial as social proof, and a clear WhatsApp call to action tied to a 5-day 20%-off offer.",
    results: "The 20%-off promotion generated over 50 leads.",
    tools: ["Mailchimp"],
    featured: false,
  },

  {
    id: "naomie-logo",
    title: "Naomie Hair Place — Logo Design",
    category: "Design",
    tag: "Logo & branding",
    summary: "A logo built for a hair salon brand — clean, feminine and salon-appropriate.",
    cover: "assets/projects/logo-naomie.jpg",
    brief: "Design a logo for Naomie Hair Place, a hair salon.",
    approach: "Built the mark around scissors and the salon's initials in a circular badge, so it reads clearly at small sizes on packaging, signage and social profiles alike.",
    tools: ["Canva"],
    featured: false,
  },

  {
    id: "content-portfolio",
    title: "Short-form Content Portfolio",
    category: "Content",
    tag: "Content creation",
    summary: "Faith-led storytelling that grew a new account from zero and reached tens of thousands of viewers.",
    cover: "assets/projects/tiktok-video-worship.jpg",
    gallery: [
      "assets/projects/tiktok-followers-501.jpg",
      "assets/projects/tiktok-followers-982.jpg",
      "assets/projects/tiktok-video-drummer.jpg",
      "assets/projects/tiktok-video-badfriend.jpg",
    ],
    brief: "Start a content account from zero and grow it through consistent, faith-based short-form video.",
    approach: "Posted consistently on TikTok and Instagram, focusing on storytelling and moments that resonate, then used analytics to understand what was connecting and do more of it. Shot and edited entirely on an iPhone using CapCut, including talking-head videos.",
    results: "Grew the TikTok account from 0 to roughly 500 followers within weeks, and to nearly 1,000 followers within a few months. Individual videos have reached 41.4K and 42.3K views; a self-shot, self-edited talking-head video passed 4,000 views. Instagram passed 3,000 followers.",
    tools: ["CapCut", "TikTok", "Instagram"],
    featured: true,
  },

];
