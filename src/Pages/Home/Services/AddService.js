import React from "react";

const AddService = () => {
  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const teamMember = form.teamMember.value;
    const exploringTime = form.exploringTime.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const titleImg = form.titleImg.value;
    const description = form.description.value;
    const service = {
      category,
      teamMember,
      exploringTime,
      rating,
      price,
      titleImg,
      description,
    };
    console.log(service);
    fetch("https://gmb-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
        }
        console.log(data);
      });
  };
  return (
    <div className="py-6">
      <h2 className="text-4xl font-bold text-center">Add Your Service</h2>
      <form onSubmit={handleService} className="py-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            name="category"
            placeholder="Category Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="teamMember"
            placeholder="Team member"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="exploringTime"
            placeholder="Exploring Time"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="titleImg"
            placeholder="Title Image"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <input
          type="text"
          name="description"
          placeholder="description"
          className="textarea textarea-bordered w-full mt-2"
          required
        />
        <button
          className="btn btn-outline btn-primary mx-auto block mt-4"
          type="submit"
        >
          Submit service
        </button>
      </form>
    </div>
  );
};

export default AddService;
