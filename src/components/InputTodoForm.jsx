import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function InputTodoForm() {
  const [userTodo, setUserTodo] = useState({text: "",content: ""});
//   console.log(...userTodo);
  
  const dispatch = useDispatch();

  const UserTodoValue = (event) => {
    const targetedValue = event.target;
    const { name, value } = targetedValue;
    setUserTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(userTodo));
    setUserTodo({
      text: "",
      content: "",
    });
  }
  return (
    <div className="mx-auto my-5 w-[30rem] bg-white rounded-xl p-4">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="text"
            value={userTodo.text}
            onChange={UserTodoValue}
            placeholder="Title"
            className="shadow_outline w-full border-none outline-none px-3 py-2 text-lg rounded-xl"
          />
        </div>
        <div>
          <textarea
            name="content"
            value={userTodo.content}
            onChange={UserTodoValue}
            id=""
            placeholder="Write something..."
            className="my-6 shadow_outline w-full border-none outline-none px-3 py-2 text-lg rounded-xl"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="capitalize px-4 py-2 rounded-xl cursor-pointer bg-slate-600 text-white"
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodoForm;