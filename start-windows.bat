@echo off
if "%ADMIN_USER%"=="" set ADMIN_USER=admin
if "%ADMIN_PASSWORD_HASH%"=="" (
  echo ERROR: ADMIN_PASSWORD_HASH is not set.
  echo Set ADMIN_USER and ADMIN_PASSWORD_HASH before starting the server.
  pause
  exit /b 1
)
node server.js
pause
