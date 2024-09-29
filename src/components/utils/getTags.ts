import type { Post } from '../../types/post';

export async function getStaticPaths() {
  const matchedCareerPosts = import.meta.glob('../../pages/career/*.mdx', { eager: true });

  const careerPosts = Object.values(matchedCareerPosts) as Post[];

  const allPosts = [, ...careerPosts];

  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.frontmatter?.tags || [])));

  const paths = allTags.map((tag) => {
    const filteredCareerPosts = careerPosts.filter((post) => post.frontmatter?.tags?.includes(tag));

    const combinedPosts = [ ...filteredCareerPosts];

    return {
      params: { tag },
      props: {
        posts: combinedPosts.map((post) => ({
          ...post,
          image: post.frontmatter?.image,
        })),
      },
    };
  });
  return {
    paths,
    allTags,
  };
}
