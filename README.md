## Project structure

The list of projects is stored in the `project.json` file at the root of this repository.

A single project in that list needs the following shape:

```
{
    "id": "unique-project-slug",
    "title": "Project Title",
    "drive-embed": "https://drive.google.com/file/d/xy"
}
```

You can add such projects to the list into the array (array = square brackets `[]`) like so:

```
[
    {
        "id": "unique-project-slug",
        "title": "Project Title",
        "drive-embed": "https://drive.google.com/file/d/xy"
    },
    {
        "id": "a-second-unique-project-slug",
        "title": "Project 2 Title",
        "drive-embed": "https://drive.google.com/file/d/xy"
    }
]
```

> Watch out that you place commas `,` between the projects. It needs to be a valid JSON file. You can validate + format it [here](https://jsonformatter.curiousconcept.com/)

### Project media files + description

All the project files are stored under the `public/projects/` directory.

When you add a project to the JSON, as described above, you will choose an `id`. This ID will define the project file names.

Here is an example of the files (**which you need to upload to complete the project**) for a project with the id `unique-project-slug`:

```
public/projects/unique-project-slug.png -> The thumbnail of the project. Make sure you use a "png" image.
public/projects/unique-project-slug.md -> The description of the project. Make sure you use a "md" file.
```

The `project-xy.md` file for the description is a so called "Markdown" file. You can search on google on how to create a markdown file. Here is a [link to an online markdown editor](https://stackedit.io/app#).

Markdown basically allows you to create simple descriptions with large titles, links, etc. Here's a simple example of a description for your project which you could use:

```md
# My Project

My Project is a project we filmed in 2023.

## Team

Florin Röösli: Camera
Florin Röösli: PostProcess

## Links

- [A song](https://link-to-song.ch/xy)
- [Another song](https://link-to-song.ch/xy2)
```

---

The following is the technical README, ignore unless you are a dev:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
