# Deployment

This project deploys to Hostinger through GitHub Actions.

Pushes to the `main` branch run the production build and upload the `dist`
folder to the configured Hostinger FTP directory.
