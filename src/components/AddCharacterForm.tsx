import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCharacter } from "../store/characterSlice";

const AddCharacterForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    mass: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newCharacter = {
          ...formData,
          image: reader.result as string,
          url: "", // Add this line
        };
        console.log("newCharacter", newCharacter);
        dispatch(addCharacter(newCharacter));
        setFormData({ name: "", height: "", mass: "" });
        setImage(null);
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Character</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block mb-2">
          Height (cm):
        </label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mass" className="block mb-2">
          Mass (kg):
        </label>
        <input
          type="number"
          id="mass"
          name="mass"
          value={formData.mass}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">
          Image:
        </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Character
      </button>
    </form>
  );
};

export default AddCharacterForm;
