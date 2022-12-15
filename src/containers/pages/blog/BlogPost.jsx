// import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";

function BlogPost({ get_blog, post }) {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    get_blog(slug);
  }, [get_blog, slug]);

  return <FullWidthLayout>BlogPost</FullWidthLayout>;
}

const mapStateToProps = (state) => ({
  post: state.blog.post,
});

export default connect(mapStateToProps, {
  get_blog,
})(BlogPost);
