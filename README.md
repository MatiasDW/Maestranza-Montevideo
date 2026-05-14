# Maestranza Montevideo

Landing page built with React and Vite, prepared for deployment on Railway.

## Local development

```bash
npm install
npm run dev
```

## Railway deployment

This repository now includes:

- A `railway.json` config file for Railway
- A production `npm start` command that serves the built `dist/` folder
- A `.env.example` file with the required public environment variable

### Required Railway variable

Add this variable in Railway before deploying:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Important: this is a Vite frontend variable, so Railway must have it set before the build runs. If you add or change it later, redeploy the service.

### Recommended Railway setup

1. Create a new Railway project from this GitHub repository.
2. In the service variables, add `VITE_FORMSPREE_ENDPOINT`.
3. Deploy the service.
4. In `Settings -> Networking`, generate a public domain.

Railway should pick up these commands from the repository:

- Build: `npm run build`
- Start: `npm run start`

## Contact form

The contact form posts directly to Formspree from the browser. If `VITE_FORMSPREE_ENDPOINT` is missing, the form will show a clear configuration error instead of calling a fake endpoint.
