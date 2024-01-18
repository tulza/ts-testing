import { Post } from "@/entities/post";

type CardProps = {
  post: Post;
};

const Card = ({ post }: CardProps) => {
  return (
    <div className="relative mb-4 w-[400px] rounded-lg bg-element px-4 pb-4">
      {/* <div className="absolute right-0 m-4 grid aspect-square w-8 place-content-center rounded-full shadow-xl shadow-black ">
        {post.id}
      </div> */}
      <p className="mb-4 text-2xl font-bold">{post.title}</p>
      <p className="text-text2">{post.content}</p>
    </div>
  );
};

export default Card;
