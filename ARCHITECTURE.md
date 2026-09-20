# Architecture Overview

This repository is a single-page Next.js marketing and lead-capture application for the Grayscale Investment Platform. It renders a crypto investment landing page, handles wallet connection and form submission, and integrates with external services for translation and email delivery.

```mermaid
flowchart LR
    User[Investor / Visitor] --> Browser[Web Browser]

    Browser --> App[Next.js App\napp/page.tsx]
    App --> Layout[App Shell\napp/layout.tsx]
    App --> Styles[Global Styling\napp/globals.css]
    App --> Assets[Static Media\npublic/*.jpeg / *.webp]

    App --> Wallet[Wallet Connect\nMetaMask / window.ethereum]
    App --> Form[Lead Capture Form\nName, Email, Phone, Country, Plan, Amount]
    App --> Popup[Marketing UI\nHero, Dashboard, Plans, Testimonials]

    Form --> Submit[FormSubmit API\nhttps://formsubmit.co]
    Wallet --> Ethereum[Ethereum Wallet\nAccount Request]
    Browser --> Translate[Google Translate\ntranslate.google.com]
    Browser --> Vercel[Vercel Hosting\nProduction Deployment]

    App --> Next[Next.js Runtime\nReact 19 + Next 16]
    Next --> Node[Node.js / Build Pipeline]
    Node --> NPM[npm scripts\nnext dev / build / start]

    classDef app fill:#f5d76a,stroke:#a67c00,color:#111;
    classDef external fill:#c6f0ff,stroke:#1d4ed8,color:#111;
    classDef infra fill:#d9f7be,stroke:#2f8f46,color:#111;
    classDef ui fill:#f4d4ff,stroke:#7e22ce,color:#111;

    class App,Layout,Styles,Assets,Popup,Form,Wallet ui;
    class Browser,Translate,Submit,Ethereum,Vercel external;
    class Next,Node,NPM infra;
```

## Key architectural observations

- Frontend: Next.js App Router application with a single interactive landing page in `app/page.tsx`.
- Presentation layer: dark crypto-themed UI with marketing content, performance stats, pricing cards, and success modal states.
- Lead capture: form submission posts investor data to FormSubmit for email handling.
- Wallet interaction: optional MetaMask/Ethereum wallet connection for investor onboarding.
- Translation: Google Translate embed is enabled via the browser script and language selector.
- Hosting: repository is configured for Vercel deployment and serves static assets from `public/`.

## Main files

- `app/page.tsx` — primary application logic and UI
- `app/layout.tsx` — application layout shell
- `app/globals.css` — global styling
- `public/` — local image assets
- `next.config.ts` — Next.js configuration
- `package.json` — dependencies and scripts
