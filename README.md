# AI Email Resume

## Installation

Install bun if not already done :
https://bun.sh/

Start your n8n and import the [n8n workflow file](./n8n/get_and_resume_today_emails.json), connect your gmail account and run the workflow, download the emails-today.json file and place it [./public](./public)
Rebuild the project everytime you change the today-emails.json file

To build the project :

```bash
docker buildx bake
```

To run the project :

```bash
docker compose up app
```

You can now access the app : http://localhost:5173/

The app is made with Vite and React using the component library shadcn with Tailwind. I chose this stack cause it can scale easily.
I did not encounter any difficulties.
