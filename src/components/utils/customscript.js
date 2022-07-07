import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const url ="./js/init.js?ver=1.1";
    script.src = url;
    script.async = true;
    // const script1 = document.createElement('script');
    // const url1 ="./js/plugins.js";
    // script1.src = url1;
    // script1.async = true;

    document.body.appendChild(script);

    // document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script);
      // document.body.removeChild(script1);
    }
  }, []);
};

export default useScript;