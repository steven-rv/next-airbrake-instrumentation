export default function FailPage() {
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          throw new Error("Client Error");
        }}
      >
        Client Error
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      overlay: false,
    },
  };
}
