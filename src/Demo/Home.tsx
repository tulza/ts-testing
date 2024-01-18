import NavigationBar from "./NavigationBar";
import Card from "@/Demo/Card";
import { posts } from "@/Demo/posts";
const Home = () => {
  return (
    <>
      <NavigationBar />
      <div>
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
