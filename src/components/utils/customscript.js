import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const url ="./js/init.js?ver=1.1";
    script.src = url;
    script.async = true;

    const script1 = document.createElement('script');
    const url1 ="./js/plugins.js";
    script1.src = url1;

    const script2 = document.createElement('script');
    const url2 ="./js/jquery.js";
    script2.src = url2;

    const twitter = document.createElement('script');
    const twitterUrl ="https://platform.twitter.com/widgets.js";
    twitter.src = twitterUrl;
    twitter.async = true;

    const substack = document.createElement('script');
    const substackUrl ="https://substackapi.com/widget.js";
    substack.src = substackUrl;
    substack.async = true;

    document.body.appendChild(script);

    // document.body.appendChild(script1);

    // document.body.appendChild(script2);

    document.body.appendChild(twitter);
    // document.body.appendChild(substack);

    return () => {
      document.body.removeChild(script);
      // document.body.removeChild(script1);
      // document.body.removeChild(script2);
      document.body.removeChild(twitter);
      // document.body.removeChild(substack);
    }
  }, []);
};

export default useScript;