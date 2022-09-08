export default function FailPage() {
  return <div>FAILPAGE</div>;
}

export async function getServerSideProps() {
  throw new Error("Server Error");
}
