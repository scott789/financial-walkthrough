import BasicAppBar from "../components/BasicAppBar";

function ErrorPage() {
  return (
    <div className="container">
      <BasicAppBar />
      <div className="d-flex justify-content-center">
        <p>404 Not Found</p>
      </div>
    </div>
  );
}

export default ErrorPage;
