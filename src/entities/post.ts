type PostProps = {
  id: number;
  title: string;
  content: string;
};

export class Post {
  id: number;
  title: string;
  content: string;

  constructor({ id, title, content }: PostProps) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
