// Create test user
db.createUser({
  user: "mongo",
  pwd: "mongo",
  roles: [
    {
      role: "readWrite",
      db: "bloglist",
    },
  ],
});
db = db.getSiblingDB("bloglist");
db.createCollection("users");
db.users.insertMany([
  {
    username: "test",
    name: "test",
    passwordHash:
      "$2a$10$ngc4sZ.pB74Kt9f2ijNRkepIZBLzdx/mUjltrUS/sxu646j0wjZy.",
  },
]);
