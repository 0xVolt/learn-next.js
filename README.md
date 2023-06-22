# `Next.js` Sample Website Tutorial

---

# Initial Config

1. Run `npx create-next-app@latest ./` to create a new next.js application in the pwd.
2. Install the following dependencies with `npm`
   1. `bcrypt` -> Hash passwords.
   2. `mongodb` and `mongoose` -> Create and handle databases.
   3. `next-auth` -> For authentication.
3. Remove everything in `app/` and `public/`.
4. Create new directories/files under the names:
   1. `styles/` -> For our new `globals.css` file.
   2. `models/` -> For our `mongodb` databases.
   3. `utils/` -> For utility functions.
   4. `.env` -> To store sensitive information like API keys in an environment variable.
5. Edit `tailwind.config.js` to have our custom fonts and colours.
6. Unzip assets such as icons and images into `public/assets/`.
7. Create `globals.css` inside `styles/`.

---

# Boilerplate `README`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
