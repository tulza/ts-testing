import { Post } from "@components/entities/entityPost";

type CardProps = {
  post: Post;
};

/**
 * @param post an EntityPost
 */
const Card = ({ post }: CardProps) => {
  return (
    <div className="relative w-[400px] rounded-lg bg-element px-4 pb-4">
      <p className="mb-4 text-2xl font-bold">{post.title}</p>
      <p className="text-text2">{post.content}</p>
    </div>
  );
};

export default Card;
