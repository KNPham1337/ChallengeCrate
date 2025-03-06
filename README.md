# ChallengeCrate
This repository hosts a web app that allows users to create, join, and track custom Steam challenges. Users can engage with Steam achievements in a personalized way, manually submitting progress and competing with friends. The app provides a fun, interactive platform for Steam enthusiasts to challenge themselves!

## Custom Steam Challenges Web App

A web app that enhances Steam’s achievement system by allowing users to create, join, and track custom challenges. Whether you’re a casual gamer or an achievement hunter, this platform lets you engage with your Steam library in a more interactive and personalized way. Create challenges, set your own goals, and track progress manually, all while discovering new ways to experience the games you love.

### Key Features:

- Challenge Creation: Users can create custom challenges with unique criteria and optional rewards.
- Challenge Feed: Browse and discover challenges created by other users.
- Progress Tracking: Submit progress manually upon completion, with optional screenshots for verification.
- Steam Integration: Login via Steam and link your games for easy challenge creation.
- Personalized Profile: View your progress, completed challenges, and achievements.

This project is built using React, Node.js, Express, and MongoDB (or PostgreSQL) to provide a seamless user experience for tracking your Steam challenges.

# MVP Features:
### User Authentication (Steam OAuth):
Login via Steam: Users log in through Steam’s OpenID for authentication.
Steam Profile Data: Retrieve basic Steam profile data (username, games owned).
### Challenge Creation:
Users can create custom challenges by entering:
- Title
- Description
- Associated game (select from games they own)
- Challenge criteria (e.g., unlock a specific achievement or reach a certain playtime)
- Submit the challenge for approval (or immediate display if no moderation is required).
### Challenge Listing and Discovery:
A list of custom challenges created by users is displayed.
Users can filter challenges by game or category.
Each challenge shows:
- Title
- Description
- Criteria (e.g., specific achievement or playtime requirement)
- Reward (optional)
### Challenge Progress:
Manual Progress Submission: Users submit their progress once they complete a challenge, including:
- A button or form to mark the challenge as "Completed."
- Upload screenshots (optional) to verify completion.
Once submitted, users can view their completed challenges and progress on their profile.
### Backend (Database):
Database Structure:
- Users: Store user information (Steam ID, username).
- Challenges: Store custom challenge details (title, description, criteria, game, reward, etc.).
- User Progress: Track which challenges users are involved in and their completion status (e.g., "In Progress," "Completed").
CRUD Operations: Users can create, read, and submit progress for challenges.
### Frontend (React):
- Challenge Creation Page: Simple form for users to submit new challenges.
- Challenge Feed: Display a list of challenges, allowing users to click on a challenge to view more details.
- User Profile: Show a list of challenges the user has completed and in progress.
### Notification (Optional):
Notify users when they’ve successfully completed a challenge or when new challenges are available.
## Tech Stack for MVP:
### Frontend:
- React for the UI
- React Router for navigation
- Axios for API requests
- TailwindCSS or Bootstrap for simple styling
### Backend:
- Node.js with Express for handling HTTP requests
- MongoDB for storing user and challenge data (or PostgreSQL if you prefer a relational database)
- Steam OpenID for user authentication
### Database Structure:
- Users collection to store Steam IDs and profiles.
- Challenges collection to store challenge details.
- User Progress collection to track each user’s progress on challenges.
### API:
- GET /challenges: Retrieve all challenges.
- POST /challenges: Create a new custom challenge (requires authentication).
- POST /progress: Submit challenge completion (requires user authentication).
## Basic Workflow:
- User Logs In via Steam OpenID.
- User Creates Challenge by filling out a simple form (Title, Description, Game, Criteria).
- Challenges are Listed on the main page.
- User Joins a Challenge and tracks their progress manually.
- User Submits Progress (e.g., "Completed" with optional screenshot) once they complete a challenge.
- User Profile shows all challenges and their progress.
## Step-by-Step MVP Implementation:
### User Authentication:
Implement Steam OAuth using an npm package like passport-steam or a similar solution for handling OpenID authentication.
### Database Models:
Set up MongoDB or PostgreSQL with three tables/collections: Users, Challenges, and UserProgress.
### Challenge Creation Form:
Design a simple form to submit challenges (title, description, game selection).
When submitted, store the challenge in the database.
### Challenge Feed:
Display all challenges in a list on the homepage.
Use React to fetch the challenges from the backend and display them in a grid or list format.
### User Progress Submission:
Create a simple form or button to submit progress. Users can mark challenges as complete and optionally upload proof (e.g., screenshots or achievement data).
### Profile Page:
Show the user’s progress for each challenge: "In Progress" or "Completed."
## Development Phases for MVP:
### Phase 1: Authentication & User Profile:
Set up Steam login and retrieve user data.
### Phase 2: Challenge Creation & Display:
Implement the challenge creation form and challenge feed.
### Phase 3: Progress Tracking:
Add the ability for users to submit progress for challenges.
### Phase 4: Profile & Notifications:
Display user progress on their profile page and implement basic notifications for challenge completion.
This MVP will focus on getting the essential features running quickly, allowing users to create and join challenges, manually track their progress, and see their achievements in a personalized way. As the app grows, you can add more features like moderation, challenge ratings, and notifications.
