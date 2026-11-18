# portfolio-nextjs

Portfolio DevOps & Cloud

Projet genere automatiquement par Backstage (`portfolio-nextjs-template`).

## Cycle de livraison

Chaque `push` sur `main` declenche `.github/workflows/ci.yml` :

1. Build de l'image Docker
2. Push sur Docker Hub (`vN` + `latest`)
3. Deploiement local via `docker compose` (runner self-hosted)
4. Health check sur http://localhost:3001

## Lancer en local

```bash
npm install
npm run dev
```
