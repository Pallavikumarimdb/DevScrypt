

# DevScrypt: Low-Level Design

## Table of Contents
1. [Introduction](#introduction)
2. [User Roles](#user-roles)
3. [System Architecture](#system-architecture)
4. [Database Design](#database-design)
5. [API Endpoints](#api-endpoints)
6. [Frontend Components](#frontend-components)
7. [Security](#security)
8. [Technology Stack](#technology-stack)

---

### 1. Introduction
DevScrypt is a freelancing platform dedicated to crypto developers. It facilitates secure, escrow-based transactions and offers a unique platform where clients can find specialized blockchain talent. This document details the low-level design, covering user roles, database structure, API endpoints, frontend components, and security.

---

### 2. User Roles

| Role          | Description |
|---------------|-------------|
| **Client**    | Posts jobs, reviews applications, hires developers, and releases payment upon project completion. |
| **Developer** | Applies to jobs, communicates with clients, submits work for review, and receives payment upon job approval. |
| **Admin**     | Manages users, monitors transactions, resolves disputes, and ensures compliance with platform guidelines. |

---

### 3. System Architecture

- **Frontend**: React.js (Next.js) to build a responsive, user-friendly interface.
- **Backend**: Node.js (Express.js) API to handle business logic, authentication, and database interactions.
- **Database**: MongoDB for storing user data, job postings, transactions, and escrow status.
- **Blockchain Integration**: Smart contract-based escrow on the Solana blockchain for secure payments.
- **External APIs**: Crypto price conversion APIs, email notification service, and payment processing APIs.

---

### 4. Database Design

#### 4.1 User Collection

```json
{
    "_id": "ObjectId",
    "username": "string",
    "email": "string",
    "password": "hashed_password",
    "role": "Client | Developer | Admin",
    "bio": "string",
    "portfolio": "array of URLs",
    "rating": "float",
    "wallet_address": "string",
    "date_created": "timestamp"
}
```

#### 4.2 Job Collection

```json
{
    "_id": "ObjectId",
    "title": "string",
    "description": "string",
    "skills_required": ["string"],
    "budget": "number",
    "deadline": "timestamp",
    "client_id": "ObjectId",
    "developer_id": "ObjectId (optional)",
    "status": "Open | In Progress | Completed | Cancelled",
    "date_created": "timestamp"
}
```

#### 4.3 Escrow Collection

```json
{
    "_id": "ObjectId",
    "job_id": "ObjectId",
    "client_id": "ObjectId",
    "developer_id": "ObjectId",
    "amount": "number",
    "status": "Pending | Released | Disputed",
    "transaction_id": "string",
    "date_created": "timestamp"
}
```

---

### 5. API Endpoints

#### 5.1 Authentication

- **POST /auth/register**: Registers a new user.
- **POST /auth/login**: Authenticates and returns a JWT token.
- **POST /auth/logout**: Invalidates the session.

#### 5.2 Jobs

- **POST /jobs**: Create a new job posting (Client only).
- **GET /jobs**: Retrieve list of all jobs (filterable by status).
- **GET /jobs/:jobId**: Retrieve details of a specific job.
- **PUT /jobs/:jobId**: Update job details (Client only).
- **DELETE /jobs/:jobId**: Delete a job (Client only).

#### 5.3 Applications

- **POST /jobs/:jobId/apply**: Apply to a job (Developer only).
- **GET /jobs/:jobId/applications**: Retrieve all applications for a specific job (Client only).
- **POST /jobs/:jobId/hire/:developerId**: Hire a developer for a job (Client only).

#### 5.4 Escrow

- **POST /escrow**: Initiate escrow for a job.
- **GET /escrow/:jobId**: Retrieve escrow status for a job.
- **POST /escrow/release**: Release funds to developer upon job completion.
- **POST /escrow/dispute**: Mark the escrow as disputed (Client only).

---

### 6. Frontend Components

#### 6.1 Header and Navigation

- **Components**: Header, Logo, Navigation Links, Profile Icon.
- **Functionality**: Navigates users through the site, with links based on user role.

#### 6.2 Job Board

- **Components**: Job Card, Filters, Search Bar.
- **Functionality**: Displays job listings with options to filter by skill, budget, or deadline.

#### 6.3 Job Details

- **Components**: Job Description, Apply Button, Applicant List (for Clients).
- **Functionality**: Shows detailed job information and allows developers to apply or clients to view applications.

#### 6.4 User Dashboard

- **Components**: Profile Info, Active Jobs, Payment History, Rating.
- **Functionality**: Shows user details, active jobs, and transaction history.

#### 6.5 Escrow Section

- **Components**: Escrow Status, Release Button, Dispute Button.
- **Functionality**: Displays escrow status and options to release or dispute payment.

#### 6.6 Admin Panel

- **Components**: User List, Job Management, Escrow Management, Dispute Resolution.
- **Functionality**: Allows admin to monitor and manage the platform, users, jobs, and transactions.

---

### 7. Security

- **Authentication**: JSON Web Tokens (JWT) for session management.
- **Encryption**: AES-256 encryption for sensitive data such as passwords and wallet addresses.
- **Escrow Security**: Smart contracts on Solana blockchain to secure funds during transactions.
- **Role-Based Access Control (RBAC)**: Restrict access to certain routes based on user roles (e.g., Client, Developer, Admin).
- **Input Validation**: Validate and sanitize all inputs to prevent SQL injection and XSS attacks.

---

### 8. Technology Stack

- **Frontend**: React.js (Next.js), Tailwind CSS for styling.
- **Backend**: Node.js (Express.js) for REST API.
- **Database**: MongoDB (NoSQL) for storing user and job data.
- **Blockchain**: Solana blockchain for escrow-based smart contracts.
- **Authentication**: JSON Web Tokens (JWT).
- **External APIs**: Crypto price conversion, email notifications.

---

### 9. Example Workflow

1. **Job Posting**: Client creates a job post with required skills, budget, and deadline.
2. **Developer Application**: Developer browses jobs and applies for a suitable one.
3. **Hiring and Escrow**: Client reviews applicants, selects a developer, and initiates an escrow transaction.
4. **Job Completion**: Developer completes the job and requests payment.
5. **Payment Release**: Client verifies job completion and releases payment from escrow to the developer.

---