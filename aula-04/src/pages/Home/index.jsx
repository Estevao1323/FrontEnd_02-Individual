import { useParams } from "react-router-dom";

export default function Home() {
  const { user } = useParams();
  // console.log("PARAMS: ", user)
  // console.log(typeof user)
  return (
    <>
      <h1>Home</h1>
      <h2>{user == undefined ? "Mensagem Genérica" : user}</h2>

      {/*  <h2>{user == undefined ? "Mensagem Genérica" : user}</h2> */}
    </>
  );
}
