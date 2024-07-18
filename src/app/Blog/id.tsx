// src/app/Blog/[id].tsx

import { useRouter } from 'next/router';
import BlogPost from './[id]/page';

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <BlogPost id={id} />;
};

export default BlogPostPage;