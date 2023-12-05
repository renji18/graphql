import { gql, useQuery } from "@apollo/client"

const GET_TODOS_WITH_USERS = gql`
  query getTodos {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`

function App() {
  const { loading, data } = useQuery(GET_TODOS_WITH_USERS)
  console.log(data, "data")

  if (loading) return <h1>Loading...</h1>

  return <div className="App">{JSON.stringify(data)}</div>
}

export default App
