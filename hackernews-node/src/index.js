const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query{
info:String!
feed(last:Int):[Link!]!
}
type Link{
    id:ID!
    description: String!
    url: String!
}
`;
let links = [
  {
    id: 0,
    url: "www.howtographql.com",
    description: `Fullstack tutorial for GraphQL`
  },
  {
    id: 0,
    url: "32234.howtographql.com",
    description: `Fullstack tutorial for GraphQL`
  },
  {
    id: 0,
    url: "sadfasfa2234.howtographql.com",
    description: `Fullstack tutorial for GraphQL`
  }
];
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Link: {
    id: p => p.id,
    description: p => p.description,
    url: p => p.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`server is running on http://localhost:4000`));
