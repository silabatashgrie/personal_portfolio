# Computer Science Personal Portfolio

A full-stack personal portfolio built with HTML, CSS, JavaScript and a Node.js backend using only built-in Node modules.

## Features

- Responsive multi-page portfolio
- Admin CMS for profile, skills, projects, portfolio, services and blog
- Server-side session authentication
- Persistent JSON runtime storage
- Contact-message inbox
- Image upload endpoint
- JSON import/export
- No external npm dependencies

## Local setup

Requirements: Node.js 18+.

Create a strong admin password hash. Example:

```powershell
node -e '$c=require("crypto");$s=$c.randomBytes(16).toString("hex");console.log("ADMIN_PASSWORD_HASH=scrypt$"+$s+"$"+$c.scryptSync("YourStrongPasswordHere",$s,64).toString("hex"))'
```

Then set environment variables before starting:

### Windows PowerShell

```powershell
$env:ADMIN_USER="admin"
$env:ADMIN_PASSWORD_HASH="scrypt$YOUR_SALT$YOUR_HASH"
node server.js
```

### Linux/macOS

```bash
export ADMIN_USER="admin"
export ADMIN_PASSWORD_HASH='scrypt$YOUR_SALT$YOUR_HASH'
node server.js
```

Open:

- Website: http://localhost:3000
- Admin: http://localhost:3000/admin.html

The server refuses to start when authentication secrets are missing.

## Data and privacy

Production/runtime data is stored in `data/db.json`. **Do not commit this file to the public repository.**

A sanitized starter file is provided as:

`data/db.example.json`

On first startup, the server copies the example to the runtime database if `data/db.json` does not exist.

Uploads are stored in `uploads/` and are also ignored by Git.

Never commit:

- Passwords or password hashes
- Session secrets
- API keys or tokens
- Private messages
- Customer/member data
- Personal data that is not intended for public display
- Production databases or backups

## Security hardening

The server includes:

- HttpOnly + SameSite=Strict session cookies
- scrypt password verification
- CSRF token checks for authenticated state-changing requests
- Same-origin checks for state-changing requests
- Login rate limiting
- Contact-message rate limiting
- Request-size limits
- Image MIME/signature checks
- Path traversal protection
- Security response headers
- Private runtime database protection from static-file access

For production, also use HTTPS/TLS, a reverse proxy, persistent session storage, regular backups, monitoring, and preferably PostgreSQL or another production database.

## Testing

Run:

```bash
node test.js
```

The smoke test covers public pages, health/data APIs, authentication, CSRF-protected profile persistence and contact-message delivery.

## Public GitHub repository

This repository can remain public as a portfolio showcase. Public visibility means the source code can be viewed and copied, so proprietary/private data must stay outside the repository.

No license is intentionally declared in this repository. If you later want others to reuse the source code under specific terms, add an appropriate license.

## Project structure

```
Public website
     ↓
Node.js server
     ↓
Runtime data/db.json   ← ignored/private
     ↑
data/db.example.json   ← safe starter template
```
