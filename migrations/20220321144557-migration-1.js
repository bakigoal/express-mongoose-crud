module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection('contacts').insertMany([
      {
        "_id" : 1,
        "name": "Maxim",
        "birth": "12.03.1995"
      },
      {
        "_id" : 2,
        "name": "Anton",
        "birth": "11.04.1997"
      },
      {
        "_id" : 3,
        "name": "Ildar",
        "birth": "05.06.1996"
      }
    ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('contacts').deleteMany( { } )
  }
};
