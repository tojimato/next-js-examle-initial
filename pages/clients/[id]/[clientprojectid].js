import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
 
  console.log(router.query);
  return (
    <div>
      <h1>Client Project Page</h1>
    </div>
  );
}

export default ClientProjectPage;
