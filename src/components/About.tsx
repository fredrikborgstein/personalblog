export default function About() {
  return (
    <div
      className="mt-40 xl:mt-24 flex flex-col justify-center text-center"
      style={{ height: "80vh" }}
    >
      <div id="about-section-title" className="text-xl 2xl:text-3xl">
        About
      </div>
      <div>
        <div className="mx-4">
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-96 h-84 mx-auto mt-10 shadow-md rounded-lg"
            alt=""
          />
        </div>
        <div className="mx-4 pb-10">
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            provident dicta natus fugiat explicabo, distinctio ducimus nostrum
            non sapiente? Vitae repellat doloremque cumque deserunt dolor eum
            ipsum, inventore dignissimos nihil?
          </p>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            sapiente dolorem, quos quo, cum sed repellat minus provident dolor
            maxime ab ea sit? Esse aperiam recusandae pariatur sint sit
            perspiciatis!
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            rerum voluptate provident delectus sequi molestias culpa voluptatem
            maiores suscipit ducimus ut id, commodi tenetur nisi! A culpa sint
            porro voluptatem?
          </p>
        </div>
      </div>
    </div>
  );
}
