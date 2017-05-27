class App {
  constructor () {
    this.users = [
      {
        name: 'User 1',
        email: 'user@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=1'
      },
      {
        name: 'user 2',
        email: 'usernumber2@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=25'
      },
      {
        name: 'user 3',
        email: 'di392path-router@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=36'
      },
      {
        name: 'user 4',
        email: 'some.other.email@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=10'
      },
      {
        name: 'user 5',
        email: 'user657321@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=24'
      },
      {
        name: 'user 6',
        email: 'anotheruser@email.com',
        imageUrl: 'https://unsplash.it/500/300?image=444'
      }
    ]
  }

  getUsers () {
    return this.users
  }
  
  getUser (id) {
    return this.users[id]
  }
}

module.exports = new App()
