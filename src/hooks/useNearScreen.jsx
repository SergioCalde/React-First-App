import { useState, useEffect, useRef } from "react";

export default function useNearScreen({ distance = '50px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer = null;

    const fromElement = externalRef ? externalRef.current : fromRef.current

    if (!fromElement) return

    const onChange = (entries, observer) => {
      const el = entries[0];
      if(el.isIntersecting){
        setShow(true);
        once && observer.disconnect();
        //observer.unobserve(el);
      }else {
        !once && setShow(false);
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('react-intersection-observer')
    ).then(() => {
      
        observer = new IntersectionObserver(onChange, {
          rootMargin: distance
        })
  
      observer.observe(fromElement);
    })

    return () => observer && observer.disconnect();
    }, [distance, externalRef, once])

    return {isNearScreen, fromRef};
}