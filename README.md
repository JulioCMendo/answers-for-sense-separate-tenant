# Answers for Sense

This extension allows you to embed a Qlik Answers assistant in your Qlik Sense app.

## Installation
1. Download the extension here: https://github.com/JulioCMendo/answers-for-sense-separate-tenant/releases/tag/v0.1.0
2. Upload the extension to your Qlik Cloud Tenant
3. Modify Content Security Policy: 
   1. On Tenant with Answers: ![Add Origin pointing to Qlik App Host URL, check both connect-src, object-src, script-src and worker-src](/imgs/csp-1.png)
   2. On Tenant with Extension: ![Add Origin pointing to Qlik Answers Tenant, check both connect-src, object-src, script-src and worker-src](/imgs/csp-2.png)
4. Create a Web Integration on Qlik Answers Tenant, allow the Qlik App Host URL as an origin: ![Adding the Origin as the Host URL from the Qlik Tenant where the Qlik App is located](/imgs/web-integration.png)
5. Drag the Extension Object to the App where you wish to use it, then fill out the fields:
   1. Fill out the Assistant ID: ![Fill out the Assistant ID field.](/imgs/assistant.png)
   2. To connect to a different Qlik Cloud host, switch the toggle on:![Toggle Enable External Host and fill out the fields.](/imgs/external-host.png)

## Development
You can clone or fork this repository and build the extension. First, run `npm install`.
After the installation is successful, you can build the extension with `npm run sense`.

## Changelog

### v0.1.0
- First release
- Embed a Qlik Answers assistant in your Qlik Sense app from a separate Cloud Tenant Host.
- Only works by providing Assistant ID directly.
- CSS theming library removed.
- Added instructions for building the installation.