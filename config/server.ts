export default ({ env }) => ({
  host: env('HOST', 'akshay-99h.codes'),
  port: env.int('PORT', process.env.PORT),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  session: {
    secure: true,
  },
  proxy: true,
  providers: {
    google: {
      client_id: env('GOOGLE_CLIENT_ID'),
      client_secret: env('GOOGLE_CLIENT_SECRET'),
      redirect_uri: env('GOOGLE_REDIRECT_URI'),
    },
    discord: {
      client_id: env('DISCORD_CLIENT_ID'),
      client_secret: env('DISCORD_CLIENT_SECRET'),
      redirect_uri: env('DISCORD_REDIRECT_URI'),
    },
    github: {
      client_id: env('GITHUB_CLIENT_ID'),
      client_secret: env('GITHUB_CLIENT_SECRET'),
      redirect_uri: env('GITHUB_REDIRECT_URI'),
    },
  },
});
