import { gql, useQuery } from "@apollo/client"

export default function ExampleTinyFrontend() {
  const { data } = useQuery(gql`query {messages {id, applications, title, content,  published, startingDate}}`)
  return (
    <>
      <h1 className="text-xl">
        {JSON.stringify(data)}
      </h1>
    </>
  )
}
