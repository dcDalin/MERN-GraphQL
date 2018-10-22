const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the info message`,
    feed: () => links
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        url: args.url,
        description: args.description
      };
      links.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server running on port 4000`));
