import { useRouter } from "next/router";

const ArticleBySlug = ({
  slug,
  encodedSlug,
}) => {
  return (
    <>
      <div>slug: {slug}</div>
      <div>encodedSlug: {encodedSlug}</div>
    </>
  );
}

export default ArticleBySlug

export const getServerSidePropsBySlug = async ({ params }) => {
  const router = useRouter();
  const { foo } = router.query;
  console.log('*** query', query)
  const slug = params?.slug;
  return {
    props: {
      slug,
      encodedSlug: encodeURIComponent(slug)
    }
  }
}

export const getServerSideProps = getServerSidePropsBySlug

