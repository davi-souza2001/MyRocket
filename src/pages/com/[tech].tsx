import { useRouter } from "next/router";


export default function Commun() {
  const router = useRouter();
  const comumSeach = router.query.tech;

  return (
    <>
      <div>{comumSeach}</div>
    </>
  )
}