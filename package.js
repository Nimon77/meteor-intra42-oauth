Package.describe({
  summary: 'Intranet 42 OAuth flow',
  version: '1.2.0',
  name: 'nimon:intra42-oauth',
  git: 'https://github.com/Nimon77/meteor-intra42-oauth'
})

Package.onUse(function (api) {
  api.versionsFrom('2.2')
  api.use('ecmascript')
  api.use('oauth2', ['client', 'server'])
  api.use('oauth', ['client', 'server'])
  api.use('http', 'server')
  api.use('random', 'client')
  api.use('service-configuration', ['client', 'server'])

  api.mainModule('intra42_client.js', 'client')
  api.mainModule('intra42_server.js', 'server')

  api.export('Intra42')
})
