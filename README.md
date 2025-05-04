# Nexus: Multiplatform Social Media Centralizer and Manager

## Overview

**Nexus** is a web application designed to centralize, manage, and optimize the handling of multiple social media platforms from a single location. It enables users to view aggregated content from various social networks and simultaneously or selectively publish content across any connected platforms.

## Key Features

### For General Users (Viewers)

* **Unified Dashboard:** Consolidated view of multiple social feeds (Facebook, Instagram, Twitter/X, LinkedIn, etc.).
* **Filters and Search:** Ability to search and filter content by networks, topics, dates, and keywords.
* **Customization:** Preferences for organizing content visualization according to user needs.

### For Page and Entity Administrators

* **Multi-channel Posting:** Compose and schedule posts across multiple social media platforms simultaneously.
* **Account Management:** Easily connect and manage multiple social media accounts.
* **Editorial Calendar:** Calendar view for managing and scheduling future posts.
* **Integrated Analytics:** Consolidated performance and engagement statistics of published content.

## Technical Stack

* **Frontend:** Next.js with TypeScript
* **Backend:** Node.js with Express and TypeScript (API routes can also be implemented within Next.js)
* **Database:** PostgreSQL
* **API Integrations:** OAuth for social media authentication (Facebook Graph API, Twitter API, Instagram Basic Display API, LinkedIn API).
* **Storage:** AWS S3 or local media storage.

## Project Structure

```
nexus/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   └── utils/
│   │   ├── styles/
│   │   └── types/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── config/
│   │   ├── models/
│   │   └── index.ts
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Initial Steps

Use this step-by-step guide for setting up the project:

1. **Initial Setup:**

   * Create base frontend project using Next.js with TypeScript.
   * Create base backend project using Node.js, Express, and TypeScript.

2. **Authentication Configuration:**

   * Implement OAuth for managing authentication with social media networks.
   * Set up NextAuth.js for user authentication.

3. **API Integrations:**

   * Establish the base structure for integrating social APIs (Facebook, Instagram, Twitter, LinkedIn).

4. **Database Setup:**

   * Define initial models for users, posts, connected accounts, and analytics.
   * Set up Prisma or another ORM for database interactions.

5. **Initial Frontend:**

   * Create basic pages and components (dashboard, editorial calendar, post manager).
   * Implement responsive layouts with Tailwind CSS or another styling solution.

6. **Backend-Frontend Communication:**

   * Set up API routes for handling authentication, posting, visualization, and analytics.
   * Implement server-side data fetching for optimal performance.

7. **Initial Testing:**

   * Configure Jest and React Testing Library for frontend and Jest/Supertest for backend.

## Example Specific Instructions

Start with clear instructions in VS Code such as:

```
// Generate an Express route for OAuth authentication with Facebook
```

```
// Create a Next.js page component to display feeds from multiple social networks
```

## License

This project is open source under the MIT license.
