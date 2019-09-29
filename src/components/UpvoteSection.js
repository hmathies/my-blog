import React, {useRef} from 'react';

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
  const btnRef = useRef(null);
  const upvoteArticle = async () => {

    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    });

    btnRef.current.setAttribute("disabled", "disabled");
    const body = await result.json();
    setArticleInfo(body);
  }

  return (
    <div id="upvotes-section">
      <button ref={btnRef} onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>

  );
};
export default UpvotesSection;
