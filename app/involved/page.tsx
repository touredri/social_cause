const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero min-h-[30vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Get Involved</h1>
            <p className="py-6">Join us in making a difference.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <form className="max-w-md mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select a Cause</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Choose a cause
              </option>
              <option>Clean Water</option>
              <option>Education</option>
              <option>End Hunger</option>
              <option>Environment</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInvolved;
