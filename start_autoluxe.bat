@echo off
title Autoluxe Automotive - Localhost Server
cd /d "%~dp0"
echo Starting Autoluxe Automotive on http://localhost:8080 ...
node proxy_server.cjs
pause
