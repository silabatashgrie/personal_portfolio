#!/bin/sh
: "${ADMIN_USER:=admin}"
if [ -z "${ADMIN_PASSWORD_HASH:-}" ]; then
  echo "ERROR: ADMIN_PASSWORD_HASH is not set." >&2
  echo "Set ADMIN_USER and ADMIN_PASSWORD_HASH before starting the server." >&2
  exit 1
fi
export ADMIN_USER
node server.js
