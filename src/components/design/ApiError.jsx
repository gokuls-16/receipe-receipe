import React from "react";

function ApiError() {
  return (
    <section className="py-8">
      <div className="translate-y-1/2 max-w-md space-y-4">
        <h1 className="text-3xl font-bold"> Please try again tomorrow. </h1>
        <p className="text-2xl">
          Daily need to food
        </p>
      </div>
    </section>
  );
}

export default ApiError;
