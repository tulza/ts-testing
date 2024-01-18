import NavigationBar from "@components/NavigationBar";
import Card from "@components/Card";
import { posts } from "@/data/posts";
const Home = () => {
  return (
    <>
      <div>
        <NavigationBar className="mb-4" />
        <div className="mx-4 flex flex-col gap-4">
          {posts.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
