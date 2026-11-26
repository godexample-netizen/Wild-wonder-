# Wild Wonder

Wild Wonder is a bird and nature documentary website with documentary topic cards, bird facts, and a student field lab for college and university learners.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static production site is generated in `dist/`.

## Free hosting with Cloudflare Pages

1. Open Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Choose GitHub and select `godexample-netizen/Wild-wonder-`.
3. Set production branch to `main`.
4. Use the Vite build command `npm run build` and output directory `dist`.
5. Save and deploy. Future commits to `main` can trigger automatic deployments.

The documentary cards currently link to YouTube topic searches; they are not embedded or hosted Wild Wonder episodes yet. The newsletter form is a front-end demo and does not collect email addresses until connected to an email service.
