# Computer Science Personal Portfolio — FINAL INTEGRATED V5

## What this package is
A complete full-stack personal portfolio project built from the v1/v2 template and extended with a Node.js server, server-side session authentication, persistent JSON data storage, CRUD APIs, image uploads, and contact-message storage.

## Included
- Responsive multi-page portfolio
- Dashboard / Home
- About
- Skills
- Projects
- Portfolio
- Services
- Resume
- Blog
- Contact
- Admin CMS
- Server-side login/session
- Profile management
- CRUD APIs for Skills, Projects, Portfolio, Services and Blog
- Contact-message inbox
- Image upload endpoint (JPG/PNG/WEBP/GIF, max 8 MB)
- JSON export/import
- Persistent `data/db.json`
- `uploads/` image storage
- No external npm dependencies

## Run locally
Requirements: Node.js 18+.

1. Extract the ZIP.
2. Open a terminal inside the project folder.
3. Set a strong admin password.

Windows PowerShell:
```powershell
$env:ADMIN_USER="admin"
$env:ADMIN_PASSWORD="YourStrongPasswordHere"
node server.js
```

Linux/macOS:
```bash
ADMIN_USER=admin ADMIN_PASSWORD='YourStrongPasswordHere' node server.js
```

Then open:
- Website: http://localhost:3000
- Admin: http://localhost:3000/admin.html

## Security
The default environment fallback password is `ChangeMe_123!`. **Change it before any public deployment.**

The server uses:
- HttpOnly session cookie
- SameSite=Strict cookie
- server-side password verification
- Node `scrypt` password derivation for comparison-ready authentication architecture
- request size limits
- image MIME allow-list
- path traversal protection for static files
- basic security response headers

For a serious production deployment, also add HTTPS/TLS, a reverse proxy, rate limiting, persistent session storage, CSRF protection for state-changing requests, stronger audit logging, backups, and a production database.

## Data
Main content is stored in:
`data/db.json`

Uploaded images are stored in:
`uploads/`

Back up both directories before deployment.

## Deployment
This package is designed to be deployed on a Node.js-capable server. Run:
```bash
node server.js
```
or use a process manager such as PM2 on a VPS.

## Important
This is a complete portfolio application and a strong production-ready starting structure, but deployment security still depends on the hosting environment. Do not expose the development/default credentials publicly.

## Next optional enhancements
- PostgreSQL/MySQL migration
- Cloud image storage
- Email notification for contact messages
- Rich text editor
- Analytics
- Two-factor authentication
- Role-based admin accounts


## V5 integration status
This V5 build is the single integrated version for normal local use:

**Admin Dashboard → Node.js Backend → `data/db.json` → Public Website**

The public pages load their editable profile, skills, projects, portfolio, services and blog data from `/api/data`. Admin changes are saved to the server, so you do not need to edit HTML files for normal content changes.

The Home, About, Skills, Projects, Portfolio, Services, Resume, Blog and Contact pages are wired to the shared data layer. The Contact form saves messages to the Admin inbox.

A Node-based smoke test is included:
```bash
node test.js
```
It checks all public/admin pages, API health/data, login/session, profile persistence, and contact-message delivery.

**Last validation:** `ALL TESTS PASSED`.test
