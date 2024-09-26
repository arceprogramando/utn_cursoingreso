import type { Post } from '../../types/post';

export async function getStaticPaths() {
  const matchedAdmissionPosts = import.meta.glob('../../pages/admission/*.mdx', { eager: true });
  const matchedCareerPosts = import.meta.glob('../../pages/career/*.mdx', { eager: true });

  const admissionPosts = Object.values(matchedAdmissionPosts) as Post[];
  const careerPosts = Object.values(matchedCareerPosts) as Post[];

  const allPosts = [...admissionPosts, ...careerPosts];

  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.frontmatter?.tags || [])));

  const paths = allTags.map((tag) => {
    const filteredAdmissionPosts = admissionPosts.filter((post) => post.frontmatter?.tags?.includes(tag));
    const filteredCareerPosts = careerPosts.filter((post) => post.frontmatter?.tags?.includes(tag));

    const combinedPosts = [...filteredAdmissionPosts, ...filteredCareerPosts];

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
